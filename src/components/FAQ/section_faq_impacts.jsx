import { Link } from "react-router-dom";
import "./section_faq.css";

export default function FAQImpacts() {
  const faqs = [
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
      <h1 className="faq-title">FOIRE AUX QUESTIONS</h1>

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

