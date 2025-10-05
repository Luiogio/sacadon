import './section_our_bags.css';

import sacNotreMission from '../../assets/home_page/sac_notre_mission.png';

export default function OurBagsSection() {
  return (
    <div className="mission-section">
      <div className="mission-container">

        <div className="mission-text-content">
          <h1 className="mission-title">NOS SACS</h1>
          <h2 className="mission-subtitle">
            Un sac, deux impacts : <span>écologie & solidarité</span>
          </h2>
          <p className="mission-text">
            <strong>SACADON</strong> est une initiative qui transforme un simple
            geste d’achat en un acte doublement engagé. En proposant des sacs
            conçus à partir de plastique recyclé et en reversant une partie des
            bénéfices à des associations humanitaires, notre mission est de
            rendre chaque acte du quotidien plus <strong>utile</strong>, plus{" "}
            <strong>humain</strong>, plus <strong>durable</strong>.
          </p>
        </div>

        <div className="mission-image-content">
          <img src={sacNotreMission} alt="Sacadon" className="mission-image" />
          <a href="#mission" className="mission-button">
            En savoir plus +
          </a>
        </div>
      </div>
    </div>
  );
}

