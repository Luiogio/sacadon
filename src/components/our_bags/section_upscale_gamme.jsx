import { Link } from "react-router-dom";
import "./section_upscale_gamme.css";

import upscale_gamme from "../../assets/our_bags/gamme_upscale.png";
import v1 from "../../assets/our_bags/v1.png";
import v3 from "../../assets/our_bags/v3.png";
import v5 from "../../assets/our_bags/v5.png";
import v6 from "../../assets/our_bags/v6.png";

export default function UpscaleGammeSection() {
  return (
    <div className="soft-section">

      <div className="title-soft">
        <div className="title">HAUT DE GAMME</div>
        <h2 className="subtitle">
          L’élégance utile, le geste solidaire
        </h2>
      </div>

      {/* Sac Léger */}
      <div className="soft-bag-content">
          <img src={upscale_gamme} alt="Sac Haut de Gamme" className="upscale-image" />

        <div className="upscale-bag-card">
          <p className="upscale-bag-card-title">Le Signature</p>
          
          <p className="upscale-bag-card-text">
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

          <p className="upscale-bag-card-text2">
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

