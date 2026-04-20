import { NextResponse } from 'next/server';
import { sql } from '@/lib/db';

interface ActivityProposal {
    id: number;
    proposed_by: string;
    activity: string;
    date: string;
    status: string | null;
    timestamp: string;
}

/**
 * GET /api/activities/[id]
 * Retrieve a single activity by ID
 */
export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id: idParam } = await params;
        const id = parseInt(idParam, 10);

        if (isNaN(id)) {
            return NextResponse.json(
                { error: 'ID invalide' },
                { status: 400 }
            );
        }

        const [activity] = (await sql`
      SELECT id, proposed_by, activity, date, status, (timestamp AT TIME ZONE 'UTC')::text as timestamp
      FROM activities
      WHERE id = ${id}
    `) as ActivityProposal[];

        if (!activity) {
            return NextResponse.json(
                { error: 'Activité non trouvée' },
                { status: 404 }
            );
        }

        return NextResponse.json(activity);
    } catch (error) {
        console.error(`GET /api/activities/[id] error:`, error);
        return NextResponse.json(
            { error: 'Erreur lors de la récupération de l\'activité' },
            { status: 500 }
        );
    }
}

/**
 * PUT /api/activities/[id]
 * Update an activity by ID
 * Body: { proposed_by?, activity?, date?, status? }
 */
export async function PUT(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id: idParam } = await params;
        const id = parseInt(idParam, 10);

        if (isNaN(id)) {
            return NextResponse.json(
                { error: 'ID invalide' },
                { status: 400 }
            );
        }

        const body = await request.json();
        const { proposed_by, activity, date, status } = body;

        // Check if activity exists
        const [existingActivity] = (await sql`
      SELECT id FROM activities WHERE id = ${id}
    `) as { id: number }[];

        if (!existingActivity) {
            return NextResponse.json(
                { error: 'Activité non trouvée' },
                { status: 404 }
            );
        }

        // Validate status if provided
        if (status !== undefined) {
            const validStatuses = ['pending', 'accepted', 'rejected'];
            if (!validStatuses.includes(status)) {
                return NextResponse.json(
                    { error: `Status invalide. Valeurs acceptées: ${validStatuses.join(', ')}` },
                    { status: 400 }
                );
            }
        }

        // Validate date if provided
        if (date !== undefined) {
            const dateObj = new Date(date);
            if (isNaN(dateObj.getTime())) {
                return NextResponse.json(
                    { error: 'Format de date invalide' },
                    { status: 400 }
                );
            }
        }

        // Since we can't build dynamic SQL with neon, fetch, update, and return
        const [currentActivity] = (await sql`
      SELECT id, proposed_by, activity, date, status, (timestamp AT TIME ZONE 'UTC')::text as timestamp
      FROM activities
      WHERE id = ${id}
    `) as ActivityProposal[];

        const updatedData = {
            proposed_by: proposed_by !== undefined ? proposed_by : currentActivity.proposed_by,
            activity: activity !== undefined ? activity : currentActivity.activity,
            date: date !== undefined ? new Date(date).toISOString() : currentActivity.date,
            status: status !== undefined ? status : currentActivity.status,
        };

        const [updatedActivity] = (await sql`
      UPDATE activities
      SET proposed_by = ${updatedData.proposed_by},
          activity = ${updatedData.activity},
          date = ${updatedData.date},
          status = ${updatedData.status},
          timestamp = NOW()
      WHERE id = ${id}
      RETURNING id, proposed_by, activity, date, status, (timestamp AT TIME ZONE 'UTC')::text as timestamp
    `) as ActivityProposal[];

        return NextResponse.json(updatedActivity);
    } catch (error) {
        console.error(`PUT /api/activities/[id] error:`, error);
        return NextResponse.json(
            { error: 'Erreur lors de la mise à jour de l\'activité' },
            { status: 500 }
        );
    }
}

/**
 * DELETE /api/activities/[id]
 * Delete an activity by ID
 */
export async function DELETE(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id: idParam } = await params;
        const id = parseInt(idParam, 10);

        if (isNaN(id)) {
            return NextResponse.json(
                { error: 'ID invalide' },
                { status: 400 }
            );
        }

        const [deletedActivity] = (await sql`
      DELETE FROM activities
      WHERE id = ${id}
      RETURNING id, proposed_by, activity, date, status, (timestamp AT TIME ZONE 'UTC')::text as timestamp
    `) as ActivityProposal[];

        if (!deletedActivity) {
            return NextResponse.json(
                { error: 'Activité non trouvée' },
                { status: 404 }
            );
        }

        return NextResponse.json(
            { message: 'Activité supprimée avec succès', activity: deletedActivity }
        );
    } catch (error) {
        console.error(`DELETE /api/activities/[id] error:`, error);
        return NextResponse.json(
            { error: 'Erreur lors de la suppression de l\'activité' },
            { status: 500 }
        );
    }
}
