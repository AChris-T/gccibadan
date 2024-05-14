import { useEffect } from "react"
import aboutchurch from "../../../assets/Images/aboutChurch.mp4"
import papa from "../../../assets/Images/user.png"
const Aboutpage = () => {
  useEffect(()=>{
    window.scrollTo({
      top:0,
      behavior:"smooth"
    })
  })
  return (
    <div className="flex flex-col gap-16 mx-2 mt-24 overflow-x-hidden md:mx-[200px]">
        <h3 className="flex justify-center items-center mt-10 font-semibold text-[40px] text-[#222222]">OUR STORY</h3>
        <p className="flex text-center text-[20px] font-normal leading-8">GCCC Ibadan is Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempor tempus condimentum. 
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
        </div>

    </div>
  )
}

export default Aboutpage
