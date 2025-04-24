import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

type ILabel = React.HTMLAttributes<HTMLLabelElement>;
type ISpan = React.HTMLAttributes<HTMLSpanElement>;
type IInput = React.HTMLAttributes<HTMLInputElement> & { haserror?: boolean };

export const Label = ({ className, ...props }: ILabel) => {
  return (
    <label
      {...props}
      className={twMerge(`w-full flex flex-col text-sm ${className}`)}
    />
  );
};

export const LabelError = ({ className, ...props }: ISpan) => {
  return (
    <span {...props} className={twMerge(`text-default-red ${className}`)} />
  );
};

export const LabelIconRight = ({ className, ...props }: ISpan) => {
  return <span {...props} className={twMerge(`-ml-10 mt-1 cursor-pointer`)} />;
};

export const Input = forwardRef<any, IInput>((props, ref) => {
  const { className, haserror = "" } = props;
  return (
    <input
      {...props}
      ref={ref}
      className={twMerge(
        `w-full p-2 px-3 mt-1 border text-md rounded-md 
         outline-none hover:border-default-blue transition 
         ${haserror && "border-default-red hover:border-default-red"}
         ${className}`
      )}
    />
  );
});
