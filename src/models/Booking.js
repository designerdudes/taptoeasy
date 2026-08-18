import mongoose from 'mongoose';

const BookingSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true },
    city: { type: String, default: 'Hyderabad' },
    address: { type: String, default: '' },
    service: { type: String, default: 'new_installation' },
    model: { type: String, default: 'not_sure' },
    product: { type: String, default: 'Balcony Solution' },
    deposit_amount: { type: Number, default: 0 },
    preferred_date: { type: String, default: '' },
    notes: { type: String, default: '' },
}, {
    timestamps: true, // Automatically adds createdAt and updatedAt
});

export default mongoose.models.Booking || mongoose.model('Booking', BookingSchema);
