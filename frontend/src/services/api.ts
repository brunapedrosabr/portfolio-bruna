// Comunicação com o back-end Spring Boot (hospedado no Render).
// A URL vem da variável VITE_API_URL ex: http://localhost:8080/api

const API_URL = import.meta.env.VITE_API_URL?.replace(/\/+$/, '') ?? ''

export function apiConfigurada(): boolean {
  return API_URL.length > 0
}

export type NovaMensagem = {
  nome: string
  email: string
  mensagem: string
  idioma: 'pt' | 'en'
}

export function acordarApi(): void {
  if (!apiConfigurada()) return
  fetch(`${API_URL}/health`, { mode: 'no-cors' }).catch(() => {
    // Silencioso: é só um "despertador".
  })
}

export async function salvarMensagem(dados: NovaMensagem): Promise<void> {
  const controle = new AbortController()
  const limite = setTimeout(() => controle.abort(), 20000)
  try {
    const resposta = await fetch(`${API_URL}/contatos`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dados),
      signal: controle.signal,
    })
    if (!resposta.ok) {
      throw new Error(`A API respondeu com status ${resposta.status}`)
    }
  } finally {
    clearTimeout(limite)
  }
}
