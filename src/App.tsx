import SubHeader from "@/components/SubHeader"
import Header from "@/components/Header"
import "@/App.css"
import Banner1 from "@/assets/banner1.webp"

const App = () => {

  return (
    <div className="font-roboto">
      <SubHeader />
      <Header />
      <div className="h-[750px] justify-center items-center bg-black">
        <img src={Banner1} alt='banner' className="object-cover h-full" />
      </div>
    </div>
  )
}

export default App
