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
    authors: [{ name: 'Tap to Easy Home Solutions Pvt Ltd', url: 'https://taptoeasy.com' }],
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
                url: 'https://images.hostinger.com/a4242581-f71f-4f31-81d1-90612d1341dc.png',
                width: 1200,
                height: 630,
                alt: 'Tap to Easy Balcony Cloth Hangers and Invisible Grills Installation Hyderabad',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Tap to Easy | Home Improvement Solutions in Hyderabad',
        description:
            'Tap to Easy provides home improvement solutions in Hyderabad — cloth hangers, invisible grills, shoe racks, mosquito mesh, pigeon nets, professional installation and reliable after-sales support.',
        images: ['https://images.hostinger.com/a4242581-f71f-4f31-81d1-90612d1341dc.png'],
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
                {/* Global Structured Schema: LocalBusiness + Services + Rating for Google SERP Rich Snippets */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'HomeAndConstructionBusiness',
                            name: 'Tap to Easy Balcony Solutions Hyderabad',
                            alternateName: 'Tap to Easy Home Solutions',
                            image: 'https://images.hostinger.com/a4242581-f71f-4f31-81d1-90612d1341dc.png',
                            url: 'https://taptoeasy.com/',
                            telephone: '+91-90000-12345',
                            email: 'care@taptoeasy.com',
                            priceRange: '₹₹',
                            currenciesAccepted: 'INR',
                            paymentAccepted: 'Cash, UPI, Credit Card, Net Banking',
                            areaServed: [
                                'Hyderabad',
                                'Secunderabad',
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
                            ],
                            address: {
                                '@type': 'PostalAddress',
                                addressLocality: 'Hyderabad',
                                addressRegion: 'Telangana',
                                addressCountry: 'IN',
                            },
                            geo: {
                                '@type': 'GeoCoordinates',
                                latitude: 17.385044,
                                longitude: 78.486671,
                            },
                            openingHoursSpecification: {
                                '@type': 'OpeningHoursSpecification',
                                dayOfWeek: [
                                    'Monday',
                                    'Tuesday',
                                    'Wednesday',
                                    'Thursday',
                                    'Friday',
                                    'Saturday',
                                    'Sunday',
                                ],
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
                            hasOfferCatalog: {
                                '@type': 'OfferCatalog',
                                name: 'Balcony Installation Services',
                                itemListElement: [
                                    {
                                        '@type': 'Offer',
                                        itemOffered: {
                                            '@type': 'Service',
                                            name: 'Ceiling Pulley Balcony Cloth Drying Hangers (Jindal Stainless Steel)',
                                            description: 'Heavy duty SS ceiling pulley cloth drying hanger with 3–7 years warranty in Hyderabad',
                                        },
                                    },
                                    {
                                        '@type': 'Offer',
                                        itemOffered: {
                                            '@type': 'Service',
                                            name: 'Invisible Balcony Safety Grills (2mm High Tensile Steel)',
                                            description: '150kg load rated invisible balcony safety grills for child & pet protection in high rise flats',
                                        },
                                    },
                                    {
                                        '@type': 'Offer',
                                        itemOffered: {
                                            '@type': 'Service',
                                            name: 'Wall-Mounted Foldable Shoe Racks',
                                            description: 'Custom entry wall shoe racks holding 12-24 pairs in Hyderabad',
                                        },
                                    },
                                    {
                                        '@type': 'Offer',
                                        itemOffered: {
                                            '@type': 'Service',
                                            name: 'Magnetic Auto-Close Mosquito Mesh Doors',
                                            description: 'Custom fit washable mosquito mesh net doors for balcony & windows in Hyderabad',
                                        },
                                    },
                                ],
                            },
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
