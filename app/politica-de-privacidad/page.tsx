import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidad — Ciudadanía Italiana con Lala",
  description: "Política de privacidad y tratamiento de datos personales de Ciudadanía Italiana con Lala.",
};

export default function PoliticaDePrivacidad() {
  return (
    <div style={{ background: "var(--cream)", minHeight: "100vh" }}>
      {/* Header simple */}
      <header
        className="border-b px-6 py-4"
        style={{ borderColor: "var(--tan)", background: "var(--cream)" }}
      >
        <div className="max-w-3xl mx-auto">
          <Link
            href="/"
            className="text-sm font-semibold hover:opacity-70 transition-opacity"
            style={{ color: "var(--dark-red)" }}
          >
            ← Volver al inicio
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-16">
        <h1
          className="mb-3"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem, 5vw, 3rem)",
            color: "var(--dark-red)",
            lineHeight: 1.1,
          }}
        >
          Política de Privacidad
        </h1>
        <p className="text-sm mb-12" style={{ color: "#888" }}>
          Última actualización: {new Date().toLocaleDateString("es-AR", { year: "numeric", month: "long", day: "numeric" })}
        </p>

        <div className="space-y-10 text-base leading-relaxed" style={{ color: "#333" }}>

          <section>
            <h2 className="font-bold text-lg mb-3" style={{ color: "var(--dark-red)" }}>1. Responsable del tratamiento</h2>
            <p>
              <strong>Ciudadanía Italiana con Lala</strong> es responsable del tratamiento de los datos personales
              recopilados a través de este sitio web. Para consultas relacionadas con tu privacidad,
              podés contactarnos en:{" "}
              <a
                href="mailto:ciudadaniaitalianaconlala@gmail.com"
                className="underline hover:opacity-70"
                style={{ color: "var(--dark-red)" }}
              >
                ciudadaniaitalianaconlala@gmail.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="font-bold text-lg mb-3" style={{ color: "var(--dark-red)" }}>2. Qué datos recopilamos</h2>
            <p className="mb-3">Recopilamos los siguientes tipos de información:</p>
            <ul className="space-y-2 pl-5 list-disc">
              <li><strong>Datos de navegación:</strong> dirección IP, tipo de navegador, páginas visitadas, tiempo de permanencia y acciones realizadas en el sitio.</li>
              <li><strong>Datos de contacto:</strong> cuando nos escribís por WhatsApp, accedemos al número de teléfono y la información que nos compartís voluntariamente en la conversación.</li>
              <li><strong>Datos de seguimiento publicitario:</strong> a través de herramientas de análisis y publicidad (ver sección 4), podemos registrar interacciones con el sitio para medir la efectividad de nuestras campañas.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-bold text-lg mb-3" style={{ color: "var(--dark-red)" }}>3. Para qué usamos tus datos</h2>
            <ul className="space-y-2 pl-5 list-disc">
              <li>Brindarte el servicio de asistencia solicitado.</li>
              <li>Responderte consultas enviadas por WhatsApp.</li>
              <li>Mejorar el funcionamiento y contenido del sitio web.</li>
              <li>Medir el rendimiento de nuestras campañas publicitarias.</li>
              <li>Mostrarte publicidad relevante en plataformas como Facebook e Instagram.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-bold text-lg mb-3" style={{ color: "var(--dark-red)" }}>4. Herramientas de terceros</h2>
            <p className="mb-4">
              Este sitio utiliza herramientas de terceros que pueden recopilar datos de navegación de forma automática:
            </p>

            <div className="space-y-4">
              <div
                className="rounded-xl p-5"
                style={{ background: "white", border: "1.5px solid var(--tan)" }}
              >
                <p className="font-semibold mb-1">Meta Pixel (Facebook / Instagram)</p>
                <p className="text-sm" style={{ color: "#555" }}>
                  Utilizamos el Pixel de Meta para medir conversiones y mostrar publicidad personalizada.
                  Meta puede usar estos datos conforme a su propia política de privacidad:{" "}
                  <a href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "var(--dark-red)" }}>
                    facebook.com/privacy/policy
                  </a>
                </p>
              </div>

              <div
                className="rounded-xl p-5"
                style={{ background: "white", border: "1.5px solid var(--tan)" }}
              >
                <p className="font-semibold mb-1">Google Tag Manager</p>
                <p className="text-sm" style={{ color: "#555" }}>
                  Usamos Google Tag Manager para gestionar etiquetas de seguimiento. No recopila datos
                  personales directamente, pero puede activar otras herramientas de análisis.
                  Más información:{" "}
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "var(--dark-red)" }}>
                    policies.google.com/privacy
                  </a>
                </p>
              </div>

              <div
                className="rounded-xl p-5"
                style={{ background: "white", border: "1.5px solid var(--tan)" }}
              >
                <p className="font-semibold mb-1">WhatsApp (Meta)</p>
                <p className="text-sm" style={{ color: "#555" }}>
                  Al hacer clic en los botones de WhatsApp serás redirigido a la aplicación de WhatsApp,
                  operada por Meta. La información que compartas en esa conversación queda sujeta a los
                  términos de WhatsApp.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-bold text-lg mb-3" style={{ color: "var(--dark-red)" }}>5. Cookies</h2>
            <p>
              Este sitio puede utilizar cookies propias y de terceros para mejorar la experiencia de
              navegación y medir el tráfico. Podés configurar tu navegador para rechazar cookies, aunque
              esto podría afectar algunas funciones del sitio.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-lg mb-3" style={{ color: "var(--dark-red)" }}>6. Tus derechos</h2>
            <p className="mb-3">Tenés derecho a:</p>
            <ul className="space-y-2 pl-5 list-disc">
              <li>Acceder a los datos personales que tengamos sobre vos.</li>
              <li>Solicitar la corrección o eliminación de tus datos.</li>
              <li>Oponerte al tratamiento de tus datos con fines publicitarios.</li>
            </ul>
            <p className="mt-3">
              Para ejercer cualquiera de estos derechos, escribinos a{" "}
              <a
                href="mailto:ciudadaniaitalianaconlala@gmail.com"
                className="underline hover:opacity-70"
                style={{ color: "var(--dark-red)" }}
              >
                ciudadaniaitalianaconlala@gmail.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="font-bold text-lg mb-3" style={{ color: "var(--dark-red)" }}>7. Cambios en esta política</h2>
            <p>
              Podemos actualizar esta política ocasionalmente. Cualquier cambio será publicado en esta
              página con la fecha de actualización correspondiente. Te recomendamos revisarla periódicamente.
            </p>
          </section>

        </div>
      </main>

      <footer
        className="px-6 py-8 text-center text-xs mt-10"
        style={{
          borderTop: "1px solid var(--tan)",
          color: "#999",
          background: "var(--cream)",
        }}
      >
        © {new Date().getFullYear()} Ciudadanía Italiana con Lala · Todos los derechos reservados
      </footer>
    </div>
  );
}
