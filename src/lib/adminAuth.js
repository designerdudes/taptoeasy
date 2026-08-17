import { cookies } from 'next/headers';

const ADMIN_SECRET = process.env.ADMIN_SECRET_TOKEN || 'tte_secret_session_key_9000012345';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'taptoeasy@admin2026';

export function verifyAdminSession(request) {
    // 1. Check Authorization Bearer header
    const authHeader = request?.headers?.get('authorization');
    if (authHeader && authHeader.startsWith('Bearer ')) {
        const token = authHeader.substring(7);
        if (token === ADMIN_SECRET) {
            return true;
        }
    }

    // 2. Check httpOnly cookie
    try {
        const cookieStore = cookies();
        const sessionCookie = cookieStore.get('admin_session');
        if (sessionCookie && sessionCookie.value === ADMIN_SECRET) {
            return true;
        }
    } catch (e) {
        // Fallback for non-header contexts
    }

    return false;
}

export { ADMIN_PASSWORD, ADMIN_SECRET };
