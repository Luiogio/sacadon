import { Link } from "react-router-dom";
import "./section_faq.css";

export default function FAQList() {
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
    },
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
    },
    {
      question: "Comment entretenir mon sac SACADON ?",
      answer:
        "Nos sacs sont conçus pour durer.\n La plupart de nos modèles sont lavables à la main ou en machine à 30°C, sans essorage.",
    },
    {
      question: "Vos sacs sont-ils vraiment solides ?",
      answer:
        "Nos modèles sont testés pour supporter un usage quotidien, et les coutures sont renforcées (notamment sur la gamme CABA et Signature).",
    },
    {
      question: "De quoi sont fait vos sacs ?",
      answer:
        "Nos sacs sont réalisés à partir de plastique recyclé (RPET) provenant de bouteilles collectées et revalorisées.",
    },
    {
      question: "Comment fonctionne le don solidaire ?",
      answer:
        "À chaque achat, une partie du prix est reversée à une association partenaire. Le montant exact du don est indiqué sur chaque fiche produit.",
    },
    {
      question: "Quels sont les délais pour la livraison ?",
      answer:
        "Les délais de livraison en France métropolitaine sont en moyenne de 3 à 5 jours ouvrés après commande.",
    },
    {
      question: "Puis-je retourner un sac s’il ne me convient pas ?",
      answer:
        "Bien sûr. Vous disposez de 14 jours après réception pour nous retourner le produit non utilisé dans son emballage d’origine.",
    },
  ];

  return (
    <div className="faq-section">
      <div className="sacadon-title faq-title">FOIRE AUX QUESTIONS</div>
      <div className="sacadon-text faq-subtitle">
        Une question ? Toutes les réponses sont ici ! 
      </div>

      <div className="faq-grid">
        {faqs.map((item, index) => (
          <div className="faq-card" key={index}>
            <div className="faq-question">{item.question}</div>
            <div className="faq-answer">{item.answer}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

