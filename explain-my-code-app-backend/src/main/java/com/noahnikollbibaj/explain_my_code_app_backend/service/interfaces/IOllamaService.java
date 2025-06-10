package com.noahnikollbibaj.explain_my_code_app_backend.service.interfaces;

public interface IOllamaService {

    String generateExplanation(String prompt, boolean stream, String model);

    String detectLanguage(String prompt);

    boolean isOllamaAvailable();
}
