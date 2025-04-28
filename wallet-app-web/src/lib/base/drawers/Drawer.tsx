import { PiXBold } from "react-icons/pi";
import { twMerge } from "tailwind-merge";
import { ButtonIcon } from "../buttons/ButtonIcon";

type IDrawer = React.HTMLAttributes<HTMLDivElement> & {
  label?: string;
  visible?: boolean;
  onClose?: () => void;
};

export const Drawer = (props: IDrawer) => {
  const { className, label, visible, onClose, children } = props;

  return (
    <div
      {...props}
      className={twMerge(
        `fixed top-0 right-0 h-full overflow-hidden bg-opacity-black
         transition-[width] duration-0 ${visible ? "w-full" : "w-0"} 
        `
      )}
    >
      <div
        className={twMerge(
          `h-full w-full max-w-lg ml-auto bg-bg1 px-4 py-2 shadow-lg 
           overflow-hidden transition-[width] duration-700 ease-out
           ${visible ? "w-full" : "w-0"} ${className}`
        )}
      >
        <div className="flex items-center justify-between mb-2">
          <h1>{label}</h1>
          <ButtonIcon onClick={onClose}>
            <PiXBold size={22} />
          </ButtonIcon>
        </div>
        {children}
      </div>
    </div>
  );
};
