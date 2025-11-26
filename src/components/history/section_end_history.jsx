import { Link } from "react-router-dom";

import './section_end_history.css';

export default function End() {
  return (
    <div className="end-container">
      <p className="end-quote sacadon-text">
        « Le SACADON est un symbole. Il prouve qu’un objet du quotidien<br />
        peut devenir un levier de changement. »<br />
        — Vital Bottura, Fondateur
      </p>

      <div className="end-title sacadon-title2">Envie d’agir avec nous ?</div>
      <p className="end-subtitle sacadon-text">
        Découvrez notre solution ou rejoignez l’aventure !
      </p>

      <div className="end-buttons">
        <Link to="/solution" className="need-more-button end-btn">
          Nous contacter
        </Link>
        <Link to="/solution" className="need-more-button end-btn">
          Nous solution
        </Link>
        <Link to="/solution" className="need-more-button end-btn">
          Nous rejoindre
        </Link>
      </div>
    </div>
  );
}

