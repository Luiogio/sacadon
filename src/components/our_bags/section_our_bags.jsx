import { Link } from "react-router-dom";
import './section_our_bags.css';

import sacNotreMission from '../../assets/home_page/sac_notre_mission.png';

export default function OurBagsSection() {
  return (
    <div className="our-bags-section">
      <div className="our-bags-container">

        <div className="our-bags-text-content">
          <h1 className="our-bags-title">NOS SACS</h1>
          <h2 className="our-bags-subtitle">
            Un sac qui fait deux fois plus de bien : à la planète et aux humains.
          </h2>
          <p className="our-bags-text">
            Découvrez notre collection de sacs <b>éco-conçus</b>, pensés pour <b>durer</b> et <b>agir</b>. 
            Chaque <b>sac SACADON</b> est fabriqué à partir de <b>plastique recyclé</b> et contribue directement
             à des <b>actions de solidarité</b> grâce à notre système de dons intégrés. 
            En achetant un sac, vous participez à une <b>économie circulaire et engagée.</b>
          </p>

          <div className="our-bags-link">
            <div  className="our-bags-filtre">
              Filtres
            </div>

            <div className="our-bags-filtres">
              <Link href="#our-bags" className="our-bags-button">
                <div>Sac de transport</div>
              </Link>

              <Link href="#our-bags" className="our-bags-button">
                <div>Sac poubelle</div>
              </Link>
            </div>
          </div>
        </div>

        <div className="our-bags-image-content">
          <img src={sacNotreMission} alt="Sacadon" className="our-bags-image" />
          <Link href="#our-bags" className="our-bags-mode">
            Le sac du moment
          </Link>
        </div>
      </div>
    </div>
  );
}

