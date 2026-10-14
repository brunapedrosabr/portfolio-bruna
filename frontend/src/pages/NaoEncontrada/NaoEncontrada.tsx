import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import { ElementTile } from '../../components/ElementTile/ElementTile'
import { usePageTitle } from '../../hooks/usePageTitle'
import { useLanguage } from '../../i18n/useLanguage'

export function NaoEncontrada() {
  const { t } = useLanguage()
  usePageTitle(t.naoEncontrada.titulo)

  return (
    <section className="section">
      <div
        className="container"
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 20 }}
      >
        <ElementTile numero={404} simbolo="?" nome="???" tamanho="g" />
        <h1 style={{ margin: 0, fontSize: 'clamp(2rem, 5vw, 3rem)' }}>{t.naoEncontrada.titulo}</h1>
        <p style={{ margin: 0, color: 'var(--ink-soft)' }}>{t.naoEncontrada.texto}</p>
        <Link to="/" className="btn btn--primary">
          <FiArrowLeft aria-hidden="true" /> {t.naoEncontrada.voltar}
        </Link>
      </div>
    </section>
  )
}
