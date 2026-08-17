'use client';

import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { getWhatsAppLink } from '@/data/products';

export default function FloatingWhatsApp() {
    const [isVisible, setIsVisible] = useState(false);
    const [showTooltip, setShowTooltip] = useState(true);

    useEffect(() => {
        // Show after 1 second for smooth entrance
        const timer = setTimeout(() => setIsVisible(true), 800);
        return () => clearTimeout(timer);
    }, []);

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-6 right-5 z-50 flex flex-col items-end gap-2 group">
            {/* Helpful chat tooltip balloon */}
            {showTooltip && (
                <div className="relative mb-1 flex items-center gap-2 rounded-2xl bg-card border border-border px-3.5 py-2 text-xs font-semibold text-foreground shadow-xl animate-bounce">
                    <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
                    <span>Need instant help? <strong>Chat with us on WhatsApp</strong></span>
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setShowTooltip(false);
                        }}
                        className="ml-1 text-muted-foreground hover:text-foreground"
                    >
                        <X className="h-3 w-3" />
                    </button>
                </div>
            )}

            {/* Floating WhatsApp Button */}
            <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with Tap to Easy on WhatsApp"
                className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_25px_-5px_rgba(37,211,102,0.6)] transition-all duration-300 hover:scale-110 active:scale-95"
            >
                {/* Pulse ring effect */}
                <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-pulse-ring" />
                <MessageCircle className="h-7 w-7 fill-white text-white relative z-10" />
            </a>
        </div>
    );
}
