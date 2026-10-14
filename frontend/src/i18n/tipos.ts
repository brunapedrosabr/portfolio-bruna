// Idiomas suportados pelo site.
export type Idioma = 'pt' | 'en'

// Um texto que existe nas duas línguas. Usado em todos os arquivos de dados.
export type Texto = Record<Idioma, string>
