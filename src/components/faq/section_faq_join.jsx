import { Link } from "react-router-dom";
import "./section_faq.css";

export default function FAQJoin() {
  const faqs = [
    {
      question: "Faut-il habiter en France pour rejoindre SACADON ?",
      answer:
        "Non ! Vous pouvez nous aider même à distance (communication, traduction, etc.)",
    },
    {
      question: "Y a-t-il un âge minimum pour devenir bénévole ?",
      answer:
        "16 ans minimum pour les missions officielles. Moins si vous êtes accompagné.e d’un adulte.",
    },
    {
      question: "Combien de temps faut-il s’engager ? Peux-tu s’engager ponctuellement ?",
      answer:
        "C’est vous qui décidez. Une heure ponctuelle ou plusieurs semaines : chaque coup de main compte.",
    },
    {
      question: "Je suis une entreprise / école / asso, comment proposer un partenariat ?",
      answer:
        "Écrivez-nous via le formulaire ou la page Contact, on vous répond rapidement avec une proposition personnalisée.",
    },
    {
      question: "Je n’ai pas beaucoup de temps, comment puis-je aider ?",
      answer:
        "Vous pouvez nous soutenir simplement en parlant de SACADON autour de vous ou sur les réseaux.",
    },
    {
      question: "Faut-il avoir de l’expérience pour être bénévole ?",
      answer:
        "Pas du tout ! Ce qui compte, c’est l’envie d’aider. On vous accompagne selon vos envies et compétences.",
    }
  ];

  return (
    <div className="faq-section">
      <div className="faq-title">FOIRE AUX QUESTIONS</div>

      <div className="faq-grid">
        {faqs.map((item, index) => (
          <div className="faq-card" key={index}>
            <div className="faq-question">{item.question}</div>
            <div className="faq-answer">{item.answer}</div>
          </div>
        ))}
      </div>

      <Link className="faq-button">Voir toutes les questions</Link>
    </div>
  );
}

