import type { Metadata } from "next";
import { Toaster } from "sonner";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Sloane Signature | Organisation de Mariages & Evenements de Luxe",
    template: "%s | Sloane Signature",
  },
  description:
    "Sloane Signature, agence d'organisation de mariages et d'evenements de luxe en France. Nous concevons des celebrations sur mesure, elegantes et inoubliables.",
  keywords: [
    "organisation mariage luxe",
    "wedding planner France",
    "evenements haut de gamme",
    "mariage sur mesure",
    "Sloane Signature",
    "organisateur evenements",
    "decoration mariage",
    "mariage destination",
  ],
  authors: [{ name: "Sloane Signature" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Sloane Signature",
    title: "Sloane Signature | Organisation de Mariages & Evenements de Luxe",
    description:
      "Agence d'organisation de mariages et d'evenements de luxe en France. Celebrations sur mesure, elegantes et inoubliables.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sloane Signature | Organisation de Mariages & Evenements de Luxe",
    description:
      "Agence d'organisation de mariages et d'evenements de luxe en France.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Sloane Signature",
    description:
      "Agence d'organisation de mariages et d'evenements de luxe en France. Celebrations sur mesure, elegantes et inoubliables.",
    url: "https://sloanesignature.com",
    email: "hello@sloanesignature.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Paris",
      addressCountry: "FR",
    },
    priceRange: "$$$$",
    serviceType: [
      "Organisation de mariages",
      "Evenements de luxe",
      "Mariages destination",
      "Celebrations privees",
    ],
    areaServed: {
      "@type": "Country",
      name: "France",
    },
  };

  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Great+Vibes&family=Montserrat:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
