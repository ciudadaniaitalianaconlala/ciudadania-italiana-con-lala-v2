import Image from "next/image";
import { MobileNav } from "./components/MobileNav";
import { WaButton } from "./components/WaButton";

const WA_NUMBER = "393395478679";
const WA_MSG = encodeURIComponent("Hola! Me interesa el servicio de actualización A.I.R.E. 🇮🇹");
const WA_URL = `https://wa.me/${WA_NUMBER}?text=${WA_MSG}`;

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
    texto: "Hace años que necesitaba actualizar mis datos y no sabía cómo hacer. Lala me guió en todo el proceso y lo pude completar. ¡Los recomiendo!",
  },
  {
    nombre: "Valentín",
    foto: "/cliente 2.jpg",
    texto: "Ya me habían rechazado el trámite varias veces y con la ayuda de Lala por fin lo pudimos hacer.",
  },
  {
    nombre: "Yanina",
    foto: "/cliente 3.jpg",
    texto: "Hice mi ciudadanía en Italia, me mudé y tenía que cambiar mi residencia pero no sabía cómo. Los chicos me ayudaron a hacerlo y quedó todo perfecto. ¡Super recomendable!",
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

          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://www.instagram.com/ciudadaniaitaliana_conlala/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="inline-flex items-center justify-center w-9 h-9 rounded-full text-white transition-all duration-200 hover:opacity-90 hover:scale-[1.05]"
              style={{ background: "#E1306C", boxShadow: "0 4px 16px rgba(225,48,108,0.35)" }}
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <WaButton href={WA_URL} size="sm">
              Escribir por WhatsApp
            </WaButton>
          </div>
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
            <WaButton href={WA_URL} size="lg">Quiero actualizar mi A.I.R.E.</WaButton>
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
                Te guiamos paso a paso.
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: "var(--tan)" }}>
                El sistema consular italiano es confuso, lleno de formularios en otro idioma y pasos
                que no están explicados en ningún lado. Es normal perderse — no es culpa tuya.
              </p>
              <p className="text-base leading-relaxed mb-8" style={{ color: "var(--tan)" }}>
                Con años de experiencia resolviendo estos trámites, sabemos exactamente qué piden,
                cómo presentarlo y cómo evitar los errores más comunes.
              </p>
              <WaButton href={WA_URL} size="md">Empezar ahora</WaButton>
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
                <WaButton href={WA_URL} size="sm" className="self-start mt-2">
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
                <WaButton href={WA_URL} size="md" className="flex-shrink-0">
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
              <WaButton href={WA_URL} size="md">Empezar ahora</WaButton>
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
                <WaButton href={WA_URL} size="lg" className="w-full justify-center">
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
                  Con nuestro servicio, tu situación consular queda resuelta.
                </h2>
                <p className="text-base leading-relaxed" style={{ color: "#555" }}>
                  No hace falta esperar meses ni lidiar con el portal solo. Con nuestra guía sabés
                  exactamente qué documentos presentar, cómo cargarlos en FAST IT y qué esperar de
                  tu consulado.
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

            <WaButton href={WA_URL} size="lg" className="mb-5">
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
            <WaButton href={WA_URL} size="sm">Contactar</WaButton>
            <a
              href="https://www.instagram.com/ciudadaniaitaliana_conlala/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center gap-2 text-sm hover:opacity-80 transition-opacity"
              style={{ color: "var(--tan)" }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              @ciudadaniaitaliana_conlala
            </a>
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
          Servicio de asistencia online, no somos un estudio jurídico ·{" "}
          <a href="/politica-de-privacidad" className="underline hover:opacity-80">
            Política de Privacidad
          </a>
        </div>
      </footer>
    </>
  );
}
