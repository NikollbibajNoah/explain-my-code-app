package com.noahnikollbibaj.explain_my_code_app_backend.entities;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ExplanationRequest {
    private String prompt;
    private boolean stream;
    private String model;
}
