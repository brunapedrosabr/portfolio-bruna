import './ElementTile.css'

type Variante = 'secao' | 'extra' | 'marca'
type Tamanho = 'p' | 'm' | 'g'

type ElementTileProps = {
  numero: number | string
  simbolo: string
  nome?: string
  variante?: Variante
  tamanho?: Tamanho
  className?: string
}

// Quadradinho no formato de um elemento da tabela periódica.
// É decorativo: quem usa o componente deve fornecer o texto acessível (aria-label).
export function ElementTile({
  numero,
  simbolo,
  nome,
  variante = 'secao',
  tamanho = 'm',
  className = '',
}: ElementTileProps) {
  return (
    <span className={`tile tile--${variante} tile--${tamanho} ${className}`} aria-hidden="true">
      <span className="tile__numero">{numero}</span>
      <span className="tile__simbolo">{simbolo}</span>
      {nome && <span className="tile__nome">{nome}</span>}
    </span>
  )
}
