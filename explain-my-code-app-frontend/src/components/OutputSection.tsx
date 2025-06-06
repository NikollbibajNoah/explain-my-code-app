import React from "react";

export interface OutputSectionProps {
  result?: string;
  language?: string;
  isLoading: boolean;
}

export const OutputSection: React.FC<OutputSectionProps> = ({
  result,
  language,
  isLoading,
}) => {
  return (
    <div className=" p-4">
      <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] mb-5 border-b pb-2">
        Analysis Results
      </h2>
      {language && (
        <h3 className="text-white shadow mb-5">
          Programming Language: <b>{language}</b>
        </h3>
      )}
      <div className="text-white text-base font-normal leading-normal ">
        {isLoading ? (
          <div className="flex items-center gap-2">
            <span className="animate-spin rounded-full border-4 border-t-transparent border-white h-6 w-6"></span>
            <span>Generating analysis...</span>
          </div>
        ) : result ? (
          <p>{result}</p>
        ) : (
          <p>
            The AI analysis will appear here after you submit your code. This
            will include insights on code quality, potential bugs, and
            suggestions for optimization.
          </p>
        )}
      </div>
    </div>
  );
};
