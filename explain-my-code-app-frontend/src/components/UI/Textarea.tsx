import { useEffect } from "react";

export interface TextAreaProps {
  isDisabled?: boolean;
  isGenerating?: boolean;
  content: string | undefined;
  handleCodeChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const TextArea: React.FC<TextAreaProps> = ({
  isDisabled,
  isGenerating,
  content,
  handleCodeChange,
}) => {
  useEffect(() => {
    if (isGenerating) {
      // triggerGlare();
    }
  }, [isGenerating]);

  return (
    <section className="flex w-full flex-wrap items-end gap-4 px-4 py-3">
      <textarea
        disabled={isDisabled}
        placeholder="Paste your code here..."
        className={`${
          isDisabled ? "opacity-30" : "opacity-100"
        } w-full overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border border-[#2f396a] bg-[#181d35] focus:border-[#2f396a] min-h-36 placeholder:text-[#8e99cc] p-4`}
        value={content}
        onChange={handleCodeChange}
      />
    </section>
  );
};
