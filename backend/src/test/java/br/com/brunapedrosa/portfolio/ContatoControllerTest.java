package br.com.brunapedrosa.portfolio;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

/**
 * Testes de integração da API (rodam com o banco H2 em memória).
 * Execute com: mvn test
 */
@SpringBootTest(properties = "app.admin-key=chave-de-teste")
@AutoConfigureMockMvc
class ContatoControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Test
    void healthRespondeOk() throws Exception {
        mockMvc.perform(get("/api/health"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.status").value("ok"));
    }

    @Test
    void salvaMensagemValida() throws Exception {
        String json = """
                {"nome": "Maria", "email": "maria@exemplo.com",
                 "mensagem": "Olá, gostei muito do seu portfólio!", "idioma": "pt"}
                """;

        mockMvc.perform(post("/api/contatos").contentType(MediaType.APPLICATION_JSON).content(json))
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.id").exists())
                .andExpect(jsonPath("$.nome").value("Maria"));
    }

    @Test
    void recusaMensagemInvalida() throws Exception {
        String json = """
                {"nome": "", "email": "nao-e-email", "mensagem": "curta"}
                """;

        mockMvc.perform(post("/api/contatos").contentType(MediaType.APPLICATION_JSON).content(json))
                .andExpect(status().isBadRequest())
                .andExpect(jsonPath("$.campos.email").exists())
                .andExpect(jsonPath("$.campos.mensagem").exists());
    }

    @Test
    void listagemExigeChave() throws Exception {
        mockMvc.perform(get("/api/contatos"))
                .andExpect(status().isUnauthorized());

        mockMvc.perform(get("/api/contatos").header("X-Admin-Key", "chave-de-teste"))
                .andExpect(status().isOk());
    }
}
