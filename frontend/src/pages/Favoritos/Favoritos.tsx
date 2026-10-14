import {
  FiArrowUpRight,
  FiBookOpen,
  FiFilm,
  FiMusic,
  FiTv,
} from "react-icons/fi";
import { PageHeading } from "../../components/PageHeading/PageHeading";
import { elementoPorRota } from "../../data/elementos";
import { favoritos, type Favorito } from "../../data/favoritos";
import { usePageTitle } from "../../hooks/usePageTitle";
import { useLanguage } from "../../i18n/useLanguage";
import { VideoClipe } from "./VideoClipe";
import "./Favoritos.css";

// Cores dos frascos, em sequência.
const CORES = ["verde", "ambar", "violeta", "rosa", "azul"];

export function Favoritos() {
  const { t, tr } = useLanguage();
  usePageTitle(t.favoritos.titulo);

  const prateleiras: {
    tipo: Favorito["tipo"];
    titulo: string;
    Icone: typeof FiFilm;
  }[] = [
    { tipo: "filme", titulo: t.favoritos.filmes, Icone: FiFilm },
    { tipo: "serie", titulo: t.favoritos.series, Icone: FiTv },
    { tipo: "livro", titulo: t.favoritos.livros, Icone: FiBookOpen },
    { tipo: "musica", titulo: t.favoritos.musicas, Icone: FiMusic },
  ];

  return (
    <>
      <PageHeading
        elemento={elementoPorRota("/favoritos")}
        eyebrow={t.favoritos.eyebrow}
        titulo={t.favoritos.titulo}
        subtitulo={t.favoritos.subtitulo}
      />

      <section className="section">
        <div className="container">
          {prateleiras.map(({ tipo, titulo, Icone }, indice) => {
            const itens = favoritos.filter((item) => item.tipo === tipo);
            if (itens.length === 0) return null;
            return (
              <div key={tipo} className="prateleira">
                <div className="prateleira__topo">
                  <p className="eyebrow">
                    {t.favoritos.prateleira} {indice + 1}
                  </p>
                  <h2>
                    <Icone aria-hidden="true" /> {titulo}
                  </h2>
                </div>
                <ul className="frascos">
                  {itens.map((item, i) => (
                    <li
                      key={item.titulo}
                      className={`frasco frasco--${CORES[(i + indice * 3) % CORES.length]}`}
                    >
                      <span className="frasco__gargalo" aria-hidden="true" />
                      <div className="frasco__corpo">
                        {/* Capa do filme, série ou livro */}
                        {item.imagem && (
                          <img
                            className="frasco__capa"
                            src={item.imagem}
                            alt={item.titulo}
                            loading="lazy"
                          />
                        )}

                        {/* Videoclipe da música (só carrega ao clicar no play) */}
                        {item.youtubeId && (
                          <VideoClipe
                            youtubeId={item.youtubeId}
                            titulo={item.titulo}
                            rotuloPlay={t.favoritos.tocar}
                          />
                        )}

                        <div className="frasco__rotulo">
                          <h3>{item.titulo}</h3>
                          <p className="frasco__detalhe">{item.detalhe}</p>
                          {item.comentario && (
                            <p className="frasco__comentario">
                              {tr(item.comentario)}
                            </p>
                          )}
                          {item.link && (
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noreferrer"
                            >
                              {tipo === "musica"
                                ? t.favoritos.ouvir
                                : t.favoritos.assistir}{" "}
                              <FiArrowUpRight aria-hidden="true" />
                              <span className="sr-only">
                                {t.comum.abreNovaAba}
                              </span>
                            </a>
                          )}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="prateleira__tabua" aria-hidden="true" />
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
