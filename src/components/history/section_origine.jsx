import './section_origine.css';

import origine from '../../assets/our_history/origine_engagée.png';

export default function Origine() {
  return (
    <div className="origine-container">
      <img src={origine} alt="Origine Engagée" className="origine-image" />

      <div className="origine-text-card">
        <div className="origine-title sacadon-title2">Une origine engagée</div>

        <p className="origine-paragraph sacadon-text2">
          🌱 Août 1993. Sortie d’une réunion avec Michel-Édouard Leclerc.
        </p>

        <p className="origine-paragraph sacadon-text2">
          Le SACADON n’existe pas encore, mais l’enjeu est là : <br />
          <b>trop de plastique, trop de gaspillage, trop peu de sens.</b>
        </p>

        <p className="origine-paragraph sacadon-text2">
          Cette époque marque un tournant : la fin des sacs gratuits,
          l’arrivée du cabas payant, et surtout, l’émergence d’un
          nouveau modèle de consommation responsable.
        </p>
      </div>
    </div>
  );
}

