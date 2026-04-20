/**
 * Authentication utilities for verifying passwords and determining user role
 */

export type AuthRole = 'admin' | 'user' | null;

/**
 * Validate a password against environment variables
 * @param password The password to validate
 * @returns Object containing validity and role
 */
export function validatePassword(password: string): { valid: boolean; role: AuthRole } {
    if (!password) {
        return { valid: false, role: null };
    }

    const adminPassword = process.env.ADMIN_PASSWORD;
    const userPassword = process.env.USER_PASSWORD;

    if (password === adminPassword) {
        return { valid: true, role: 'admin' };
    }

    if (password === userPassword) {
        return { valid: true, role: 'user' };
    }

    return { valid: false, role: null };
}

/**
 * Extract password from Authentication header
 * @param authHeader The Authorization header value
 * @returns The password if present, null otherwise
 */
export function extractPasswordFromHeader(authHeader: string | null): string | null {
    if (!authHeader) return null;

    // Expected format: "Bearer <password>"
    const parts = authHeader.split(' ');
    if (parts.length === 2 && parts[0] === 'Bearer') {
        return parts[1];
    }

    return null;
}

/**
 * Check if a role has permission for a given method
 * @param role The user's role
 * @param method The HTTP method
 * @returns True if the role has permission
 */
export function hasMethodPermission(role: AuthRole, method: string): boolean {
    if (!role) return false;

    if (role === 'admin') {
        // Admin can do everything
        return ['GET', 'POST', 'PUT', 'DELETE'].includes(method);
    }

    if (role === 'user') {
        // User can GET and POST
        return ['GET', 'POST'].includes(method);
    }

    return false;
}
