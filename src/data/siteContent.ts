import {
  BadgeDollarSign,
  BarChart3,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  Car,
  CheckCircle2,
  ClipboardCheck,
  CloudLightning,
  Coins,
  Flame,
  HandCoins,
  HandHeart,
  Handshake,
  Headphones,
  HeartPulse,
  Home,
  Hospital,
  PanelsTopLeft,
  Plane,
  Scale,
  ShieldAlert,
  ShieldCheck,
  SlidersHorizontal,
  Stethoscope,
  Target,
  Tractor,
  Truck,
  Umbrella,
  UserRound,
  UserRoundCheck,
  UsersRound,
  Zap,
} from "lucide-react";

export const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Quem somos", href: "#quem-somos" },
  { label: "Soluções", href: "#solucoes" },
  { label: "Por que escolher", href: "#por-que-escolher" },
  { label: "Contato", href: "#contato" },
];

export const brand = {
  name: "Invest Corretora de Seguros",
  tagline: "Protegendo o que realmente importa.",
  symbol: "/assets/invest-simbolo-oficial.webp",
  logoDark: "/assets/invest-logo-oficial.webp",
  logoLight: "/assets/invest-logo-oficial.webp",
};

export const hero = {
  eyebrow: "Especialistas em planos de saúde",
  title: "Sua saúde vem primeiro.",
  subtitle:
    "Planos completos e acessíveis para você, sua família ou sua empresa, com opções a partir de R$ 224,00.",
  body:
    "Há mais de 10 anos, a Invest compara planos, valores e redes credenciadas para encontrar a opção adequada ao seu momento.",
};

export const quickChoices = [
  { id: "health", label: "Plano de saúde", detail: "Individual, familiar ou empresarial", icon: Stethoscope },
  { id: "consortium", label: "Consórcio", detail: "Imóveis, veículos e equipamentos", icon: Coins },
  { id: "auto", label: "Seguro Auto", detail: "Proteção e assistência para o veículo", icon: Car },
  { id: "life", label: "Seguro de Vida", detail: "Cuidado para você e sua família", icon: HandHeart },
  { id: "business", label: "Seguro Empresarial", detail: "Patrimônio, operação e equipe", icon: Building2 },
];

export const proofPoints = [
  { icon: ShieldCheck, title: "Proteção", text: "para o que você construiu" },
  { icon: UsersRound, title: "Confiança", text: "em cada escolha" },
  { icon: Target, title: "Tranquilidade", text: "para seguir em frente" },
  { icon: CheckCircle2, title: "Consultoria", text: "com clareza e eficiência" },
];

export const primarySolutions = [
  {
    id: "health",
    category: "Nossa especialidade",
    title: "Planos de Saúde",
    image: "/assets/solution-health.webp",
    imagePosition: "center",
    highlight: "Planos a partir de R$ 224,00*",
    description:
      "Do plano mais completo ao mais acessível, com orientação para escolher valores, coberturas e redes credenciadas.",
    features: [
      { id: "individual", title: "Planos individuais", description: "Opções para cuidar da sua saúde em cada fase da vida.", icon: UserRound },
      { id: "family", title: "Planos familiares", description: "Proteção e cuidado para toda a família.", icon: UsersRound },
      { id: "corporate", title: "Planos empresariais", description: "Soluções para empresas, sócios e colaboradores.", icon: Building2 },
      { id: "emergency", title: "Urgência e emergência", description: "Amparo quando não dá para esperar.", icon: Hospital },
      { id: "appointments", title: "Consultas e exames", description: "Acesso a consultas, exames e terapias conforme o plano.", icon: Stethoscope },
      { id: "hospital", title: "Internações e cirurgias", description: "Coberturas hospitalares conforme as condições contratadas.", icon: HeartPulse },
    ],
  },
  {
    id: "auto",
    category: "Proteção patrimonial",
    title: "Seguro Automóvel",
    image: "/assets/solution-auto.webp",
    imagePosition: "center",
    highlight: null,
    description:
      "Proteção completa para o seu veículo e suporte nos imprevistos do dia a dia.",
    features: [
      { id: "collision", title: "Colisão, incêndio, roubo e furto", description: "Proteção para os principais riscos do veículo.", icon: ShieldAlert },
      { id: "third-party", title: "Danos a terceiros", description: "Amparo para danos causados a outras pessoas.", icon: UserRoundCheck },
      { id: "support", title: "Assistência 24 horas", description: "Suporte quando você mais precisar.", icon: Headphones },
      { id: "reserve-car", title: "Carro reserva", description: "Mobilidade durante o período de reparo.", icon: Car },
      { id: "glass", title: "Vidros, faróis e retrovisores", description: "Cobertura para componentes essenciais do veículo.", icon: PanelsTopLeft },
      { id: "weather", title: "Fenômenos da natureza", description: "Proteção para eventos climáticos previstos na apólice.", icon: CloudLightning },
      { id: "tow", title: "Guincho e socorro mecânico", description: "Assistência para pane ou imobilização do veículo.", icon: Truck },
    ],
  },
  {
    id: "life",
    category: "Proteção familiar",
    title: "Seguro de Vida",
    image: "/assets/solution-life.webp",
    imagePosition: "center",
    highlight: null,
    description:
      "Segurança financeira e cuidado para quem faz parte da sua história.",
    features: [
      { id: "family", title: "Proteção para a família", description: "Segurança financeira para quem você ama.", icon: UsersRound },
      { id: "disability", title: "Invalidez permanente", description: "Amparo financeiro conforme as condições contratadas.", icon: ShieldCheck },
      { id: "illness", title: "Doenças graves", description: "Antecipação de benefício para diagnósticos cobertos.", icon: HeartPulse },
      { id: "funeral", title: "Assistência funeral", description: "Apoio e cuidado em um momento delicado.", icon: HandHeart },
      { id: "succession", title: "Planejamento sucessório", description: "Organização e proteção para o futuro da família.", icon: ClipboardCheck },
      { id: "flexibility", title: "Flexibilidade e personalização", description: "Coberturas ajustadas ao seu momento de vida.", icon: SlidersHorizontal },
    ],
  },
  {
    id: "business",
    category: "Proteção empresarial",
    title: "Seguro Empresarial",
    image: "/assets/solution-business.webp",
    imagePosition: "center",
    highlight: null,
    description:
      "Coberturas sob medida para proteger patrimônio, operação e continuidade do negócio.",
    features: [
      { id: "fire", title: "Incêndio", description: "Cobertura para danos causados por incêndio.", icon: Flame },
      { id: "theft", title: "Roubo e furto", description: "Proteção dos bens conforme os riscos contratados.", icon: ShieldAlert },
      { id: "electrical", title: "Danos elétricos", description: "Amparo para equipamentos e instalações.", icon: Zap },
      { id: "liability", title: "Responsabilidade civil", description: "Proteção diante de danos causados a terceiros.", icon: Scale },
      { id: "lost-profits", title: "Lucros cessantes", description: "Suporte financeiro após eventos cobertos.", icon: BarChart3 },
      { id: "employees", title: "Proteção para colaboradores", description: "Soluções que ajudam a cuidar da equipe.", icon: UsersRound },
    ],
  },
  {
    id: "consortium",
    category: "Planejamento financeiro",
    title: "Consórcios",
    image: "/assets/solution-consortium.webp",
    imagePosition: "center",
    highlight: null,
    description:
      "Planejamento para conquistar bens e projetos com organização e flexibilidade.",
    features: [
      { id: "property", title: "Imóveis", description: "Planejamento para casa, terreno ou imóvel comercial.", icon: Home },
      { id: "vehicles", title: "Veículos", description: "Opções para carros, motos e veículos de trabalho.", icon: Car },
      { id: "equipment", title: "Máquinas e equipamentos", description: "Investimento planejado para ampliar sua operação.", icon: Tractor },
      { id: "capitalization", title: "Capitalização planejada", description: "Disciplina para transformar planos em patrimônio.", icon: Coins },
      { id: "interest", title: "Sem juros", description: "Aquisição planejada sem juros de financiamento.", icon: BadgeDollarSign },
      { id: "planning", title: "Planejamento financeiro", description: "Parcelas organizadas dentro do seu orçamento.", icon: CalendarDays },
      { id: "purchase-power", title: "Poder de compra", description: "Carta de crédito para negociar com mais força.", icon: HandCoins },
      { id: "adaptable", title: "Flexibilidade", description: "Alternativas que acompanham suas necessidades.", icon: SlidersHorizontal },
      { id: "goals", title: "Realização de sonhos", description: "Um caminho planejado para alcançar seus objetivos.", icon: Target },
    ],
  },
];

export const additionalServices = [
  {
    title: "Seguro Residencial",
    icon: Home,
    description:
      "Proteção para sua casa, seus bens e sua tranquilidade, com coberturas contra imprevistos domésticos.",
    benefits: ["Proteção patrimonial", "Coberturas residenciais", "Assistência em emergências"],
  },
  {
    title: "Previdência Privada",
    icon: BadgeDollarSign,
    description:
      "Planejamento para o futuro com mais segurança, organização e proteção financeira.",
    benefits: ["Planejamento financeiro", "Proteção de longo prazo", "Estratégia personalizada"],
  },
  {
    title: "Seguro Viagem",
    icon: Plane,
    description:
      "Viaje com tranquilidade, sabendo que você conta com suporte em situações inesperadas.",
    benefits: ["Assistência em viagem", "Suporte para imprevistos", "Coberturas conforme destino"],
  },
];

export const trustItems = [
  { icon: HeartPulse, title: "+10 anos", text: "de experiência em planos de saúde", numericValue: 10 },
  { icon: UserRoundCheck, title: "Atendimento consultivo", text: "personalizado para cada cliente" },
  { icon: Building2, title: "Proteção completa", text: "para pessoas, famílias e empresas" },
  { icon: Handshake, title: "Grandes seguradoras", text: "parcerias para buscar boas soluções" },
];

export const reasons = [
  {
    icon: BriefcaseBusiness,
    title: "Experiência comprovada",
    text: "Mais de 10 anos de atuação no mercado, com conhecimento para indicar as melhores soluções.",
  },
  {
    icon: UsersRound,
    title: "Atendimento personalizado",
    text: "Cada cliente é único. A Invest entende sua necessidade antes de indicar qualquer proteção.",
  },
  {
    icon: ShieldCheck,
    title: "Parcerias com grandes seguradoras",
    text: "Trabalhamos para encontrar coberturas e condições adequadas ao seu perfil.",
  },
  {
    icon: Umbrella,
    title: "Melhor custo-benefício",
    text: "Proteção completa, com opções que cabem no seu planejamento.",
  },
];

export const processSteps = [
  "Entendimento da necessidade",
  "Análise das melhores opções",
  "Apresentação da cotação",
  "Contratação com orientação",
  "Suporte pós-venda",
];

export const healthOperators = [
  { name: "SulAmérica Saúde", logo: "/assets/health-operators/sulamerica.webp" },
  { name: "Amil", logo: "/assets/health-operators/amil.webp" },
  { name: "Bradesco Saúde", logo: "/assets/health-operators/bradesco-saude.webp" },
  { name: "GEAP Saúde", logo: "/assets/health-operators/geap-saude.webp" },
  { name: "Select Saúde", logo: "/assets/health-operators/select-saude.webp" },
  { name: "Seguros Unimed", logo: "/assets/health-operators/seguros-unimed.webp" },
  { name: "Hapvida", logo: "/assets/health-operators/hapvida.webp" },
  { name: "Humana Saúde", logo: "/assets/health-operators/humana-saude.webp" },
];
