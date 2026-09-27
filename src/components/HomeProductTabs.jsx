'use client';

import React, { useState } from 'react';
import { PRODUCT_CATEGORIES, PRODUCTS } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import Reveal from '@/components/Reveal';
import * as Icons from 'lucide-react';
import { Sparkles } from 'lucide-react';

/**
 * HomeProductTabs
 * 
 * Renders the products catalogue on the homepage organized by category tabs.
 */
export default function HomeProductTabs() {
    const [activeTab, setActiveTab] = useState(PRODUCT_CATEGORIES[0].slug);

    const activeCategory = PRODUCT_CATEGORIES.find(c => c.slug === activeTab);
    const displayedProducts = PRODUCTS.filter(p => p.categorySlug === activeTab);

    return (
        <div className="mt-12 flex flex-col items-center">
            {/* ── Tabs Navigation ── */}
            <div className="w-full overflow-x-auto pb-4 scrollbar-hide">
                <div className="flex w-max min-w-full justify-center gap-2 px-1">
                    {PRODUCT_CATEGORIES.map((cat) => {
                        const isActive = cat.slug === activeTab;
                        const Icon = Icons[cat.icon] || Sparkles;
                        return (
                            <button
                                key={cat.slug}
                                onClick={() => setActiveTab(cat.slug)}
                                className={`flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition whitespace-nowrap ${
                                    isActive
                                        ? 'bg-primary text-primary-foreground shadow-sm'
                                        : 'bg-card text-muted-foreground hover:bg-secondary hover:text-foreground border border-border'
                                }`}
                            >
                                <Icon className="h-4 w-4" />
                                {cat.shortName}
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* ── Active Category Description ── */}
            {activeCategory && (
                <div className="mt-6 mb-8 text-center max-w-2xl px-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <h3 className="font-display text-2xl font-bold text-foreground">
                        {activeCategory.name}
                    </h3>
                    <p className="mt-2 text-muted-foreground">
                        {activeCategory.description}
                    </p>
                </div>
            )}

            {/* ── Product Grid ── */}
            <div className="w-full grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {displayedProducts.map((product, i) => (
                    <Reveal key={product.slug} delay={i * 0.05}>
                        <ProductCard product={product} />
                    </Reveal>
                ))}
            </div>
        </div>
    );
}
