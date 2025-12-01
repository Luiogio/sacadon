import "../impact_info_peda/section_actu.css";

import { Link } from "react-router-dom";

import linkedin from "../../assets/info_peda/linkedin.png";
import insta from "../../assets/info_peda/insta.png";
import fb from "../../assets/info_peda/fb.png";

export default function SectionNetwork() {
  return (
    <div className="actu-section">
      <div className="partners-title sacadon-title2">
        REJOIGNEZ-NOUS SUR LES RÉSEAUX OU POUR DE VRAI
      </div>
      <p className="partners-subtitle sacadon-text">
        Pour découvrir toutes nos actualités et nos meilleurs conseils
      </p>

      <div className="actu-reseau">
          <img src={linkedin} />
          <img src={insta} />
          <img src={fb} />
      </div>
      
      <div className="actu-button">
        <Link to="/solution" className="need-more-button">
          DEVENIR PARTENAIRE
        </Link>
      </div>
    </div>
  );
}

