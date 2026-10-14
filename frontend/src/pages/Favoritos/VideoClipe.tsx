import { useState } from "react";
import { FiPlay } from "react-icons/fi";

type VideoClipeProps = {
  youtubeId: string;
  titulo: string;
  rotuloPlay: string;
};

// Mostra só a miniatura; o vídeo do YouTube só carrega quando a pessoa clica no play.
export function VideoClipe({ youtubeId, titulo, rotuloPlay }: VideoClipeProps) {
  const [tocando, setTocando] = useState(false);

  if (tocando) {
    return (
      <div className="video">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1`}
          title={titulo}
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      className="video video--capa"
      onClick={() => setTocando(true)}
      aria-label={`${rotuloPlay} ${titulo}`}
    >
      <img
        src={`https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`}
        alt=""
        loading="lazy"
      />
      <span className="video__play" aria-hidden="true">
        <FiPlay />
      </span>
    </button>
  );
}
