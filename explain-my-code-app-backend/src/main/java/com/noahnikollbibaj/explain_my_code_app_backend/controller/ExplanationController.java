package com.noahnikollbibaj.explain_my_code_app_backend.controller;

import com.noahnikollbibaj.explain_my_code_app_backend.entities.ExplanationRequest;
import com.noahnikollbibaj.explain_my_code_app_backend.entities.ExplanationResponse;
import com.noahnikollbibaj.explain_my_code_app_backend.entities.LangaugeDetectRequest;
import com.noahnikollbibaj.explain_my_code_app_backend.service.OllamaService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@AllArgsConstructor
public class ExplanationController {

    private final OllamaService ollamaService;

    @PostMapping("/explain")
    public ExplanationResponse explain(@RequestBody ExplanationRequest explanationRequest) {
        String result = ollamaService.generateExplanation(explanationRequest.getPrompt(), false,
                explanationRequest.getModel());
        return new ExplanationResponse(result);
    }

    @PostMapping("/detect-language")
    public ExplanationResponse explain(@RequestBody LangaugeDetectRequest lanugageDetectRequest) {
        String result = ollamaService.detectLanguage(lanugageDetectRequest.getPrompt());
        return new ExplanationResponse(result);
    }
}
