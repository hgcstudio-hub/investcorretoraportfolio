import { Instagram, Mail, MapPin, MessageCircle } from "lucide-react";
import { contact } from "../config/contact";
import { brand, navItems } from "../data/siteContent";

export function Footer() {
  return (
    <footer className="footer" id="contato">
      <div className="footer__brand">
        <img src={brand.logoDark} alt="Invest Corretora de Seguros" />
        <p>{brand.name} - protegendo o que realmente importa.</p>
      </div>

      <div className="footer__links">
        <strong>Mapa do site</strong>
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </div>

      <address className="footer__contact">
        <strong>Fale com a gente</strong>
        <a href={contact.whatsapp.href} target="_blank" rel="noreferrer">
          <MessageCircle aria-hidden="true" />
          {contact.whatsapp.label}
        </a>
        <a href={contact.email.href}>
          <Mail aria-hidden="true" />
          {contact.email.label}
        </a>
        <a href={contact.instagram.href} target="_blank" rel="noreferrer">
          <Instagram aria-hidden="true" />
          {contact.instagram.label}
        </a>
        <span>
          <MapPin aria-hidden="true" />
          {contact.city}
        </span>
      </address>

      <p className="footer__notice">
        Valores, coberturas, carências, redes credenciadas e condições variam conforme operadora, seguradora,
        perfil do cliente e produto contratado. Consulte as condições da proposta.
      </p>
    </footer>
  );
}
