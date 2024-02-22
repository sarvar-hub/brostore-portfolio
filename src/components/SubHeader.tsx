import { useState } from "react";
import { LuInstagram } from "react-icons/lu";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";

const SubHeader = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (<div className="hidden md:block bg-menu-back">
    <div className="justify-center items-center flex p-[0.45rem] border-b-[1px] border-[#DADCE0]">
      <div className="flex mx-auto">
        <ul className="flex gap-8">
          <li className="flex justify-center items-center border-r border-[#DADCE0] cursor-pointer">
            <a href="#"><LuInstagram className="mr-[15px]" /></a>
          </li>
          <li className="border-r border-[#DADCE0] cursor-pointer">
            <a href="tel: +998994541140" className="mr-[15px] text-[16px] font-[400] text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500" >Свяжитесь с нами</a>
          </li>
          <li>
            <a href="tel: +998994541140" className="text-[16px] font-[550] cursor-pointer">+998 78 777 20 20</a>
          </li>
          <li className="border-l border-[#DADCE0] cursor-pointer relative">
            <button onClick={() => setIsOpen((prev) => !prev)} className="ml-[15px] flex items-center justify-center font-thin gap-1">Русский {isOpen ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
            </button>
            {isOpen ? <div className="absolute w-[100px] p-2 shadow-lg bg-white rounded-lg font-thin text-center z-[1]"><ul><li className="hover:text-gray-400"><a href="#">Русский</a></li><li className="hover:text-gray-400"><a href="#">English</a></li></ul></div> : null}
          </li>
        </ul>
      </div>
    </div>
  </div>);
}

export default SubHeader;
