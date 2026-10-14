import type { Texto } from "../i18n/tipos";

export const perfil = {
  nome: "Bruna Pedrosa Nunes",
  nomeCurto: "Bruna Pedrosa",
  email: "buupnunes@gmail.com",
  linkedin: "https://www.linkedin.com/in/brunapedrosabr/",
  github: "https://github.com/brunapedrosabr",
  whatsapp: "5531999344716",
  cidade: {
    pt: "Belo Horizonte, MG · Brasil",
    en: "Belo Horizonte, MG · Brazil",
  } satisfies Texto,
  curriculo: "/curriculo-bruna-pedrosa.pdf",
};

export const linkWhatsapp = perfil.whatsapp
  ? `https://wa.me/${perfil.whatsapp}`
  : "";
