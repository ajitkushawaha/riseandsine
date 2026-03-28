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

export const metadata: Metadata = {
  title: "Rise & Shine Driving School | Best Car Driving Classes in Ahmedabad",
  description: "Join Rise & Shine Driving School for professional car driving classes. Certified instructors, flexible timings, doorstep pickup, and affordable packages for beginners in Ahmedabad.",
  keywords: ["driving school ahmedabad", "car driving classes", "beginner driving course", "female driving instructor", "automatic car training"],
  openGraph: {
    title: "Rise & Shine Driving School | Professional Driving Classes",
    description: "Learn driving with confidence. ISO certified school with doorstep pickup and expert instructors.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
