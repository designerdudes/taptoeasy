import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
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
    Loader2,
    MapPin,
    Phone,
    Ruler,
    ShieldCheck,
    Sparkles,
    Star,
    Wind,
    DoorOpen,
    Zap,
} from 'lucide-react';
import pb from '@/lib/pocketbaseClient';
import { initializeCheckout } from '@/api/EcommerceApi';
import Reveal from '@/components/Reveal';
import Seo from '@/components/Seo';
import { getProduct } from '@/data/products';

const ICONS = {
    ShieldCheck, Wind, Ruler, Home, Grid3x3, Eye, Droplets, Layers, FoldVertical,
    DoorOpen, Grid2x2, Hand, Clock, Zap,
};

const fieldClass =
    'w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/25 placeholder:text-muted-foreground/70';

function BookingForm({ product }) {
    const [form, setForm] = useState({
        name: '',
        phone: '',
        city: 'Hyderabad',
        address: '',
        preferred_date: '',
        notes: '',
    });
    const [status, setStatus] = useState('idle');
    const [error, setError] = useState('');

    const update = (key) => (e) => setForm((prev) => ({ ...prev, [key]: e.target.value }));

    const submit = async (e) => {
        e.preventDefault();
        if (status === 'loading') return;
        setStatus('loading');
        setError('');
        try {
            await pb.collection('bookings').create({
                ...form,
                service: 'new_installation',
                model: 'not_sure',
                product: product.name,
                deposit_amount: product.deposit,
            });
            const { url } = await initializeCheckout({
                items: [{ variant_id: product.variantId, quantity: 1 }],
                successUrl: `${window.location.origin}/success`,
                cancelUrl: window.location.href,
            });
            window.location.href = url;
        } catch (err) {
            setStatus('idle');
            setError(
                err?.status === 400
                    ? 'Please check the highlighted details and try again.'
                    : 'We could not start your booking. Please call us on 90000 12345.',
            );
        }
    };

    if (status === 'loading') {
        return (
            <div className="rounded-3xl border border-border bg-card p-8 shadow-[0_24px_60px_-30px_rgba(12,74,86,0.55)]">
                <Loader2 className="h-10 w-10 animate-spin text-primary" strokeWidth={1.6} />
                <h3 className="font-display mt-4 text-2xl font-bold">Starting your secure deposit…</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                    Saving your booking and redirecting you to our secure payment page. Please do not close this window.
                </p>
            </div>
        );
    }

    return (
        <form
            onSubmit={submit}
            className="rounded-3xl border border-border bg-card p-6 shadow-[0_24px_60px_-30px_rgba(12,74,86,0.55)] sm:p-8"
        >
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                <Zap className="h-3.5 w-3.5" /> Limited slots this week
            </div>
            <h3 className="font-display mt-2 text-2xl font-bold leading-tight sm:text-3xl">
                Book {product.name.toLowerCase()} — pay ₹{product.deposit} deposit
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
                Balance payable only after fitting & load test. Free measurement visit included.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                    <label htmlFor="bf-name" className="text-sm font-medium">Full name</label>
                    <input id="bf-name" required value={form.name} onChange={update('name')} className={fieldClass} placeholder="Anjali Raghavan" />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="bf-phone" className="text-sm font-medium">Mobile number</label>
                    <input id="bf-phone" required inputMode="tel" value={form.phone} onChange={update('phone')} className={fieldClass} placeholder="90000 12345" />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="bf-city" className="text-sm font-medium">Locality in Hyderabad</label>
                    <input id="bf-city" required value={form.city} onChange={update('city')} className={fieldClass} placeholder="Gachibowli" />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="bf-date" className="text-sm font-medium">Preferred date</label>
                    <input id="bf-date" type="date" value={form.preferred_date} onChange={update('preferred_date')} className={fieldClass} />
                </div>
                <div className="flex flex-col gap-2 sm:col-span-2">
                    <label htmlFor="bf-address" className="text-sm font-medium">Installation address</label>
                    <input id="bf-address" required value={form.address} onChange={update('address')} className={fieldClass} placeholder="Flat 402, Sunlight Residency, Gachibowli" />
                </div>
                <div className="flex flex-col gap-2 sm:col-span-2">
                    <label htmlFor="bf-notes" className="text-sm font-medium">Anything else? (ceiling height, balcony size)</label>
                    <textarea id="bf-notes" rows={3} value={form.notes} onChange={update('notes')} className={fieldClass} placeholder="Ceiling is about 10 ft, balcony 6 ft wide" />
                </div>
            </div>

            {error ? <p className="mt-4 text-sm font-medium text-destructive">{error}</p> : null}

            <button
                type="submit"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-4 text-base font-bold text-accent-foreground shadow-lg shadow-accent/30 transition duration-200 hover:brightness-105 active:scale-[0.98]"
            >
                Pay ₹{product.deposit} deposit & book <ArrowRight className="h-5 w-5" />
            </button>
            <p className="mt-3 flex items-center justify-center gap-1.5 text-center text-xs text-muted-foreground">
                <ShieldCheck className="h-3.5 w-3.5 text-primary" /> Secure checkout · No balance until fitted
            </p>
        </form>
    );
}

function Stars({ rating }) {
    return (
        <div className="flex gap-0.5 text-accent">
            {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4" fill={i < rating ? 'currentColor' : 'none'} strokeWidth={1.5} />
            ))}
        </div>
    );
}

function ProductLandingPage({ slug }) {
    const product = getProduct(slug);
    if (!product) {
        return (
            <div className="mx-auto max-w-3xl px-5 py-32 text-center">
                <h1 className="font-display text-3xl font-bold">Product not found</h1>
                <Link to="/" className="mt-6 inline-flex items-center gap-2 text-primary underline underline-offset-4">
                    <ArrowLeft className="h-4 w-4" /> Back to home
                </Link>
            </div>
        );
    }

    const HeroIcon = ICONS[product.icon] ?? Sparkles;

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Helmet>
                <title>{`${product.name} Installation in Hyderabad | ₹${product.deposit} Deposit | Tap to Easy`}</title>
                <meta
                    name="description"
                    content={`${product.name} installation in Hyderabad within 2 hours. ${product.heroSub} Book online with a ₹${product.deposit} deposit.`}
                />
                <meta name="robots" content="index, follow" />
                <meta name="theme-color" content="#0c4a56" />
                <link rel="canonical" href={`https://taptoeasy.in/products/${product.slug}`} />
                <script type="application/ld+json">{JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'Service',
                    serviceType: product.name,
                    areaServed: 'Hyderabad',
                    provider: { '@type': 'HomeAndConstructionBusiness', name: 'Tap to Easy Home Solutions', telephone: '+91-90000-12345' },
                    offers: { '@type': 'Offer', price: product.deposit, priceCurrency: 'INR' },
                })}</script>
                <script type="application/ld+json">{JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'FAQPage',
                    mainEntity: product.faqs.map((f) => ({
                        '@type': 'Question', name: f.q,
                        acceptedAnswer: { '@type': 'Answer', text: f.a },
                    })),
                })}</script>
            </Helmet>
            <Seo
                title={`${product.name} Installation in Hyderabad | Tap to Easy`}
                description={`${product.name} installed in Hyderabad within 2 hours. ${product.warranty}. Book with a ₹${product.deposit} deposit.`}
                url={`https://taptoeasy.in/products/${product.slug}`}
                siteName="Tap to Easy"
            />

            {/* Header */}
            <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur">
                <div className="mx-auto flex w-full max-w-[80rem] items-center justify-between gap-4 px-5 py-3">
                    <Link to="/" className="font-display text-lg font-extrabold tracking-tight">
                        tap<span className="text-accent">.</span>to easy
                    </Link>
                    <nav className="hidden items-center gap-7 text-sm font-medium text-muted-foreground md:flex">
                        <a href="#benefits" className="transition hover:text-foreground">Benefits</a>
                        <a href="#why" className="transition hover:text-foreground">Why us</a>
                        <a href="#reviews" className="transition hover:text-foreground">Reviews</a>
                        <a href="#faq" className="transition hover:text-foreground">FAQ</a>
                    </nav>
                    <a
                        href="tel:+919000012345"
                        className="flex min-h-[44px] items-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground transition active:scale-[0.98]"
                    >
                        <Phone className="h-4 w-4" />
                        <span className="hidden sm:inline">90000 12345</span>
                        <span className="sm:hidden">Call</span>
                    </a>
                </div>
            </header>

            <main>
                {/* HERO */}
                <section className="relative overflow-hidden">
                    <div className={`pointer-events-none absolute -right-32 -top-24 h-[28rem] w-[28rem] rounded-full bg-gradient-to-br ${product.accent} opacity-20 blur-3xl`} />
                    <div className="mx-auto grid w-full max-w-[80rem] items-center gap-12 px-5 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
                        <div>
                            <div className="flex flex-wrap items-center gap-2">
                                <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                                    <Clock className="h-3.5 w-3.5" /> {product.hook}
                                </span>
                                {product.bestSeller && (
                                    <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-accent-foreground">
                                        <Sparkles className="h-3.5 w-3.5" /> {product.tagline}
                                    </span>
                                )}
                            </div>
                            <h1 className="font-display mt-6 text-[2.6rem] font-extrabold leading-[1.03] tracking-tight sm:text-6xl">
                                {product.heroTitle}
                            </h1>
                            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                                {product.heroSub}
                            </p>
                            <div className="mt-7 flex flex-wrap items-center gap-3">
                                <a
                                    href="#book"
                                    className="flex min-h-[48px] items-center gap-2 rounded-full bg-accent px-7 text-base font-bold text-accent-foreground shadow-lg shadow-accent/30 transition active:scale-[0.98]"
                                >
                                    Pay ₹{product.deposit} & book <ArrowRight className="h-4 w-4" />
                                </a>
                                <a
                                    href="tel:+919000012345"
                                    className="flex min-h-[48px] items-center gap-2 rounded-full border border-border px-7 text-base font-semibold transition hover:bg-secondary active:scale-[0.98]"
                                >
                                    <Phone className="h-4 w-4" /> Call to book
                                </a>
                            </div>
                            <dl className="mt-10 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-6">
                                <div>
                                    <dt className="font-display text-2xl font-bold text-primary">{product.stats.customers}</dt>
                                    <dd className="mt-1 text-xs uppercase tracking-wide text-muted-foreground">homes fitted</dd>
                                </div>
                                <div>
                                    <dt className="font-display text-2xl font-bold text-primary">{product.stats.rating}★</dt>
                                    <dd className="mt-1 text-xs uppercase tracking-wide text-muted-foreground">avg rating</dd>
                                </div>
                                <div>
                                    <dt className="font-display text-2xl font-bold text-primary">{product.stats.installs}</dt>
                                    <dd className="mt-1 text-xs uppercase tracking-wide text-muted-foreground">to install</dd>
                                </div>
                            </dl>
                        </div>

                        <div className="grid gap-6">
                            <div id="book" className="scroll-mt-24">
                                <BookingForm product={product} />
                            </div>
                            <div className={`hidden items-center gap-4 rounded-2xl bg-gradient-to-br ${product.accent} p-6 text-white shadow-xl lg:flex`}>
                                <HeroIcon className="h-12 w-12 shrink-0" strokeWidth={1.4} />
                                <div>
                                    <p className="font-display text-lg font-bold">{product.warranty}</p>
                                    <p className="text-sm text-white/85">Registered on-site at handover.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="overflow-hidden border-y border-border bg-primary py-3 text-primary-foreground">
                        <div className="tte-marquee flex w-max gap-10 whitespace-nowrap text-sm font-semibold uppercase tracking-[0.2em]">
                            {[...MARQUEE, ...MARQUEE].map((item, i) => (
                                <span key={`${item}-${i}`} className="flex items-center gap-10">
                                    {item} <span className="text-accent">/</span>
                                </span>
                            ))}
                        </div>
                    </div>
                </section>

                {/* BENEFITS / PRODUCT SHOWCASE */}
                <section id="benefits" className="scroll-mt-20">
                    <div className="mx-auto w-full max-w-[80rem] px-5 py-16 lg:py-24">
                        <Reveal>
                            <div className="max-w-2xl">
                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Why {product.name.toLowerCase()}</p>
                                <h2 className="font-display mt-3 text-3xl font-bold leading-tight sm:text-4xl">
                                    Engineered for Hyderabad homes
                                </h2>
                            </div>
                        </Reveal>
                        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                            {product.benefits.map((b, i) => {
                                const Icon = ICONS[b.icon] ?? Sparkles;
                                return (
                                    <Reveal key={b.title} delay={i * 0.06}>
                                        <div className="flex h-full flex-col gap-3 rounded-2xl border border-border bg-card p-6">
                                            <span className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${product.accent} text-white`}>
                                                <Icon className="h-5 w-5" strokeWidth={1.7} />
                                            </span>
                                            <h3 className="font-display text-lg font-bold">{b.title}</h3>
                                            <p className="text-sm leading-relaxed text-muted-foreground">{b.text}</p>
                                        </div>
                                    </Reveal>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* WHY CHOOSE US */}
                <section id="why" className="scroll-mt-20 border-y border-border bg-secondary">
                    <div className="mx-auto grid w-full max-w-[80rem] gap-12 px-5 py-16 lg:grid-cols-2 lg:py-24">
                        <div className="lg:sticky lg:top-28 lg:self-start">
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Why choose us</p>
                            <h2 className="font-display mt-3 text-3xl font-bold leading-tight sm:text-4xl">
                                A crew you can trust in your home
                            </h2>
                            <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
                                We are not a lead-generation marketplace. Our own trained fitters handle every install across Hyderabad — accountable, uniformed, and background-verified.
                            </p>
                            <div className="mt-8 flex flex-wrap gap-3">
                                {['Background-verified crew', 'Same-week slots', 'No balance until fitted', product.warranty].map((t) => (
                                    <span key={t} className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground">
                                        <CheckCircle2 className="h-4 w-4 text-primary" /> {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="grid gap-4">
                            {product.whyChooseUs.map((w, i) => (
                                <Reveal key={w.title} delay={i * 0.06}>
                                    <div className="flex gap-5 rounded-2xl border border-border bg-card p-6">
                                        <span className="font-display mt-0.5 text-sm font-bold text-accent">0{i + 1}</span>
                                        <div>
                                            <h3 className="font-display text-lg font-bold">{w.title}</h3>
                                            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{w.text}</p>
                                        </div>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* INSTALLATION PROCESS */}
                <section className="scroll-mt-20">
                    <div className="mx-auto w-full max-w-[80rem] px-5 py-16 lg:py-24">
                        <Reveal>
                            <div className="max-w-2xl">
                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Installation process</p>
                                <h2 className="font-display mt-3 text-3xl font-bold leading-tight sm:text-4xl">
                                    From booking to handover in 2 hours
                                </h2>
                            </div>
                        </Reveal>
                        <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                            {PROCESS.map((step, i) => {
                                const Icon = ICONS[step.icon] ?? Sparkles;
                                return (
                                    <Reveal key={step.title} delay={i * 0.06}>
                                        <li className="flex h-full flex-col gap-3 rounded-2xl border border-border bg-card p-6">
                                            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                                                <Icon className="h-5 w-5" strokeWidth={1.7} />
                                            </span>
                                            <h3 className="font-display text-lg font-bold">{step.title}</h3>
                                            <p className="text-sm leading-relaxed text-muted-foreground">{step.text}</p>
                                        </li>
                                    </Reveal>
                                );
                            })}
                        </ol>
                    </div>
                </section>

                {/* TESTIMONIALS */}
                <section id="reviews" className="scroll-mt-20 border-y border-border bg-secondary">
                    <div className="mx-auto w-full max-w-[80rem] px-5 py-16 lg:py-24">
                        <Reveal>
                            <div className="max-w-2xl">
                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Customer reviews</p>
                                <h2 className="font-display mt-3 text-3xl font-bold leading-tight sm:text-4xl">
                                    Loved by {product.stats.customers} Hyderabad homes
                                </h2>
                            </div>
                        </Reveal>
                        <div className="mt-10 grid gap-6 md:grid-cols-3">
                            {product.testimonials.map((t, i) => (
                                <Reveal key={t.name} delay={i * 0.06}>
                                    <figure className="flex h-full flex-col gap-4 rounded-2xl border border-border bg-card p-6">
                                        <Stars rating={t.rating} />
                                        <blockquote className="text-sm leading-relaxed text-foreground">“{t.text}”</blockquote>
                                        <figcaption className="mt-auto flex items-center gap-3">
                                            <span className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${product.accent} text-sm font-bold text-white`}>
                                                {t.name.split(' ').map((n) => n[0]).join('')}
                                            </span>
                                            <span>
                                                <span className="block text-sm font-semibold">{t.name}</span>
                                                <span className="block text-xs text-muted-foreground">{t.location}, Hyderabad</span>
                                            </span>
                                        </figcaption>
                                    </figure>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* TRUST BADGES */}
                <section className="scroll-mt-20">
                    <div className="mx-auto w-full max-w-[80rem] px-5 py-16">
                        <div className="grid gap-4 rounded-3xl border border-border bg-card p-8 sm:grid-cols-2 lg:grid-cols-4">
                            {[
                                { icon: ShieldCheck, title: product.warranty, text: 'Registered on-site' },
                                { icon: CheckCircle2, title: 'No balance until fitted', text: 'Pay deposit, rest after' },
                                { icon: Clock, title: '2-hour installation', text: 'Doorstep in Hyderabad' },
                                { icon: Star, title: `${product.stats.rating} avg rating`, text: `${product.stats.customers} homes` },
                            ].map((b) => (
                                <div key={b.title} className="flex items-center gap-3">
                                    <b.icon className="h-8 w-8 shrink-0 text-primary" strokeWidth={1.6} />
                                    <div>
                                        <p className="font-display text-sm font-bold">{b.title}</p>
                                        <p className="text-xs text-muted-foreground">{b.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section id="faq" className="scroll-mt-20 border-t border-border bg-secondary">
                    <div className="mx-auto w-full max-w-[72rem] px-5 py-16 lg:py-24">
                        <Reveal>
                            <div className="max-w-2xl">
                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Questions</p>
                                <h2 className="font-display mt-3 text-3xl font-bold leading-tight sm:text-4xl">
                                    {product.name} FAQs
                                </h2>
                            </div>
                        </Reveal>
                        <div className="mt-8 divide-y divide-border border-y border-border">
                            {product.faqs.map((f) => (
                                <Reveal key={f.q}>
                                    <details className="group py-5">
                                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                                            <h3 className="font-display text-lg font-bold">{f.q}</h3>
                                            <span className="text-accent transition group-open:rotate-45">+</span>
                                        </summary>
                                        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                                    </details>
                                </Reveal>
                            ))}
                        </div>
                        <div className="mt-8">
                            <a
                                href="#book"
                                className="inline-flex min-h-[48px] items-center gap-2 rounded-full bg-accent px-7 text-base font-bold text-accent-foreground shadow-lg shadow-accent/30 transition active:scale-[0.98]"
                            >
                                Pay ₹{product.deposit} & book my slot <ArrowRight className="h-4 w-4" />
                            </a>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="bg-primary text-primary-foreground">
                    <div className="mx-auto flex w-full max-w-[72rem] flex-col items-start gap-6 px-5 py-14 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <h2 className="font-display text-3xl font-bold leading-tight">Only a few slots left this week</h2>
                            <p className="mt-2 max-w-md text-sm text-primary-foreground/80">
                                Book {product.name.toLowerCase()} now with a ₹{product.deposit} deposit. Balance only after fitting.
                            </p>
                        </div>
                        <a
                            href="#book"
                            className="flex min-h-[48px] items-center gap-2 rounded-full bg-accent px-7 text-base font-bold text-accent-foreground transition active:scale-[0.98]"
                        >
                            Book my slot <ArrowRight className="h-4 w-4" />
                        </a>
                    </div>
                </section>
            </main>

            {/* MOBILE STICKY BOOKING BAR */}
            <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 p-3 backdrop-blur lg:hidden">
                <a
                    href="#book"
                    className="flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-accent px-6 text-base font-bold text-accent-foreground shadow-lg shadow-accent/30 active:scale-[0.98]"
                >
                    Pay ₹{product.deposit} deposit & book <ArrowRight className="h-5 w-5" />
                </a>
            </div>

            <footer className="border-t border-border bg-background pb-24 lg:pb-0">
                <div className="mx-auto grid w-full max-w-[80rem] gap-8 px-5 py-12 sm:grid-cols-3">
                    <div>
                        <p className="font-display text-lg font-extrabold">tap<span className="text-accent">.</span>to easy</p>
                        <p className="mt-2 text-sm text-muted-foreground">Home balcony installation services, done by our own crew.</p>
                    </div>
                    <div className="text-sm text-muted-foreground">
                        <p className="flex items-center gap-2 font-medium text-foreground"><Phone className="h-4 w-4" /> 90000 12345</p>
                        <p className="mt-2">care@taptoeasy.in</p>
                        <p className="mt-2">Mon–Sat, 9 am to 7 pm</p>
                    </div>
                    <div className="text-sm text-muted-foreground">
                        <p className="flex items-center gap-2 font-medium text-foreground"><MapPin className="h-4 w-4" /> Service area</p>
                        <p className="mt-2">Hyderabad & suburbs</p>
                    </div>
                </div>
                <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
                    © {new Date().getFullYear()} Tap to Easy Home Solutions. All rights reserved.
                </div>
            </footer>
        </div>
    );
}

const MARQUEE = [
    'Installation within 2 hours',
    'Hyderabad-wide service',
    'No balance until fitted',
    'Free measurement visit',
    'Trained in-house crew',
    'Limited slots this week',
];

const PROCESS = [
    { icon: 'Phone', title: 'Book your slot', text: 'Pay the deposit online and pick a date. We confirm on call within 2 working hours.' },
    { icon: 'Ruler', title: 'Free measurement', text: 'Our fitter measures on-site and finalises the exact size and price for your space.' },
    { icon: 'Wind', title: 'Clean 2-hour fit', text: 'Core-drilled anchors, dust sheets down, debris carried away. No mess left behind.' },
    { icon: 'ShieldCheck', title: 'Load test & warranty', text: 'We load-test, hand over, and register your warranty on the spot.' },
];

export default ProductLandingPage;
