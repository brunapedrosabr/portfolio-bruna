import { createContext } from 'react'
import type { Idioma, Texto } from './tipos'
import type { Traducao } from './traducoes'

export type LanguageContextValue = {
  idioma: Idioma
  setIdioma: (idioma: Idioma) => void
  /** Textos fixos da interface no idioma atual. */
  t: Traducao
  /** Escolhe a versão certa de um texto bilíngue dos arquivos de dados. */
  tr: (texto: Texto) => string
}

export const LanguageContext = createContext<LanguageContextValue | null>(null)
