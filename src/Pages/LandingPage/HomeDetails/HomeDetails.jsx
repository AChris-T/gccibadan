import Footer from "../../../Modals/Footer"
import Forms from "../../../Modals/Forms"
import HeroSections from "../../../Modals/HeroSections"
import Service from "../../../Modals/Service"
import About from "../AboutPage/About"

const HomeDetails = () => {
  return (
  <div className="overflow-hidden  ">
      <HeroSections/>
    <div className="flex flex-col mt-24 gap-16 overflow-x-hidden md:mx-8 lg:mx-20 mb-20">
      <About/>
      <Service/>
      <Forms/>
    </div>
      <Footer/>
  </div>
  )
}

export default HomeDetails
