import type { Texto } from "../i18n/tipos";

export type TipoFavorito = "filme" | "serie" | "livro" | "musica";

export type Favorito = {
  tipo: TipoFavorito;
  titulo: string;
  detalhe: string;
  comentario?: Texto;
  link?: string;
  imagem?: string;
  youtubeId?: string;
};

export const favoritos: Favorito[] = [
  // Filmes
  {
    tipo: "filme",
    titulo: "Jogos Vorazes",
    detalhe: "Gary Ross · 2012",
    imagem: "/favoritos/jogos_vorazes.png",
  },
  {
    tipo: "filme",
    titulo: "Como Treinar o Seu Dragão",
    detalhe: "Dean DeBlois e Chris Sanders · 2010",
    imagem: "/favoritos/como_treinar_o_seu_dragao.png",
  },
  {
    tipo: "filme",
    titulo: "À Procura da Felicidade",
    detalhe: "Gabriele Muccino · 2006",
    imagem: "/favoritos/a_procura_da_felicidade.png",
  },
  {
    tipo: "filme",
    titulo: "Legalmente Loira",
    detalhe: "Robert Luketic · 2001",
    imagem: "/favoritos/legalmente_loira.png",
  },
  {
    tipo: "filme",
    titulo: "Harry Potter e o Cálice de Fogo",
    detalhe: "Mike Newell · 2005",
    imagem: "/favoritos/harry_potter_e_o_calice_de_fogo.png",
  },

  // Séries
  {
    tipo: "serie",
    titulo: "How I Met Your Mother",
    detalhe: "2005–2014",
    imagem: "/favoritos/how_i_met_your_mother.png",
  },
  {
    tipo: "serie",
    titulo: "Game of Thrones",
    detalhe: "2011–2019",
    imagem: "/favoritos/game_of_thrones.png",
  },
  {
    tipo: "serie",
    titulo: "High Potential",
    detalhe: "2024–",
    imagem: "/favoritos/high_potential.png",
  },
  {
    tipo: "serie",
    titulo: "The Circle",
    detalhe: "2020–2023",
    imagem: "/favoritos/the_circle.png",
  },
  {
    tipo: "serie",
    titulo: "Alice in Borderland",
    detalhe: "2020–2025",
    imagem: "/favoritos/alice_in_borderland.png",
  },

  // Livros
  {
    tipo: "livro",
    titulo: "O Hobbit",
    detalhe: "J.R.R. Tolkien",
    imagem: "/favoritos/o_hobbit.png",
  },
  {
    tipo: "livro",
    titulo: "Bridgerton: Um Perfeito Cavalheiro",
    detalhe: "Julia Quinn",
    imagem: "/favoritos/bridgerton_um_perfeito_cavalheiro.png",
  },
  {
    tipo: "livro",
    titulo: "Outros Jeitos de Usar a Boca",
    detalhe: "Rupi Kaur",
    imagem: "/favoritos/outros_jeitos_de_usar_a_boca.png",
  },
  {
    tipo: "livro",
    titulo: "E Não Sobrou Nenhum",
    detalhe: "Agatha Christie",
    imagem: "/favoritos/e_nao_sobrou_nenhum.png",
  },
  {
    tipo: "livro",
    titulo: "Verity",
    detalhe: "Colleen Hoover",
    imagem: "/favoritos/verity.png",
  },

  // Músicas
  {
    tipo: "musica",
    titulo: "Blinding Lights",
    detalhe: "The Weeknd",
    youtubeId: "4NRXx6U8ABQ",
  },
  {
    tipo: "musica",
    titulo: "A Thousand Years",
    detalhe: "Christina Perri",
    youtubeId: "rtOvBOTyX00",
  },
  {
    tipo: "musica",
    titulo: "Count on Me",
    detalhe: "Bruno Mars",
    youtubeId: "6k8cpUkKK4c",
  },
  {
    tipo: "musica",
    titulo: "Say You Won't Let Go",
    detalhe: "James Arthur",
    youtubeId: "0yW7w8F2TVA",
  },
  {
    tipo: "musica",
    titulo: "Torn",
    detalhe: "Natalie Imbruglia",
    youtubeId: "VV1XWJN3nJo",
  },
];
