import type { Texto } from "../i18n/tipos";

export type Experiencia = {
  id: string;
  empresa: string;
  cargo: Texto;
  area: Texto;
  periodo: Texto;
  descricao: Texto;
  atividades?: Texto[];
  destaques?: Texto[];
};

// Da etapa mais recente (topo da coluna) para a mais antiga (base).
export const experiencias: Experiencia[] = [
  {
    id: "senior",
    empresa: "Localiza&Co",
    cargo: {
      pt: "Analista Sênior de Informações Gerenciais",
      en: "Senior Management Information Analyst",
    },
    area: {
      pt: "Centro de Soluções Compartilhadas (CSC)",
      en: "Shared Services Center (CSC)",
    },
    periodo: { pt: "Nov. 2025 — atual", en: "Nov 2025 — present" },
    descricao: {
      pt: "Análise, extração, modelagem e integração de dados para apoiar decisões e melhorar a performance da área.",
      en: "Data analysis, extraction, modeling and integration to support decisions and improve the team’s performance.",
    },
    atividades: [
      {
        pt: "Construção de reports com Power BI, Excel e SQL",
        en: "Building reports with Power BI, Excel and SQL",
      },
      {
        pt: "Automação de processos com Power Platform e Python",
        en: "Process automation with Power Platform and Python",
      },
      {
        pt: "Estratégias para aumentar a performance da área e reduzir custos",
        en: "Strategies to increase performance and reduce costs",
      },
      {
        pt: "Identificação de perfis e padrões nos dados",
        en: "Identifying profiles and patterns in data",
      },
      {
        pt: "Busca e implementação de novas plataformas e melhorias",
        en: "Finding and implementing new platforms and improvements",
      },
      {
        pt: "Gerenciamento de projetos, contato com fornecedores e interface com outras áreas",
        en: "Project management, vendor contact and collaboration with other teams",
      },
    ],
  },
  {
    id: "pleno",
    empresa: "Localiza&Co",
    cargo: {
      pt: "Analista Pleno de Informações Gerenciais",
      en: "Management Information Analyst",
    },
    area: {
      pt: "Centro de Soluções Compartilhadas (CSC)",
      en: "Shared Services Center (CSC)",
    },
    periodo: { pt: "Abr. 2024 — Out. 2025", en: "Apr 2024 — Oct 2025" },
    descricao: {
      pt: "Análise de dados, construção de reports e projetos de melhoria em informações gerenciais.",
      en: "Data analysis, reporting and improvement projects in management information.",
    },
    destaques: [
      {
        pt: "1º lugar no Programa Transforma CSC (nov. 2024)",
        en: "1st place in the Transforma CSC Program (Nov 2024)",
      },
      {
        pt: "3º lugar no Programa Oxigênio (mai. 2025)",
        en: "3rd place in the Oxigênio Program (May 2025)",
      },
    ],
  },
  {
    id: "junior",
    empresa: "Localiza&Co",
    cargo: {
      pt: "Analista Júnior de Informações Gerenciais",
      en: "Junior Management Information Analyst",
    },
    area: {
      pt: "Centro de Soluções Compartilhadas (CSC)",
      en: "Shared Services Center (CSC)",
    },
    periodo: { pt: "Fev. 2023 — Mar. 2024", en: "Feb 2023 — Mar 2024" },
    descricao: {
      pt: "Início como analista de informações gerenciais, com foco em análise e extração de dados e construção de relatórios.",
      en: "Started as a management information analyst, focused on data analysis, extraction and reporting.",
    },
  },
  {
    id: "estagio",
    empresa: "Localiza&Co",
    cargo: { pt: "Estagiária", en: "Intern" },
    area: {
      pt: "Centro de Excelência · Operações",
      en: "Center of Excellence · Operations",
    },
    periodo: { pt: "Ago. 2021 — Jan. 2023", en: "Aug 2021 — Jan 2023" },
    descricao: {
      pt: "Estágio no Centro de Excelência da área de Operações, onde começou minha trajetória na Localiza&Co.",
      en: "Internship at the Operations Center of Excellence, where my journey at Localiza&Co began.",
    },
  },
];

// Liderança e desenvolvimento de pessoas (programas internos da Localiza&Co)
export type Programa = {
  titulo: Texto;
  organizacao: Texto;
  periodo: Texto;
  texto: Texto;
  destaque?: Texto;
};

export const programas: Programa[] = [
  {
    titulo: {
      pt: "College · Programa de Estágio 2025",
      en: "College · 2025 Internship Program",
    },
    organizacao: {
      pt: "Universidade Localiza · mentoria",
      en: "Localiza University · mentoring",
    },
    periodo: { pt: "Jul. 2025 — Dez. 2025", en: "Jul 2025 — Dec 2025" },
    texto: {
      pt: "Mentora de um grupo de quatro estagiários durante cerca de 4 meses e meio, com reuniões semanais. Acompanhei o desenvolvimento de um projeto estratégico para a companhia, compartilhando experiências, habilidades técnicas e comportamentais e conectando o grupo à área de negócio.",
      en: "Mentor to a group of four interns for about four and a half months, with weekly meetings. I guided the development of a strategic project for the company, sharing experience, technical and soft skills, and connecting the group with the business area.",
    },
    destaque: {
      pt: "O projeto do grupo ficou entre os 3 melhores do programa, com dados, automações e IA.",
      en: "The group’s project ranked in the program’s top 3, using data, automation and AI.",
    },
  },
  {
    titulo: {
      pt: "Facilitadores do Conhecimento",
      en: "Knowledge Facilitators",
    },
    organizacao: {
      pt: "Localiza&Co · programa voluntário",
      en: "Localiza&Co · volunteer program",
    },
    periodo: { pt: "Atual", en: "Current" },
    texto: {
      pt: "Ministro treinamentos de Excel, Power BI e inteligência artificial (Copilot e ChatGPT) para colaboradores. É uma forma de conectar pessoas, desenvolver habilidades e tornar o conhecimento parte do dia a dia.",
      en: "I teach Excel, Power BI and artificial intelligence (Copilot and ChatGPT) workshops for employees. It is a way to connect people, build skills and make knowledge part of everyday work.",
    },
  },
];

export type Premio = {
  titulo: Texto;
  instituicao: string;
  data: Texto;
  descricao: Texto;
};

export const premios: Premio[] = [
  {
    titulo: {
      pt: "1º lugar · Transforma CSC (2ª edição)",
      en: "1st place · Transforma CSC (2nd edition)",
    },
    instituicao: "Localiza&Co",
    data: { pt: "Novembro de 2024", en: "November 2024" },
    descricao: {
      pt: "Programa de 4 meses da Diretoria do CSC com trilhas de Lean, SQL, Power BI, Inteligência Artificial e Python. Depois de cada trilha, desenvolvi em duas semanas um projeto aplicado à área e o apresentei para uma banca.",
      en: "A 4-month program by the CSC board with tracks in Lean, SQL, Power BI, Artificial Intelligence and Python. After each track, I built an applied project for my team in two weeks and presented it to a panel.",
    },
  },
  {
    titulo: {
      pt: "3º lugar · Programa Oxigênio 2024",
      en: "3rd place · Oxigênio Program 2024",
    },
    instituicao: "Localiza&Co",
    data: { pt: "Maio de 2025", en: "May 2025" },
    descricao: {
      pt: "Programa de desenvolvimento profissional de 8 meses, com workshops, mentorias e um projeto aplicado. O projeto do meu grupo ficou em 3º lugar e foi apresentado ao CEO e à Diretoria Executiva.",
      en: "An 8-month professional development program with workshops, mentoring and an applied project. My group’s project placed 3rd and was presented to the CEO and the Executive Board.",
    },
  },
  {
    titulo: {
      pt: "Melhor TI · 1º período noturno",
      en: "Best Interdisciplinary Project · 1st semester",
    },
    instituicao: "PUC Minas · We Make Software",
    data: { pt: "2026 · 1º semestre", en: "2026 · 1st semester" },
    descricao: {
      pt: "Trabalho Interdisciplinar com o software PoupaAí, apresentado no evento We Make Software.",
      en: "Interdisciplinary project with the PoupaAí software, presented at the We Make Software event.",
    },
  },
  {
    titulo: {
      pt: "Melhor TI · 2º período noturno",
      en: "Best Interdisciplinary Project · 2nd semester",
    },
    instituicao: "PUC Minas · We Make Software",
    data: { pt: "2026 · 2º semestre", en: "2026 · 2nd semester" },
    descricao: {
      pt: "Trabalho Interdisciplinar com o software Servify, apresentado no evento We Make Software.",
      en: "Interdisciplinary project with the Servify software, presented at the We Make Software event.",
    },
  },
];
