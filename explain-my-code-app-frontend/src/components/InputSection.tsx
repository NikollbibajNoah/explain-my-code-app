import {
  AlertCircleIcon,
  CircleFadingArrowUp,
  WandSparkles,
} from "lucide-react";
import { useState } from "react";
import { Button, TextArea } from "./UI";

export interface InputSectionProps {
  onAnalyze: (code: string) => void;
  isLoading: boolean;
  status: boolean;
}

export const InputSection: React.FC<InputSectionProps> = ({
  onAnalyze,
  isLoading,
  status,
}) => {
  const [code, setCode] = useState<string>("");
  const [isGenerating, setIsGenerating] = useState<boolean>(false);

  const handleCodeChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCode(event.target.value);
  };

  const getTextAreaAvailability = () => {
    if (isLoading) {
      return true; // Disable the textarea when loading
    }
    if (status) {
      return true; // Disable the textarea when service is unavailable
    }
    return false; // Enable the textarea otherwise
  };

  const getButtonAvailability = () => {
    if (isLoading) {
      return true; // Disable the button when loading
    }
    if (code.trim() === "") {
      return true; // Disable the button when code is empty
    }
    return false; // Enable the button otherwise
  };

  return (
    <>
      {/* User Input Section header */}
      <div className="flex flex-wrap justify-between gap-3 p-4">
        <div className="flex min-w-72 flex-col gap-3">
          <p className="text-white tracking-light text-[32px] font-bold leading-tight">
            Code Analyzer
          </p>
          <p className="text-[#8e99cc] text-sm font-normal leading-normal">
            Paste your code below to receive AI-powered analysis and suggestions
            for improvements.
          </p>
        </div>
      </div>

      <section>
        {/* User Input */}
        <TextArea
          isDisabled={getTextAreaAvailability()}
          isGenerating={isGenerating}
          content={code}
          handleCodeChange={handleCodeChange}
        />

        {/* Analyze Button */}
        <div className="flex items-center gap-2 px-4 py-3 justify-end">
          <Button title="Improve Code" className="!bg-pink-500" disabled>
            <CircleFadingArrowUp />
          </Button>
          <Button
            title="Analyze Code"
            onClick={() => {
              if (!isLoading) {
                onAnalyze(code);
                setIsGenerating(true);
              }
            }}
            disabled={getButtonAvailability()}
          >
            <WandSparkles />
          </Button>
        </div>
      </section>
      {status && (
        <>
          <section className="px-5 flex flex-col gap-3">
            <div className="flex items-center gap-2 text-red-500 ">
              <AlertCircleIcon />
              <p className="text-sm font-normal">
                The AI service is currently unavailable. Please try again later.
              </p>
            </div>
            <div className="text-gray-500">
              <small>AI features only works with Ollama. Check readme for Ollama configuration</small>
            </div>
          </section>
        </>
      )}
    </>
  );
};
