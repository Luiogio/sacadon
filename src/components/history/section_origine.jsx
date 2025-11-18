import './section_origine.css';

import origine from '../../assets/our_history/origine_engagée.png';

export default function Origine() {
  return (
    <div className="origine-container">
      <div className="origine-image-wrapper">
        <img src={origine} alt="O rigine Engagée" className="origine-image" />
      </div>

      <div className="origine-text-card">
        <div className="origine-title title-sac">Une origine engagée</div>

        <p className="origine-paragraph text-sac2">
          🌱 Août 1993. Sortie d’une réunion avec Michel-Édouard Leclerc.
        </p>

        <p className="origine-paragraph text-sac2">
          Le SACADON n’existe pas encore, mais l’enjeu est là : <br />
          <strong>trop de plastique, trop de gaspillage, trop peu de sens.</strong>
        </p>

        <p className="origine-paragraph text-sac2">
          Cette époque marque un tournant : la fin des sacs gratuits,
          l’arrivée du cabas payant, et surtout, l’émergence d’un
          nouveau modèle de consommation responsable.
        </p>
      </div>
    </div>
  );
}

