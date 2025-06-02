import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  const handleTitleClick = () => {
    navigate("/");
  };

  const handleNewExplanation = () => {
    navigate("/explain");
  };

  const handleAboutClick = () => {
    navigate("/about");
  };

  return (
    <header className="flex items-center justify-between whitespace-nowrap shadow-md border-b border-solid border-b-[#21284a] px-10 py-3">
      <div
        className="flex items-center gap-4 text-white cursor-pointer"
        onClick={handleTitleClick}
      >
        {/* Icon SVG */}
        <div className="size-4">
          <svg
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_6_330)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z"
                fill="currentColor"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_6_330">
                <rect width="48" height="48" fill="white"></rect>
              </clipPath>
            </defs>
          </svg>
        </div>

        {/* Title */}
        <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">
          Explain My Code
        </h2>
      </div>
      <div className="flex justify-end gap-8">
        <div className="flex items-center gap-9">
          {/* <a className="text-white text-sm font-medium leading-normal" href="#">
            Projects
          </a>
          <a className="text-white text-sm font-medium leading-normal" href="#">
            Documentation
          </a> */}
          <span
            className="cursor-pointer text-white text-sm font-medium"
            onClick={handleAboutClick}
          >
            About
          </span>
        </div>
        <button
          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-[#607afb] text-white text-sm font-bold tracking-[0.015em]"
          onClick={handleNewExplanation}
        >
          <span className="truncate">New Explenation</span>
        </button>
        {/* <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
              ></div> */}
      </div>
    </header>
  );
};
