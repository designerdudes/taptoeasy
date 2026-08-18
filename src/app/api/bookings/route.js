import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongoose';
import Booking from '@/models/Booking';
import { verifyAdminSession } from '@/lib/adminAuth';

// GET: STRICTLY PROTECTED - Only accessible with authenticated Admin session
export async function GET(request) {
    const isAuthorized = verifyAdminSession(request);

    if (!isAuthorized) {
        return NextResponse.json(
            { error: 'Unauthorized. Admin authentication required to access customer booking data.' },
            { status: 401 }
        );
    }

    try {
        await dbConnect();

        // Fetch all bookings sorted by newest first
        const bookings = await Booking.find({}).sort({ createdAt: -1 }).lean();

        // Map _id to id for frontend compatibility
        const mappedBookings = bookings.map(b => ({
            ...b,
            id: b._id.toString(),
            created: b.createdAt
        }));

        return NextResponse.json({
            success: true,
            total: mappedBookings.length,
            bookings: mappedBookings,
        });
    } catch (error) {
        console.error('API /bookings GET error:', error);
        return NextResponse.json(
            { error: 'Failed to retrieve bookings' },
            { status: 500 }
        );
    }
}

// POST: Public submission endpoint for customer bookings
export async function POST(request) {
    try {
        const body = await request.json();

        // Validate required fields
        if (!body.name || !body.phone) {
            return NextResponse.json(
                { error: 'Name and Phone number are required' },
                { status: 400 }
            );
        }

        await dbConnect();

        const newBooking = await Booking.create({
            name: body.name,
            phone: body.phone,
            city: body.city || 'Hyderabad',
            address: body.address || '',
            service: body.service || 'new_installation',
            model: body.model || 'not_sure',
            product: body.product || 'Balcony Solution',
            deposit_amount: Number(body.deposit_amount) || 0,
            preferred_date: body.preferred_date || '',
            notes: body.notes || '',
        });

        return NextResponse.json({
            success: true,
            message: 'Booking received successfully',
            booking: {
                id: newBooking._id.toString(),
                name: newBooking.name,
                product: newBooking.product,
                deposit_amount: newBooking.deposit_amount,
            },
        });
    } catch (error) {
        console.error('API /bookings POST error:', error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
