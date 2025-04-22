import { twMerge } from "tailwind-merge";

type IPage = React.HTMLAttributes<HTMLDivElement>;

const Page = ({ className, ...props }: IPage) => {
  return (
    <div
      {...props}
      className={twMerge(
        `flex flex-col items-center gap-4 p-2 max-w-7xl m-auto`
      )}
    />
  );
};

export default Page;
