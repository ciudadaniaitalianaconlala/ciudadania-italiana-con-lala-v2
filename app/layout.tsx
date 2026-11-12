import type { Metadata } from "next";
import { Hurricane, Nunito, Playfair_Display } from "next/font/google";
import Script from "next/script";
import { SITE_NAME, SITE_URL } from "./site";
import "./globals.css";

const hurricane = Hurricane({
  variable: "--font-hurricane",
  subsets: ["latin"],
  weight: "400",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: "400",
});

// Sitio de pruebas: sin Pixel y sin indexar. En el dominio real no hace nada.
const STAGING_HOST = "darkorchid-goose-716069.hostingersite.com";

const nunito = Nunito({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const TITLE = "Ciudadanía Italiana con Lala — Actualizá tu A.I.R.E.";
const DESCRIPTION =
  "Asistencia online para ciudadanos italianos residentes en el exterior. Actualizá tu situación A.I.R.E. sin complicaciones, desde donde estés.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  icons: { icon: "/img/logo.webp", apple: "/img/logo.webp" },
  openGraph: {
    type: "website",
    locale: "es_AR",
    siteName: SITE_NAME,
    title: TITLE,
    description: DESCRIPTION,
    url: "/",
    images: [{ url: "/img/og-image.jpg", width: 1200, height: 630, alt: "Lala y José en Taormina, Sicilia" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/img/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${hurricane.variable} ${playfair.variable} ${nunito.variable} h-full`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `if(location.hostname==="${STAGING_HOST}"){var m=document.createElement("meta");m.name="robots";m.content="noindex, nofollow";document.head.appendChild(m);}`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element -- pixel de Meta sin JS */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1811647063130143&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </body>
      <Script id="meta-pixel" strategy="afterInteractive">{`
        if (location.hostname !== "${STAGING_HOST}") {
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '1811647063130143');
        fbq('track', 'PageView');
        }
      `}</Script>
    </html>
  );
}
