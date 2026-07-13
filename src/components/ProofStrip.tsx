import { trustItems } from "../data/siteContent";
import { CountUp } from "./CountUp";
import { Reveal } from "./Reveal";

export function ProofStrip() {
  return (
    <section className="proof-strip" aria-label="Diferenciais da Invest">
      <div className="proof-strip__inner">
        {trustItems.map((item, index) => (
          <Reveal className="proof-strip__item" key={item.title} delay={index * 70}>
            <item.icon aria-hidden="true" />
            <div>
              <strong>
                {item.numericValue ? <CountUp value={item.numericValue} prefix="+" suffix=" anos" /> : item.title}
              </strong>
              <span>{item.text}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
