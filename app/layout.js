import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const satoshiVariable = localFont({
  src: "../public/Fonts/Variable/Satoshi-Variable.ttf",
  variable: "--font-satoshi-variable",
});

export const viewport = {
  themeColor: "#fbbf24",
};

export const metadata = {
  title: "JCNS Solar Solutions Nigeria | Solar Inverters, Panels & Renewable Energy Experts",
  description:
    "JCNS Solar Solutions provides top-quality solar inverters, panels, and complete renewable energy systems for homes and businesses in Nigeria. Go solar, save money, and enjoy reliable power.",
  keywords:
    "solar, solar panels, solar inverters, solar batteries, renewable energy, solar installation, solar company Nigeria, off-grid, hybrid inverter, solar generator, solar power, JCNS, Lagos, Abuja, Nigeria, energy solutions, solar products, solar kits, solar home system, solar for business, solar for home, solar experts Nigeria, solar EPC, solar maintenance, solar backup, inverter installation, solar price Nigeria, buy solar Nigeria, best solar company Nigeria",
  openGraph: {
    title: "JCNS Solar Solutions Nigeria | Solar Inverters, Panels & Renewable Energy Experts",
    description:
      "JCNS Solar Solutions provides top-quality solar inverters, panels, and complete renewable energy systems for homes and businesses in Nigeria. Go solar, save money, and enjoy reliable power.",
    url: "https://jcnssolar.com.ng/",
    type: "website",
    siteName: "JCNS Solar Solutions Nigeria",
    locale: "en_NG",
    images: [
      {
        url: "https://jcnssolar.com.ng/images/social-media.png",
        width: 1200,
        height: 630,
        alt: "JCNS Solar Solutions - Solar Products in Nigeria",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JCNS Solar Solutions Nigeria | Solar Inverters, Panels & Renewable Energy Experts",
    description:
      "JCNS Solar Solutions provides top-quality solar inverters, panels, and complete renewable energy systems for homes and businesses in Nigeria. Go solar, save money, and enjoy reliable power.",
    site: "@JCNS_NEWENERGY",
    creator: "@JCNS_NEWENERGY",
    images: ["https://jcnssolar.com.ng/images/social-media.png"],
  },
  alternates: {
    canonical: "https://jcnssolar.com.ng/",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "JCNS Solar Solutions Nigeria",
              url: "https://jcnssolar.com.ng/",
              logo: "https://jcnssolar.com.ng/images/social-media.png",
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+23409162876651",
                  contactType: "Admin",
                  areaServed: "NG",
                  availableLanguage: ["English"],
                },
              ],
              sameAs: [
                // TODO: Add your social media URLs
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "JCNS Solar Solutions Nigeria",
              url: "https://jcnssolar.com.ng/",
            }),
          }}
        />
      </head>
      <body className={`${satoshiVariable.variable} antialiased overflow-x-hidden max-w-full`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
