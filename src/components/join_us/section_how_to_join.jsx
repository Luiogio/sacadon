import { Link } from "react-router-dom";

import './section_how_to_join.css';

import benevole from '../../assets/join_us/benevole.png';
import coeur from '../../assets/join_us/coeur.png';
import volume from '../../assets/join_us/volume.png';

export default function HowToJoin() {
  return (
    <div className="join-section impact-section">
      <div className="sacadon-title2 join-titre">TOUTES LES MANIÈRES DE NOUS REJOINDRE</div>

      <p className="sacadon-text join-soustitre">
        Pour vous allier à notre superbe aventure
      </p>

      <div className="impact-avantages join-avantages">
        <div className="schema-impact-card-right join-card">
          <img src={benevole} className="icon" />
          <div className="sacadon-title schema-impact-title">
            DEVENIR BÉNÉVOLE
          </div>
          <div className="sacadon-text2 schema-impact-text">
            Vous avez du <b>temps</b> et de <b>l’énergie</b> à offrir ? 
            Envie de vous <b>impliquer pour des causes qui vous tiennent à coeur</b> ?
            Nous avons des <b>missions concrètes</b> (logistique, sensibilisation, réseaux sociaux…).
            → On vous accompagne, et on vous accueille avec bienveillance.
          </div>
        </div>

        <div className="schema-impact-card-right join-card">
          <img src={coeur} className="icon" />
          <div className="sacadon-title schema-impact-title">
            DEVENIR AMBASSADEUR
          </div>
          <div className="sacadon-text2 schema-impact-text">
            Vous aimez parler de <b>projets utiles</b> ? Vous portez déjà un de nos sacs ? 
            <b>Rejoignez notre communauté d’ambassadeurs</b>, recevez du contenu à partager 
            et devenez une <b>voix du changement.</b>
          </div>
        </div>

        <div className="schema-impact-card-right join-card">
          <img src={volume} className="icon" />
          <div className="sacadon-title schema-impact-title">
            PROPOSER UN PARTENARIAT
          </div>
          <div className="sacadon-text2 schema-impact-text">
            <b>Association, école, entreprise, marque, média… </b>
            SACADON grandit avec des <b>collaborations à impact. </b>
            Écrivez-nous et construisons ensemble un projet engagé.
          </div>
        </div>
      </div>

      <Link to="/solution" className="need-more-button impact-button">
        Nous contacter
      </Link>
    </div>
  );
}

