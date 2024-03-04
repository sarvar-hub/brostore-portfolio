
import { IMenuList } from "@/types/menu";
import { RiArrowDownSLine } from "react-icons/ri";
import "./style.css"

const RenderMenu = ({ menu }: { menu: IMenuList[] }) => {
  const renderMenuItem = (item: IMenuList, isFirstLevel = true) => {
    const pFL = isFirstLevel ? 'px-5 py-[10px] isFirst' : 'py-1';
    return (
      <li key={item.id} className={`${pFL} listItem text-[15px] font-normal relative ${item.child ? 'menu-item-has-children' : ''}`}>
        <a href="#" className="whitespace-nowrap w-fit items-center hover:text-[#3F72E5] relative flex underline-transition">
          {item.name} {item.child && <RiArrowDownSLine />}
        </a>
        {item.child && (
          <div className={`${!isFirstLevel ? 'mt-1 absolute' : ''}`}>
            <ul className={`${isFirstLevel ? 'mt-2 -ml-9' : ''} absolute bg-white shadow-lg rounded-[16px] py-[17px] px-[26px] z-20 sub-menu`}>
              {item.child.map(childItem => renderMenuItem(childItem, false))}
            </ul>
          </div>
        )}
      </li>
    );
  };

  return (
    <ul className='flex flex-wrap justify-center items-center z-20 sub-menu'>
      {menu.map(item => renderMenuItem(item))}
    </ul>
  );
}

export default RenderMenu;
