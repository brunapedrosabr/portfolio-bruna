import type { Texto } from '../i18n/tipos'

// Cada seção do site é um "elemento" da tabela periódica do menu.
export type Familia = 'secao' | 'extra'

export type Elemento = {
  numero: number
  simbolo: string
  nome: Texto
  rota: string
  familia: Familia
  /** Descrição curta usada no laboratório da página inicial. */
  descricao: Texto
}

export const elementos: Elemento[] = [
  {
    numero: 1,
    simbolo: 'Sm',
    nome: { pt: 'Sobre mim', en: 'About me' },
    rota: '/sobre',
    familia: 'secao',
    descricao: {
      pt: 'O jaleco: quem eu sou, formação e habilidades.',
      en: 'The lab coat: who I am, education and skills.',
    },
  },
  {
    numero: 2,
    simbolo: 'Pj',
    nome: { pt: 'Projetos', en: 'Projects' },
    rota: '/projetos',
    familia: 'secao',
    descricao: {
      pt: 'Os tubos de ensaio: meus projetos em linha do tempo.',
      en: 'The test tubes: my projects on a timeline.',
    },
  },
  {
    numero: 3,
    simbolo: 'Ex',
    nome: { pt: 'Experiências', en: 'Experience' },
    rota: '/experiencias',
    familia: 'secao',
    descricao: {
      pt: 'A coluna de destilação: minha trajetória profissional.',
      en: 'The distillation column: my professional path.',
    },
  },
  {
    numero: 4,
    simbolo: 'Ct',
    nome: { pt: 'Contato', en: 'Contact' },
    rota: '/contato',
    familia: 'secao',
    descricao: {
      pt: 'O bico de Bunsen: vamos acender uma conversa.',
      en: 'The Bunsen burner: let’s spark a conversation.',
    },
  },
  {
    numero: 5,
    simbolo: 'Fm',
    nome: { pt: 'Favoritos', en: 'Favorites' },
    rota: '/favoritos',
    familia: 'extra',
    descricao: {
      pt: 'A estante de reagentes: filmes e músicas favoritos.',
      en: 'The reagent shelf: favorite movies and music.',
    },
  },
]

export function elementoPorRota(rota: string): Elemento {
  const elemento = elementos.find((item) => item.rota === rota)
  if (!elemento) throw new Error(`Nenhum elemento cadastrado para a rota ${rota}`)
  return elemento
}
