import "./section_actu.css";

import { Link } from "react-router-dom";

import linkedin from "../../assets/info_peda/linkedin.png";
import insta from "../../assets/info_peda/insta.png";
import fb from "../../assets/info_peda/fb.png";

export default function SectionActu() {
  return (
    <div className="actu-section">
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

