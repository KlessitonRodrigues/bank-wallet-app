import { twMerge } from "tailwind-merge";

type IButton = React.HTMLAttributes<HTMLButtonElement>;

export const Button = ({ className, ...props }: IButton) => {
  return (
    <button
      {...props}
      className={twMerge(
        `px-3 py-1.5 min-w-20 rounded-md shadow-sm first-letter:uppercase text-text4 bg-white 
         hover:bg-opacity-70 transition-opacity ${className}`
      )}
    />
  );
};

export const ButtonBlue = ({ className, ...props }: IButton) => {
  return (
    <Button {...props} className={`bg-default-blue text-white ${className}`} />
  );
};

export const ButtonGreen = ({ className, ...props }: IButton) => {
  return (
    <Button {...props} className={`bg-default-green text-white ${className}`} />
  );
};

export const ButtonRed = ({ className, ...props }: IButton) => {
  return (
    <Button {...props} className={`bg-default-red text-white ${className}`} />
  );
};

export const ButtonYellow = ({ className, ...props }: IButton) => {
  return (
    <Button
      {...props}
      className={`bg-default-yellow text-white ${className}`}
    />
  );
};
