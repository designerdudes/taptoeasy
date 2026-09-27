'use client';

import React from 'react';
import Link from 'next/link';
import { MessageCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
import { HANGER_COMPARISON, getWhatsAppLink } from '@/data/products';

/**
 * ProductComparison
 *
 * Renders a comparison table for Normal / Deluxe / Premium Ceiling Hangers.
 * Includes a "Not Sure?" CTA section at the bottom.
 *
 * Used on all ceiling hanger product pages.
 * Data is sourced from HANGER_COMPARISON in products.js.
 * Adding a new hanger model: update HANGER_COMPARISON in products.js.
 */
export default function ProductComparison({ activeSlug }) {
    return (
        <section className="rounded-2xl border border-border bg-card overflow-hidden">
            {/* Table header */}
            <div className="px-6 py-5 border-b border-border">
                <h3 className="font-display text-lg font-bold text-foreground">
                    Compare Ceiling Hanger Options
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                    Understand the difference between Normal, Deluxe and Premium ceiling hangers.
                </p>
            </div>

            {/* Comparison Table — scrollable on mobile */}
            <div className="overflow-x-auto">
                <table className="w-full min-w-[560px] text-sm">
                    <thead className="bg-secondary/60">
                        <tr className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                            <th className="px-5 py-3.5 text-left">Model</th>
                            <th className="px-5 py-3.5 text-left">Bracket</th>
                            <th className="px-5 py-3.5 text-left">Rope</th>
                            <th className="px-5 py-3.5 text-left">Pipe</th>
                            <th className="px-5 py-3.5 text-left">Best For</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                        {HANGER_COMPARISON.map((hanger) => {
                            const isActive = hanger.slug === activeSlug;
                            return (
                                <tr
                                    key={hanger.slug}
                                    className={`transition-colors ${
                                        isActive
                                            ? 'bg-primary/5 border-l-2 border-l-primary'
                                            : 'hover:bg-secondary/30'
                                    }`}
                                >
                                    <td className="px-5 py-4">
                                        {isActive ? (
                                            <span className="font-bold text-primary">{hanger.name}</span>
                                        ) : (
                                            <Link
                                                href={`/products/${hanger.slug}`}
                                                className="font-semibold text-foreground hover:text-primary transition underline-offset-2 hover:underline"
                                            >
                                                {hanger.name}
                                            </Link>
                                        )}
                                        {isActive && (
                                            <span className="ml-2 inline-flex items-center gap-1 rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary">
                                                Current
                                            </span>
                                        )}
                                    </td>
                                    <td className="px-5 py-4 text-muted-foreground">{hanger.bracket}</td>
                                    <td className="px-5 py-4 text-muted-foreground">{hanger.rope}</td>
                                    <td className="px-5 py-4 text-muted-foreground">{hanger.pipe}</td>
                                    <td className="px-5 py-4 text-muted-foreground">{hanger.bestFor}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

            {/* All sizes are 4 ft – 8 ft note */}
            <div className="px-5 py-3 border-t border-border bg-secondary/20">
                <p className="text-xs text-muted-foreground">
                    <CheckCircle2 className="inline h-3.5 w-3.5 text-primary mr-1 -mt-0.5" />
                    All ceiling hanger options are available in sizes: 4 ft, 5 ft, 6 ft, 7 ft and 8 ft.
                </p>
            </div>

            {/* Not Sure CTA */}
            <div className="px-6 py-5 border-t border-border bg-primary/5">
                <p className="font-semibold text-foreground text-sm">
                    Not sure which hanger is right for you?
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                    Send us a photo or short video of your balcony. Our team will recommend the most suitable option.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                    <a
                        href={getWhatsAppLink('Ceiling Hanger Recommendation')}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-[40px] items-center gap-2 rounded-full bg-emerald-500 px-5 text-sm font-bold text-white hover:bg-emerald-600 transition active:scale-[0.98]"
                    >
                        <MessageCircle className="h-4 w-4 fill-white" /> WhatsApp a Photo
                    </a>
                    <a
                        href="#book"
                        className="inline-flex min-h-[40px] items-center gap-2 rounded-full border border-primary/30 bg-background px-5 text-sm font-bold text-primary hover:bg-primary/5 transition active:scale-[0.98]"
                    >
                        Book Free Measurement <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                </div>
            </div>
        </section>
    );
}
