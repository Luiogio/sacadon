import "./section_peda.css";

import inclusive from "../../assets/info_peda/inclusive.png";
import creative from "../../assets/info_peda/creative.png";
import ancree from "../../assets/info_peda/ancree.png";

export default function SectionPeda() {
  return (
    <div className="peda-section">
      <div className="partners-title sacadon-title2">UNE PÉDAGOGIE POSITIVE</div>
      <p className="partners-subtitle sacadon-text">
        Pas de moralisation, pas de leçon
      </p>

      <p className="peda-text sacadon-text2">
        Juste des <b>faits</b>, des <b>solutions</b>, et des <b>idées</b> pour <b>faire mieux, à notre échelle</b>. Notre approche est :
      </p>

      <div className="partners-logos peda-logo">
        <div className="schema-impact-card-right peda-card">
          <img src={inclusive} className="icon" />
          <div className="sacadon-title schema-impact-title">INCLUSIVE</div>
          <div className="sacadon-text2 schema-impact-text">Adaptée à tous, et à tous les âges</div>
        </div>

        <div className="schema-impact-card-right">
          <img src={creative} className="icon" />
          <div className="sacadon-title schema-impact-title">CRÉATIVE</div>
          <div className="sacadon-text2 schema-impact-text">Design, couleurs, illustrations</div>
        </div>

        <div className="schema-impact-card-right">
          <img src={ancree} className="icon" />
          <div className="sacadon-title schema-impact-title">ANCRÉE</div>
          <div className="sacadon-text2 schema-impact-text">
            Ancrée dans le réel, de part les chiffres, l’impact du projet
          </div>
        </div>
      </div>
    </div>
  );
}

