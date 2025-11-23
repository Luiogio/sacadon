import "./section_plastic.css";

import sacImpact from "../../assets/our_bags/v6.png";

export default function SectionPlastic() {
  return (
    <section className="plastique-section">
      <div className="plastique-images">
        <img
          src="/images/plastique1.png"
          alt="Pollution plastique"
          className="image-large"
        />
        <img
          src="/images/plastique2.png"
          alt="Microplastiques"
          className="image-small"
        />
      </div>

      <div className="plastique-text-card">
        <h2>PLASTIQUE</h2>

        <p>Le plastique a une densité inférieure à 1. Il flotte.</p>

        <p>
          Il est donc facilement emporté par les eaux de ruissellement jusqu’aux
          rivières, aux fleuves, puis à la mer.
        </p>

        <p>
          <strong>Résultat :</strong> de véritables continents de plastique se
          sont formés.
        </p>

        <p>
          <strong>+ Et ce n’est pas tout :</strong> ils se fragmentent en
          micro-plastiques, invisibles mais présents dans notre chaîne
          alimentaire.
        </p>
      </div>
    </section>
  );
}

