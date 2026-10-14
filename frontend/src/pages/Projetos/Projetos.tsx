import { PageHeading } from '../../components/PageHeading/PageHeading'
import { elementoPorRota } from '../../data/elementos'
import { projetosOrdenados } from '../../data/projetos'
import { usePageTitle } from '../../hooks/usePageTitle'
import { useLanguage } from '../../i18n/useLanguage'
import { ProjectCard } from './ProjectCard'
import './Projetos.css'

export function Projetos() {
  const { t } = useLanguage()
  usePageTitle(t.projetos.titulo)

  return (
    <>
      <PageHeading
        elemento={elementoPorRota('/projetos')}
        eyebrow={t.projetos.eyebrow}
        titulo={t.projetos.titulo}
        subtitulo={t.projetos.subtitulo}
      />

      <section className="section">
        <div className="container">
          <div className="section__topo">
            <p className="eyebrow">{t.projetos.secaoEyebrow}</p>
            <h2>{t.projetos.secaoTitulo}</h2>
          </div>

          {/* Linha do tempo gerada a partir de src/data/projetos.ts.
              Visualmente é uma "cadeia de carbono": cada projeto é um átomo ligado ao próximo. */}
          <ol className="cadeia">
            {projetosOrdenados.map((projeto) => (
              <li key={projeto.id} className="cadeia__item">
                <div className="cadeia__atomo" aria-hidden="true">
                  <strong>{projeto.periodo.ano}</strong>
                  <span>{t.projetos.semestreCurto(projeto.periodo.semestre)}</span>
                </div>
                <ProjectCard projeto={projeto} />
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  )
}
