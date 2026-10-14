import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout/Layout'
import { Contato } from './pages/Contato/Contato'
import { Experiencias } from './pages/Experiencias/Experiencias'
import { Favoritos } from './pages/Favoritos/Favoritos'
import { Home } from './pages/Home/Home'
import { NaoEncontrada } from './pages/NaoEncontrada/NaoEncontrada'
import { Projetos } from './pages/Projetos/Projetos'
import { Sobre } from './pages/Sobre/Sobre'

// Rotas do site. Todas usam o mesmo Layout (cabeçalho + rodapé).
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="projetos" element={<Projetos />} />
        <Route path="experiencias" element={<Experiencias />} />
        <Route path="contato" element={<Contato />} />
        <Route path="favoritos" element={<Favoritos />} />
        <Route path="*" element={<NaoEncontrada />} />
      </Route>
    </Routes>
  )
}
