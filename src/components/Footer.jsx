'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, MapPin, Mail, Clock, ShieldCheck, MessageCircle, CheckCircle2 } from 'lucide-react';
import { PRODUCTS, PHONE_NUMBER, PHONE_NUMBER_RAW, getWhatsAppLink } from '@/data/products';
import { LOCATIONS } from '@/data/locations';

export default function Footer() {
    return (
        <footer className="border-t border-border bg-card text-card-foreground">
            <div className="mx-auto grid w-full max-w-[80rem] gap-10 px-4 sm:px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">
                {/* Col 1: Brand Info */}
                <div className="space-y-4">
                    <Link href="/" className="font-display text-xl font-extrabold tracking-tight flex items-center gap-1">
                        tap<span className="text-primary font-black">.</span>to easy
                    </Link>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                        Hyderabad’s #1 dedicated balcony upgrade & installation specialists. Trained in-house crew, genuine Jindal Stainless Steel materials, free measurement visits, and multi-year warranties.
                    </p>
                    <div className="flex items-center gap-2 text-xs font-semibold text-primary">
                        <ShieldCheck className="h-4 w-4" /> 100% In-House Uniformed Crew
                    </div>
                </div>

                {/* Col 2: Services */}
                <div>
                    <p className="font-display text-sm font-bold uppercase tracking-wider text-foreground">Our Services</p>
                    <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
                        {PRODUCTS.map((p) => (
                            <li key={p.slug}>
                                <Link href={`/products/${p.slug}`} className="transition hover:text-primary flex items-center gap-1.5">
                                    <span className="text-primary/70">›</span> {p.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Col 3: Hyderabad Service Areas */}
                <div>
                    <p className="font-display text-sm font-bold uppercase tracking-wider text-foreground">Hyderabad Localities</p>
                    <p className="mt-4 text-xs text-muted-foreground leading-relaxed">
                        Free doorstep measurement across all major Hyderabad areas:
                    </p>
                    <div className="mt-3 flex flex-wrap gap-1.5 text-xs text-muted-foreground">
                        {LOCATIONS.slice(0, 10).map((loc) => (
                            <Link
                                key={loc.slug}
                                href={`/location/${loc.slug}`}
                                className="rounded-md bg-secondary px-2 py-1 text-[11px] font-medium hover:text-primary transition"
                            >
                                {loc.name}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Col 4: Contact & WhatsApp */}
                <div>
                    <p className="font-display text-sm font-bold uppercase tracking-wider text-foreground">Quick Booking & Chat</p>
                    <div className="mt-4 space-y-3 text-sm text-muted-foreground">
                        <a
                            href={getWhatsAppLink()}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2.5 font-bold text-emerald-600 transition hover:text-emerald-700"
                        >
                            <MessageCircle className="h-4 w-4 fill-emerald-600" /> WhatsApp: 90000 12345
                        </a>
                        <a
                            href={`tel:${PHONE_NUMBER_RAW}`}
                            className="flex items-center gap-2.5 font-semibold text-foreground transition hover:text-primary"
                        >
                            <Phone className="h-4 w-4 text-primary" /> Call: {PHONE_NUMBER}
                        </a>
                        <p className="flex items-center gap-2.5">
                            <Mail className="h-4 w-4 text-primary" /> care@taptoeasy.com
                        </p>
                        <p className="flex items-center gap-2.5">
                            <Clock className="h-4 w-4 text-primary" /> Mon–Sat: 8:00 AM – 8:00 PM
                        </p>
                        <p className="flex items-center gap-2.5">
                            <MapPin className="h-4 w-4 text-primary" /> Hyderabad & Secunderabad
                        </p>
                    </div>
                </div>
            </div>

            <div className="border-t border-border/80 bg-background/50 px-4 sm:px-6 py-6">
                <div className="mx-auto flex w-full max-w-[80rem] flex-col items-center justify-between gap-3 text-xs text-muted-foreground sm:flex-row">
                    <p>© {new Date().getFullYear()} Tap to Easy Home Solutions Pvt Ltd. All rights reserved.</p>
                    <div className="flex items-center gap-4 sm:gap-6 font-medium text-foreground/80">
                        <span className="flex items-center gap-1"><CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" /> Free Measurement Visit</span>
                        <span>•</span>
                        <span>Jindal Stainless Steel</span>
                        <span>•</span>
                        <span>Warranty upto 3–7 Years</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
