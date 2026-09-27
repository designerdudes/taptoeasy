import './globals.css';
import { Bricolage_Grotesque, Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

const bricolage = Bricolage_Grotesque({
    subsets: ['latin'],
    variable: '--font-bricolage',
    display: 'swap',
});

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

export const metadata = {
    metadataBase: new URL('https://taptoeasy.com'),
    title: {
        default: 'Tap to Easy | Home Improvement Solutions in Hyderabad',
        template: '%s | Tap to Easy Hyderabad',
    },
    description:
        'Tap to Easy provides home improvement solutions in Hyderabad including cloth hangers, invisible grills, shoe racks, mosquito mesh, pigeon nets and professional installation with reliable after-sales support.',
    keywords: [
        // Ceiling Cloth Hangers Keywords
        'balcony cloth hangers hyderabad',
        'ceiling cloth drying hanger hyderabad',
        'ceiling cloth hanger for balcony hyderabad',
        'ceiling pulley cloth drying hanger',
        'jindal stainless steel cloth hanger hyderabad',
        '6 pipe ceiling cloth drying hanger hyderabad',
        '8 pipe ceiling cloth hanger hyderabad',
        'wall mounted foldable cloth drying rack hyderabad',
        'balcony cloth hanger installation near me',
        'ceiling cloth dryer for high rise flats hyderabad',
        'balcony ceiling cloth hanger price and fitting hyderabad',
        'heavy duty stainless steel cloth drying rails',
        'ceiling mounted clothes airer hyderabad',

        // Invisible Grills Keywords
        'invisible grills for balcony hyderabad',
        'invisible safety grill installation hyderabad',
        'balcony invisible safety grill near me',
        'invisible grills for windows and balconies hyderabad',
        'child safety invisible balcony grill hyderabad',
        'pigeon protection invisible grill hyderabad',
        '2mm stainless steel invisible safety grill hyderabad',
        'invisible grill for high rise apartments gachibowli financial district',
        'best invisible grill manufacturers & installers hyderabad',
        'invisible balcony grill 150kg load capacity',
        'invisible grill cost per sq ft hyderabad',
        'pet safety invisible balcony grills hyderabad',

        // Other Balcony Services
        'mosquito mesh doors for balcony hyderabad',
        'magnetic auto close mosquito net door hyderabad',
        'wall mounted shoe rack hyderabad',
        'balcony shoe rack cabinet hyderabad',

        // High-Intent Locality Keywords
        'balcony cloth hanger gachibowli',
        'invisible grills gachibowli',
        'balcony cloth hanger miyapur',
        'invisible grills miyapur',
        'balcony cloth hanger kukatpally kphb',
        'invisible grills kukatpally',
        'balcony cloth hanger kondapur',
        'invisible grills financial district nanakramguda',
        'balcony cloth hanger madhapur hitec city',
        'invisible grills nallagandla tellapur',
        'balcony cloth hanger manikonda puppalguda',
        'tap to easy hyderabad balcony solutions',
    ],
    authors: [{ name: 'Tap To Easy', url: 'https://taptoeasy.com' }],
    creator: 'Tap to Easy',
    publisher: 'Tap to Easy',
    applicationName: 'Tap to Easy Balcony Solutions',
    category: 'Home Improvement & Balcony Installation',
    formatDetection: {
        telephone: true,
        address: true,
        email: true,
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    openGraph: {
        type: 'website',
        locale: 'en_IN',
        url: 'https://taptoeasy.com',
        siteName: 'Tap to Easy Balcony Installation Hyderabad',
        title: 'Tap to Easy | Home Improvement Solutions in Hyderabad',
        description:
            'Tap to Easy provides professional home improvement installation in Hyderabad — cloth hangers, invisible grills, shoe racks, mosquito mesh and pigeon nets. Free doorstep measurement, 3–7 years warranty, reliable after-sales support.',
        images: [
            {
                url: 'https://taptoeasy.com/hero section photo.webp',
                width: 1200,
                height: 630,
                alt: 'Tap to Easy Balcony Cloth Hangers and Invisible Grills Installation Hyderabad',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        site: '@taptoeasy',
        creator: '@taptoeasy',
        title: 'Tap to Easy | Home Improvement Solutions in Hyderabad',
        description:
            'Tap to Easy provides home improvement solutions in Hyderabad — cloth hangers, invisible grills, shoe racks, mosquito mesh, pigeon nets, professional installation and reliable after-sales support.',
        images: ['https://taptoeasy.com/hero section photo.webp'],
    },
    alternates: {
        canonical: 'https://taptoeasy.com',
    },
    icons: {
        icon: '/favicon.png',
        apple: '/favicon.png',
    },
    // AEO / GEO meta tags — helps AI engines locate & cite Tap to Easy
    other: {
        // Geo meta — powers location-based AI citations
        'geo.region': 'IN-TG',
        'geo.placename': 'Hyderabad, Telangana, India',
        'geo.position': '17.350152;78.418878',
        ICBM: '17.350152, 78.418878',
        // Speakable / voice assistant hint
        'content-type': 'service-local-business',
        // DC (Dublin Core) for archival indexing
        'DC.title': 'Tap to Easy — Home Improvement Installation Hyderabad',
        'DC.language': 'en-IN',
        'DC.coverage': 'Hyderabad, Telangana, India',
    },
};

export const viewport = {
    themeColor: '#2563eb',
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${bricolage.variable} ${inter.variable}`}>
            <head>
            {/* ═══ STRUCTURED DATA — Rich Snippets, AEO, GEO ═══
                 Schemas: LocalBusiness · WebSite + SearchAction · Organization
                 Enables: Google star ratings, sitelinks search, knowledge panel,
                          voice answers (Alexa/Google), Perplexity/ChatGPT citations
            ═══════════════════════════════════════════════════════════════════ */}

            {/* 1. LocalBusiness / HomeAndConstructionBusiness — star ratings, hours, map */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': ['HomeAndConstructionBusiness', 'LocalBusiness'],
                        '@id': 'https://taptoeasy.com/#business',
                        name: 'Tap to Easy',
                        alternateName: ['Tap to Easy Balcony Solutions', 'Tap to Easy Home Improvement Hyderabad'],
                        description:
                            'Tap to Easy is Hyderabad\'s No. 1 home improvement specialist offering ceiling cloth drying hangers (Jindal Stainless Steel), invisible balcony safety grills, mosquito mesh doors, wall-mounted shoe racks, and pigeon protection nets — with free doorstep measurement and 3–7 year warranty.',
                        image: [
                            'https://taptoeasy.com/hero section photo.webp',
                            'https://taptoeasy.com/tap-to-easy-logo.png',
                        ],
                        logo: 'https://taptoeasy.com/tap-to-easy-logo.png',
                        url: 'https://taptoeasy.com/',
                        telephone: '+91-9390804146',
                        email: 'info@taptoeasy.com',
                        priceRange: '₹₹',
                        currenciesAccepted: 'INR',
                        paymentAccepted: 'Cash, UPI, Credit Card, Net Banking',
                        foundingDate: '2018',
                        slogan: "Hyderabad's trusted home improvement specialists",
                        areaServed: [
                            { '@type': 'City', name: 'Hyderabad', '@id': 'https://www.wikidata.org/wiki/Q1361' },
                            { '@type': 'City', name: 'Secunderabad' },
                            { '@type': 'City', name: 'Gachibowli' },
                            { '@type': 'City', name: 'Miyapur' },
                            { '@type': 'City', name: 'Kukatpally' },
                            { '@type': 'City', name: 'Kondapur' },
                            { '@type': 'City', name: 'Madhapur' },
                            { '@type': 'City', name: 'Financial District' },
                            { '@type': 'City', name: 'Manikonda' },
                            { '@type': 'City', name: 'Nallagandla' },
                            { '@type': 'City', name: 'Tellapur' },
                            { '@type': 'City', name: 'Chandanagar' },
                            { '@type': 'City', name: 'Begumpet' },
                            { '@type': 'City', name: 'Banjara Hills' },
                            { '@type': 'City', name: 'Nizampet' },
                        ],
                        serviceArea: {
                            '@type': 'GeoCircle',
                            geoMidpoint: { '@type': 'GeoCoordinates', latitude: 17.3850, longitude: 78.4867 },
                            geoRadius: '40000',
                        },
                        address: {
                            '@type': 'PostalAddress',
                            addressLocality: 'Hyderabad',
                            addressRegion: 'Telangana',
                            postalCode: '500081',
                            addressCountry: 'IN',
                        },
                        geo: {
                            '@type': 'GeoCoordinates',
                            latitude: 17.350152,
                            longitude: 78.4188781,
                        },
                        hasMap: 'https://maps.google.com/?cid=7694869671018636819',
                        openingHoursSpecification: {
                            '@type': 'OpeningHoursSpecification',
                            dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
                            opens: '08:00',
                            closes: '20:00',
                        },
                        aggregateRating: {
                            '@type': 'AggregateRating',
                            ratingValue: '4.8',
                            reviewCount: '6400',
                            bestRating: '5',
                            worstRating: '1',
                        },
                        review: [
                            {
                                '@type': 'Review',
                                reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
                                author: { '@type': 'Person', name: 'Priya Sharma' },
                                reviewBody: 'Excellent service! The ceiling cloth hanger was installed perfectly. Very professional team and genuine Jindal steel quality. Highly recommend.',
                                datePublished: '2026-08-15',
                            },
                            {
                                '@type': 'Review',
                                reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
                                author: { '@type': 'Person', name: 'Rahul Reddy' },
                                reviewBody: 'Got invisible grills installed for our 15th floor balcony. The team was professional, clean and fast. My kids are now safe. 5 stars!',
                                datePublished: '2026-07-22',
                            },
                            {
                                '@type': 'Review',
                                reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
                                author: { '@type': 'Person', name: 'Sunita Rao' },
                                reviewBody: 'Best balcony solutions in Hyderabad. Free measurement visit, same-day installation and proper warranty card given. Very satisfied.',
                                datePublished: '2026-09-01',
                            },
                        ],
                        hasOfferCatalog: {
                            '@type': 'OfferCatalog',
                            name: 'Home Improvement Installation Services Hyderabad',
                            itemListElement: [
                                {
                                    '@type': 'Offer',
                                    name: 'Ceiling Pulley Cloth Drying Hangers — Jindal Stainless Steel',
                                    description: 'Heavy-duty SS ceiling pulley cloth drying hanger. Available in 6, 8, 10 pipe variants. 3–7 year warranty. Free installation across Hyderabad.',
                                    itemOffered: { '@type': 'Service', name: 'Ceiling Cloth Drying Hanger Installation Hyderabad' },
                                    areaServed: 'Hyderabad',
                                },
                                {
                                    '@type': 'Offer',
                                    name: 'Invisible Balcony Safety Grills — 2mm High Tensile Steel',
                                    description: '150 kg rated invisible safety grills for balconies and windows. Child and pet safe. Free site visit across Hyderabad high-rises.',
                                    itemOffered: { '@type': 'Service', name: 'Invisible Safety Grill Installation Hyderabad' },
                                    areaServed: 'Hyderabad',
                                },
                                {
                                    '@type': 'Offer',
                                    name: 'Mosquito Mesh Doors — Magnetic Auto-Close',
                                    description: 'Washable, custom-fit mosquito mesh net doors for balcony and windows. Available in fibre and SS mesh variants.',
                                    itemOffered: { '@type': 'Service', name: 'Mosquito Mesh Door Installation Hyderabad' },
                                    areaServed: 'Hyderabad',
                                },
                                {
                                    '@type': 'Offer',
                                    name: 'Wall-Mounted Foldable Shoe Racks',
                                    description: 'Custom wall shoe racks holding 12–24 pairs. Powder-coated mild steel. Free measurement visit.',
                                    itemOffered: { '@type': 'Service', name: 'Shoe Rack Installation Hyderabad' },
                                    areaServed: 'Hyderabad',
                                },
                            ],
                        },
                        knowsAbout: [
                            'Ceiling Cloth Drying Hangers',
                            'Invisible Balcony Safety Grills',
                            'Mosquito Mesh Doors',
                            'Pigeon Protection Nets',
                            'Wall Mounted Shoe Racks',
                            'Home Improvement Installation Hyderabad',
                            'Balcony Safety Solutions',
                            'Jindal Stainless Steel Products',
                        ],
                        speakable: {
                            '@type': 'SpeakableSpecification',
                            cssSelector: ['h1', 'h2', '.speakable'],
                        },
                    }),
                }}
            />

            {/* 2. WebSite + SearchAction — enables Google Sitelinks Search Box */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'WebSite',
                        '@id': 'https://taptoeasy.com/#website',
                        name: 'Tap to Easy',
                        url: 'https://taptoeasy.com/',
                        description: 'Home improvement installation specialists in Hyderabad — cloth hangers, invisible grills, mosquito mesh, shoe racks & pigeon nets.',
                        publisher: { '@id': 'https://taptoeasy.com/#business' },
                        inLanguage: 'en-IN',
                        potentialAction: {
                            '@type': 'SearchAction',
                            target: {
                                '@type': 'EntryPoint',
                                urlTemplate: 'https://taptoeasy.com/?q={search_term_string}',
                            },
                            'query-input': 'required name=search_term_string',
                        },
                    }),
                }}
            />

            {/* 3. Organization — for Google Knowledge Panel & GEO citation */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Organization',
                        '@id': 'https://taptoeasy.com/#organization',
                        name: 'Tap to Easy',
                        url: 'https://taptoeasy.com',
                        logo: {
                            '@type': 'ImageObject',
                            url: 'https://taptoeasy.com/tap-to-easy-logo.png',
                            width: 400,
                            height: 150,
                        },
                        contactPoint: [
                            {
                                '@type': 'ContactPoint',
                                telephone: '+91-9390804146',
                                contactType: 'customer service',
                                areaServed: 'IN',
                                availableLanguage: ['English', 'Telugu', 'Hindi'],
                                contactOption: 'TollFree',
                                hoursAvailable: {
                                    '@type': 'OpeningHoursSpecification',
                                    dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
                                    opens: '08:00',
                                    closes: '20:00',
                                },
                            },
                        ],
                        sameAs: [
                            'https://www.google.com/maps/place/Tap+to+easy',
                            'https://wa.me/919390804146',
                        ],
                    }),
                }}
            />
            </head>
            <body className="min-h-screen bg-background font-sans text-foreground antialiased flex flex-col selection:bg-primary/20 selection:text-primary">
                <Navbar />
                <div className="flex-1">{children}</div>
                <Footer />
                <FloatingWhatsApp />
            </body>
        </html>
    );
}
