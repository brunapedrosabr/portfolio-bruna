import type { Elemento } from '../../data/elementos'
import { useLanguage } from '../../i18n/useLanguage'
import { ElementTile } from '../ElementTile/ElementTile'
import './PageHeading.css'

type PageHeadingProps = {
  elemento: Elemento
  eyebrow: string
  titulo: string
  subtitulo: string
}

// Cabeçalho das páginas internas, com o "elemento" da seção em destaque.
export function PageHeading({ elemento, eyebrow, titulo, subtitulo }: PageHeadingProps) {
  const { tr } = useLanguage()

  return (
    <section className={`page-heading page-heading--${elemento.familia}`}>
      <div className="container page-heading__inner entrar">
        <ElementTile
          numero={elemento.numero}
          simbolo={elemento.simbolo}
          nome={tr(elemento.nome)}
          variante={elemento.familia}
          tamanho="g"
        />
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h1>{titulo}</h1>
          <p className="page-heading__subtitulo">{subtitulo}</p>
        </div>
      </div>
    </section>
  )
}
