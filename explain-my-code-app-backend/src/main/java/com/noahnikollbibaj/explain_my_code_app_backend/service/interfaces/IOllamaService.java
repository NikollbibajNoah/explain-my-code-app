package com.noahnikollbibaj.explain_my_code_app_backend.service.interfaces;

public interface IOllamaService {

    public String generateExplanation(String prompt, boolean stream, String model);

    public String detectLanguage(String prompt);
}
