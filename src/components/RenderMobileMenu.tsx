import { IMenuList } from "@/types/menu";
import { useState } from "react";

const RenderMobileMenu = ({ menu }: { menu: IMenuList[] }) => {
  const [menuStates, setMenuStates] = useState<{ [key: string]: boolean }>({});

  const renderMenuItem = (item: IMenuList) => {
    const key = item.id.toString();
    const isOpen = menuStates[key] || false;

    const handleToggle = () => {
      setMenuStates((prev) => ({
        ...prev,
        [key]: !isOpen,
      }));
    };

    return (
      <li key={key} className="w-full flex items-center border-[#DADCE0] border-b-[1px]">
        <a
          onClick={handleToggle}
          href="#"
          className="text-xl py-[4px] min-h-[54px] w-full flex items-center"
        >
          {item.name}
        </a>
        <div className="ml-auto">
          {item.child ? (
            <svg
              width="8"
              height="14"
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.999999 13L7 7L1 1"
                stroke="#2c2d2e"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          ) : null}
        </div>
        {isOpen && item.child ? (
          <ul className="absolute z-10 bg-menu-back w-full h-full top-0 left-0 px-[15px]">
            <li className="w-full flex items-center border-[#DADCE0] border-b-[1px]">
              <a
                onClick={handleToggle}
                href="#"
                className="text-[0.875rem] py-[4px] min-h-[50px] w-full flex items-center"
              >
                <svg className="mr-[10px]" width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 9L1 5L5 1" stroke="#2c2d2e" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
                {item.name}
              </a>
            </li>
            {item.child.map((subItem, subIndex) => (
              <RenderMobileMenu key={subIndex} menu={[subItem]} />
            ))}
          </ul>
        ) : null}
      </li>
    );
  };

  return <ul className="flex flex-wrap justify-center items-center z-0">{menu.map(renderMenuItem)}</ul>;
};

export default RenderMobileMenu;

