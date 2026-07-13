import { ArrowRight, MessageCircle, ShieldCheck } from "lucide-react";
import { contact } from "../config/contact";
import { brand, hero, proofPoints } from "../data/siteContent";

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__content">
        <span className="eyebrow hero__eyebrow">{hero.eyebrow}</span>
        <h1>{hero.title}</h1>
        <p className="hero__subtitle">{hero.subtitle}</p>
        <p className="hero__body">{hero.body}</p>

        <div className="hero__actions">
          <a className="button button--gold" href={contact.whatsapp.href} target="_blank" rel="noreferrer">
            <MessageCircle aria-hidden="true" />
            Solicitar cotação
          </a>
          <a className="button button--ghost" href="#solucoes">
            Conhecer soluções
            <ArrowRight aria-hidden="true" />
          </a>
        </div>

        <div className="hero__proof" aria-label="Diferenciais">
          {proofPoints.map((item) => (
            <div key={item.title}>
              <item.icon aria-hidden="true" />
              <strong>{item.title}</strong>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="hero__visual" aria-label="Logo da Invest Corretora de Seguros">
        <div className="hero__logo-card">
          <img src={brand.logoDark} alt="Invest Corretora de Seguros" />
          <div className="hero__seal">
            <ShieldCheck aria-hidden="true" />
            <span>Tranquilidade hoje, segurança sempre.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
