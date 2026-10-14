import emailjs from "@emailjs/browser";

// Envio de e-mail direto do front-end com EmailJS (https://www.emailjs.com/).
// Configure as variáveis VITE_EMAILJS_* (veja .env.example e o README).

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID ?? "";
const TEMPLATE_PARA_MIM = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_FOR_ME ?? "";
const TEMPLATE_RESPOSTA =
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID_FOR_SENDER ?? "";
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? "";

export function emailConfigurado(): boolean {
  return Boolean(SERVICE_ID && TEMPLATE_PARA_MIM && PUBLIC_KEY);
}

export type DadosEmail = {
  nome: string;
  email: string;
  mensagem: string;
};

export async function enviarEmail(dados: DadosEmail): Promise<void> {
  const parametros = {
    name: dados.nome,
    email: dados.email,
    message: dados.mensagem,
    title: "Contato pelo portfólio",
    time: new Date().toLocaleString("pt-BR"),
  };

  // E-mail principal: chega na caixa de entrada da Bruna.
  await emailjs.send(SERVICE_ID, TEMPLATE_PARA_MIM, parametros, {
    publicKey: PUBLIC_KEY,
  });

  // Resposta automática para quem escreveu.
  if (TEMPLATE_RESPOSTA) {
    emailjs
      .send(SERVICE_ID, TEMPLATE_RESPOSTA, parametros, {
        publicKey: PUBLIC_KEY,
      })
      .catch((erro: unknown) =>
        console.warn("Resposta automática não enviada:", erro),
      );
  }
}
