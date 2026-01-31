import { ReactNode } from "react";

const CardBib = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full mx-auto  dark:bg-black">
      {children}
    </div>
  );
};

export default CardBib;
