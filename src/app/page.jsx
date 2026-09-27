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
import HomeProductTabs from '@/components/HomeProductTabs';
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
        q: 'Which localities in Hyderabad do you provide doorstep installation in?',
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
                            <Clock className="h-3.5 w-3.5" /> Doorstep Fitting in 4 Hours
                        </div>

                        {/* Main Keyword-Rich Title */}
                        <h1 className="font-display mt-6 text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] tracking-tight text-foreground">
                            Hyderabad&apos;s No. 1{' '}
                            <span className="relative inline-block text-primary">
                                <span className="relative z-10">Home Improvement Work</span>
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
                            Complete home improvement solutions for modern homes — including ceiling-mounted cloth hangers, invisible grills, shoe racks, mosquito mesh and pigeon nets, with professional measurement, installation and reliable after-sales support.
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
                                Book Free Installation Visit <ArrowRight className="h-4 w-4" />
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
                                    <CountUp value={20000} suffix="+" />
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
                                <dt className="font-display text-2xl font-bold text-primary sm:text-3xl">4 hrs</dt>
                                <dd className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">Installation</dd>
                            </div>
                        </dl>
                    </div>

                    {/* Right Hero Image Card */}
                    <div className="grid gap-4 w-full">
                        <div className="relative overflow-hidden rounded-[2.5rem] border border-border shadow-[0_32px_80px_-24px_rgba(37,99,235,0.4)] group">
                            <img
                                src={HERO_IMG}
                                alt="Jindal Stainless Steel Ceiling pulley cloth drying hanger installed on balcony in Hyderabad"
                                className="h-80 w-full object-cover sm:h-[400px] lg:h-[550px] xl:h-[650px] transition duration-700 ease-in-out group-hover:scale-[1.03]"
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
                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Our Home Improvement Services</span>
                            <h2 className="font-display mt-2 text-3xl font-bold leading-tight sm:text-4xl text-foreground">
                                Professional Home Upgrades & Installations
                            </h2>
                            <p className="mt-3 text-base text-muted-foreground leading-relaxed">
                                Choose a category below for detailed technical specifications, product options, and to book your free measurement visit.
                            </p>
                        </div>
                    </Reveal>

                    <HomeProductTabs />
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
                                Dedicated installation vans positioned across major areas in Hyderabad for fast doorstep response:
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
            <section id="process" className="scroll-mt-20 py-16 lg:py-24 border-b border-border bg-primary">
                <div className="mx-auto w-full max-w-[80rem] px-4 sm:px-6">
                    <Reveal>
                        <div className="text-center max-w-2xl mx-auto">
                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">How it works</span>
                            <h2 className="font-display mt-2 text-3xl font-bold sm:text-4xl text-white">
                                Doorstep Installation Process
                            </h2>
                            <p className="mt-3 text-sm text-secondary">
                                From your free booking to complete handover within 4 hours.
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
                                title: 'On Site Free Measurement',
                                text: 'Our technician visits your home with sample Jindal steel rails to measure and confirm sizing.',
                            },
                            {
                                step: '03',
                                icon: Wind,
                                title: 'Professional Installation',
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
                <div className="mx-auto w-full max-w-[80rem] px-4 sm:px-6">
                    <Reveal>
                        <div className="text-center max-w-2xl mx-auto">
                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Why Tap to Easy</span>
                            <h2 className="font-display mt-2 text-3xl font-bold sm:text-4xl text-foreground leading-tight">
                                Why Customers Choose Us
                            </h2>
                            <p className="mt-3 text-sm text-muted-foreground">
                                Our commitment goes beyond installation — we provide reliable support, transparent service and a professional experience from start to finish.
                            </p>
                        </div>
                    </Reveal>

                    <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {[
                            {
                                icon: ShieldCheck,
                                title: 'Best After-Sales Support',
                                text: 'Dedicated after-sales support to make sure customers are taken care of even after installation.',
                            },
                            {
                                icon: Clock,
                                title: 'Support Within 24 Hours',
                                text: 'Once a service issue is reported, our team aims to resolve it within 24 hours.',
                            },
                            {
                                icon: CheckCircle2,
                                title: 'No Random Third-Party Contact',
                                text: "Customers don't have to deal with random third-party technicians or unknown contacts. Our support is managed through the Tap to Easy team.",
                            },
                            {
                                icon: Zap,
                                title: 'Technician Comes Fully Prepared',
                                text: "Our technician carries the required tools, equipment and installation materials, so customers don't have to arrange anything.",
                            },
                            {
                                icon: Star,
                                title: 'Same-Day Warranty Start',
                                text: 'Warranty coverage starts from the day the installation is completed and the warranty is registered.',
                            },
                            {
                                icon: Sparkles,
                                title: 'Same-Day Slot — Within 4 Hours',
                                text: 'Where service availability permits, we provide same-day installation slots with fitting targeted within 4 hours.',
                            },
                            {
                                icon: Building2,
                                title: 'City-Wise Warehouses',
                                text: 'City-wise warehouse support helps us maintain faster service, better availability and quicker response times.',
                            },
                            {
                                icon: ThumbsUp,
                                title: '20,000+ Homes Work Completed',
                                text: 'More than 20,000 home improvement works completed across our service network.',
                            },
                        ].map((box, idx) => (
                            <Reveal key={box.title} delay={idx * 0.06}>
                                <div className="flex h-full flex-col rounded-3xl border border-border bg-card p-6 shadow-sm hover:border-primary/40 hover:shadow-md transition duration-200">
                                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                                        <box.icon className="h-6 w-6 text-primary" strokeWidth={1.8} />
                                    </span>
                                    <h3 className="font-display mt-4 text-base font-bold text-foreground">{box.title}</h3>
                                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground flex-1">{box.text}</p>
                                </div>
                            </Reveal>
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
                                Real Reviews from Our Customers
                            </h2>
                            <p className="mt-3 text-sm text-muted-foreground">
                                See what our customers say about our products, installation and service.
                            </p>
                        </div>
                    </Reveal>

                    <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {[
                            {
                                name: 'Izhaar Ahmed',
                                area: 'Kohinoor by Auro Realty, Hitech City',
                                text: 'Excellent product and Simple Installation 👌',
                            },
                            {
                                name: 'Lata Shrinivas',
                                area: null,
                                text: 'Nice quality product and good service. Satisfied',
                            },
                            {
                                name: 'Mohd Sam',
                                area: 'Kokapet',
                                text: 'Excellent work !! At Kokapet\nCustomer support is well explained in detailed\nInstallation done within 2hrs',
                            },
                            {
                                name: 'Prasanthi Emani',
                                area: null,
                                text: 'Excellent service by their team. We have opted for new cloth hangers and also rope change for old ones. Product is really good and also service is very professional and excellent.\nTook all our requirements and fixed them and also mainly their communication is appreciable.',
                            },
                            {
                                name: 'Yahya Alshami',
                                area: null,
                                text: 'Very good quality and very friendly way of attending customer.... on time delivery',
                            },
                        ].map((rev, idx) => (
                            <Reveal key={rev.name} delay={idx * 0.08}>
                                <div className="flex h-full flex-col justify-between rounded-3xl border border-border bg-card p-6 shadow-sm hover:border-primary/30 hover:shadow-md transition duration-200">
                                    <div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex gap-1 text-amber-500">
                                                {Array.from({ length: 5 }).map((_, k) => (
                                                    <Star key={k} className="h-4 w-4 fill-amber-500" />
                                                ))}
                                            </div>
                                            <span className="text-[10px] font-semibold text-muted-foreground bg-secondary px-2 py-0.5 rounded-full">Google Review</span>
                                        </div>
                                        <p className="mt-4 text-sm leading-relaxed text-foreground whitespace-pre-line">&ldquo;{rev.text}&rdquo;</p>
                                    </div>

                                    <div className="mt-6 border-t border-border pt-4">
                                        <p className="text-sm font-bold text-foreground">{rev.name}</p>
                                        {rev.area && (
                                            <p className="text-xs text-muted-foreground mt-0.5">{rev.area}</p>
                                        )}
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
