import './section_probleme.css';

import tortue from '../../assets/home_page/tortue_plastique.png';

export default function ProblemeSection() {
  return (
    <div className="probleme-section">
      <div className="probleme-top-section">
        <div>
          <div className="sacadon-title2">LE PROBLÈME</div>
          <div className="sacadon-text probleme-section-subtitle">Trop de plastique, pas assez d’humanité</div>
        </div>

        <p className="sacadon-text2 probleme-intro">
          La <b>pollution plastique</b> constitue aujourd’hui la <b>deuxième 
          préoccupation mondiale</b> tant au niveau volumique qu’au niveau sanitaire.
        </p>
      </div>

      <div className="probleme-content">
        <div className="img-content">
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

        <div className="probleme-text-box">
          <div className="probleme-card">
            <p className="sacadon-number card-number">6,9Mds</p>
            <p className="sacadon-text2 card-text">
              de tonnes de déchets plastiques ont été produites depuis 2015*
            </p>
          </div>

          <div className="probleme-card">
            <p className="sacadon-number card-number">79%</p>
            <p className="sacadon-text2 card-text">
              de ces déchets ont été accumulés dans des décharges ou dans la nature et seulement 9% recyclé*
            </p>
          </div>

          <div className="probleme-card">
            <p className="sacadon-number card-number">450ans</p>
            <p className="sacadon-text2 card-text">
              jusqu'à l'infini : C'est l'estimation de la durée de vie du plastique*
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

