import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
    ArrowRight,
    ArrowLeft,
    CheckCircle2,
    Clock,
    Droplets,
    Eye,
    FoldVertical,
    Grid2x2,
    Grid3x3,
    Hand,
    Home,
    Layers,
    MapPin,
    Phone,
    Ruler,
    ShieldCheck,
    Sparkles,
    Star,
    Wind,
    DoorOpen,
    Zap,
    MessageCircle,
    Check,
    HelpCircle,
} from 'lucide-react';
import Reveal from '@/components/Reveal';
import BookingForm from '@/components/BookingForm';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { PRODUCTS, getProduct, PHONE_NUMBER, PHONE_NUMBER_RAW, getWhatsAppLink } from '@/data/products';
import { LOCATIONS } from '@/data/locations';

const ICONS = {
    ShieldCheck,
    Wind,
    Ruler,
    Home,
    Grid3x3,
    Eye,
    Droplets,
    Layers,
    FoldVertical,
    DoorOpen,
    Grid2x2,
    Hand,
    Clock,
    Zap,
};

const PROCESS = [
    { icon: 'Phone', title: 'Book Free Sizing Visit', text: 'Pick a date online or on WhatsApp. We confirm your slot within 2 working hours.' },
    { icon: 'Ruler', title: 'Free Measurement Visit', text: 'Our technician visits your home with sample Jindal steel rails/meshes and confirms sizing.' },
    { icon: 'Wind', title: 'Clean 2-Hour Installation', text: 'Core-drilled anchors, dust sheets down, debris carried away. Zero mess left behind.' },
    { icon: 'ShieldCheck', title: 'Load Test & Warranty', text: 'We load-test together, register your 3–7 years warranty on-site, and ensure total satisfaction.' },
];

export async function generateStaticParams() {
    return PRODUCTS.map((product) => ({
        slug: product.slug,
    }));
}

export async function generateMetadata({ params }) {
    const product = getProduct(params.slug);
    if (!product) {
        return {
            title: 'Service Not Found',
        };
    }

    return {
        title: `${product.name} in Hyderabad | Jindal Stainless Steel | Free Site Visit`,
        description: `Best ${product.name.toLowerCase()} in Hyderabad installed in 2 hours. ${product.heroSub} Official ${product.warranty}. Free doorstep measurement visit.`,
        keywords: [
            `${product.name.toLowerCase()} hyderabad`,
            `jindal stainless steel ${product.name.toLowerCase()}`,
            `best ${product.name.toLowerCase()} hyderabad`,
            `${product.slug.replace(/-/g, ' ')} installation hyderabad`,
            `ceiling cloth hanger for balcony hyderabad`,
            `invisible safety grills for balcony hyderabad`,
            `balcony cloth drying pulley hanger`,
            `${product.name.toLowerCase()} gachibowli miyapur kukatpally kondapur`,
            'tap to easy balcony solutions hyderabad',
        ],
        alternates: {
            canonical: `https://taptoeasy.com/products/${product.slug}`,
        },
        openGraph: {
            title: `${product.name} in Hyderabad | Tap to Easy`,
            description: `${product.name} installed in 2 hours across Hyderabad. ${product.warranty}. Free doorstep measurement.`,
            url: `https://taptoeasy.com/products/${product.slug}`,
            images: [
                {
                    url: product.image,
                    width: 1200,
                    height: 630,
                    alt: `${product.name} Installation Hyderabad`,
                },
            ],
        },
    };
}

export default function ProductLandingPage({ params }) {
    const product = getProduct(params.slug);

    if (!product) {
        notFound();
    }

    const HeroIcon = ICONS[product.icon] ?? Sparkles;

    return (
        <div className="flex flex-col">
            {/* Rich Schema markup for Google SERP rankings */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Product',
                        name: `${product.name} - Tap to Easy Hyderabad`,
                        image: product.image,
                        description: product.heroSub,
                        brand: {
                            '@type': 'Brand',
                            name: 'Tap to Easy / Jindal Stainless Steel',
                        },
                        aggregateRating: {
                            '@type': 'AggregateRating',
                            ratingValue: product.stats.rating,
                            reviewCount: '3200',
                        },
                        offers: {
                            '@type': 'Offer',
                            price: '0',
                            priceCurrency: 'INR',
                            availability: 'https://schema.org/InStock',
                            priceValidUntil: '2028-12-31',
                            description: 'Free site measurement and consultation visit in Hyderabad',
                        },
                    }),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'FAQPage',
                        mainEntity: product.faqs.map((f) => ({
                            '@type': 'Question',
                            name: f.q,
                            acceptedAnswer: { '@type': 'Answer', text: f.a },
                        })),
                    }),
                }}
            />

            {/* HERO SECTION */}
            <section className="relative overflow-hidden bg-gradient-to-b from-primary/10 via-background to-background py-12 lg:py-20">
                <div className={`pointer-events-none absolute -right-32 -top-24 h-[32rem] w-[32rem] rounded-full bg-gradient-to-br ${product.accent} opacity-15 blur-3xl`} />

                <div className="mx-auto grid w-full max-w-[80rem] items-start gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr]">
                    {/* Left Column: Product Info */}
                    <div>
                        <div className="flex flex-wrap items-center gap-2">
                            <Link href="/#products" className="inline-flex items-center gap-1 text-xs font-semibold text-muted-foreground hover:text-primary transition">
                                <ArrowLeft className="h-3.5 w-3.5" /> All Services
                            </Link>
                            <span className="text-muted-foreground/40">/</span>
                            <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                                <Clock className="h-3 w-3" /> {product.hook}
                            </span>
                            {product.bestSeller && (
                                <span className="inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary-foreground shadow-sm">
                                    <Sparkles className="h-3 w-3" /> {product.tagline}
                                </span>
                            )}
                        </div>

                        <h1 className="font-display mt-6 text-3xl sm:text-5xl font-extrabold leading-[1.08] tracking-tight text-foreground">
                            {product.heroTitle}
                        </h1>

                        <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                            {product.heroSub}
                        </p>

                        {/* Badges */}
                        <div className="mt-6 flex flex-wrap gap-2.5">
                            {['Jindal Stainless Steel', 'Free Sizing Visit', product.warranty].map((usp) => (
                                <span key={usp} className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-600/20 px-3 py-1 text-xs font-semibold text-emerald-700">
                                    <Check className="h-3.5 w-3.5 text-emerald-600" /> {usp}
                                </span>
                            ))}
                        </div>

                        {/* Action Buttons */}
                        <div className="mt-8 flex flex-wrap items-center gap-3.5">
                            <a
                                href="#book"
                                className="flex min-h-[48px] items-center gap-2 rounded-full bg-primary px-7 text-sm sm:text-base font-bold text-primary-foreground shadow-lg shadow-primary/25 transition hover:bg-primary/90 active:scale-[0.98]"
                            >
                                Book Free Visit <ArrowRight className="h-4 w-4" />
                            </a>
                            
                            <a
                                href={getWhatsAppLink(product.name)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex min-h-[48px] items-center gap-2 rounded-full border border-emerald-600/30 bg-emerald-50 px-6 text-sm sm:text-base font-bold text-emerald-700 hover:bg-emerald-100 transition active:scale-[0.98]"
                            >
                                <MessageCircle className="h-4 w-4 fill-emerald-600 text-emerald-600" /> WhatsApp Booking
                            </a>
                        </div>

                        {/* Quick Stats */}
                        <dl className="mt-10 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-6">
                            <div>
                                <dt className="font-display text-2xl font-bold text-primary">{product.stats.customers}</dt>
                                <dd className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">Homes Fitted</dd>
                            </div>
                            <div>
                                <dt className="font-display text-2xl font-bold text-primary flex items-center gap-0.5">
                                    {product.stats.rating}<Star className="h-4 w-4 text-amber-500 fill-amber-500" />
                                </dt>
                                <dd className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">Avg Rating</dd>
                            </div>
                            <div>
                                <dt className="font-display text-2xl font-bold text-primary">{product.stats.installs}</dt>
                                <dd className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">Installation</dd>
                            </div>
                        </dl>

                        {/* Warranty Box */}
                        <div className="mt-8 hidden lg:flex items-center gap-4 rounded-2xl bg-gradient-to-br from-primary to-primary/80 p-5 text-primary-foreground shadow-md">
                            <HeroIcon className="h-10 w-10 shrink-0 text-cyan-300" strokeWidth={1.5} />
                            <div>
                                <p className="font-display text-base font-bold">{product.warranty}</p>
                                <p className="text-xs text-primary-foreground/80">Jindal Stainless Steel quality. Registered on-site upon completion.</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Free Booking Form */}
                    <div id="book" className="scroll-mt-24">
                        <BookingForm product={product} />
                    </div>
                </div>
            </section>

            {/* MARQUEE */}
            <div className="overflow-hidden border-y border-border bg-primary py-3 text-primary-foreground">
                <div className="tte-marquee flex w-max gap-10 whitespace-nowrap text-xs sm:text-sm font-semibold uppercase tracking-[0.2em]">
                    {[
                        'Installation within 2 hours',
                        'Hyderabad-wide service',
                        'Genuine Jindal Stainless Steel',
                        'Free measurement visit',
                        'Trained in-house crew',
                        'Warranty upto 3–7 Years',
                    ].map((item, i) => (
                        <span key={i} className="flex items-center gap-10">
                            {item} <span className="text-cyan-300">/</span>
                        </span>
                    ))}
                    {[
                        'Installation within 2 hours',
                        'Hyderabad-wide service',
                        'Genuine Jindal Stainless Steel',
                        'Free measurement visit',
                        'Trained in-house crew',
                        'Warranty upto 3–7 Years',
                    ].map((item, i) => (
                        <span key={`rep-${i}`} className="flex items-center gap-10">
                            {item} <span className="text-cyan-300">/</span>
                        </span>
                    ))}
                </div>
            </div>

            {/* TECHNICAL SPECIFICATIONS TABLE */}
            {product.specifications && (
                <section className="py-14 border-b border-border bg-card">
                    <div className="mx-auto w-full max-w-[80rem] px-4 sm:px-6">
                        <Reveal>
                            <div className="max-w-2xl">
                                <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Technical Details</span>
                                <h2 className="font-display mt-2 text-2xl sm:text-3xl font-bold text-foreground">
                                    {product.name} Engineering Specifications
                                </h2>
                            </div>
                        </Reveal>

                        <div className="mt-8 overflow-hidden rounded-2xl border border-border">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-secondary/60 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                                    <tr>
                                        <th className="px-5 py-3.5">Specification</th>
                                        <th className="px-5 py-3.5">Technical Details</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-border bg-card">
                                    {product.specifications.map((spec, i) => (
                                        <tr key={i} className="hover:bg-secondary/30 transition-colors">
                                            <td className="px-5 py-3.5 font-bold text-foreground sm:w-1/3">
                                                {spec.label}
                                            </td>
                                            <td className="px-5 py-3.5 text-muted-foreground">
                                                {spec.value}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            )}

            {/* BENEFITS SECTION */}
            <section id="benefits" className="scroll-mt-20 py-16 lg:py-24 border-b border-border bg-background">
                <div className="mx-auto w-full max-w-[80rem] px-4 sm:px-6">
                    <Reveal>
                        <div className="max-w-2xl">
                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Features & Benefits</span>
                            <h2 className="font-display mt-2 text-3xl font-bold sm:text-4xl text-foreground">
                                Engineered with Genuine Jindal Stainless Steel
                            </h2>
                            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                                Heavy-duty rust-resistant construction designed specifically for Hyderabad apartment balconies.
                            </p>
                        </div>
                    </Reveal>

                    <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {product.benefits.map((b, i) => {
                            const Icon = ICONS[b.icon] ?? Sparkles;
                            return (
                                <Reveal key={b.title} delay={i * 0.06}>
                                    <div className="flex h-full flex-col gap-3 rounded-3xl border border-border bg-card p-6 shadow-sm">
                                        <span className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${product.accent} text-white shadow-sm`}>
                                            <Icon className="h-6 w-6" strokeWidth={1.7} />
                                        </span>
                                        <h3 className="font-display mt-2 text-lg font-bold text-foreground">{b.title}</h3>
                                        <p className="text-sm leading-relaxed text-muted-foreground">{b.text}</p>
                                    </div>
                                </Reveal>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* WHY CHOOSE US */}
            <section id="why" className="scroll-mt-20 py-16 lg:py-24 border-b border-border bg-secondary/30">
                <div className="mx-auto grid w-full max-w-[80rem] gap-12 px-4 sm:px-6 lg:grid-cols-2">
                    <div className="lg:sticky lg:top-28 lg:self-start">
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Why Choose Us</span>
                        <h2 className="font-display mt-2 text-3xl font-bold sm:text-4xl text-foreground">
                            A crew you can trust in your home
                        </h2>
                        <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
                            We are not a lead-generation marketplace. Our own trained, uniformed fitters handle every installation across Hyderabad.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-2.5">
                            {['Background-verified crew', 'Same-week slots', 'Jindal Stainless Steel', product.warranty].map((t) => (
                                <span key={t} className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold text-foreground shadow-sm">
                                    <CheckCircle2 className="h-4 w-4 text-primary" /> {t}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="grid gap-4">
                        {product.whyChooseUs.map((w, i) => (
                            <Reveal key={w.title} delay={i * 0.06}>
                                <div className="flex gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm">
                                    <span className="font-display mt-0.5 text-base font-bold text-primary">0{i + 1}</span>
                                    <div>
                                        <h3 className="font-display text-lg font-bold text-foreground">{w.title}</h3>
                                        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{w.text}</p>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4-STEP PROCESS */}
            <section className="scroll-mt-20 py-16 lg:py-24 border-b border-border bg-background">
                <div className="mx-auto w-full max-w-[80rem] px-4 sm:px-6">
                    <Reveal>
                        <div className="max-w-2xl">
                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Installation Process</span>
                            <h2 className="font-display mt-2 text-3xl font-bold sm:text-4xl text-foreground">
                                From booking to handover in 2 hours
                            </h2>
                        </div>
                    </Reveal>

                    <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {PROCESS.map((step, i) => {
                            const Icon = ICONS[step.icon] ?? Sparkles;
                            return (
                                <Reveal key={step.title} delay={i * 0.06}>
                                    <li className="flex h-full flex-col rounded-3xl border border-border bg-card p-6 shadow-sm">
                                        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                                            <Icon className="h-5 w-5" strokeWidth={1.7} />
                                        </span>
                                        <h3 className="font-display mt-4 text-lg font-bold text-foreground">{step.title}</h3>
                                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
                                    </li>
                                </Reveal>
                            );
                        })}
                    </ol>
                </div>
            </section>

            {/* TESTIMONIALS */}
            <section id="reviews" className="scroll-mt-20 py-16 lg:py-24 border-b border-border bg-secondary/30">
                <div className="mx-auto w-full max-w-[80rem] px-4 sm:px-6">
                    <Reveal>
                        <div className="max-w-2xl">
                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Customer Reviews</span>
                            <h2 className="font-display mt-2 text-3xl font-bold sm:text-4xl text-foreground">
                                Loved by {product.stats.customers} Hyderabad homes
                            </h2>
                        </div>
                    </Reveal>

                    <div className="mt-10 grid gap-6 md:grid-cols-3">
                        {product.testimonials.map((t, i) => (
                            <Reveal key={t.name} delay={i * 0.06}>
                                <figure className="flex h-full flex-col justify-between rounded-3xl border border-border bg-card p-6 shadow-sm">
                                    <div>
                                        <div className="flex gap-1 text-amber-500">
                                            {Array.from({ length: 5 }).map((_, k) => (
                                                <Star key={k} className="h-4 w-4 fill-amber-500" />
                                            ))}
                                        </div>
                                        <blockquote className="mt-4 text-sm leading-relaxed text-foreground">“{t.text}”</blockquote>
                                    </div>
                                    <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                                        <span className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${product.accent} text-sm font-bold text-white`}>
                                            {t.name.split(' ').map((n) => n[0]).join('')}
                                        </span>
                                        <div>
                                            <p className="text-sm font-bold text-foreground">{t.name}</p>
                                            <p className="text-xs text-muted-foreground">{t.location}, Hyderabad</p>
                                        </div>
                                    </figcaption>
                                </figure>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* EXPANDED FAQS */}
            <section id="faq" className="scroll-mt-20 py-16 lg:py-24 border-b border-border bg-background">
                <div className="mx-auto w-full max-w-[52rem] px-4 sm:px-6">
                    <Reveal>
                        <div className="text-center">
                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Questions & Answers</span>
                            <h2 className="font-display mt-2 text-3xl font-bold sm:text-4xl text-foreground">
                                {product.name} FAQs (Hyderabad)
                            </h2>
                            <p className="mt-2 text-sm text-muted-foreground">
                                Everything you need to know about specifications, ceiling fittings, and warranties.
                            </p>
                        </div>
                    </Reveal>

                    <div className="mt-10">
                        <Accordion type="single" collapsible className="w-full space-y-3">
                            {product.faqs.map((f, i) => (
                                <AccordionItem key={i} value={`prod-faq-${i}`} className="rounded-2xl border border-border bg-card px-5">
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

                    <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                        <a
                            href="#book"
                            className="inline-flex min-h-[48px] items-center gap-2 rounded-full bg-primary px-8 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 transition hover:bg-primary/90 active:scale-[0.98]"
                        >
                            Book My Free Sizing Visit <ArrowRight className="h-4 w-4" />
                        </a>
                        <a
                            href={getWhatsAppLink(product.name)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex min-h-[48px] items-center gap-2 rounded-full border border-emerald-600/30 bg-emerald-50 px-6 text-sm font-bold text-emerald-700 hover:bg-emerald-100 transition active:scale-[0.98]"
                        >
                            <MessageCircle className="h-4 w-4 fill-emerald-600" /> WhatsApp Us
                        </a>
                    </div>
                </div>
            </section>

            {/* LOCALITY COVERAGE STRIP */}
            <section className="py-14 bg-secondary/40 border-b border-border">
                <div className="mx-auto w-full max-w-[80rem] px-4 sm:px-6">
                    <h3 className="font-display text-xl font-bold text-foreground">
                        Looking for {product.name} in a Specific Hyderabad Locality?
                    </h3>
                    <p className="mt-1 text-xs text-muted-foreground">
                        Same-day doorstep measurement available across all major Hyderabad areas:
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                        {LOCATIONS.map((l) => (
                            <Link
                                key={l.slug}
                                href={`/location/${l.slug}`}
                                className="rounded-xl border border-border bg-card px-3.5 py-1.5 text-xs font-semibold text-foreground hover:border-primary hover:text-primary transition shadow-sm"
                            >
                                {product.name} in {l.name}
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
                        Book Free Visit <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                    <a
                        href={getWhatsAppLink(product.name)}
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
