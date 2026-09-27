export default function robots() {
    return {
        rules: [
            {
                // Full access for Google — no crawl delay
                userAgent: 'Googlebot',
                allow: '/',
                disallow: ['/admin/', '/api/'],
            },
            {
                // Full access for Bing / AI crawlers
                userAgent: ['Bingbot', 'GPTBot', 'anthropic-ai', 'PerplexityBot', 'Applebot', 'DuckDuckBot'],
                allow: '/',
                disallow: ['/admin/', '/api/'],
            },
            {
                // All other bots — throttle to avoid server load
                userAgent: '*',
                allow: '/',
                disallow: ['/admin/', '/api/'],
                crawlDelay: 5,
            },
        ],
        sitemap: 'https://taptoeasy.com/sitemap.xml',
        host: 'https://taptoeasy.com',
    };
}

