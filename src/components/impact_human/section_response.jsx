import "./section_response.css";

import response from "../../assets/impact_ecological/response.png";

export default function SectionResponse() {
  return (
    <div className="response-container">
      <div className="response-container_bis">
        <div className="response-left">
          <div className="sacadon-title2">
            NOTRE RÉPONSE POUR Y FAIRE FACE
          </div>

          <p className="sacadon-text">
            Un produit écologique, qui fait du bien à la planète
          </p>

          <p className="sacadon-text2">
            Chaque sac SACADON est conçu pour limiter l’impact environnemental à
            chaque étape :
          </p>

        </div>

        <img src={response} alt="Recyclage" className="response-image"/>
      </div>

      <div className="response-buttons">
        <div className="response-box sacadon-text2">  Fabriqué en plastique recyclé (PET)</div>
        <div className="response-box sacadon-text2">Réutilisable et durable</div>
        <div className="response-box sacadon-text2">Recyclable en fin de vie</div>
      </div>
    </div>
  );
}

