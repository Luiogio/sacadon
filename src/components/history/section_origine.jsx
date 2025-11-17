import { Link } from "react-router-dom";

import './section_origine.css';

export default function Origine() {
  return (
    <div className="origine-container">
      <div className="origine-image-wrapper">
        {/* <img src={imageLeclerc} alt="Magasin Leclerc" className="origine-image" /> */}
      </div>

      <div className="origine-text-card">
        <h2 className="origine-title">Une origine engagée</h2>

        <p className="origine-paragraph">
          🌱 Août 1993. Sortie d’une réunion avec Michel-Édouard Leclerc.
        </p>

        <p className="origine-paragraph">
          Le SACADON n’existe pas encore, mais l’enjeu est là : <br />
          <strong>trop de plastique, trop de gaspillage, trop peu de sens.</strong>
        </p>

        <p className="origine-paragraph">
          Cette époque marque un tournant : la fin des sacs gratuits,
          l’arrivée du cabas payant, et surtout, l’émergence d’un
          nouveau modèle de consommation responsable.
        </p>
      </div>
    </div>
  );
}

