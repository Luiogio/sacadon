import { Link } from "react-router-dom";
import "./section_caba_gamme.css";

import caba_gamme from "../../assets/bags/gamme_caba.png";
import v1 from "../../assets/bags/v1.png";
import v2 from "../../assets/bags/v2.png";
import v3 from "../../assets/bags/v3.png";
import v4 from "../../assets/bags/v4.png";

export default function CabaGammeSection() {
  return (
    <div className="soft-section">
      <div className="soft-title">
        <div className="sacadon-title2">GAMME CABA</div>
        <div className="sacadon-text soft-subtitle">
          Le sac généreux et engagé pour tout emporter
        </div>
      </div>

      {/* Sac Léger */}
      <div className="soft-content">
          <img src={caba_gamme} alt="Sac Gamme Caba" className="soft-image caba-image" />

        <div className="caba-card">
          <p className="sacadon-title2 soft-card-title">Le Généreux</p>
          
          <p className="sacadon-text2 caba-card-text">
            Un sac cabas <b>solide</b>, <b>réutilisable</b> et <b>stylé.</b> <br />
            Il vous suit au marché, au travail, à la plage… <br />
            Fabriqué à partir de <b>plastique recyclé</b>, 
            il soutient aussi une cause à chaque achat.
            <br />
            <br />
            <b>Détails techniques :</b>
            <br />
            <br />
            📏 Dimensions : 45 x 40 x 20 cm
            <br />
            ♻️ Matière : plastique recyclé (RPET)
            <br />
            🧼 Entretien : lavable en machine à 30°C
          </p>

          <p className="caba-card-text2">
            💝 Impact solidaire : 1 € reversés à l’association partenaire
          </p>          
       </div>
      </div>

      {/* Différents modèles du sac */}
      <div className="model-list">
        {/* Bag V1 */}
        <div className="model-soft-card">
          <div className="model">
            <img src={v1} alt="V1 du Sac" className="bag-model" />
          </div>
        
          <div className="bag-button">
            <Link>ça m'interesse</Link>
          </div>
        </div>

        {/* Bag v2 */}
        <div className="model-soft -card">
          <div className="model">
            <img src={v2} alt="v2 du Sac" className="bag-model" />
          </div>
        
          <div className="bag-button">
            <Link>ça m'interesse</Link>
          </div>
        </div>

        {/* Bag v3 */}
        <div className="model-soft -card">
          <div className="model">
            <img src={v3} alt="v3 du Sac" className="bag-model" />
          </div>
        
          <div className="bag-button">
            <Link>ça m'interesse</Link>
          </div>
        </div>

        {/* Bag v4 */}
        <div className="model-soft -card">
          <div className="model">
            <img src={v4} alt="v4 du Sac" className="bag-model" />
          </div>
        
          <div className="bag-button">
            <Link>ça m'interesse</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

