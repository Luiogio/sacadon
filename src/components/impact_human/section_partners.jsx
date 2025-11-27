import "./section_partners.css";

export default function SectionPartners() {
  return (
    <div className="partners-section">
      <h2 className="partners-title">NOS PARTENAIRES HUMANITAIRES</h2>
      <p className="partners-subtitle">
        Les associations auxquelles nous reversons les dons sont nos partenaires
      </p>

      <p className="partners-desc">
        Les dons collectés sont reversés à des organisations engagées dans des{" "}
        <strong>causes essentielles</strong> : <strong>lutte contre la faim</strong>{" "}
        dans le monde, le <strong>droit à l’éducation pour tous</strong>,{" "}
        <strong>lutte contre les inégalités</strong>, ou encore{" "}
        <strong>venir en aide aux populations vulnérables</strong> et aux
        personnes en <strong>situation de handicap</strong>.
      </p>

      <div className="partners-logos">
        <img src="/images/action-faim.png" alt="Action contre la faim" />
        <img src="/images/droit-ecole.png" alt="Droit à l’école" />
        <img src="/images/care.png" alt="Care" />
        <img src="/images/handicap-international.png" alt="Handicap International" />
      </div>
    </div>
  );
}

