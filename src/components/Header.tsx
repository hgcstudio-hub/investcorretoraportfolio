import { Menu, MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { contact } from "../config/contact";
import { brand, navItems } from "../data/siteContent";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <a className="brand-mark" href="#inicio" aria-label="Invest Corretora - início">
        <img src={brand.symbol} alt="Invest Corretora de Seguros" />
      </a>

      <button
        className="menu-button"
        type="button"
        aria-expanded={open}
        aria-controls="primary-navigation"
        onClick={() => setOpen((current) => !current)}
      >
        {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        <span className="sr-only">{open ? "Fechar menu" : "Abrir menu"}</span>
      </button>

      <nav id="primary-navigation" className={open ? "nav nav--open" : "nav"}>
        {navItems.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </a>
        ))}
        <a className="nav-cta" href={contact.whatsapp.href} target="_blank" rel="noreferrer">
          <MessageCircle aria-hidden="true" />
          Solicitar cotação
        </a>
      </nav>
    </header>
  );
}
