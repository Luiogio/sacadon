import './section_contact_us.css';

import info from '../../assets/info_peda/info.jpeg';

export default function SectionContactUs() {
  return (
    <div className="impacts-container contact-us-container">

      <div className="impacts-text-content">
        <div className="sacadon-title">CONTACT</div>
        <div className="sacadon-text">
          Une question ? Un projet ? Envie de nous rejoindre ?
        </div>
        <p className="mission-text">
          <b>SACADON</b> est une aventure humaine, et on adore les rencontres.<br />
          Que vous soyez <b>curieux, partenaire potentiel</b> ou juste <b>motivé</b>, écrivez-nous !<br />
          On vous répond (et avec le sourire).
        </p>
      </div>

      <div className="impacts-image-content">
        <img src={info} alt="Sacadon" className="impacts-image" />
      </div>
    </div>
  );
}

