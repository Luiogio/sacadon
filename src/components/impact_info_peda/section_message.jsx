import "./section_message.css";

import { Link } from "react-router-dom";

import message from '../../assets/info_peda/message.png';

export default function SectionMessage() {
  return (
    <div className="origine-container message-container">
      <img src={message} alt="Origine Engagée" className="origine-image" />

      <div className="message-text-container">
        <div className="message-title sacadon-title2">LE SAC COMME UN SUPPORT DE MESSAGE</div>

        <p className="message-paragraph sacadon-text2">
          Chaque sac SACADON est conçu comme un support d’éducation populaire :
          <li>Il porte un message : <b>"Un sac, deux impacts”</b>, <b>“Plastique revalorisé”</b>, <b>“Don solidaire inclus”</b>…</li>
          <li>Il attire le regard, <b>suscite la curiosité</b></li>
          <li>Il devient un prétexte à la discussion, à l’école, au marché, dans la rue</li>
        </p>

        <Link to="/solution" className="need-more-button message-button">
          Je découvre les sacs
        </Link>
      </div>
    </div>
  );
}

