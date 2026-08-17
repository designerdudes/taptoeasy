import Link from 'next/link';
import { ArrowLeft, Home } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="flex min-h-[70vh] flex-col items-center justify-center px-5 text-center">
            <span className="rounded-full bg-accent/15 px-4 py-1 text-xs font-bold uppercase tracking-widest text-accent">
                Error 404
            </span>
            <h1 className="font-display mt-4 text-4xl font-extrabold text-foreground sm:text-5xl">
                Page Not Found
            </h1>
            <p className="mt-3 max-w-md text-sm text-muted-foreground">
                The balcony service page or link you are looking for might have been moved or updated.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Link
                    href="/"
                    className="flex min-h-[46px] items-center gap-2 rounded-full bg-primary px-7 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary/90"
                >
                    <Home className="h-4 w-4" /> Go to Homepage
                </Link>
                <Link
                    href="/#products"
                    className="flex min-h-[46px] items-center gap-2 rounded-full border border-border bg-card px-7 text-sm font-semibold text-foreground transition hover:bg-secondary"
                >
                    View All Services <ArrowLeft className="h-4 w-4 rotate-180" />
                </Link>
            </div>
        </div>
    );
}
