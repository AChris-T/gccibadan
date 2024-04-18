import { NavLink } from "react-router-dom"
import aboutchurch from '../../../assets/Images/aboutChurch.mp4'

const About = () => {
  return (
    <div className="flex flex-col gap-10">
      <h3 className="w-full flex justify-center text-[#222222] font-semibold text-[32px] leading-10">ABOUT</h3>
      <div className="flex flex-col md:flex-row  md:gap-28 gap-4 items-center ">
        <video autoPlay loop controls className="md:w-[493px] h-[478px] bg-[#9c9c9c] ">
            <source src={aboutchurch} type="video/mp4"/>
            <source src="movie.ogg" type="video/ogg"/>
            Your browser does not support the video tag.
        </video>
        <div className="md:flex-1 flex-col justify-center  items-center" >
          <p className="flex text-center md:text-left font-normal text-[20px] leading-2 px-3 md:px-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lobortis
           efficitur sem ac aliquet. Aenean venenatis consequat urna. Cras 
           lobortis lacinia lobortis. Aenean dignissim urna id leo dictum,
            non lacinia libero pellentesque. Aenean rutrum sem sem,
             at suscipit mi aliquam a. Sed nulla felis, porttitor
              sed sodales eu, euismod in nibh. Aliquam eget gravida
               magna. Morbi est ante, commodo eu elit faucibus, facilisis 
               pretium nulla...
          </p>
          <NavLink to='/home/about' className="flex mt-4 rounded-sm justify-center  text-[14px] font-semibold md:mx-[35%] mx-[10px] px-3 py-4 text-[#FEFEFE] bg-[#18181A]">Read More</NavLink>
              
        </div>
      </div>
    </div>
  )
}

export default About
