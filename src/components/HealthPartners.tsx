import { healthOperators } from "../data/siteContent";
import { Reveal } from "./Reveal";

export function HealthPartners() {
  return (
    <Reveal className="health-partners">
      <div className="health-partners__heading">
        <span>Operadoras parceiras</span>
        <h3>Compare planos, redes e condições em um só atendimento.</h3>
        <p>A disponibilidade de produtos e redes depende do perfil, modalidade e região de contratação.</p>
      </div>
      <div className="health-partners__logos" aria-label="Operadoras de planos de saúde atendidas pela Invest">
        {healthOperators.map((operator) => (
          <div className="health-partners__logo" key={operator.name}>
            <img src={operator.logo} alt={operator.name} loading="lazy" />
          </div>
        ))}
      </div>
    </Reveal>
  );
}
