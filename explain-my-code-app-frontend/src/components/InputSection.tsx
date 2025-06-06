import { CircleFadingArrowUp, WandSparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "./UI";

export interface InputSectionProps {
  onAnalyze: (code: string) => void;
  isLoading: boolean;
}

export const InputSection: React.FC<InputSectionProps> = ({
  onAnalyze,
  isLoading,
}) => {
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const [code, setCode] = useState<string>("");

  useEffect(() => {
    // Disable the input when loading
    setIsDisabled(isLoading);
  }, [isLoading]);

  useEffect(() => {
    if (code.trim() === "") {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [code]);

  const handleCodeChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCode(event.target.value);
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

      <div className={`${isLoading ? "opacity-30" : "opacity-100"}`}>
        {/* User Input */}
        <div className="flex w-full flex-wrap items-end gap-4 px-4 py-3">
          <label className="flex flex-col min-w-40 flex-1">
            <textarea
              disabled={isLoading}
              placeholder="Paste your code here..."
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border border-[#2f396a] bg-[#181d35] focus:border-[#2f396a] min-h-36 placeholder:text-[#8e99cc] p-[15px] text-base font-normal leading-normal"
              value={code}
              onChange={handleCodeChange}
            />
          </label>
        </div>

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
              }
            }}
            disabled={isDisabled}
          >
            <WandSparkles />
          </Button>
        </div>
      </div>
    </>
  );
};
