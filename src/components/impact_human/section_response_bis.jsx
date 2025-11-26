import "./section_response_bis.css";

export default function SectionResponseBis() {
  return (
    <div className="response_bis-wrapper">
      <div className="sacadon-title2">ET CONCRÈTEMENT ?</div>

      <div className="response_bis-grid">

        {/* Colonne gauche */}
        <div className="response_bis-column">
          <div className="sacadon-title response_bis-subtitle">IMPACT MESURÉ</div>

          <div className="sacadon-text2 response_bis-card bis">
            ♻️ Plastique revalorisé
          </div>

          <div className="sacadon-text2 response_bis-card bis">
            🚫 Sacs jetables évités
          </div>

          <div className="sacadon-text2 response_bis-card bis">
            🔥 Moins d’émissions de CO₂
          </div>

          <div className="sacadon-text2 response_bis-card bis">
            🇫🇷 Production en circuit court
          </div>
        </div>

        {/* Colonne droite */}
        <div className="response_bis-column">
          <div className="sacadon-title response_bis-subtitle">AVEC DES DONNÉES</div>

          <div className="sacadon-text2 response_bis-card">
            + 800kg de plastique détourné des décharges
          </div>

          <div className="sacadon-text2 response_bis-card">
            ~50 000 sacs à usage unique remplacé
          </div>

          <div className="sacadon-text2 response_bis-card">
            Moins de transport, moins de production de plastique vierge
          </div>

          <div className="sacadon-text2 response_bis-card">
            Partenaires industriels français ou européens engagés
          </div>
        </div>

      </div>
    </div>
  );
}

