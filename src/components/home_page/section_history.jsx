import React, { useState, useEffect } from "react";
import './section_history.css';
import history_picture from '../../assets/home_page/history_picture.png';
import logo_S from '../../assets/home_page/logo_S.png';

export default function HistorySection() {
  return (
    <div className="history">
      <div className="history-container">

        <div className="history-image">
          <img src={history_picture} alt="Notre histoire" />

          <div className="history-logo">
            <img src={logo_S} alt="Logo S" />
          </div>
          
          <div className="history-button">
            <button>En savoir plus +</button>
          </div>
        </div>

        <div className="history-content">
          <div className="history-title">NOTRE HISTOIRE</div>

          <div className="history-subtitle">
            Une idée simple au service de tous : <br />
            Former, informer, faire participer
          </div>

          <div className="history-text">
            Derrière SACADON, il y a l’histoire d’un <b>entrepreneur engagé</b>
            (fondateur du <a href='https://www.handicap-international.fr/fr/actualites/sac-a-sapin' target="_blank">Sac à Sapin</a>),
            d’une volonté <b>familiale et intergénérationnelle</b> de répondre à deux urgences : la
            <b> pollution plastique</b> et la <b>solidarité</b>.
            <br/>
            Le projet est porté par des jeunes créatifs et militants, pour redonner du sens à la consommation.
          </div>
        </div>
      </div>
    </div>
  );
}

