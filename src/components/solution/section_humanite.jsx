import { Link } from "react-router-dom";

import './section_humanite.css';

export default function Humanite() {
  return (
    <div className="humanite-section">
      <div className="humanite-titre title-sac">Un geste qui soutient l’humanité</div>

      <div className="humanite-contenu">
        <div className="texte-gauche">
          <p className="texte-principal text-sac">
            Chaque sac vendu inclut un don monétaire reversé à des ONG et
            associations partenaires.
          </p>
          <p className="texte-secondaire text-sac2">
            Ces dons financent des actions concrètes :
          </p>
        </div>

        <div className="actions-droite">
          <div className="card-humanite card-sac">LUTTE CONTRE LA FAIM</div>
          <div className="card-humanite card-sac">ÉDUCATION DES ENFANTS</div>
          <div className="card-humanite card-sac">SOUTIEN AUX PERSONNES HANDICAPÉES</div>
        </div>
      </div>

      <Link to="/solution" className="need-more-button humanite-button">
        Découvrir les associations partenaires
      </Link>
    </div>
  );
}

