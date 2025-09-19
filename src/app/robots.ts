import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/private/', '/admin/', '/api/'],
        crawlDelay: 1,
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/private/', '/admin/', '/api/'],
        crawlDelay: 1,
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/private/', '/admin/', '/api/'],
        crawlDelay: 1,
      },
      {
        userAgent: 'Slurp',
        allow: '/',
        disallow: ['/private/', '/admin/', '/api/'],
        crawlDelay: 2,
      },
    ],
    sitemap: 'https://portfolio-two-alpha-pxq3683gpx.vercel.app/sitemap.xml',
    host: 'https://portfolio-two-alpha-pxq3683gpx.vercel.app',
  }
}
