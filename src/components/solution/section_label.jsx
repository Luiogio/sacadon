import { Link } from "react-router-dom";

import label from '../../assets/our_solution/label_project.png';

import './section_label.css';

export default function Label() {
  return (
    <div className="label-section">
      <div className="label-titre sacadon-title2">Un modèle duplicable et labelisable</div>

      <div className="label-subsection">
        <img src={label} alt="Cycle de vie"/>

        <div className="label-contenu">
          <div className="sacadon-text">SACADON, c’est aussi bientôt un label</div>

          <p className="sacadon-text2">
            Toute entreprise ou marque qui respecte nos <b>critères</b>
            (<b>matière recyclée</b> + <b>part du prix reversée</b>) pourra apposer le
            <b>label SACADON</b> sur ses produits.
            <br />
            <span>👉</span> L’impact se multiplie.
          </p>

          <div className="button">
            <Link to="/histoire" className="need-more-button">
              Notre histoire
            </Link>
            <Link to="/nous-rejoindre" className="need-more-button">
              Nous rejoindre
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

