"use client"
import { IoIosArrowDropupCircle } from "react-icons/io";
import useGoToTop from "./GoToTop";
const ButtonTop = () => {
   const {showTopElement, scrollToTop} = useGoToTop();
   return (
      <>{showTopElement? (
         <div className="fixed z-20  bottom-16 right-3 animate-bounce cursor-pointer text-black/80 dark:text-white/80" onClick={scrollToTop}>
         <IoIosArrowDropupCircle className="text-[36px] " />
      </div>): null
      }</>
     
   );
};

export default ButtonTop;
