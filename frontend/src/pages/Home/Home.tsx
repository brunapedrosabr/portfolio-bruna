import { Fragment } from 'react'
import { FiArrowDown, FiBarChart2, FiCode, FiDownload, FiMapPin } from 'react-icons/fi'
import { LuFlaskConical } from 'react-icons/lu'
import { LabList } from '../../components/Lab/LabList'
import { LabScene } from '../../components/Lab/LabScene'
import { perfil } from '../../data/perfil'
import { usePageTitle } from '../../hooks/usePageTitle'
import { useLanguage } from '../../i18n/useLanguage'
import './Home.css'

const iconesReagentes = [LuFlaskConical, FiBarChart2, FiCode]

export function Home() {
  const { t, tr } = useLanguage()
  usePageTitle(t.home.tituloPagina)

  return (
    <>
      <section className="hero">
        <div className="container hero__inner">
          <div className="hero__texto entrar">
            <p className="eyebrow">{t.home.eyebrow}</p>
            <h1>
              Bruna <span>Pedrosa Nunes</span>
            </h1>
            <p className="hero__lead">{t.home.lead}</p>
            <p className="hero__descricao">{t.home.descricao}</p>
            <div className="hero__acoes">
              <a href="#laboratorio" className="btn btn--primary">
                {t.home.explorar} <FiArrowDown aria-hidden="true" />
              </a>
              <a href={perfil.curriculo} className="btn btn--outline" download>
                <FiDownload aria-hidden="true" /> {t.home.curriculo}
              </a>
            </div>
            <p className="hero__local">
              <FiMapPin aria-hidden="true" /> {tr(perfil.cidade)}
            </p>
          </div>

          {/* Cartão grande do elemento "Br" (35 é o número atômico do bromo). */}
          <div className="cartao-elemento entrar" aria-hidden="true">
            <span className="cartao-elemento__numero">35</span>
            <span className="cartao-elemento__massa">{t.home.cartaoMassa}</span>
            <span className="cartao-elemento__simbolo">Br</span>
            <span className="cartao-elemento__nome">{perfil.nomeCurto}</span>
            <span className="cartao-elemento__legenda">{t.home.cartaoLegenda}</span>
            <span className="cartao-elemento__rodape">{t.home.cartaoElemento}</span>
          </div>
        </div>
      </section>

      <section id="laboratorio" className="section laboratorio">
        <div className="container">
          <div className="section__topo">
            <p className="eyebrow">{t.home.labEyebrow}</p>
            <h2>{t.home.labTitulo}</h2>
            <p className="laboratorio__dica">{t.home.labDica}</p>
          </div>
          <LabScene />
          <LabList />
        </div>
      </section>

      <section className="section section--tinta">
        <div className="container">
          <div className="section__topo">
            <p className="eyebrow">{t.home.reacaoEyebrow}</p>
            <h2>{t.home.reacaoTitulo}</h2>
          </div>
          {/* Uma "equação química": reagente + reagente → produto */}
          <div className="reacao">
            {t.home.reagentes.map((reagente, i) => {
              const Icone = iconesReagentes[i]
              const produto = i === t.home.reagentes.length - 1
              return (
                <Fragment key={reagente.titulo}>
                  {i > 0 && (
                    <span className="reacao__operador" aria-hidden="true">
                      {produto ? '→' : '+'}
                    </span>
                  )}
                  <div className={`reacao__item${produto ? ' reacao__item--produto' : ''}`}>
                    <Icone aria-hidden="true" />
                    <div>
                      <h3>{reagente.titulo}</h3>
                      <p>{reagente.texto}</p>
                    </div>
                  </div>
                </Fragment>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
