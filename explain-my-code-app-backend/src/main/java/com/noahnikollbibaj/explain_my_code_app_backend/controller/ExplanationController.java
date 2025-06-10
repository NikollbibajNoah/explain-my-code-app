package com.noahnikollbibaj.explain_my_code_app_backend.controller;

import com.noahnikollbibaj.explain_my_code_app_backend.entities.ExplanationRequest;
import com.noahnikollbibaj.explain_my_code_app_backend.entities.ExplanationResponse;
import com.noahnikollbibaj.explain_my_code_app_backend.entities.LangaugeDetectRequest;
import com.noahnikollbibaj.explain_my_code_app_backend.service.OllamaService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@AllArgsConstructor
public class ExplanationController {

    private final OllamaService ollamaService;

    @GetMapping("/status")
    public ResponseEntity<String> checkStatus() {
        boolean status = ollamaService.isOllamaAvailable();

        if (status) {
            return ResponseEntity.ok("aktiv");
        } else {
            return ResponseEntity.ok("inaktiv");
        }
    }

    @PostMapping("/explain")
    public ExplanationResponse explain(@RequestBody ExplanationRequest explanationRequest) {
        String result = ollamaService.generateExplanation(explanationRequest.getPrompt(), false,
                explanationRequest.getModel());
        return new ExplanationResponse(result);
    }

    @PostMapping("/detect-language")
    public ExplanationResponse explain(@RequestBody LangaugeDetectRequest langaugeDetectRequest) {
        String result = ollamaService.detectLanguage(langaugeDetectRequest.getPrompt());
        return new ExplanationResponse(result);
    }
}
