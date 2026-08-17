import { NextResponse } from 'next/server';
import pb from '@/lib/pocketbaseClient';
import { verifyAdminSession } from '@/lib/adminAuth';

// Server-side memory store
let memoryBookings = [
    {
        id: 'booking_sample_01',
        name: 'Sravanthi Rao',
        phone: '+91 98765 43210',
        city: 'Gachibowli, Hyderabad',
        address: 'Flat 402, My Home Bhooja',
        product: 'Balcony Cloth Hangers',
        service: 'new_installation',
        deposit_amount: 999,
        preferred_date: '2026-08-18',
        notes: 'Ceiling height 10 ft',
        created: '2026-08-17T01:00:00.000Z',
    },
    {
        id: 'booking_sample_02',
        name: 'Vikram Chandra',
        phone: '+91 91234 56789',
        city: 'Financial District, Hyderabad',
        address: 'Tower 3, Aparna Sarovar',
        product: 'Invisible Balcony Grills',
        service: 'new_installation',
        deposit_amount: 1500,
        preferred_date: '2026-08-19',
        notes: 'Need 2-inch child-safe spacing',
        created: '2026-08-16T18:30:00.000Z',
    }
];

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
        let bookings = [];

        if (pb) {
            try {
                const records = await pb.collection('bookings').getFullList({
                    sort: '-created',
                });
                if (records && records.length > 0) {
                    bookings = records;
                }
            } catch (pbErr) {
                // Fallback to memory store if PocketBase daemon isn't running
            }
        }

        if (bookings.length === 0) {
            bookings = memoryBookings;
        }

        return NextResponse.json({
            success: true,
            total: bookings.length,
            bookings,
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

        let pbRecord = null;
        if (pb) {
            try {
                pbRecord = await pb.collection('bookings').create({
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
            } catch (pbErr) {
                // Keep local record fallback
            }
        }

        const newRecord = pbRecord || {
            id: `booking_${Date.now()}`,
            name: body.name,
            phone: body.phone,
            city: body.city || 'Hyderabad',
            address: body.address || '',
            product: body.product || 'Balcony Solution',
            deposit_amount: Number(body.deposit_amount) || 0,
            preferred_date: body.preferred_date || '',
            notes: body.notes || '',
            created: new Date().toISOString(),
        };

        memoryBookings.unshift(newRecord);

        return NextResponse.json({
            success: true,
            message: 'Booking received successfully',
            booking: {
                id: newRecord.id,
                name: newRecord.name,
                product: newRecord.product,
                deposit_amount: newRecord.deposit_amount,
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
