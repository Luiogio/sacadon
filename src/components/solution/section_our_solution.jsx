import { Link } from "react-router-dom";

import './section_our_solution.css';

import cycle from '../../assets/our_solution/cycle-de-vie.png';

export default function OurSolutionSection() {
  return (
    <div className="our-solution-section">
      <div className="titre">NOTRE SOLUTION</div>

      <h3 className="soustitre">
        Notre solution : une réponse simple à des enjeux complexes
      </h3>

      {/* Texte explicatif */}
      <div className="texte-section">
        <p>
          <strong>SACADON</strong> n’est pas une collection de sacs comme les
          autres. C’est une solution concrète à deux urgences :{" "}
          <strong>la pollution plastique</strong> &{" "}
          <strong>les inégalités humaines</strong>.
        </p>
        <p>
          Comment ? En créant un objet{" "}
          <strong>réutilisable, recyclé, solidaire</strong>, et en intégrant{" "}
          <strong>un don</strong> dans son prix de vente.
        </p>
        <p>
          On appelle ça : <strong>un produit-partage.</strong>
        </p>
      </div>

      {/* Image du cycle de vie */}
      <div className="image-container">
        <img src={cycle} alt="Cycle de vie" className="image-cycle" />
      </div>
    </div>
  );
}

