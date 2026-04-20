import { NextResponse } from 'next/server';
import { sql } from '@/lib/db';
import { validatePassword, extractPasswordFromHeader, hasMethodPermission } from '@/lib/auth';

interface ActivityProposal {
    id: number;
    proposed_by: string;
    activity: string;
    date: string;
    status: string | null;
    timestamp: string;
}

/**
 * Middleware to check authentication
 */
function checkAuth(request: Request) {
    const authHeader = request.headers.get('Authorization');
    const password = extractPasswordFromHeader(authHeader);

    if (!password) {
        return { valid: false, role: null };
    }

    return validatePassword(password);
}

/**
 * GET /api/activities
 * Retrieve all activities, optionally filtered by status
 * Query params: ?status=pending|accepted|rejected
 * Auth: USER or ADMIN password required
 */
export async function GET(request: Request) {
    try {
        const { valid, role } = checkAuth(request);

        if (!valid || !hasMethodPermission(role, 'GET')) {
            return NextResponse.json(
                { error: 'Authentication required or permission denied' },
                { status: 403 }
            );
        }

        const { searchParams } = new URL(request.url);
        const status = searchParams.get('status');

        let activities: ActivityProposal[];

        if (status) {
            activities = (await sql`
        SELECT id, proposed_by, activity, date, status, (timestamp AT TIME ZONE 'UTC')::text as timestamp
        FROM activities
        WHERE status = ${status}
        ORDER BY timestamp DESC
      `) as ActivityProposal[];
        } else {
            activities = (await sql`
        SELECT id, proposed_by, activity, date, status, (timestamp AT TIME ZONE 'UTC')::text as timestamp
        FROM activities
        ORDER BY timestamp DESC
      `) as ActivityProposal[];
        }

        return NextResponse.json(activities);
    } catch (error) {
        return NextResponse.json(
            { error: 'Erreur lors de la récupération des activités' },
            { status: 500 }
        );
    }
}

/**
 * POST /api/activities
 * Create a new activity proposal
 * Body: { proposed_by: string, activity: string, date: string (ISO date) }
 * Auth: USER or ADMIN password required
 */
export async function POST(request: Request) {
    try {
        const { valid, role } = checkAuth(request);

        if (!valid || !hasMethodPermission(role, 'POST')) {
            return NextResponse.json(
                { error: 'Authentication required or permission denied' },
                { status: 403 }
            );
        }

        const body = await request.json();
        const { proposed_by, activity, date } = body;

        if (!proposed_by?.trim() || !activity?.trim() || !date) {
            return NextResponse.json(
                { error: 'Tous les champs sont requis: proposed_by, activity, date' },
                { status: 400 }
            );
        }

        // Parse the date to ensure it's valid
        const dateObj = new Date(date);
        if (isNaN(dateObj.getTime())) {
            return NextResponse.json(
                { error: 'Format de date invalide' },
                { status: 400 }
            );
        }

        const [createdActivity] = (await sql`
      INSERT INTO activities (proposed_by, activity, date, status, timestamp)
      VALUES (${proposed_by}, ${activity}, ${dateObj.toISOString()}, 'pending', NOW())
      RETURNING id, proposed_by, activity, date, status, (timestamp AT TIME ZONE 'UTC')::text as timestamp
    `) as ActivityProposal[];

        return NextResponse.json(createdActivity, { status: 201 });
    } catch (error) {
        console.error('POST /api/activities error:', error);
        return NextResponse.json(
            { error: 'Erreur lors de la création de l\'activité' },
            { status: 500 }
        );
    }
}
