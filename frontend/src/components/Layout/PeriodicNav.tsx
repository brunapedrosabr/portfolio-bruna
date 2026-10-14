import { NavLink } from 'react-router-dom'
import { elementos } from '../../data/elementos'
import { useLanguage } from '../../i18n/useLanguage'
import { ElementTile } from '../ElementTile/ElementTile'

// Menu principal: cada seção é um elemento da tabela periódica.
export function PeriodicNav() {
  const { t, tr } = useLanguage()

  return (
    <nav className="periodic-nav" aria-label={t.header.navegacao}>
      <ul className="periodic-nav__lista">
        {elementos.map((elemento) => (
          <li key={elemento.rota}>
            <NavLink
              to={elemento.rota}
              className={({ isActive }) => `periodic-nav__link${isActive ? ' is-active' : ''}`}
              aria-label={tr(elemento.nome)}
              title={tr(elemento.nome)}
            >
              <ElementTile
                numero={elemento.numero}
                simbolo={elemento.simbolo}
                nome={tr(elemento.nome)}
                variante={elemento.familia}
              />
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
