import { Link } from "react-router-dom";
import "./section_upscale_gamme.css";

import upscale_gamme from "../../assets/bags/gamme_upscale.png";
import v1 from "../../assets/bags/v1.png";
import v2 from "../../assets/bags/v2.png";
import v3 from "../../assets/bags/v3.png";
import v4 from "../../assets/bags/v4.png";

export default function UpscaleGammeSection() {
  return (
    <div className="soft-section">
      <div className="soft-title">
        <div className="sacadon-title2">HAUT DE GAMME</div>
        <div className="sacadon-text soft-subtitle">
          L’élégance utile, le geste solidaire
        </div>
      </div>

      {/* Sac Léger */}
      <div className="soft-content">
          <img src={upscale_gamme} alt="Sac Haut de Gamme" className="soft-image upscale-image" />

        <div className="upscale-card">
          <p className="sacadon-title2 upscale-card-title">Le Signature</p>
          
          <p className="sacadon-text2 upscale-card-text">
            Conçu pour <b>durer</b>, pensé pour vous accompagner avec <b>style</b>, 
            il associe <b>design sobre, finitions soignées et impact positif.</b><br />
            Il vous suit au marché, au travail, à la plage… <br />
            Fabriqué à partir de plastique recyclé et revalorisé, 
            il incarne une nouvelle façon de consommer : <b>utile, belle et solidaire.</b>
            <br />
            <br />
            <b>Détails techniques :</b>
            <br />
            <br />
            📏 Dimensions : 50 x 35 x 18 cm
            <br />
            🧵 Finitions : Coutures renforcées, intérieur doublé
            <br />
            🧼 Entretien : lavable en machine à 30°C
          </p>

          <p className="upscale-card-text2">
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
        <div className="model-soft-card">
          <div className="model">
            <img src={v2} alt="v2 du Sac" className="bag-model" />
          </div>
        
          <div className="bag-button">
            <Link>ça m'interesse</Link>
          </div>
        </div>

        {/* Bag v3 */}
        <div className="model-soft-card">
          <div className="model">
            <img src={v3} alt="v3 du Sac" className="bag-model" />
          </div>
        
          <div className="bag-button">
            <Link>ça m'interesse</Link>
          </div>
        </div>

        {/* Bag v4 */}
        <div className="model-soft-card">
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

