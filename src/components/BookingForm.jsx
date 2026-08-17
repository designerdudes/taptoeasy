'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRight, Loader2, ShieldCheck, Zap, CheckCircle2, MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '@/data/products';

const fieldClass =
    'w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 placeholder:text-muted-foreground/60 shadow-sm';

export default function BookingForm({ product }) {
    const router = useRouter();
    const [form, setForm] = useState({
        name: '',
        phone: '',
        locality: '',
        address: '',
        preferred_date: '',
        notes: '',
    });
    const [status, setStatus] = useState('idle');
    const [error, setError] = useState('');

    const update = (key) => (e) => setForm((prev) => ({ ...prev, [key]: e.target.value }));

    const submit = async (e) => {
        e.preventDefault();
        if (status === 'loading') return;
        setStatus('loading');
        setError('');

        try {
            const res = await fetch('/api/bookings', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: form.name,
                    phone: form.phone,
                    city: form.locality ? `${form.locality}, Hyderabad` : 'Hyderabad',
                    address: form.address,
                    service: 'new_installation',
                    model: 'not_sure',
                    product: product.name,
                    preferred_date: form.preferred_date,
                    notes: form.notes,
                }),
            });

            if (!res.ok) {
                const data = await res.json().catch(() => ({}));
                console.warn('Booking API response status:', data);
            }

            router.push(`/success?product=${encodeURIComponent(product.name)}&name=${encodeURIComponent(form.name)}`);
        } catch (err) {
            console.error('Booking submission error:', err);
            setStatus('idle');
            setError('Could not submit booking automatically. Please call or WhatsApp us on 90000 12345.');
        }
    };

    if (status === 'loading') {
        return (
            <div className="rounded-3xl border border-border bg-card p-8 shadow-[0_24px_60px_-30px_rgba(37,99,235,0.3)] text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                    <Loader2 className="h-8 w-8 animate-spin text-primary" strokeWidth={2} />
                </div>
                <h3 className="font-display mt-5 text-2xl font-bold text-foreground">Confirming Your Booking…</h3>
                <p className="mt-2 text-sm text-muted-foreground max-w-sm mx-auto">
                    Registering your free measurement visit and assigning a technician in Hyderabad.
                </p>
            </div>
        );
    }

    return (
        <form
            onSubmit={submit}
            className="rounded-3xl border border-border bg-card p-6 shadow-[0_24px_60px_-30px_rgba(37,99,235,0.25)] sm:p-8 relative overflow-hidden"
        >
            {/* Header Badge */}
            <div className="flex items-center justify-between gap-2">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-primary">
                    <Zap className="h-3.5 w-3.5" /> Same-Day Slots Available
                </div>
                <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
                    <CheckCircle2 className="h-3.5 w-3.5" /> 100% Free Site Visit
                </span>
            </div>

            <h3 className="font-display mt-3 text-2xl font-bold leading-tight sm:text-3xl text-foreground">
                Book Free Site Visit & Sizing
            </h3>
            <p className="mt-1.5 text-sm text-muted-foreground">
                Our technician visits your flat, takes exact measurements, and explains Jindal steel specifications.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                    <label htmlFor="bf-name" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Full Name *
                    </label>
                    <input
                        id="bf-name"
                        required
                        value={form.name}
                        onChange={update('name')}
                        className={fieldClass}
                        placeholder="e.g. Sravanthi Rao"
                    />
                </div>

                <div className="flex flex-col gap-1.5">
                    <label htmlFor="bf-phone" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Mobile Number *
                    </label>
                    <input
                        id="bf-phone"
                        required
                        type="tel"
                        inputMode="tel"
                        value={form.phone}
                        onChange={update('phone')}
                        className={fieldClass}
                        placeholder="e.g. 98765 43210"
                    />
                </div>

                <div className="flex flex-col gap-1.5">
                    <label htmlFor="bf-locality" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Locality in Hyderabad *
                    </label>
                    <input
                        id="bf-locality"
                        required
                        value={form.locality}
                        onChange={update('locality')}
                        className={fieldClass}
                        placeholder="e.g. Gachibowli, Miyapur, Kondapur"
                    />
                </div>

                <div className="flex flex-col gap-1.5">
                    <label htmlFor="bf-date" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Preferred Installation Date
                    </label>
                    <input
                        id="bf-date"
                        type="date"
                        value={form.preferred_date}
                        onChange={update('preferred_date')}
                        className={fieldClass}
                    />
                </div>

                <div className="flex flex-col gap-1.5 sm:col-span-2">
                    <label htmlFor="bf-address" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Apartment / Flat Address *
                    </label>
                    <input
                        id="bf-address"
                        required
                        value={form.address}
                        onChange={update('address')}
                        className={fieldClass}
                        placeholder="Flat 402, Tower B, My Home Bhooja, Hyderabad"
                    />
                </div>

                <div className="flex flex-col gap-1.5 sm:col-span-2">
                    <label htmlFor="bf-notes" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Balcony Details (Optional)
                    </label>
                    <textarea
                        id="bf-notes"
                        rows={2}
                        value={form.notes}
                        onChange={update('notes')}
                        className={fieldClass}
                        placeholder="e.g. 10 ft ceiling height, 2 balconies needing measurement"
                    />
                </div>
            </div>

            {error ? (
                <div className="mt-4 rounded-xl bg-destructive/10 p-3 text-xs font-medium text-destructive">
                    {error}
                </div>
            ) : null}

            {/* Primary Submit Button */}
            <button
                type="submit"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-base font-bold text-primary-foreground shadow-lg shadow-primary/25 transition duration-200 hover:bg-primary/90 active:scale-[0.98]"
            >
                Confirm Free Booking Slot <ArrowRight className="h-5 w-5" />
            </button>

            {/* WhatsApp Alternative Action */}
            <div className="mt-4 pt-4 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-xs text-muted-foreground flex items-center gap-1.5">
                    <ShieldCheck className="h-4 w-4 text-primary" /> Genuine Jindal Steel • 3–7 Yrs Warranty
                </span>

                <a
                    href={getWhatsAppLink(product.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 hover:text-emerald-700 transition"
                >
                    <MessageCircle className="h-4 w-4 fill-emerald-600" /> Book on WhatsApp Instead →
                </a>
            </div>
        </form>
    );
}
