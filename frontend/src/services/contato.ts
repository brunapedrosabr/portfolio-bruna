import type { Idioma } from '../i18n/tipos'
import { apiConfigurada, salvarMensagem } from './api'
import { emailConfigurado, enviarEmail } from './email'

export class EnvioNaoConfiguradoError extends Error {
  constructor() {
    super('Nenhum canal de envio configurado (EmailJS ou API).')
    this.name = 'EnvioNaoConfiguradoError'
  }
}

export type DadosContato = {
  nome: string
  email: string
  mensagem: string
}

/**
 * Envia a mensagem do formulário por dois caminhos ao mesmo tempo:
 *  1. EmailJS: a mensagem chega no e-mail da Bruna;
 *  2. API Spring Boot: a mensagem fica salva no banco de dados (Supabase/PostgreSQL).
 * Basta um dos dois funcionar para o envio ser considerado um sucesso.
 */
export async function enviarContato(dados: DadosContato, idioma: Idioma): Promise<void> {
  const tarefas: Promise<void>[] = []

  if (emailConfigurado()) {
    tarefas.push(enviarEmail(dados))
  }
  if (apiConfigurada()) {
    tarefas.push(salvarMensagem({ ...dados, idioma }))
  }
  if (tarefas.length === 0) {
    throw new EnvioNaoConfiguradoError()
  }

  // Promise.any resolve assim que o primeiro canal der certo
  // e só falha se todos falharem.
  try {
    await Promise.any(tarefas)
  } catch (erro) {
    console.error('Falha em todos os canais de envio:', erro)
    throw new Error('Não foi possível enviar a mensagem.')
  }
}
