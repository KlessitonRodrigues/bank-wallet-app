import { twMerge } from "tailwind-merge";

type ILabel = React.HTMLAttributes<HTMLLabelElement>;
type IInput = React.HTMLAttributes<HTMLInputElement>;
type ISpan = React.HTMLAttributes<HTMLSpanElement>;

export const Label = ({ className, ...props }: ILabel) => {
  return (
    <label
      {...props}
      className={twMerge(`w-full flex flex-col text-sm ${className}`)}
    />
  );
};

export const ErrorLabel = ({ className, ...props }: ISpan) => {
  return (
    <span {...props} className={twMerge(`text-default-red ${className}`)} />
  );
};

export const Input = ({ className, ...props }: IInput) => {
  return (
    <input
      {...props}
      className={twMerge(
        `w-full p-2 px-3 mt-1 border text-md rounded-md 
         outline-none hover:border-default-blue transition ${className}`
      )}
    />
  );
};
