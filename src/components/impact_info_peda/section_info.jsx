import './section_info.css';

import info from '../../assets/info_peda/info.jpeg';

export default function SectionInfo() {
  return (
    <div className="impacts-container">

      <div className="impacts-text-content human-text-content">
        <div className="sacadon-title info-title">INFORMATIONS & PÉDAGOGIE</div>
        <div className="sacadon-text">
          🧠 Sensibiliser, informer, faire réfléchir : une pédagogie du quotidien
        </div>
        <p className="sacadon-text2">
          Chez <b>SACADON</b>, nous pensons qu’un sac peut être bien plus qu’un objet utilitaire.<br />
          Il peut <b>interpeller, faire parler, ouvrir les yeux.</b><br />
          Notre <b>mission pédagogique</b> repose sur un principe simple : <b>rendre l’écologie et la solidarité accessibles à tous</b>, sans culpabiliser, mais en donnant les clés pour comprendre et agir.
        </p>
      </div>

      <div className="impacts-image-content">
        <img src={info} alt="Sacadon" className="impacts-image human-image" />
      </div>
    </div>
  );
}

