import SubHeader from "@/components/SubHeader"
import Header from "@/components/Header"
import "@/App.css"
// import { sliderMenu } from "@/values/sliderMenu"
// import Carousel from "@/components/Carousel"
import Card from "@/components/Card"
import laptops from "@/values/laptops"

const App = () => {

  return (
    <div className="font-roboto">
      <SubHeader />
      <Header />
      {/*      
      <div className="h-[750px] justify-center items-center bg-black">
        <Carousel slides={sliderMenu} />
      </div>
      */}
      <div className="w-full lg:max-w-[1380px] mx-auto px-5 py-4 flex gap-x-[50px]">
        <div className="hidden lg:block min-w-[240px]">Girdibala</div>
        <div className="flex flex-wrap">
          {laptops.map(laptop => (
            <Card key={laptop.id} laptop={laptop} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App;
