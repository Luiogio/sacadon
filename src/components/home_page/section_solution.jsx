import { Link } from "react-router-dom";

import './section_solution.css';

import design from '../../assets/home_page/solution/design_responsable.png';
import ethique from '../../assets/home_page/solution/label_ethique.png';
import impact_solidaire from '../../assets/home_page/solution/impact_solidaire.png';

export default function SolutionSection() {
  return (
    <div className="solution-section">

      <div className="sacadon-title2">NOTRE SOLUTION</div>

      <div className="solution-cards">
        <div className="solution-card">
          <img src={design} alt="Design Responsable" />
          <div className="sacadon-text-card title-card">DESIGN RESPONSABLE</div>        
          <div className="text-card sacadon-text2">
            Des <b>sacs esthétiques</b> fabriqués en <b>plastique recyclé</b>
          </div>
        </div>

        <div className="solution-card">
          <img src={ethique} alt="Label Éthique" />
          <div className="sacadon-text-card title-card label-card">LABEL ÉTHIQUE</div>        
          <div className="text-card sacadon-text2">
            La possibilité d’apposer notre logo comme <b>label</b> sur d’autres <b>produits à impact</b>
          </div>
        </div>

        <div className="solution-card">
          <img src={impact_solidaire} alt="Impact Solidaire" />
          <div className="sacadon-text-card title-card label-card">IMPACT SOLIDAIRE</div>
          <div className="text-card sacadon-text2">
            Des <b>dons</b> reversés à des <b>associations partenaires</b>
          </div>
        </div>
      </div>

      <Link to="/solution" className="need-more-button mission-button">
        En savoir plus +
      </Link>
    </div>
  );
}
