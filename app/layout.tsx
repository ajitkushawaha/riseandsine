import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";

const poppins = Poppins({
  variable: "--font-headline",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Primary Structured Data for local business
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "DrivingSchool",
  "name": "Rise n Shine Driving School",
  "alternateName": "Rise n Shine Bloemfontein",
  "image": "https://www.risenshinedriving.com/logo.png",
  "@id": "https://www.risenshinedriving.com",
  "url": "https://www.risenshinedriving.com",
  "telephone": "+12503172175",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "688 Deans Dr",
    "addressLocality": "Kelowna",
    "addressRegion": "BC",
    "postalCode": "V1P 1A1",
    "addressCountry": "CA"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 49.888204,
    "longitude": -119.496011
  },
  "areaServed": [
    { "@type": "City", "name": "Kelowna" },
    { "@type": "City", "name": "West Kelowna" },
    { "@type": "City", "name": "Peachland" },
    { "@type": "City", "name": "Lake Country" }
  ],
  "description": "Premium driving school in Kelowna offering ICBC road test preparation, defensive driving, and professional 1:1 coaching.",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    "opens": "08:00",
    "closes": "20:00"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "720"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Driving Lessons Packages",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Starter Program" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Road Test Prep" } }
    ]
  }
};

export const metadata: Metadata = {
  title: "Rise n Shine Driving School | Best Driving Lessons in Kelowna, BC",
  description: "Join Kelowna's premier driving school for expert ICBC road test preparation. Professional, calm driving lessons in Kelowna, West Kelowna, and Peachland. Top success rates.",
  keywords: [
    "driving school kelowna",
    "ICBC road test preparation kelowna",
    "driving lessons west kelowna",
    "female driving instructor kelowna",
    "driving classes peachland bc",
    "best driving school in kelowna",
    "automatic driving lessons kelowna",
    "driving lessons for beginners",
    "safe driving",
    "driving instructor training",
    "student driver",
    "learner driver lessons",
    "best driving lessons near me",
    "professional driver training",
    "driving coaching",
    "student driving classes",
    "shine driving institute",
    "license driving",
    "driving school",
    "driving instructor courses",
    "car driving learning",
    "driving learner",
    "best car driving lessons",
    "driving skills",
    "car driving lessons for beginners"
  ],
  applicationName: "Rise n Shine Driving School",
  authors: [{ name: "Satpal Hans", url: "https://www.risenshinedriving.com" }],
  publisher: "Rise n Shine Driving School",
  metadataBase: new URL("https://www.risenshinedriving.com"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-icon.png",
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "Rise n Shine Driving School Kelowna | Professional Driving Lessons",
    description: "Expert ICBC road test preparation and professional 1:1 driving lessons in Kelowna area. Start your journey with confidence using our dual-control cars.",
    url: "https://www.risenshinedriving.com",
    siteName: "Rise n Shine Driving School",
    images: [{
      url: "/icon.png",
      width: 512,
      height: 512,
      alt: "Rise n Shine Driving School Kelowna Logo",
    }],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rise n Shine Driving School | Kelowna Road Test Prep",
    description: "Expert ICBC road test preparation and professional driving lessons in the Kelowna area, BC.",
    images: ["/icon.png"],
  },
  verification: {
    google: "IxfTSJL6G0SDiBHcep30iAG1zauozr1H0aSR9yI216M",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${poppins.variable} ${inter.variable} font-sans antialiased`}>
        {/* Analytics Placeholder - Update with your actual GA ID */}
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />
        {children}
      </body>
    </html>
  );
}
