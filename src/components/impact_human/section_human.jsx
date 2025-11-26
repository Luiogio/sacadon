import './section_human.css';

import impactHuman from '../../assets/impact_human/impact_human.png';

export default function SectionHuman() {
  return (
    <div className="impacts-section">
      <div className="impacts-container">

        <div className="impacts-text-content">
          <div className="sacadon-title ecologic-title">IMPACT HUMANITAIRE</div>
          <div className="sacadon-text">
            💝 Un sac solidaire : agir pour les humains, pas seulement pour la planète
          </div>
          <p className="mission-text">
            Chez <b>SACADON</b>, chaque achat soutient aussi ceux qui en ont le plus besoin.<br />
            Nous avons intégré un <b>don direct dans le prix</b> de chaque sac, <b>reversé à des associations humanitaires.</b><br />
            C’est ça, l’idée du <b>produit-partage</b> : un objet du quotidien, transformé en outil d’impact concret.
          </p>
        </div>

        <div className="impacts-image-content">
          <img src={impactHuman} alt="Sacadon" className="impacts-image human-image" />
        </div>
      </div>
    </div>
  );
}

