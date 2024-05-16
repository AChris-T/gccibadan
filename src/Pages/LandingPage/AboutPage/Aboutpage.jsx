import { useEffect } from "react"
//import aboutchurch from "../../../assets/Images/aboutChurch.mp4"
//import papa from "../../../assets/Images/user.png"
//import about from "../../../assets/Images/About.jpg"
import vision from "../../../assets/Images/vision.jpg"
import mission from "../../../assets/Images/mission.jpg"
import pzak from "../../../assets/Images/pzak.jpg"
import pope from "../../../assets/Images/pope.jpg"
import mama from "../../../assets/Images/mama.jpg"
import Footer from "../../../Modals/Footer"


const Aboutpage = () => {
  /* useEffect(()=>{
    window.scrollTo({
      top:0,
      behavior:"smooth"
    })
  }) */
  return (
    <div className="flex flex-col w-full gap-16 overflow-x-hidden">

        <div className="md:h-[450px] bg-cover h-[300px]   text-[white] flex  justify-center flex-col items-center  " style={{backgroundImage:"url(https://dq5pwpg1q8ru0.cloudfront.net/2022/10/27/14/41/13/4aa71d56-c474-4b0a-abff-b0fb7c13337f/RisenWebsiteBanners.jpg)", width:"100%",backgroundRepeat:"no-repeat"}}>
        <h3 className="flex justify-center items-center  font-semibold md:text-[40px] text-[20px]  ">About Us</h3>
        <div className="md:w-[100px] w-[50px]  flex h-[2px] bg-white mt-3"></div>
        <h6 className="mt-3 font-normal md:mt-6 md:font-medium ">Vision + Mission</h6>
      </div>
      <div className="flex flex-col justify-center items-center px-[30px] gap-10 md:gap-0">
          <div className="flex flex-col-reverse items-center justify-center gap-5 md:flex-row">
              <div>
                <img src={vision} alt="" className="rounded md:w-[500px] md:h-[300px]"/>
              </div>
              <div className="md:w-[458px]">
                <p className="text-[#ff6347] mb-2">Vision</p>
              <h5 className=""> Vivamus vulputate elit consequat tincidunt maximus. 
                  Vivamus urna erat, egestas nec interdum ut, maximus sed nisi.
                  Donec ac vehicula purus. Fusce sit amet volutpat dolor,
                  aliquam euismod justo. Sed euismod vitae neque vitae interdum.
                  Praesent eget risus pulvinar turpis malesuada 
                  vestibulum ac et dolor. Praesent quis ornare augue.
                </h5>
              </div>
          </div>
          <div className="flex flex-col-reverse items-center justify-center gap-5 md:flex-row-reverse md:-mt-5">
              <div>
                <img src={mission} alt="" className="rounded w-[500px] md:w-[700px] lg:w-[500px] md:h-[300px]"/>
              </div>
              <div className="md:w-[500px]">
                <p className="text-[#ff6347] mb-2 lg:px-5">Mission</p>
              <h5 className="lg:w-[500px] md:w-[357px] lg:px-5"> Vivamus vulputate elit consequat tincidunt maximus. 
                  Vivamus urna erat, egestas nec interdum ut, maximus sed nisi.
                  Donec ac vehicula purus. Fusce sit amet volutpat dolor,
                  aliquam euismod justo. Sed euismod vitae neque vitae interdum.
                  Praesent eget risus pulvinar turpis malesuada 
                  vestibulum ac et dolor. Praesent quis ornare augue.
                </h5>
              </div>
            </div>      
          </div>
          <div>  
          <div className="md:h-[250px] h-[300px]   text-[white] flex  justify-center flex-col items-center  " style={{backgroundImage:"url(https://dq5pwpg1q8ru0.cloudfront.net/2022/06/07/10/09/15/61022735-2330-4dd9-9eae-44481f5702df/RisenWebsiteBanners%20copy%2014.jpg)", width:"100%",backgroundRepeat:"no-repeat"}}>
            <h3 className="flex justify-center items-center  font-semibold md:text-[40px] text-[20px]  ">Leadership</h3>
          </div>
            <p className="text-[#ff6347] text-center mt-10 ">Our Leaders</p>
            <div className="flex flex-col items-center justify-center gap-16 mt-10 md:flex-row">
              <div className="flex flex-col">
                <img src={pzak} alt="pzak" className="w-[250px] h-[250px] rounded-full "/>
                <h5 className="mt-3 font-semibold text-center">Pastor Kunle Zakariyah</h5>
                <p className="text-center">Lead Pastor,Gccc</p>
              </div>
              <div className="flex flex-col">
                <img src={pope} alt="pzak" className="w-[250px] h-[250px] rounded-full "/>
                <h5 className="font-semibold text-center">Pastor Opeyemi Peter</h5>
                <p className="text-center">Lead Pastor,Gccc Ibadan</p>
              </div>
              <div className="flex flex-col">
                <img src={mama} alt="pzak" className="w-[250px] h-[250px] rounded-full "/>
                 <h5 className="font-semibold text-center">Pastor Opeyemi Faith</h5>
                <p className="text-center">Pastor,Gccc Ibadan</p>
              </div>
            </div>
          </div>
       {/*  <p className="flex text-center text-[20px] font-normal leading-8">GCCC Ibadan is Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempor tempus condimentum. 
        Vivamus vulputate elit consequat tincidunt maximus. 
        Vivamus urna erat, egestas nec interdum ut, maximus sed nisi.
        Donec ac vehicula purus. Fusce sit amet volutpat dolor,
        aliquam euismod justo. Sed euismod vitae neque vitae interdum.
        Praesent eget risus pulvinar turpis malesuada 
        vestibulum ac et dolor. Praesent quis ornare augue.
        </p>
        <video autoPlay loop  muted className="w-[866px] h-[478px] ">
            <source src={aboutchurch} type="video/mp4"/>
            <source src="movie.ogg" type="video/ogg"/>
            Your browser does not support the video tag.
        </video>
        <p className="flex text-center text-[20px] font-normal leading-8">GCCC Ibadan is Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempor tempus condimentum. 
        Vivamus vulputate elit consequat tincidunt maximus. 
        Vivamus urna erat, egestas nec interdum ut, maximus sed nisi.
        Donec ac vehicula purus. Fusce sit amet volutpat dolor,
        aliquam euismod justo. Sed euismod vitae neque vitae interdum.
        Praesent eget risus pulvinar turpis malesuada 
        vestibulum ac et dolor. Praesent quis ornare augue.
        </p>
        <div>pictures</div>
        <h3 className="flex justify-center items-center mt-10 font-semibold text-[40px] text-[#222222] text-center">VISION AND MISSION</h3>
        <p className="flex text-center text-[20px] font-normal leading-8">GCCC Ibadan is Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempor tempus condimentum. 
        Vivamus vulputate elit consequat tincidunt maximus. 
        Vivamus urna erat, egestas nec interdum ut, maximus sed nisi.
        Donec ac vehicula purus. Fusce sit amet volutpat dolor,
        aliquam euismod justo. Sed euismod vitae neque vitae interdum.
        Praesent eget risus pulvinar turpis malesuada 
        vestibulum ac et dolor. Praesent quis ornare augue.
        </p>
        <div>
        <h3 className="flex justify-center items-center mt-10 font-semibold text-[40px] text-[#222222]">OUR LEADERS</h3>
            <div className="flex flex-col justify-between gap-10 mt-10 md:flex-row md:gap-0">
            <div>
            <img src={papa} alt='papa Image' width={'464px'} height={'464px'}/>
            <h3 className="font-semibold text-[20px] text-[#222222] flex lg:justify-start justify-center mt-2">Pastor Opeyemi Peter</h3>
            <p className="text-[16px] font-normal text-[#616060] flex lg:justify-start justify-center ">Lead Pastor,Gccc Ibadan</p>
            </div>
            <div >
            <img src={papa} alt='papa Image' width={'464px'} height={'464px'} />
            <h3 className="font-semibold text-[20px] text-[#222222] flex lg:justify-start justify-center mt-2">Pastor Faith Peter</h3>
            <p className="text-[16px] font-normal text-[#616060] flex lg:justify-start justify-center ">Pastor,Gccc Ibadan</p>
            </div>

            </div>
        </div>
        <div>
        <h3 className="flex justify-center items-center mt-10 font-semibold text-[40px] text-[#222222]">LOCATE US</h3>
        <p className="flex text-center  justify-center text-[24px] text-[#555555] font-medium leading-8">13, Oluwole Akintola way adacent Raian pharmacy, Iyana Bodija, Express, Ibadan.</p>
            <div className="flex justify-between mt-10 mb-10 lg:mx-56">
            <iframe width="820" height="560" 
            id="gmap_canvas" 
            src="https://maps.google.com/maps?q=13%2C+Oluwole+Akintola+way+adacent+Raian+pharmacy%2C+Iyana+Bodija%2Cexpress%2C+Ibadan&t=k&z=13&ie=UTF8&iwloc=&output=embed">
            </iframe>
                  

            </div>
        </div> */}
      <Footer/>
    </div>
  )
}

export default Aboutpage
