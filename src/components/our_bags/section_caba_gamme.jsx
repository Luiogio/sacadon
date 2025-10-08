import { Link } from "react-router-dom";
import "./section_caba_gamme.css";

import caba_gamme from "../../assets/our_bags/gamme_caba.png";
import v1 from "../../assets/our_bags/v1.png";
import v3 from "../../assets/our_bags/v3.png";
import v5 from "../../assets/our_bags/v5.png";
import v6 from "../../assets/our_bags/v6.png";

export default function CabaGammeSection() {
  return (
    <div className="soft-section">

      <div className="title-soft">
        <div className="title">GAMME CABA</div>
        <h2 className="subtitle">
          Le sac généreux et engagé pour tout emporter
        </h2>
      </div>

      {/* Sac Léger */}
      <div className="soft-bag-content">
          <img src={caba_gamme} alt="Sac Gamme Caba" className="soft-image" />

        <div className="caba-bag-card">
          <p className="caba-bag-card-title">Le Généreux</p>
          
          <p className="caba-bag-card-text">
            Un sac cabas <b>solide</b>, <b>réutilisable</b> et <b>stylé.</b> <br/>
            Il vous suit au marché, au travail, à la plage… <br/>
            Fabriqué à partir de <b>plastique recyclé</b>, 
            il soutient aussi une cause à chaque achat.
            <br/>
            <br/>
            <b>Détails techniques :</b>
            <br/>
            <br/>
            📏 Dimensions : 45 x 40 x 20 cm
            <br/>
            ♻️ Matière : plastique recyclé (RPET)
            <br/>
            🧼 Entretien : lavable en machine à 30°C
          </p>

          <p className="caba-bag-card-text2">
            💝 Impact solidaire : 1 € reversés à l’association partenaire
          </p>          
       </div>
      </div>

      {/* Différents modèles du sac */}
      <div className="model-list">

        {/* Bag V1 */}
        <div className="model-soft-bag-card">
          <div className="model">
            <img src={v1} alt="V1 du Sac" className="bag-model" />
          </div>
        
          <div className="bag-button">
            <Link>ça m'interesse</Link>
          </div>
        </div>

        {/* Bag V3 */}
        <div className="model-soft-bag-card">
          <div className="model">
            <img src={v3} alt="V3 du Sac" className="bag-model" />
          </div>
        
          <div className="bag-button">
            <Link>ça m'interesse</Link>
          </div>
        </div>

        {/* Bag V5 */}
        <div className="model-soft-bag-card">
          <div className="model">
            <img src={v5} alt="V5 du Sac" className="bag-model" />
          </div>
        
          <div className="bag-button">
            <Link>ça m'interesse</Link>
          </div>
        </div>

        {/* Bag V6 */}
        <div className="model-soft-bag-card">
          <div className="model">
            <img src={v6} alt="V6 du Sac" className="bag-model" />
          </div>
        
          <div className="bag-button">
            <Link>ça m'interesse</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

