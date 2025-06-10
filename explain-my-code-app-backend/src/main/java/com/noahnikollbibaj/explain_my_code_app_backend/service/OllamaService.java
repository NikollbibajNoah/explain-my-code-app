package com.noahnikollbibaj.explain_my_code_app_backend.service;

import com.noahnikollbibaj.explain_my_code_app_backend.service.interfaces.IOllamaService;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import org.springframework.http.*;

import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.HashMap;
import java.util.Map;

@Service
public class OllamaService implements IOllamaService {

    private final String OLLAMA_BASE_URL = "http://localhost:11434";
    private final String OLLAMA_ENDPOINT =  OLLAMA_BASE_URL + "/api/generate";

    @Override
    public String generateExplanation(String code, boolean stream, String model) {
        RestTemplate restTemplate = new RestTemplate();

        String prompt = "Erkläre mir bitte nur in kurzen Sätzen den folgenden Code:\n" + code;

        // JSON Request Body
        Map<String, Object> requestBody = new HashMap<>();
        requestBody.put("prompt", prompt);
        requestBody.put("stream", stream);
        requestBody.put("model", model);

        // Header
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        HttpEntity<Map<String, Object>> request = new HttpEntity<>(requestBody, headers);

        // Send POST request to Ollama API
        ResponseEntity<Map> response = restTemplate.postForEntity(OLLAMA_ENDPOINT, request, Map.class);

        if (response.getStatusCode() == HttpStatus.OK && response.getBody() != null) {
            return (String) response.getBody().get("response");
        }

        return "Fehler bei der Kommunikation mit Ollama.";
    }

    @Override
    public String detectLanguage(String code) {
        RestTemplate restTemplate = new RestTemplate();

        String prompt = "In welcher Programmiersprache ist dieser Code geschrieben?\n" +
                "Gib nur den Namen der Sprache zurück, ohne Erklärung oder Kommentar.\n\n" + code;

        Map<String, Object> requestBody = new HashMap<>();
        requestBody.put("model", "phi3");
        requestBody.put("prompt", prompt);
        requestBody.put("stream", false);

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        HttpEntity<Map<String, Object>> request = new HttpEntity<>(requestBody, headers);
        ResponseEntity<Map> response = restTemplate.postForEntity(OLLAMA_ENDPOINT, request, Map.class);

        if (response.getStatusCode() == HttpStatus.OK && response.getBody() != null) {
            String raw = (String) response.getBody().get("response");
            return raw.strip().split("\\s+")[0]; // "Java", "Python", etc.
        }

        return "Unbekannt";
    }

    @Override
    public boolean isOllamaAvailable() {
        try {
            HttpURLConnection connection = (HttpURLConnection) new URL(OLLAMA_BASE_URL).openConnection();
            connection.setConnectTimeout(1000);
            connection.setReadTimeout(1000);
            connection.setRequestMethod("GET");

            int responseCode = connection.getResponseCode();

            return responseCode == 200;
        } catch (IOException e) {
            return false;
        }
    }
}
