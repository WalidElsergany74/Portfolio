import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Walid Elsergany - Frontend Developer | React, Next.js, TypeScript Expert",
    template: "%s | Walid Elsergany - Frontend Developer"
  },
  description: "Professional Frontend Developer specializing in React, Next.js, TypeScript, and modern web technologies. Creating beautiful, responsive, and user-friendly web applications. Available for hire.",
  keywords: [
    "Frontend Developer", "React Developer", "Next.js Developer", "TypeScript Developer", 
    "JavaScript Developer", "Web Development", "Portfolio", "UI/UX Developer", 
    "Responsive Design", "Modern Web Technologies", "React Expert", "Next.js Expert",
    "TypeScript Expert", "Frontend Engineer", "Web Developer Egypt", "React Portfolio",
    "Next.js Portfolio", "Hire Frontend Developer", "React Freelancer", "Web Development Services"
  ],
  authors: [{ name: "Walid Elsergany", url: "https://walid-portfolio.vercel.app" }],
  creator: "Walid Elsergany",
  publisher: "Walid Elsergany",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://walid-portfolio.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Walid Elsergany - Frontend Developer Portfolio",
    description: "Professional Frontend Developer specializing in React, Next.js, TypeScript, and modern web technologies. Creating beautiful, responsive, and user-friendly web applications.",
    url: "https://walid-portfolio.vercel.app",
    siteName: "Walid Elsergany Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/walid1.png",
        width: 1200,
        height: 630,
        alt: "Walid Elsergany - Frontend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Walid Elsergany - Frontend Developer Portfolio",
    description: "Professional Frontend Developer specializing in React, Next.js, TypeScript, and modern web technologies.",
    images: ["/walid1.png"],
    creator: "@walidelsergany",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Replace with actual verification code
  },
  category: "technology",
  classification: "Portfolio Website",
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "Walid Portfolio",
    "application-name": "Walid Portfolio",
    "msapplication-TileColor": "#3b82f6",
    "theme-color": "#3b82f6",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Walid Elsergany",
    "jobTitle": "Frontend Developer",
    "description": "Professional Frontend Developer specializing in React, Next.js, TypeScript, and modern web technologies.",
    "url": "https://walid-portfolio.vercel.app",
    "image": "https://walid-portfolio.vercel.app/walid1.png",
    "sameAs": [
      "https://github.com/WalidElsergany74",
      "https://www.linkedin.com/in/walid-elsergany-3937431b7/",
      "https://wa.me/201008421723"
    ],
    "email": "walidemad998@gmail.com",
    "telephone": "+201008421723",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "EG"
    },
    "knowsAbout": [
      "React",
      "Next.js", 
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "TailwindCSS",
      "Web Development",
      "Frontend Development",
      "UI/UX Design",
      "Responsive Design"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Frontend Developer",
      "description": "Creating beautiful, responsive, and user-friendly web applications using modern technologies",
      "skills": ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "TailwindCSS"]
    },
    "alumniOf": {
      "@type": "Organization",
      "name": "Self-taught Developer"
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="color-scheme" content="dark" />
        <meta name="supported-color-schemes" content="dark" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
