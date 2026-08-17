import { NextResponse } from 'next/server';
import { ADMIN_PASSWORD, ADMIN_SECRET } from '@/lib/adminAuth';

export async function POST(request) {
    try {
        const { password } = await request.json();

        if (!password || password !== ADMIN_PASSWORD) {
            return NextResponse.json(
                { error: 'Invalid admin credentials' },
                { status: 401 }
            );
        }

        const response = NextResponse.json({
            success: true,
            message: 'Authenticated successfully',
            token: ADMIN_SECRET,
        });

        // Set secure httpOnly cookie
        response.cookies.set({
            name: 'admin_session',
            value: ADMIN_SECRET,
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            path: '/',
            maxAge: 60 * 60 * 24 * 7, // 7 days
        });

        return response;
    } catch (error) {
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
