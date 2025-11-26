import { Link } from "react-router-dom";
import "./section_soft_gamme.css";

import soft_gamme from "../../assets/our_bags/gamme_legere.png";
import v1 from "../../assets/our_bags/v1.png";
import v3 from "../../assets/our_bags/v3.png";
import v5 from "../../assets/our_bags/v5.png";
import v6 from "../../assets/our_bags/v6.png";

export default function SoftGammeSection() {
  return (
    <div className="soft-section">

      <div className="title-soft">
        <div className="title">GAMME LÉGÈRE</div>
        <h2 className="subtitle">
          Simple, pliable, réutilisable : pour les petits trajets du quotidien
        </h2>
      </div>

      {/* Sac Léger */}
      <div className="soft-bag-content">
        <img src={soft_gamme} alt="Sac Gamme Légère" className="soft-image" />

        <div className="soft-bag-card">
          <p className="soft-bag-card-title">Le P'tit geste</p>
          
          <p className="soft-bag-card-text">
            Léger, pliable, réutilisable : <br />
            <b> le sac à bretelles réinventé. </b> <br />
            Fabriqué à partir de <b>plastique recyclé</b>, 
            il remplace vos sacs jetables à chaque sortie.
            <br />
            <br />
            <b>Détails techniques :</b>
            <br />
            <br />
            📏 Dimensions : 30 x 50 cm
            <br />
            ♻️ Matière : plastique recyclé (RPET)
          </p>

          <p className="soft-bag-card-text2">
            💝 Impact solidaire : 0,30 € reversés à l’association partenaire
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

