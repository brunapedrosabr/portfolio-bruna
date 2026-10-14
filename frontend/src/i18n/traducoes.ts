// Textos fixos da interface (menus, títulos, botões, mensagens).
// O conteúdo do portfólio (projetos, experiências etc.) fica em src/data.

const pt = {
  comum: {
    pularConteudo: "Pular para o conteúdo",
    abreNovaAba: "(abre em nova aba)",
  },
  header: {
    subtitulo: "Química · Dados · Software",
    navegacao: "Navegação principal",
    idioma: "Idioma do site",
    irInicio: "Bruna Pedrosa, voltar ao laboratório",
  },
  home: {
    tituloPagina: "",
    eyebrow: "Conectando elementos, criando possibilidades",
    lead: "Da química ao código. Transformando dados em soluções.",
    descricao:
      "Engenheira química, analista de dados na Localiza&Co e estudante de Engenharia de Software na PUC Minas. Curiosa por natureza, movida por desafios.",
    explorar: "Explorar o laboratório",
    curriculo: "Baixar currículo",
    cartaoElemento: "Elemento 35 · Bromo",
    cartaoMassa: "79,904",
    cartaoLegenda: "Química · Dados · Software",
    labEyebrow: "Meu laboratório",
    labTitulo: "Escolha um experimento.",
    labDica:
      "Clique em um objeto da bancada para explorar cada parte do portfólio.",
    reacaoEyebrow: "A reação que me trouxe até aqui",
    reacaoTitulo: "Uma combinação em constante evolução.",
    reagentes: [
      { titulo: "Engenharia Química", texto: "A base da minha curiosidade" },
      { titulo: "Dados e Automação", texto: "Informação que gera impacto" },
      {
        titulo: "Engenharia de Software",
        texto: "Construindo novas possibilidades",
      },
    ],
  },
  sobre: {
    titulo: "Sobre mim",
    eyebrow: "Minha composição",
    subtitulo:
      "Uma trajetória feita de descobertas, e a vontade de continuar experimentando.",
    fichaTitulo: "Ficha técnica",
    fichaNota:
      "Inspirada nas fichas de informações de segurança de reagentes (FISPQ).",
    formacaoEyebrow: "Elementos da minha formação",
    formacaoTitulo: "Aprender é uma reação contínua.",
    cursosTitulo: "Cursos complementares",
    habilidadesEyebrow: "Minha tabela de habilidades",
    habilidadesTitulo: "Diferentes elementos. Uma só composição.",
    niveis: { avancado: "Avançado", basico: "Básico", estudando: "Em estudo" },
    idiomasEyebrow: "Idiomas",
    idiomasTitulo: "Comunicação em várias fórmulas.",
  },
  projetos: {
    titulo: "Projetos",
    eyebrow: "Laboratório de ideias",
    subtitulo:
      "Cada projeto é um experimento: um problema real, ideias conectadas e uma solução ganhando forma.",
    secaoEyebrow: "Linha do tempo",
    secaoTitulo: "Do primeiro experimento ao mais recente.",
    status: { concluido: "Concluído", andamento: "Em andamento" },
    periodo: (ano: number, semestre: number) =>
      `${ano} · ${semestre}º semestre`,
    semestreCurto: (semestre: number) => `${semestre}º sem.`,
    github: "Repositório",
    deploy: "Ver online",
    prototipo: "Protótipo",
    minhaParte: "Minha parte",
    tecnologias: "Tecnologias utilizadas",
    semImagem: "Projeto em desenvolvimento. Imagens em breve.",
    verImagem: "Mostrar imagem",
  },
  experiencias: {
    titulo: "Experiências",
    eyebrow: "Reações que me trouxeram até aqui",
    subtitulo:
      "Uma trajetória construída passo a passo. Como numa coluna de destilação, cada etapa refinou a seguinte.",
    secaoEyebrow: "Coluna de destilação",
    secaoTitulo: "Onde conhecimento vira impacto.",
    topo: "Topo da coluna · hoje",
    base: "Base · onde tudo começou",
    atividades: "Principais atividades",
    destaques: "Destaques do período",
    voluntariadoEyebrow: "Liderança e desenvolvimento de pessoas",
    voluntariadoTitulo: "Compartilhar também é transformar.",
    premiosEyebrow: "Prêmios e eventos",
    premiosTitulo: "Resultados de boas reações.",
  },
  contato: {
    titulo: "Contato",
    eyebrow: "Elementos em conexão",
    subtitulo:
      "Novas conexões são o começo de boas reações. Vai ser um prazer conhecer a sua ideia.",
    canaisTitulo: "Uma boa conversa abre possibilidades.",
    canaisTexto:
      "Escolha o canal que preferir ou envie uma mensagem pelo formulário.",
    canais: {
      email: "E-mail",
      whatsapp: "WhatsApp",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
    form: {
      titulo: "Acenda uma conversa",
      nome: "Seu nome",
      nomePh: "Como posso chamar você?",
      email: "Seu e-mail",
      emailPh: "voce@exemplo.com",
      mensagem: "Sua mensagem",
      mensagemPh: "Conte um pouco sobre a sua ideia…",
      enviar: "Enviar mensagem",
      enviando: "Enviando…",
      sucessoTitulo: "Reação concluída!",
      sucesso: "Sua mensagem foi enviada. Vou responder assim que puder.",
      erroTitulo: "A reação não aconteceu.",
      erro: "Não foi possível enviar agora. Tente de novo ou escreva direto para",
      naoConfigurado:
        "O envio ainda não foi configurado neste ambiente. Escreva direto para",
      novaMensagem: "Enviar outra mensagem",
    },
    validacao: {
      nomeObrigatorio: "Informe seu nome.",
      nomeCurto: "O nome precisa ter pelo menos 2 letras.",
      nomeLongo: "O nome pode ter no máximo 120 caracteres.",
      emailObrigatorio: "Informe seu e-mail.",
      emailInvalido: "Digite um e-mail válido, como voce@exemplo.com.",
      mensagemObrigatoria: "Escreva sua mensagem.",
      mensagemCurta: "A mensagem precisa ter pelo menos 10 caracteres.",
      mensagemLonga: "A mensagem pode ter no máximo 2000 caracteres.",
    },
  },
  favoritos: {
    titulo: "Favoritos",
    eyebrow: "Estante de reagentes",
    subtitulo:
      "Filmes, séries, livros e músicas: os reagentes que deixam qualquer dia mais leve.",
    filmes: "Filmes",
    series: "Séries",
    livros: "Livros",
    musicas: "Músicas",
    prateleira: "Prateleira",
    avisoExemplo:
      "Itens de exemplo: edite src/data/favoritos.ts com os seus favoritos.",
    ouvir: "Ouvir",
    assistir: "Ver mais",
    tocar: "Tocar o clipe de",
  },
  rodape: {
    ctaTitulo: "Boas ideias criam novas conexões.",
    ctaTexto: "Vamos conversar sobre dados, tecnologia e possibilidades?",
    ctaBotao: "Entre em contato",
    frase: "Feito de curiosidade, código e boas reações.",
  },
  naoEncontrada: {
    titulo: "Elemento não encontrado",
    texto: "Esta página não existe na nossa tabela periódica.",
    voltar: "Voltar ao laboratório",
  },
};

export type Traducao = typeof pt;

const en: Traducao = {
  comum: {
    pularConteudo: "Skip to content",
    abreNovaAba: "(opens in a new tab)",
  },
  header: {
    subtitulo: "Chemistry · Data · Software",
    navegacao: "Main navigation",
    idioma: "Site language",
    irInicio: "Bruna Pedrosa, back to the lab",
  },
  home: {
    tituloPagina: "",
    eyebrow: "Connecting elements, creating possibilities",
    lead: "From chemistry to code. Turning data into solutions.",
    descricao:
      "Chemical engineer, data analyst at Localiza&Co and Software Engineering student at PUC Minas. Curious by nature, driven by challenges.",
    explorar: "Explore the lab",
    curriculo: "Download résumé",
    cartaoElemento: "Element 35 · Bromine",
    cartaoMassa: "79.904",
    cartaoLegenda: "Chemistry · Data · Software",
    labEyebrow: "My lab",
    labTitulo: "Pick an experiment.",
    labDica:
      "Click an object on the bench to explore each part of the portfolio.",
    reacaoEyebrow: "The reaction that brought me here",
    reacaoTitulo: "A combination that keeps evolving.",
    reagentes: [
      { titulo: "Chemical Engineering", texto: "Where my curiosity began" },
      {
        titulo: "Data and Automation",
        texto: "Information that creates impact",
      },
      { titulo: "Software Engineering", texto: "Building new possibilities" },
    ],
  },
  sobre: {
    titulo: "About me",
    eyebrow: "My composition",
    subtitulo:
      "A path made of discoveries, and the will to keep experimenting.",
    fichaTitulo: "Data sheet",
    fichaNota: "Inspired by chemical safety data sheets (SDS).",
    formacaoEyebrow: "Elements of my education",
    formacaoTitulo: "Learning is a continuous reaction.",
    cursosTitulo: "Additional courses",
    habilidadesEyebrow: "My table of skills",
    habilidadesTitulo: "Different elements. One composition.",
    niveis: { avancado: "Advanced", basico: "Basic", estudando: "Learning" },
    idiomasEyebrow: "Languages",
    idiomasTitulo: "Communicating in many formulas.",
  },
  projetos: {
    titulo: "Projects",
    eyebrow: "Idea lab",
    subtitulo:
      "Every project is an experiment: a real problem, connected ideas and a solution taking shape.",
    secaoEyebrow: "Timeline",
    secaoTitulo: "From the first experiment to the latest.",
    status: { concluido: "Completed", andamento: "In progress" },
    periodo: (ano: number, semestre: number) =>
      `${ano} · ${semestre === 1 ? "1st" : "2nd"} semester`,
    semestreCurto: (semestre: number) =>
      `${semestre === 1 ? "1st" : "2nd"} sem.`,
    github: "Repository",
    deploy: "Live site",
    prototipo: "Prototype",
    minhaParte: "My part",
    tecnologias: "Technologies used",
    semImagem: "Project in progress. Images coming soon.",
    verImagem: "Show image",
  },
  experiencias: {
    titulo: "Experience",
    eyebrow: "Reactions that brought me here",
    subtitulo:
      "A career built step by step. Like in a distillation column, each stage refined the next.",
    secaoEyebrow: "Distillation column",
    secaoTitulo: "Where knowledge becomes impact.",
    topo: "Top of the column · today",
    base: "Bottom · where it all started",
    atividades: "Main activities",
    destaques: "Highlights of this period",
    voluntariadoEyebrow: "Leadership and people development",
    voluntariadoTitulo: "Sharing is transforming too.",
    premiosEyebrow: "Awards and events",
    premiosTitulo: "Results of good reactions.",
  },
  contato: {
    titulo: "Contact",
    eyebrow: "Elements connecting",
    subtitulo:
      "New connections are the start of good reactions. I would love to hear your idea.",
    canaisTitulo: "A good conversation opens possibilities.",
    canaisTexto:
      "Pick your favorite channel or send a message through the form.",
    canais: {
      email: "Email",
      whatsapp: "WhatsApp",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
    form: {
      titulo: "Spark a conversation",
      nome: "Your name",
      nomePh: "What should I call you?",
      email: "Your email",
      emailPh: "you@example.com",
      mensagem: "Your message",
      mensagemPh: "Tell me a little about your idea…",
      enviar: "Send message",
      enviando: "Sending…",
      sucessoTitulo: "Reaction complete!",
      sucesso: "Your message was sent. I will reply as soon as I can.",
      erroTitulo: "The reaction did not happen.",
      erro: "It was not possible to send it right now. Try again or write directly to",
      naoConfigurado:
        "Sending is not configured in this environment yet. Write directly to",
      novaMensagem: "Send another message",
    },
    validacao: {
      nomeObrigatorio: "Enter your name.",
      nomeCurto: "Your name needs at least 2 letters.",
      nomeLongo: "Your name can have at most 120 characters.",
      emailObrigatorio: "Enter your email.",
      emailInvalido: "Enter a valid email, like you@example.com.",
      mensagemObrigatoria: "Write your message.",
      mensagemCurta: "Your message needs at least 10 characters.",
      mensagemLonga: "Your message can have at most 2000 characters.",
    },
  },
  favoritos: {
    titulo: "Favorites",
    eyebrow: "Reagent shelf",
    subtitulo:
      "Movies, series, books and music: the reagents that make any day lighter.",
    filmes: "Movies",
    series: "Series",
    livros: "Books",
    musicas: "Music",
    prateleira: "Shelf",
    avisoExemplo:
      "Sample items: edit src/data/favoritos.ts with your favorites.",
    ouvir: "Listen",
    assistir: "Learn more",
    tocar: "Play the music video for",
  },
  rodape: {
    ctaTitulo: "Good ideas create new bonds.",
    ctaTexto: "Shall we talk about data, technology and possibilities?",
    ctaBotao: "Get in touch",
    frase: "Made of curiosity, code and good reactions.",
  },
  naoEncontrada: {
    titulo: "Element not found",
    texto: "This page does not exist in our periodic table.",
    voltar: "Back to the lab",
  },
};

export const traducoes: Record<"pt" | "en", Traducao> = { pt, en };
