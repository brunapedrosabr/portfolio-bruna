import type { Texto } from "../i18n/tipos";

// Apresentação da página "Sobre mim".
export const apresentacao: Texto[] = [
  {
    pt: "Olá! Sou Bruna Pedrosa Nunes, engenheira química pela PUC Minas, com MBA em Gestão de Custos e Operações, e estudante de Engenharia de Software na mesma universidade.",
    en: "Hi! I’m Bruna Pedrosa Nunes, a Chemical Engineering graduate from PUC Minas with an MBA in Cost and Operations Management, and a Software Engineering student at the same university.",
  },
  {
    pt: "Atuo como Analista Sênior de Informações Gerenciais no Centro de Soluções Compartilhadas da Localiza&Co, onde comecei como estagiária em 2021. Minha rotina conecta análise, extração, modelagem e integração de dados a estratégias para aumentar a performance da área e reduzir custos.",
    en: "I work as a Senior Management Information Analyst at Localiza&Co’s Shared Services Center, where I started as an intern in 2021. My work connects data analysis, extraction, modeling and integration with strategies to improve performance and reduce costs.",
  },
  {
    pt: "Uso Power BI, Excel, SQL (GCP/AWS), Power Platform e Python para construir relatórios e automatizar processos. Também participo do programa voluntário Facilitadores do Conhecimento, ministrando treinamentos de Excel, Power BI e inteligência artificial para colaboradores.",
    en: "I use Power BI, Excel, SQL (GCP/AWS), Power Platform and Python to build reports and automate processes. I also volunteer in the Knowledge Facilitators program, teaching Excel, Power BI and artificial intelligence workshops for employees.",
  },
  {
    pt: "Meu interesse está na interseção entre dados, tecnologia e melhoria de processos. Na Engenharia de Software, busco ampliar minha atuação no desenvolvimento de sistemas e construir soluções que transformem problemas reais em resultados.",
    en: "My interests lie where data, technology and process improvement meet. Through Software Engineering, I want to grow into systems development and build solutions that turn real problems into results.",
  },
];

// "Ficha técnica" no estilo das fichas de segurança de reagentes.
export const fichaTecnica: { rotulo: Texto; valor: Texto }[] = [
  {
    rotulo: { pt: "Nome", en: "Name" },
    valor: { pt: "Bruna Pedrosa Nunes", en: "Bruna Pedrosa Nunes" },
  },
  {
    rotulo: { pt: "Composição", en: "Composition" },
    valor: {
      pt: "Química + Dados + Software",
      en: "Chemistry + Data + Software",
    },
  },
  {
    rotulo: { pt: "Base", en: "Based in" },
    valor: {
      pt: "Belo Horizonte, MG · Brasil",
      en: "Belo Horizonte, MG · Brazil",
    },
  },
  {
    rotulo: { pt: "Atuação", en: "Current role" },
    valor: {
      pt: "Analista Sênior de Informações Gerenciais · Localiza&Co",
      en: "Senior Management Information Analyst · Localiza&Co",
    },
  },
  {
    rotulo: { pt: "Formação", en: "Education" },
    valor: {
      pt: "Eng. Química · MBA · Eng. de Software (em andamento)",
      en: "Chemical Eng. · MBA · Software Eng. (in progress)",
    },
  },
  {
    rotulo: { pt: "Reatividade", en: "Reactivity" },
    valor: { pt: "Alta com novos desafios", en: "High with new challenges" },
  },
];

export const formacao: { periodo: Texto; titulo: Texto; instituicao: Texto }[] =
  [
    {
      periodo: { pt: "Previsão: dez. 2029", en: "Expected: Dec 2029" },
      titulo: {
        pt: "Engenharia de Software",
        en: "B.Sc. in Software Engineering",
      },
      instituicao: {
        pt: "PUC Minas · em andamento",
        en: "PUC Minas · in progress",
      },
    },
    {
      periodo: { pt: "Abr. 2024", en: "Apr 2024" },
      titulo: {
        pt: "MBA em Gestão de Custos e Operações",
        en: "MBA in Cost and Operations Management",
      },
      instituicao: { pt: "PUC Minas", en: "PUC Minas" },
    },
    {
      periodo: { pt: "Dez. 2022", en: "Dec 2022" },
      titulo: { pt: "Engenharia Química", en: "B.Sc. in Chemical Engineering" },
      instituicao: { pt: "PUC Minas", en: "PUC Minas" },
    },
    {
      periodo: { pt: "Abr. 2021", en: "Apr 2021" },
      titulo: { pt: "Técnico em Química", en: "Chemistry Technician" },
      instituicao: { pt: "CEFET-MG", en: "CEFET-MG" },
    },
  ];

export const cursos: Texto[] = [
  { pt: "Excel Avançado · Senac (2021)", en: "Advanced Excel · Senac (2021)" },
  {
    pt: "Gestão da Cadeia de Suprimentos · FGV (2023)",
    en: "Supply Chain Management · FGV (2023)",
  },
];

export type NivelHabilidade = "avancado" | "basico" | "estudando";

// Cada habilidade vira um "elemento" com símbolo próprio.
export const habilidades: {
  simbolo: string;
  nome: string;
  nivel: NivelHabilidade;
}[] = [
  { simbolo: "Pb", nome: "Power BI", nivel: "avancado" },
  { simbolo: "Xl", nome: "Excel", nivel: "avancado" },
  { simbolo: "Sq", nome: "SQL", nivel: "avancado" },
  { simbolo: "Pa", nome: "Power Automate", nivel: "avancado" },
  { simbolo: "Pp", nome: "Power Apps", nivel: "avancado" },
  { simbolo: "Cs", nome: "Copilot Studio", nivel: "avancado" },
  { simbolo: "Py", nome: "Python", nivel: "basico" },
  { simbolo: "Jv", nome: "Java", nivel: "basico" },
  { simbolo: "Js", nome: "JavaScript", nivel: "basico" },
  { simbolo: "Ht", nome: "HTML", nivel: "basico" },
  { simbolo: "Ss", nome: "CSS", nivel: "basico" },
  { simbolo: "C", nome: "C", nivel: "basico" },
  { simbolo: "Re", nome: "React", nivel: "estudando" },
  { simbolo: "Ts", nome: "TypeScript", nivel: "estudando" },
  { simbolo: "Sb", nome: "Spring Boot", nivel: "estudando" },
];

export const idiomas: { nome: Texto; nivel: Texto }[] = [
  {
    nome: { pt: "Português", en: "Portuguese" },
    nivel: { pt: "Nativo", en: "Native" },
  },
  {
    nome: { pt: "Inglês", en: "English" },
    nivel: { pt: "Fluente", en: "Fluent" },
  },
  {
    nome: { pt: "Espanhol", en: "Spanish" },
    nivel: { pt: "Intermediário · DELE B1", en: "Intermediate · DELE B1" },
  },
  {
    nome: { pt: "Alemão", en: "German" },
    nivel: { pt: "Básico", en: "Basic" },
  },
  {
    nome: { pt: "Mandarim", en: "Mandarin" },
    nivel: { pt: "Básico", en: "Basic" },
  },
];
