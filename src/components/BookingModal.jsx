'use client';

import React, { useEffect, useCallback } from 'react';
import { X } from 'lucide-react';
import BookingForm from './BookingForm';

/**
 * BookingModal — slides up from the bottom on mobile, centres on desktop.
 * Usage: <BookingModal product={product} isOpen={isOpen} onClose={() => setIsOpen(false)} />
 */
export default function BookingModal({ product, isOpen, onClose }) {
    // Close on Escape key
    const handleKeyDown = useCallback(
        (e) => {
            if (e.key === 'Escape') onClose();
        },
        [onClose]
    );

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('keydown', handleKeyDown);
            // Prevent background scroll
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = '';
        };
    }, [isOpen, handleKeyDown]);

    if (!isOpen) return null;

    return (
        /* Backdrop */
        <div
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center"
            role="dialog"
            aria-modal="true"
            aria-label="Book Free Measurement Visit"
        >
            {/* Dim overlay — click to close */}
            <div
                className="absolute inset-0 bg-foreground/50 backdrop-blur-sm"
                onClick={onClose}
                aria-hidden="true"
            />

            {/* Panel */}
            <div
                className="relative z-10 w-full max-w-xl max-h-[92dvh] overflow-y-auto rounded-t-3xl sm:rounded-3xl shadow-2xl animate-in slide-in-from-bottom-4 sm:zoom-in-95 duration-300"
                style={{ animationFillMode: 'both' }}
            >
                {/* Close button */}
                <button
                    onClick={onClose}
                    aria-label="Close booking form"
                    className="absolute right-4 top-4 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-secondary/80 text-muted-foreground transition hover:bg-secondary hover:text-foreground"
                >
                    <X className="h-4 w-4" />
                </button>

                {/* The existing BookingForm — styled as card already */}
                <BookingForm product={product} onSuccess={onClose} />
            </div>
        </div>
    );
}
