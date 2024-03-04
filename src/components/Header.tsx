import { FiMenu, FiSearch, FiShoppingCart, FiUser, FiX } from "react-icons/fi";
import { menuList } from "@/values/menu";
import RenderMenu from "./RenderMenu";
import RenderMobileMenu from "@/components/RenderMobileMenu";
import { useState } from "react";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);

  return (
    <>
      <div className="bg-menu-back h-[88px] flex justify-center relative items-center">
        <div className="flex items-center justify-center w-11/12 mx-auto z-50">
          <div className="flex w-full max-w-[1280px] items-center justify-center mx-auto">
            <div className="bro-lg:hidden mr-auto">
              <button onClick={() => setMobileMenu(prev => !prev)} className={`rounded menu-icon cursor-pointer ${mobileMenu ? 'open' : ''}`}>
                {mobileMenu ? (
                  <FiX size={30} />
                ) : (
                  <FiMenu size={30} />
                )}
              </button>
            </div>
            <a href="#" className="text-4xl font-bold w-[120px] text-center">
              Bro
            </a>
            <div className="hidden bro-lg:block max-w-full">
              <RenderMenu menu={menuList} />
            </div>
            <div className="ml-auto flex gap-4">
              <div>
                <FiSearch size={25} className="hidden md:block" />
              </div>
              <div>
                <FiUser size={25} className="hidden md:block" />
              </div>
              <div>
                <FiShoppingCart size={25} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {mobileMenu ? (
        <div className="absolute bg-menu-back left-0 md:top-[127px] top-[88px] bottom-0 w-full border-[1px] px-[15px] border-t-[#DADCE0] overflow-x-hidden">
          <RenderMobileMenu menu={menuList} />
        </div>
      ) : null}
    </>
  );
};

export default Header;
