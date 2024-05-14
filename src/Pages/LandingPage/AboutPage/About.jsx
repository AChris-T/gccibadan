import { NavLink } from "react-router-dom"
//import aboutchurch from '../../../assets/Images/aboutChurch.mp4'
import newImage from '../../../assets/Images/new.jpg'
import children from '../../../assets/Images/children.jpg'
import lifegroup from '../../../assets/Images/lifegroups.jpg'
import ministry from '../../../assets/Images/hands.jpg'
import bible from '../../../assets/Images/bible.jpg'

const About = () => {
  return (
    <div className="flex flex-col gap-10 ">
      <h6 style={{fontFamily:"Lobster Two, sans-serif"}}  className="text-[#ff6347] text-center font-bold">What we do</h6>
      <h3 className="w-full flex justify-center text-[#171730] -mt-10 font-semibold text-[32px] leading-10 text-center">Welcome to Our Church</h3>
      <div className="w-full flex justify-center gap-4">
      <div className="md:w-3/4 w-full flex md:flex-row flex-col gap-5">
        <div className="flex flex-col relative  gap-2">
          <div className=" h-[200px] ">
          <img src={newImage} alt="image" className="h-[200px] object-cover rounded-md"/>
          </div>
        <div className="absolute text-white inset-0  bg-gray-700 opacity-35 w-full h-[200px] rounded-md">
        </div>
        <div className="absolute  flex font-bold justify-center items-center w-full h-[200px]">
        <h3 className="text-[#fff] text-[40px] ">NEW HERE</h3>
        </div>
        <h3 className="font-bold md:px-0 px-4">A Place You Can Call Home</h3>
        <p className="text-[15px] font-light md:px-0 px-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        </div>
        <div className="flex flex-col relative gap-2">
          <div className="h-[200px]">
          <img src={children} alt="image" className="h-[200px] object-cover rounded-md"/>
          </div>
          <div className="absolute text-white inset-0  bg-gray-700 opacity-35 w-full h-[200px] rounded-md">
        </div>
        <div className="absolute  flex font-bold justify-center items-center w-full h-[200px]">
        <h3 className="text-[#fff] text-[40px] ">OUR KIDS</h3>
        </div>        
        <h3 className="font-bold md:px-0 px-4">We Cherish Our Kids</h3>
        <p className="text-[15px] font-light md:px-0 px-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        </div>
        <div className="flex flex-col relative gap-2">
          <div className="h-[200px] ">
          <img src={lifegroup} alt="image" className="h-[200px] w-[280px] object-cover rounded-md"/>
          </div>
          <div className="absolute text-white inset-0  bg-gray-700 opacity-35 w-full h-[200px] rounded-md">
        </div>
        <div className="absolute  flex font-bold justify-center items-center w-full h-[200px]">
        <h3 className="text-[#fff] text-[40px] ">FAMILY</h3>
        </div> 
        <h3 className="font-bold md:px-0 px-4">Gospel Community for Church</h3>
        <p className="text-[15px] font-light md:px-0 px-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>       
        </div>
        </div>
      </div>
      <div className="w-full flex justify-center gap-4 mt-14">
          <div className="md:w-11/12 w-full flex md:flex-row flex-col gap-5">
            <div className="flex md:flex-row flex-col justify-between items-center gap-10">
                <div className="flex-1 w-[900px] ">
                  <img src={ministry} alt="hands" className="h-[400px] w-full object-cover"/>
               </div>
                <div className="flex-1 flex-col flex gap-2 md:mt-52 text-center md:text-start  h-full justify-center">
                    <h6 style={{fontFamily:"Lobster Two, sans-serif"}}  className="text-[#ff6347] font-bold">Join The Ministry</h6>
                    <h2 className="w-full  text-[#171730]  font-semibold text-[32px] leading-10">Our Ministry</h2>
                    <div className="flex-col items-center justify-center md:flex-1" >
                      <p className="flex  text-center md:text-left font-normal text-[16px] leading-2 px-3 md:px-0 md:pr-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lobortis
                        efficitur sem ac aliquet. Aenean venenatis consequat urna. Cras 
                        lobortis lacinia lobortis. Aenean dignissim urna id leo dictum,
                        non lacinia libero pellentesque. Aenean rutrum sem sem,
                        at suscipit mi aliquam a. Sed nulla felis, porttitor
                      </p>
                      <div className="flex md:justify-start justify-center ">
                      <NavLink to='/home/about'
                        className="flex mt-4 rounded-sm justify-center  text-[14px] font-semibold   px-10 py-4 text-[#FEFEFE] bg-[#18181A]">
                        Read More
                      </NavLink>
                      </div>
              
                   </div>
                </div>
            </div>
          </div>
      </div>
      <div className="w-full flex justify-center gap-4 md:mt-14">
          <div className="md:w-11/12 w-full flex md:flex-row flex-col md:gap-5">
            <div className="flex md:flex-row flex-col-reverse justify-between items-center gap-10">
                <div className="flex-1 flex-col flex gap-2 md:mt-52  h-full text-center md:text-start justify-center">
                    <h6 style={{fontFamily:"Lobster Two, sans-serif"}}  className="text-[#ff6347] font-bold">Our Sermons</h6>
                    <h2 className="w-full  text-[#171730]  font-semibold text-[32px] leading-10">Weekly Sermons</h2>
                    <div className="flex-col items-center justify-center md:flex-1" >
                      <p className="flex  text-center md:text-left font-normal text-[16px] leading-2 px-3 md:px-0 md:pr-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lobortis
                        efficitur sem ac aliquet. Aenean venenatis consequat urna. Cras 
                        lobortis lacinia lobortis. Aenean dignissim urna id leo dictum,
                        non lacinia libero pellentesque. Aenean rutrum sem sem,
                        at suscipit mi aliquam a. Sed nulla felis, porttitor
                      </p>
                      <div className="flex md:justify-start justify-center ">
                      <NavLink to='/home/about'
                        className="flex mt-4 rounded-sm justify-center  text-[14px] font-semibold   px-10 py-4 text-[#FEFEFE] bg-[#18181A]">
                        Read More
                      </NavLink>
                      </div>
              
                   </div>
                </div>
                <div className="flex-1 w-[900px] ">
                  <img src={bible} alt="hands" className="h-[400px] w-full object-cover"/>
               </div>
            </div>
          </div>
          </div>
      {/* <div className="flex flex-col items-center gap-4 lg:flex-row md:gap-10 md:px-16 ">
        <video autoPlay muted loop  className="md:w-[493px] ">
            <source src={aboutchurch} type="video/mp4"/>
            <source src="movie.ogg" type="video/ogg"/>
            Your browser does not support the video tag.
        </video>
        <div className="flex-col items-center justify-center md:flex-1" >
          <p className="flex text-center md:text-left font-normal text-[16px] leading-2 px-3 md:px-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lobortis
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
      </div> */}
    </div>
  )
}

export default About
