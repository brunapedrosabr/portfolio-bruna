import type { Texto } from "../i18n/tipos";

export type StatusProjeto = "concluido" | "andamento";

export type Imagem = {
  src: string;
  legenda: Texto;
};

export type Projeto = {
  id: string;
  nome: string;
  periodo: { ano: number; semestre: 1 | 2 };
  status: StatusProjeto;
  contexto: Texto;
  descricao: Texto;
  minhaParte?: Texto;
  premio?: Texto;
  tecnologias: string[];
  github?: string;
  deploy?: string;
  prototipo?: string;
  imagens: Imagem[];
};

export const projetos: Projeto[] = [
  {
    id: "gastrobh",
    nome: "GastroBH",
    periodo: { ano: 2025, semestre: 2 },
    status: "concluido",
    contexto: {
      pt: "Trabalho Prático 2 · Desenvolvimento de Interfaces Web · PUC Minas",
      en: "Practical Assignment 2 · Web Interface Development · PUC Minas",
    },
    descricao: {
      pt: "Guia gastronômico de Belo Horizonte para descobrir restaurantes de diferentes categorias e estilos culinários, com mapa, favoritos, login e uma área para cadastrar e gerenciar restaurantes. Os dados ficam em JSON e são carregados dinamicamente.",
      en: "A food guide to Belo Horizonte for discovering restaurants of different categories and cuisines, with a map, favorites, login and an area to add and manage restaurants. Data is stored as JSON and loaded dynamically.",
    },
    tecnologias: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "JSON Server",
      "Mapbox",
    ],
    github: "https://github.com/brunapedrosabr/trabalho-2-DIW",
    imagens: [
      {
        src: "/projetos/gastrobh-home.webp",
        legenda: {
          pt: "Página inicial com restaurantes em destaque",
          en: "Home page with featured restaurants",
        },
      },
      {
        src: "/projetos/gastrobh-mapa.webp",
        legenda: { pt: "Mapa dos restaurantes", en: "Restaurant map" },
      },
      {
        src: "/projetos/gastrobh-login.webp",
        legenda: { pt: "Tela de login", en: "Login screen" },
      },
    ],
  },
  {
    id: "poupaai",
    nome: "PoupaAí",
    periodo: { ano: 2025, semestre: 2 },
    status: "concluido",
    contexto: {
      pt: "Trabalho Interdisciplinar 1 · PUC Minas",
      en: "Interdisciplinary Project 1 · PUC Minas",
    },
    descricao: {
      pt: "Plataforma que ajuda consumidores a encontrar os melhores preços nos supermercados: comparação de preços, listas de compras, alertas de ofertas, avaliações e mapa dos mercados.",
      en: "A platform that helps shoppers find the best supermarket prices: price comparison, shopping lists, deal alerts, reviews and a map of the stores.",
    },
    premio: {
      pt: "Melhor Trabalho Interdisciplinar do 1º período noturno · We Make Software",
      en: "Best Interdisciplinary Project, 1st evening semester · We Make Software",
    },
    tecnologias: ["HTML", "CSS", "JavaScript", "Bootstrap", "jQuery"],
    github:
      "https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2025-2-ti1-5567100-poupa-ai",
    imagens: [
      {
        src: "/projetos/poupaai-home.webp",
        legenda: {
          pt: "Página inicial com ofertas",
          en: "Home page with deals",
        },
      },
      {
        src: "/projetos/poupaai-comparador.webp",
        legenda: { pt: "Comparador de preços", en: "Price comparison" },
      },
      {
        src: "/projetos/poupaai-login.webp",
        legenda: { pt: "Tela de login", en: "Login screen" },
      },
    ],
  },
  {
    id: "servify",
    nome: "Servify",
    periodo: { ano: 2026, semestre: 1 },
    status: "concluido",
    contexto: {
      pt: "Trabalho Interdisciplinar 2 · PUC Minas",
      en: "Interdisciplinary Project 2 · PUC Minas",
    },
    descricao: {
      pt: "Sistema web que automatiza a gestão operacional e financeira de negócios de serviços com comissionamento, como barbearias, salões e estúdios de estética: clientes, colaboradores, serviços, agendamentos, comissões e relatórios. Arquitetura cliente-servidor com API REST.",
      en: "A web system that automates operational and financial management for commission-based service businesses such as barbershops, salons and beauty studios: clients, staff, services, bookings, commissions and reports. Client-server architecture with a REST API.",
    },
    premio: {
      pt: "Melhor Trabalho Interdisciplinar do 2º período noturno · We Make Software",
      en: "Best Interdisciplinary Project, 2nd evening semester · We Make Software",
    },
    tecnologias: ["React", "TypeScript", "Java", "Spring Boot", "PostgreSQL"],
    github:
      "https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2026-1-ti2-1381100-grupo3-servify",
    deploy: "https://plf-es-2026-1-ti2-1381100-grupo3-servify.onrender.com/",
    imagens: [
      {
        src: "/projetos/servify-dashboard.webp",
        legenda: {
          pt: "Dashboard com indicadores do negócio",
          en: "Dashboard with business indicators",
        },
      },
      {
        src: "/projetos/servify-colaboradores.webp",
        legenda: { pt: "Gestão de colaboradores", en: "Staff management" },
      },
      {
        src: "/projetos/servify-login.webp",
        legenda: { pt: "Tela de login", en: "Login screen" },
      },
    ],
  },
  {
    id: "mais-saude",
    nome: "+Saúde",
    periodo: { ano: 2026, semestre: 2 },
    status: "andamento",
    contexto: {
      pt: "Trabalho Interdisciplinar Centrado no Usuário · PUC Minas",
      en: "User-Centered Interdisciplinary Project · PUC Minas",
    },
    descricao: {
      pt: "Rede social focada em saúde: feed de publicações, comunidades, eventos esportivos, metas gamificadas e informações sobre unidades de saúde próximas, alinhada ao ODS 3.",
      en: "A health-focused social network: a post feed, communities, sports events, gamified goals and information about nearby health units, aligned with SDG 3.",
    },
    tecnologias: ["React", "Java", "Spring Boot", "MongoDB"],
    github:
      "https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2026-2-ti2-7600100-mais-saude",
    prototipo: "https://edge-coding-63500790.figma.site",
    imagens: [],
  },
];

export const projetosOrdenados = [...projetos].sort(
  (a, b) =>
    a.periodo.ano - b.periodo.ano || a.periodo.semestre - b.periodo.semestre,
);
