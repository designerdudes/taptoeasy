'use client';

import React, { useState, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, ImageOff } from 'lucide-react';

/**
 * ProductImageGallery
 *
 * Supports:
 * - Multiple images from the product.media array
 * - Graceful loading skeleton (no layout shift — aspect ratio preserved)
 * - Professional placeholder when image src is empty or fails to load
 * - Thumbnail strip for switching images
 * - Next.js Image with lazy loading (priority only on index 0 hero)
 * - Future-ready: renders only 'image' type from media array
 *   (360/video types can be added later by adding a renderer per type)
 *
 * Props:
 * - media: Array<{ type: 'image'|'video'|'360', src: string, alt: string, width?: number, height?: number, priority?: boolean }>
 * - productName: string (used in placeholder alt text)
 */
export default function ProductImageGallery({ media = [], productName = 'Product' }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [loadedIndexes, setLoadedIndexes] = useState(new Set());
    const [errorIndexes, setErrorIndexes] = useState(new Set());

    // Filter to only renderable media items
    const items = media.filter((m) => m && m.type === 'image');

    const handleLoad = useCallback((index) => {
        setLoadedIndexes((prev) => new Set([...prev, index]));
    }, []);

    const handleError = useCallback((index) => {
        setErrorIndexes((prev) => new Set([...prev, index]));
    }, []);

    const goTo = useCallback(
        (index) => {
            if (index < 0 || index >= Math.max(items.length, 1)) return;
            setActiveIndex(index);
        },
        [items.length]
    );

    const activeItem = items[activeIndex] ?? null;
    const hasValidImage = activeItem && activeItem.src && !errorIndexes.has(activeIndex);
    const isLoaded = loadedIndexes.has(activeIndex);
    const showSkeleton = hasValidImage && !isLoaded;

    return (
        <div className="flex flex-col gap-3">
            {/* ── Main Image Display ── */}
            <div className="relative overflow-hidden rounded-2xl border border-border bg-secondary/20 aspect-square w-full">
                {/* Skeleton overlay */}
                {showSkeleton && (
                    <div className="absolute inset-0 z-10 animate-pulse bg-gradient-to-br from-secondary to-secondary/50 rounded-2xl" />
                )}

                {hasValidImage ? (
                    <Image
                        src={activeItem.src}
                        alt={activeItem.alt || `${productName} — Tap to Easy`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                        className={`object-contain transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                        priority={activeItem.priority === true && activeIndex === 0}
                        onLoad={() => handleLoad(activeIndex)}
                        onError={() => handleError(activeIndex)}
                    />
                ) : (
                    // Placeholder when no image src or image failed to load
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-8 text-center">
                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                            <ImageOff className="h-8 w-8 text-primary/40" strokeWidth={1.5} />
                        </div>
                        <p className="text-sm font-medium text-muted-foreground">Product image coming soon</p>
                        <p className="text-xs text-muted-foreground/60">
                            Send us a WhatsApp message to see product photos
                        </p>
                    </div>
                )}

                {/* Navigation arrows — only show when multiple items exist */}
                {items.length > 1 && (
                    <>
                        <button
                            onClick={() => goTo(activeIndex - 1)}
                            disabled={activeIndex === 0}
                            aria-label="Previous image"
                            className="absolute left-2 top-1/2 z-20 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-background/90 border border-border shadow-sm transition hover:bg-secondary disabled:opacity-30"
                        >
                            <ChevronLeft className="h-4 w-4" />
                        </button>
                        <button
                            onClick={() => goTo(activeIndex + 1)}
                            disabled={activeIndex === items.length - 1}
                            aria-label="Next image"
                            className="absolute right-2 top-1/2 z-20 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-background/90 border border-border shadow-sm transition hover:bg-secondary disabled:opacity-30"
                        >
                            <ChevronRight className="h-4 w-4" />
                        </button>
                    </>
                )}
            </div>

            {/* ── Thumbnail Strip — only render when there are multiple images ── */}
            {items.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-1">
                    {items.map((item, index) => {
                        const isActive = index === activeIndex;
                        const thumbLoaded = loadedIndexes.has(index);
                        const thumbError = errorIndexes.has(index);
                        const thumbHasImage = item.src && !thumbError;

                        return (
                            <button
                                key={index}
                                onClick={() => goTo(index)}
                                aria-label={`View image ${index + 1}`}
                                className={`relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-xl border-2 transition ${
                                    isActive
                                        ? 'border-primary shadow-sm'
                                        : 'border-border hover:border-primary/40'
                                }`}
                            >
                                {thumbHasImage ? (
                                    <>
                                        {!thumbLoaded && (
                                            <div className="absolute inset-0 animate-pulse bg-secondary" />
                                        )}
                                        <Image
                                            src={item.src}
                                            alt={item.alt || `${productName} image ${index + 1}`}
                                            fill
                                            sizes="64px"
                                            className={`object-cover transition-opacity duration-200 ${thumbLoaded ? 'opacity-100' : 'opacity-0'}`}
                                            loading="lazy"
                                            onLoad={() => handleLoad(index)}
                                            onError={() => handleError(index)}
                                        />
                                    </>
                                ) : (
                                    <div className="absolute inset-0 flex items-center justify-center bg-secondary/40">
                                        <ImageOff className="h-4 w-4 text-muted-foreground/40" />
                                    </div>
                                )}
                            </button>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
