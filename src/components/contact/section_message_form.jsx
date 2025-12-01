import "./section_message_form.css";

import { Link } from "react-router-dom";

import two_talking from '../../assets/contact/two_talking.png';

export default function SectionMessageForm() {
  return (
    <div className="message-form-container">
      <div className="image-section">
        <img src={two_talking} alt="Deux personnes discutant" />
      </div>


      <div className="form-section">
        <div className="sacadon-title2">POUR NOUS ÉCRIRE</div>


        <form className="contact-form">
          <label className="sacadon-text2">Nom Prénom</label>
          <input type="text" placeholder="" />


          <label className="sacadon-text2">Adresse mail</label>
          <input type="email" placeholder="" />


          <label className="sacadon-text2">Objet de votre message</label>
          <input type="text" placeholder="" />


          <label className="sacadon-text2">Votre message</label>
          <textarea placeholder="Bonjour..."></textarea>

          <Link type="submit" className="need-more-button">Envoyer</Link>
        </form>
      </div>
    </div>
  );
}

