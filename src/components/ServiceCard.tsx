import { MessageCircle } from "lucide-react";
import { contact } from "../config/contact";
import { additionalServices } from "../data/siteContent";

type Service = (typeof additionalServices)[number];

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="service-card">
      <div className="service-card__body">
        <div className="service-card__icon">
          <service.icon aria-hidden="true" />
        </div>
        <h3>{service.title}</h3>
        <p>{service.description}</p>
        <ul>
          {service.benefits.map((benefit) => (
            <li key={benefit}>{benefit}</li>
          ))}
        </ul>
        <a className="quote-link" href={contact.whatsapp.href} target="_blank" rel="noreferrer">
          <MessageCircle aria-hidden="true" />
          Solicitar cotação
        </a>
      </div>
    </article>
  );
}
