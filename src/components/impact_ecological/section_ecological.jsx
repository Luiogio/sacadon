import './section_ecological.css';

import impactsPicture from '../../assets/impacts/impacts_picture.png';

export default function SectionEcological() {
  return (
    <div className="impacts-section">
      <div className="impacts-container">

        <div className="impacts-text-content">
          <div className="sacadon-title ecologic-title">IMPACT ÉCOLOGIQUE</div>
          <div className="sacadon-text">
            ♻️ Réduire, recycler, revaloriser : notre réponse écologique
          </div>
          <p className="mission-text">
            L’un des plus grands défis de notre époque : <b>la pollution plastique.</b><br />
            Chez SACADON, chaque sac est pensé pour être une <b>alternative utile</b> et <b>durable</b><br />
            à la production massive de plastique à usage unique.
          </p>
        </div>

        <div className="impacts-image-content">
          <img src={impactsPicture} alt="Sacadon" className="impacts-image" />
        </div>
      </div>
    </div>
  );
}

