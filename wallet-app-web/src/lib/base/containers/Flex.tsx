import { twMerge } from "tailwind-merge";

type IFlex = React.HTMLAttributes<HTMLDivElement> & {
  item?: "center" | "start" | "end" | "between";
  justify?: "center" | "start" | "end" | "between";
  gap?: number;
  resposive?: boolean;
};

export const Flex = (props: IFlex) => {
  const { className = "", item = "center", justify = "start", gap = 2 } = props;
  return (
    <div
      {...props}
      className={twMerge(
        `w-full flex gap-${gap} items-${item} justify-${justify} ${className}`
      )}
    />
  );
};

export const Row = ({ className = "", ...props }: IFlex) => {
  return <Flex {...props} className={`flex-row ${className}`} />;
};

export const Column = ({ className = "", ...props }: IFlex) => {
  return <Flex {...props} className={`h-full flex-col  ${className}`} />;
};
