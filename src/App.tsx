import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";
import { useEffect } from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { InteractiveSolutionCard } from "./components/InteractiveSolutionCard";
import { ProofStrip } from "./components/ProofStrip";
import { Reveal } from "./components/Reveal";
import { SectionHeader } from "./components/SectionHeader";
import { ServiceCard } from "./components/ServiceCard";
import { contact } from "./config/contact";
import { additionalServices, brand, primarySolutions, processSteps, reasons } from "./data/siteContent";

export function App() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const elements = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));

    if (reduceMotion) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12 },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />

        <section className="section about" id="quem-somos">
          <Reveal>
            <SectionHeader
              eyebrow="Quem somos"
              title="Experiência próxima. Proteção bem orientada."
              text="A Invest Corretora de Seguros nasceu com o propósito de oferecer soluções em seguros de forma clara, personalizada e eficiente."
            />
          </Reveal>

          <div className="about__grid">
            <Reveal className="about__copy">
              <p>
                Atuamos com ética, transparência e foco total na proteção do que mais importa para cada cliente.
                Com mais de 10 anos de experiência no mercado, construímos uma trajetória de confiança e excelência
                no atendimento personalizado.
              </p>
              <div className="about__quote">
                <span>Mais que um seguro, um compromisso com o futuro.</span>
              </div>
            </Reveal>

            <Reveal className="about__image" delay={120}>
              <img
                src="/assets/equipe-invest.webp"
                alt="Luciana e seu parceiro no escritório da Invest Corretora de Seguros"
                loading="lazy"
              />
              <div className="about__image-caption">
                <strong>Atendimento que começa pela escuta.</strong>
                <span>Consultoria próxima para pessoas, famílias e empresas.</span>
              </div>
            </Reveal>
          </div>
        </section>

        <ProofStrip />

        <section className="section services" id="solucoes">
          <Reveal>
            <SectionHeader
              eyebrow="Nossas soluções"
              title="Proteção para cada fase da vida e do negócio."
              text="Conheça as principais soluções da Invest e encontre a proteção adequada para o seu momento."
              align="center"
            />
          </Reveal>
          <div className="services__showcase">
            {primarySolutions.map((solution, index) => (
              <Reveal key={solution.id} delay={index * 80}>
                <InteractiveSolutionCard solution={solution} />
              </Reveal>
            ))}
          </div>

          <Reveal className="services__more-heading">
            <span>Outras soluções</span>
            <h3>Proteção completa, em todos os momentos.</h3>
          </Reveal>
          <div className="services__grid services__grid--compact">
            {additionalServices.map((service, index) => (
              <Reveal key={service.title} delay={index * 60}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section reasons" id="por-que-escolher">
          <Reveal>
            <SectionHeader
              eyebrow="Por que escolher a Invest?"
              title="Consultoria para decidir com segurança."
              text="A escolha do seguro certo começa por entender necessidade, perfil e momento de vida."
            />
          </Reveal>
          <div className="reasons__grid">
            {reasons.map((reason, index) => (
              <Reveal className="reason-card" key={reason.title} delay={index * 90}>
                <reason.icon aria-hidden="true" />
                <h3>{reason.title}</h3>
                <p>{reason.text}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section process">
          <Reveal>
            <SectionHeader
              eyebrow="Processo de atendimento"
              title="Seguro sem complicação."
              text="Do primeiro contato ao pós-venda, a Invest acompanha você com clareza e transparência."
              align="center"
            />
          </Reveal>
          <div className="process__steps">
            {processSteps.map((step, index) => (
              <Reveal className="process-step" key={step} delay={index * 70}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{step}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section cta">
          <div className="cta__content">
            <img src={brand.logoDark} alt="" aria-hidden="true" />
            <Reveal>
              <SectionHeader
                eyebrow="Cotação"
                title="Pronto para proteger o que realmente importa?"
                text="Fale com a Invest e encontre a solução ideal para você, sua família ou sua empresa."
                align="center"
              />
            </Reveal>
            <div className="cta__actions">
              <a className="button button--gold" href={contact.whatsapp.href} target="_blank" rel="noreferrer">
                <MessageCircle aria-hidden="true" />
                Falar no WhatsApp
              </a>
              <a className="button button--ghost" href={contact.whatsapp.href} target="_blank" rel="noreferrer">
                Solicitar cotação
                <ArrowRight aria-hidden="true" />
              </a>
            </div>
            <div className="cta__checks" aria-label="Garantias de atendimento">
              {["Atendimento personalizado", "Soluções sob medida", "Suporte pós-venda"].map((item) => (
                <span key={item}>
                  <CheckCircle2 aria-hidden="true" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
