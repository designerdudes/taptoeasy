import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    ArrowRight,
    Clock,
    DoorOpen,
    Grid3x3,
    Layers,
    MapPin,
    Phone,
    ShieldCheck,
    Sparkles,
    Star,
    Wind,
} from 'lucide-react';
import Reveal from '@/components/Reveal';
import Seo from '@/components/Seo';
import { PRODUCTS } from '@/data/products';

const ICONS = { Wind, Grid3x3, Layers, DoorOpen, Sparkles };

const HERO_IMG = 'https://images.hostinger.com/a4242581-f71f-4f31-81d1-90612d1341dc.png';
const WALL_IMG = 'https://images.hostinger.com/b40e11fb-477d-488d-90e8-d1013678f32c.png';

function HomePage() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Helmet>
                <title>Tap to Easy | Balcony Installation Services in Hyderabad — Cloth Hangers, Grills, Shoe Racks, Mesh Doors</title>
                <meta
                    name="description"
                    content="Tap to Easy installs balcony cloth hangers, invisible grills, shoe racks and mosquito mesh doors across Hyderabad within 2 hours. Trained in-house crew, warranty, pay deposit online."
                />
                <meta name="robots" content="index, follow" />
                <meta name="theme-color" content="#0c4a56" />
                <link rel="canonical" href="https://taptoeasy.in/" />
                <script type="application/ld+json">{JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'HomeAndConstructionBusiness',
                    name: 'Tap to Easy Home Solutions',
                    image: HERO_IMG,
                    url: 'https://taptoeasy.in/',
                    telephone: '+91-90000-12345',
                    email: 'care@taptoeasy.in',
                    priceRange: '₹₹',
                    areaServed: 'Hyderabad',
                    address: { '@type': 'PostalAddress', addressLocality: 'Hyderabad', addressRegion: 'Telangana', addressCountry: 'IN' },
                })}</script>
            </Helmet>
            <Seo
                title="Tap to Easy | Balcony Installation Services in Hyderabad"
                description="Cloth hangers, invisible grills, shoe racks & mosquito mesh doors installed in Hyderabad within 2 hours. Trained crew, warranty, pay deposit online."
                image={HERO_IMG}
                url="https://taptoeasy.in/"
                siteName="Tap to Easy"
            />

            {/* Header */}
            <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur">
                <div className="mx-auto flex w-full max-w-[80rem] items-center justify-between gap-4 px-5 py-3">
                    <Link to="/" className="font-display text-lg font-extrabold tracking-tight">
                        tap<span className="text-accent">.</span>to easy
                    </Link>
                    <nav className="hidden items-center gap-7 text-sm font-medium text-muted-foreground md:flex">
                        <a href="#products" className="transition hover:text-foreground">Products</a>
                        <a href="#why" className="transition hover:text-foreground">Why us</a>
                        <a href="#reviews" className="transition hover:text-foreground">Reviews</a>
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

            <main id="top">
                {/* HERO */}
                <section className="relative overflow-hidden">
                    <div className="pointer-events-none absolute -right-32 -top-24 h-[28rem] w-[28rem] rounded-full bg-accent/15 blur-3xl" />
                    <div className="mx-auto grid w-full max-w-[80rem] items-center gap-12 px-5 py-14 lg:grid-cols-[1.1fr_0.9fr] lg:py-20">
                        <div>
                            <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                                <Clock className="h-3.5 w-3.5" /> Installation within 2 hours in Hyderabad
                            </span>
                            <h1 className="font-display mt-6 text-[2.6rem] font-extrabold leading-[1.02] tracking-tight sm:text-6xl">
                                Every balcony upgrade,
                                <span className="relative mx-2 inline-block">
                                    <span className="relative z-10">fitted today.</span>
                                    <motion.span
                                        aria-hidden
                                        initial={{ scaleX: 0 }}
                                        whileInView={{ scaleX: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.25 }}
                                        className="absolute inset-x-0 bottom-1 z-0 h-3 origin-left rounded-sm bg-accent/45 sm:bottom-2 sm:h-4"
                                    />
                                </span>
                            </h1>
                            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                                Tap to Easy is Hyderabad’s in-home balcony installation crew. Cloth hangers, invisible grills, shoe racks and mosquito mesh doors — measured, fitted and warrantied at your doorstep. Pay a small deposit online, balance only after the job is done.
                            </p>
                            <div className="mt-7 flex flex-wrap items-center gap-3">
                                <a
                                    href="#products"
                                    className="flex min-h-[48px] items-center gap-2 rounded-full bg-accent px-7 text-base font-bold text-accent-foreground shadow-lg shadow-accent/30 transition active:scale-[0.98]"
                                >
                                    Explore products <ArrowRight className="h-4 w-4" />
                                </a>
                                <a
                                    href="tel:+919000012345"
                                    className="flex min-h-[48px] items-center gap-2 rounded-full border border-border px-7 text-base font-semibold transition hover:bg-secondary active:scale-[0.98]"
                                >
                                    <Phone className="h-4 w-4" /> Talk to us
                                </a>
                            </div>
                            <dl className="mt-10 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-6">
                                {[
                                    ['16,500+', 'homes fitted'],
                                    ['4.8★', 'avg rating'],
                                    ['2 hrs', 'to install'],
                                ].map(([v, l]) => (
                                    <div key={l}>
                                        <dt className="font-display text-2xl font-bold text-primary">{v}</dt>
                                        <dd className="mt-1 text-xs uppercase tracking-wide text-muted-foreground">{l}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                        <div className="grid gap-4">
                            <img
                                src={HERO_IMG}
                                alt="Ceiling pulley cloth hanger installed on a sunlit Hyderabad balcony"
                                className="h-72 w-full rounded-3xl object-cover shadow-[0_24px_60px_-32px_rgba(12,74,86,0.6)] sm:h-80"
                                loading="lazy"
                            />
                            <img
                                src={WALL_IMG}
                                alt="Wall-mounted foldable cloth drying rack on a small balcony"
                                className="h-40 w-full rounded-2xl object-cover shadow-[0_24px_60px_-32px_rgba(12,74,86,0.6)]"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </section>

                {/* PRODUCTS */}
                <section id="products" className="scroll-mt-20 border-y border-border bg-secondary">
                    <div className="mx-auto w-full max-w-[80rem] px-5 py-16 lg:py-24">
                        <Reveal>
                            <div className="max-w-2xl">
                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Our products</p>
                                <h2 className="font-display mt-3 text-3xl font-bold leading-tight sm:text-4xl">
                                    Four balcony upgrades, one trusted crew
                                </h2>
                                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                                    Pick a product to see pricing, benefits and book a slot with a refundable deposit.
                                </p>
                            </div>
                        </Reveal>

                        <div className="mt-10 grid gap-6 md:grid-cols-2">
                            {PRODUCTS.map((p, i) => {
                                const Icon = ICONS[p.icon] ?? Sparkles;
                                return (
                                    <Reveal key={p.slug} delay={i * 0.06}>
                                        <Link
                                            to={`/products/${p.slug}`}
                                            className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border bg-card p-7 transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_70px_-40px_rgba(12,74,86,0.7)] ${p.bestSeller ? 'border-accent ring-2 ring-accent/40' : 'border-border'}`}
                                        >
                                            {p.bestSeller && (
                                                <span className="absolute right-5 top-5 inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-wide text-accent-foreground">
                                                    <Sparkles className="h-3.5 w-3.5" /> Best seller
                                                </span>
                                            )}
                                            <span className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${p.accent} text-white`}>
                                                <Icon className="h-7 w-7" strokeWidth={1.5} />
                                            </span>
                                            <h3 className="font-display mt-5 text-2xl font-bold">{p.name}</h3>
                                            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.heroSub}</p>
                                            <div className="mt-5 flex items-center gap-4 text-sm">
                                                <span className="flex items-center gap-1.5 font-semibold text-primary">
                                                    <Star className="h-4 w-4 text-accent" fill="currentColor" strokeWidth={0} /> {p.stats.rating}
                                                </span>
                                                <span className="text-muted-foreground">{p.stats.customers} homes</span>
                                            </div>
                                            <div className="mt-6 flex items-center justify-between border-t border-border pt-5">
                                                <div>
                                                    <span className="text-xs uppercase tracking-wide text-muted-foreground">Deposit</span>
                                                    <p className="font-display text-xl font-bold text-foreground">₹{p.deposit}</p>
                                                </div>
                                                <span className="flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-semibold text-background transition group-hover:bg-accent group-hover:text-accent-foreground">
                                                    View & book <ArrowRight className="h-4 w-4" />
                                                </span>
                                            </div>
                                        </Link>
                                    </Reveal>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* WHY US */}
                <section id="why" className="scroll-mt-20">
                    <div className="mx-auto w-full max-w-[80rem] px-5 py-16 lg:py-24">
                        <Reveal>
                            <div className="max-w-2xl">
                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Why choose us</p>
                                <h2 className="font-display mt-3 text-3xl font-bold leading-tight sm:text-4xl">
                                    Hyderabad’s own balcony installation crew
                                </h2>
                            </div>
                        </Reveal>
                        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                            {[
                                { icon: Clock, title: '2-hour installation', text: 'Doorstep fitting across Hyderabad, often same-day.' },
                                { icon: ShieldCheck, title: 'Warranty on every job', text: 'Registered on-site at handover, honoured for years.' },
                                { icon: Star, title: 'No balance until fitted', text: 'Pay a small deposit now, the rest only after load test.' },
                                { icon: MapPin, title: 'Hyderabad-wide', text: 'Gachibowli to Kukatpally — we cover the whole city.' },
                            ].map((f, i) => (
                                <Reveal key={f.title} delay={i * 0.06}>
                                    <div className="flex h-full flex-col gap-3 rounded-2xl border border-border bg-card p-6">
                                        <f.icon className="h-7 w-7 text-primary" strokeWidth={1.6} />
                                        <h3 className="font-display text-lg font-bold">{f.title}</h3>
                                        <p className="text-sm leading-relaxed text-muted-foreground">{f.text}</p>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* REVIEWS STRIP */}
                <section id="reviews" className="scroll-mt-20 border-t border-border bg-secondary">
                    <div className="mx-auto w-full max-w-[80rem] px-5 py-16">
                        <div className="grid gap-6 md:grid-cols-3">
                            {[
                                { name: 'Priya S.', area: 'Gachibowli', text: 'Booked in the morning, fitted by lunch. Spotless work.' },
                                { name: 'Arjun N.', area: 'Financial District', text: 'Invisible grills look amazing and the crew was so clean.' },
                                { name: 'Meena I.', area: 'Ameerpet', text: 'Mosquito mesh fits perfectly. No more bugs at night.' },
                            ].map((r, i) => (
                                <Reveal key={r.name} delay={i * 0.06}>
                                    <figure className="flex h-full flex-col gap-3 rounded-2xl border border-border bg-card p-6">
                                        <div className="flex gap-0.5 text-accent">
                                            {Array.from({ length: 5 }).map((_, k) => (
                                                <Star key={k} className="h-4 w-4" fill="currentColor" strokeWidth={0} />
                                            ))}
                                        </div>
                                        <blockquote className="text-sm leading-relaxed">“{r.text}”</blockquote>
                                        <figcaption className="mt-auto text-sm">
                                            <span className="font-semibold">{r.name}</span>
                                            <span className="text-muted-foreground"> · {r.area}</span>
                                        </figcaption>
                                    </figure>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="bg-primary text-primary-foreground">
                    <div className="mx-auto flex w-full max-w-[72rem] flex-col items-start gap-6 px-5 py-14 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <h2 className="font-display text-3xl font-bold leading-tight">Ready to upgrade your balcony?</h2>
                            <p className="mt-2 max-w-md text-sm text-primary-foreground/80">
                                Pick a product and book your slot with a small deposit. Balance only after fitting.
                            </p>
                        </div>
                        <a
                            href="#products"
                            className="flex min-h-[48px] items-center gap-2 rounded-full bg-accent px-7 text-base font-bold text-accent-foreground transition active:scale-[0.98]"
                        >
                            See products <ArrowRight className="h-4 w-4" />
                        </a>
                    </div>
                </section>
            </main>

            <footer className="border-t border-border bg-background">
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

export default HomePage;
