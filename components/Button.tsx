import { MouseEventHandler } from "react";

export default function Button({
  children,
  onClick,
  className,
  variant = "primary",
}: {
  children: React.ReactNode | string;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  variant?: "primary" | "secondary";
}) {
  return (
    <button
      className={`inline-flex py-2 px-4 rounded-[5px] cursor-pointer font-medium ${
        variant === "secondary"
          ? "bg-white text-primary border border-primary"
          : "bg-primary text-white"
      } ${className || ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
