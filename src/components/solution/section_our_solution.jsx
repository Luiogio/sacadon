import { Link } from "react-router-dom";

import './section_our_solution.css';

import sacNotreMission from '../../assets/home_page/sac_notre_mission.png';

export default function OurSolutionSection() {
  return (
    <div className="mission-section">
      <div className="mission-container">

        <div className="mission-text-content">
          <h1 className="mission-title">NOTRE MISSION</h1>
          <h2 className="mission-subtitle">
            Un sac, deux impacts : écologie & solidarité
          </h2>
          <p className="mission-text">
            <b>SACADON</b> est une initiative qui transforme un simple
            geste d’achat en un acte doublement engagé. En proposant des sacs
            conçus à partir de plastique recyclé et en reversant une partie des
            bénéfices à des associations humanitaires, notre mission est de
            rendre chaque acte du quotidien plus <b>utile</b>, plus{" "}
            <b>humain</b>, plus <b>durable</b>.
          </p>
        </div>

        <div className="mission-image-content">
          <img src={sacNotreMission} alt="Sacadon" className="mission-image" />
          <Link to="/nos-sacs" className="need-more-button">
            En savoir plus +
          </Link>
        </div>
      </div>
    </div>
  );
}

