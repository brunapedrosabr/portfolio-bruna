import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react'
import { LanguageContext, type LanguageContextValue } from './LanguageContext'
import { traducoes } from './traducoes'
import type { Idioma, Texto } from './tipos'

const CHAVE_STORAGE = 'portfolio-idioma'

// Usa o idioma salvo; se não houver, segue o idioma do navegador.
function idiomaInicial(): Idioma {
  try {
    const salvo = localStorage.getItem(CHAVE_STORAGE)
    if (salvo === 'pt' || salvo === 'en') return salvo
  } catch {
    // localStorage pode estar bloqueado (aba anônima, por exemplo).
  }
  return navigator.language?.toLowerCase().startsWith('pt') ? 'pt' : 'en'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [idioma, setIdiomaAtual] = useState<Idioma>(idiomaInicial)

  const setIdioma = useCallback((novo: Idioma) => {
    setIdiomaAtual(novo)
    try {
      localStorage.setItem(CHAVE_STORAGE, novo)
    } catch {
      // Sem problema: o idioma só não fica salvo para a próxima visita.
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = idioma === 'pt' ? 'pt-BR' : 'en'
  }, [idioma])

  const valor = useMemo<LanguageContextValue>(
    () => ({
      idioma,
      setIdioma,
      t: traducoes[idioma],
      tr: (texto: Texto) => texto[idioma],
    }),
    [idioma, setIdioma],
  )

  return <LanguageContext.Provider value={valor}>{children}</LanguageContext.Provider>
}
