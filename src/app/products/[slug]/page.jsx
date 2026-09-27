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
    Wrench,
    AlertCircle,
} from 'lucide-react';
import Reveal from '@/components/Reveal';
import BookingForm from '@/components/BookingForm';
import ProductImageGallery from '@/components/ProductImageGallery';
import ProductComparison from '@/components/ProductComparison';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import {
    PRODUCTS,
    PRODUCT_CATEGORIES,
    INSTALLATION_STEPS,
    getProduct,
    getRelatedProducts,
    PHONE_NUMBER,
    PHONE_NUMBER_RAW,
    getWhatsAppLink,
} from '@/data/products';
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
    Wrench,
    CheckCircle2,
    MapPin,
    Sparkles,
};

// Ceiling hanger slugs that show the comparison table
const CEILING_HANGER_SLUGS = [
    'premium-ceiling-hanger',
    'deluxe-ceiling-hanger',
    'normal-ceiling-hanger',
];

// Hanger slugs (ceiling + wall + beam) that show size selector hint
const ALL_HANGER_SLUGS = [
    ...CEILING_HANGER_SLUGS,
    'wall-mounted-hanger',
    'beam-mounted-hanger',
];

export async function generateStaticParams() {
    return PRODUCTS.map((product) => ({
        slug: product.slug,
    }));
}

export async function generateMetadata({ params }) {
    const product = getProduct(params.slug);
    if (!product) {
        return { title: 'Service Not Found' };
    }

    const ogImage = product.media?.[0]?.src || '';

    return {
        title: product.seo?.title || `${product.name} in Hyderabad | Tap to Easy`,
        description:
            product.seo?.description ||
            `${product.name} in Hyderabad. ${product.heroSub} Free doorstep measurement visit.`,
        keywords: product.seo?.keywords || [],
        alternates: {
            canonical: `https://taptoeasy.com/products/${product.slug}`,
        },
        openGraph: {
            title: product.seo?.title || `${product.name} in Hyderabad | Tap to Easy`,
            description: product.seo?.description || product.heroSub,
            url: `https://taptoeasy.com/products/${product.slug}`,
            images: ogImage
                ? [
                    {
                        url: ogImage,
                        width: product.media[0]?.width || 800,
                        height: product.media[0]?.height || 800,
                        alt: product.media[0]?.alt || `${product.name} — Tap to Easy Hyderabad`,
                    },
                ]
                : [],
        },
    };
}

export default function ProductLandingPage({ params }) {
    const product = getProduct(params.slug);

    if (!product) {
        notFound();
    }

    const relatedProducts = getRelatedProducts(product.slug);
    const isCeilingHanger = CEILING_HANGER_SLUGS.includes(product.slug);
    const isHanger = ALL_HANGER_SLUGS.includes(product.slug);
    const isRepair = product.slug === 'hanger-repair';

    // ── Structured Data ──────────────────────────────────────────────────────
    // Use Service schema — avoids fake price/offer/rating that Google would penalise.
    // FAQPage schema included separately for rich results.
    const serviceSchema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: product.name,
        description: product.heroSub,
        provider: {
            '@type': 'LocalBusiness',
            name: 'Tap to Easy',
            url: 'https://taptoeasy.com',
            telephone: PHONE_NUMBER_RAW,
            address: {
                '@type': 'PostalAddress',
                addressLocality: 'Hyderabad',
                addressRegion: 'Telangana',
                addressCountry: 'IN',
            },
        },
        areaServed: {
            '@type': 'City',
            name: 'Hyderabad',
        },
        serviceType: product.category,
    };

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: product.faqs.map((f) => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
    };

    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://taptoeasy.com' },
            { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://taptoeasy.com/#products' },
            { '@type': 'ListItem', position: 3, name: product.category, item: `https://taptoeasy.com/#products` },
            { '@type': 'ListItem', position: 4, name: product.name, item: `https://taptoeasy.com/products/${product.slug}` },
        ],
    };

    return (
        <div className="flex flex-col">
            {/* ── Structured Data ── */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

            {/* ═══════════════════════════════════════════════════════════════
                HERO — Amazon-style: Image LEFT, Product info RIGHT
            ═══════════════════════════════════════════════════════════════ */}
            <section className="relative overflow-hidden bg-gradient-to-b from-primary/8 via-background to-background py-10 lg:py-16">
                <div className={`pointer-events-none absolute -right-32 -top-24 h-[28rem] w-[28rem] rounded-full bg-gradient-to-br ${product.accent} opacity-10 blur-3xl`} />

                <div className="mx-auto w-full max-w-[80rem] px-4 sm:px-6">
                    {/* Breadcrumb */}
                    <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground">
                        <Link href="/" className="hover:text-primary transition">Home</Link>
                        <span>/</span>
                        <Link href="/#products" className="hover:text-primary transition">Services</Link>
                        <span>/</span>
                        <span className="text-foreground font-medium">{product.name}</span>
                    </nav>

                    <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16 items-start">

                        {/* ── LEFT: Product Image Gallery ── */}
                        <div className="lg:sticky lg:top-24 lg:self-start min-w-0">
                            <ProductImageGallery
                                media={product.media || []}
                                productName={product.name}
                            />
                        </div>

                        {/* ── RIGHT: Product Info + Booking ── */}
                        <div className="flex flex-col gap-6 min-w-0">
                            {/* Category + hook badges */}
                            <div className="flex flex-wrap items-center gap-2">
                                <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-muted-foreground">
                                    {product.category}
                                </span>
                                <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                                    <Clock className="h-3 w-3" /> {product.hook}
                                </span>
                                {product.bestSeller && (
                                    <span className="inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary-foreground shadow-sm">
                                        <Sparkles className="h-3 w-3" /> Best Seller
                                    </span>
                                )}
                            </div>

                            {/* H1 */}
                            <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight tracking-tight text-foreground">
                                {product.heroTitle}
                            </h1>

                            {/* Short description */}
                            <p className="text-base leading-relaxed text-muted-foreground">
                                {product.shortDescription}
                            </p>

                            {/* Key spec pills */}
                            <div className="flex flex-wrap gap-2">
                                {product.bracket && (
                                    <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/50 px-3 py-1.5 text-xs font-semibold text-foreground">
                                        <Check className="h-3 w-3 text-primary" /> {product.bracket}
                                    </span>
                                )}
                                {product.rope && (
                                    <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/50 px-3 py-1.5 text-xs font-semibold text-foreground">
                                        <Check className="h-3 w-3 text-primary" /> Rope: {product.rope}
                                    </span>
                                )}
                                {product.pipe && (
                                    <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/50 px-3 py-1.5 text-xs font-semibold text-foreground">
                                        <Check className="h-3 w-3 text-primary" /> {product.pipe}
                                    </span>
                                )}
                                {product.wireOptions?.map((w) => (
                                    <span key={w} className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/50 px-3 py-1.5 text-xs font-semibold text-foreground">
                                        <Check className="h-3 w-3 text-primary" /> {w} Wire
                                    </span>
                                ))}
                                {product.netOptions?.map((n) => (
                                    <span key={n} className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/50 px-3 py-1.5 text-xs font-semibold text-foreground">
                                        <Check className="h-3 w-3 text-primary" /> {n} Net
                                    </span>
                                ))}
                                {product.rackOptions?.map((r) => (
                                    <span key={r} className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/50 px-3 py-1.5 text-xs font-semibold text-foreground">
                                        <Check className="h-3 w-3 text-primary" /> {r}
                                    </span>
                                ))}
                            </div>

                            {/* Size display for hangers */}
                            {isHanger && product.allSizes && (
                                <div className="rounded-xl border border-border bg-secondary/20 p-4">
                                    <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
                                        Available Sizes
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {product.allSizes.map((size) => (
                                            <span
                                                key={size}
                                                className="rounded-lg border border-border bg-background px-3 py-1.5 text-sm font-semibold text-foreground"
                                            >
                                                {size}
                                            </span>
                                        ))}
                                    </div>
                                    <p className="mt-2 text-xs text-muted-foreground">
                                        The most suitable size for your space will be confirmed during the free measurement visit.
                                    </p>
                                </div>
                            )}

                            {/* Repair note */}
                            {isRepair && (
                                <div className="rounded-xl border border-amber-500/30 bg-amber-50 p-4">
                                    <div className="flex items-start gap-2">
                                        <AlertCircle className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                                        <p className="text-xs leading-relaxed text-amber-800 font-medium">
                                            We do not replace hanger pipes during repair service. Repair feasibility depends on the existing hanger condition and installation setup. Confirmed on-site before any work begins.
                                        </p>
                                    </div>
                                </div>
                            )}

                            {/* Primary CTAs */}
                            <div className="flex flex-col gap-3 sm:flex-row">
                                <a
                                    href="#book"
                                    className="flex min-h-[50px] flex-1 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/25 transition hover:bg-primary/90 active:scale-[0.98]"
                                >
                                    Book Free Measurement <ArrowRight className="h-4 w-4" />
                                </a>
                                <a
                                    href={getWhatsAppLink(product.name)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex min-h-[50px] items-center justify-center gap-2 rounded-full border border-emerald-600/30 bg-emerald-50 px-6 text-sm font-bold text-emerald-700 hover:bg-emerald-100 transition active:scale-[0.98]"
                                >
                                    <MessageCircle className="h-4 w-4 fill-emerald-600 text-emerald-600" /> WhatsApp Us
                                </a>
                            </div>
                            <a
                                href={`tel:${PHONE_NUMBER_RAW}`}
                                className="flex min-h-[44px] items-center justify-center gap-2 rounded-full border border-border bg-background px-6 text-sm font-semibold text-foreground hover:border-primary/40 hover:bg-secondary/30 transition active:scale-[0.98]"
                            >
                                <Phone className="h-4 w-4 text-primary" /> {PHONE_NUMBER}
                            </a>

                            {/* Trust signals */}
                            <div className="flex flex-wrap gap-2 pt-1">
                                {['Free Installation', 'In-House Crew', 'Hyderabad Wide Service'].map((t) => (
                                    <span key={t} className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold text-foreground">
                                        <CheckCircle2 className="h-3.5 w-3.5 text-primary" /> {t}
                                    </span>
                                ))}
                            </div>

                            {/* Booking form */}
                            {/* <div id="book" className="scroll-mt-24 mt-2">
                                <BookingForm product={product} />
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Marquee ── */}
            <div className="overflow-hidden border-y border-border bg-primary py-3 text-primary-foreground">
                <div className="tte-marquee flex w-max gap-10 whitespace-nowrap text-xs sm:text-sm font-semibold uppercase tracking-[0.2em]">
                    {[
                        'Installation within 4 hours',
                        'Hyderabad-wide service',
                        'Free installation',
                        'In-house uniformed crew',
                        'After-sales support',
                        'Home improvement specialists',
                    ].flatMap((item, i) => [
                        <span key={i} className="flex items-center gap-10">
                            {item} <span className="text-cyan-300">/</span>
                        </span>,
                        <span key={`r${i}`} className="flex items-center gap-10">
                            {item} <span className="text-cyan-300">/</span>
                        </span>,
                    ])}
                </div>
            </div>

            {/* ═══════════════════════════════════════════════════════════════
                PRODUCT OVERVIEW
            ═══════════════════════════════════════════════════════════════ */}
            <section className="py-14 border-b border-border bg-background">
                <div className="mx-auto w-full max-w-[80rem] px-4 sm:px-6">
                    <Reveal>
                        <div className="max-w-3xl">
                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                                About This Product
                            </span>
                            <h2 className="font-display mt-2 text-2xl sm:text-3xl font-bold text-foreground">
                                {product.name} — Overview
                            </h2>
                            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                                {product.heroSub}
                            </p>
                            {product.installationNotes && (
                                <div className="mt-5 rounded-xl border border-border bg-secondary/20 p-4">
                                    <p className="text-sm leading-relaxed text-muted-foreground">
                                        <strong className="text-foreground font-semibold">Installation note: </strong>
                                        {product.installationNotes}
                                    </p>
                                </div>
                            )}
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════
                SPECIFICATIONS TABLE
            ═══════════════════════════════════════════════════════════════ */}
            {product.specifications?.length > 0 && (
                <section className="py-14 border-b border-border bg-card">
                    <div className="mx-auto w-full max-w-[80rem] px-4 sm:px-6">
                        <Reveal>
                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                                Specifications
                            </span>
                            <h2 className="font-display mt-2 text-2xl sm:text-3xl font-bold text-foreground">
                                {product.name} Specifications
                            </h2>
                        </Reveal>
                        <div className="mt-8 overflow-hidden rounded-2xl border border-border">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-secondary/60 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                                    <tr>
                                        <th className="px-5 py-3.5">Specification</th>
                                        <th className="px-5 py-3.5">Details</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-border bg-card">
                                    {product.specifications.map((spec, i) => (
                                        <tr key={i} className="hover:bg-secondary/30 transition-colors">
                                            <td className="px-5 py-3.5 font-bold text-foreground sm:w-1/3">
                                                {spec.label}
                                            </td>
                                            <td className="px-5 py-3.5 text-muted-foreground">{spec.value}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            )}

            {/* ═══════════════════════════════════════════════════════════════
                REPAIR OPTIONS (repair page only)
            ═══════════════════════════════════════════════════════════════ */}
            {isRepair && product.repairOptions && (
                <section className="py-16 border-b border-border bg-secondary/20">
                    <div className="mx-auto w-full max-w-[80rem] px-4 sm:px-6">
                        <Reveal>
                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                                Repair Options
                            </span>
                            <h2 className="font-display mt-2 text-2xl sm:text-3xl font-bold text-foreground">
                                What Can Be Replaced
                            </h2>
                            <p className="mt-2 text-sm text-muted-foreground">
                                We do not replace hanger pipes during repair service.
                            </p>
                        </Reveal>
                        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                            {product.repairOptions.map((opt, i) => {
                                const Icon = ICONS[opt.icon] ?? Wrench;
                                return (
                                    <Reveal key={opt.name} delay={i * 0.06}>
                                        <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
                                            <span className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${product.accent} text-white`}>
                                                <Icon className="h-5 w-5" strokeWidth={1.7} />
                                            </span>
                                            <h3 className="font-display mt-3 text-base font-bold text-foreground">
                                                {opt.name}
                                            </h3>
                                            <p className="mt-1 text-sm text-muted-foreground">{opt.description}</p>
                                        </div>
                                    </Reveal>
                                );
                            })}
                        </div>
                        {product.repairCombinations && (
                            <div className="mt-8">
                                <Reveal>
                                    <h3 className="font-display text-lg font-bold text-foreground">Available Repair Combinations</h3>
                                    <div className="mt-4 grid gap-3 sm:grid-cols-3">
                                        {product.repairCombinations.map((combo) => (
                                            <div key={combo.label} className="rounded-xl border border-border bg-card p-4">
                                                <p className="font-semibold text-foreground text-sm">{combo.label}</p>
                                                <p className="mt-1 text-xs text-muted-foreground">{combo.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                </Reveal>
                            </div>
                        )}
                    </div>
                </section>
            )}

            {/* ═══════════════════════════════════════════════════════════════
                FEATURES & BENEFITS
            ═══════════════════════════════════════════════════════════════ */}
            {product.benefits?.length > 0 && (
                <section id="benefits" className="scroll-mt-20 py-16 lg:py-24 border-b border-border bg-background">
                    <div className="mx-auto w-full max-w-[80rem] px-4 sm:px-6">
                        <Reveal>
                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                                Features & Benefits
                            </span>
                            <h2 className="font-display mt-2 text-3xl font-bold sm:text-4xl text-foreground">
                                Why Choose the {product.name}?
                            </h2>
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
                                            <h3 className="font-display mt-2 text-lg font-bold text-foreground">
                                                {b.title}
                                            </h3>
                                            <p className="text-sm leading-relaxed text-muted-foreground">{b.text}</p>
                                        </div>
                                    </Reveal>
                                );
                            })}
                        </div>
                    </div>
                </section>
            )}

            {/* ═══════════════════════════════════════════════════════════════
                INSTALLATION PROCESS
            ═══════════════════════════════════════════════════════════════ */}
            <section className="py-16 lg:py-24 border-b border-border bg-secondary/20">
                <div className="mx-auto w-full max-w-[80rem] px-4 sm:px-6">
                    <Reveal>
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                            How It Works
                        </span>
                        <h2 className="font-display mt-2 text-3xl font-bold sm:text-4xl text-foreground">
                            From Booking to Handover
                        </h2>
                    </Reveal>
                    <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {INSTALLATION_STEPS.map((step, i) => (
                            <Reveal key={step.title} delay={i * 0.06}>
                                <li className="flex h-full flex-col rounded-3xl border border-border bg-card p-6 shadow-sm">
                                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-sm font-bold text-primary">
                                        {String(i + 1).padStart(2, '0')}
                                    </span>
                                    <h3 className="font-display mt-4 text-lg font-bold text-foreground">
                                        {step.title}
                                    </h3>
                                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                                        {step.text}
                                    </p>
                                </li>
                            </Reveal>
                        ))}
                    </ol>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════
                WHO IS THIS FOR? (Use Cases)
            ═══════════════════════════════════════════════════════════════ */}
            {product.useCases?.length > 0 && (
                <section className="py-14 border-b border-border bg-background">
                    <div className="mx-auto w-full max-w-[80rem] px-4 sm:px-6">
                        <Reveal>
                            <div className="max-w-3xl">
                                <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                                    Who Is This For?
                                </span>
                                <h2 className="font-display mt-2 text-2xl sm:text-3xl font-bold text-foreground">
                                    Suitable For
                                </h2>
                                <ul className="mt-5 space-y-3">
                                    {product.useCases.map((uc, i) => (
                                        <li key={i} className="flex items-start gap-3 text-base text-muted-foreground">
                                            <CheckCircle2 className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                                            {uc}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Reveal>
                    </div>
                </section>
            )}

            {/* ═══════════════════════════════════════════════════════════════
                HANGER COMPARISON (ceiling hangers only)
            ═══════════════════════════════════════════════════════════════ */}
            {isCeilingHanger && (
                <section id="compare" className="scroll-mt-20 py-16 lg:py-24 border-b border-border bg-secondary/20">
                    <div className="mx-auto w-full max-w-[80rem] px-4 sm:px-6">
                        <Reveal>
                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                                Compare Options
                            </span>
                            <h2 className="font-display mt-2 text-3xl font-bold sm:text-4xl text-foreground mb-8">
                                Normal vs Deluxe vs Premium
                            </h2>
                        </Reveal>
                        <ProductComparison activeSlug={product.slug} />
                    </div>
                </section>
            )}

            {/* ═══════════════════════════════════════════════════════════════
                MESH OPTIONS (mosquito mesh page)
            ═══════════════════════════════════════════════════════════════ */}
            {product.meshOptions?.length > 0 && (
                <section className="py-14 border-b border-border bg-background">
                    <div className="mx-auto w-full max-w-[80rem] px-4 sm:px-6">
                        <Reveal>
                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                                Available Options
                            </span>
                            <h2 className="font-display mt-2 text-2xl sm:text-3xl font-bold text-foreground">
                                Mosquito Mesh Types
                            </h2>
                        </Reveal>
                        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {product.meshOptions.map((opt, i) => (
                                <Reveal key={opt.name} delay={i * 0.05}>
                                    <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
                                        <h3 className="font-display font-bold text-base text-foreground">{opt.name}</h3>
                                        <p className="mt-1 text-sm text-muted-foreground">{opt.description}</p>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* ═══════════════════════════════════════════════════════════════
                "NOT SURE?" TOOL
            ═══════════════════════════════════════════════════════════════ */}
            <section className="py-14 border-b border-border bg-primary/5">
                <div className="mx-auto w-full max-w-[80rem] px-4 sm:px-6">
                    <Reveal>
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                            <div className="max-w-xl">
                                <h2 className="font-display text-xl font-bold text-foreground">
                                    Not sure which option is right for your home?
                                </h2>
                                <p className="mt-2 text-sm text-muted-foreground">
                                    Send us a photo or short video of your balcony, window, door or installation area. Our team can recommend the most suitable option.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                <a
                                    href={getWhatsAppLink(product.name)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-emerald-500 px-5 text-sm font-bold text-white hover:bg-emerald-600 transition active:scale-[0.98]"
                                >
                                    <MessageCircle className="h-4 w-4 fill-white" /> WhatsApp a Photo
                                </a>
                                <a
                                    href="#book"
                                    className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-primary px-5 text-sm font-bold text-primary-foreground hover:bg-primary/90 transition active:scale-[0.98]"
                                >
                                    Book Free Measurement <ArrowRight className="h-4 w-4" />
                                </a>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════
                FAQS
            ═══════════════════════════════════════════════════════════════ */}
            <section id="faq" className="scroll-mt-20 py-16 lg:py-24 border-b border-border bg-background">
                <div className="mx-auto w-full max-w-[52rem] px-4 sm:px-6">
                    <Reveal>
                        <div className="text-center">
                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">FAQ</span>
                            <h2 className="font-display mt-2 text-3xl font-bold sm:text-4xl text-foreground">
                                {product.name} — Frequently Asked Questions
                            </h2>
                        </div>
                    </Reveal>
                    <div className="mt-10">
                        <Accordion type="single" collapsible className="w-full space-y-3">
                            {product.faqs.map((f, i) => (
                                <AccordionItem
                                    key={i}
                                    value={`faq-${i}`}
                                    className="rounded-2xl border border-border bg-card px-5"
                                >
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
                            Book Free Measurement <ArrowRight className="h-4 w-4" />
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

            {/* ═══════════════════════════════════════════════════════════════
                RELATED PRODUCTS
            ═══════════════════════════════════════════════════════════════ */}
            {relatedProducts.length > 0 && (
                <section className="py-16 lg:py-24 border-b border-border bg-secondary/20">
                    <div className="mx-auto w-full max-w-[80rem] px-4 sm:px-6">
                        <Reveal>
                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                                You May Also Need
                            </span>
                            <h2 className="font-display mt-2 text-3xl font-bold sm:text-4xl text-foreground">
                                Related Services
                            </h2>
                        </Reveal>
                        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                            {relatedProducts.map((rp, i) => (
                                <Reveal key={rp.slug} delay={i * 0.06}>
                                    <Link
                                        href={`/products/${rp.slug}`}
                                        className="group flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-5 shadow-sm transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-md duration-200"
                                    >
                                        <div>
                                            <span className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${rp.accent} text-white`}>
                                                {(() => {
                                                    const Icon = ICONS[rp.icon] ?? Sparkles;
                                                    return <Icon className="h-5 w-5" strokeWidth={1.7} />;
                                                })()}
                                            </span>
                                            <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                                                {rp.category}
                                            </p>
                                            <h3 className="font-display mt-1 text-base font-bold text-foreground group-hover:text-primary transition-colors">
                                                {rp.name}
                                            </h3>
                                            <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground line-clamp-2">
                                                {rp.shortDescription}
                                            </p>
                                        </div>
                                        <div className="mt-4 flex items-center gap-1 text-xs font-bold text-primary">
                                            View details <ArrowRight className="h-3.5 w-3.5" />
                                        </div>
                                    </Link>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* ═══════════════════════════════════════════════════════════════
                SERVICE AREAS
            ═══════════════════════════════════════════════════════════════ */}
            <section className="py-14 bg-secondary/40 border-b border-border">
                <div className="mx-auto w-full max-w-[80rem] px-4 sm:px-6">
                    <h3 className="font-display text-xl font-bold text-foreground">
                        {product.name} in Hyderabad — Service Areas
                    </h3>
                    <p className="mt-1 text-xs text-muted-foreground">
                        Free measurement visit available across all major Hyderabad localities:
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

            {/* ── Mobile Sticky CTA ── */}
            <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 p-3 backdrop-blur-md lg:hidden shadow-lg">
                <div className="flex items-center gap-2">
                    <a
                        href="#book"
                        className="flex flex-1 min-h-[44px] items-center justify-center gap-1.5 rounded-full bg-primary px-4 text-xs font-bold text-primary-foreground shadow-sm active:scale-[0.98]"
                    >
                        Book Free Measurement <ArrowRight className="h-3.5 w-3.5" />
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
