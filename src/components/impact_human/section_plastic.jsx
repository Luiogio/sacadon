import "./section_plastic.css";

import plastic from "../../assets/impact_ecological/plastic.png";
import loupe from "../../assets/impact_ecological/loupe.png";

export default function SectionPlastic() {
  return (
    <div className="plastic-section">
      <div className="plastic-images">
        <img src={plastic} alt="Pollution plastique" className="image-large"/>
        <img src={loupe} alt="Microplastiques" className="image-small"/>
      </div>

      <div className="plastic-card">
        <div className="sacadon-title2">PLASTIQUE</div>
        <p className="sacadon-text2">
          Le plastique a une densité inférieure à 1. Il flotte.<br />
          Il est donc facilement emporté par les eaux de ruissellement jusqu’aux
          rivières, aux fleuves, puis à la mer.<br />
          <b>Résultat :</b> de véritables continents de plastique se
          sont formés.<br />
          <b>+ Et ce n’est pas tout :</b> ils se fragmentent en
          micro-plastiques, invisibles mais présents dans notre chaîne
          alimentaire.
        </p>
      </div>
    </div>
  );
}

