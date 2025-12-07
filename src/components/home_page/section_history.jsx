import { Link } from "react-router-dom";

import './section_history.css';

import history_picture from '../../assets/home_page/history_picture.png';
import logo_S from '../../assets/home_page/logo_S.png';

export default function HistorySection() {
  return (
    <div className="history-section">
      <div className="history-container">

        <div className="history-image">
          <img src={history_picture} alt="Notre histoire"  className="image"/>
          <img src={logo_S} alt="Logo S"  className="history-logo"/>
          
          <Link to="/histoire" className="need-more-button">
            En savoir plus +
          </Link>
        </div>

        <div className="history-content">
          <div className="sacadon-title2 history-title">NOTRE HISTOIRE</div>

          <div className="sacadon-text history-subtitle">
            Une idée simple au service de tous : <br />
            Former, informer, faire participer
          </div>

          <div className="sacadon-text2 history-text">
            Derrière SACADON, il y a l’histoire d’un <b>entrepreneur engagé</b>
            (fondateur du <a href='https://www.handicap-international.fr/fr/actualites/sac-a-sapin' target="_blank">Sac à Sapin</a>),
            d’une volonté <b>familiale et intergénérationnelle</b> de répondre à deux urgences : la
            <b> pollution plastique</b> et la <b>solidarité</b>.
            <br />
            Le projet est porté par des jeunes créatifs et militants, pour redonner du sens à la consommation.
          </div>
        </div>
      </div>
    </div>
  );
}

