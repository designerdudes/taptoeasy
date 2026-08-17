import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Phone } from 'lucide-react';

function SuccessPage() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-background px-5 py-20 text-foreground">
            <Helmet>
                <title>Booking Confirmed | Tap to Easy</title>
                <meta name="description" content="Your installation deposit is confirmed. Our Hyderabad crew will call you within 2 working hours." />
                <meta name="robots" content="noindex" />
            </Helmet>
            <div className="w-full max-w-lg rounded-3xl border border-border bg-card p-8 text-center shadow-[0_24px_60px_-30px_rgba(12,74,86,0.55)] sm:p-12">
                <CheckCircle2 className="mx-auto h-14 w-14 text-primary" strokeWidth={1.5} />
                <h1 className="font-display mt-5 text-3xl font-bold">Deposit received — booking confirmed!</h1>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Thank you for booking with Tap to Easy. Our Hyderabad scheduling desk will call you within 2 working hours to confirm your measurement visit and installation slot.
                </p>
                <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                    <Link
                        to="/"
                        className="flex min-h-[48px] items-center gap-2 rounded-full bg-accent px-7 text-base font-bold text-accent-foreground transition active:scale-[0.98]"
                    >
                        Back to home <ArrowRight className="h-4 w-4" />
                    </Link>
                    <a
                        href="tel:+919000012345"
                        className="flex min-h-[48px] items-center gap-2 rounded-full border border-border px-7 text-base font-semibold transition hover:bg-secondary active:scale-[0.98]"
                    >
                        <Phone className="h-4 w-4" /> 90000 12345
                    </a>
                </div>
            </div>
        </div>
    );
}

export default SuccessPage;
