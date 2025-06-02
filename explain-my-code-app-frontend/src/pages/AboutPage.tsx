export const AboutPage = () => {
  return (
    <div className="px-40 flex flex-1 justify-center py-5">
      <div className="lex flex-col max-w-[960px] flex-1">
        <div className="flex flex-wrap justify-between gap-3 p-4">
          <p className="text-white text-[32px] font-bold leading-tight min-w-72">
            About - Explain My Code
          </p>
        </div>
        <div className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4">
          <p className="mb-4">
            <strong>Explain My Code</strong> ist eine schlanke und KI-gestützte
            Web-Anwendung, mit der Entwickler:innen und Lernende ihren
            Programmcode schnell analysieren und verständlich erklärt bekommen
            können. Das Projekt kombiniert moderne Webtechnologie mit lokal
            laufender Künstlicher Intelligenz (Ollama + Phi-3), um
            datenschutzfreundlich und ressourcenschonend Code auf natürliche
            Weise zu interpretieren.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-2">
            🎯 Ziel des Projekts
          </h2>
          <ul className="list-disc list-inside space-y-1 mb-6">
            <li>Quellcode automatisch zusammenfassen oder erklären</li>
            <li>
              Antwortstile wie „kurz“, „detailliert“ oder „für Anfänger“
              auswählen
            </li>
            <li>Offline & lokal - keine Cloud, keine Datenweitergabe</li>
            <li>
              Als Lernhilfe und Analyse-Tool für Studium, Beruf und Selbstlernen
            </li>
          </ul>

          <h2 className="text-xl font-semibold mb-2">🔧 Technologien</h2>
          <ul className="list-disc list-inside space-y-1 mb-6">
            <li>
              <strong>Frontend:</strong> React + TailwindCSS
            </li>
            <li>
              <strong>Backend:</strong> Java Spring Boot (REST API)
            </li>
            <li>
              <strong>KI-Engine:</strong> Ollama mit lokalem LLM (phi3)
            </li>
            <li>
              <strong>Tools:</strong> Postman, Prompt Engineering, JSON
            </li>
          </ul>

          <h2 className="text-xl font-semibold mb-2">🔍 Hauptfunktionen</h2>
          <ul className="list-disc list-inside space-y-1 mb-6">
            <li>💬 Code einfügen und automatisch erklären lassen</li>
            <li>
              ✨ Antwortformat auswählen (z. B. Zusammenfassung,
              Schritt-für-Schritt)
            </li>
            <li>🛡️ Komplett offline nutzbar mit Ollama</li>
            <li>🧠 Leichtgewichtig - optimiert für Geräte mit 8 GB RAM</li>
          </ul>

          <h2 className="text-xl font-semibold mb-2">
            📚 Lernziele & Mehrwert
          </h2>
          <ul className="list-disc list-inside space-y-1 mb-6">
            <li>Verbindung von KI und Web-Frontend mit lokalem Backend</li>
            <li>Verständnis für Prompt Engineering und LLM-Optimierung</li>
            <li>Praxisnahe Anwendung von Java Spring & REST-Schnittstellen</li>
          </ul>

          <h2 className="text-xl font-semibold mb-2">
            📂 Warum dieses Projekt?
          </h2>
          <p className="mb-4">
            <strong>Explain My Code</strong> entstand aus dem Wunsch, eine
            nützliche, schlanke und datensichere Lernhilfe zu bauen - besonders
            für alle, die KI-Tools in ihre tägliche Entwicklungsarbeit
            integrieren möchten, ohne auf große Cloudmodelle angewiesen zu sein.
          </p>
        </div>
      </div>
    </div>
  );
};
