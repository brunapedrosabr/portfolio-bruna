import { Link } from 'react-router-dom'
import { perfil } from '../../data/perfil'
import { useLanguage } from '../../i18n/useLanguage'
import { ElementTile } from '../ElementTile/ElementTile'
import { LanguageToggle } from './LanguageToggle'
import { PeriodicNav } from './PeriodicNav'

export function Header() {
  const { t } = useLanguage()

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link to="/" className="brand" aria-label={t.header.irInicio}>
          <ElementTile numero={35} simbolo="Br" variante="marca" tamanho="p" />
          <span className="brand__texto">
            <strong>{perfil.nomeCurto}</strong>
            <span>{t.header.subtitulo}</span>
          </span>
        </Link>
        <PeriodicNav />
        <LanguageToggle />
      </div>
    </header>
  )
}
