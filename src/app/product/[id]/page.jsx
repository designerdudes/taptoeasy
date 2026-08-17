import { redirect } from 'next/navigation';
import { PRODUCTS } from '@/data/products';

export default function LegacyProductRedirect({ params }) {
    // If user accesses /product/1 or legacy ids, route them gracefully to main product landing
    const matchingProduct = PRODUCTS.find((p) => p.slug === params.id) || PRODUCTS[0];
    redirect(`/products/${matchingProduct.slug}`);
}
