import { ArrowRight, MessageCircle } from "lucide-react";
import { contact } from "../config/contact";
import { brand, hero, quickChoices } from "../data/siteContent";

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

        <p className="hero__price-note">
          *Valor inicial informado no material comercial. Preço, cobertura, carência e rede variam conforme perfil,
          modalidade e operadora.
        </p>
      </div>

      <div className="hero__visual">
        <div className="hero__choice-panel" aria-labelledby="hero-choice-title">
          <div className="hero__choice-heading">
            <img src={brand.symbol} alt="" aria-hidden="true" />
            <div>
              <span>Encontre sua solução</span>
              <h2 id="hero-choice-title">O que você quer proteger?</h2>
            </div>
          </div>
          <div className="hero__choices">
            {quickChoices.map((choice) => (
              <a key={choice.id} href={`#solucao-${choice.id}`}>
                <choice.icon aria-hidden="true" />
                <span>
                  <strong>{choice.label}</strong>
                  <small>{choice.detail}</small>
                </span>
                <ArrowRight aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
