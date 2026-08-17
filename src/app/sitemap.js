import { PRODUCTS } from '@/data/products';
import { LOCATIONS } from '@/data/locations';

export default function sitemap() {
    const baseUrl = 'https://taptoeasy.com';

    const staticRoutes = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1.0,
        },
    ];

    const productRoutes = PRODUCTS.map((product) => ({
        url: `${baseUrl}/products/${product.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
    }));

    const locationRoutes = LOCATIONS.map((loc) => ({
        url: `${baseUrl}/location/${loc.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.85,
    }));

    return [...staticRoutes, ...productRoutes, ...locationRoutes];
}
