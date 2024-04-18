import Footer from "../../../Modals/Footer"
import Forms from "../../../Modals/Forms"
import HeroSections from "../../../Modals/HeroSections"
import Service from "../../../Modals/Service"
import About from "../AboutPage/About"

const HomeDetails = () => {
  return (
    <div className="flex flex-col gap-16 md:mx-20 mx-2 overflow-x-hidden mt-24">
      <HeroSections/>
      <About/>
      <Service/>
      <Forms/>
      <Footer/>
    </div>
  )
}

export default HomeDetails
