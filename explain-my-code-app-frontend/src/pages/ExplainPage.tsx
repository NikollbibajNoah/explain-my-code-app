import { InputSection, OutputSection } from "../components";

export const ExplainPage = () => {
  return (
    <div className="px-40 flex justify-center py-5">
      <div className="flex flex-col max-w-[960px] flex-1">
        <InputSection />

        <OutputSection />
      </div>
    </div>
  );
};
