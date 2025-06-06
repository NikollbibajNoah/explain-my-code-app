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
