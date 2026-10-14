package br.com.brunapedrosa.portfolio.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

/**
 * Dados recebidos do formulário de contato (mesmas regras de validação do front-end).
 */
public record ContatoRequest(
        @NotBlank @Size(min = 2, max = 120) String nome,
        @NotBlank @Email @Size(max = 254) String email,
        @NotBlank @Size(min = 10, max = 2000) String mensagem,
        @Pattern(regexp = "pt|en") String idioma
) {
}
