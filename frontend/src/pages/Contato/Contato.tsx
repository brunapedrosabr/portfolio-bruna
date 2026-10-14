import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa6'
import { FiArrowUpRight, FiMail, FiMapPin } from 'react-icons/fi'
import { PageHeading } from '../../components/PageHeading/PageHeading'
import { elementoPorRota } from '../../data/elementos'
import { linkWhatsapp, perfil } from '../../data/perfil'
import { usePageTitle } from '../../hooks/usePageTitle'
import { useLanguage } from '../../i18n/useLanguage'
import { ContactForm } from './ContactForm'
import './Contato.css'

export function Contato() {
  const { t, tr } = useLanguage()
  usePageTitle(t.contato.titulo)

  // Ícones clicáveis (e-mail, WhatsApp, LinkedIn).
  const canais = [
    {
      rotulo: t.contato.canais.email,
      valor: perfil.email,
      href: `mailto:${perfil.email}`,
      Icone: FiMail,
      externo: false,
    },
    {
      rotulo: t.contato.canais.whatsapp,
      valor: perfil.whatsapp ? `+${perfil.whatsapp}` : '',
      href: linkWhatsapp,
      Icone: FaWhatsapp,
      externo: true,
    },
    {
      rotulo: t.contato.canais.linkedin,
      valor: perfil.nome,
      href: perfil.linkedin,
      Icone: FaLinkedin,
      externo: true,
    },
    {
      rotulo: t.contato.canais.github,
      valor: '@brunapedrosabr',
      href: perfil.github,
      Icone: FaGithub,
      externo: true,
    },
  ].filter((canal) => canal.href)

  return (
    <>
      <PageHeading
        elemento={elementoPorRota('/contato')}
        eyebrow={t.contato.eyebrow}
        titulo={t.contato.titulo}
        subtitulo={t.contato.subtitulo}
      />

      <section className="section">
        <div className="container contato">
          <div>
            <h2 className="contato__titulo">{t.contato.canaisTitulo}</h2>
            <p className="contato__texto">{t.contato.canaisTexto}</p>
            <ul className="canais">
              {canais.map(({ rotulo, valor, href, Icone, externo }) => (
                <li key={rotulo}>
                  <a href={href} {...(externo ? { target: '_blank', rel: 'noreferrer' } : {})}>
                    <span className="canais__icone">
                      <Icone aria-hidden="true" />
                    </span>
                    <span className="canais__texto">
                      <small>{rotulo}</small>
                      {valor}
                    </span>
                    <FiArrowUpRight aria-hidden="true" className="canais__seta" />
                    {externo && <span className="sr-only">{t.comum.abreNovaAba}</span>}
                  </a>
                </li>
              ))}
            </ul>
            <p className="contato__local">
              <FiMapPin aria-hidden="true" /> {tr(perfil.cidade)}
            </p>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  )
}
