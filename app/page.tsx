import Image from "next/image";

// TODO: reemplazar con el número real de WhatsApp (formato: 549XXXXXXXXXX sin + ni espacios)
const WA_NUMBER = "549XXXXXXXXXX";
const WA_MSG = encodeURIComponent("Hola! Me interesa el servicio de actualización A.I.R.E. 🇮🇹");
const WA_URL = `https://wa.me/${WA_NUMBER}?text=${WA_MSG}`;

function WaButton({ className = "", children = "Consultá por WhatsApp" }: { className?: string; children?: React.ReactNode }) {
  return (
    <a
      href={WA_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 rounded-full px-6 py-3 font-bold text-white transition-opacity hover:opacity-90 ${className}`}
      style={{ background: "#25D366" }}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.549 4.116 1.515 5.855L.057 23.882a.5.5 0 0 0 .612.612l6.102-1.444A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.89 0-3.663-.497-5.192-1.367l-.37-.217-3.83.905.924-3.75-.238-.385A9.958 9.958 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
      </svg>
      {children}
    </a>
  );
}

const PROBLEMAS = [
  {
    emoji: "🛂",
    titulo: "Tu pasaporte está bloqueado",
    texto: "Tenés ciudadanía italiana pero no podés avanzar con el pasaporte. Puede ser que tu situación A.I.R.E. no esté actualizada.",
  },
  {
    emoji: "👶",
    titulo: "Tus hijos no están registrados",
    texto: "Tuviste hijos después de obtener la ciudadanía italiana y todavía no los inscribiste ante el consulado.",
  },
  {
    emoji: "💍",
    titulo: "Tu matrimonio no está transcripto",
    texto: "Te casaste después de obtener la ciudadanía y tu matrimonio nunca fue informado ni transcripto en Italia.",
  },
  {
    emoji: "🏠",
    titulo: "Cambiaste de domicilio",
    texto: "Te mudaste de país o de ciudad y nunca actualizaste el A.I.R.E. Podés tener problemas para recibir comunicaciones consulares.",
  },
  {
    emoji: "💻",
    titulo: "FAST IT es un laberinto",
    texto: "Entraste al portal, no entendiste nada, te rechazaron el trámite. Pasa todo el tiempo y tiene solución.",
  },
];

const INCLUYE = [
  "Verificación de tu situación A.I.R.E. actual",
  "Checklist personalizado de documentos necesarios",
  "Asistencia por WhatsApp para cargar en FAST IT",
  "Acompañamiento por videollamada si lo necesitás",
  "Seguimiento hasta la confirmación oficial",
];

const FAQS = [
  {
    q: "¿Qué es el A.I.R.E.?",
    a: "Es el Anagrafe degli Italiani Residenti all'Estero: el registro de los ciudadanos italianos que viven fuera de Italia. Es obligatorio por ley.",
  },
  {
    q: "¿Qué pasa si no me inscribo o no actualizo mis datos?",
    a: "Podés tener problemas para sacar pasaporte, registrar hijos, transcribir matrimonio o actualizar datos consulares. Desde 2024, Italia prevé multas de €200 a €1.000 por cada año sin inscripción, hasta un máximo de 5 años.",
  },
  {
    q: "Hice mi ciudadanía en Italia y ahora vivo en otro país. ¿Tengo que inscribirme?",
    a: "Sí. Si sos ciudadano italiano y vivís fuera de Italia por más de 12 meses, tenés que estar inscripto en el A.I.R.E.",
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
    q: "Me mudé y ahora me corresponde otro consulado. ¿Qué hago?",
    a: "Tenés que actualizar tu residencia ante el nuevo consulado competente según tu domicilio actual. Te ayudamos con todo eso.",
  },
  {
    q: "Quiero sacar el pasaporte, pero mi A.I.R.E. está mal. ¿Puede ser un problema?",
    a: "Sí. Muchos consulados requieren que tu situación A.I.R.E. esté actualizada antes de avanzar con el pasaporte.",
  },
  {
    q: "Me casé, me divorcié o enviudé. ¿Tengo que informarlo a Italia?",
    a: "Sí. Como ciudadano italiano, tenés que mantener actualizado tu estado civil ante el Estado italiano.",
  },
  {
    q: "FAST IT me rechazó el trámite. ¿Es normal?",
    a: "Sí, pasa mucho. Puede deberse a errores en documentos, domicilio, archivos, datos cargados o tipo de trámite seleccionado. Sabemos exactamente cómo resolverlo.",
  },
  {
    q: "¿Qué pasa si no hago nada?",
    a: "Corrés el riesgo de no poder renovar el pasaporte, no poder votar en elecciones italianas y no poder transmitir la ciudadanía a tus hijos. Además, las multas por falta de inscripción van en aumento.",
  },
];

export default function Home() {
  return (
    <>
      {/* NAV */}
      <nav
        className="sticky top-0 z-50 flex items-center justify-between px-6 py-3 shadow-sm"
        style={{ background: "var(--cream)", borderBottom: "1px solid var(--tan)" }}
      >
        <div className="flex items-center gap-3">
          <Image
            src="/logo.jpeg"
            alt="Ciudadanía Italiana con Lala"
            width={48}
            height={48}
            className="rounded-full object-cover"
            priority
          />
          <div className="leading-tight">
            <p style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", color: "var(--red)", lineHeight: 1 }}>
              Lala
            </p>
            <p className="text-xs font-bold tracking-widest uppercase" style={{ color: "var(--green)" }}>
              Ciudadanía Italiana
            </p>
          </div>
        </div>
        <WaButton className="hidden sm:inline-flex text-sm py-2 px-4" />
      </nav>

      <main>
        {/* HERO */}
        <section
          className="px-6 py-20 text-center"
          style={{ background: "var(--dark-red)", color: "var(--cream)" }}
        >
          <p className="text-sm font-bold tracking-widest uppercase mb-4" style={{ color: "var(--tan)" }}>
            Para ciudadanos italianos en el exterior
          </p>
          <h1
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(3rem, 8vw, 5.5rem)", lineHeight: 1.05 }}
            className="mb-6"
          >
            ¿Tu A.I.R.E. está<br />desactualizado?
          </h1>
          <p className="max-w-xl mx-auto text-lg leading-relaxed mb-8" style={{ color: "var(--tan)" }}>
            Si tenés ciudadanía italiana y vivís fuera de Italia, estás obligado a mantener actualizado tu registro consular.
            Te ayudamos a resolverlo <strong style={{ color: "var(--cream)" }}>online, sin vueltas y sin errores.</strong>
          </p>
          <WaButton className="text-base px-8 py-4">
            Quiero actualizar mi A.I.R.E.
          </WaButton>
          <p className="mt-4 text-sm" style={{ color: "var(--tan)" }}>
            Respuesta en menos de 24 horas · Servicio 100% online
          </p>
        </section>

        {/* MULTAS — URGENCIA */}
        <section
          className="px-6 py-10 text-center"
          style={{ background: "var(--red)", color: "var(--cream)" }}
        >
          <p className="max-w-2xl mx-auto text-lg font-semibold leading-relaxed">
            ⚠️ Desde 2024, Italia aplica multas de{" "}
            <span className="font-bold">€200 a €1.000 por año</span> sin inscripción en el A.I.R.E.,
            hasta un máximo de 5 años acumulados.
          </p>
        </section>

        {/* PROBLEMAS */}
        <section className="px-6 py-20" style={{ background: "var(--cream)" }}>
          <div className="max-w-4xl mx-auto">
            <h2
              style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "var(--dark-red)" }}
              className="text-center mb-4"
            >
              ¿Te identificás con alguna de estas situaciones?
            </h2>
            <p className="text-center text-lg mb-12" style={{ color: "#555" }}>
              Son las razones más comunes por las que un ciudadano italiano necesita actualizar su A.I.R.E.
            </p>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {PROBLEMAS.map(({ emoji, titulo, texto }) => (
                <div
                  key={titulo}
                  className="rounded-2xl p-6"
                  style={{ background: "white", border: "1.5px solid var(--tan)", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
                >
                  <div className="text-3xl mb-3">{emoji}</div>
                  <h3 className="font-bold text-lg mb-2" style={{ color: "var(--dark-red)" }}>
                    {titulo}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#555" }}>
                    {texto}
                  </p>
                </div>
              ))}
              {/* Card CTA adicional */}
              <div
                className="rounded-2xl p-6 flex flex-col items-center justify-center text-center"
                style={{ background: "var(--dark-green)", color: "var(--cream)" }}
              >
                <p className="font-bold text-lg mb-3">¿No sabés si tu situación está ok?</p>
                <p className="text-sm mb-4" style={{ color: "var(--tan)" }}>Escribinos y te ayudamos a revisar tu caso sin costo.</p>
                <WaButton className="text-sm py-2 px-5">Consultá gratis</WaButton>
              </div>
            </div>
          </div>
        </section>

        {/* QUÉ INCLUYE */}
        <section className="px-6 py-20" style={{ background: "var(--green)", color: "var(--cream)" }}>
          <div className="max-w-2xl mx-auto text-center">
            <h2
              style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
              className="mb-4"
            >
              Qué incluye el servicio
            </h2>
            <p className="text-lg mb-10" style={{ color: "var(--tan)" }}>
              Acompañamiento completo de principio a fin.
            </p>
            <ul className="text-left space-y-4">
              {INCLUYE.map((item) => (
                <li key={item} className="flex items-start gap-3 text-base">
                  <span className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center font-bold text-sm" style={{ background: "var(--cream)", color: "var(--green)" }}>
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* PRECIOS */}
        <section className="px-6 py-20" style={{ background: "var(--cream)" }}>
          <div className="max-w-3xl mx-auto text-center">
            <h2
              style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "var(--dark-red)" }}
              className="mb-4"
            >
              Precios
            </h2>
            <p className="text-lg mb-12" style={{ color: "#555" }}>
              Invertí en regularizar tu ciudadanía antes de que las multas crezcan.
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              {/* Plan base */}
              <div
                className="rounded-2xl p-8 text-left"
                style={{ border: "2px solid var(--tan)", background: "white" }}
              >
                <p className="text-sm font-bold tracking-widest uppercase mb-2" style={{ color: "var(--green)" }}>
                  Plan Base
                </p>
                <p style={{ fontFamily: "var(--font-display)", fontSize: "3.5rem", color: "var(--dark-red)", lineHeight: 1 }}>
                  €120
                </p>
                <p className="text-sm mt-1 mb-6" style={{ color: "#888" }}>pago único</p>
                <ul className="space-y-2 text-sm mb-8" style={{ color: "#444" }}>
                  <li>✓ Verificación de situación A.I.R.E.</li>
                  <li>✓ Checklist de documentos</li>
                  <li>✓ Asistencia por WhatsApp</li>
                  <li>✓ Seguimiento hasta confirmación</li>
                </ul>
                <WaButton className="w-full justify-center text-sm py-3">Empezar ahora</WaButton>
              </div>

              {/* Plan completo */}
              <div
                className="rounded-2xl p-8 text-left relative"
                style={{ background: "var(--dark-red)", color: "var(--cream)" }}
              >
                <span
                  className="absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full"
                  style={{ background: "var(--cream)", color: "var(--dark-red)" }}
                >
                  Más elegido
                </span>
                <p className="text-sm font-bold tracking-widest uppercase mb-2" style={{ color: "var(--tan)" }}>
                  Paquete Completo
                </p>
                <div>
                  <p style={{ fontFamily: "var(--font-display)", fontSize: "3.5rem", lineHeight: 1 }}>€150</p>
                  <p className="text-sm mt-1" style={{ color: "var(--tan)" }}>+ €50 por hijo</p>
                </div>
                <p className="text-sm mt-1 mb-6" style={{ color: "var(--tan)" }}>pago único</p>
                <ul className="space-y-2 text-sm mb-8" style={{ color: "var(--tan)" }}>
                  <li>✓ Todo el Plan Base</li>
                  <li>✓ Inscripción de hijos</li>
                  <li>✓ Transcripción de matrimonio/divorcio</li>
                  <li>✓ Videollamada de acompañamiento</li>
                </ul>
                <WaButton className="w-full justify-center text-sm py-3">Quiero el paquete completo</WaButton>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-6 py-20" style={{ background: "var(--tan)" }}>
          <div className="max-w-2xl mx-auto">
            <h2
              style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "var(--dark-red)" }}
              className="text-center mb-12"
            >
              Preguntas frecuentes
            </h2>
            <div className="space-y-3">
              {FAQS.map(({ q, a }) => (
                <details
                  key={q}
                  className="group rounded-xl overflow-hidden"
                  style={{ background: "white", border: "1px solid var(--cream)" }}
                >
                  <summary className="flex items-center justify-between gap-4 px-5 py-4 font-semibold cursor-pointer" style={{ color: "var(--dark-red)" }}>
                    <span>{q}</span>
                    <span className="chevron flex-shrink-0 text-xl leading-none" style={{ color: "var(--red)" }}>
                      ‹
                    </span>
                  </summary>
                  <div className="px-5 pb-5 text-sm leading-relaxed" style={{ color: "#444" }}>
                    {a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section
          className="px-6 py-24 text-center"
          style={{ background: "var(--dark-green)", color: "var(--cream)" }}
        >
          <h2
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 7vw, 5rem)", lineHeight: 1.05 }}
            className="mb-6"
          >
            Regularizá tu ciudadanía<br />hoy mismo
          </h2>
          <p className="max-w-md mx-auto text-lg mb-10" style={{ color: "var(--tan)" }}>
            Una consulta rápida puede ahorrarte meses de demoras, trámites mal hechos y multas evitables.
          </p>
          <WaButton className="text-lg px-10 py-5">
            Escribir por WhatsApp ahora
          </WaButton>
          <p className="mt-6 text-sm" style={{ color: "var(--tan)" }}>
            Respuesta en menos de 24 horas · Servicio 100% online · Desde cualquier país
          </p>
        </section>
      </main>

      {/* FOOTER */}
      <footer
        className="px-6 py-8 text-center text-sm"
        style={{ background: "var(--dark-red)", color: "var(--tan)" }}
      >
        <p>
          © {new Date().getFullYear()} Ciudadanía Italiana con Lala · Todos los derechos reservados
        </p>
        <p className="mt-1 text-xs" style={{ color: "var(--tan)", opacity: 0.7 }}>
          Servicio de asistencia online · No somos un estudio jurídico
        </p>
      </footer>
    </>
  );
}
