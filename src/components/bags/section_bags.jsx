import { Link } from "react-router-dom";
import './section_bags.css';

import sacNotreMission from '../../assets/home_page/sac_notre_mission.png';

export default function BagsSection() {
  return (
    <div className="bags-section">
      <div className="bags-text-content">
        <div className="sacadon-title bags-title">NOS SACS</div>
        <div className="sacadon-text bags-subtitle">
          Un sac qui fait deux fois plus de bien : à la planète et aux humains.
        </div>
        <p className="sacadon-text2 bags-text">
          Découvrez notre collection de sacs <b>éco-conçus</b>, pensés pour <b>durer</b> et <b>agir</b>. 
          Chaque <b>sac SACADON</b> est fabriqué à partir de <b>plastique recyclé</b> et contribue directement
            à des <b>actions de solidarité</b> grâce à notre système de dons intégrés. 
          En achetant un sac, vous participez à une <b>économie circulaire et engagée.</b>
        </p>

        {/* <div className="bags-link">
          <div  className="bags-filtre">
            Filtres
          </div>

          <div className="bags-filtres">
            <Link href="#bags" className="bags-button">
              <div>Sac de transport</div>
            </Link>

            <Link href="#bags" className="bags-button">
              <div>Sac poubelle</div>
            </Link>
          </div>
        </div> */}
      </div>

      <div className="bags-image-content">
        <img src={sacNotreMission} alt="Sacadon" />
        {/* <Link href="#bags" className="bags-mode">
          Le sac du moment
        </Link> */}
      </div>
    </div>
  );
}

