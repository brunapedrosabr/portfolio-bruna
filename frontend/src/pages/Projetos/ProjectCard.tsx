import { useState } from 'react'
import { FaGithub } from 'react-icons/fa6'
import { FiArrowUpRight, FiAward, FiFigma } from 'react-icons/fi'
import { LuFlaskConical } from 'react-icons/lu'
import type { Projeto } from '../../data/projetos'
import { useLanguage } from '../../i18n/useLanguage'

// Cartão de um projeto da linha do tempo, com galeria de imagens/GIFs.
export function ProjectCard({ projeto }: { projeto: Projeto }) {
  const { t, tr } = useLanguage()
  const [imagemAtiva, setImagemAtiva] = useState(0)
  const imagem = projeto.imagens[imagemAtiva]

  const links = [
    { href: projeto.github, rotulo: t.projetos.github, Icone: FaGithub },
    { href: projeto.deploy, rotulo: t.projetos.deploy, Icone: FiArrowUpRight },
    { href: projeto.prototipo, rotulo: t.projetos.prototipo, Icone: FiFigma },
  ].filter((link) => link.href)

  return (
    <article className="projeto" aria-labelledby={`projeto-${projeto.id}`}>
      <div className="projeto__midia">
        {imagem ? (
          <figure>
            <img
              src={imagem.src}
              alt={`${projeto.nome}: ${tr(imagem.legenda)}`}
              width={1280}
              height={640}
              loading="lazy"
            />
            <figcaption>{tr(imagem.legenda)}</figcaption>
          </figure>
        ) : (
          <div className="projeto__sem-imagem">
            <LuFlaskConical aria-hidden="true" />
            <p>{t.projetos.semImagem}</p>
          </div>
        )}

        {projeto.imagens.length > 1 && (
          <div className="projeto__miniaturas">
            {projeto.imagens.map((item, i) => (
              <button
                key={item.src}
                type="button"
                className={i === imagemAtiva ? 'is-active' : ''}
                aria-pressed={i === imagemAtiva}
                aria-label={`${t.projetos.verImagem}: ${tr(item.legenda)}`}
                onClick={() => setImagemAtiva(i)}
              >
                <img src={item.src} alt="" loading="lazy" />
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="projeto__corpo">
        <div className="projeto__meta">
          <span className={`status status--${projeto.status}`}>{t.projetos.status[projeto.status]}</span>
          <span>{t.projetos.periodo(projeto.periodo.ano, projeto.periodo.semestre)}</span>
        </div>

        <h3 id={`projeto-${projeto.id}`}>{projeto.nome}</h3>
        <p className="projeto__contexto">{tr(projeto.contexto)}</p>
        <p className="projeto__descricao">{tr(projeto.descricao)}</p>

        {projeto.minhaParte && (
          <p className="projeto__parte">
            <strong>{t.projetos.minhaParte}:</strong> {tr(projeto.minhaParte)}
          </p>
        )}

        {projeto.premio && (
          <p className="projeto__premio">
            <FiAward aria-hidden="true" /> {tr(projeto.premio)}
          </p>
        )}

        <ul className="tags" aria-label={t.projetos.tecnologias}>
          {projeto.tecnologias.map((tecnologia) => (
            <li key={tecnologia} className="tag">
              {tecnologia}
            </li>
          ))}
        </ul>

        <div className="projeto__links">
          {links.map(({ href, rotulo, Icone }) => (
            <a key={rotulo} href={href} target="_blank" rel="noreferrer">
              <Icone aria-hidden="true" /> {rotulo}
              <span className="sr-only"> {t.comum.abreNovaAba}</span>
            </a>
          ))}
        </div>
      </div>
    </article>
  )
}
