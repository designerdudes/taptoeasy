'use client';

import React, { useState } from 'react';
import { ArrowRight, MessageCircle, Phone } from 'lucide-react';
import BookingModal from './BookingModal';
import { getWhatsAppLink } from '@/data/products';

/**
 * ProductBookingCTA — client-side CTA buttons + booking modal.
 * Keeps the product page itself as a server component.
 *
 * Props:
 *  - product, phoneNumber, phoneNumberRaw — always required
 *  - buttonOnly    — renders just the "Book Free Measurement" button (no WhatsApp/call)
 *  - stickyMobile  — renders the mobile sticky bar layout (Book + WhatsApp side by side)
 *  - (default)     — renders full hero CTA block: Book + WhatsApp row, then Call row
 */
export default function ProductBookingCTA({ product, phoneNumber, phoneNumberRaw, buttonOnly, stickyMobile }) {
    const [modalOpen, setModalOpen] = useState(false);

    const bookBtn = (
        <button
            id="book-measurement-btn"
            onClick={() => setModalOpen(true)}
            className={
                stickyMobile
                    ? 'flex flex-1 min-h-[44px] items-center justify-center gap-1.5 rounded-full bg-primary px-4 text-xs font-bold text-primary-foreground shadow-sm active:scale-[0.98] transition'
                    : buttonOnly
                    ? 'inline-flex min-h-[44px] items-center gap-2 rounded-full bg-primary px-5 text-sm font-bold text-primary-foreground hover:bg-primary/90 transition active:scale-[0.98]'
                    : 'flex min-h-[50px] flex-1 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/25 transition hover:bg-primary/90 active:scale-[0.98]'
            }
        >
            Book Free Measurement <ArrowRight className={stickyMobile ? 'h-3.5 w-3.5' : 'h-4 w-4'} />
        </button>
    );

    return (
        <>
            {/* ── buttonOnly: just the Book button ── */}
            {buttonOnly && bookBtn}

            {/* ── stickyMobile: Book + WhatsApp side by side ── */}
            {stickyMobile && (
                <>
                    {bookBtn}
                    <a
                        href={getWhatsAppLink(product.name)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex min-h-[44px] items-center justify-center gap-1.5 rounded-full bg-emerald-500 px-4 text-xs font-bold text-white shadow-sm active:scale-[0.98] transition"
                    >
                        <MessageCircle className="h-4 w-4 fill-white" /> WhatsApp
                    </a>
                </>
            )}

            {/* ── default: full hero CTA block ── */}
            {!buttonOnly && !stickyMobile && (
                <>
                    <div className="flex flex-col gap-3 sm:flex-row">
                        {bookBtn}
                        <a
                            href={getWhatsAppLink(product.name)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex min-h-[50px] items-center justify-center gap-2 rounded-full border border-emerald-600/30 bg-emerald-50 px-6 text-sm font-bold text-emerald-700 hover:bg-emerald-100 transition active:scale-[0.98]"
                        >
                            <MessageCircle className="h-4 w-4 fill-emerald-600 text-emerald-600" /> WhatsApp Us
                        </a>
                    </div>
                    <a
                        href={`tel:${phoneNumberRaw}`}
                        className="flex min-h-[44px] items-center justify-center gap-2 rounded-full border border-border bg-background px-6 text-sm font-semibold text-foreground hover:border-primary/40 hover:bg-secondary/30 transition active:scale-[0.98]"
                    >
                        <Phone className="h-4 w-4 text-primary" /> {phoneNumber}
                    </a>
                </>
            )}

            {/* ── Modal (always rendered, controlled by state) ── */}
            <BookingModal
                product={product}
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
            />
        </>
    );
}
