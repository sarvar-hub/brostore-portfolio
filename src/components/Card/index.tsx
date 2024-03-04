import { ILaptop } from "@/types/ILaptop"
import formatPrice from "@/format/price"
import { useEffect, useRef, useState } from "react";
import "./style.css"

function Card({ laptop }: { laptop: ILaptop }) {
  const [isHovered, setIsHovered] = useState(false);
  const formattedPrice = formatPrice(laptop.price);
  const divRef = useRef<HTMLDivElement>(null);

  const scrollTo = (targetScrollTop: number, duration: number) => {
    const element = divRef.current;
    if (!element) return;

    const start = element.scrollTop;
    const startTime = performance.now();

    const animateScroll = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const newScrollTop = start + (targetScrollTop - start) * progress;
      element.scrollTop = newScrollTop;

      if (progress < 1) {
        window.requestAnimationFrame(animateScroll);
      }
    };

    window.requestAnimationFrame(animateScroll);
  };

  useEffect(() => {
    if (isHovered) {
      scrollTo(divRef.current?.scrollHeight || 0, 300);
    } else {
      scrollTo(0, 300);
    }
  }, [isHovered]);
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
      <div ref={divRef} className="mt-[10px] max-h-[18px] scrollable-div">
        <h1 className="text-[0.75rem] text-gray-500">Доступно в {laptop.colors.length} цветах</h1>
        <div className="flex items-center justify-center gap-1 mt-1">
          {laptop.colors.map(item => (
            <div key={item.id} className="o-color cursor-pointer flex items-center justify-center" >
              <div className="inside-circle" style={{ backgroundColor: item.color }}></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </>
}
export default Card;

