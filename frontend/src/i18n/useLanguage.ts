import { useContext } from 'react'
import { LanguageContext } from './LanguageContext'

export function useLanguage() {
  const contexto = useContext(LanguageContext)
  if (!contexto) {
    throw new Error('useLanguage precisa ser usado dentro de <LanguageProvider>.')
  }
  return contexto
}
