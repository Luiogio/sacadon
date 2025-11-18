import { Link } from "react-router-dom";

import origine from '../../assets/our_history/origine_engagée.png';

import './section_label.css';

export default function Label() {
  return (
    <div className="label-section">
      
      <h2 className="label-titre title-sac">Un modèle duplicable et labelisable</h2>
      <div className="label-subsection">

        <img src={origine} alt="Origine Engagée"/>

        <div className="label-contenu">
          <div className="text-sac">SACADON, c’est aussi bientôt un label</div>

          <p className="label-texte">
            Toute entreprise ou marque qui respecte nos <b>critères</b>
            (<b>matière recyclée</b> + <b>part du prix reversée</b>) pourra apposer le
            <b>label SACADON</b> sur ses produits.
            <br />
            <span>👉</span> L’impact se multiplie.
          </p>

          <div className="button">
            <Link to="/solution" className="need-more-button">
              Notre histoire
            </Link>
            <Link to="/solution" className="need-more-button">
              Nous rejoindre
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

