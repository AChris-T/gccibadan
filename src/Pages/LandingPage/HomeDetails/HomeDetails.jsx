import Footer from "../../../Modals/Footer"
import Forms from "../../../Modals/Forms"
import HeroSections from "../../../Modals/HeroSections"
import Service from "../../../Modals/Service"
import About from "../AboutPage/About"

const HomeDetails = () => {
  return (
    <div className="flex flex-col gap-16 mt-24 overflow-x-hidden md:mx-20">
      <HeroSections/>
      <About/>
      <Service/>
      <Forms/>
      <Footer/>
    </div>
  )
}

export default HomeDetails
