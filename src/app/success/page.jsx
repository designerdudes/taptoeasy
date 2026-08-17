'use client';

import React, { Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { CheckCircle2, ArrowRight, Phone, ShieldCheck, Clock, MessageCircle } from 'lucide-react';
import Confetti from '@/components/Confetti';
import { PHONE_NUMBER, PHONE_NUMBER_RAW, getWhatsAppLink } from '@/data/products';

function SuccessContent() {
    const searchParams = useSearchParams();
    const product = searchParams.get('product') || 'Balcony Solution';
    const name = searchParams.get('name') || '';

    return (
        <div className="flex min-h-[80vh] items-center justify-center px-4 sm:px-6 py-16">
            <Confetti />

            <div className="w-full max-w-lg rounded-3xl border border-border bg-card p-7 sm:p-10 text-center shadow-[0_24px_60px_-30px_rgba(37,99,235,0.35)]">
                {/* Success Icon */}
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                    <CheckCircle2 className="h-12 w-12" strokeWidth={1.75} />
                </div>

                <span className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-600/20 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-700">
                    Free Sizing Visit Reserved
                </span>

                <h1 className="font-display mt-3 text-3xl font-extrabold text-foreground sm:text-4xl">
                    Booking Confirmed!
                </h1>

                {name && (
                    <p className="mt-1 text-sm font-semibold text-primary">
                        Thank you, {name}
                    </p>
                )}

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Your free site measurement request for <strong className="text-foreground">{product}</strong> in Hyderabad is received. Our scheduling coordinator will call you within <strong className="text-foreground">2 working hours</strong> to confirm technician arrival.
                </p>

                {/* Assurance Box */}
                <div className="mt-6 rounded-2xl bg-secondary/50 p-4 text-left text-xs space-y-2.5 border border-border">
                    <div className="flex items-center justify-between">
                        <span className="text-muted-foreground flex items-center gap-1.5">
                            <ShieldCheck className="h-4 w-4 text-emerald-600" /> Material Quality:
                        </span>
                        <span className="font-bold text-foreground">Genuine Jindal Stainless Steel</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-muted-foreground flex items-center gap-1.5">
                            <Clock className="h-4 w-4 text-primary" /> Warranty Coverage:
                        </span>
                        <span className="font-bold text-foreground">3 to 7 Years Warranty</span>
                    </div>
                </div>

                {/* CTA Buttons */}
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                        href={getWhatsAppLink(product)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex min-h-[46px] w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-emerald-500 px-6 text-sm font-bold text-white shadow-md transition hover:bg-emerald-600 active:scale-[0.98]"
                    >
                        <MessageCircle className="h-4 w-4 fill-white" /> Connect on WhatsApp
                    </a>

                    <Link
                        href="/"
                        className="flex min-h-[46px] w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-bold text-primary-foreground shadow-sm transition hover:bg-primary/90 active:scale-[0.98]"
                    >
                        Back to Home <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default function SuccessPage() {
    return (
        <Suspense fallback={
            <div className="flex min-h-[70vh] items-center justify-center">
                <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
            </div>
        }>
            <SuccessContent />
        </Suspense>
    );
}
