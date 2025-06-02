export const InputSection = () => {
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

      {/* User Input */}
      <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
        <label className="flex flex-col min-w-40 flex-1">
          <textarea
            placeholder="Paste your code here..."
            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border border-[#2f396a] bg-[#181d35] focus:border-[#2f396a] min-h-36 placeholder:text-[#8e99cc] p-[15px] text-base font-normal leading-normal"
          />
        </label>
      </div>

      {/* Analyze Button */}
      <div className="flex px-4 py-3 justify-end">
        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#607afb] text-white text-sm font-bold leading-normal tracking-[0.015em]">
          <span className="truncate">Analyze Code</span>
        </button>
      </div>
    </>
  );
};
