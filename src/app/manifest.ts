import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Walid Elsergany - Frontend Developer Portfolio',
    short_name: 'Walid Portfolio',
    description: 'Professional Frontend Developer specializing in React, Next.js, TypeScript, and modern web technologies.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0a0a',
    theme_color: '#3b82f6',
    orientation: 'portrait-primary',
    scope: '/',
    lang: 'en',
    categories: ['portfolio', 'developer', 'technology'],
    icons: [
      {
        src: '/walid1.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any maskable'
      },
      {
        src: '/walid1.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable'
      }
    ],
    screenshots: [
      {
        src: '/walid1.png',
        sizes: '1280x720',
        type: 'image/png',
        form_factor: 'wide',
        label: 'Walid Elsergany Portfolio Homepage'
      }
    ]
  }
}
