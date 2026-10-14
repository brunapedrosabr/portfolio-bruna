import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { useLanguage } from '../../i18n/useLanguage'
import { acordarApi } from '../../services/api'
import { Footer } from './Footer'
import { Header } from './Header'
import './Layout.css'

// Estrutura comum a todas as páginas: cabeçalho, conteúdo e rodapé.
export function Layout() {
  const { pathname } = useLocation()
  const { t } = useLanguage()

  // Ao trocar de página, volta para o topo.
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  // "Acorda" o back-end no Render assim que o site abre.
  useEffect(() => {
    acordarApi()
  }, [])

  return (
    <>
      <a href="#conteudo" className="skip-link">
        {t.comum.pularConteudo}
      </a>
      <Header />
      <main id="conteudo">
        <Outlet />
      </main>
      <Footer mostrarChamada={pathname !== '/contato'} />
    </>
  )
}
