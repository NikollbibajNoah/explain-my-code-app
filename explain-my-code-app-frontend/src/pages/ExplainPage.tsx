import { useState } from "react";
import { InputSection, OutputSection } from "../components";
import { generateExplanation } from "../service";
import { detectLanguage } from "../service/OllamaService";

export const ExplainPage = () => {
  const [language, setLanguage] = useState<string | undefined>(undefined);
  const [output, setOutput] = useState<string | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const explain = async (code: string) => {
    const explanation = await generateExplanation(code, false, "phi3");

    // Clear previous output
    setOutput(undefined);

    if (explanation) {
      setOutput(explanation.output);
    }

    setIsLoading(false);
  };

  const detect = async (prompt: string) => {
    const language = await detectLanguage(prompt);

    // Clear previous language
    setLanguage(undefined);

    if (language) {
      setLanguage(language.output);
    }
  };

  const handleCodeChange = (code: string) => {
    if (code.trim() === "") return;

    setIsLoading(true);

    detect(code);
    explain(code);
  };

  return (
    <div className="px-40 flex justify-center py-5">
      <div className="flex flex-col max-w-[960px] flex-1">
        <InputSection isLoading={isLoading} onAnalyze={handleCodeChange} />

        <OutputSection
          isLoading={isLoading}
          result={output}
          language={language}
        />
      </div>
    </div>
  );
};
