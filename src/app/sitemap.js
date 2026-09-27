import { PRODUCTS } from '@/data/products';
import { LOCATIONS } from '@/data/locations';

// A fixed build date so Google sees real lastModified changes on redeploy, not every crawl
const BUILD_DATE = new Date('2026-09-27');

export default function sitemap() {
    const baseUrl = 'https://taptoeasy.com';

    /** ── Static routes ── */
    const staticRoutes = [
        {
            url: baseUrl,
            lastModified: BUILD_DATE,
            changeFrequency: 'weekly',
            priority: 1.0,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: BUILD_DATE,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
    ];

    /** ── Product / service routes — highest priority after home ── */
    const productRoutes = PRODUCTS.map((product) => {
        const images = (product.media || [])
            .filter((m) => m?.src?.startsWith('http'))
            .map((m) => ({
                url: m.src,
                title: m.alt || `${product.name} — Tap to Easy Hyderabad`,
                caption: `${product.name} installation in Hyderabad by Tap to Easy. ${product.shortDescription || ''}`.trim(),
            }));

        return {
            url: `${baseUrl}/products/${product.slug}`,
            lastModified: BUILD_DATE,
            changeFrequency: 'weekly',
            priority: product.bestSeller ? 0.98 : 0.92,
            ...(images.length > 0 && { images }),
        };
    });

    /** ── Location / locality routes ── */
    const locationRoutes = LOCATIONS.map((loc) => ({
        url: `${baseUrl}/location/${loc.slug}`,
        lastModified: BUILD_DATE,
        changeFrequency: 'monthly',
        priority: 0.82,
    }));

    return [...staticRoutes, ...productRoutes, ...locationRoutes];
}

