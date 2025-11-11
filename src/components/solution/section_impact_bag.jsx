import { Link } from "react-router-dom";

import './section_impact_bag.css';

export default function ImpactBag() {
  return (
    <div className="impact-section">
      <div className="impact-titre">Un sac à impact écologique</div>

      <p className="impact-soustitre">
        Nos sacs sont fabriqués à partir de plastique PE recyclé, issu du tri
        sélectif des ménages.
      </p>

      <div className="impact-avantages">
        <div className="carte">✔ Réduction des déchets</div>
        <div className="carte">✔ Moins de pétrole utilisé</div>
        <div className="carte">✔ Baisse des émissions de CO₂</div>
        <div className="carte">✔ Soutien à une économie circulaire locale</div>
      </div>

      <Link to="/solution" className="need-more-button impact-button">
        Découvrir l’impact environnemental
      </Link>
    </div>
  );
}

