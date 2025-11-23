import './section_birth.css';

import birth from '../../assets/our_history/birth.png';

export default function Birth() {
  return (
    <div className="origine-container">
      <div className="origine-text-card birth-card">
        <div className="origine-title sacadon-title2">La naissance du “produit partage”</div>

        <p className="origine-paragraph sacadon-text2">
          Avec le SAC À SAPIN, un principe est posé :
          <li><b>✅ Un produit utile, de qualité</b></li>
          <li><b>➕ Un don inclus au profit d’une cause humanitaire</b></li>
        </p>

        <p className="origine-paragraph sacadon-text2">
          Cette idée devient la pierre fondatrice du projet SACADON :<br/>
          <b>Faire de chaque achat un geste engagé. Un produit à double impact.</b>
        </p>
      </div>

      <img src={birth} alt="Origine Engagée" className="origine-image" />
    </div>
  );
}

