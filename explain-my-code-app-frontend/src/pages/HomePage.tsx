import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const navigate = useNavigate();

  const handleNewExplanation = () => {
    navigate("/explain");
  };

  const handleAboutClick = () => {
    navigate("/about");
  };

  return (
    <div className="px-40 mt-48 flex justify-center items-center py-5">
      <div className="flex flex-col max-w-[960px] flex-1">
        <h1 className="text-white text-[32px] font-bold leading-tight px-4 text-center pb-3 pt-6">
          Enhance Your Code with AI-Powered Analysis
        </h1>
        <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4 text-center">
          Leverage advanced AI to identify bugs, improve code quality, and
          optimize performance. Start analyzing your code today.
        </p>
        <div className="flex justify-center">
          <div className="flex flex-1 gap-3 flex-wrap px-4 py-3 max-w-[480px] justify-center">
            <button
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#272b3a] text-white text-sm font-bold leading-normal tracking-[0.015em] grow"
              onClick={handleAboutClick}
            >
              <span className="truncate">Learn More</span>
            </button>
            <button
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#4264fa] text-white text-sm font-bold leading-normal tracking-[0.015em] grow"
              onClick={handleNewExplanation}
            >
              <span className="truncate">Explain Code</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
