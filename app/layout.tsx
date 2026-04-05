import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-headline",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "DrivingSchool",
  "name": "Rise n Shine Driving School",
  "image": "https://risenshinedriving.com/logo.png",
  "@id": "https://risenshinedriving.com",
  "url": "https://risenshinedriving.com",
  "telephone": "+12503172175",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Serving all of Kelowna",
    "addressLocality": "Kelowna",
    "addressRegion": "BC",
    "addressCountry": "CA"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 49.888,
    "longitude": -119.496
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
    "ratingValue": "5",
    "reviewCount": "700"
  }
};

export const metadata: Metadata = {
  title: "Rise n Shine Driving School | Best Driving Lessons in Kelowna, BC",
  description: "Join Rise n Shine Driving School for expert ICBC road test preparation. Professional driving lessons in Kelowna, West Kelowna, Peachland, and Lake Country. Licensed instructors, dual-control cars, and flexible scheduling.",
  keywords: ["driving school kelowna", "ICBC road test prep kelowna", "driving lessons west kelowna", "female driving instructor bc", "automatic car training kelowna"],
  metadataBase: new URL("https://risenshinedriving.com"),
  alternates: {
    canonical: "/",
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
    title: "Rise n Shine Driving School | Kelowna's Top Driving Lessons",
    description: "Learn driving with confidence. ICBC certified school with dual-control cars and expert instructors in the Kelowna area.",
    url: "https://risenshinedriving.com",
    siteName: "Rise n Shine Driving School",
    images: [{
      url: "/icon.png",
      width: 512,
      height: 512,
      alt: "Rise n Shine Driving School Icon",
    }],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rise n Shine Driving School | Road Test Success in Kelowna",
    description: "Expert ICBC road test preparation and professional 1:1 driving lessons in Kelowna, BC.",
    images: ["/icon.png"],
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
        {children}
      </body>
    </html>
  );
}
