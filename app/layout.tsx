import type { Metadata } from "next";
import { Hurricane, Nunito } from "next/font/google";
import "./globals.css";

const hurricane = Hurricane({
  variable: "--font-hurricane",
  subsets: ["latin"],
  weight: "400",
});

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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
