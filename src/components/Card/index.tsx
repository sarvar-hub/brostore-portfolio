import { ILaptop } from "@/types/ILaptop"
import formatPrice from "@/format/price"
import { useState } from "react";
import "./style.css"

function Card({ laptop }: { laptop: ILaptop }) {
  const [isHovered, setIsHovered] = useState(false);
  const formattedPrice = formatPrice(laptop.price);

  return <>
    <div className={`${isHovered ? 'hovered' : ''} text-center items-center justify-center w-1/2 md:w-1/5 px-[10px]`} onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <div>
        <img className="image-transition" src={isHovered ? laptop.images[1].url : laptop.images[0].url} alt="product image" />
      </div>
      <div>
        <h1 className="text-[16px]">Ноутбук <strong>{laptop.name}</strong></h1>
      </div>
      <div>
        <h1>{formattedPrice} сум</h1>
      </div>
      <div className="mt-[10px]">
        <h1 className="text-[0.75rem] text-gray-500">Доступно в {laptop.colors.length} цветах</h1>
      </div>
    </div>
  </>
}
export default Card

