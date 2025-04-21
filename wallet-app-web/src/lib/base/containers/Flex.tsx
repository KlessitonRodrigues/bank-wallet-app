import { twMerge } from "tailwind-merge";

type IFlex = React.HTMLAttributes<HTMLDivElement>;

export const Flex = ({ className, ...props }: IFlex) => {
  return (
    <div {...props} className={twMerge(`w-full flex gap-2 ${className}`)} />
  );
};

export const Row = ({ className, ...props }: IFlex) => {
  return <Flex {...props} className={`flex-row items-center ${className}`} />;
};

export const Column = ({ className, ...props }: IFlex) => {
  return <Flex {...props} className={`flex-col  ${className}`} />;
};
