import { Link } from "react-router-dom";
import './section_impacts.css';

import impactsPicture from '../../assets/impacts/impacts_picture.png';

export default function Impacts() {
  return (
    <div className="impacts-section">
      <div className="impacts-container">

        <div className="impacts-text-content">
          <h1 className="mission-title">IMPACTS</h1>
          <h2 className="mission-subtitle">
            Agir pour la planète, et pour les humains.
          </h2>
          <p className="mission-text">
            Derrière chaque <b>sac SACADON</b>, il y a bien plus qu’un objet du quotidien.<br/>
            Il y a une <b>action concrète</b>, <b>mesurable</b> et <b>durable</b>, à la fois <b>écologique, 
            solidaire et éducative.</b><br/>
            Nous avons conçu ce projet pour qu’un geste simple ait un effet puissant.
          </p>

          <div className="impacts-filtres">
              <Link  className="impacts-button">
                Impact écologique
              </Link>

              <Link className="impacts-button">
                Impact humanitaire
              </Link>

              <Link className="impacts-button">
                Information & pédagogie
              </Link>
          </div>
        </div>

        <div className="impacts-image-content">
          <img src={impactsPicture} alt="Sacadon" className="impacts-image" />
        </div>
      </div>
    </div>
  );
}

