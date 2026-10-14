package br.com.brunapedrosa.portfolio.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import java.time.Instant;

/**
 * Mensagem enviada pelo formulário de contato do portfólio.
 */
@Entity
@Table(name = "contatos")
public class Contato {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 120)
    private String nome;

    @Column(nullable = false, length = 254)
    private String email;

    @Column(nullable = false, length = 2000)
    private String mensagem;

    @Column(length = 2)
    private String idioma;

    @Column(name = "criado_em", nullable = false)
    private Instant criadoEm;

    /** Construtor vazio exigido pelo JPA. */
    protected Contato() {
    }

    public Contato(String nome, String email, String mensagem, String idioma) {
        this.nome = nome;
        this.email = email;
        this.mensagem = mensagem;
        this.idioma = idioma;
        this.criadoEm = Instant.now();
    }

    public Long getId() {
        return id;
    }

    public String getNome() {
        return nome;
    }

    public String getEmail() {
        return email;
    }

    public String getMensagem() {
        return mensagem;
    }

    public String getIdioma() {
        return idioma;
    }

    public Instant getCriadoEm() {
        return criadoEm;
    }
}
