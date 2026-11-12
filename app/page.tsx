import Image from "next/image";
import Link from "next/link";
import { MobileNav } from "./components/MobileNav";
import { WaButton } from "./components/WaButton";

const WA_NUMBER = "5493442558765";
const WA_MSG = encodeURIComponent("Hola! Me interesa el servicio de actualizacion A.I.R.E.");
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
    foto: "/img/cliente-agos.webp",
    texto: "Hace años que necesitaba actualizar mis datos y no sabía cómo hacer. Lala me guió en todo el proceso y lo pude completar. ¡Los recomiendo!",
  },
  {
    nombre: "Valentín",
    foto: "/img/cliente-valentin.webp",
    texto: "Ya me habían rechazado el trámite varias veces y con la ayuda de Lala por fin lo pudimos hacer.",
  },
  {
    nombre: "Yanina",
    foto: "/img/cliente-yanina.webp",
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
          background: "rgba(244,235,224,0.9)",
          borderColor: "var(--tan)",
        }}
      >
        <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-3">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/img/logo.webp"
              alt="Ciudadanía Italiana con Lala"
              width={44}
              height={44}
              className="rounded-full object-cover"
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
          </Link>

          <nav className="hidden md:flex items-center gap-7 text-sm font-semibold" style={{ color: "var(--dark-red)" }}>
            <a href="#situaciones" className="hover:opacity-70 transition-opacity">Situaciones</a>
            <a href="#nosotros" className="hover:opacity-70 transition-opacity">Nosotros</a>
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
        {/* HERO — 2 columnas: texto + foto de Lala y José */}
        <section
          className="relative overflow-hidden px-6 pt-12 pb-14 md:py-16"
          style={{
            background:
              "radial-gradient(ellipse 120% 70% at 75% -10%, rgba(208,38,47,0.4) 0%, transparent 55%), radial-gradient(ellipse 80% 60% at 15% 110%, rgba(13,74,45,0.4) 0%, transparent 50%), var(--dark-red)",
            color: "var(--cream)",
          }}
        >
          <div className="relative max-w-6xl mx-auto grid md:grid-cols-[1.15fr_0.85fr] gap-12 md:gap-16 items-center">
            <div className="min-w-0 text-center md:text-left">
              <span
                className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold mb-7"
                style={{
                  background: "rgba(252,246,238,0.1)",
                  border: "1px solid rgba(252,246,238,0.22)",
                  color: "var(--tan)",
                }}
              >
                Para ciudadanos italianos en el exterior
              </span>

              <h1
                className="mb-7"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2.6rem, 5.5vw, 4.5rem)",
                  lineHeight: 0.97,
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

              <p
                className="mx-auto md:mx-0 mb-10 text-lg leading-relaxed"
                style={{ color: "var(--tan)", maxWidth: "520px" }}
              >
                Si sos ciudadano/a italiano y vivís fuera de Italia, es tu obligación mantener
                actualizado tu registro consular. Te ayudamos a resolverlo.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mb-10">
                <WaButton href={WA_URL} size="lg">Quiero actualizar mi A.I.R.E.</WaButton>
                <a
                  href="#precios"
                  className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-base font-semibold transition-colors duration-200 hover:bg-white/10"
                  style={{
                    border: "1.5px solid rgba(252,246,238,0.35)",
                    color: "var(--cream)",
                  }}
                >
                  Ver precios ↓
                </a>
              </div>

              <div
                className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-2 text-sm"
                style={{ color: "var(--tan)" }}
              >
                <span style={{ color: "#FBBF24", fontSize: "1.1rem", letterSpacing: "0.05em" }}>★★★★★</span>
                <span>Cientos de ciudadanos atendidos · Respuesta en menos de 24hs · 100% online</span>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-sm md:max-w-none">
              <Image
                src="/img/hero-lala-jose.webp"
                alt="Lala y José, del equipo de Ciudadanía Italiana con Lala, en un café de Taormina"
                width={1200}
                height={1500}
                preload
                sizes="(min-width: 768px) 40vw, 90vw"
                className="w-full h-auto rounded-3xl"
                style={{ boxShadow: "0 24px 60px rgba(0,0,0,0.35)", border: "1px solid rgba(252,246,238,0.18)" }}
              />
              <div
                className="absolute -bottom-5 left-1/2 -translate-x-1/2 md:translate-x-0 md:-left-6 rounded-2xl px-5 py-3 text-sm font-semibold whitespace-nowrap"
                style={{ background: "var(--cream)", color: "var(--dark-red)", boxShadow: "0 10px 30px rgba(0,0,0,0.25)" }}
              >
                👋 Te atendemos Lala y José, en persona
              </div>
            </div>
          </div>
        </section>

        {/* SITUACIONES — compacto */}
        <section id="situaciones" className="px-6 py-14 md:py-16" style={{ background: "var(--cream)" }}>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <span
                className="inline-block rounded-full px-4 py-1 text-xs font-bold mb-4 tracking-widest uppercase"
                style={{ background: "var(--tan)", color: "var(--dark-red)" }}
              >
                Situaciones comunes
              </span>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2rem, 4.5vw, 3rem)",
                  color: "var(--dark-red)",
                  lineHeight: 1.1,
                }}
              >
                ¿Te identificás con alguna de estas situaciones?
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {/* Pasaporte — destacada */}
              <div
                className="md:col-span-2 rounded-2xl overflow-hidden grid sm:grid-cols-[1fr_180px]"
                style={{ background: "var(--dark-red)", color: "var(--cream)" }}
              >
                <div className="p-6 flex flex-col gap-3">
                  <h3 className="font-bold text-xl">🛂 Pasaporte bloqueado</h3>
                  <p className="text-[15px] leading-[1.7]" style={{ color: "var(--tan)" }}>
                    ¿Necesitás tramitar o actualizar tu pasaporte italiano? Primero debés estar
                    correctamente inscripto en el A.I.R.E.
                  </p>
                  <WaButton href={WA_URL} size="sm" className="self-start mt-1">
                    Resolver esto →
                  </WaButton>
                </div>
                <div className="relative h-48 sm:h-auto">
                  <Image
                    src="/img/pasaporte.webp"
                    alt="Pasaporte italiano en mano"
                    fill
                    sizes="(min-width: 640px) 180px, 100vw"
                    className="object-cover"
                    style={{ objectPosition: "50% 45%" }}
                  />
                </div>
              </div>

              {/* Multa */}
              <div
                className="rounded-2xl p-6 flex flex-col justify-between gap-4"
                style={{ background: "var(--green)", color: "var(--cream)" }}
              >
                <p className="font-bold tracking-wide text-sm uppercase" style={{ color: "var(--tan)" }}>
                  Multa máxima
                </p>
                <div>
                  <p style={{ fontFamily: "var(--font-display)", fontSize: "3.2rem", lineHeight: 1 }}>
                    €5.000
                  </p>
                  <p className="text-sm mt-2" style={{ color: "var(--tan)" }}>
                    por 5 años sin inscripción en el A.I.R.E.
                  </p>
                </div>
              </div>
            </div>

            {/* 4 situaciones — compactas */}
            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              {PROBLEMAS.map(({ emoji, titulo, texto }) => (
                <div
                  key={titulo}
                  className="rounded-2xl p-5 flex gap-4"
                  style={{ background: "var(--paper)", border: "1.5px solid var(--tan)" }}
                >
                  <span className="text-2xl leading-none flex-shrink-0 mt-0.5">{emoji}</span>
                  <div>
                    <h3 className="font-bold text-base mb-1" style={{ color: "var(--dark-red)" }}>
                      {titulo}
                    </h3>
                    <p className="text-[15px] leading-[1.65]" style={{ color: "var(--ink-soft)" }}>
                      {texto}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* QUIÉNES SOMOS — video + presentación */}
        <section id="nosotros" className="px-6 py-14 md:py-16" style={{ background: "var(--paper)" }}>
          <div className="max-w-5xl mx-auto grid md:grid-cols-[0.85fr_1.15fr] gap-10 md:gap-12 items-center">
            <video
              controls
              playsInline
              preload="none"
              poster="/img/video-poster.webp"
              className="rounded-2xl w-full"
              style={{ boxShadow: "0 12px 40px rgba(47,36,33,0.18)", aspectRatio: "1/1" }}
            >
              <source src="/video-lala.mp4" type="video/mp4" />
            </video>

            <div>
              <span
                className="inline-block rounded-full px-4 py-1 text-xs font-bold mb-5 tracking-widest uppercase"
                style={{ background: "var(--tan)", color: "var(--dark-red)" }}
              >
                Quiénes somos
              </span>
              <h2
                className="mb-5"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2.2rem, 4.5vw, 3.2rem)",
                  color: "var(--dark-red)",
                  lineHeight: 1.05,
                }}
              >
                Somos Lala y José
              </h2>
              <p className="text-base leading-[1.7] mb-4" style={{ color: "var(--ink-soft)" }}>
                Detrás de este servicio no hay un call center ni un bot: somos nosotros. Te respondemos
                personalmente por WhatsApp, revisamos tu caso y te acompañamos en cada paso del trámite.
              </p>
              <p className="text-base leading-[1.7] mb-6" style={{ color: "var(--ink-soft)" }}>
                El sistema consular italiano es confuso y está lleno de pasos que no se explican en
                ningún lado. Es normal perderse — no es culpa tuya. Conocemos los errores que más se
                repiten en FAST IT, para que vos no tengas que aprenderlos a los golpes.
              </p>
              <div className="grid grid-cols-3 gap-3 mb-7">
                {[
                  ["/img/lala-jose-taormina.webp", "Lala y José en Taormina", "50% 30%"],
                  ["/img/lala-retrato.webp", "Retrato de Lala", "50% 35%"],
                  ["/img/lala-jose-guia.webp", "Lala y José revisando una guía", "50% 35%"],
                ].map(([src, alt, pos]) => (
                  <div key={src} className="relative aspect-[4/3] rounded-xl overflow-hidden">
                    <Image src={src} alt={alt} fill sizes="150px" className="object-cover" style={{ objectPosition: pos }} />
                  </div>
                ))}
              </div>
              <WaButton href={WA_URL} size="md">Hablar con nosotros</WaButton>
            </div>
          </div>
        </section>

        {/* SERVICIO + PRECIO */}
        <section
          id="servicio"
          className="px-6 py-14 md:py-16"
          style={{ background: "var(--green)", color: "var(--cream)" }}
        >
          <div id="precios" className="max-w-5xl mx-auto grid md:grid-cols-[1.1fr_0.9fr] gap-10 md:gap-14 items-center scroll-mt-24">
            <div>
              <span
                className="inline-block rounded-full px-4 py-1 text-xs font-bold mb-5 tracking-widest uppercase"
                style={{ background: "rgba(244,235,224,0.12)", color: "var(--tan)" }}
              >
                El servicio incluye
              </span>
              <h2
                className="mb-4"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2rem, 4.5vw, 3rem)",
                  lineHeight: 1.1,
                }}
              >
                Acompañamiento completo, de principio a fin
              </h2>
              <p className="text-base leading-[1.7] mb-6" style={{ color: "var(--tan)" }}>
                No te dejamos solo con el portal. Una persona real te guía en cada paso hasta que
                tu situación consular quede confirmada.
              </p>
              <ul className="space-y-2.5">
                {INCLUYE.map(({ icon, text }) => (
                  <li
                    key={text}
                    className="flex items-center gap-4 rounded-xl px-4 py-2.5"
                    style={{ background: "rgba(244,235,224,0.07)" }}
                  >
                    <span className="text-xl flex-shrink-0">{icon}</span>
                    <span className="text-base">{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tarjeta de precio */}
            <div
              className="rounded-3xl overflow-hidden"
              style={{ background: "var(--paper)", color: "var(--ink)", boxShadow: "0 20px 50px rgba(0,0,0,0.25)" }}
            >
              <div className="relative h-36">
                <Image
                  src="/img/lala-laptop.webp"
                  alt="Lala trabajando en un trámite consular desde su computadora"
                  fill
                  sizes="(min-width: 768px) 420px, 100vw"
                  className="object-cover"
                  style={{ objectPosition: "50% 55%" }}
                />
              </div>
              <div className="p-8">
                <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "var(--green)" }}>
                  Servicio de acompañamiento
                </p>
                <div className="flex items-end gap-2 mb-3">
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "4rem",
                      color: "var(--dark-red)",
                      lineHeight: 1,
                    }}
                  >
                    €120
                  </span>
                  <span className="text-sm pb-2" style={{ color: "var(--ink-muted)" }}>
                    pago único
                  </span>
                </div>
                <p className="text-[15px] leading-[1.65] mb-6" style={{ color: "var(--ink-soft)" }}>
                  Todo lo que necesitás para actualizar tu situación A.I.R.E. sin complicaciones,
                  sin esperar meses ni lidiar con el portal solo.
                </p>
                <WaButton href={WA_URL} size="lg" className="w-full justify-center">
                  Empezar ahora
                </WaButton>
                <p className="text-xs text-center mt-3" style={{ color: "var(--ink-muted)" }}>
                  Respuesta en menos de 24 hs · 100% online
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIOS */}
        <section className="px-6 py-14 md:py-16" style={{ background: "var(--dark-red)", color: "var(--cream)" }}>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <span
                className="inline-block rounded-full px-4 py-1 text-xs font-bold mb-4 tracking-widest uppercase"
                style={{ background: "rgba(244,235,224,0.12)", color: "var(--tan)" }}
              >
                Clientes satisfechos
              </span>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2rem, 4.5vw, 3rem)",
                  lineHeight: 1.1,
                }}
              >
                Ellos ya actualizaron su A.I.R.E. con nosotros
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {TESTIMONIOS.map(({ nombre, foto, texto }) => (
                <div
                  key={nombre}
                  className="rounded-2xl p-5 flex flex-col gap-3"
                  style={{ background: "rgba(244,235,224,0.07)", border: "1px solid rgba(244,235,224,0.12)" }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="rounded-full overflow-hidden flex-shrink-0"
                      style={{ width: 52, height: 52, border: "2px solid rgba(244,235,224,0.25)" }}
                    >
                      <Image src={foto} alt={nombre} width={52} height={52} className="object-cover w-full h-full" />
                    </div>
                    <div>
                      <p className="font-bold text-sm" style={{ color: "var(--cream)" }}>
                        {nombre} <span style={{ color: "#FBBF24" }}>★★★★★</span>
                      </p>
                      <p className="text-xs mt-0.5" style={{ color: "var(--tan)", opacity: 0.75 }}>Actualización de datos A.I.R.E.</p>
                    </div>
                  </div>
                  <p className="text-[15px] leading-[1.65]" style={{ color: "var(--tan)" }}>
                    &ldquo;{texto}&rdquo;
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ — 2 columnas en escritorio */}
        <section id="faq" className="px-6 py-14 md:py-16" style={{ background: "var(--tan)" }}>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <span
                className="inline-block rounded-full px-4 py-1 text-xs font-bold mb-4 tracking-widest uppercase"
                style={{ background: "var(--paper)", color: "var(--dark-red)" }}
              >
                Preguntas frecuentes
              </span>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2rem, 4.5vw, 3rem)",
                  color: "var(--dark-red)",
                }}
              >
                Resolvemos tus dudas
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-3 items-start">
              {FAQS.map(({ q, a }) => (
                <details
                  key={q}
                  className="rounded-xl overflow-hidden"
                  style={{ background: "var(--paper)", border: "1px solid rgba(0,0,0,0.07)" }}
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
                  <div className="px-5 pb-5 pt-1 text-[15px] leading-[1.7]" style={{ color: "var(--ink-soft)" }}>
                    {a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL — cta.gallery: centered, stars, single button, trust microcopy */}
        <section
          className="relative overflow-hidden px-6 py-14 md:py-16 text-center"
          style={{ background: "var(--dark-green)", color: "var(--cream)" }}
        >
          <Image
            src="/img/cta-taormina.webp"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: "50% 60%" }}
          />
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{ background: "linear-gradient(180deg, rgba(13,74,45,0.84) 0%, rgba(13,74,45,0.92) 100%)" }}
          />
          <div className="relative max-w-2xl mx-auto">
            <div
              className="inline-flex items-center gap-1 mb-3 text-sm font-medium"
              style={{ color: "var(--tan)" }}
            >
              <span style={{ color: "#FBBF24", letterSpacing: "0.08em" }}>★★★★★</span>
              <span className="ml-2">Cientos de ciudadanos atendidos</span>
            </div>

            <h2
              className="mb-6"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.1rem, 4.5vw, 3.4rem)",
                lineHeight: 0.97,
              }}
            >
              Regularizá tu ciudadanía hoy mismo
            </h2>

            <p className="mb-7 text-lg leading-relaxed" style={{ color: "var(--tan)" }}>
              Una consulta rápida puede ahorrarte meses de demoras, trámites mal hechos y multas
              evitables.
            </p>

            <WaButton href={WA_URL} size="lg" className="mb-4">
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
        <div className="max-w-5xl mx-auto px-6 py-10 grid gap-8 sm:grid-cols-3">
          {/* Col 1: Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/img/logo.webp"
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
            <ul className="space-y-2 text-sm">
              {[
                ["Situaciones comunes", "#situaciones"],
                ["Quiénes somos", "#nosotros"],
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
            borderTop: "1px solid rgba(241,221,199,0.18)",
            color: "rgba(241,221,199,0.55)",
          }}
        >
          © {new Date().getFullYear()} Ciudadanía Italiana con Lala · Todos los derechos reservados ·
          Servicio de asistencia online, no somos un estudio jurídico ·{" "}
          <Link href="/politica-de-privacidad" className="underline hover:opacity-80">
            Política de Privacidad
          </Link>
        </div>
      </footer>
    </>
  );
}
