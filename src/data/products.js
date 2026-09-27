/**
 * Tap to Easy — Central Product Data
 * Single source of truth for all products, SEO, and catalogue structure.
 *
 * Architecture:
 * - PRODUCT_CATEGORIES: top-level category config for homepage tabs
 * - PRODUCTS: full product array (each product is a self-contained record)
 * - Helper functions: getProduct(), getProductsByCategory(), getRelatedProducts()
 *
 * Adding a new product: add an entry to PRODUCTS. Sitemap picks it up automatically.
 * Adding a new category: add to PRODUCT_CATEGORIES and set categorySlug on products.
 *
 * Terminology note: Business supplied "UV Breaded / Braided UV".
 * Confirmed customer-facing term: "UV Braided".
 */

// ─────────────────────────────────────────────────────────────────────────────
// CONSTANTS
// ─────────────────────────────────────────────────────────────────────────────

export const PHONE_NUMBER = '+91 9390804146';
export const PHONE_NUMBER_RAW = '9390804146';
export const WHATSAPP_NUMBER = '9390804146';
export const BUSINESS_NAME = 'Tap to Easy';
export const BUSINESS_CITY = 'Hyderabad';

export const getWhatsAppLink = (productName = '') => {
    const msg = productName
        ? `Hi, I am interested in ${productName}. Please share more details.`
        : 'Hi, I would like to know more about your home improvement services.';
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
};

// Hero fallback image (used on homepage hero)
export const HERO_IMG = '/hero section photo.webp';

// ─────────────────────────────────────────────────────────────────────────────
// PRODUCT CATEGORIES
// ─────────────────────────────────────────────────────────────────────────────

export const PRODUCT_CATEGORIES = [
    {
        slug: 'balcony-cloth-hangers',
        name: 'Balcony Cloth Hangers',
        shortName: 'Cloth Hangers',
        description:
            'Ceiling, wall and beam-mounted cloth drying hangers for Hyderabad apartments.',
        icon: 'Wind',
        accent: 'from-blue-600 to-indigo-600',
    },
    {
        slug: 'invisible-grills',
        name: 'Invisible Grills',
        shortName: 'Invisible Grills',
        description:
            'Minimal-profile wire grills for balconies and windows that preserve your open view.',
        icon: 'Grid3x3',
        accent: 'from-blue-500 to-cyan-600',
    },
    {
        slug: 'pigeon-nets',
        name: 'Pigeon Nets',
        shortName: 'Pigeon Nets',
        description:
            'Balcony and open-area protective nets to keep pigeons and birds out.',
        icon: 'ShieldCheck',
        accent: 'from-violet-600 to-purple-600',
    },
    {
        slug: 'mosquito-mesh',
        name: 'Mosquito Mesh',
        shortName: 'Mosquito Mesh',
        description:
            'Custom-cut sliding, openable and window mosquito mesh doors for Hyderabad homes.',
        icon: 'DoorOpen',
        accent: 'from-blue-700 to-indigo-600',
    },
    {
        slug: 'shoe-racks',
        name: 'Shoe Racks',
        shortName: 'Shoe Racks',
        description:
            'Practical metal shoe storage solutions for entrances, balconies and utility areas.',
        icon: 'Layers',
        accent: 'from-blue-600 to-sky-600',
    },
    {
        slug: 'hanger-repair',
        name: 'Hanger Repair & Replacement',
        shortName: 'Hanger Repairs',
        description:
            'Thread and bracket replacement for existing cloth hangers without replacing the pipe.',
        icon: 'Wrench',
        accent: 'from-orange-500 to-amber-500',
    },
];

// ─────────────────────────────────────────────────────────────────────────────
// SIZE SYSTEM
// ─────────────────────────────────────────────────────────────────────────────

export const HANGER_SIZES = {
    small: ['4 ft', '5 ft'],
    medium: ['6 ft', '7 ft'],
    large: ['8 ft'],
};
export const HANGER_ALL_SIZES = [
    ...HANGER_SIZES.small,
    ...HANGER_SIZES.medium,
    ...HANGER_SIZES.large,
];

// ─────────────────────────────────────────────────────────────────────────────
// SHARED INSTALLATION PROCESS STEPS
// ─────────────────────────────────────────────────────────────────────────────

export const INSTALLATION_STEPS = [
    {
        title: 'Book Free Measurement',
        text: 'Pick a date online or on WhatsApp. We confirm your slot within 2 working hours.',
    },
    {
        title: 'Free On-Site Measurement',
        text: 'Our technician visits, confirms sizing, checks mounting suitability, and shares recommendations.',
    },
    {
        title: 'Professional Installation',
        text: 'Core-drilled anchors, dust sheets down, debris carried away. Clean installation at your premises.',
    },
    {
        title: 'Handover & After-Sales Support',
        text: 'Final walkthrough, care instructions shared, and after-sales support available through the Tap to Easy team.',
    },
];

// ─────────────────────────────────────────────────────────────────────────────
// HANGER COMPARISON DATA
// ─────────────────────────────────────────────────────────────────────────────

export const HANGER_COMPARISON = [
    {
        slug: 'normal-ceiling-hanger',
        name: 'Normal Ceiling Hanger',
        bracket: 'PVC 3 & 6 Lines',
        rope: 'Nylon',
        pipe: '12 mm Jindal Steel',
        sizes: '4 ft \u2013 8 ft',
        bestFor: 'Everyday household use',
    },
    {
        slug: 'deluxe-ceiling-hanger',
        name: 'Deluxe Ceiling Hanger',
        bracket: '3 & 6 Lines Channel Metal Bracket',
        rope: 'Nylon',
        pipe: '16 mm Jindal Steel',
        sizes: '4 ft \u2013 8 ft',
        bestFor: 'Regular use with metal channel bracket',
    },
    {
        slug: 'premium-ceiling-hanger',
        name: 'Premium Ceiling Hanger',
        bracket: '3 & 6 Lines Channel Metal Bracket',
        rope: 'UV Braided',
        pipe: '16 mm Jindal Steel',
        sizes: '4 ft \u2013 8 ft',
        bestFor: 'UV braided rope with metal bracket',
    },
];

// ─────────────────────────────────────────────────────────────────────────────
// PRODUCTS ARRAY
// ─────────────────────────────────────────────────────────────────────────────

export const PRODUCTS = [
    // ── 1. PREMIUM CEILING HANGER ──────────────────────────────────────────
    {
        slug: 'premium-ceiling-hanger',
        name: 'Premium Ceiling Hanger',
        category: 'Balcony Cloth Hangers',
        categorySlug: 'balcony-cloth-hangers',
        tagline: 'Metal Bracket + UV Braided Rope',
        bestSeller: true,
        icon: 'Wind',
        accent: 'from-blue-600 to-indigo-600',
        badge: 'Jindal Steel 16 mm',
        hook: 'Doorstep Installation within 4 Hours \u2022 Hyderabad',
        shortDescription:
            'Premium ceiling-mounted cloth hanger with a metal channel bracket and UV braided rope.',
        heroTitle:
            'Premium Ceiling Hanger in Hyderabad \u2014 Metal Bracket & UV Braided Rope',
        heroSub:
            'Ceiling-mounted cloth drying hanger with a 3 & 6 Lines Channel Metal Bracket, UV Braided rope, and 16 mm Jindal Steel pipe. Available in sizes from 4 ft to 8 ft. Suitable for balconies and utility areas in Hyderabad apartments.',
        bracket: '3 & 6 Lines Channel Metal Bracket',
        rope: 'UV Braided',
        pipe: '16 mm Jindal Steel Pipe',
        sizes: { small: ['4 ft', '5 ft'], medium: ['6 ft', '7 ft'], large: ['8 ft'] },
        allSizes: HANGER_ALL_SIZES,
        // When business photos are ready: add { type: 'image', src: '/images/products/...', ... }
        media: [
            {
                type: 'image',
                src: '/images/products/premium ceiling hanger/1.webp',
                alt: 'premium ceiling hanger',
                width: 800,
                height: 800,
                priority: true,
            },
            {
                type: 'image',
                src: '/images/products/premium ceiling hanger/2.webp',
                alt: '3 metal ceiling hanger',
                width: 800,
                height: 800,
                priority: false,
            },
            {
                type: 'image',
                src: '/images/products/premium ceiling hanger/3.jpg',
                alt: '16mm jindal pipes(3)',
                width: 800,
                height: 800,
                priority: false,
            },
            {
                type: 'image',
                src: '/images/products/premium ceiling hanger/4.webp',
                alt: '16mm jindal pipes',
                width: 800,
                height: 800,
                priority: false,
            },
            {
                type: 'image',
                src: '/images/products/premium ceiling hanger/5.webp',
                alt: '16 mm jindal pipes',
                width: 800,
                height: 800,
                priority: false,
            },
            {
                type: 'image',
                src: '/images/products/premium ceiling hanger/6.webp',
                alt: 'ceiling hanger metal 3 lines full kit',
                width: 800,
                height: 800,
                priority: false,
            },
            {
                type: 'image',
                src: '/images/products/premium ceiling hanger/7.webp',
                alt: 'ceiling hanger metal 6 lines',
                width: 800,
                height: 800,
                priority: false,
            },
            {
                type: 'image',
                src: '/images/products/premium ceiling hanger/8.webp',
                alt: 'ceiling hanger metals 6 lines (2)',
                width: 800,
                height: 800,
                priority: false,
            },
            {
                type: 'image',
                src: '/images/products/premium ceiling hanger/9.webp',
                alt: 'ceiling hnager metal 6 lines',
                width: 800,
                height: 800,
                priority: false,
            },
            {
                type: 'image',
                src: '/images/products/premium ceiling hanger/10.webp',
                alt: 'celing hanger 3 lines (2)',
                width: 800,
                height: 800,
                priority: false,
            },
            {
                type: 'image',
                src: '/images/products/premium ceiling hanger/11.webp',
                alt: 'celing hanger 3 lines',
                width: 800,
                height: 800,
                priority: false,
            },
            {
                type: 'image',
                src: '/images/products/premium ceiling hanger/12.webp',
                alt: 'holder 3 lines (2)',
                width: 800,
                height: 800,
                priority: false,
            },
            {
                type: 'image',
                src: '/images/products/premium ceiling hanger/13.webp',
                alt: 'holder 3 lines',
                width: 800,
                height: 800,
                priority: false,
            },
            {
                type: 'image',
                src: '/images/products/premium ceiling hanger/14.webp',
                alt: 'holder 6 metal (2)',
                width: 800,
                height: 800,
                priority: false,
            },
            {
                type: 'image',
                src: '/images/products/premium ceiling hanger/15.webp',
                alt: 'holder 6 metal',
                width: 800,
                height: 800,
                priority: false,
            },
            {
                type: 'image',
                src: '/images/products/premium ceiling hanger/16.webp',
                alt: 'UV braided rope 1',
                width: 800,
                height: 800,
                priority: false,
            },
            {
                type: 'image',
                src: '/images/products/premium ceiling hanger/17.webp',
                alt: 'UV braided rope',
                width: 800,
                height: 800,
                priority: false,
            },
        ],
        specifications: [
            { label: 'Bracket Type', value: '3 & 6 Lines Channel Metal Bracket' },
            { label: 'Rope / Thread', value: 'UV Braided' },
            { label: 'Pipe', value: '16 mm Jindal Steel Pipe' },
            { label: 'Available Sizes', value: '4 ft, 5 ft, 6 ft, 7 ft, 8 ft' },
            { label: 'Mounting', value: 'Ceiling mounted' },
        ],
        benefits: [
            { icon: 'Wind', title: 'Metal Channel Bracket', text: 'Metal channel bracket provides a sturdier mounting compared to PVC bracket options.' },
            { icon: 'Zap', title: 'UV Braided Rope', text: 'UV braided rope designed to hold up in outdoor balcony conditions.' },
            { icon: 'Ruler', title: 'Five Size Options', text: 'Available in 4 ft, 5 ft, 6 ft, 7 ft and 8 ft to match different balcony widths.' },
            { icon: 'ShieldCheck', title: '16 mm Jindal Steel Pipe', text: 'Built with 16 mm Jindal Steel pipe for a robust construction.' },
        ],
        useCases: [
            'Balcony of a 2BHK or 3BHK apartment where ceiling mounting is feasible',
            'Customers who prefer UV braided rope over nylon',
            'High-rise apartments with balcony ceilings suitable for installation',
        ],
        installationNotes:
            'Ceiling installation suitability is confirmed during the free on-site measurement visit. Our technician checks ceiling construction and clearance before recommending the appropriate setup.',
        relatedSlugs: ['deluxe-ceiling-hanger', 'normal-ceiling-hanger', 'hanger-repair', 'invisible-grills'],
        faqs: [
            { q: 'What is the difference between the Premium and Deluxe Ceiling Hanger?', a: 'Both use a 3 & 6 Lines Channel Metal Bracket and 16 mm Jindal Steel pipe. The Premium uses UV Braided rope; the Deluxe uses Nylon rope.' },
            { q: 'Which size should I choose for my balcony?', a: 'Size selection depends on your balcony width and ceiling space. Our technician will recommend the most suitable size during the free measurement visit.' },
            { q: 'Can this be installed on any ceiling?', a: 'Suitability depends on your ceiling construction and balcony layout. This is confirmed during the free on-site measurement visit before any work begins.' },
            { q: 'Can the rope be replaced if it gets damaged?', a: 'Yes. UV Braided rope replacement is available through our Hanger Repair & Replacement service. The pipe is not replaced during repair service.' },
            { q: 'Can I get a Wall Mounted or Beam Mounted installation instead?', a: 'Yes. Wall Mounted and Beam Mounted hanger options are available. Suitability is confirmed during the measurement visit.' },
        ],
        stats: { customers: '20,000+', rating: '4.8', installs: '4 hrs' },
        warranty: null,
        seo: {
            title: 'Premium Ceiling Hanger in Hyderabad | Metal Bracket & UV Braided Rope | Tap to Easy',
            description: 'Premium ceiling-mounted cloth hanger with 3 & 6 Lines Channel Metal Bracket, UV Braided rope and 16 mm Jindal Steel pipe. Sizes 4 ft to 8 ft. Free measurement in Hyderabad.',
            keywords: ['premium ceiling hanger hyderabad', 'ceiling cloth hanger hyderabad', 'uv braided ceiling hanger', 'metal bracket ceiling hanger', 'balcony cloth hanger hyderabad', 'ceiling drying rack hyderabad'],
        },
    },

    // ── 2. DELUXE CEILING HANGER ───────────────────────────────────────────
    {
        slug: 'deluxe-ceiling-hanger',
        name: 'Deluxe Ceiling Hanger',
        category: 'Balcony Cloth Hangers',
        categorySlug: 'balcony-cloth-hangers',
        tagline: 'Metal Bracket + Nylon Rope',
        bestSeller: false,
        icon: 'Wind',
        accent: 'from-blue-600 to-indigo-600',
        badge: 'Jindal Steel 16 mm',
        hook: 'Doorstep Installation within 4 Hours \u2022 Hyderabad',
        shortDescription:
            'Deluxe ceiling-mounted cloth hanger with a metal channel bracket and 16 mm Jindal Steel pipe, suitable for everyday home use.',
        heroTitle:
            'Deluxe Ceiling Hanger in Hyderabad \u2014 Channel Metal Bracket & Nylon Rope',
        heroSub:
            'Ceiling-mounted cloth drying hanger with a 3 & 6 Lines Channel Metal Bracket, Nylon rope and 16 mm Jindal Steel pipe. Available in sizes from 4 ft to 8 ft. A practical metal bracket option for everyday home use.',
        bracket: '3 & 6 Lines Channel Metal Bracket',
        rope: 'Nylon',
        pipe: '16 mm Jindal Steel Pipe',
        sizes: { small: ['4 ft', '5 ft'], medium: ['6 ft', '7 ft'], large: ['8 ft'] },
        allSizes: HANGER_ALL_SIZES,
        media: [
            {
                type: 'image',
                src: '/images/products/deluxe ceiling hanger/1.webp',
                alt: 'Deluxe ceiling hanger with metal channel bracket and nylon rope \u2014 Tap to Easy Hyderabad',
                width: 800,
                height: 800,
                priority: true,
            },
            {
                type: 'image',
                src: '/images/products/deluxe ceiling hanger/2.webp',
                alt: 'Deluxe ceiling hanger with metal channel bracket and nylon rope \u2014 Tap to Easy Hyderabad',
                width: 800,
                height: 800,
                priority: true,
            },
            {
                type: 'image',
                src: '/images/products/deluxe ceiling hanger/3.webp',
                alt: 'Deluxe ceiling hanger with metal channel bracket and nylon rope \u2014 Tap to Easy Hyderabad',
                width: 800,
                height: 800,
                priority: true,
            },
            {
                type: 'image',
                src: '/images/products/deluxe ceiling hanger/4.webp',
                alt: 'Deluxe ceiling hanger with metal channel bracket and nylon rope \u2014 Tap to Easy Hyderabad',
                width: 800,
                height: 800,
                priority: true,
            },
            {
                type: 'image',
                src: '/images/products/deluxe ceiling hanger/5.webp',
                alt: 'Deluxe ceiling hanger with metal channel bracket and nylon rope \u2014 Tap to Easy Hyderabad',
                width: 800,
                height: 800,
                priority: true,
            },
            {
                type: 'image',
                src: '/images/products/deluxe ceiling hanger/6.webp',
                alt: 'Deluxe ceiling hanger with metal channel bracket and nylon rope \u2014 Tap to Easy Hyderabad',
                width: 800,
                height: 800,
                priority: true,
            },
            {
                type: 'image',
                src: '/images/products/deluxe ceiling hanger/7.webp',
                alt: 'Deluxe ceiling hanger with metal channel bracket and nylon rope \u2014 Tap to Easy Hyderabad',
                width: 800,
                height: 800,
                priority: true,
            },
            {
                type: 'image',
                src: '/images/products/deluxe ceiling hanger/8.webp',
                alt: 'Deluxe ceiling hanger with metal channel bracket and nylon rope \u2014 Tap to Easy Hyderabad',
                width: 800,
                height: 800,
                priority: true,
            },
            {
                type: 'image',
                src: '/images/products/deluxe ceiling hanger/9.webp',
                alt: 'Deluxe ceiling hanger with metal channel bracket and nylon rope \u2014 Tap to Easy Hyderabad',
                width: 800,
                height: 800,
                priority: true,
            },

        ],
        specifications: [
            { label: 'Bracket Type', value: '3 & 6 Lines Channel Metal Bracket' },
            { label: 'Rope / Thread', value: 'Nylon' },
            { label: 'Pipe', value: '16 mm Jindal Steel Pipe' },
            { label: 'Available Sizes', value: '4 ft, 5 ft, 6 ft, 7 ft, 8 ft' },
            { label: 'Mounting', value: 'Ceiling mounted' },
        ],
        benefits: [
            { icon: 'Wind', title: 'Metal Channel Bracket', text: 'Metal channel bracket for a more robust mounting compared to PVC bracket options.' },
            { icon: 'ShieldCheck', title: '16 mm Jindal Steel Pipe', text: 'Built with 16 mm Jindal Steel pipe.' },
            { icon: 'Ruler', title: 'Five Size Options', text: 'Available in 4 ft, 5 ft, 6 ft, 7 ft and 8 ft.' },
            { icon: 'Zap', title: 'Nylon Rope', text: 'Standard nylon rope for everyday household cloth drying.' },
        ],
        useCases: [
            'Balcony of a 2BHK or 3BHK apartment suitable for ceiling mounting',
            'Customers who prefer a metal bracket option with nylon rope',
        ],
        installationNotes:
            'Ceiling installation suitability is confirmed during the free on-site measurement visit.',
        relatedSlugs: ['premium-ceiling-hanger', 'normal-ceiling-hanger', 'hanger-repair', 'invisible-grills'],
        faqs: [
            { q: 'What is the difference between the Deluxe and Normal Ceiling Hanger?', a: 'The Deluxe uses a Channel Metal Bracket and 16 mm Jindal Steel pipe. The Normal uses a PVC bracket and 12 mm Jindal Steel pipe. Both use Nylon rope.' },
            { q: 'What is the difference between the Deluxe and Premium?', a: 'Both use a Channel Metal Bracket and 16 mm Jindal Steel pipe. The Premium uses UV Braided rope; the Deluxe uses Nylon.' },
            { q: 'Can the nylon rope be replaced?', a: 'Yes. Nylon rope replacement is available through our Hanger Repair & Replacement service.' },
        ],
        stats: { customers: '20,000+', rating: '4.8', installs: '4 hrs' },
        warranty: null,
        seo: {
            title: 'Deluxe Ceiling Hanger in Hyderabad | Metal Bracket & Nylon Rope | Tap to Easy',
            description: 'Deluxe ceiling-mounted cloth hanger with Channel Metal Bracket, Nylon rope and 16 mm Jindal Steel pipe. Sizes 4 ft to 8 ft. Free measurement in Hyderabad.',
            keywords: ['deluxe ceiling hanger hyderabad', 'ceiling cloth hanger metal bracket hyderabad', 'balcony cloth hanger hyderabad', 'ceiling drying rack hyderabad'],
        },
    },

    // ── 3. NORMAL CEILING HANGER ───────────────────────────────────────────
    {
        slug: 'normal-ceiling-hanger',
        name: 'Normal Ceiling Hanger',
        category: 'Balcony Cloth Hangers',
        categorySlug: 'balcony-cloth-hangers',
        tagline: 'PVC Bracket + Nylon Rope',
        bestSeller: false,
        icon: 'Wind',
        accent: 'from-blue-600 to-indigo-600',
        badge: 'Jindal Steel 12 mm',
        hook: 'Doorstep Installation within 4 Hours \u2022 Hyderabad',
        shortDescription:
            'A practical and economical ceiling-mounted cloth hanger for everyday household requirements.',
        heroTitle:
            'Normal Ceiling Hanger in Hyderabad \u2014 PVC Bracket & 12 mm Jindal Steel',
        heroSub:
            'Ceiling-mounted cloth drying hanger with PVC 3 & 6 Lines bracket, Nylon rope and 12 mm Jindal Steel pipe. Available in sizes from 4 ft to 8 ft. A practical option for everyday household cloth drying in Hyderabad.',
        bracket: 'PVC 3 & 6 Lines',
        rope: 'Nylon',
        pipe: '12 mm Jindal Steel',
        sizes: { small: ['4 ft', '5 ft'], medium: ['6 ft', '7 ft'], large: ['8 ft'] },
        allSizes: HANGER_ALL_SIZES,
        media: [
            {
                type: 'image',
                src: '/images/products/normal ceiling hanger/1.webp',
                alt: 'normal ceiling hanger 1',
                width: 800,
                height: 800,
                priority: true,
            },
            {
                type: 'image',
                src: '/images/products/normal ceiling hanger/2.webp',
                alt: 'normal ceiling hanger 2',
                width: 800,
                height: 800,
                priority: true,
            },
            {
                type: 'image',
                src: '/images/products/normal ceiling hanger/3.webp',
                alt: 'normal ceiling hanger 3',
                width: 800,
                height: 800,
                priority: true,
            },
            {
                type: 'image',
                src: '/images/products/normal ceiling hanger/4.webp',
                alt: 'normal ceiling hanger 4',
                width: 800,
                height: 800,
                priority: true,
            },
            {
                type: 'image',
                src: '/images/products/normal ceiling hanger/5.webp',
                alt: 'normal ceiling hanger 5',
                width: 800,
                height: 800,
                priority: true,
            },
            {
                type: 'image',
                src: '/images/products/normal ceiling hanger/6.webp',
                alt: 'normal ceiling hanger 6',
                width: 800,
                height: 800,
                priority: true,
            },
            {
                type: 'image',
                src: '/images/products/normal ceiling hanger/7.webp',
                alt: 'normal ceiling hanger 7',
                width: 800,
                height: 800,
                priority: true,
            },
            {
                type: 'image',
                src: '/images/products/normal ceiling hanger/8.webp',
                alt: 'normal ceiling hanger 8',
                width: 800,
                height: 800,
                priority: true,
            },
        ],
        specifications: [
            { label: 'Bracket Type', value: 'PVC 3 & 6 Lines' },
            { label: 'Rope / Thread', value: 'Nylon' },
            { label: 'Pipe', value: '12 mm Jindal Steel' },
            { label: 'Available Sizes', value: '4 ft, 5 ft, 6 ft, 7 ft, 8 ft' },
            { label: 'Mounting', value: 'Ceiling mounted' },
        ],
        benefits: [
            { icon: 'Wind', title: 'Ceiling Mounted', text: 'Keeps the balcony floor free with a ceiling-mounted design.' },
            { icon: 'ShieldCheck', title: '12 mm Jindal Steel Pipe', text: 'Built with 12 mm Jindal Steel pipe.' },
            { icon: 'Ruler', title: 'Five Size Options', text: 'Available in 4 ft, 5 ft, 6 ft, 7 ft and 8 ft.' },
            { icon: 'Zap', title: 'PVC Bracket', text: 'Functional and lightweight PVC bracket mounting.' },
        ],
        useCases: [
            'Everyday household cloth drying requirements',
            'Balconies suitable for ceiling mounting',
        ],
        installationNotes: 'Ceiling suitability confirmed during the free on-site measurement visit.',
        relatedSlugs: ['deluxe-ceiling-hanger', 'premium-ceiling-hanger', 'hanger-repair'],
        faqs: [
            { q: 'What is the difference between Normal, Deluxe and Premium?', a: 'Normal: PVC bracket, 12 mm pipe, Nylon rope. Deluxe: Metal bracket, 16 mm pipe, Nylon rope. Premium: Metal bracket, 16 mm pipe, UV Braided rope.' },
            { q: 'Can the rope be replaced?', a: 'Yes. Nylon rope replacement is available through our Hanger Repair & Replacement service. The pipe is not replaced during repair service.' },
        ],
        stats: { customers: '20,000+', rating: '4.8', installs: '4 hrs' },
        warranty: null,
        seo: {
            title: 'Normal Ceiling Hanger in Hyderabad | PVC Bracket & 12 mm Jindal Steel | Tap to Easy',
            description: 'Practical ceiling-mounted cloth hanger with PVC bracket, Nylon rope and 12 mm Jindal Steel pipe. Sizes 4 ft to 8 ft. Free measurement in Hyderabad.',
            keywords: ['normal ceiling hanger hyderabad', 'ceiling cloth hanger pvc bracket', 'balcony cloth hanger hyderabad', 'affordable ceiling hanger hyderabad'],
        },
    },

    // ── 4. WALL MOUNTED HANGER ─────────────────────────────────────────────
    {
        slug: 'wall-mounted-hanger',
        name: 'Wall Mounted Hanger',
        category: 'Balcony Cloth Hangers',
        categorySlug: 'balcony-cloth-hangers',
        tagline: 'Wall Mounting \u2014 16 mm Jindal Steel',
        bestSeller: false,
        icon: 'Wind',
        accent: 'from-blue-600 to-indigo-600',
        badge: 'Jindal Steel 16 mm',
        hook: 'Doorstep Installation within 4 Hours \u2022 Hyderabad',
        shortDescription:
            'Wall-mounted cloth hanger designed for balconies or spaces where ceiling mounting is not suitable.',
        heroTitle:
            'Wall Mounted Cloth Hanger in Hyderabad \u2014 6 Lines Metal Bracket',
        heroSub:
            'Wall-mounted cloth drying hanger with a 6 Lines Channel Metal Bracket, Nylon or UV Braided rope, and 16 mm Jindal Steel pipe. Available in sizes from 4 ft to 8 ft. Suitable for balconies where ceiling mounting is not preferred or feasible.',
        bracket: '6 Lines Channel Metal Bracket',
        rope: 'Nylon / UV Braided',
        pipe: '16 mm Jindal Steel Pipe',
        sizes: { small: ['4 ft', '5 ft'], medium: ['6 ft', '7 ft'], large: ['8 ft'] },
        allSizes: HANGER_ALL_SIZES,
        media: [
            {
                type: 'image',
                src: '/images/products/wall mounted hanger/1.webp',
                alt: 'wall mounted hanger',
                width: 800,
                height: 800,
                priority: true,
            },

            {
                type: 'image',
                src: '/images/products/wall mounted hanger/2.webp',
                alt: 'wall mounted hanger',
                width: 800,
                height: 800,
                priority: false,
            },
            {
                type: 'image',
                src: '/images/products/wall mounted hanger/3.webp',
                alt: 'wall mounted hanger',
                width: 800,
                height: 800,
                priority: false,
            },
            {
                type: 'image',
                src: '/images/products/wall mounted hanger/4.webp',
                alt: 'wall mounted hanger',
                width: 800,
                height: 800,
                priority: false,
            },
            {
                type: 'image',
                src: '/images/products/wall mounted hanger/5.webp',
                alt: 'wall mounted hanger',
                width: 800,
                height: 800,
                priority: false,
            },
            {
                type: 'image',
                src: '/images/products/wall mounted hanger/6.webp',
                alt: 'wall mounted hanger',
                width: 800,
                height: 800,
                priority: false,
            },
            {
                type: 'image',
                src: '/images/products/wall mounted hanger/7.webp',
                alt: 'wall mounted hanger',
                width: 800,
                height: 800,
                priority: false,
            },
            {
                type: 'image',
                src: '/images/products/wall mounted hanger/8.webp',
                alt: 'wall mounted hanger',
                width: 800,
                height: 800,
                priority: false,
            },
            {
                type: 'image',
                src: '/images/products/wall mounted hanger/9.webp',
                alt: 'wall mounted hanger',
                width: 800,
                height: 800,
                priority: false,
            },
            {
                type: 'image',
                src: '/images/products/wall mounted hanger/10.webp',
                alt: 'wall mounted hanger',
                width: 800,
                height: 800,
                priority: false,
            },
            {
                type: 'image',
                src: '/images/products/wall mounted hanger/11.webp',
                alt: 'wall mounted hanger',
                width: 800,
                height: 800,
                priority: false,
            },
        ],
        specifications: [
            { label: 'Bracket Type', value: '6 Lines Channel Metal Bracket' },
            { label: 'Rope / Thread', value: 'Nylon or UV Braided (selected at time of order)' },
            { label: 'Pipe', value: '16 mm Jindal Steel Pipe' },
            { label: 'Available Sizes', value: '4 ft, 5 ft, 6 ft, 7 ft, 8 ft' },
            { label: 'Mounting', value: 'Wall mounted' },
        ],
        benefits: [
            { icon: 'Home', title: 'Wall Mounting', text: 'Suitable for balconies and spaces where ceiling mounting is not feasible.' },
            { icon: 'ShieldCheck', title: '16 mm Jindal Steel Pipe', text: 'Built with 16 mm Jindal Steel pipe.' },
            { icon: 'Wind', title: 'Rope Choice', text: 'Available with Nylon or UV Braided rope.' },
            { icon: 'Ruler', title: 'Five Sizes', text: 'Available in 4 ft to 8 ft sizes.' },
        ],
        useCases: [
            'Balconies where ceiling mounting is not suitable',
            'Spaces where a wall anchor point is preferred',
        ],
        installationNotes:
            'Wall mounting suitability depends on wall construction and anchor points. Final suitability is confirmed during the free on-site measurement visit.',
        relatedSlugs: ['premium-ceiling-hanger', 'beam-mounted-hanger', 'hanger-repair'],
        faqs: [
            { q: 'Can a Wall Mounted Hanger be installed on any wall?', a: 'Wall mounting suitability depends on wall construction and layout. Our technician confirms this during the free measurement visit.' },
            { q: 'Can I choose between Nylon and UV Braided rope?', a: 'Yes. Specify your rope preference during booking.' },
        ],
        stats: { customers: '20,000+', rating: '4.8', installs: '4 hrs' },
        warranty: null,
        seo: {
            title: 'Wall Mounted Cloth Hanger in Hyderabad | 16 mm Jindal Steel | Tap to Easy',
            description: 'Wall-mounted cloth drying hanger with metal bracket and 16 mm Jindal Steel pipe. Nylon or UV Braided rope. Sizes 4 ft to 8 ft. Free measurement in Hyderabad.',
            keywords: ['wall mounted cloth hanger hyderabad', 'wall hanger for balcony hyderabad', 'balcony cloth hanger wall mount', 'wall mounted hanger hyderabad'],
        },
    },

    // ── 5. BEAM MOUNTED HANGER ─────────────────────────────────────────────
    {
        slug: 'beam-mounted-hanger',
        name: 'Beam Mounted Hanger',
        category: 'Balcony Cloth Hangers',
        categorySlug: 'balcony-cloth-hangers',
        tagline: 'Beam Mounting \u2014 16 mm Jindal Steel',
        bestSeller: false,
        icon: 'Wind',
        accent: 'from-blue-600 to-indigo-600',
        badge: 'Jindal Steel 16 mm',
        hook: 'Doorstep Installation within 4 Hours \u2022 Hyderabad',
        shortDescription:
            'Beam-mounted cloth hanger designed for installations where the mounting point is a suitable structural beam.',
        heroTitle:
            'Beam Mounted Cloth Hanger in Hyderabad \u2014 6 Lines Metal Bracket',
        heroSub:
            'Beam-mounted cloth drying hanger with a 6 Lines Channel Metal Bracket, Nylon or UV Braided rope, and 16 mm Jindal Steel pipe. Available in sizes from 4 ft to 8 ft. Designed for installations where a structural beam serves as the mounting point. Beam suitability is always confirmed before installation.',
        bracket: '6 Lines Channel Metal Bracket',
        rope: 'Nylon / UV Braided',
        pipe: '16 mm Jindal Steel Pipe',
        sizes: { small: ['4 ft', '5 ft'], medium: ['6 ft', '7 ft'], large: ['8 ft'] },
        allSizes: HANGER_ALL_SIZES,
        media: [
            {
                type: 'image',
                src: '/images/products/beam mounted hanger/1.jpeg',
                alt: 'beam mounted',
                width: 800,
                height: 800,
                priority: true,
            },
            {
                type: 'image',
                src: '/images/products/beam mounted hanger/2.webp',
                alt: '16 mm jindal pipes',
                width: 800,
                height: 800,
                priority: false,
            },
            {
                type: 'image',
                src: '/images/products/beam mounted hanger/3.webp',
                alt: 'beam mounted',
                width: 800,
                height: 800,
                priority: false,
            },
            {
                type: 'image',
                src: '/images/products/beam mounted hanger/4.webp',
                alt: 'beam mounted',
                width: 800,
                height: 800,
                priority: false,
            },
            {
                type: 'image',
                src: '/images/products/beam mounted hanger/5.webp',
                alt: 'beam mounted',
                width: 800,
                height: 800,
                priority: false,
            },
            {
                type: 'image',
                src: '/images/products/beam mounted hanger/6.webp',
                alt: 'beam mounted',
                width: 800,
                height: 800,
                priority: false,
            },
            {
                type: 'image',
                src: '/images/products/beam mounted hanger/7.webp',
                alt: 'beam mounted',
                width: 800,
                height: 800,
                priority: false,
            },
            {
                type: 'image',
                src: '/images/products/beam mounted hanger/8.webp',
                alt: 'beam mounted',
                width: 800,
                height: 800,
                priority: false,
            },
        ],
        specifications: [
            { label: 'Bracket Type', value: '6 Lines Channel Metal Bracket' },
            { label: 'Rope / Thread', value: 'Nylon or UV Braided (selected at time of order)' },
            { label: 'Pipe', value: '16 mm Jindal Steel Pipe' },
            { label: 'Available Sizes', value: '4 ft, 5 ft, 6 ft, 7 ft, 8 ft' },
            { label: 'Mounting', value: 'Beam mounted' },
        ],
        benefits: [
            { icon: 'Home', title: 'Beam Mounting', text: 'For spaces with a suitable structural beam as the mounting point.' },
            { icon: 'ShieldCheck', title: '16 mm Jindal Steel Pipe', text: 'Built with 16 mm Jindal Steel pipe.' },
            { icon: 'Wind', title: 'Rope Choice', text: 'Available with Nylon or UV Braided rope.' },
            { icon: 'Ruler', title: 'Five Sizes', text: 'Available in 4 ft to 8 ft sizes.' },
        ],
        useCases: [
            'Spaces with a suitable structural beam for mounting',
            'Balconies where ceiling or wall mounting is not preferred',
        ],
        installationNotes:
            'Beam mounting suitability depends on structural beam condition and positioning. Do not assume every beam is suitable. Final suitability is always confirmed during the free on-site measurement visit before any work begins.',
        relatedSlugs: ['wall-mounted-hanger', 'premium-ceiling-hanger', 'hanger-repair'],
        faqs: [
            { q: 'Can a Beam Mounted Hanger be installed on any beam?', a: 'Not every beam is suitable. Suitability depends on structural condition and positioning. Our technician confirms this during the free measurement visit.' },
            { q: 'What is the difference between Beam Mounted and Wall Mounted?', a: 'The mounting point differs. Beam hangers attach to a structural beam; wall hangers fix to the wall surface.' },
            { q: 'Can I choose between Nylon and UV Braided rope?', a: 'Yes. Specify your rope preference during booking.' },
        ],
        stats: { customers: '20,000+', rating: '4.8', installs: '4 hrs' },
        warranty: null,
        seo: {
            title: 'Beam Mounted Cloth Hanger in Hyderabad | 16 mm Jindal Steel | Tap to Easy',
            description: 'Beam-mounted cloth drying hanger with metal bracket and 16 mm Jindal Steel pipe. Nylon or UV Braided rope. Sizes 4 ft to 8 ft. Free measurement in Hyderabad.',
            keywords: ['beam mounted cloth hanger hyderabad', 'beam hanger for balcony hyderabad', 'balcony cloth hanger beam mount', 'cloth drying hanger beam mounted'],
        },
    },

    // ── 6. HANGER REPAIR & REPLACEMENT ────────────────────────────────────
    {
        slug: 'hanger-repair',
        name: 'Hanger Repair & Replacement',
        category: 'Hanger Repairs',
        categorySlug: 'hanger-repair',
        tagline: 'Thread & Bracket Replacement',
        bestSeller: false,
        icon: 'Wrench',
        accent: 'from-orange-500 to-amber-500',
        badge: 'No Pipe Replacement',
        hook: 'Service Available Across Hyderabad',
        shortDescription:
            'Rope and bracket replacement for existing cloth hangers \u2014 without replacing the pipe.',
        heroTitle: 'Hanger Repair & Replacement Service in Hyderabad',
        heroSub:
            'Is your existing hanger rope damaged or bracket worn out? Our repair service can replace eligible ropes/threads and brackets while keeping the existing pipe. We do not replace hanger pipes during repair service. Repair feasibility depends on the existing hanger condition and installation setup.',
        repairOptions: [
            { name: 'Nylon Thread Replacement', description: 'Replace old nylon thread with new nylon thread.', icon: 'Wind' },
            { name: 'UV Braided Thread Replacement', description: 'Replace old UV braided thread with new UV braided thread.', icon: 'Zap' },
            { name: 'PVC Bracket Replacement', description: 'Replace a damaged PVC bracket with a new PVC bracket.', icon: 'Grid3x3' },
            { name: 'Metal Bracket Replacement', description: 'Replace a damaged metal bracket with a new metal bracket.', icon: 'ShieldCheck' },
        ],
        repairCombinations: [
            { label: 'Nylon Thread + PVC Bracket', description: 'Replace nylon thread and PVC bracket together.' },
            { label: 'Nylon Thread + Metal Bracket', description: 'Replace nylon thread and metal bracket together.' },
            { label: 'UV Braided Thread + Metal Bracket', description: 'Replace UV braided thread and metal bracket together.' },
        ],
        media: [
            {
                type: 'image',
                src: 'images/products/premium ceiling hanger/2.webp',
                alt: 'Hanger repair and rope replacement service \u2014 Tap to Easy Hyderabad',
                width: 800,
                height: 800,
                priority: true,
            },
            {
                type: 'image',
                src: 'images/products/premium ceiling hanger/3.webp',
                alt: 'Hanger repair and rope replacement service \u2014 Tap to Easy Hyderabad',
                width: 800,
                height: 800,
                priority: true,
            },
            {
                type: 'image',
                src: 'images/products/premium ceiling hanger/4.webp',
                alt: 'Hanger repair and rope replacement service \u2014 Tap to Easy Hyderabad',
                width: 800,
                height: 800,
                priority: true,
            },
            {
                type: 'image',
                src: 'images/products/premium ceiling hanger/6.webp',
                alt: 'Hanger repair and rope replacement service \u2014 Tap to Easy Hyderabad',
                width: 800,
                height: 800,
                priority: true,
            },
            {
                type: 'image',
                src: 'images/products/premium ceiling hanger/14.webp',
                alt: 'Hanger repair and rope replacement service \u2014 Tap to Easy Hyderabad',
                width: 800,
                height: 800,
                priority: true,
            },
            {
                type: 'image',
                src: 'images/products/wall mounted hangeranger/8.webp',
                alt: 'Hanger repair and rope replacement service \u2014 Tap to Easy Hyderabad',
                width: 800,
                height: 800,
                priority: true,
            },
        ],
        specifications: [
            { label: 'Service Type', value: 'Thread & Bracket Replacement' },
            { label: 'Pipe Replacement', value: 'Not included \u2014 pipe is not replaced during repair service' },
            { label: 'Supported Repairs', value: 'Nylon Thread, UV Braided Thread, PVC Bracket, Metal Bracket' },
            { label: 'Feasibility', value: 'Confirmed during on-site assessment' },
        ],
        benefits: [
            { icon: 'CheckCircle2', title: 'No Full Replacement Needed', text: 'Extend your hanger\'s life by replacing only the damaged rope or bracket.' },
            { icon: 'Zap', title: 'Thread & Bracket Repair', text: 'Nylon thread, UV braided thread, PVC brackets and metal brackets can all be replaced.' },
            { icon: 'ShieldCheck', title: 'On-Site Assessment', text: 'Feasibility confirmed on-site before any work begins.' },
            { icon: 'Wind', title: 'Hyderabad Service', text: 'Available across Hyderabad through our in-house team.' },
        ],
        useCases: [
            'Existing hanger with worn or damaged nylon rope',
            'Existing hanger with damaged UV braided thread',
            'Existing hanger with a broken PVC or metal bracket',
        ],
        installationNotes:
            'Repair feasibility depends on the existing hanger condition and installation setup. We do not replace hanger pipes during repair service.',
        relatedSlugs: ['premium-ceiling-hanger', 'deluxe-ceiling-hanger', 'normal-ceiling-hanger'],
        faqs: [
            { q: 'Can you replace the hanger pipe?', a: 'No. Pipe replacement is not part of our repair service. We replace threads and brackets only.' },
            { q: 'Can every existing hanger be repaired?', a: 'Not every hanger is repairable. Feasibility depends on existing condition and installation. Our technician assesses this on-site.' },
            { q: 'Which threads can be replaced?', a: 'Nylon thread and UV Braided thread can be replaced.' },
            { q: 'Which brackets can be replaced?', a: 'PVC brackets and Metal (Channel) brackets can be replaced.' },
            { q: 'What repair combinations are available?', a: 'Available: (1) Nylon Thread + PVC Bracket, (2) Nylon Thread + Metal Bracket, (3) UV Braided Thread + Metal Bracket.' },
        ],
        stats: { customers: '20,000+', rating: '4.8', installs: '4 hrs' },
        warranty: null,
        seo: {
            title: 'Hanger Repair & Rope Replacement in Hyderabad | Tap to Easy',
            description: 'Cloth hanger repair in Hyderabad. Replace nylon or UV braided thread and PVC or metal brackets without replacing the pipe. Feasibility confirmed on-site. Book today.',
            keywords: ['hanger repair hyderabad', 'cloth hanger rope replacement hyderabad', 'nylon thread replacement hanger', 'uv braided rope replacement', 'bracket replacement hanger hyderabad'],
        },
    },

    // ── 7. INVISIBLE GRILLS ────────────────────────────────────────────────
    {
        slug: 'invisible-grills',
        name: 'Invisible Grills',
        category: 'Invisible Grills',
        categorySlug: 'invisible-grills',
        tagline: '2.5 mm & 3 mm Wire Options',
        bestSeller: false,
        icon: 'Grid3x3',
        accent: 'from-blue-500 to-cyan-600',
        badge: 'Wire Grill System',
        hook: 'Free Measurement Visit \u2022 Hyderabad',
        shortDescription:
            'Invisible grills provide a minimal visual barrier for balconies and windows while helping maintain an open view.',
        heroTitle:
            'Invisible Grills in Hyderabad \u2014 Balcony & Window Wire Grill Installation',
        heroSub:
            'Invisible grills provide a minimal visual barrier for balconies and windows, helping maintain an open view. Available in 2.5 mm and 3 mm wire options. Suitable for balconies, windows and selected open areas in Hyderabad. Free measurement visit.',
        wireOptions: ['2.5 mm', '3 mm'],
        variants: [
            { name: '2.5 mm Wire', description: 'Thinner wire option for a more minimal visual profile.' },
            { name: '3 mm Wire', description: 'Slightly thicker wire providing a different structural profile.' },
        ],
        media: [
            {
                type: 'image',
                src: '/images/products/invisible grill/1.webp',
                alt: 'invisible grill ',
                width: 800,
                height: 800,
                priority: true,
            },
            {
                type: 'image',
                src: '/images/products/invisible grill/2.webp',
                alt: 'invisible grill',
                width: 800,
                height: 800,
                priority: true,
            },
            {
                type: 'image',
                src: '/images/products/invisible grill/3.webp',
                alt: 'invisible grill',
                width: 800,
                height: 800,
                priority: true,
            },
        ],
        specifications: [
            { label: 'Wire Options', value: '2.5 mm or 3 mm' },
            { label: 'Suitable Locations', value: 'Balconies, windows, selected open areas' },
            { label: 'Measurement', value: 'Free on-site measurement visit' },
        ],
        benefits: [
            { icon: 'Eye', title: 'Open View', text: 'Wire design maintains an open visual compared to solid grill alternatives.' },
            { icon: 'Grid3x3', title: 'Two Wire Options', text: 'Choose between 2.5 mm and 3 mm wire.' },
            { icon: 'Ruler', title: 'Custom Sizing', text: 'Sized to your specific balcony or window dimensions during measurement.' },
            { icon: 'MapPin', title: 'Hyderabad Coverage', text: 'Service available across Hyderabad.' },
        ],
        useCases: [
            'Balconies where a minimal visual barrier is preferred',
            'Windows requiring a wire grill barrier',
            'High-rise apartments where invisible grill installations are permitted',
        ],
        installationNotes:
            'Suitability and installation details are confirmed during the free on-site measurement visit. Not every balcony or window configuration may be suitable.',
        relatedSlugs: ['pigeon-nets', 'mosquito-mesh', 'premium-ceiling-hanger'],
        faqs: [
            { q: 'What are invisible grills?', a: 'Invisible grills are wire-based grill systems that provide a minimal visual barrier for balconies and windows. The wire design helps maintain an open view.' },
            { q: 'What wire options are available?', a: 'We offer 2.5 mm and 3 mm wire options.' },
            { q: 'Where can invisible grills be installed?', a: 'On balconies, windows and selected open areas. Specific suitability is confirmed during the measurement visit.' },
            { q: 'Are invisible grills approved by housing societies?', a: 'Society approval policies vary. We recommend checking with your housing society management before proceeding.' },
            { q: 'How do I maintain invisible grills?', a: 'Keep the wire and tracks clean. Our team provides care instructions after installation.' },
        ],
        stats: { customers: '3,200+', rating: '4.9', installs: '4 hrs' },
        warranty: null,
        seo: {
            title: 'Invisible Grills in Hyderabad | 2.5 mm & 3 mm Wire | Free Measurement | Tap to Easy',
            description: 'Invisible wire grill installation for balconies and windows in Hyderabad. 2.5 mm and 3 mm wire options. Free on-site measurement. Book your visit today.',
            keywords: ['invisible grills hyderabad', 'balcony invisible grill hyderabad', 'invisible safety grill hyderabad', 'wire grill for balcony hyderabad', 'invisible grill installation hyderabad'],
        },
    },

    // ── 8. PIGEON NETS ─────────────────────────────────────────────────────
    {
        slug: 'pigeon-nets',
        name: 'Pigeon Nets',
        category: 'Pigeon Nets',
        categorySlug: 'pigeon-nets',
        tagline: '1.5 mm & 2.5 mm Net Options',
        bestSeller: false,
        icon: 'ShieldCheck',
        accent: 'from-violet-600 to-purple-600',
        badge: 'Balcony Protection Net',
        hook: 'Free Measurement Visit \u2022 Hyderabad',
        shortDescription:
            'Balcony pigeon nets help create a protective barrier for balconies and open areas while keeping the space usable.',
        heroTitle:
            'Pigeon Nets in Hyderabad \u2014 Balcony & Open Area Protective Netting',
        heroSub:
            'Balcony pigeon nets help create a protective barrier for balconies and open areas while keeping the space usable. Available in 1.5 mm and 2.5 mm net options. Suitable for balconies, terraces and selected open areas in Hyderabad. Free measurement visit.',
        netOptions: ['1.5 mm', '2.5 mm'],
        variants: [
            { name: '1.5 mm Net', description: '1.5 mm pigeon protection net.' },
            { name: '2.5 mm Net', description: '2.5 mm pigeon protection net \u2014 a thicker net option.' },
        ],
        media: [
            {
                type: 'image',
                src: '/images/products/pigeon net/1.webp',
                alt: 'Pigeon net installation on balcony in Hyderabad \u2014 Tap to Easy',
                width: 800,
                height: 800,
                priority: true,
            },
            {
                type: 'image',
                src: '/images/products/pigeon net/2.webp',
                alt: 'Pigeon net installation on balcony in Hyderabad \u2014 Tap to Easy',
                width: 800,
                height: 800,
                priority: true,
            },
            {
                type: 'image',
                src: '/images/products/pigeon net/3.webp',
                alt: 'Pigeon net installation on balcony in Hyderabad \u2014 Tap to Easy',
                width: 800,
                height: 800,
                priority: true,
            },
        ],
        specifications: [
            { label: 'Net Options', value: '1.5 mm or 2.5 mm' },
            { label: 'Suitable Areas', value: 'Balconies, terraces, selected open areas' },
            { label: 'Measurement', value: 'Free on-site measurement visit' },
        ],
        benefits: [
            { icon: 'ShieldCheck', title: 'Protective Barrier', text: 'Creates a barrier to help prevent pigeon access to balconies and open areas.' },
            { icon: 'Grid3x3', title: 'Two Net Options', text: 'Choose between 1.5 mm and 2.5 mm net thickness.' },
            { icon: 'Ruler', title: 'Custom Fitting', text: 'Sized to your specific balcony or area during measurement.' },
            { icon: 'Home', title: 'Usable Space', text: 'Keeps the balcony usable while providing bird protection.' },
        ],
        useCases: [
            'Balconies frequently visited by pigeons or birds',
            'Terraces where bird access needs to be reduced',
            'Selected open areas requiring protective netting',
        ],
        installationNotes:
            'Installation suitability depends on balcony structure. Confirmed during the free on-site measurement visit.',
        relatedSlugs: ['invisible-grills', 'mosquito-mesh', 'premium-ceiling-hanger'],
        faqs: [
            { q: 'What net options are available?', a: 'We offer 1.5 mm and 2.5 mm pigeon nets.' },
            { q: 'Where can pigeon nets be installed?', a: 'On balconies, terraces, and selected open areas. Suitability confirmed during the measurement visit.' },
            { q: 'How do I maintain pigeon nets?', a: 'General maintenance involves checking for debris. Care instructions provided after installation.' },
        ],
        stats: { customers: '2,800+', rating: '4.7', installs: '4 hrs' },
        warranty: null,
        seo: {
            title: 'Pigeon Nets in Hyderabad | 1.5 mm & 2.5 mm Net | Free Measurement | Tap to Easy',
            description: 'Balcony pigeon nets in Hyderabad. 1.5 mm and 2.5 mm options. Balconies, terraces and open areas. Free measurement. Book today.',
            keywords: ['pigeon net hyderabad', 'balcony pigeon net hyderabad', 'pigeon protection net hyderabad', 'bird net for balcony hyderabad', 'pigeon net installation hyderabad'],
        },
    },

    // ── 9. SHOE RACKS ──────────────────────────────────────────────────────
    {
        slug: 'shoe-racks',
        name: 'Shoe Racks',
        category: 'Shoe Racks',
        categorySlug: 'shoe-racks',
        tagline: 'Metal 3, 4 & 5 Rack Options',
        bestSeller: false,
        icon: 'Layers',
        accent: 'from-blue-600 to-sky-600',
        badge: 'Metal Storage Rack',
        hook: 'Doorstep Installation \u2022 Hyderabad',
        shortDescription:
            'Practical metal shoe storage solutions designed to keep entrances, balconies and utility areas organised.',
        heroTitle: 'Metal Shoe Racks in Hyderabad \u2014 3, 4 and 5 Rack Options',
        heroSub:
            'Practical metal shoe storage solutions for home entrances, balconies and utility areas. Available in Metal 3 Rack, Metal 4 Rack, and Metal 5 Rack options. Keeps your home entrance organised and tidy.',
        rackOptions: ['Metal 3 Rack', 'Metal 4 Rack', 'Metal 5 Rack'],
        variants: [
            { name: 'Metal 3 Rack', description: 'A 3-tier metal shoe rack.' },
            { name: 'Metal 4 Rack', description: 'A 4-tier metal shoe rack.' },
            { name: 'Metal 5 Rack', description: 'A 5-tier metal shoe rack.' },
        ],
        media: [
            {
                type: 'image',
                src: '/images/products/shoe racks/1.webp',
                alt: 'Metal shoe rack for home entrance \u2014 Tap to Easy Hyderabad',
                width: 800,
                height: 800,
                priority: true,
            },
            {
                type: 'image',
                src: '/images/products/shoe racks/2.webp',
                alt: 'Metal shoe rack for home entrance \u2014 Tap to Easy Hyderabad',
                width: 800,
                height: 800,
                priority: true,
            },
            {
                type: 'image',
                src: '/images/products/shoe racks/3.webp',
                alt: 'Metal shoe rack for home entrance \u2014 Tap to Easy Hyderabad',
                width: 800,
                height: 800,
                priority: true,
            },
        ],
        specifications: [
            { label: 'Material', value: 'Metal' },
            { label: 'Options', value: '3  Rack, 4 Rack, 5 Rack' },
            { label: 'Suitable For', value: 'Entrances, balconies, utility areas' },
        ],
        benefits: [
            { icon: 'Layers', title: 'Multiple Rack Options', text: 'Choose between 3, 4, or 5 tier racks depending on your storage needs.' },
            { icon: 'Home', title: 'Organised Entrances', text: 'Helps keep footwear organised at home entrances and utility areas.' },
            { icon: 'ShieldCheck', title: 'Metal Build', text: 'Durable metal construction.' },
        ],
        useCases: [
            'Home entrances requiring footwear organisation',
            'Balconies or utility areas for storing everyday shoes',
        ],
        installationNotes:
            'Free installation available for wall-mounted options (if applicable). Suitability confirmed during the measurement visit.',
        relatedSlugs: ['balcony-cloth-hangers', 'invisible-grills'],
        faqs: [
            { q: 'What are the available rack options?', a: 'We offer 3-tier, 4-tier, and 5-tier metal shoe racks.' },
            { q: 'Can this be placed outdoors?', a: 'They are suitable for covered balconies and utility areas.' },
        ],
        stats: { customers: '1,500+', rating: '4.7', installs: '2 hrs' },
        warranty: null,
        seo: {
            title: 'Metal Shoe Racks in Hyderabad | 3, 4 & 5 Tier Options | Tap to Easy',
            description: 'Metal shoe racks for homes in Hyderabad. 3-tier, 4-tier and 5-tier options available to keep entrances organised. Shop now.',
            keywords: ['shoe rack hyderabad', 'metal shoe rack hyderabad', '3 tier shoe rack', 'home entrance shoe rack'],
        },
    },

    // ── 10. MOSQUITO MESH ──────────────────────────────────────────────────
    {
        slug: 'mosquito-mesh',
        name: 'Mosquito Mesh Doors & Windows',
        category: 'Mosquito Mesh',
        categorySlug: 'mosquito-mesh',
        tagline: 'Sliding, Openable & Window Options',
        bestSeller: false,
        icon: 'DoorOpen',
        accent: 'from-blue-700 to-indigo-600',
        badge: 'Custom Sized',
        hook: 'Free Measurement Visit • Hyderabad',
        shortDescription:
            'Custom-cut mosquito mesh solutions including sliding doors, openable doors, and window meshes for Hyderabad homes.',
        heroTitle: 'Mosquito Mesh Doors & Windows in Hyderabad',
        heroSub:
            'Protect your home with custom mosquito mesh solutions. We offer Sliding Doors, Premium Sliding Doors, Openable Doors, Openable Doors with Frame, Window Mosquito Mesh, and Honeycomb Doors / Partition Doors. Tailored to fit your exact door and window dimensions.',
        media: [
            {
                type: 'image',
                src: '/images/products/mosquito mesh/1.webp',
                alt: 'Mosquito mesh sliding door installed in Hyderabad — Tap to Easy',
                width: 800,
                height: 800,
                priority: true,
            },
            {
                type: 'image',
                src: '/images/products/mosquito mesh/2.webp',
                alt: 'Mosquito mesh sliding door installed in Hyderabad — Tap to Easy',
                width: 800,
                height: 800,
                priority: true,
            },
            {
                type: 'image',
                src: '/images/products/mosquito mesh/3.png',
                alt: 'Mosquito mesh sliding door installed in Hyderabad — Tap to Easy',
                width: 800,
                height: 800,
                priority: true,
            },
            {
                type: 'image',
                src: '/images/products/mosquito mesh/4.jpg',
                alt: 'Mosquito mesh sliding door installed in Hyderabad — Tap to Easy',
                width: 800,
                height: 800,
                priority: true,
            },
        ],
        specifications: [
            { label: 'Options', value: 'Sliding, Premium Sliding, Openable, Openable with Frame, Window, Honeycomb / Partition' },
            { label: 'Suitable For', value: 'Balcony sliding doors, openable doors, windows' },
            { label: 'Measurement', value: 'Free on-site measurement visit' },
        ],
        benefits: [
            { icon: 'DoorOpen', title: 'Multiple Options', text: 'Sliding, openable, window and honeycomb/partition options to match different configurations.' },
            { icon: 'Wind', title: 'Allows Airflow', text: 'Mesh design allows airflow while providing a barrier against mosquitoes.' },
            { icon: 'Ruler', title: 'Custom Cut', text: 'Each mesh cut and fitted to your specific door or window dimensions.' },
            { icon: 'MapPin', title: 'Hyderabad Coverage', text: 'Service available across Hyderabad.' },
        ],
        useCases: [
            'Balcony sliding doors needing a mosquito barrier',
            'Openable doors and windows requiring mosquito protection',
            'Homes looking for a custom-fit mosquito mesh solution',
        ],
        installationNotes:
            'Mesh option suitability depends on door/window frame type and configuration. Confirmed during the free on-site measurement visit.',
        relatedSlugs: ['pigeon-nets', 'invisible-grills', 'shoe-racks'],
        faqs: [
            { q: 'What mosquito mesh options are available?', a: 'Sliding Door, Premium Sliding Door, Openable Door, Openable Door with Frame, Window Mosquito Mesh, and Honeycomb Doors / Partition Doors.' },
            { q: 'What are Honeycomb Doors / Partition Doors?', a: 'Space-efficient door and partition solutions suitable for selected door and window applications.' },
            { q: 'Are mosquito mesh doors custom-cut?', a: 'Yes. Each mesh is cut and fitted to your specific door or window dimensions.' },
            { q: 'Can mosquito mesh be fitted on windows?', a: 'Yes. Window mosquito mesh is available and custom-cut to fit your window dimensions.' },
        ],
        stats: { customers: '4,100+', rating: '4.8', installs: '4 hrs' },
        warranty: null,
        seo: {
            title: 'Mosquito Mesh Doors & Windows in Hyderabad | Sliding & Openable | Tap to Easy',
            description: 'Custom mosquito mesh in Hyderabad. Sliding door, openable door, window and honeycomb/partition options. Free measurement. Book today.',
            keywords: ['mosquito mesh hyderabad', 'mosquito mesh door hyderabad', 'sliding mosquito mesh hyderabad', 'openable mosquito mesh door hyderabad', 'window mosquito mesh hyderabad', 'mosquito mesh installation hyderabad'],
        },
    },
];

// ─────────────────────────────────────────────────────────────────────────────
// HELPER FUNCTIONS
// ─────────────────────────────────────────────────────────────────────────────

/** Find a product by slug */
export const getProduct = (slug) => PRODUCTS.find((p) => p.slug === slug) ?? null;

/** Get all products belonging to a category slug */
export const getProductsByCategory = (categorySlug) =>
    PRODUCTS.filter((p) => p.categorySlug === categorySlug);

/** Get related products for a given product slug (up to 4) */
export const getRelatedProducts = (slug) => {
    const product = getProduct(slug);
    if (!product?.relatedSlugs) return [];
    return product.relatedSlugs
        .map((s) => getProduct(s))
        .filter(Boolean)
        .slice(0, 4);
};

/** Get category config by slug */
export const getCategory = (categorySlug) =>
    PRODUCT_CATEGORIES.find((c) => c.slug === categorySlug) ?? null;
