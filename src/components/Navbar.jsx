'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, MessageCircle, ArrowRight } from 'lucide-react';
import { PHONE_NUMBER_RAW, PHONE_NUMBER, getWhatsAppLink } from '@/data/products';

export default function Navbar() {
    return (
        <header className="sticky top-0 z-40 border-b border-border/80 bg-background/90 backdrop-blur-md transition-all">
            <div className="mx-auto flex w-full max-w-[80rem] items-center justify-between gap-4 px-4 sm:px-6 py-3.5">
                {/* Brand Logo */}
                <Link href="/" className="font-display text-xl sm:text-2xl font-extrabold tracking-tight flex items-center gap-1 group">
                    <span className="text-foreground transition group-hover:text-primary">
                        tap<span className="text-primary font-black">.</span>to easy
                    </span>
                    <span className="hidden sm:inline-block text-[10px] uppercase font-bold tracking-widest text-primary bg-primary/10 px-2 py-0.5 rounded-full ml-1.5">
                        Hyderabad
                    </span>
                </Link>

                {/* Nav Links */}
                <nav className="hidden items-center gap-8 text-sm font-semibold text-muted-foreground md:flex">
                    <Link href="/#products" className="transition hover:text-primary">
                        Services
                    </Link>
                    <Link href="/#why" className="transition hover:text-primary">
                        Why Choose Us
                    </Link>
                    <Link href="/#process" className="transition hover:text-primary">
                        2-Hour Process
                    </Link>
                    <Link href="/#reviews" className="transition hover:text-primary">
                        Reviews
                    </Link>
                </nav>

                {/* Contact CTA Buttons */}
                <div className="flex items-center gap-2 sm:gap-3">
                    {/* WhatsApp Button */}
                    <a
                        href={getWhatsAppLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex min-h-[40px] items-center gap-1.5 rounded-full border border-emerald-600/30 bg-emerald-50 px-3 sm:px-4 text-xs sm:text-sm font-semibold text-emerald-700 hover:bg-emerald-100 transition active:scale-[0.98]"
                    >
                        <MessageCircle className="h-4 w-4 fill-emerald-600 text-emerald-600" />
                        <span className="hidden sm:inline">WhatsApp</span>
                        <span className="sm:hidden">Chat</span>
                    </a>

                    {/* Direct Call Button */}
                    <a
                        href={`tel:${PHONE_NUMBER_RAW}`}
                        className="flex min-h-[40px] items-center gap-1.5 rounded-full bg-primary px-3.5 sm:px-5 text-xs sm:text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary/90 active:scale-[0.98]"
                    >
                        <Phone className="h-4 w-4" />
                        <span className="hidden sm:inline">{PHONE_NUMBER}</span>
                        <span className="sm:hidden">Call</span>
                    </a>
                </div>
            </div>
        </header>
    );
}
