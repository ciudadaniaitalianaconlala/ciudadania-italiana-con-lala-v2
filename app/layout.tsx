import type { Metadata } from "next";
import { Hurricane, Nunito } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const hurricane = Hurricane({
  variable: "--font-hurricane",
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

export const metadata: Metadata = {
  title: "Ciudadanía Italiana con Lala — Actualizá tu A.I.R.E.",
  description:
    "Asistencia online para ciudadanos italianos residentes en el exterior. Actualizá tu situación A.I.R.E. sin complicaciones, desde donde estés.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${hurricane.variable} ${nunito.variable} h-full`}
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
