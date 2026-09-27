import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, Sparkles, ImageOff } from 'lucide-react';
import * as Icons from 'lucide-react';

/**
 * ProductCard
 * 
 * Reusable product card for the homepage and related products section.
 * Replaces the inline card JSX that was previously in page.jsx.
 */
export default function ProductCard({ product, featured = false }) {
    const Icon = Icons[product.icon] || Sparkles;
    const heroImage = product.media?.find(m => m.type === 'image')?.src;

    return (
        <Link
            href={`/products/${product.slug}`}
            className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border bg-card transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-25px_rgba(37,99,235,0.3)] ${
                product.bestSeller ? 'border-primary ring-2 ring-primary/20' : 'border-border'
            }`}
        >
            {/* Top image section */}
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-secondary/30">
                {heroImage ? (
                    <Image
                        src={heroImage}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-secondary/20">
                        <ImageOff className="h-10 w-10 text-muted-foreground/30" strokeWidth={1.5} />
                    </div>
                )}
                
                {/* Badges */}
                <div className="absolute left-4 top-4 flex flex-col gap-2 items-start">
                    <span className="inline-flex items-center rounded-full bg-background/90 px-3 py-1 text-xs font-semibold text-foreground shadow-sm backdrop-blur-md">
                        {product.category}
                    </span>
                </div>
                {product.bestSeller && (
                    <div className="absolute right-4 top-4">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wide text-primary-foreground shadow-sm">
                            <Sparkles className="h-3.5 w-3.5" /> Best Seller
                        </span>
                    </div>
                )}
                
                {/* Gradient overlay to ensure text contrast if we had text over image */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>

            {/* Content section */}
            <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-3">
                    <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${product.accent} text-white shadow-sm`}>
                        <Icon className="h-5 w-5" strokeWidth={1.7} />
                    </span>
                    <h3 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                        {product.name}
                    </h3>
                </div>
                
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                    {product.shortDescription}
                </p>

                {/* Key spec pill */}
                <div className="mt-5 flex flex-wrap items-center gap-2">
                    {product.badge && (
                        <span className="inline-flex items-center rounded-md border border-border bg-secondary/50 px-2 py-1 text-xs font-semibold text-foreground">
                            {product.badge}
                        </span>
                    )}
                    {product.rope && (
                        <span className="inline-flex items-center rounded-md border border-border bg-secondary/50 px-2 py-1 text-xs font-semibold text-foreground">
                            Rope: {product.rope}
                        </span>
                    )}
                </div>
            </div>

            {/* Bottom CTA section */}
            <div className="mt-auto flex items-center justify-between border-t border-border bg-card px-6 py-5">
                <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-600">
                    <CheckCircle2 className="h-4 w-4" /> Free Measurement
                </div>
                <span className="flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-bold text-primary-foreground transition group-hover:bg-primary/90 group-hover:shadow-md">
                    View Details <ArrowRight className="h-4 w-4" />
                </span>
            </div>
        </Link>
    );
}
