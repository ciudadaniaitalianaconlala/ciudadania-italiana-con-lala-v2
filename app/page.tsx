import Image from "next/image";
import { MobileNav } from "./components/MobileNav";

// TODO: reemplazar con número real (sin + ni espacios, ej: 5491123456789)
const WA_NUMBER = "393395478679";
const WA_MSG = encodeURIComponent("Hola! Me interesa el servicio de actualización A.I.R.E. 🇮🇹");
const WA_URL = `https://wa.me/${WA_NUMBER}?text=${WA_MSG}`;

function WaIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.549 4.116 1.515 5.855L.057 23.882a.5.5 0 0 0 .612.612l6.102-1.444A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.89 0-3.663-.497-5.192-1.367l-.37-.217-3.83.905.924-3.75-.238-.385A9.958 9.958 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
    </svg>
  );
}

function WaButton({
  children = "Consultá por WhatsApp",
  size = "md",
  className = "",
}: {
  children?: React.ReactNode;
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const padding =
    size === "lg" ? "px-8 py-4 text-lg" : size === "sm" ? "px-4 py-2 text-sm" : "px-6 py-3 text-base";
  return (
    <a
      href={WA_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2.5 rounded-full font-bold text-white transition-all duration-200 hover:opacity-90 hover:scale-[1.02] ${padding} ${className}`}
      style={{ background: "#25D366", boxShadow: "0 4px 20px rgba(37,211,102,0.3)" }}
    >
      <WaIcon size={size === "lg" ? 22 : 18} />
      {children}
    </a>
  );
}

const PROBLEMAS = [
  {
    emoji: "👶",
    titulo: "Hijos no registrados",
    texto: "Tuviste hijos después de obtener la ciudadanía y no los inscribiste ante el consulado. Sin esto, no pueden acceder a la ciudadanía italiana.",
  },
  {
    emoji: "💍",
    titulo: "Matrimonio no registrado",
    texto: "Te casaste luego de obtener la ciudadanía y nunca lo informaste en Italia. Es tu obligación mantener tu estado civil actualizado. Este paso es necesario para que tu pareja pueda obtener la ciudadanía por matrimonio.",
  },
  {
    emoji: "🏠",
    titulo: "¿Cambiaste de domicilio?",
    texto: "Si tu dirección en el A.I.R.E. no está actualizada, podrías perderte comunicaciones importantes y tener problemas para votar o renovar tu pasaporte. Tenés un plazo legal de 90 días desde que te mudás para informar tu nuevo domicilio al consulado.",
  },
  {
    emoji: "💻",
    titulo: "FAST IT es un laberinto",
    texto: "Entraste al portal, no supiste cómo completar el registro, te rechazaron el trámite. Pasa todo el tiempo. Sabemos cómo resolverlo.",
  },
];

const INCLUYE = [
  { icon: "🔍", text: "Verificación de tu situación A.I.R.E. actual" },
  { icon: "📋", text: "Checklist personalizado de documentos" },
  { icon: "💬", text: "Asistencia por WhatsApp para cargar en FAST IT" },
  { icon: "🎥", text: "Videollamada de acompañamiento si lo necesitás" },
  { icon: "✅", text: "Seguimiento hasta la confirmación oficial" },
];

const TESTIMONIOS = [
  {
    nombre: "Agos",
    foto: "/cliente 1.jpg",
    texto: "Llevaba años sin actualizar mis datos y no sabía por dónde empezar. Lala me guió paso a paso y en menos de una semana todo quedó resuelto en el A.I.R.E.",
  },
  {
    nombre: "Valentín",
    foto: "/cliente 2.jpg",
    texto: "Me habían rechazado el trámite dos veces en FAST IT. Con la ayuda de Lala pude completarlo sin problemas. Totalmente recomendable.",
  },
  {
    nombre: "Yanina",
    foto: "/cliente 3.jpg",
    texto: "Tenía miedo de hacerlo sola y cometer errores. Lala me acompañó en cada paso y mis datos quedaron actualizados sin ninguna complicación.",
  },
];

const FAQS = [
  {
    q: "¿Qué es el A.I.R.E.?",
    a: "Es el Anagrafe degli Italiani Residenti all'Estero: el registro de los ciudadanos italianos que viven fuera de Italia. Es obligatorio por ley.",
  },
  {
    q: "¿Qué pasa si no me inscribo o no actualizo mis datos?",
    a: "Podés tener problemas para sacar pasaporte, registrar hijos o transcribir matrimonio. Desde 2024, las multas van de €200 a €1.000 por año sin inscripción, hasta 5 años acumulados.",
  },
  {
    q: "Hice la ciudadanía por consulado. ¿Ya estoy inscripto?",
    a: "Puede ser, pero si te mudaste, te casaste, tuviste hijos o cambiaste de país, tenés que actualizar tu situación de todas formas.",
  },
  {
    q: "Tuve hijos. ¿Tengo que inscribirlos?",
    a: "Sí. El nacimiento de hijos debe informarse al consulado para que el acta sea transcripta en Italia y ellos puedan acceder a la ciudadanía.",
  },
  {
    q: "Quiero sacar el pasaporte, pero mi A.I.R.E. está mal. ¿Es un problema?",
    a: "Sí. Muchos consulados requieren que tu situación A.I.R.E. esté actualizada antes de avanzar con el pasaporte.",
  },
  {
    q: "Me casé, divorcié o enviudé. ¿Tengo que informarlo a Italia?",
    a: "Sí. Como ciudadano italiano, tenés que mantener actualizado tu estado civil ante el Estado italiano.",
  },
  {
    q: "FAST IT me rechazó el trámite. ¿Es normal?",
    a: "Sí, pasa seguido. Puede deberse a errores en documentos, domicilio, archivos o tipo de trámite. Sabemos exactamente cómo resolverlo.",
  },
  {
    q: "¿Cuánto tarda el proceso?",
    a: "La asistencia comienza el mismo día. El proceso consular puede demorar semanas dependiendo del consulado, pero te acompañamos hasta el final.",
  },
];

export default function Home() {
  return (
    <>
      {/* ANNOUNCEMENT BAR — navbar.gallery pattern */}
      <div
        className="py-2 px-4 text-center text-sm font-medium"
        style={{ background: "var(--red)", color: "var(--cream)" }}
      >
        ⚠️ Desde 2024: multas de{" "}
        <strong>€200 a €1.000 por año</strong> sin A.I.R.E. actualizado —{" "}
        <a href="#precios" className="underline font-bold hover:opacity-80">
          Regularizá hoy
        </a>
      </div>

      {/* NAV — frosted glass, navbar.gallery pattern */}
      <header
        className="sticky top-0 z-50 border-b"
        style={{
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
          background: "rgba(247,231,216,0.88)",
          borderColor: "var(--tan)",
        }}
      >
        <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-3">
          <a href="/" className="flex items-center gap-3">
            <Image
              src="/logo.jpeg"
              alt="Ciudadanía Italiana con Lala"
              width={44}
              height={44}
              className="rounded-full object-cover"
              priority
            />
            <div className="leading-tight">
              <p
                style={{
                  fontFamily: "var(--font-logo)",
                  fontSize: "1.4rem",
                  color: "var(--red)",
                  lineHeight: 1,
                }}
              >
                Lala
              </p>
              <p className="text-xs font-bold tracking-widest uppercase" style={{ color: "var(--green)" }}>
                Ciudadanía Italiana
              </p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-7 text-sm font-semibold" style={{ color: "var(--dark-red)" }}>
            <a href="#situaciones" className="hover:opacity-70 transition-opacity">Situaciones</a>
            <a href="#servicio" className="hover:opacity-70 transition-opacity">El servicio</a>
            <a href="#precios" className="hover:opacity-70 transition-opacity">Precios</a>
            <a href="#faq" className="hover:opacity-70 transition-opacity">FAQ</a>
          </nav>

          <WaButton size="sm" className="hidden md:inline-flex">
            Escribir por WhatsApp
          </WaButton>
          <MobileNav waUrl={WA_URL} />
        </div>
      </header>

      <main>
        {/* HERO — SupaHero pattern: full-bleed, massive type, eyebrow badge, dual CTA, trust bar */}
        <section
          className="relative overflow-hidden px-6 py-28 md:py-40 text-center"
          style={{
            background:
              "radial-gradient(ellipse 120% 70% at 75% -10%, rgba(194,23,24,0.6) 0%, transparent 55%), radial-gradient(ellipse 80% 60% at 15% 110%, rgba(4,45,21,0.45) 0%, transparent 50%), var(--dark-red)",
            color: "var(--cream)",
          }}
        >
          {/* Eyebrow badge — h1gallery pattern */}
          <div className="flex justify-center mb-7">
            <span
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold"
              style={{
                background: "rgba(247,231,216,0.1)",
                border: "1px solid rgba(247,231,216,0.22)",
                color: "var(--tan)",
              }}
            >
              Para ciudadanos italianos en el exterior
            </span>
          </div>

          {/* H1 — h1gallery: huge display, key word accented */}
          <h1
            className="mx-auto mb-7"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(3.8rem, 11vw, 7.5rem)",
              lineHeight: 0.97,
              maxWidth: "860px",
            }}
          >
            ¿Tu{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #fff 0%, var(--tan) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              A.I.R.E.
            </span>
            <br />
            está desactualizado?
          </h1>

          {/* Subheadline */}
          <p
            className="mx-auto mb-10 text-lg leading-relaxed"
            style={{ color: "var(--tan)", maxWidth: "560px" }}
          >
            Si sos ciudadano/a italiano y vivís fuera de Italia, es tu obligación mantener
            actualizado tu registro consular. Te ayudamos a resolverlo.
          </p>

          {/* Dual CTA — cta.gallery pattern */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <WaButton size="lg">Quiero actualizar mi A.I.R.E.</WaButton>
            <a
              href="#precios"
              className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-base font-semibold transition-colors duration-200 hover:bg-white/10"
              style={{
                border: "1.5px solid rgba(247,231,216,0.35)",
                color: "var(--cream)",
              }}
            >
              Ver precios ↓
            </a>
          </div>

          {/* Trust bar */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-2 text-sm"
            style={{ color: "var(--tan)" }}
          >
            <span style={{ color: "#FBBF24", fontSize: "1.1rem", letterSpacing: "0.05em" }}>★★★★★</span>
            <span>Cientos de ciudadanos atendidos · Respuesta en menos de 24hs · 100% online</span>
          </div>

          {/* Background glow orb */}
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(194,23,24,0.12) 0%, transparent 65%)" }}
          />
        </section>

        {/* VIDEO */}
        <section className="px-6 py-20" style={{ background: "var(--dark-green)" }}>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            {/* Columna izquierda: video */}
            <video
              controls
              playsInline
              preload="none"
              poster="/video-poster.jpg"
              className="rounded-2xl w-full"
              style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.4)", aspectRatio: "1/1" }}
            >
              <source src="/ciudadania%20con%20lala%20landing%20page.mp4" type="video/mp4" />
            </video>

            {/* Columna derecha: texto */}
            <div style={{ color: "var(--cream)" }}>
              <span
                className="inline-block rounded-full px-4 py-1 text-xs font-bold mb-6 tracking-widest uppercase"
                style={{ background: "rgba(247,231,216,0.1)", color: "var(--tan)" }}
              >
                Así trabajamos
              </span>
              <h2
                className="mb-6"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
                  lineHeight: 1.05,
                }}
              >
                Te guiamos paso a paso con tus trámites A.I.R.E.
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: "var(--tan)" }}>
                El sistema consular italiano es confuso, lleno de formularios en otro idioma y pasos
                que no están explicados en ningún lado. Es normal perderse — no es culpa tuya.
              </p>
              <p className="text-base leading-relaxed mb-8" style={{ color: "var(--tan)" }}>
                Con años de experiencia resolviendo estos trámites, sabemos exactamente qué piden,
                cómo presentarlo y cómo evitar los errores más comunes. Lo que a otros les lleva
                meses, nosotros lo resolvemos rápido.
              </p>
              <WaButton size="md">Empezar ahora</WaButton>
            </div>
          </div>
        </section>

        {/* PROBLEMAS — bento grid, ventogridz pattern */}
        <section id="situaciones" className="px-6 py-24" style={{ background: "var(--cream)" }}>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <span
                className="inline-block rounded-full px-4 py-1 text-xs font-bold mb-4 tracking-widest uppercase"
                style={{ background: "var(--tan)", color: "var(--dark-red)" }}
              >
                Situaciones comunes
              </span>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2rem, 5vw, 3.5rem)",
                  color: "var(--dark-red)",
                  lineHeight: 1.1,
                }}
              >
                ¿Te identificás con alguna<br />de estas situaciones?
              </h2>
            </div>

            {/* Bento grid — 6 col, mixed sizes */}
            <div className="grid grid-cols-6 gap-4">
              {/* Hero card — pasaporte, spans all 6 on mobile, 6 on desktop (full highlight card) */}
              <div
                className="col-span-6 md:col-span-4 rounded-2xl p-7 flex flex-col gap-4"
                style={{
                  background: "var(--dark-red)",
                  color: "var(--cream)",
                }}
              >
                <span className="text-4xl">🛂</span>
                <div>
                  <h3 className="font-bold text-2xl mb-2">Pasaporte bloqueado</h3>
                  <p className="text-base leading-relaxed" style={{ color: "var(--tan)" }}>
                    ¿Necesitás tramitar o actualizar tu pasaporte italiano? Primero debés estar
                    correctamente inscripto en el A.I.R.E.
                  </p>
                </div>
                <WaButton size="sm" className="self-start mt-2">
                  Resolver esto →
                </WaButton>
              </div>

              {/* Side card — stat/fact */}
              <div
                className="col-span-6 md:col-span-2 rounded-2xl p-7 flex flex-col justify-between"
                style={{ background: "var(--green)", color: "var(--cream)" }}
              >
                <p
                  className="font-bold tracking-wide text-sm uppercase"
                  style={{ color: "var(--tan)" }}
                >
                  Multa máxima
                </p>
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "3.5rem",
                      lineHeight: 1,
                    }}
                  >
                    €5.000
                  </p>
                  <p className="text-sm mt-2" style={{ color: "var(--tan)" }}>
                    por 5 años sin inscripción en el A.I.R.E.
                  </p>
                </div>
              </div>

              {/* 4 problem cards — half width on desktop */}
              {PROBLEMAS.map(({ emoji, titulo, texto }) => (
                <div
                  key={titulo}
                  className="col-span-6 md:col-span-3 rounded-2xl p-6 flex flex-col gap-3"
                  style={{
                    background: "white",
                    border: "1.5px solid var(--tan)",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                  }}
                >
                  <span className="text-3xl">{emoji}</span>
                  <h3 className="font-bold text-lg" style={{ color: "var(--dark-red)" }}>
                    {titulo}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#555" }}>
                    {texto}
                  </p>
                </div>
              ))}

              {/* CTA card — full width */}
              <div
                className="col-span-6 rounded-2xl p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5"
                style={{ background: "var(--dark-green)", color: "var(--cream)" }}
              >
                <div>
                  <p className="font-bold text-lg mb-1">¿No sabés si tu situación está ok?</p>
                  <p className="text-sm" style={{ color: "var(--tan)" }}>
                    Escribinos y revisamos tu caso sin costo ni compromiso.
                  </p>
                </div>
                <WaButton size="md" className="flex-shrink-0">
                  Consulta gratis →
                </WaButton>
              </div>
            </div>
          </div>
        </section>

        {/* QUÉ INCLUYE — 2-col split layout */}
        <section
          id="servicio"
          className="px-6 py-24"
          style={{ background: "var(--green)", color: "var(--cream)" }}
        >
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span
                className="inline-block rounded-full px-4 py-1 text-xs font-bold mb-6 tracking-widest uppercase"
                style={{ background: "rgba(247,231,216,0.12)", color: "var(--tan)" }}
              >
                El servicio incluye
              </span>
              <h2
                className="mb-5"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
                  lineHeight: 1.1,
                }}
              >
                Acompañamiento completo, de principio a fin
              </h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: "var(--tan)" }}>
                No te dejamos solo con el portal. Una persona real te guía en cada paso hasta que
                tu situación consular quede confirmada.
              </p>
              <WaButton size="md">Empezar ahora</WaButton>
            </div>

            <ul className="space-y-3">
              {INCLUYE.map(({ icon, text }) => (
                <li
                  key={text}
                  className="flex items-center gap-4 rounded-xl px-5 py-4"
                  style={{ background: "rgba(247,231,216,0.07)" }}
                >
                  <span className="text-2xl flex-shrink-0">{icon}</span>
                  <span className="text-base">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* PRECIOS */}
        <section id="precios" className="px-6 py-24" style={{ background: "var(--cream)" }}>
          <div className="max-w-4xl mx-auto">

            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Plan Base */}
              <div
                className="rounded-2xl p-10 flex flex-col"
                style={{ border: "2px solid var(--tan)", background: "white" }}
              >
                <div className="mb-8">
                  <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "var(--green)" }}>
                    Servicio de acompañamiento
                  </p>
                  <div className="flex items-end gap-2">
                    <span
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "4.5rem",
                        color: "var(--dark-red)",
                        lineHeight: 1,
                      }}
                    >
                      €120
                    </span>
                    <span className="text-sm pb-2" style={{ color: "#888" }}>
                      pago único
                    </span>
                  </div>
                  <p className="text-sm mt-3 leading-relaxed" style={{ color: "#666" }}>
                    Todo lo que necesitás para actualizar tu situación A.I.R.E. sin complicaciones.
                  </p>
                </div>

                <ul className="space-y-4 text-sm flex-1 mb-10">
                  {[
                    "Verificación de tu situación actual",
                    "Checklist para la preparación de los documentos necesarios",
                    "Asistencia por WhatsApp para cargar en FAST IT",
                    "Videollamada de acompañamiento",
                    "Seguimiento hasta confirmación oficial",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3" style={{ color: "#444" }}>
                      <span
                        className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold"
                        style={{ border: "1.5px solid var(--green)", color: "var(--green)" }}
                      >
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <WaButton size="lg" className="w-full justify-center">
                  Empezar ahora
                </WaButton>
              </div>

              {/* Columna derecha: texto */}
              <div>
                <span
                  className="inline-block rounded-full px-4 py-1 text-xs font-bold mb-6 tracking-widest uppercase"
                  style={{ background: "var(--tan)", color: "var(--dark-red)" }}
                >
                  Resultados reales
                </span>
                <h2
                  className="mb-6"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
                    color: "var(--dark-red)",
                    lineHeight: 1.05,
                  }}
                >
                  En menos de una semana tu situación consular queda resuelta
                </h2>
                <p className="text-base leading-relaxed" style={{ color: "#555" }}>
                  No hace falta esperar meses ni lidiar con el portal solo. Con nuestra guía sabés
                  exactamente qué documentos presentar, cómo cargarlos en FAST IT y qué esperar de
                  tu consulado. La mayoría de nuestros clientes completan el trámite en menos de
                  una semana desde el primer contacto.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIOS */}
        <section className="px-6 py-24" style={{ background: "var(--dark-red)", color: "var(--cream)" }}>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <span
                className="inline-block rounded-full px-4 py-1 text-xs font-bold mb-4 tracking-widest uppercase"
                style={{ background: "rgba(247,231,216,0.12)", color: "var(--tan)" }}
              >
                Clientes satisfechos
              </span>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2rem, 5vw, 3.5rem)",
                  lineHeight: 1.1,
                }}
              >
                Ellos ya actualizaron<br />su A.I.R.E. con nosotros
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {TESTIMONIOS.map(({ nombre, foto, texto }) => (
                <div
                  key={nombre}
                  className="rounded-2xl p-8 flex flex-col items-center text-center gap-5"
                  style={{ background: "rgba(247,231,216,0.07)", border: "1px solid rgba(247,231,216,0.12)" }}
                >
                  <div
                    className="rounded-full overflow-hidden flex-shrink-0"
                    style={{ width: 120, height: 120, border: "3px solid rgba(247,231,216,0.25)" }}
                  >
                    <Image
                      src={foto}
                      alt={nombre}
                      width={120}
                      height={120}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <p className="text-base leading-relaxed flex-1" style={{ color: "var(--tan)" }}>
                    &ldquo;{texto}&rdquo;
                  </p>
                  <div>
                    <p className="font-bold text-sm" style={{ color: "var(--cream)" }}>{nombre}</p>
                    <p className="text-xs mt-1" style={{ color: "var(--tan)", opacity: 0.75 }}>Actualización de datos A.I.R.E.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="px-6 py-24" style={{ background: "var(--tan)" }}>
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-14">
              <span
                className="inline-block rounded-full px-4 py-1 text-xs font-bold mb-4 tracking-widest uppercase"
                style={{ background: "white", color: "var(--dark-red)" }}
              >
                Preguntas frecuentes
              </span>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2rem, 5vw, 3.5rem)",
                  color: "var(--dark-red)",
                }}
              >
                Resolvemos tus dudas
              </h2>
            </div>

            <div className="space-y-2">
              {FAQS.map(({ q, a }) => (
                <details
                  key={q}
                  className="rounded-xl overflow-hidden"
                  style={{ background: "white", border: "1px solid rgba(0,0,0,0.07)" }}
                >
                  <summary
                    className="flex items-center justify-between gap-4 px-5 py-4 font-semibold text-base"
                    style={{ color: "var(--dark-red)" }}
                  >
                    <span>{q}</span>
                    <span
                      className="chevron flex-shrink-0 font-light"
                      style={{ color: "var(--red)", fontSize: "1.5rem", lineHeight: 1 }}
                    >
                      +
                    </span>
                  </summary>
                  <div className="px-5 pb-5 pt-1 text-sm leading-relaxed" style={{ color: "#444" }}>
                    {a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL — cta.gallery: centered, stars, single button, trust microcopy */}
        <section
          className="relative overflow-hidden px-6 py-32 text-center"
          style={{
            background:
              "radial-gradient(ellipse 100% 80% at 50% 120%, rgba(194,23,24,0.18) 0%, transparent 55%), var(--dark-green)",
            color: "var(--cream)",
          }}
        >
          <div className="max-w-xl mx-auto">
            <div
              className="inline-flex items-center gap-1 mb-5 text-sm font-medium"
              style={{ color: "var(--tan)" }}
            >
              <span style={{ color: "#FBBF24", letterSpacing: "0.08em" }}>★★★★★</span>
              <span className="ml-2">Cientos de ciudadanos atendidos</span>
            </div>

            <h2
              className="mb-6"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.8rem, 8vw, 6rem)",
                lineHeight: 0.97,
              }}
            >
              Regularizá tu ciudadanía hoy mismo
            </h2>

            <p className="mb-10 text-lg leading-relaxed" style={{ color: "var(--tan)" }}>
              Una consulta rápida puede ahorrarte meses de demoras, trámites mal hechos y multas
              evitables.
            </p>

            <WaButton size="lg" className="mb-5">
              Escribir por WhatsApp ahora
            </WaButton>

            <p className="text-sm" style={{ color: "var(--tan)", opacity: 0.8 }}>
              Respuesta en menos de 24 horas · Servicio 100% online · Desde cualquier país
            </p>
          </div>
        </section>
      </main>

      {/* FOOTER — footers.design: 3-col, divider, copyright */}
      <footer style={{ background: "var(--dark-red)", color: "var(--tan)" }}>
        <div className="max-w-5xl mx-auto px-6 py-14 grid gap-10 sm:grid-cols-3">
          {/* Col 1: Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.jpeg"
                alt="Lala"
                width={42}
                height={42}
                className="rounded-full object-cover"
              />
              <span
                style={{
                  fontFamily: "var(--font-logo)",
                  fontSize: "1.6rem",
                  color: "var(--cream)",
                  lineHeight: 1,
                }}
              >
                Lala
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              Asistencia online para ciudadanos italianos residentes en el exterior.
            </p>
          </div>

          {/* Col 2: Links */}
          <div>
            <p className="text-xs font-bold tracking-widest uppercase mb-5" style={{ color: "var(--cream)" }}>
              Información
            </p>
            <ul className="space-y-3 text-sm">
              {[
                ["Situaciones comunes", "#situaciones"],
                ["El servicio", "#servicio"],
                ["Precios", "#precios"],
                ["Preguntas frecuentes", "#faq"],
              ].map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="hover:opacity-80 transition-opacity">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div>
            <p className="text-xs font-bold tracking-widest uppercase mb-5" style={{ color: "var(--cream)" }}>
              Contacto
            </p>
            <p className="text-sm mb-5 leading-relaxed">
              ¿Tenés dudas? Escribinos directamente por WhatsApp.
            </p>
            <WaButton size="sm">Contactar</WaButton>
          </div>
        </div>

        <div
          className="px-6 py-5 text-center text-xs"
          style={{
            borderTop: "1px solid rgba(217,188,167,0.18)",
            color: "rgba(217,188,167,0.55)",
          }}
        >
          © {new Date().getFullYear()} Ciudadanía Italiana con Lala · Todos los derechos reservados ·
          Servicio de asistencia online, no somos un estudio jurídico
        </div>
      </footer>
    </>
  );
}
