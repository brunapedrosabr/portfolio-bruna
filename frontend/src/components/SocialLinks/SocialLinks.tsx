import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa6'
import { FiMail } from 'react-icons/fi'
import { linkWhatsapp, perfil } from '../../data/perfil'
import { useLanguage } from '../../i18n/useLanguage'

// Ícones clicáveis das redes (rodapé).
export function SocialLinks() {
  const { t } = useLanguage()
  const canais = [
    { href: `mailto:${perfil.email}`, rotulo: t.contato.canais.email, Icone: FiMail, externo: false },
    { href: linkWhatsapp, rotulo: t.contato.canais.whatsapp, Icone: FaWhatsapp, externo: true },
    { href: perfil.linkedin, rotulo: t.contato.canais.linkedin, Icone: FaLinkedin, externo: true },
    { href: perfil.github, rotulo: t.contato.canais.github, Icone: FaGithub, externo: true },
  ].filter((canal) => canal.href)

  return (
    <ul className="social-links">
      {canais.map(({ href, rotulo, Icone, externo }) => (
        <li key={rotulo}>
          <a
            href={href}
            aria-label={externo ? `${rotulo} ${t.comum.abreNovaAba}` : rotulo}
            title={rotulo}
            {...(externo ? { target: '_blank', rel: 'noreferrer' } : {})}
          >
            <Icone aria-hidden="true" />
          </a>
        </li>
      ))}
    </ul>
  )
}
