import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import { elementos } from '../../data/elementos'
import { useLanguage } from '../../i18n/useLanguage'
import { ElementTile } from '../ElementTile/ElementTile'

// Versão em lista do laboratório, usada em telas pequenas.
export function LabList() {
  const { tr } = useLanguage()

  return (
    <ul className="lab-list">
      {elementos.map((elemento) => (
        <li key={elemento.rota}>
          <Link to={elemento.rota} className="lab-list__item">
            <ElementTile
              numero={elemento.numero}
              simbolo={elemento.simbolo}
              variante={elemento.familia}
              tamanho="p"
            />
            <span className="lab-list__texto">
              <strong>{tr(elemento.nome)}</strong>
              <span>{tr(elemento.descricao)}</span>
            </span>
            <FiArrowRight aria-hidden="true" className="lab-list__seta" />
          </Link>
        </li>
      ))}
    </ul>
  )
}
