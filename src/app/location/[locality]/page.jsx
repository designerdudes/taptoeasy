import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
    ArrowRight,
    ArrowLeft,
    CheckCircle2,
    Clock,
    MapPin,
    Phone,
    Ruler,
    ShieldCheck,
    Sparkles,
    Star,
    Wind,
    Grid3x3,
    Layers,
    DoorOpen,
    Zap,
    MessageCircle,
    Building2,
    Check,
} from 'lucide-react';
import Reveal from '@/components/Reveal';
import BookingForm from '@/components/BookingForm';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { LOCATIONS, getLocation } from '@/data/locations';
import { PRODUCTS, HERO_IMG, PHONE_NUMBER, PHONE_NUMBER_RAW, getWhatsAppLink } from '@/data/products';

const ICONS = { Wind, Grid3x3, Layers, DoorOpen, Sparkles };

export async function generateStaticParams() {
    return LOCATIONS.map((loc) => ({
        locality: loc.slug,
    }));
}

export async function generateMetadata({ params }) {
    const loc = getLocation(params.locality);
    if (!loc) {
        return {
            title: 'Location Not Found',
        };
    }

    return {
        title: `${loc.headline} | Tap to Easy`,
        description: loc.metaDescription,
        keywords: [
            `balcony cloth hangers ${loc.name.toLowerCase()} hyderabad`,
            `invisible safety grills ${loc.name.toLowerCase()} hyderabad`,
            `ceiling cloth drying hanger ${loc.name.toLowerCase()}`,
            `mosquito mesh doors ${loc.name.toLowerCase()}`,
            `shoe racks ${loc.name.toLowerCase()} hyderabad`,
            ...loc.communities.map((c) => `${c.toLowerCase()} balcony cloth hanger`),
        ],
        alternates: {
            canonical: `https://taptoeasy.com/location/${loc.slug}`,
        },
        openGraph: {
            title: `${loc.headline} | Tap to Easy`,
            description: loc.metaDescription,
            url: `https://taptoeasy.com/location/${loc.slug}`,
            images: [
                {
                    url: HERO_IMG,
                    width: 1200,
                    height: 630,
                    alt: `Balcony installation in ${loc.name} Hyderabad`,
                },
            ],
        },
    };
}

export default function LocalityLandingPage({ params }) {
    const loc = getLocation(params.locality);

    if (!loc) {
        notFound();
    }

    return (
        <div className="flex flex-col">
            {/* Localized Schema Markup for Google Local SEO & Ads */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'HomeAndConstructionBusiness',
                        name: `Tap to Easy Balcony Installation - ${loc.name}`,
                        image: HERO_IMG,
                        url: `https://taptoeasy.com/location/${loc.slug}`,
                        telephone: '+91-90000-12345',
                        priceRange: 'Free Consultation',
                        areaServed: `${loc.name}, Hyderabad, Telangana, India`,
                        description: loc.metaDescription,
                        address: {
                            '@type': 'PostalAddress',
                            addressLocality: loc.name,
                            addressRegion: 'Hyderabad, Telangana',
                            addressCountry: 'IN',
                        },
                    }),
                }}
            />
            {loc.faq && loc.faq.length > 0 && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'FAQPage',
                            mainEntity: loc.faq.map((f) => ({
                                '@type': 'Question',
                                name: f.q,
                                acceptedAnswer: { '@type': 'Answer', text: f.a },
                            })),
                        }),
                    }}
                />
            )}

            {/* HERO SECTION FOR LOCALITY */}
            <section className="relative overflow-hidden bg-gradient-to-b from-primary/10 via-background to-background py-12 lg:py-20">
                <div className="pointer-events-none absolute -right-32 -top-24 h-[32rem] w-[32rem] rounded-full bg-primary/15 blur-3xl" />

                <div className="mx-auto grid w-full max-w-[80rem] items-start gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]">
                    <div>
                        {/* Locality Breadcrumb / Badge */}
                        <div className="flex flex-wrap items-center gap-2">
                            <Link href="/" className="text-xs font-semibold text-muted-foreground hover:text-primary transition flex items-center gap-1">
                                <ArrowLeft className="h-3.5 w-3.5" /> Home
                            </Link>
                            <span className="text-muted-foreground/40">/</span>
                            <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                                <MapPin className="h-3.5 w-3.5" /> Serving {loc.name}, Hyderabad
                            </span>
                        </div>

                        {/* High-Intent Localized Headline */}
                        <h1 className="font-display mt-6 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.1] tracking-tight text-foreground">
                            {loc.headline}
                        </h1>

                        <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                            {loc.subheadline}
                        </p>

                        {/* Localized Gated Communities Tag Strip */}
                        {loc.communities && loc.communities.length > 0 && (
                            <div className="mt-5 rounded-2xl bg-card border border-border p-4 shadow-sm">
                                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                                    <Building2 className="h-4 w-4 text-primary" /> Popular Gated Communities Served in {loc.name}:
                                </p>
                                <div className="mt-2.5 flex flex-wrap gap-1.5">
                                    {loc.communities.map((c) => (
                                        <span key={c} className="rounded-lg bg-secondary px-2.5 py-1 text-xs font-semibold text-foreground">
                                            {c}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Fast Response & Quality Badges */}
                        <div className="mt-6 flex flex-wrap gap-2.5">
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 border border-primary/20 px-3 py-1 text-xs font-bold text-primary">
                                <Clock className="h-3.5 w-3.5" /> Doorstep Arrival: {loc.deliveryTime}
                            </span>
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-600/20 px-3 py-1 text-xs font-bold text-emerald-700">
                                <ShieldCheck className="h-3.5 w-3.5" /> Genuine Jindal Stainless Steel
                            </span>
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-600/20 px-3 py-1 text-xs font-bold text-emerald-700">
                                <Check className="h-3.5 w-3.5" /> Warranty upto 3–7 Years
                            </span>
                        </div>

                        {/* Action Buttons */}
                        <div className="mt-8 flex flex-wrap items-center gap-3.5">
                            <a
                                href="#book"
                                className="flex min-h-[48px] items-center gap-2 rounded-full bg-primary px-7 text-sm sm:text-base font-bold text-primary-foreground shadow-lg shadow-primary/25 transition hover:bg-primary/90 active:scale-[0.98]"
                            >
                                Book Free Visit in {loc.name} <ArrowRight className="h-4 w-4" />
                            </a>

                            <a
                                href={getWhatsAppLink(loc.name)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex min-h-[48px] items-center gap-2 rounded-full border border-emerald-600/30 bg-emerald-50 px-6 text-sm sm:text-base font-bold text-emerald-700 hover:bg-emerald-100 transition active:scale-[0.98]"
                            >
                                <MessageCircle className="h-4 w-4 fill-emerald-600 text-emerald-600" /> WhatsApp Booking
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Free Booking Form */}
                    <div id="book" className="scroll-mt-24">
                        <BookingForm product={{ name: `Balcony Service (${loc.name})` }} />
                    </div>
                </div>
            </section>

            {/* SERVICES IN THIS LOCALITY */}
            <section className="py-16 lg:py-24 border-b border-border bg-secondary/30">
                <div className="mx-auto w-full max-w-[80rem] px-4 sm:px-6">
                    <Reveal>
                        <div className="max-w-2xl">
                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Available in {loc.name}</span>
                            <h2 className="font-display mt-2 text-3xl font-bold sm:text-4xl text-foreground">
                                Balcony Upgrades Fitted at Your {loc.name} Home
                            </h2>
                            <p className="mt-3 text-base text-muted-foreground">
                                All solutions are fabricated with high-tensile Jindal Stainless Steel and fitted by our in-house certified crew.
                            </p>
                        </div>
                    </Reveal>

                    <div className="mt-10 grid gap-6 md:grid-cols-2">
                        {PRODUCTS.map((p, i) => {
                            const Icon = ICONS[p.icon] ?? Sparkles;
                            return (
                                <Reveal key={p.slug} delay={i * 0.08}>
                                    <div className="flex h-full flex-col justify-between rounded-3xl border border-border bg-card p-6 shadow-sm">
                                        <div>
                                            <div className="flex items-center justify-between">
                                                <span className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${p.accent} text-white shadow-md`}>
                                                    <Icon className="h-6 w-6" strokeWidth={1.6} />
                                                </span>
                                                <span className="rounded-full bg-emerald-50 border border-emerald-600/20 px-3 py-0.5 text-xs font-bold text-emerald-700">
                                                    Free Sizing Visit
                                                </span>
                                            </div>
                                            <h3 className="font-display mt-4 text-xl font-bold text-foreground">
                                                {p.name} in {loc.name}
                                            </h3>
                                            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.heroSub}</p>
                                            
                                            <div className="mt-4 flex flex-wrap gap-2 text-xs font-medium text-foreground">
                                                <span className="rounded-md bg-secondary px-2.5 py-1">Jindal Stainless Steel</span>
                                                <span className="rounded-md bg-secondary px-2.5 py-1">{p.warranty}</span>
                                                <span className="rounded-md bg-secondary px-2.5 py-1">4-Hour Fitting</span>
                                            </div>
                                        </div>

                                        <div className="mt-6 border-t border-border pt-4 flex items-center justify-between">
                                            <Link
                                                href={`/products/${p.slug}`}
                                                className="text-xs font-bold text-primary hover:underline flex items-center gap-1"
                                            >
                                                View Full Specs →
                                            </Link>
                                            <a
                                                href="#book"
                                                className="rounded-full bg-primary px-4 py-2 text-xs font-bold text-primary-foreground hover:bg-primary/90 transition"
                                            >
                                                Book Free Visit
                                            </a>
                                        </div>
                                    </div>
                                </Reveal>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* LOCALITY FAQS */}
            {loc.faq && loc.faq.length > 0 && (
                <section className="py-16 border-b border-border bg-background">
                    <div className="mx-auto w-full max-w-[50rem] px-4 sm:px-6">
                        <Reveal>
                            <div className="text-center">
                                <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Local Questions</span>
                                <h2 className="font-display mt-2 text-3xl font-bold sm:text-4xl text-foreground">
                                    {loc.name} Balcony Installation FAQs
                                </h2>
                            </div>
                        </Reveal>

                        <div className="mt-10">
                            <Accordion type="single" collapsible className="w-full space-y-3">
                                {loc.faq.map((f, i) => (
                                    <AccordionItem key={i} value={`loc-faq-${i}`} className="rounded-2xl border border-border bg-card px-5">
                                        <AccordionTrigger className="text-base font-bold text-foreground hover:no-underline hover:text-primary">
                                            {f.q}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                                            {f.a}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    </div>
                </section>
            )}

            {/* OTHER HYDERABAD LOCALITIES */}
            <section className="py-14 bg-secondary/40 border-b border-border">
                <div className="mx-auto w-full max-w-[80rem] px-4 sm:px-6">
                    <h3 className="font-display text-xl font-bold text-foreground">
                        Other Hyderabad Service Localities
                    </h3>
                    <p className="mt-1 text-xs text-muted-foreground">
                        We offer same-day doorstep measurement and fitting across all Hyderabad areas:
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                        {LOCATIONS.filter((l) => l.slug !== loc.slug).map((l) => (
                            <Link
                                key={l.slug}
                                href={`/location/${l.slug}`}
                                className="rounded-xl border border-border bg-card px-3.5 py-1.5 text-xs font-semibold text-foreground hover:border-primary hover:text-primary transition shadow-sm"
                            >
                                {l.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* MOBILE STICKY BOOKING BAR */}
            <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 p-3 backdrop-blur-md lg:hidden shadow-lg">
                <div className="flex items-center gap-2">
                    <a
                        href="#book"
                        className="flex flex-1 min-h-[44px] items-center justify-center gap-1.5 rounded-full bg-primary px-4 text-xs font-bold text-primary-foreground shadow-sm active:scale-[0.98]"
                    >
                        Book Free in {loc.name} <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                    <a
                        href={getWhatsAppLink(loc.name)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex min-h-[44px] items-center justify-center gap-1.5 rounded-full bg-emerald-500 px-4 text-xs font-bold text-white shadow-sm active:scale-[0.98]"
                    >
                        <MessageCircle className="h-4 w-4 fill-white" /> WhatsApp
                    </a>
                </div>
            </div>
        </div>
    );
}
