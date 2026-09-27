'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    Phone,
    Mail,
    MapPin,
    Clock,
    MessageCircle,
    ShieldCheck,
    ArrowRight,
    Loader2,
    CheckCircle2,
    Zap,
    Building2,
    Send,
} from 'lucide-react';
import Reveal from '@/components/Reveal';
import { PHONE_NUMBER, PHONE_NUMBER_RAW, getWhatsAppLink } from '@/data/products';

const fieldClass =
    'w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 placeholder:text-muted-foreground/60 shadow-sm';

const CONTACT_CHANNELS = [
    {
        icon: Phone,
        label: 'Call Us',
        value: PHONE_NUMBER,
        sub: 'Mon–Sun, 8 AM – 8 PM',
        href: `tel:+919390804146`,
        color: 'text-primary',
        bg: 'bg-primary/10',
        cta: 'Call Now',
        external: false,
    },
    {
        icon: MessageCircle,
        label: 'WhatsApp',
        value: '+91 93908 04146',
        sub: 'Instant reply within minutes',
        href: getWhatsAppLink(),
        color: 'text-emerald-600',
        bg: 'bg-emerald-50',
        cta: 'Chat Now',
        external: true,
    },
    {
        icon: Mail,
        label: 'Email Us',
        value: 'info@taptoeasy.com',
        sub: 'We reply within 24 hours',
        href: 'mailto:info@taptoeasy.com',
        color: 'text-accent',
        bg: 'bg-accent/10',
        cta: 'Send Email',
        external: false,
    },
    {
        icon: MapPin,
        label: 'Our Location',
        value: 'Hyderabad, Telangana',
        sub: 'Serving all major localities',
        href: 'https://maps.google.com/?q=Tap+to+Easy+Hyderabad',
        color: 'text-rose-500',
        bg: 'bg-rose-50',
        cta: 'Get Directions',
        external: true,
    },
];

const SERVICES = [
    'Ceiling Cloth Drying Hangers',
    'Invisible Balcony Safety Grills',
    'Mosquito Mesh Doors & Windows',
    'Wall-Mounted Shoe Racks',
    'Pigeon Protection Nets',
    'Other / Not Sure Yet',
];

export default function ContactPage() {
    const [form, setForm] = useState({
        name: '',
        phone: '',
        email: '',
        locality: '',
        service: '',
        message: '',
    });
    const [status, setStatus] = useState('idle'); // idle | loading | success | error
    const [errorMsg, setErrorMsg] = useState('');

    const update = (key) => (e) => setForm((prev) => ({ ...prev, [key]: e.target.value }));

    const submit = async (e) => {
        e.preventDefault();
        if (status === 'loading') return;
        setStatus('loading');
        setErrorMsg('');

        try {
            const res = await fetch('/api/bookings', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: form.name,
                    phone: form.phone,
                    city: form.locality ? `${form.locality}, Hyderabad` : 'Hyderabad',
                    address: '',
                    service: 'contact_enquiry',
                    model: 'not_sure',
                    product: form.service || 'General Enquiry',
                    notes: form.message,
                    email: form.email,
                }),
            });

            if (!res.ok) {
                const data = await res.json().catch(() => ({}));
                console.warn('Contact API response:', data);
            }

            setStatus('success');
        } catch (err) {
            console.error('Contact form error:', err);
            setStatus('error');
            setErrorMsg(
                'Could not send your message. Please call or WhatsApp us directly on ' + PHONE_NUMBER + '.'
            );
        }
    };

    return (
        <div className="flex flex-col">
            {/* ContactPage + LocalBusiness schema for rich snippets */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'ContactPage',
                        '@id': 'https://taptoeasy.com/contact/#page',
                        name: 'Contact Tap to Easy — Free Site Visit Hyderabad',
                        description: 'Contact Tap to Easy Hyderabad for free doorstep measurement, pricing enquiries, or instant WhatsApp support for cloth hangers, invisible grills, mosquito mesh and shoe racks.',
                        url: 'https://taptoeasy.com/contact',
                        mainEntity: { '@id': 'https://taptoeasy.com/#business' },
                        breadcrumb: {
                            '@type': 'BreadcrumbList',
                            itemListElement: [
                                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://taptoeasy.com' },
                                { '@type': 'ListItem', position: 2, name: 'Contact Us', item: 'https://taptoeasy.com/contact' },
                            ],
                        },
                    }),
                }}
            />
            {/* ───────────── HERO ───────────── */}
            <section className="relative overflow-hidden bg-gradient-to-b from-primary/10 via-background to-background py-14 lg:py-20">
                <div className="pointer-events-none absolute -right-32 -top-24 h-[28rem] w-[28rem] rounded-full bg-primary/15 blur-3xl" />
                <div className="pointer-events-none absolute -left-32 top-1/2 h-[24rem] w-[24rem] rounded-full bg-accent/15 blur-3xl" />

                <div className="relative mx-auto w-full max-w-[80rem] px-4 sm:px-6">
                    <Reveal>
                        <div className="text-center max-w-3xl mx-auto">
                            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-primary mb-5">
                                <Clock className="h-3.5 w-3.5" /> Mon–Sun 8 AM – 8 PM &bull; Hyderabad
                            </div>

                            <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] tracking-tight text-foreground">
                                Get in{' '}
                                <span className="relative inline-block text-primary">
                                    <span className="relative z-10">Touch With Us</span>
                                    <motion.span
                                        aria-hidden
                                        initial={{ scaleX: 0 }}
                                        animate={{ scaleX: 1 }}
                                        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
                                        className="absolute inset-x-0 bottom-1.5 z-0 h-3 origin-left rounded-sm bg-primary/20 sm:bottom-2 sm:h-4"
                                    />
                                </span>
                            </h1>

                            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg max-w-xl mx-auto">
                                Book a free measurement visit, ask about pricing, or get instant answers on WhatsApp — our team is available 7&nbsp;days a week across all of Hyderabad.
                            </p>

                            <div className="mt-6 flex flex-wrap justify-center gap-2.5">
                                {['Free Site Visit', 'Same-Day Response', '7-Day Availability', '100% In-House Team'].map(
                                    (usp) => (
                                        <span
                                            key={usp}
                                            className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-600/20 px-3 py-1 text-xs font-semibold text-emerald-700"
                                        >
                                            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" /> {usp}
                                        </span>
                                    )
                                )}
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* ───────────── CONTACT CHANNELS ───────────── */}
            <section className="border-b border-border bg-secondary/40 py-12 lg:py-16">
                <div className="mx-auto w-full max-w-[80rem] px-4 sm:px-6">
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {CONTACT_CHANNELS.map((ch, idx) => (
                            <Reveal key={ch.label} delay={idx * 0.07}>
                                <a
                                    href={ch.href}
                                    target={ch.external ? '_blank' : undefined}
                                    rel={ch.external ? 'noopener noreferrer' : undefined}
                                    className="group flex h-full flex-col rounded-2xl border border-border bg-card p-5 transition duration-200 hover:-translate-y-1 hover:border-primary hover:shadow-md"
                                >
                                    <span
                                        className={`flex h-11 w-11 items-center justify-center rounded-2xl ${ch.bg} ${ch.color}`}
                                    >
                                        <ch.icon className="h-5 w-5" />
                                    </span>
                                    <p className="mt-4 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                                        {ch.label}
                                    </p>
                                    <p className="mt-1 text-base font-bold text-foreground group-hover:text-primary transition-colors">
                                        {ch.value}
                                    </p>
                                    <p className="mt-1 text-xs text-muted-foreground">{ch.sub}</p>
                                    <span
                                        className={`mt-4 text-xs font-bold ${ch.color} flex items-center gap-1 group-hover:underline`}
                                    >
                                        {ch.cta} &rarr;
                                    </span>
                                </a>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ───────────── FORM + MAP ───────────── */}
            <section className="py-16 lg:py-24 bg-background border-b border-border">
                <div className="mx-auto w-full max-w-[80rem] px-4 sm:px-6">
                    <div className="grid gap-10 lg:grid-cols-2 lg:gap-14 items-start">

                        {/* LEFT – Form */}
                        <Reveal>
                            {status === 'success' ? (
                                <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-10 text-center shadow-[0_24px_60px_-30px_rgba(16,185,129,0.25)]">
                                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
                                        <CheckCircle2 className="h-9 w-9 text-emerald-600" />
                                    </div>
                                    <h2 className="font-display mt-5 text-2xl font-bold text-foreground">
                                        Message Received!
                                    </h2>
                                    <p className="mt-2 text-sm text-muted-foreground max-w-sm mx-auto">
                                        Thank you, <strong>{form.name}</strong>! Our team will reach out to you shortly on{' '}
                                        <strong>{form.phone}</strong>. You can also WhatsApp us for an instant reply.
                                    </p>
                                    <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                                        <a
                                            href={getWhatsAppLink(form.service)}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-emerald-700"
                                        >
                                            <MessageCircle className="h-4 w-4 fill-white" /> WhatsApp Us
                                        </a>
                                        <Link
                                            href="/"
                                            className="flex items-center justify-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-secondary"
                                        >
                                            Back to Home
                                        </Link>
                                    </div>
                                </div>
                            ) : (
                                <form
                                    onSubmit={submit}
                                    className="rounded-3xl border border-border bg-card p-6 shadow-[0_24px_60px_-30px_rgba(37,99,235,0.25)] sm:p-8 relative overflow-hidden"
                                >
                                    {/* Header */}
                                    <div className="flex items-center justify-between gap-2">
                                        <div className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-primary">
                                            <Zap className="h-3.5 w-3.5" /> Quick Enquiry Form
                                        </div>
                                        <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
                                            <CheckCircle2 className="h-3.5 w-3.5" /> Free Consultation
                                        </span>
                                    </div>

                                    <h2 className="font-display mt-3 text-2xl font-bold leading-tight sm:text-3xl text-foreground">
                                        Send Us a Message
                                    </h2>
                                    <p className="mt-1.5 text-sm text-muted-foreground">
                                        Fill in the form below and we&apos;ll get back to you within a few hours.
                                    </p>

                                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                                        <div className="flex flex-col gap-1.5">
                                            <label
                                                htmlFor="ct-name"
                                                className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                                            >
                                                Full Name *
                                            </label>
                                            <input
                                                id="ct-name"
                                                required
                                                value={form.name}
                                                onChange={update('name')}
                                                className={fieldClass}
                                                placeholder="e.g. Sravanthi Rao"
                                            />
                                        </div>

                                        <div className="flex flex-col gap-1.5">
                                            <label
                                                htmlFor="ct-phone"
                                                className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                                            >
                                                Mobile Number *
                                            </label>
                                            <input
                                                id="ct-phone"
                                                required
                                                type="tel"
                                                inputMode="tel"
                                                value={form.phone}
                                                onChange={update('phone')}
                                                className={fieldClass}
                                                placeholder="e.g. 98765 43210"
                                            />
                                        </div>

                                        <div className="flex flex-col gap-1.5">
                                            <label
                                                htmlFor="ct-email"
                                                className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                                            >
                                                Email Address
                                            </label>
                                            <input
                                                id="ct-email"
                                                type="email"
                                                value={form.email}
                                                onChange={update('email')}
                                                className={fieldClass}
                                                placeholder="e.g. yourname@email.com"
                                            />
                                        </div>

                                        <div className="flex flex-col gap-1.5">
                                            <label
                                                htmlFor="ct-locality"
                                                className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                                            >
                                                Locality in Hyderabad *
                                            </label>
                                            <input
                                                id="ct-locality"
                                                required
                                                value={form.locality}
                                                onChange={update('locality')}
                                                className={fieldClass}
                                                placeholder="e.g. Gachibowli, Kondapur"
                                            />
                                        </div>

                                        <div className="flex flex-col gap-1.5 sm:col-span-2">
                                            <label
                                                htmlFor="ct-service"
                                                className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                                            >
                                                Service Interested In
                                            </label>
                                            <select
                                                id="ct-service"
                                                value={form.service}
                                                onChange={update('service')}
                                                className={fieldClass}
                                            >
                                                <option value="">Select a service&hellip;</option>
                                                {SERVICES.map((s) => (
                                                    <option key={s} value={s}>
                                                        {s}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>

                                        <div className="flex flex-col gap-1.5 sm:col-span-2">
                                            <label
                                                htmlFor="ct-message"
                                                className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                                            >
                                                Message / Additional Details
                                            </label>
                                            <textarea
                                                id="ct-message"
                                                rows={3}
                                                value={form.message}
                                                onChange={update('message')}
                                                className={fieldClass}
                                                placeholder="e.g. I have a 10×4 ft balcony in a 12th floor flat and need a quote for cloth hangers and invisible grills."
                                            />
                                        </div>
                                    </div>

                                    {errorMsg && (
                                        <div className="mt-4 rounded-xl bg-destructive/10 p-3 text-xs font-medium text-destructive">
                                            {errorMsg}
                                        </div>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={status === 'loading'}
                                        id="ct-submit"
                                        className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-base font-bold text-primary-foreground shadow-lg shadow-primary/25 transition duration-200 hover:bg-primary/90 active:scale-[0.98] disabled:opacity-70"
                                    >
                                        {status === 'loading' ? (
                                            <>
                                                <Loader2 className="h-5 w-5 animate-spin" /> Sending Message&hellip;
                                            </>
                                        ) : (
                                            <>
                                                Send Message <Send className="h-4 w-4" />
                                            </>
                                        )}
                                    </button>

                                    <div className="mt-4 pt-4 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
                                        <span className="text-xs text-muted-foreground flex items-center gap-1.5">
                                            <ShieldCheck className="h-4 w-4 text-primary" /> Genuine Jindal Steel &bull; 3&ndash;7 Yrs Warranty
                                        </span>
                                        <a
                                            href={getWhatsAppLink(form.service)}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 hover:text-emerald-700 transition"
                                        >
                                            <MessageCircle className="h-4 w-4 fill-emerald-600" /> Chat on WhatsApp Instead &rarr;
                                        </a>
                                    </div>
                                </form>
                            )}
                        </Reveal>

                        {/* RIGHT – Business Info + Map */}
                        <div className="flex flex-col gap-6">
                            <Reveal delay={0.1}>
                                <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
                                    <div className="flex items-center gap-3 mb-5">
                                        <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                                            <Building2 className="h-5 w-5" />
                                        </span>
                                        <div>
                                            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                                                Business Details
                                            </p>
                                            <p className="font-display text-lg font-bold text-foreground">Tap to Easy</p>
                                        </div>
                                    </div>

                                    <div className="space-y-3 text-sm text-muted-foreground">
                                        <div className="flex items-start gap-3">
                                            <MapPin className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                                            <span>Hyderabad &amp; Secunderabad, Telangana, India</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Clock className="h-4 w-4 text-primary shrink-0" />
                                            <span>
                                                Mon &ndash; Sun:{' '}
                                                <strong className="text-foreground">8:00 AM &ndash; 8:00 PM</strong>
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Phone className="h-4 w-4 text-primary shrink-0" />
                                            <a
                                                href={`tel:+919390804146`}
                                                className="font-semibold text-foreground hover:text-primary transition"
                                            >
                                                {PHONE_NUMBER}
                                            </a>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Mail className="h-4 w-4 text-primary shrink-0" />
                                            <a
                                                href="mailto:info@taptoeasy.com"
                                                className="hover:text-primary transition"
                                            >
                                                info@taptoeasy.com
                                            </a>
                                        </div>
                                    </div>

                                    <div className="mt-5 pt-4 border-t border-border grid grid-cols-2 gap-2">
                                        <a
                                            href={`tel:+919390804146`}
                                            className="flex items-center justify-center gap-1.5 rounded-full bg-primary px-4 py-2.5 text-xs font-bold text-primary-foreground transition hover:bg-primary/90"
                                        >
                                            <Phone className="h-3.5 w-3.5" /> Call Now
                                        </a>
                                        <a
                                            href={getWhatsAppLink()}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center gap-1.5 rounded-full border border-emerald-600/30 bg-emerald-50 px-4 py-2.5 text-xs font-bold text-emerald-700 transition hover:bg-emerald-100"
                                        >
                                            <MessageCircle className="h-3.5 w-3.5 fill-emerald-600" /> WhatsApp
                                        </a>
                                    </div>
                                </div>
                            </Reveal>

                            {/* Google Maps Embed */}
                            <Reveal delay={0.15}>
                                <div className="rounded-3xl border border-border overflow-hidden shadow-sm">
                                    <div className="bg-card px-5 py-3.5 border-b border-border flex items-center gap-2">
                                        <MapPin className="h-4 w-4 text-primary" />
                                        <span className="text-sm font-bold text-foreground">Find Us on Google Maps</span>
                                    </div>
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.282130728064!2d78.4188781!3d17.350151999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb97c5fa5cb755%3A0x6acc4ccce9db5613!2sTap%20to%20easy!5e0!3m2!1sen!2sin!4v1790506479221!5m2!1sen!2sin"
                                        width="100%"
                                        height="340"
                                        style={{ border: 0, display: 'block' }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        title="Tap to Easy Location on Google Maps"
                                    />
                                </div>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* ───────────── SERVICE AREA STRIP ───────────── */}
            <section className="py-14 lg:py-20 bg-primary text-primary-foreground">
                <div className="mx-auto w-full max-w-[80rem] px-4 sm:px-6">
                    <Reveal>
                        <div className="text-center max-w-2xl mx-auto mb-10">
                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">
                                Service Coverage
                            </span>
                            <h2 className="font-display mt-2 text-3xl font-bold sm:text-4xl text-white">
                                We Come to You &mdash; Anywhere in Hyderabad
                            </h2>
                            <p className="mt-3 text-sm text-secondary/90">
                                Free doorstep measurement across all major Hyderabad localities.
                            </p>
                        </div>
                    </Reveal>

                    <Reveal delay={0.1}>
                        <div className="flex flex-wrap justify-center gap-2.5">
                            {[
                                'Gachibowli',
                                'Miyapur',
                                'Kukatpally',
                                'Kondapur',
                                'Madhapur',
                                'Financial District',
                                'Manikonda',
                                'Nallagandla',
                                'Tellapur',
                                'Chandanagar',
                                'Begumpet',
                                'Banjara Hills',
                                'Nizampet',
                                'Secunderabad',
                                'Ameerpet',
                                'KPHB',
                                'Puppalaguda',
                                'Narsingi',
                            ].map((loc) => (
                                <span
                                    key={loc}
                                    className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold backdrop-blur-sm hover:bg-white/20 transition cursor-default"
                                >
                                    {loc}
                                </span>
                            ))}
                        </div>
                    </Reveal>

                    <Reveal delay={0.2}>
                        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a
                                href={`tel:+919390804146`}
                                className="flex min-h-[50px] items-center gap-2 rounded-full bg-white px-8 text-sm font-bold text-primary shadow-lg transition hover:bg-secondary active:scale-[0.98]"
                            >
                                <Phone className="h-4 w-4" /> Call for Free Visit
                            </a>
                            <a
                                href={getWhatsAppLink()}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex min-h-[50px] items-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white/20 active:scale-[0.98]"
                            >
                                <MessageCircle className="h-4 w-4 fill-white" /> WhatsApp Us
                            </a>
                        </div>
                    </Reveal>
                </div>
            </section>
        </div>
    );
}
