import "./section_partners.css";

import partner1 from "../../assets/impact_human/partner1.png";
import partner2 from "../../assets/impact_human/partner2.png";
import partner3 from "../../assets/impact_human/partner3.png";
import partner4 from "../../assets/impact_human/partner4.png";

export default function SectionPartners() {
  return (
    <div className="partners-section">
      <div className="partners-title sacadon-title2">NOS PARTENAIRES HUMANITAIRES</div>
      <p className="partners-subtitle sacadon-text">
        Les associations auxquelles nous reversons les dons sont nos partenaires
      </p>

      <p className="partners-desc sacadon-text2">
        Les dons collectés sont reversés à des organisations engagées dans des
        <b>causes essentielles</b> : <b>Lutte contre la faim</b> dans le monde, 
        le <b>droit à l’éducation pour tous</b>, <b>lutte contre les inégalités</b>, 
        ou encore <b>venir en aide aux populations vulnérables</b> et aux
        personnes en <b>situation de handicap</b>.
      </p>

      <div className="partners-logos">
        <img src={partner1} className="sacadon-card" alt="Action contre la faim"/>
        <img src={partner2} className="sacadon-card" alt="Droit à l’école"/>
        <img src={partner3} className="sacadon-card" alt="Care"/>
        <img src={partner4} className="sacadon-card" alt="Handicap International"/>
      </div>
    </div>
  );
}

