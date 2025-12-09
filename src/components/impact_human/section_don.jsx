import "./section_don.css";

import { Link } from "react-router-dom";

import ptitGeste from "../../assets/impact_human/ptit_geste.png";
import genereux from "../../assets/impact_human/genereux.png";
import signature from "../../assets/impact_human/signature.png";
import don from "../../assets/impact_human/don.jpeg";

export default function SectionDon() {
  return (
    <div className="don-container">

      {/* LEFT COLUMN */}
      <div className="don-left">
        <div className="don-card sacadon-card">
          <img src={ptitGeste} alt="Le P'tit Geste" className="don-img" />
          <div className="don-info">
            <div className="don-title sacadon-title2">Le P'tit geste</div>
            <p className="don-amount sacadon-title">= 30 centimes reversés</p>
            <Link to="/nos-sacs" className="need-more-button don-button">Je découvre</Link>
          </div>
        </div>

        <div className="don-card sacadon-card">
          <img src={genereux} alt="Le Généreux" className="don-img" />
          <div className="don-info">
            <div className="don-title sacadon-title2">Le Généreux</div>
            <p className="don-amount sacadon-title">= 1€ reversé</p>
            <Link to="/nos-sacs" className="need-more-button">Je découvre</Link>
          </div>
        </div>

        <div className="don-card sacadon-card">
          <img src={signature} alt="Le Signature" className="don-img" />
          <div className="don-info">
            <div className="don-title sacadon-title2">Le Signature</div>
            <p className="don-amount sacadon-title">= 1,50€ reversé</p>
            <Link to="/nos-sacs" className="need-more-button">Je découvre</Link>
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN */}
      <div className="don-right">
        <div className="don-main-title sacadon-title2">UN ACHAT = UN DON</div>
        <p className="don-text sacadon-text2">
          À chaque sac SACADON acheté, une partie du prix est directement reversée à une association via notre structure partenaire.
        </p>

        <ul className="don-list sacadon-text2">
          <li>👜 Le P’tit Geste : 0,30€</li>
          <li>🛍 Le Généreux : 1 €</li>
          <li>💼 Le Signature : 1,50 €</li>
        </ul>

        <p className="don-text sacadon-text2">
          ✔️ Le don est intégré et transparent. Pas besoin d'y penser : vous donnez déjà, en achetant.
        </p>

        <img src={don} alt="Distribution" className="don-final-img" />
      </div>
    </div>
  );
}

