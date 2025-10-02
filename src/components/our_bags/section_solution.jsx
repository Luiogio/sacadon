import './section_solution.css';

import design from '../../assets/home_page/our_solution/design_responsable.png';
import ethique from '../../assets/home_page/our_solution/label_ethique.png';
import impact_solidaire from '../../assets/home_page/our_solution/impact_solidaire.png';

export default function SolutionSection() {
  return (
    <div className="solution">

      <h3 className="solution-title">NOTRE SOLUTION</h3>

      <div className="solution-cards">
        <div className="solution-card">
          <img src={design} alt="Design Responsable" />

          <div className="title-card">DESIGN RESPONSABLE</div>
          
          <div className="text-card">
            Des <b>sacs esthétiques</b> fabriqués en <b>plastique recyclé</b>
          </div>
        </div>

        <div className="solution-card">
          <img src={ethique} alt="Label Éthique" />

          <div className="title-card"><div>LABEL ÉTHIQUE</div></div>
          
          <div className="text-card">
            La possibilité d’apposer notre logo comme <b>label</b> sur d’autres <b>produits à impact</b>
          </div>
        </div>

        <div className="solution-card">
          <img src={impact_solidaire} alt="Impact Solidaire" />

          <div className="title-card"><div>IMPACT SOLIDAIRE</div></div>

          <div className="text-card">
            Des <b>dons</b> reversés à des <b>associations partenaires</b>
          </div>
        </div>
      </div>

      <div className="solution-button">
        <button>En savoir plus +</button>
      </div>
    </div>
  );
}

