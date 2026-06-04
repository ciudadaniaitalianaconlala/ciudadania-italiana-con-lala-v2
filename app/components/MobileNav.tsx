"use client";

import { useState } from "react";

const NAV_LINKS = [
  ["Situaciones", "#situaciones"],
  ["El servicio", "#servicio"],
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
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-4 mb-3 inline-flex items-center justify-center gap-2.5 rounded-full px-6 py-3.5 font-bold text-white text-base"
              style={{ background: "#25D366", boxShadow: "0 4px 20px rgba(37,211,102,0.3)" }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.549 4.116 1.515 5.855L.057 23.882a.5.5 0 0 0 .612.612l6.102-1.444A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.89 0-3.663-.497-5.192-1.367l-.37-.217-3.83.905.924-3.75-.238-.385A9.958 9.958 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
              </svg>
              Escribir por WhatsApp
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
