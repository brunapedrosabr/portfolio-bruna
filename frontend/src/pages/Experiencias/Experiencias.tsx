import { FiAward, FiUsers } from "react-icons/fi";
import { PageHeading } from "../../components/PageHeading/PageHeading";
import { elementoPorRota } from "../../data/elementos";
import { experiencias, premios, programas } from "../../data/experiencias";
import { usePageTitle } from "../../hooks/usePageTitle";
import { useLanguage } from "../../i18n/useLanguage";
import "./Experiencias.css";

export function Experiencias() {
  const { t, tr } = useLanguage();
  usePageTitle(t.experiencias.titulo);

  return (
    <>
      <PageHeading
        elemento={elementoPorRota("/experiencias")}
        eyebrow={t.experiencias.eyebrow}
        titulo={t.experiencias.titulo}
        subtitulo={t.experiencias.subtitulo}
      />

      {/* Trajetória profissional como uma coluna de destilação:
          o cargo mais recente fica no topo, o estágio na base. */}
      <section className="section">
        <div className="container">
          <div className="section__topo">
            <p className="eyebrow">{t.experiencias.secaoEyebrow}</p>
            <h2>{t.experiencias.secaoTitulo}</h2>
          </div>

          <div className="coluna">
            <p className="coluna__rotulo">{t.experiencias.topo}</p>
            <ol className="coluna__pratos">
              {experiencias.map((experiencia) => (
                <li key={experiencia.id} className="prato">
                  <div className="prato__periodo">
                    {tr(experiencia.periodo)}
                  </div>
                  <div className="prato__conteudo">
                    <h3>{tr(experiencia.cargo)}</h3>
                    <p className="prato__empresa">
                      {experiencia.empresa} · {tr(experiencia.area)}
                    </p>
                    <p className="prato__descricao">
                      {tr(experiencia.descricao)}
                    </p>

                    {experiencia.atividades && (
                      <>
                        <h4>{t.experiencias.atividades}</h4>
                        <ul className="prato__lista">
                          {experiencia.atividades.map((atividade) => (
                            <li key={atividade.pt}>{tr(atividade)}</li>
                          ))}
                        </ul>
                      </>
                    )}

                    {experiencia.destaques && (
                      <>
                        <h4>{t.experiencias.destaques}</h4>
                        <ul className="prato__destaques">
                          {experiencia.destaques.map((destaque) => (
                            <li key={destaque.pt}>
                              <FiAward aria-hidden="true" /> {tr(destaque)}
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                </li>
              ))}
            </ol>
            <p className="coluna__rotulo coluna__rotulo--base">
              {t.experiencias.base}
            </p>
            <div className="coluna__balao" aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* Voluntariado */}
      <section className="section section--tinta">
        <div className="container voluntariado">
          <div>
            <p className="eyebrow">{t.experiencias.voluntariadoEyebrow}</p>
            <h2>{t.experiencias.voluntariadoTitulo}</h2>
          </div>
          <div className="voluntariado__lista">
            {programas.map((programa) => (
              <div key={programa.titulo.pt} className="voluntariado__cartao">
                <FiUsers aria-hidden="true" />
                <h3>{tr(programa.titulo)}</h3>
                <p className="voluntariado__org">
                  {tr(programa.organizacao)} · {tr(programa.periodo)}
                </p>
                <p>{tr(programa.texto)}</p>
                {programa.destaque && (
                  <p className="voluntariado__destaque">
                    <FiAward aria-hidden="true" /> {tr(programa.destaque)}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prêmios e eventos */}
      <section className="section">
        <div className="container">
          <div className="section__topo">
            <p className="eyebrow">{t.experiencias.premiosEyebrow}</p>
            <h2>{t.experiencias.premiosTitulo}</h2>
          </div>
          <ul className="premios">
            {premios.map((premio) => (
              <li key={premio.titulo.pt} className="premio">
                <FiAward aria-hidden="true" className="premio__icone" />
                <h3>{tr(premio.titulo)}</h3>
                <p className="premio__meta">
                  {premio.instituicao} · {tr(premio.data)}
                </p>
                <p>{tr(premio.descricao)}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
