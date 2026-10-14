import type { Idioma } from '../../i18n/tipos'
import { useLanguage } from '../../i18n/useLanguage'

const opcoes: { codigo: Idioma; rotulo: string; lang: string }[] = [
  { codigo: 'pt', rotulo: 'PT', lang: 'pt-BR' },
  { codigo: 'en', rotulo: 'EN', lang: 'en' },
]

// Botão PT | EN que troca o idioma do site inteiro.
export function LanguageToggle() {
  const { idioma, setIdioma, t } = useLanguage()

  return (
    <div className="lang-toggle" role="group" aria-label={t.header.idioma}>
      {opcoes.map((opcao) => (
        <button
          key={opcao.codigo}
          type="button"
          lang={opcao.lang}
          className={`lang-toggle__botao${idioma === opcao.codigo ? ' is-active' : ''}`}
          aria-pressed={idioma === opcao.codigo}
          onClick={() => setIdioma(opcao.codigo)}
        >
          {opcao.rotulo}
        </button>
      ))}
    </div>
  )
}
