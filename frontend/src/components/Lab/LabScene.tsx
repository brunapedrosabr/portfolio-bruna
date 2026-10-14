import type { KeyboardEvent, ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import { elementoPorRota } from '../../data/elementos'
import { projetosOrdenados } from '../../data/projetos'
import { useLanguage } from '../../i18n/useLanguage'
import './Lab.css'

// Cores dos tubos de ensaio (um tubo por projeto).
const CORES_TUBOS = [
  { liquido: '#f2a7b8', borda: '#993556' },
  { liquido: '#f4c27a', borda: '#ba7517' },
  { liquido: '#8fd3c7', borda: '#2e8b7e' },
  { liquido: '#c7b6ec', borda: '#6b4fa0' },
  { liquido: '#9cc9d6', borda: '#3f7f94' },
]

type ObjetoProps = {
  rota: string
  /** Centro horizontal e topo da etiqueta com o nome da seção. */
  etiqueta: { x: number; y: number }
  /** Área clicável (fica invisível). */
  area: { x: number; y: number; largura: number; altura: number }
  variante: string
  children: ReactNode
}

// Um objeto clicável do laboratório que leva a uma seção do site.
function ObjetoLab({ rota, etiqueta, area, variante, children }: ObjetoProps) {
  const navigate = useNavigate()
  const { tr } = useLanguage()
  const elemento = elementoPorRota(rota)
  const larguraEtiqueta = 176

  function aoTeclar(evento: KeyboardEvent<SVGGElement>) {
    if (evento.key === 'Enter' || evento.key === ' ') {
      evento.preventDefault()
      navigate(rota)
    }
  }

  return (
    <g
      className={`lab-obj lab-obj--${variante}`}
      role="link"
      tabIndex={0}
      aria-label={`${tr(elemento.nome)}: ${tr(elemento.descricao)}`}
      onClick={() => navigate(rota)}
      onKeyDown={aoTeclar}
    >
      <rect
        className="lab-obj__area"
        x={area.x}
        y={area.y}
        width={area.largura}
        height={area.altura}
        rx="12"
      />
      <g className="lab-obj__arte">{children}</g>
      <g className="lab-etiqueta">
        <rect
          className="lab-etiqueta__fundo"
          x={etiqueta.x - larguraEtiqueta / 2}
          y={etiqueta.y}
          width={larguraEtiqueta}
          height="32"
          rx="8"
        />
        <text
          className="lab-etiqueta__simbolo"
          x={etiqueta.x - larguraEtiqueta / 2 + 16}
          y={etiqueta.y + 21}
        >
          {elemento.simbolo}
        </text>
        <text
          className="lab-etiqueta__nome"
          x={etiqueta.x - larguraEtiqueta / 2 + 48}
          y={etiqueta.y + 21}
        >
          {tr(elemento.nome)}
        </text>
      </g>
    </g>
  )
}

// Ilustração da página inicial. Cada objeto da bancada é um link.
export function LabScene() {
  const { t } = useLanguage()
  const tubos = projetosOrdenados.slice(0, CORES_TUBOS.length)
  const larguraEstante = tubos.length * 22 + 22

  return (
    <svg className="lab-scene" viewBox="0 0 1000 500" role="group" aria-label={t.home.labTitulo}>
      <defs>
        <pattern id="lab-grade" width="28" height="28" patternUnits="userSpaceOnUse">
          <path d="M28 0H0V28" fill="none" stroke="#d7e8df" strokeWidth="1" />
        </pattern>
      </defs>

      {/* Parede e bancada */}
      <rect width="1000" height="500" fill="#eaf4ef" />
      <rect width="1000" height="392" fill="url(#lab-grade)" />

      {/* Pôster da tabela periódica (decorativo) */}
      <g aria-hidden="true">
        <rect x="446" y="34" width="168" height="112" rx="6" fill="#fff" stroke="#b9d0c6" />
        {Array.from({ length: 18 }, (_, i) => {
          const coluna = i % 6
          const linha = Math.floor(i / 6)
          const destaque = i === 8
          const cores = ['#e4f2ea', '#fbf0da', '#efe9f9']
          return (
            <rect
              key={i}
              x={458 + coluna * 25}
              y={48 + linha * 30}
              width="20"
              height="24"
              rx="2"
              fill={destaque ? '#1f5446' : cores[(coluna + linha) % 3]}
              stroke="#b9d0c6"
              strokeWidth="0.6"
            />
          )
        })}
        <text x="518" y="94" className="lab-poster__br">
          Br
        </text>
      </g>

      {/* Bancada */}
      <rect y="392" width="1000" height="12" fill="#5f7e79" />
      <rect y="404" width="1000" height="96" fill="#cfddd8" />

      {/* Sm · Jaleco pendurado */}
      <ObjetoLab
        rota="/sobre"
        variante="sobre"
        etiqueta={{ x: 110, y: 272 }}
        area={{ x: 40, y: 50, largura: 140, altura: 260 }}
      >
        <circle cx="110" cy="62" r="4" fill="#6b6b6b" />
        <path
          d="M110 66v8M82 90q28-20 56 0"
          fill="none"
          stroke="#6b6b6b"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path d="M80 88h60l20 168H60z" fill="#fff" stroke="#a9c2ba" />
        <path d="M98 88l12 38 12-38" fill="none" stroke="#a9c2ba" strokeWidth="1.5" />
        <path d="M110 126v130" stroke="#a9c2ba" />
        <path d="M80 88 64 170M140 88l16 82" stroke="#d3e2dc" strokeWidth="1.2" />
        <rect x="118" y="140" width="28" height="15" rx="2" fill="#1f5446" />
        <rect x="122" y="145" width="14" height="2" rx="1" fill="#c6e5d5" />
        <rect x="74" y="186" width="24" height="18" rx="2" fill="none" stroke="#a9c2ba" />
      </ObjetoLab>

      {/* Ex · Coluna de destilação */}
      <ObjetoLab
        rota="/experiencias"
        variante="experiencias"
        etiqueta={{ x: 345, y: 420 }}
        area={{ x: 262, y: 78, largura: 180, altura: 318 }}
      >
        <path
          d="M318 104l74 82"
          stroke="#9cc9d6"
          strokeWidth="9"
          strokeLinecap="round"
          fill="none"
        />
        <rect x="280" y="86" width="40" height="250" rx="10" fill="#e6f4f8" stroke="#5a9bb0" />
        {[136, 186, 236, 286].map((y) => (
          <g key={y}>
            <path d={`M282 ${y}h36`} stroke="#5a9bb0" strokeWidth="1.6" />
            <circle className="lab-vapor" cx="300" cy={y - 10} r="3" fill="#b8dde8" />
          </g>
        ))}
        <rect x="293" y="334" width="14" height="12" fill="#e6f4f8" stroke="#5a9bb0" />
        <circle cx="300" cy="362" r="30" fill="#f4c27a" stroke="#ba7517" />
        <path d="M276 356a24 24 0 0 0 48 0" fill="#f7d79b" opacity="0.7" />
        <rect x="376" y="386" width="54" height="6" rx="2" fill="#7e8a87" />
        <rect x="401" y="270" width="3" height="118" fill="#8a8a8a" />
        <circle className="lab-gota" cx="396" cy="200" r="3" fill="#9cc9d6" />
        <path d="M396 222h14v14l16 32h-46l16-32z" fill="#fff4d6" stroke="#5a9bb0" />
        <path d="M386 256h34l6 12h-46z" fill="#f4c27a" opacity="0.8" />
      </ObjetoLab>

      {/* Pj · Erlenmeyer e estante de tubos (um tubo por projeto) */}
      <ObjetoLab
        rota="/projetos"
        variante="projetos"
        etiqueta={{ x: 600, y: 420 }}
        area={{ x: 480, y: 270, largura: 120 + larguraEstante, altura: 126 }}
      >
        <rect x="524" y="296" width="32" height="7" rx="2" fill="#c6e5d5" stroke="#2e8b7e" />
        <path d="M528 302h24v28l38 62h-100l38-62z" fill="#e3f4f0" stroke="#2e8b7e" />
        <path d="M509 362h62l19 30h-100z" fill="#6fcfb8" />
        <circle className="lab-bolha lab-bolha--1" cx="534" cy="356" r="3.5" fill="none" stroke="#2e8b7e" />
        <circle className="lab-bolha lab-bolha--2" cx="546" cy="352" r="2.5" fill="none" stroke="#2e8b7e" />
        <circle className="lab-bolha lab-bolha--3" cx="540" cy="358" r="2" fill="none" stroke="#2e8b7e" />
        {tubos.map((projeto, i) => {
          const cor = CORES_TUBOS[i]
          const x = 618 + i * 22
          return (
            <g key={projeto.id}>
              <rect x={x} y="298" width="13" height="80" rx="6.5" fill="#f7fbfa" stroke={cor.borda} />
              <rect x={x + 1.5} y="320" width="10" height="56" rx="5" fill={cor.liquido} />
            </g>
          )
        })}
        <rect x="604" y="344" width={larguraEstante + 4} height="8" rx="2" fill="#8e6646" />
        <rect x="608" y="352" width={larguraEstante - 4} height="40" rx="3" fill="#a87c55" />
      </ObjetoLab>

      {/* Ct · Bico de Bunsen */}
      <ObjetoLab
        rota="/contato"
        variante="contato"
        etiqueta={{ x: 870, y: 420 }}
        area={{ x: 818, y: 226, largura: 104, altura: 170 }}
      >
        <path d="M890 386q40 0 60 18" fill="none" stroke="#e07a5f" strokeWidth="4" />
        <rect x="830" y="380" width="60" height="12" rx="3" fill="#5f5e5a" />
        <rect x="852" y="312" width="16" height="70" fill="#8a8a8a" />
        <rect x="848" y="350" width="24" height="8" rx="2" fill="#6e6e6e" />
        <g className="lab-chama">
          <path d="M860 312q-22-30 0-72 22 42 0 72z" fill="#6fa8f2" />
          <path d="M860 310q-12-18 0-44 12 26 0 44z" fill="#cfe3fb" />
        </g>
      </ObjetoLab>

      {/* Fm · Estante de reagentes */}
      <ObjetoLab
        rota="/favoritos"
        variante="favoritos"
        etiqueta={{ x: 830, y: 186 }}
        area={{ x: 696, y: 84, largura: 268, altura: 100 }}
      >
        <path d="M722 178l14-10h-14zM938 178l-14-10h14z" fill="#8e6646" />
        <rect x="726" y="98" width="14" height="16" fill="#cfe9e4" stroke="#2e8b7e" />
        <rect x="718" y="112" width="30" height="56" rx="5" fill="#8fd3c7" stroke="#2e8b7e" />
        <rect x="722" y="128" width="22" height="16" fill="#fff" />
        <path d="M725 132h16M725 140h16" stroke="#2e8b7e" strokeDasharray="2 2" />
        <rect x="783" y="104" width="14" height="24" fill="#fce6c2" stroke="#ba7517" />
        <circle cx="790" cy="146" r="22" fill="#f4c27a" stroke="#ba7517" />
        <rect x="837" y="106" width="14" height="16" fill="#efe9f9" stroke="#6b4fa0" />
        <rect x="830" y="120" width="28" height="48" rx="5" fill="#c7b6ec" stroke="#6b4fa0" />
        <rect x="834" y="134" width="20" height="14" fill="#fff" />
        <rect x="885" y="94" width="14" height="16" fill="#fbe0e7" stroke="#993556" />
        <rect x="876" y="108" width="32" height="60" rx="5" fill="#f2a7b8" stroke="#993556" />
        <rect x="880" y="124" width="24" height="22" fill="#fff" />
        <circle cx="889" cy="140" r="3.2" fill="#993556" />
        <path d="M892 140v-11l6 2" fill="none" stroke="#993556" strokeWidth="1.6" />
        <rect x="927" y="124" width="10" height="12" fill="#e5f3f8" stroke="#3f7f94" />
        <rect x="922" y="134" width="20" height="34" rx="4" fill="#9cc9d6" stroke="#3f7f94" />
        <rect x="700" y="168" width="260" height="10" rx="2" fill="#a87c55" />
      </ObjetoLab>
    </svg>
  )
}
