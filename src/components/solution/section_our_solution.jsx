import './section_our_solution.css';

import cycle from '../../assets/our_solution/cycle-de-vie.png';

export default function OurSolutionSection() {
  return (
    <div className="our-solution-section">
      <div className="titre">NOTRE SOLUTION</div>

      <div className="soustitre">
        Notre solution : une réponse simple à des enjeux complexes
      </div>

      <p className="texte-section">
        SACADON n’est pas une collection de sacs comme les autres.<br/>
        C’est une solution concrète à deux urgences : La <b>pollution plastique</b> & les <b>inégalités humaines</b>.<br/>
        Comment ? En créant un objet <b>réutilisable, recyclé, solidaire</b>, et en intégrant <b>un don</b> dans son prix de vente.<br/>
        On appelle ça : <b>un produit-partage.</b>
      </p>

      <img src={cycle} alt="Cycle de vie" className="image-cycle" />
    </div>
  );
}

