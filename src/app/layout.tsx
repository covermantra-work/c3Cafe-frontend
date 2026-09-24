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
  metadataBase: new URL("https://chaichowkcafe.com"),
  title: "Chai Chowk Cafe | C3 Chai, Coffee & Conversations",
  description:
    "Welcome to Chai Chowk Cafe (C3). Enjoy royal kulhad chai, hand-pulled espresso coffee, fresh grilled snacks, pizzas, and desserts in a warm cozy ambiance.",
  keywords: [
    "Chai Chowk Cafe",
    "C3 Cafe",
    "Kulhad Chai",
    "Coffee Shop",
    "Cafe Franchise India",
  ],
  icons: {
    icon: "/logo.jpg",
    apple: "/logo.jpg",
  },
  openGraph: {
    title: "Chai Chowk Cafe | C3 Chai, Coffee & Conversations",
    description:
      "Handcrafted brews and delicious cafe bites in a cozy ambiance. Visit us today!",
    type: "website",
    locale: "en_IN",
    images: ["/logo.jpg"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    name: "Chai Chowk Cafe",
    alternateName: "C3 Cafe",
    image: "/logo.jpg",
    description: "Fatehabad ka Favourite Chai Spot 🔥 Best Taste • Best Vibe ✨ Kulhad chai, coffee, and fresh bites at MM PG College.",
    telephone: "+919253779999",
    priceRange: "₹₹",
    sameAs: [
      "https://www.instagram.com/c3chaichowkcafe/",
      "https://www.facebook.com/profile.php?id=61579396418460",
    ],
    servesCuisine: ["Cafe", "Beverages", "Fast Food", "Italian"],
    address: {
      "@type": "PostalAddress",
      streetAddress: "MM PG College, Ratia Road, near Punjab National Bank, Model Town",
      addressLocality: "Fatehabad",
      addressRegion: "Haryana",
      postalCode: "125050",
      addressCountry: "IN",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "09:00",
        closes: "22:00",
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-screen bg-[#faf8f5] text-[#1c1917] selection:bg-[#e05326] selection:text-white flex flex-col"
      >
        {children}
      </body>
    </html>
  );
}
