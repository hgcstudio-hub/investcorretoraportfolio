import { MessageCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { contact } from "../config/contact";
import { primarySolutions } from "../data/siteContent";
import { FeatureIconButton } from "./FeatureIconButton";

type Solution = (typeof primarySolutions)[number];

export function InteractiveSolutionCard({ solution }: { solution: Solution }) {
  const [activeFeatureId, setActiveFeatureId] = useState<string | null>(null);
  const cardRef = useRef<HTMLElement>(null);
  const activeFeature = solution.features.find((feature) => feature.id === activeFeatureId);

  useEffect(() => {
    const closeOutside = (event: PointerEvent) => {
      if (!cardRef.current?.contains(event.target as Node)) setActiveFeatureId(null);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveFeatureId(null);
    };

    document.addEventListener("pointerdown", closeOutside);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOutside);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  return (
    <article
      className={solution.id === "health" ? "solution-card solution-card--featured" : "solution-card"}
      id={`solucao-${solution.id}`}
      ref={cardRef}
      tabIndex={-1}
    >
      <img
        className="solution-card__image"
        src={solution.image}
        alt={`Cenário de ${solution.title}`}
        loading="lazy"
        style={{ objectPosition: solution.imagePosition }}
      />
      <div className="solution-card__overlay" aria-hidden="true" />

      <div className="solution-card__content">
        <div>
          <span className="solution-card__category">{solution.category}</span>
          <h3>{solution.title}</h3>
          {solution.highlight ? <strong className="solution-card__highlight">{solution.highlight}</strong> : null}
          <p>{solution.description}</p>
        </div>

        <div className="solution-card__actions">
          <div className="solution-card__feature-area">
            <div
              className={activeFeature ? "solution-card__feature-detail is-visible" : "solution-card__feature-detail"}
              aria-live="polite"
            >
              {activeFeature ? (
                <>
                  <strong>{activeFeature.title}</strong>
                  <span>{activeFeature.description}</span>
                </>
              ) : null}
            </div>

            <div className="solution-card__features" aria-label={`Coberturas e benefícios de ${solution.title}`}>
              {solution.features.map((feature) => (
                <FeatureIconButton
                  key={feature.id}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  expanded={activeFeatureId === feature.id}
                  onActivate={() => setActiveFeatureId(feature.id)}
                  onDeactivate={() => setActiveFeatureId(null)}
                />
              ))}
            </div>
          </div>

          <a className="solution-card__cta" href={contact.whatsapp.href} target="_blank" rel="noreferrer">
            <MessageCircle aria-hidden="true" />
            Solicitar cotação
          </a>
        </div>
      </div>
    </article>
  );
}
