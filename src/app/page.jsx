'use client';

import React from 'react';
import Link from 'next/link';
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
    CheckCircle2,
    Ruler,
    Zap,
    MessageCircle,
    ThumbsUp,
    Check,
    Building2,
    HelpCircle,
} from 'lucide-react';
import Reveal from '@/components/Reveal';
import CountUp from '@/components/CountUp';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { PRODUCTS, HERO_IMG, PHONE_NUMBER, PHONE_NUMBER_RAW, getWhatsAppLink } from '@/data/products';
import { LOCATIONS } from '@/data/locations';

const ICONS = { Wind, Grid3x3, Layers, DoorOpen, Sparkles };

const GENERAL_FAQS = [
    {
        q: 'What material is used for the balcony cloth drying hangers in Hyderabad?',
        a: 'We use genuine high-tensile Jindal Stainless Steel rails and rust-proof ceiling pulley mechanisms engineered to survive high humidity and continuous monsoon loads, backed by an official 3–7 years warranty.',
    },
    {
        q: 'How strong are invisible balcony safety grills for high-rise flats?',
        a: 'Our invisible safety grills are made of 2mm high-tensile steel cables rated for a 150 kg breaking load per strand. They protect children and pets from accidental falls without blocking your panoramic high-rise skyline view.',
    },
    {
        q: 'Do you provide free measurement and sizing visits across Hyderabad?',
        a: 'Yes! Our certified in-house technician visits your apartment with sample Jindal steel rods, cables, and meshes to measure exact balcony dimensions completely free of charge before any fitting begins.',
    },
    {
        q: 'Which localities in Hyderabad do you provide 2-hour doorstep installation in?',
        a: 'We cover all of Hyderabad & Secunderabad — including Gachibowli, Miyapur, Kukatpally, Kondapur, Madhapur, Financial District, Manikonda, Nallagandla, Tellapur, Chandanagar, Begumpet, Banjara Hills, and Nizampet.',
    },
    {
        q: 'Are your technicians in-house employees or third-party contractors?',
        a: '100% of our installers are in-house, background-verified, uniformed technicians on our company payroll. We take full responsibility for precision drilling, cleanliness, and official warranty handover.',
    },
    {
        q: 'Is the installation safe for rented apartments and high-rise towers?',
        a: 'Yes! We use precision core-drilled anchors with industrial drop sheets, ensuring zero mess, zero structural wall damage, and full compliance with all Hyderabad gated society guidelines.',
    },
    {
        q: 'What warranty is provided with the installation?',
        a: 'We provide an official on-site registered warranty card of 3 to 7 years with fast doorstep service assistance across Hyderabad.',
    },
];

export default function HomePage() {
    return (
        <div className="flex flex-col">
            {/* HERO SECTION */}
            <section className="relative overflow-hidden bg-gradient-to-b from-primary/10 via-background to-background py-12 lg:py-20">
                <div className="pointer-events-none absolute -right-32 -top-24 h-[32rem] w-[32rem] rounded-full bg-primary/15 blur-3xl" />
                <div className="pointer-events-none absolute -left-32 top-1/2 h-[28rem] w-[28rem] rounded-full bg-accent/15 blur-3xl" />

                <div className="mx-auto grid w-full max-w-[80rem] items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]">
                    <div>
                        {/* Top Badge */}
                        <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-primary">
                            <Clock className="h-3.5 w-3.5" /> Doorstep Fitting in 2 Hours • Hyderabad
                        </div>

                        {/* Main Keyword-Rich Title */}
                        <h1 className="font-display mt-6 text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] tracking-tight text-foreground">
                            Hyderabad’s #1 Balcony{' '}
                            <span className="relative inline-block text-primary">
                                <span className="relative z-10">Cloth Hangers & Grills</span>
                                <motion.span
                                    aria-hidden
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
                                    className="absolute inset-x-0 bottom-1.5 z-0 h-3 origin-left rounded-sm bg-primary/20 sm:bottom-2 sm:h-4"
                                />
                            </span>
                        </h1>

                        <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                            Heavy-duty Jindal Stainless Steel ceiling pulley cloth drying hangers, invisible balcony safety grills, wall shoe racks & mosquito mesh doors — measured, fitted, and warrantied at your doorstep in 2 hours.
                        </p>

                        {/* USP Badges */}
                        <div className="mt-6 flex flex-wrap gap-2.5">
                            {['Jindal Stainless Steel', 'Free Sizing & Measurement', 'Warranty upto 3–7 Years', 'In-House Uniformed Crew'].map((usp) => (
                                <span key={usp} className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-600/20 px-3 py-1 text-xs font-semibold text-emerald-700">
                                    <Check className="h-3.5 w-3.5 text-emerald-600" /> {usp}
                                </span>
                            ))}
                        </div>

                        {/* Action Buttons */}
                        <div className="mt-8 flex flex-wrap items-center gap-3.5">
                            <a
                                href="#products"
                                className="flex min-h-[50px] items-center gap-2 rounded-full bg-primary px-7 text-sm sm:text-base font-bold text-primary-foreground shadow-lg shadow-primary/25 transition duration-200 hover:bg-primary/90 active:scale-[0.98]"
                            >
                                Book Free Sizing Visit <ArrowRight className="h-4 w-4" />
                            </a>
                            
                            <a
                                href={getWhatsAppLink()}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex min-h-[50px] items-center gap-2 rounded-full border border-emerald-600/30 bg-emerald-50 px-6 text-sm sm:text-base font-bold text-emerald-700 hover:bg-emerald-100 transition active:scale-[0.98]"
                            >
                                <MessageCircle className="h-4 w-4 fill-emerald-600 text-emerald-600" /> WhatsApp Chat
                            </a>
                        </div>

                        {/* Social Proof Counters */}
                        <dl className="mt-10 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-6">
                            <div>
                                <dt className="font-display text-2xl font-bold text-primary sm:text-3xl">
                                    <CountUp value={16500} suffix="+" />
                                </dt>
                                <dd className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">Homes Fitted</dd>
                            </div>
                            <div>
                                <dt className="font-display text-2xl font-bold text-primary sm:text-3xl">
                                    4.8<span className="text-amber-500">★</span>
                                </dt>
                                <dd className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">Avg Rating</dd>
                            </div>
                            <div>
                                <dt className="font-display text-2xl font-bold text-primary sm:text-3xl">2 hrs</dt>
                                <dd className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">Fast Install</dd>
                            </div>
                        </dl>
                    </div>

                    {/* Right Hero Image Card */}
                    <div className="grid gap-4">
                        <div className="relative overflow-hidden rounded-3xl border border-border shadow-[0_24px_60px_-30px_rgba(37,99,235,0.35)] group">
                            <img
                                src={HERO_IMG}
                                alt="Jindal Stainless Steel Ceiling pulley cloth drying hanger installed on balcony in Hyderabad"
                                className="h-72 w-full object-cover sm:h-84 transition duration-500 group-hover:scale-105"
                            />
                            <div className="absolute bottom-3 left-3 right-3 rounded-2xl bg-background/95 p-3.5 backdrop-blur-md border border-border flex items-center justify-between shadow-lg">
                                <div className="flex items-center gap-2.5">
                                    <ShieldCheck className="h-5 w-5 text-primary shrink-0" />
                                    <div>
                                        <p className="text-xs font-bold text-foreground">Jindal Stainless Steel Quality</p>
                                        <p className="text-[11px] text-muted-foreground">Warranty upto 3–7 Years</p>
                                    </div>
                                </div>
                                <span className="rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-bold text-primary">
                                    Hyderabad
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* MARQUEE HIGHLIGHTS */}
            <div className="overflow-hidden border-y border-border bg-primary py-3.5 text-primary-foreground">
                <div className="tte-marquee flex w-max gap-10 whitespace-nowrap text-xs sm:text-sm font-semibold uppercase tracking-[0.2em]">
                    {[
                        'Ceiling Cloth Drying Hangers Hyderabad',
                        'Invisible Balcony Safety Grills 150kg',
                        'Genuine Jindal Stainless Steel Rails',
                        'Free Sizing & Measurement Visit',
                        '100% In-House Trained Fitters',
                        'Warranty upto 3–7 Years',
                    ].map((item, i) => (
                        <span key={i} className="flex items-center gap-10">
                            {item} <span className="text-cyan-300">/</span>
                        </span>
                    ))}
                    {[
                        'Ceiling Cloth Drying Hangers Hyderabad',
                        'Invisible Balcony Safety Grills 150kg',
                        'Genuine Jindal Stainless Steel Rails',
                        'Free Sizing & Measurement Visit',
                        '100% In-House Trained Fitters',
                        'Warranty upto 3–7 Years',
                    ].map((item, i) => (
                        <span key={`dup-${i}`} className="flex items-center gap-10">
                            {item} <span className="text-cyan-300">/</span>
                        </span>
                    ))}
                </div>
            </div>

            {/* PRODUCTS SECTION */}
            <section id="products" className="scroll-mt-20 border-b border-border bg-secondary/40 py-16 lg:py-24">
                <div className="mx-auto w-full max-w-[80rem] px-4 sm:px-6">
                    <Reveal>
                        <div className="max-w-2xl">
                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Our services</span>
                            <h2 className="font-display mt-2 text-3xl font-bold leading-tight sm:text-4xl text-foreground">
                                Balcony Upgrades Engineered with Jindal Steel
                            </h2>
                            <p className="mt-3 text-base text-muted-foreground leading-relaxed">
                                Choose a service below for detailed technical specifications, load ratings, and to book your free measurement visit.
                            </p>
                        </div>
                    </Reveal>

                    <div className="mt-12 grid gap-6 md:grid-cols-2">
                        {PRODUCTS.map((p, i) => {
                            const Icon = ICONS[p.icon] ?? Sparkles;
                            return (
                                <Reveal key={p.slug} delay={i * 0.08}>
                                    <Link
                                        href={`/products/${p.slug}`}
                                        className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border bg-card p-7 transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-25px_rgba(37,99,235,0.3)] ${
                                            p.bestSeller ? 'border-primary ring-2 ring-primary/20' : 'border-border'
                                        }`}
                                    >
                                        {p.bestSeller && (
                                            <span className="absolute right-5 top-5 inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wide text-primary-foreground shadow-sm">
                                                <Sparkles className="h-3.5 w-3.5" /> Best seller
                                            </span>
                                        )}

                                        <div>
                                            <span className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${p.accent} text-white shadow-md`}>
                                                <Icon className="h-7 w-7" strokeWidth={1.6} />
                                            </span>
                                            
                                            <h3 className="font-display mt-5 text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                                                {p.name}
                                            </h3>
                                            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.heroSub}</p>
                                            
                                            <div className="mt-5 flex flex-wrap items-center gap-3 text-xs font-semibold text-muted-foreground">
                                                <span className="flex items-center gap-1 text-primary">
                                                    <Star className="h-4 w-4 text-amber-500 fill-amber-500" /> {p.stats.rating} rating
                                                </span>
                                                <span>•</span>
                                                <span>{p.stats.customers} homes</span>
                                                <span>•</span>
                                                <span className="text-foreground">{p.warranty}</span>
                                            </div>
                                        </div>

                                        <div className="mt-8 flex items-center justify-between border-t border-border pt-5">
                                            <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-600">
                                                <CheckCircle2 className="h-4 w-4" /> Free Sizing Visit
                                            </div>
                                            <span className="flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground transition group-hover:bg-primary/90 group-hover:shadow-md">
                                                View & Book Free <ArrowRight className="h-4 w-4" />
                                            </span>
                                        </div>
                                    </Link>
                                </Reveal>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* HYDERABAD LOCALITIES DIRECTORY FOR SEO & GOOGLE ADS */}
            <section id="localities" className="scroll-mt-20 py-16 lg:py-24 border-b border-border bg-background">
                <div className="mx-auto w-full max-w-[80rem] px-4 sm:px-6">
                    <Reveal>
                        <div className="max-w-2xl">
                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Hyderabad Service Coverage</span>
                            <h2 className="font-display mt-2 text-3xl font-bold sm:text-4xl text-foreground">
                                Fast Doorstep Installation in Your Locality
                            </h2>
                            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                                Dedicated installation vans positioned across major areas in Hyderabad for 2-hour doorstep response:
                            </p>
                        </div>
                    </Reveal>

                    <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {LOCATIONS.map((loc, idx) => (
                            <Reveal key={loc.slug} delay={idx * 0.04}>
                                <Link
                                    href={`/location/${loc.slug}`}
                                    className="group flex flex-col justify-between rounded-2xl border border-border bg-card p-5 transition duration-200 hover:-translate-y-1 hover:border-primary hover:shadow-md"
                                >
                                    <div>
                                        <div className="flex items-center justify-between">
                                            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                                <MapPin className="h-4 w-4" />
                                            </span>
                                            <span className="text-[11px] font-bold text-emerald-600">
                                                {loc.deliveryTime}
                                            </span>
                                        </div>
                                        <h3 className="font-display mt-3 text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                                            {loc.name}
                                        </h3>
                                        <p className="mt-1 text-xs text-muted-foreground line-clamp-2">
                                            Cloth hangers, invisible safety grills & mesh doors in {loc.name}.
                                        </p>
                                    </div>
                                    <span className="mt-4 text-xs font-bold text-primary flex items-center gap-1 group-hover:underline">
                                        View {loc.name} Services →
                                    </span>
                                </Link>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* 2-HOUR PROCESS SECTION */}
            <section id="process" className="scroll-mt-20 py-16 lg:py-24 border-b border-border bg-secondary/30">
                <div className="mx-auto w-full max-w-[80rem] px-4 sm:px-6">
                    <Reveal>
                        <div className="text-center max-w-2xl mx-auto">
                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">How it works</span>
                            <h2 className="font-display mt-2 text-3xl font-bold sm:text-4xl text-foreground">
                                Doorstep Installation in 4 Easy Steps
                            </h2>
                            <p className="mt-3 text-sm text-muted-foreground">
                                From your free booking to complete handover in under 2 hours.
                            </p>
                        </div>
                    </Reveal>

                    <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {[
                            {
                                step: '01',
                                icon: Zap,
                                title: 'Book Free Visit',
                                text: 'Select your service, choose preferred date, and book online or via WhatsApp in 30 seconds.',
                            },
                            {
                                step: '02',
                                icon: Ruler,
                                title: 'Free Measurement',
                                text: 'Our technician visits your home with sample Jindal steel rails to measure and confirm sizing.',
                            },
                            {
                                step: '03',
                                icon: Wind,
                                title: 'Clean 2-Hour Fit',
                                text: 'We lay drop sheets, core-drill precision mounting anchors, and carry away all drilling debris.',
                            },
                            {
                                step: '04',
                                icon: ShieldCheck,
                                title: 'Load Test & Warranty',
                                text: 'We load-test together, register your 3–7 years warranty, and ensure total satisfaction.',
                            },
                        ].map((item, idx) => (
                            <Reveal key={item.step} delay={idx * 0.08}>
                                <div className="flex h-full flex-col rounded-3xl border border-border bg-card p-6 shadow-sm">
                                    <div className="flex items-center justify-between">
                                        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                                            <item.icon className="h-5 w-5" />
                                        </span>
                                        <span className="font-display text-xl font-extrabold text-primary">{item.step}</span>
                                    </div>
                                    <h3 className="font-display mt-5 text-lg font-bold text-foreground">{item.title}</h3>
                                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHY CHOOSE US */}
            <section id="why" className="scroll-mt-20 py-16 lg:py-24 border-b border-border bg-background">
                <div className="mx-auto grid w-full max-w-[80rem] gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
                    <div>
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Why Tap to Easy</span>
                        <h2 className="font-display mt-2 text-3xl font-bold sm:text-4xl text-foreground leading-tight">
                            Hyderabad’s dedicated in-house balcony installation crew
                        </h2>
                        <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                            Unlike freelance contractor aggregators, every Tap to Easy installation is carried out by our full-time, background-verified specialists. We guarantee precision drilling, genuine Jindal Stainless Steel materials, and long-term support.
                        </p>

                        <div className="mt-8 space-y-4">
                            {[
                                'Trained in-house crew on company payroll — no random third-party contractors',
                                'Genuine Jindal Stainless Steel rust-resistant rails & high-tensile cables',
                                'Dust-free drilling with industrial drop sheets for rented and owned homes',
                                'Official on-site registered warranty of 3–7 years with doorstep support',
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                    <span className="text-sm font-medium text-foreground">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                        {[
                            { icon: Clock, title: 'Same-Day Slots', text: 'Doorstep fitting across Hyderabad within 2 hours of booking.' },
                            { icon: ShieldCheck, title: '3–7 Yrs Warranty', text: 'Official warranty card provided upon handover.' },
                            { icon: ThumbsUp, title: '16,500+ Homes', text: 'Trusted by gated communities in Gachibowli, Miyapur, Kukatpally.' },
                            { icon: MapPin, title: 'City-Wide Fleet', text: 'Dedicated vans stationed across all major Hyderabad zones.' },
                        ].map((box) => (
                            <div key={box.title} className="rounded-3xl border border-border bg-card p-6 shadow-sm">
                                <box.icon className="h-7 w-7 text-primary" strokeWidth={1.8} />
                                <h3 className="font-display mt-4 text-lg font-bold text-foreground">{box.title}</h3>
                                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{box.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* REVIEWS STRIP */}
            <section id="reviews" className="scroll-mt-20 py-16 lg:py-24 border-b border-border bg-secondary/30">
                <div className="mx-auto w-full max-w-[80rem] px-4 sm:px-6">
                    <Reveal>
                        <div className="text-center max-w-2xl mx-auto">
                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Testimonials</span>
                            <h2 className="font-display mt-2 text-3xl font-bold sm:text-4xl text-foreground">
                                Rated 4.8★ by Hyderabad Residents
                            </h2>
                            <p className="mt-3 text-sm text-muted-foreground">
                                Real reviews from homeowners in Gachibowli, Miyapur, Kukatpally & beyond.
                            </p>
                        </div>
                    </Reveal>

                    <div className="mt-12 grid gap-6 md:grid-cols-3">
                        {[
                            {
                                name: 'Priya Sharma',
                                area: 'Gachibowli (My Home Bhooja)',
                                service: 'Balcony Cloth Hanger',
                                text: 'Booked in the morning, fitted by lunch! The 6-pipe Jindal steel pulley operates so smoothly my mother can lower it with one finger.',
                            },
                            {
                                name: 'Arjun Naidu',
                                area: 'Financial District (Aparna Sarovar)',
                                service: 'Invisible Safety Grills',
                                text: 'We wanted safety for our toddlers without ruining our 18th floor view. Invisible grills look stunning and feel rock solid.',
                            },
                            {
                                name: 'Meena Iyer',
                                area: 'Ameerpet',
                                service: 'Mosquito Mesh Door',
                                text: 'The magnetic auto-close door is wonderful. Breeze comes in, zero mosquitoes, and the fitting was done cleanly in 1 hour.',
                            },
                        ].map((rev, idx) => (
                            <Reveal key={rev.name} delay={idx * 0.08}>
                                <div className="flex h-full flex-col justify-between rounded-3xl border border-border bg-card p-6 shadow-sm">
                                    <div>
                                        <div className="flex gap-1 text-amber-500">
                                            {Array.from({ length: 5 }).map((_, k) => (
                                                <Star key={k} className="h-4 w-4 fill-amber-500" />
                                            ))}
                                        </div>
                                        <p className="mt-4 text-sm leading-relaxed text-foreground">“{rev.text}”</p>
                                    </div>

                                    <div className="mt-6 border-t border-border pt-4">
                                        <p className="text-sm font-bold text-foreground">{rev.name}</p>
                                        <p className="text-xs text-muted-foreground">{rev.area}</p>
                                        <span className="mt-1.5 inline-block rounded-md bg-secondary px-2 py-0.5 text-[10px] font-semibold text-primary">
                                            {rev.service}
                                        </span>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQS */}
            <section id="faq" className="scroll-mt-20 py-16 lg:py-24 border-b border-border bg-background">
                <div className="mx-auto w-full max-w-[50rem] px-4 sm:px-6">
                    <Reveal>
                        <div className="text-center">
                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">FAQ</span>
                            <h2 className="font-display mt-2 text-3xl font-bold sm:text-4xl text-foreground">
                                Frequently Asked Questions
                            </h2>
                            <p className="mt-3 text-sm text-muted-foreground">
                                Clear answers about our Jindal Stainless Steel, invisible grills, and Hyderabad installation.
                            </p>
                        </div>
                    </Reveal>

                    <div className="mt-10">
                        <Accordion type="single" collapsible className="w-full space-y-3">
                            {GENERAL_FAQS.map((faq, index) => (
                                <AccordionItem key={index} value={`faq-${index}`} className="rounded-2xl border border-border bg-card px-5">
                                    <AccordionTrigger className="text-base font-bold text-foreground hover:no-underline hover:text-primary">
                                        {faq.q}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                                        {faq.a}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </section>

            {/* SEO KEYWORD HUB / POPULAR SEARCHES */}
            <section className="border-b border-border bg-secondary/40 py-12">
                <div className="mx-auto w-full max-w-[80rem] px-4 sm:px-6">
                    <p className="font-display text-sm font-bold uppercase tracking-wider text-foreground">
                        Popular Balcony Searches in Hyderabad
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2 text-xs text-muted-foreground">
                        {[
                            'Balcony Cloth Hangers Hyderabad',
                            'Ceiling Pulley Cloth Drying Hanger',
                            'Jindal Stainless Steel Cloth Hanger',
                            '6 Pipe Cloth Hanger Hyderabad',
                            '8 Pipe Ceiling Cloth Dryer',
                            'Invisible Balcony Safety Grills Hyderabad',
                            'High Rise Balcony Safety Grills',
                            'Child Safety Invisible Grills',
                            'Balcony Cloth Hanger Gachibowli',
                            'Invisible Grills Miyapur',
                            'Balcony Cloth Hanger Kukatpally',
                            'Invisible Grills Financial District',
                            'Balcony Cloth Hanger Kondapur',
                            'Mosquito Mesh Doors Hyderabad',
                            'Wall Mounted Shoe Racks Hyderabad',
                        ].map((term) => (
                            <span key={term} className="rounded-lg bg-card border border-border px-3 py-1.5 font-medium text-foreground">
                                {term}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* BOTTOM CALL TO ACTION */}
            <section className="bg-primary py-16 text-primary-foreground">
                <div className="mx-auto flex w-full max-w-[72rem] flex-col items-center justify-between gap-8 px-4 sm:px-6 text-center sm:flex-row sm:text-left">
                    <div>
                        <h2 className="font-display text-3xl font-bold sm:text-4xl">Ready to upgrade your balcony?</h2>
                        <p className="mt-2 max-w-md text-sm text-primary-foreground/85">
                            Book your free doorstep measurement visit today. Genuine Jindal Stainless Steel & 3–7 years warranty.
                        </p>
                    </div>
                    <div className="flex flex-wrap items-center gap-3.5 justify-center sm:justify-start">
                        <a
                            href="#products"
                            className="flex min-h-[48px] items-center gap-2 rounded-full bg-white px-7 text-sm font-bold text-primary shadow-lg transition hover:bg-slate-100 active:scale-[0.98]"
                        >
                            Select a Service <ArrowRight className="h-4 w-4" />
                        </a>
                        <a
                            href={getWhatsAppLink()}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex min-h-[48px] items-center gap-2 rounded-full border border-white/40 bg-emerald-500 px-6 text-sm font-bold text-white transition hover:bg-emerald-600 active:scale-[0.98]"
                        >
                            <MessageCircle className="h-4 w-4 fill-white" /> WhatsApp Us
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
