import { Link } from "react-router-dom";

import './section_impact_bag.css';

export default function ImpactBag() {
  return (
    <div className="impact-section">
      <div className="impact-titre title">Un sac à impact écologique</div>

      <p className="impact-soustitre text-sac">
        Nos sacs sont fabriqués à partir de plastique PE recyclé, issu du tri
        sélectif des ménages.
      </p>

      <div className="impact-avantages">
        <div className="card-avantages">✔ Réduction des déchets</div>
        <div className="card-avantages">✔ Moins de pétrole utilisé</div>
        <div className="card-avantages">✔ Baisse des émissions de CO₂</div>
        <div className="card-avantages">✔ Soutien à une économie circulaire locale</div>
      </div>

      <Link to="/solution" className="need-more-button impact-button">
        Découvrir l’impact environnemental
      </Link>
    </div>
  );
}

