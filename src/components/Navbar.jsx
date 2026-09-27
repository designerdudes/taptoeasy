'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, MessageCircle, Menu, X } from 'lucide-react';
import { PHONE_NUMBER_RAW, PHONE_NUMBER, getWhatsAppLink } from '@/data/products';

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen((prev) => !prev);
    };

    return (
        <header className="sticky top-0 z-40 border-b border-border/80 bg-background/90 backdrop-blur-md transition-all">
            <div className="mx-auto flex w-full max-w-[80rem] items-center justify-between gap-4 px-4 sm:px-6 py-3.5">
                {/* Brand Logo */}
                <Link href="/" className="flex items-center gap-1 group shrink-0">
                    <Image
                        src="/tap-to-easy-logo.png"
                        alt="Tap to Easy Home Improvement Hyderabad"
                        width={160}
                        height={60}
                        className="h-10 w-auto object-contain transition group-hover:opacity-90"
                        priority
                    />
                </Link>

                {/* Desktop Nav Links */}
                <nav className="hidden items-center gap-8 text-sm font-semibold text-muted-foreground lg:flex">
                    <Link href="/#products" className="transition hover:text-primary">
                        Services
                    </Link>
                    <Link href="/#why" className="transition hover:text-primary">
                        Why Choose Us
                    </Link>
                    <Link href="/#process" className="transition hover:text-primary">
                        Installation Process
                    </Link>
                    <Link href="/#reviews" className="transition hover:text-primary">
                        Reviews
                    </Link>
                </nav>

                {/* Contact CTA Buttons & Mobile Toggle */}
                <div className="flex items-center gap-2 sm:gap-3">
                    {/* WhatsApp Button */}
                    <a
                        href={getWhatsAppLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden md:flex min-h-[40px] items-center gap-1.5 rounded-full border border-emerald-600/30 bg-emerald-50 px-3 sm:px-4 text-xs sm:text-sm font-semibold text-emerald-700 hover:bg-emerald-100 transition active:scale-[0.98]"
                    >
                        <MessageCircle className="h-4 w-4 fill-emerald-600 text-emerald-600" />
                        <span>WhatsApp</span>
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

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={toggleMobileMenu}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-secondary/50 lg:hidden text-foreground transition hover:bg-secondary"
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav Menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden border-t border-border bg-background px-4 py-4 shadow-lg absolute w-full left-0">
                    <nav className="flex flex-col gap-4 text-base font-semibold text-foreground">
                        <Link href="/#products" onClick={toggleMobileMenu} className="hover:text-primary transition py-2">
                            Services
                        </Link>
                        <Link href="/#why" onClick={toggleMobileMenu} className="hover:text-primary transition py-2">
                            Why Choose Us
                        </Link>
                        <Link href="/#process" onClick={toggleMobileMenu} className="hover:text-primary transition py-2">
                            Installation Process
                        </Link>
                        <Link href="/#reviews" onClick={toggleMobileMenu} className="hover:text-primary transition py-2">
                            Reviews
                        </Link>
                        <div className="h-px w-full bg-border my-2" />
                        <a
                            href={getWhatsAppLink()}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={toggleMobileMenu}
                            className="flex items-center gap-2 rounded-xl border border-emerald-600/30 bg-emerald-50 px-4 py-3 text-sm font-bold text-emerald-700"
                        >
                            <MessageCircle className="h-5 w-5 fill-emerald-600 text-emerald-600" /> WhatsApp Us
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
}
