// Central product configuration for the 4 balcony installation services in Hyderabad.
// Optimized for top search engine visibility and Google Ads performance for Ceiling Cloth Hangers & Invisible Grills.

export const HERO_IMG = 'https://images.hostinger.com/a4242581-f71f-4f31-81d1-90612d1341dc.png';
export const WALL_IMG = 'https://images.hostinger.com/b40e11fb-477d-488d-90e8-d1013678f32c.png';

export const WHATSAPP_NUMBER = '919000012345';
export const PHONE_NUMBER = '+91 90000 12345';
export const PHONE_NUMBER_RAW = '+919000012345';

export const getWhatsAppLink = (productOrLocation = '') => {
    const text = productOrLocation 
        ? `Hi Tap to Easy, I want to book a free site visit for ${productOrLocation} in Hyderabad. Please provide details!`
        : `Hi Tap to Easy, I am interested in balcony cloth drying hangers / invisible grills in Hyderabad. Please assist me!`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
};

export const PRODUCTS = [
    {
        slug: 'cloth-hangers',
        name: 'Balcony Cloth Drying Hangers',
        tagline: 'Hyderabad #1 Best Seller',
        bestSeller: true,
        icon: 'Wind',
        accent: 'from-blue-600 to-indigo-600',
        badge: 'Jindal Stainless Steel',
        hook: 'Doorstep Installation in 2 Hours • Hyderabad',
        heroTitle: 'Jindal Stainless Steel Ceiling Pulley Cloth Drying Hangers in Hyderabad',
        heroSub:
            'Heavy-duty ceiling mounted pulley cloth drying hangers and wall-mounted foldable racks for Hyderabad high-rise apartments & villas. Fabricated with genuine rust-free Jindal Stainless Steel rails, individual lowering cords, and backed by an official 3–7 years warranty.',
        image: HERO_IMG,
        specifications: [
            { label: 'Material', value: '100% Genuine Jindal Stainless Steel' },
            { label: 'Configuration', value: '4, 6, and 8 Independent Pipe Models' },
            { label: 'Load Capacity', value: '12 kg per pipe (Holds full wet blankets & heavy laundry)' },
            { label: 'Ceiling Compatibility', value: 'Suitable for 8 ft, 9 ft, 10 ft, and 12 ft ceilings' },
            { label: 'Pulley Mechanism', value: 'Smooth self-locking nylon pulley with nylon cords' },
            { label: 'Warranty', value: '3–7 Years On-Site Replacement Warranty' },
        ],
        benefits: [
            { icon: 'ShieldCheck', title: 'Rust-proof Jindal Stainless Steel', text: 'Marine-grade Jindal steel pipes built to survive continuous humidity and Hyderabad monsoons without peeling or rusting.' },
            { icon: 'Wind', title: 'Smooth individual pulley system', text: 'Lower and raise each pipe independently with a two-finger light pull. Self-locks automatically at any comfortable height.' },
            { icon: 'Ruler', title: '12 kg load capacity per pipe', text: 'Available in 4, 6, or 8 pipe setups. Strong enough to hold wet winter blankets, sarees, and heavy daily laundry loads.' },
            { icon: 'Home', title: 'Frees 100% balcony floor space', text: 'Lifts laundry right up to the warm ceiling breeze, keeping your balcony, utility corridor, and walkways completely clear.' },
        ],
        whyChooseUs: [
            { title: 'Trained in-house fitters, no contractors', text: 'Background-verified technicians on our payroll handle measurement and precision drill fitting.' },
            { title: 'Free doorstep sizing & measurement', text: 'Our technician visits your home with sample rods to measure exact balcony dimensions for free.' },
            { title: 'Dust-sheet clean installation', text: 'We lay industrial floor sheets, core-drill, and carry away all debris. Your balcony is left spotless.' },
            { title: '3–7 Years official warranty', text: 'On-site warranty card issued at handover with quick doorstep service response across Hyderabad.' },
        ],
        testimonials: [
            { name: 'Priya Sharma', location: 'Gachibowli (My Home Bhooja)', rating: 5, text: 'Booked in the morning, fitted by 1 PM! The 6-pipe Jindal steel pulley is so light my 65-year-old mother lowers it effortlessly with one hand.' },
            { name: 'Ravi Kumar', location: 'Kukatpally (KPHB Colony)', rating: 5, text: 'Zero rust after two monsoon seasons. The crew left the balcony cleaner than they found it. Best investment for our apartment.' },
            { name: 'Sneha Reddy', location: 'Madhapur', rating: 5, text: 'Clean install and genuine Jindal Stainless Steel quality. Holds all heavy winter blankets without bending.' },
        ],
        faqs: [
            { 
                q: 'What is the price and pipe configuration for ceiling cloth hangers in Hyderabad?', 
                a: 'We offer 4-pipe, 6-pipe, and 8-pipe ceiling cloth drying systems custom-cut to lengths between 4 ft and 8 ft. Our technician visits your apartment for a free measurement and provides exact sizing tailored to your balcony.' 
            },
            { 
                q: 'What material is used for the cloth hanger rails and pulleys?', 
                a: 'We use genuine high-tensile Jindal Stainless Steel pipes that never rust or bend under heavy laundry loads, combined with smooth self-locking nylon pulley wheels and weather-resistant cords.' 
            },
            { 
                q: 'How much weight can each pipe on the ceiling cloth hanger hold?', 
                a: 'Each individual Jindal steel pipe is rated to hold up to 12 kg of wet laundry, meaning an 8-pipe hanger can support nearly 96 kg of wet clothes, bedsheets, and blankets safely.' 
            },
            { 
                q: 'Can this be installed on high ceilings (10 ft – 12 ft) and false ceilings in Hyderabad flats?', 
                a: 'Yes. For high ceilings up to 12 feet, we use custom length drops. For balconies with false ceilings, our fitters use structural expansion anchors into the core concrete slab.' 
            },
            { 
                q: 'How long does the ceiling cloth hanger installation take?', 
                a: 'Standard installation takes about 90 to 120 minutes — including measurement, laser alignment, anchor drilling, test load hanging, and handover.' 
            },
            { 
                q: 'Is it safe for rented apartments in gated societies?', 
                a: 'Yes, we use neat core-drilled anchors that cause zero wall damage, and all drilling dust is caught on industrial drop sheets.' 
            },
        ],
        stats: { customers: '6,400+', rating: '4.8', installs: '2 hrs' },
        warranty: 'Warranty upto 3–7 Years',
    },
    {
        slug: 'invisible-grills',
        name: 'Invisible Balcony Safety Grills',
        tagline: 'High-Rise Certified Safety',
        bestSeller: false,
        icon: 'Grid3x3',
        accent: 'from-blue-500 to-cyan-600',
        badge: '150 kg Cable Load Rated',
        hook: 'Doorstep Installation in 2 Hours • Hyderabad',
        heroTitle: 'Invisible Balcony Safety Grills in Hyderabad — High-Rise Child & Pet Protection',
        heroSub:
            'Engineered 2mm high-tensile Jindal Stainless Steel invisible safety grills for high-rise balconies & windows in Hyderabad. Holds up to 150 kg per cable, complies with gated society aesthetic rules, and preserves 100% of your panoramic skyline view.',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
        specifications: [
            { label: 'Cable Diameter', value: '2mm High-Tensile Marine Steel Cable' },
            { label: 'Tensile Strength', value: '150 kg breaking load per individual strand' },
            { label: 'Cable Spacing', value: '2-inch (Toddler/Pet Safe) or 3-inch (Standard Adult)' },
            { label: 'Protective Membrane', value: 'Transparent anti-UV, anti-scratch nylon coating' },
            { label: 'Track Extrusion', value: 'Heavy-duty anodized structural aluminum tracks' },
            { label: 'Warranty', value: '3–7 Years On-Site Cable & Fastener Warranty' },
        ],
        benefits: [
            { icon: 'ShieldCheck', title: '150 kg load capacity per cable', text: 'Tensioned high-tensile steel cables strong enough to prevent accidental falls while keeping your balcony 100% open.' },
            { icon: 'Grid3x3', title: '2-inch child and pet safety spacing', text: 'Customized 2-inch spacing so toddlers and pets cannot squeeze through, giving parents total peace of mind.' },
            { icon: 'Eye', title: '100% unobstructed panoramic view', text: 'No heavy, prison-like iron bars. Keeps high-rise balconies bright, breezy, and aesthetically appealing.' },
            { icon: 'Droplets', title: 'Anti-rust & zero maintenance', text: 'Protected with transparent weather-proof coating that prevents rust, eliminates painting, and never obstructs sunlight.' },
        ],
        whyChooseUs: [
            { title: 'Engineered for 20th–50th floor wind loads', text: 'Fixed with structural anchors designed to withstand extreme high-altitude wind pressure in Gachibowli & Financial District towers.' },
            { title: 'Gated community & society approved', text: 'Complies with all apartment association safety and facade aesthetic guidelines.' },
            { title: 'Concealed tension locking mechanism', text: 'No loose or sagging wires over time. Every strand is machine-tensioned and locked securely.' },
            { title: '3–7 Years cable warranty', text: 'Official registered warranty with on-site inspection and support.' },
        ],
        testimonials: [
            { name: 'Arjun Naidu', location: 'Financial District (Aparna Sarovar)', rating: 5, text: 'We live on the 24th floor and were terrified of leaving the balcony door open for our kids. These invisible grills look invisible from 10 feet away and feel rock solid.' },
            { name: 'Lakshmi Rao', location: 'Manikonda', rating: 5, text: 'Fitted in under 2 hours. Neat cabling, no mess, no rust after a year. The building committee approved it right away.' },
            { name: 'Karthik V', location: 'Nallagandla (Aparna CyberZon)', rating: 5, text: 'Superb quality steel cables. Pigeon problem solved and balcony safety guaranteed without losing our sunset view.' },
        ],
        faqs: [
            { 
                q: 'What is an invisible grill and how strong are the cables?', 
                a: 'Invisible grills are made of slim 2mm high-tensile Jindal Stainless Steel cables encased in a protective nylon membrane. Each cable can support up to 150 kg of pulling force, making them virtually unbreakable by human force while maintaining an open view.' 
            },
            { 
                q: 'Are invisible grills safe for small children, toddlers, and pets?', 
                a: 'Yes, absolutely! We set cable spacing to 2 inches (50 mm), which prevents small children, toddlers, and pets like cats and dogs from slipping through.' 
            },
            { 
                q: 'Are invisible grills allowed by apartment associations in Hyderabad?', 
                a: 'Yes. Unlike bulky iron grills that alter the building facade, invisible grills are approved by almost all high-rise gated societies across Gachibowli, Financial District, Kondapur, and Hitec City.' 
            },
            { 
                q: 'Can invisible grills be installed on curved or L-shaped balconies?', 
                a: 'Yes, our structural tracks can be custom-contoured for straight, L-shaped, curved, and box balconies as well as bedroom windows.' 
            },
            { 
                q: 'Do invisible grills keep pigeons and birds away?', 
                a: 'Yes, the tensioned cables prevent pigeons and birds from entering or nesting on your balcony railings.' 
            },
            { 
                q: 'How long does the installation take for a standard balcony?', 
                a: 'A standard high-rise balcony is measured, track-mounted, cable-threaded, and tensioned in about 2 to 3 hours.' 
            },
        ],
        stats: { customers: '3,200+', rating: '4.9', installs: '2 hrs' },
        warranty: 'Warranty upto 3–7 Years',
    },
    {
        slug: 'shoe-racks',
        name: 'Wall-Mounted Shoe Racks',
        tagline: 'Space Saving Entryway Organizer',
        bestSeller: false,
        icon: 'Layers',
        accent: 'from-blue-600 to-sky-600',
        badge: 'Custom Sized',
        hook: 'Doorstep Installation in 2 Hours • Hyderabad',
        heroTitle: 'Designer Wall-Mounted Shoe Racks in Hyderabad — Space Saving Storage',
        heroSub:
            'Custom wall-mounted shoe racks and foldable slim shoe cabinets that hold 12–24 pairs and mount cleanly at entryway height. Keeps apartment corridors tidy, saves floor space, and comes with a 3–7 years warranty.',
        image: WALL_IMG,
        specifications: [
            { label: 'Capacity', value: '12 to 24 pairs (3-Tier to 6-Tier setups)' },
            { label: 'Material', value: 'Moisture-resistant engineered MDF & steel brackets' },
            { label: 'Mounting', value: 'Flush wall mount with heavy-duty anchors' },
            { label: 'Tier Load Capacity', value: '15 kg per tier (Rated for boots & heavy footwear)' },
            { label: 'Warranty', value: '3–7 Years Sturdiness & Bracket Warranty' },
        ],
        benefits: [
            { icon: 'Layers', title: 'Holds 12–24 pairs of footwear', text: 'Custom tiered shelves sized to your family footwear collection — from 3-tier to full 6-tier cabinets.' },
            { icon: 'Home', title: 'Frees up entry corridor floor space', text: 'Mounted off the ground so your flat entrance, lobby, and hallway stay neat, uncluttered, and easy to sweep.' },
            { icon: 'Droplets', title: 'Moisture & monsoon resistant finish', text: 'Tough laminated finish that resists damp rainy shoes without warping, swelling, or peeling.' },
            { icon: 'FoldVertical', title: 'Slim foldable design option', text: 'Fold-flat rack mechanism that collapses flush against the wall when empty.' },
        ],
        whyChooseUs: [
            { title: 'Custom built for your wall width', text: 'We measure your entryway space on-site to ensure seamless fitting with zero awkward gaps.' },
            { title: 'Heavy-duty wall anchors', text: 'Firmly anchored to brick or concrete walls, capable of holding heavy work boots and sports shoes.' },
            { title: 'Same-day fitting in Hyderabad', text: 'Book today, rack mounted and levelled on your wall within 2 hours.' },
            { title: '3–7 Years warranty', text: 'Sturdy brackets and reliable hinges backed by on-site service.' },
        ],
        testimonials: [
            { name: 'Divya Krishnan', location: 'Kondapur', rating: 5, text: 'Our entryway went from a scattered pile of shoes to a neat designer wall rack in one afternoon. Fantastic quality!' },
            { name: 'Sai Teja', location: 'Begumpet', rating: 5, text: 'Holds all 18 pairs of our family shoes firmly without any wobble. Very solid finish.' },
        ],
        faqs: [
            { q: 'How many pairs of shoes can the wall rack store?', a: 'Depending on the tier count selected (3, 4, 5, or 6 tiers), our racks hold between 12 and 24 pairs of adult shoes.' },
            { q: 'Is it safe for apartment hallway walls?', a: 'Yes. We use expansion anchors that hold firmly and leave no wall damage if you ever relocate.' },
            { q: 'How long does installation take?', a: 'Measuring, levelling, and drilling takes about 1.5 hours.' },
        ],
        stats: { customers: '2,800+', rating: '4.7', installs: '2 hrs' },
        warranty: 'Warranty upto 3–7 Years',
    },
    {
        slug: 'mosquito-mesh-doors',
        name: 'Mosquito Mesh Doors',
        tagline: 'Magnetic Auto-Close Bug Protection',
        bestSeller: false,
        icon: 'DoorOpen',
        accent: 'from-blue-700 to-indigo-600',
        badge: 'Magnetic Auto-Close',
        hook: 'Doorstep Installation in 2 Hours • Hyderabad',
        heroTitle: 'Magnetic Mosquito Mesh Doors in Hyderabad — Bug-Free Fresh Air',
        heroSub:
            'Heavy-duty magnetic auto-close mosquito net doors custom-cut for balcony sliding doors, French windows, and main entry doors in Hyderabad. Blocks mosquitoes, flies & dust while letting fresh breeze in 24/7.',
        image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
        specifications: [
            { label: 'Mesh Material', value: 'High-density 1.2mm fibreglass micro-mesh' },
            { label: 'Closure Mechanism', value: 'Full-length heavy-duty magnetic strip' },
            { label: 'Border Stitching', value: 'Reinforced tear-proof nylon canvas edging' },
            { label: 'Compatibility', value: 'Custom cut for sliding doors, French windows, UPVC & wooden frames' },
            { label: 'Warranty', value: '3–7 Years Warranty' },
        ],
        benefits: [
            { icon: 'DoorOpen', title: 'Hands-free magnetic auto-close', text: 'Walk through seamlessly and the full-length magnetic strip snaps shut flush behind you every time.' },
            { icon: 'Grid2x2', title: 'High-density insect micro-mesh', text: '1.2mm fine fibreglass mesh stops mosquitoes, flies, bugs, and dust without impeding air flow or light.' },
            { icon: 'Droplets', title: 'Washable & durable fabric', text: 'Easily detachable mesh you can rinse under a tap. Heavy reinforced stitching prevents fraying.' },
            { icon: 'Ruler', title: 'Custom-tailored on-site', text: 'Measured and trimmed to your exact door or window frame dimensions for a 100% gapless seal.' },
        ],
        whyChooseUs: [
            { title: 'Zero gaps for mosquito entry', text: 'Every panel is measured on-site and edged with full-length magnets for a complete seal.' },
            { title: 'Stands up to high-rise balcony winds', text: 'Heavy magnetic force ensures the door stays firmly shut even during windy evenings.' },
            { title: 'Pet-friendly durability', text: 'Reinforced fibreglass mesh withstands pet paws and claws. Optional pet opening flap available.' },
            { title: '3–7 Years warranty', text: 'Reliable on-site service support across Hyderabad.' },
        ],
        testimonials: [
            { name: 'Meena Iyer', location: 'Ameerpet', rating: 5, text: 'No more mosquitoes at night! The magnetic auto-close is so satisfying and we can enjoy the cool breeze all evening.' },
            { name: 'Faisal Ahmed', location: 'Tolichowki', rating: 5, text: 'Custom fit to my large sliding balcony door — zero gaps. Installed in 90 minutes cleanly.' },
        ],
        faqs: [
            { q: 'Will this fit large sliding balcony glass doors?', a: 'Yes! Every mosquito mesh door is measured and custom-fabricated to fit standard, extra-wide, and sliding balcony doors.' },
            { q: 'Do the magnets remain sealed during strong winds?', a: 'Yes, we use full-length reinforced magnetic strips that provide a tight seal even on windy 15th+ floor balconies.' },
            { q: 'Is the mesh washable?', a: 'Yes, the fibreglass mesh is 100% washable with water and mild detergent.' },
        ],
        stats: { customers: '4,100+', rating: '4.8', installs: '2 hrs' },
        warranty: 'Warranty upto 3–7 Years',
    },
];

export const getProduct = (slug) => PRODUCTS.find((p) => p.slug === slug);
