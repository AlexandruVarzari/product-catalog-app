import { ReactNode } from "react";

interface ButtonProps {
  variant: "primary" | "secondary";
  onClick: () => void;
  children: ReactNode;
  className?: string;
}

export const Button = ({
  variant,
  onClick,
  children,
  className = "",
}: ButtonProps) => {
  return (
    <button className={`btn btn-${variant} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};
