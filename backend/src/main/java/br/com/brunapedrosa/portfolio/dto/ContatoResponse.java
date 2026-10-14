package br.com.brunapedrosa.portfolio.dto;

import br.com.brunapedrosa.portfolio.model.Contato;

import java.time.Instant;

/**
 * Dados devolvidos pela API (evita expor a entidade JPA diretamente).
 */
public record ContatoResponse(
        Long id,
        String nome,
        String email,
        String mensagem,
        String idioma,
        Instant criadoEm
) {

    public static ContatoResponse de(Contato contato) {
        return new ContatoResponse(
                contato.getId(),
                contato.getNome(),
                contato.getEmail(),
                contato.getMensagem(),
                contato.getIdioma(),
                contato.getCriadoEm()
        );
    }
}
