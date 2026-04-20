import { NextResponse } from 'next/server';
import { validatePassword } from '@/lib/auth';

/**
 * POST /api/auth/login
 * Validate a password and return authentication status
 * Body: { password: string }
 */
export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { password } = body;

        if (!password) {
            return NextResponse.json(
                { error: 'Password is required' },
                { status: 400 }
            );
        }

        const { valid, role } = validatePassword(password);

        if (!valid) {
            return NextResponse.json(
                { error: 'Mot de passe incorrect' },
                { status: 403 }
            );
        }

        const response = NextResponse.json(
            { success: true, role },
            { status: 200 }
        );

        // Set the password as a secure HttpOnly cookie
        // The password is used as the authentication token
        response.cookies.set('auth_token', password, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 24 * 60 * 60, // 24 hours
            path: '/',
        });

        return response;
    } catch (error) {
        console.error('POST /api/auth/login error:', error);
        return NextResponse.json(
            { error: 'Erreur lors de la connexion' },
            { status: 500 }
        );
    }
}
