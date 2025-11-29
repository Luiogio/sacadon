import { Link } from "react-router-dom";
import './section_impacts.css';

import impactsPicture from '../../assets/impacts/impacts_picture.png';

export default function Impacts() {
  return (
    <div className="impacts-container">

      <div className="impacts-text-content">
        <div className="sacadon-title">IMPACTS</div>
        <div className="sacadon-text">
          Agir pour la planète, et pour les humains.
        </div>
        <p className="sacadon-text2">
          Derrière chaque <b>sac SACADON</b>, il y a bien plus qu’un objet du quotidien.<br />
          Il y a une <b>action concrète</b>, <b>mesurable</b> et <b>durable</b>, à la fois <b>écologique, 
          solidaire et éducative.</b><br />
          Nous avons conçu ce projet pour qu’un geste simple ait un effet puissant.
        </p>

        <div className="impacts-filtres">
            <Link to="/impact-ecologique" className="need-more-button">
              Impact Ecologique
            </Link>
            <Link to="/impact-humanitaire" className="need-more-button">
              Impact Humanitaire
            </Link>
            <Link to="/information-pedagogie" className="need-more-button">
              Information & Pédagogie
            </Link>
        </div>
      </div>

      <div className="impacts-image-content">
        <img src={impactsPicture} alt="Sacadon" className="impacts-image" />
      </div>
    </div>
  );
}

