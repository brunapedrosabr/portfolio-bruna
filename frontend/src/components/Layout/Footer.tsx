import { Link } from 'react-router-dom'
import { FiArrowUpRight } from 'react-icons/fi'
import { perfil } from '../../data/perfil'
import { useLanguage } from '../../i18n/useLanguage'
import { SocialLinks } from '../SocialLinks/SocialLinks'

const ANO_ATUAL = new Date().getFullYear()

export function Footer({ mostrarChamada }: { mostrarChamada: boolean }) {
  const { t } = useLanguage()

  return (
    <footer className="site-footer">
      {mostrarChamada && (
        <section className="cta-band">
          <div className="container cta-band__inner">
            <div>
              <h2>{t.rodape.ctaTitulo}</h2>
              <p>{t.rodape.ctaTexto}</p>
            </div>
            <Link to="/contato" className="btn btn--primary">
              {t.rodape.ctaBotao} <FiArrowUpRight aria-hidden="true" />
            </Link>
          </div>
        </section>
      )}
      <div className="container site-footer__base">
        <span>
          © {ANO_ATUAL} {perfil.nome}
        </span>
        <span>{t.rodape.frase}</span>
        <SocialLinks />
      </div>
    </footer>
  )
}
