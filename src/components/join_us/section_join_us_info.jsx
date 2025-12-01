import { Link } from "react-router-dom";

import './section_join_us_info.css';

import impactsPicture from '../../assets/impacts/impacts_picture.png';

export default function JoinUsInfo() {
  return (
    <div className="impacts-container">

      <div className="impacts-text-content">
        <div className="sacadon-title">NOUS REJOINDRE</div>
        <div className="sacadon-text">SACADON, c’est une mission collective</div>

        <p className="sacadon-text2">
          <b>🌍 Recycler, donner, sensibiliser, inspirer.</b>
        </p>

        <p className="sacadon-text2">
          Et tout ça, <b>on ne peut pas le faire sans vous.</b>
          Que vous soyez étudiant·e, pro engagé·e, parent curieux·se, ou simple humain·e qui<br />
          veut aider : <b>vous pouvez rejoindre pleinement le mouvement.</b>
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

