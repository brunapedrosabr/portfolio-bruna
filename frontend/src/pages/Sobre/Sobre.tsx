import { PageHeading } from "../../components/PageHeading/PageHeading";
import { elementoPorRota } from "../../data/elementos";
import {
  apresentacao,
  cursos,
  fichaTecnica,
  formacao,
  habilidades,
  idiomas,
  type NivelHabilidade,
} from "../../data/sobre";
import { usePageTitle } from "../../hooks/usePageTitle";
import { useLanguage } from "../../i18n/useLanguage";
import "./Sobre.css";

const niveis: NivelHabilidade[] = ["avancado", "basico", "estudando"];

export function Sobre() {
  const { t, tr, idioma } = useLanguage();
  usePageTitle(t.sobre.titulo);

  return (
    <>
      <PageHeading
        elemento={elementoPorRota("/sobre")}
        eyebrow={t.sobre.eyebrow}
        titulo={t.sobre.titulo}
        subtitulo={t.sobre.subtitulo}
      />

      {/* Apresentação (português ou inglês, conforme o botão PT | EN) */}
      <section className="section">
        <div className="container sobre__grid">
          <div className="sobre__texto" lang={idioma === "pt" ? "pt-BR" : "en"}>
            {apresentacao.map((paragrafo) => (
              <p key={paragrafo.pt}>{tr(paragrafo)}</p>
            ))}
          </div>

          <aside className="ficha" aria-labelledby="ficha-titulo">
            <figure className="ficha__foto">
              <img
                src="/bruna.webp"
                alt={
                  idioma === "pt"
                    ? "Foto de Bruna Pedrosa"
                    : "Photo of Bruna Pedrosa"
                }
                width={640}
                height={800}
              />
            </figure>
            <div className="ficha__topo">
              {/* Losango de risco (NFPA 704), só decorativo */}
              <svg
                className="ficha__losango"
                viewBox="0 0 60 60"
                aria-hidden="true"
              >
                <g transform="rotate(45 30 30)">
                  <rect x="9" y="9" width="21" height="21" fill="#e2675c" />
                  <rect x="30" y="9" width="21" height="21" fill="#f2c46d" />
                  <rect x="30" y="30" width="21" height="21" fill="#fff" />
                  <rect x="9" y="30" width="21" height="21" fill="#7fa8dc" />
                  <rect
                    x="9"
                    y="9"
                    width="42"
                    height="42"
                    fill="none"
                    stroke="#12302a"
                    strokeWidth="1.2"
                  />
                </g>
                <text x="30" y="17" textAnchor="middle">
                  1
                </text>
                <text x="17" y="34" textAnchor="middle">
                  0
                </text>
                <text x="43" y="34" textAnchor="middle">
                  3
                </text>
                <text x="30" y="50" textAnchor="middle">
                  Br
                </text>
              </svg>
              <h2 id="ficha-titulo">{t.sobre.fichaTitulo}</h2>
            </div>
            <dl className="ficha__lista">
              {fichaTecnica.map((item) => (
                <div key={item.rotulo.pt}>
                  <dt>{tr(item.rotulo)}</dt>
                  <dd>{tr(item.valor)}</dd>
                </div>
              ))}
            </dl>
            <p className="ficha__nota">{t.sobre.fichaNota}</p>
          </aside>
        </div>
      </section>

      {/* Formação */}
      <section className="section section--tinta">
        <div className="container">
          <div className="section__topo">
            <p className="eyebrow">{t.sobre.formacaoEyebrow}</p>
            <h2>{t.sobre.formacaoTitulo}</h2>
          </div>
          <ol className="formacao">
            {formacao.map((item) => (
              <li key={item.titulo.pt} className="formacao__item">
                <span className="formacao__periodo">{tr(item.periodo)}</span>
                <div>
                  <h3>{tr(item.titulo)}</h3>
                  <p>{tr(item.instituicao)}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="cursos">
            <h3>{t.sobre.cursosTitulo}</h3>
            <ul>
              {cursos.map((curso) => (
                <li key={curso.pt}>{tr(curso)}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Habilidades em formato de tabela periódica */}
      <section className="section">
        <div className="container">
          <div className="section__topo">
            <p className="eyebrow">{t.sobre.habilidadesEyebrow}</p>
            <h2>{t.sobre.habilidadesTitulo}</h2>
          </div>
          <ul className="legenda-niveis">
            {niveis.map((nivel) => (
              <li key={nivel}>
                <span
                  className={`legenda-niveis__cor nivel--${nivel}`}
                  aria-hidden="true"
                />
                {t.sobre.niveis[nivel]}
              </li>
            ))}
          </ul>
          <ul className="habilidades">
            {habilidades.map((habilidade, i) => (
              <li
                key={habilidade.nome}
                className={`habilidade nivel--${habilidade.nivel}`}
              >
                <span className="habilidade__numero" aria-hidden="true">
                  {i + 1}
                </span>
                <span className="habilidade__simbolo" aria-hidden="true">
                  {habilidade.simbolo}
                </span>
                <span className="habilidade__nome">{habilidade.nome}</span>
                <span className="habilidade__nivel">
                  {t.sobre.niveis[habilidade.nivel]}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Idiomas */}
      <section className="section section--tinta">
        <div className="container">
          <div className="section__topo">
            <p className="eyebrow">{t.sobre.idiomasEyebrow}</p>
            <h2>{t.sobre.idiomasTitulo}</h2>
          </div>
          <ul className="idiomas">
            {idiomas.map((item) => (
              <li key={item.nome.pt}>
                <strong>{tr(item.nome)}</strong>
                <span>{tr(item.nivel)}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
