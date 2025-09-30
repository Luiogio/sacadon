import './section_probleme.css';
import tortue from '../assets/our_mission/tortue_plastique.png';

export default function ProblemeSection() {
  return (
    <div className="probleme-section">

      <div className="top-section">
        <div className='title-probleme'>
          <div className="title">LE PROBLÈME</div>
          <h2 className="subtitle">Trop de plastique, pas assez d’humanité</h2>
        </div>

        <p className="intro">
          La <b>pollution plastique</b> constitue aujourd’hui la <b>deuxième 
          préoccupation mondiale</b> tant au niveau volumique qu’au niveau sanitaire.
        </p>
      </div>

      <div className="content">
        <div>
          <img
            src={tortue}
            alt="Pollution plastique avec une tortue"
            className="pollution-image"
          />
          <div className="source">
            Source :
            <a href='https://www.nationalgeographic.fr/le-plastique-en-10-chiffres' target="_blank">
              National Geographic
            </a>
          </div>
        </div>

        <div className="text-box">
          <div className="card">
            <p className="card-number">6,9Mds</p>
            <p className="card-text">
              de tonnes de déchets plastiques ont été produites depuis 2015*
            </p>
          </div>

          <div className="card">
            <p className="card-number">79%</p>
            <p className="card-text">
              de ces déchets ont été accumulés dans des décharges ou dans la
              nature et seulement 9% recyclé*
            </p>
          </div>

          <div className="card">
            <p className="card-number">450ans</p>
            <p className="card-text">
              jusqu'à l'infini : C'est l'estimation de la durée de vie du
              plastique*
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

