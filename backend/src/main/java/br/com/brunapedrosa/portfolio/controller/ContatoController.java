package br.com.brunapedrosa.portfolio.controller;

import br.com.brunapedrosa.portfolio.dto.ContatoRequest;
import br.com.brunapedrosa.portfolio.dto.ContatoResponse;
import br.com.brunapedrosa.portfolio.model.Contato;
import br.com.brunapedrosa.portfolio.service.ContatoService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.util.List;

/**
 * Endpoints das mensagens de contato.
 *
 * POST /api/contatos  -> salva uma nova mensagem (usado pelo formulário do site)
 * GET  /api/contatos  -> lista as mensagens (protegido pelo cabeçalho X-Admin-Key)
 */
@RestController
@RequestMapping("/api/contatos")
public class ContatoController {

    private final ContatoService service;
    private final String adminKey;

    public ContatoController(ContatoService service, @Value("${app.admin-key:}") String adminKey) {
        this.service = service;
        this.adminKey = adminKey;
    }

    @PostMapping
    public ResponseEntity<ContatoResponse> criar(@Valid @RequestBody ContatoRequest request) {
        Contato salvo = service.salvar(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(ContatoResponse.de(salvo));
    }

    @GetMapping
    public ResponseEntity<List<ContatoResponse>> listar(
            @RequestHeader(value = "X-Admin-Key", required = false) String chave) {
        if (!chaveValida(chave)) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
        List<ContatoResponse> contatos = service.listar().stream()
                .map(ContatoResponse::de)
                .toList();
        return ResponseEntity.ok(contatos);
    }

    private boolean chaveValida(String chave) {
        if (adminKey.isBlank() || chave == null) {
            return false;
        }
        // Comparação em tempo constante (boa prática para segredos).
        return MessageDigest.isEqual(
                adminKey.getBytes(StandardCharsets.UTF_8),
                chave.getBytes(StandardCharsets.UTF_8));
    }
}
