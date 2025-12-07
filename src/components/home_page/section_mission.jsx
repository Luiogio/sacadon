import { Link } from "react-router-dom";

import './section_mission.css';

import sacNotreMission from '../../assets/home_page/sac_notre_mission.png';

export default function MissionSection() {
  return (
    <div className="sacadon-section mission-section">
      <div className="sacadon-container">

        <div className="sacadon-text-content">
          <div className="sacadon-title">NOTRE MISSION</div>
          <div className="sacadon-text">
            Un sac, deux impacts : écologie & solidarité
          </div>
          <p className="sacadon-text2 mission-text">
            <b>SACADON</b> est une initiative qui transforme un simple
            geste d’achat en un acte doublement engagé. En proposant des sacs
            conçus à partir de plastique recyclé et en reversant une partie des
            bénéfices à des associations humanitaires, notre mission est de
            rendre chaque acte du quotidien plus <b>utile</b>, plus{" "}
            <b>humain</b>, plus <b>durable</b>.
          </p>
        </div>

        <div className="sacadon-image-content">
          <img src={sacNotreMission} alt="Sacadon" className="mission-image" />
          <Link to="/nos-sacs" className="need-more-button mission-button">
            En savoir plus +
          </Link>
        </div>
      </div>
    </div>
  );
}

