export interface ButtonProps {
  title: string;
  onClick?: () => void;
  disabled?: boolean;
  children?: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  onClick,
  disabled,
  children,
  className,
}) => {
  return (
    <button
      className={`${disabled ? "opacity-30" : "opacity-100"} ${
        disabled ? "cursor-not-allowed" : "cursor-pointer"
      } flex gap-2 min-w-[84px] max-w-[480px] items-center justify-center rounded-lg h-10 px-4 bg-blue-500 text-white text-sm font-bold leading-normal tracking-[0.015em] ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      <span>{title}</span>
      {children}
    </button>
  );
};
