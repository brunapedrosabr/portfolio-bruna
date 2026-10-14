package br.com.brunapedrosa.portfolio.repository;

import br.com.brunapedrosa.portfolio.model.Contato;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ContatoRepository extends JpaRepository<Contato, Long> {

    /** Mensagens mais recentes primeiro. */
    List<Contato> findAllByOrderByCriadoEmDesc();
}
