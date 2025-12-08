import './section_concret_idea.css';

import tshirt from '../../assets/our_history/t-shirt.png';

export default function Concret() {
  return (
    <div className="origine-container">
      <img src={tshirt} alt="Origine Engagée" className="origine-image concret-img" />

      <div className="origine-text-card concret-card">
        <div className="concret-title sacadon-title2">De l’idée à la concrétisation</div>

        <p className="origine-paragraph sacadon-text2">
          Il faudra 20 ans, une rencontre, un réseau, une équipe, 
          et une détermination constante pour que SACADON devienne une réalité.
        </p>

        <p className="origine-paragraph sacadon-text2">
          Aujourd’hui, c’est un projet porté par une association indépendante, 
          une vision collective, et une volonté simple : <br />
          <b>Agir pour l’environnement et pour l’humanité, en un seul geste.</b>
        </p>
      </div>
    </div>
  );
}

