import { Link } from "react-router-dom";
import "./section_faq.css";

export default function FAQImpacts() {
  const faqs = [
    {
      question: "Quelles sont les associations bénéficiaires ?",
      answer:
        "Actuellement, nous collaborons avec des partenaires comme Action contre la Faim, mais aussi des associations locales choisies pour leur transparence et leur impact concret.",
    },
    {
      question: "Combien de plastique est recyclé pour un sac ?",
      answer:
        "Cela dépend du modèle :\n• Le P’tit Geste contient en moyenne 3 bouteilles plastiques recyclées\n• Le Généreux, environ 5 à 6 bouteilles\n• La Signature — jusqu'à 8 bouteilles recyclées",
    },
    {
      question: "Comment mon achat sensibilise-t-il le grand public ?",
      answer:
        "Chaque sac est un support de message. Il est designé pour interpeller, informer et inspirer. En le portant, vous participez à faire connaître un nouveau mode de consommation engagé.",
    },
    {
      question: "Pourquoi avoir choisi de combiner écologie et solidarité ?",
      answer:
        "Parce qu’on ne peut pas choisir entre sauver la planète ou aider les gens. SACADON agit sur les deux fronts, avec un objet du quotidien.",
    },
    {
      question: "Les sacs sont-ils fabriqués en France ?",
      answer:
        "Oui, une grande partie de notre production est faite en France ou en Europe, dans des structures engagées dans l’économie circulaire et/ou l’insertion.",
    },
    {
      question: "Est-ce que mon sac a un QR code pour suivre son impact ?",
      answer:
        "Pas encore, mais c’est en réfléxion ! Nous travaillons sur une solution pour que chaque sac puisse afficher son impact via un QR code ou un lien unique.",
    }
  ];

  return (
    <div className="faq-section">
      <div className="sacadon-title2 faq-title-pages">FOIRE AUX QUESTIONS</div>

      <div className="faq-grid">
        {faqs.map((item, index) => (
          <div className="faq-card" key={index}>
            <div className="faq-question">{item.question}</div>
            <div className="faq-answer">{item.answer}</div>
          </div>
        ))}
      </div>

      <Link to="/faq" className="need-more-button faq-button">Voir toutes les questions</Link>
    </div>
  );
}

