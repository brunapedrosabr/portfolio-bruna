package br.com.brunapedrosa.portfolio.service;

import br.com.brunapedrosa.portfolio.dto.ContatoRequest;
import br.com.brunapedrosa.portfolio.model.Contato;
import br.com.brunapedrosa.portfolio.repository.ContatoRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Regras de negócio das mensagens de contato.
 */
@Service
public class ContatoService {

    private final ContatoRepository repository;

    public ContatoService(ContatoRepository repository) {
        this.repository = repository;
    }

    @Transactional
    public Contato salvar(ContatoRequest request) {
        String idioma = request.idioma() == null ? "pt" : request.idioma();
        Contato contato = new Contato(
                request.nome().trim(),
                request.email().trim().toLowerCase(),
                request.mensagem().trim(),
                idioma
        );
        return repository.save(contato);
    }

    @Transactional(readOnly = true)
    public List<Contato> listar() {
        return repository.findAllByOrderByCriadoEmDesc();
    }
}
