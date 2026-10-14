import { useEffect } from 'react'

// Atualiza o título da aba do navegador em cada página.
export function usePageTitle(titulo: string) {
  useEffect(() => {
    document.title = titulo ? `${titulo} · Bruna Pedrosa` : 'Bruna Pedrosa · Portfólio'
  }, [titulo])
}
