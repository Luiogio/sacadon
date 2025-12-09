import { Link } from "react-router-dom";
import "./section_soft_gamme.css";

import soft_gamme from "../../assets/bags/gamme_legere.png";
import v1 from "../../assets/bags/v1.png";
import v2 from "../../assets/bags/v2.png";
import v3 from "../../assets/bags/v3.png";
import v4 from "../../assets/bags/v4.png";

export default function SoftGammeSection() {
  return (
    <div className="soft-section">
      <div className="soft-title">
        <div className="sacadon-title2">GAMME LÉGÈRE</div>
        <div className="sacadon-text soft-subtitle">
          Simple, pliable, réutilisable : pour les petits trajets du quotidien
        </div>
      </div>

      <div className="soft-content">
        <img src={soft_gamme} alt="Sac Gamme Légère" className="soft-image" />

        <div className="soft-card">
          <p className="sacadon-title2 soft-card-title">Le P'tit geste</p>
          
          <p className="sacadon-text2 soft-card-text">
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

          <p className="soft-card-text2">
            💝 Impact solidaire : 0,30 € reversés à l’association partenaire
          </p>          
       </div>
      </div>

      {/* Différents modèles du sac */}
      <div className="model-list">
        {/* Bag V1 */}
        <div className="model-soft-card">
          <div className="model">
            <img src={v1} alt="V1 du Sac" />
          </div>
        
          <div className="bag-button">
            <Link>ça m'interesse</Link>
          </div>
        </div>

        {/* Bag V2 */}
        <div className="model-soft-card">
          <div className="model">
            <img src={v2} alt="v2 du Sac" />
          </div>
        
          <div className="bag-button">
            <Link>ça m'interesse</Link>
          </div>
        </div>

        {/* Bag v2 */}
        <div className="model-soft-card">
          <div className="model">
            <img src={v3} alt="v3 du Sac" />
          </div>
        
          <div className="bag-button">
            <Link>ça m'interesse</Link>
          </div>
        </div>

        {/* Bag V4 */}
        <div className="model-soft-card">
          <div className="model">
            <img src={v4} alt="v4 du Sac" />
          </div>
        
          <div className="bag-button">
            <Link>ça m'interesse</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

