import clsx from "clsx";
import css from "./Button.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: string;
}

export const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button className={clsx(css.btnBase, className)} {...props}>
      {children}
    </button>
  );
};
