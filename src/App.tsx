import SubHeader from "@/components/SubHeader"
import Header from "@/components/Header"
import "@/App.css"
import { sliderMenu } from "@/values/sliderMenu"
import Carousel from "@/components/Carousel"

const App = () => {

  return (
    <div className="font-roboto">
      <SubHeader />
      <Header />
      <div className="h-[750px] justify-center items-center bg-black">
        <Carousel slides={sliderMenu} />
      </div>
    </div>
  )
}

export default App;
