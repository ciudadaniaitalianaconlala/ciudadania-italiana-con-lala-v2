"use client";

import { useState } from "react";
import { WaButton } from "./WaButton";

const NAV_LINKS = [
  ["Situaciones", "#situaciones"],
  ["El servicio", "#servicio"],
  ["Nosotros", "#nosotros"],
  ["Precios", "#precios"],
  ["FAQ", "#faq"],
] as const;

export function MobileNav({ waUrl }: { waUrl: string }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="md:hidden p-2 rounded-lg"
        style={{ color: "var(--dark-red)" }}
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={open}
      >
        {open ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {open && (
        <div
          className="md:hidden absolute top-full left-0 right-0 border-b"
          style={{
            backdropFilter: "blur(18px)",
            WebkitBackdropFilter: "blur(18px)",
            background: "rgba(247,231,216,0.97)",
            borderColor: "var(--tan)",
          }}
        >
          <nav className="max-w-5xl mx-auto px-6 py-3 flex flex-col">
            {NAV_LINKS.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="py-4 font-semibold text-base border-b hover:opacity-70 transition-opacity"
                style={{ color: "var(--dark-red)", borderColor: "var(--tan)" }}
              >
                {label}
              </a>
            ))}
            <div className="mt-4 mb-3" onClick={() => setOpen(false)}>
              <WaButton href={waUrl} size="md" className="w-full justify-center">
                Escribir por WhatsApp
              </WaButton>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
