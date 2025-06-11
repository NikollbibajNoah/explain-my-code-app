import { axiosInstance } from "./AxiosInstance";

const explainEndpoint = import.meta.env.VITE_EXPLAIN_ENDPOINT;
const detectLanguageEndpoint = import.meta.env.VITE_DETECT_LANGUAGE_ENDPOINT;

export const detectLanguage = async (prompt: string) => {
  try {
    const response = await axiosInstance.post(detectLanguageEndpoint, {
      prompt: prompt,
    });

    if (response.status !== 200) {
      throw new Error("Request failed with status: " + response.status);
    }

    return response.data;
  } catch (error) {
    console.error("Error detecting language:", error);
    throw new Error("Failed to detect language");
  }
};

export const generateExplanation = async (
  prompt: string,
  stream: boolean,
  model: string
) => {
  try {
    const response = await axiosInstance.post(explainEndpoint, {
      prompt: prompt,
      stream: stream,
      model: model,
    });

    if (response.status !== 200) {
      throw new Error("Request failed with status: " + response.status);
    }

    return response.data;
  } catch (error) {
    console.error("Error generating explanation:", error);
    throw new Error("Failed to generate explanation");
  }
};

export const checkOllamaStatus = async (): Promise<boolean> => {
  try {
    const response = await axiosInstance.get("/status");

    const status = response.data;

    if (status === "aktiv") {
      return false;
    } else if (status === "inaktiv") {
      return true;
    }
  } catch (error) {
    console.error("Error checking Ollama status:", error);
    throw new Error("Failed to check Ollama status");
  }
  return false;
};
