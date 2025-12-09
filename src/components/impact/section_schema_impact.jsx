import "./section_schema_impact.css";

import sacImpact from "../../assets/bags/v4.png";

import dechets from "../../assets/schema_impact/dechets_evites.png";
import don from "../../assets/schema_impact/don_asso.png";
import effet from "../../assets/schema_impact/effet_viral.png";
import plastique from "../../assets/schema_impact/plastique_recycle.png";
import satisfaction from "../../assets/schema_impact/satisfaction.png";
import sensibilisation from "../../assets/schema_impact/sensibilisation.png";

import arrow from '../../assets/header_footer/arrow_to_top.png';

export default function schemaImpactSection() {
  const items = [
    {
      title: "PLASTIQUE RECYCLÉ",
      text: (
        <>
          Chaque <b>sac SACADON</b> est fabriqué à partir de
          <b> plastique recyclé</b>, évitant l’usage de plastique neuf.
        </>
      ),
      icon: plastique,
      // width: 5rem;
    },
    {
      title: "DÉCHETS ÉVITÉS",
      text: (
        <>
          <b>Moins de plastique</b> neuf équivaut à plusieurs tonnes de
          <b> déchets évités</b>.
        </>
      ),
      icon: dechets,
      // height: 28vh;
    },
    {
      title: "DON À UNE ASSOCIATION",
      text: (
        <>
          Une partie fixe du prix est reversée à des <b>causes humanitaires</b>.
        </>
      ),
      icon: don,
    },
    {
      title: "SENSIBILISATION",
      text: (
        <>
          Chaque sac porte un <b>message</b>, une <b>identité forte et pédagogique</b>.
        </>
      ),
      icon: sensibilisation,
      // width: 8rem;
    },
    {
      title: "SATISFACTION CLIENT",
      text: (
        <>
          Des clients satisfaits d’avoir intégré les produits SACADON dans leur
          <b> quotidien</b>.
        </>
      ),
      icon: satisfaction,
      // width: 5rem;
      // height: 28vh;
    },
    {
      title: "EFFET VIRAL POSITIF",
      text: (
        <>
          Les utilisateurs deviennent eux-mêmes <b>ambassadeurs </b>
          du projet en parlant de leur sac autour d’eux.
        </>
      ),
      icon: effet,
    },
  ];

  return (
    <section className="schema-impact-section">
      <div className="schema-impact-grid">

        {/* Etiquettes de gauche */}
        <div className="card-impact">
          {items.slice(0, 3).map((item, index) => (
            index === 1 ? (
              <div className="schema-impact-card-left" key={index}>
                <img src={item.icon} className="icon" />
                <div className="schema-impact-title">{item.title}</div>
                <div className="schema-impact-text">{item.text}</div>
              </div>
            ) : 
              <div className="schema-impact-card" key={index}>
                <img src={item.icon} className="icon" />
                <div className="schema-impact-title">{item.title}</div>
                <div className="schema-impact-text">{item.text}</div>
              </div>
          ))}
        </div>

        
        <div className="center-image">
          <img src={arrow} alt="Arrow to top" className="schema-impact-arrow1" />
          <img src={arrow} alt="Arrow to top" className="schema-impact-arrow2" />
          <img src={arrow} alt="Arrow to top" className="schema-impact-arrow3" />
          
          <div className="schema-impact-image" >
            <img src={sacImpact} alt="schéma SACADON schema-impact" />
          </div>
          <div className="caption">1 sac SACADON acheté</div>

          <img src={arrow} alt="Arrow to top" className="schema-impact-arrow4" />
          <img src={arrow} alt="Arrow to top" className="schema-impact-arrow5" />
          <img src={arrow} alt="Arrow to top" className="schema-impact-arrow6" />
        </div>

        {/* Etiquettes de droite */}
        <div className="card-impact">
          {items.slice(3).map((item, index) => (
            index === 1 ? (
              <div className="schema-impact-card-right" key={index}>
                <img src={item.icon} className="icon" />
                <div className="schema-impact-title">{item.title}</div>
                <div className="schema-impact-text">{item.text}</div>
              </div>
            ) : 
              <div className="schema-impact-card" key={index}>
                <img src={item.icon} className="icon" />
                <div className="schema-impact-title">{item.title}</div>
                <div className="schema-impact-text">{item.text}</div>
              </div>
          ))}
        </div>

      </div>
    </section>
  );
}

