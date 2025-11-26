import { Link } from "react-router-dom";

import "./section_symbole.css";

import symbole from "../../assets/impact_ecological/symbole.png";

export default function SectionSymbole() {
  return (
    <div className="symbole-container">
      <img src={symbole} alt="Sacadon porté" className="symbole-image" />

      <div>
        <div className="symbole-title sacadon-title2">UNE ALTERNATIVE<br />SYMBOLIQUE</div>

        <p className="sacadon-text2">
          <b>Le sac plastique</b> est devenu le <b>symbole mondial du déchet.</b><br />
          En le transformant en objet utile, beau, solidaire,<br />
          <b>SACADON redonne du sens</b> à un symbole perdu.
        </p>

        <Link className="symbole-button need-more-button">Découvrir nos sacs</Link>
      </div>

    </div>
  );
}

