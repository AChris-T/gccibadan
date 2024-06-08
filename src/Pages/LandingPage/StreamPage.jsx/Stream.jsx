import { useEffect } from "react"
/* import mixlr from "../../../assets/Images/mixlr-1.png"
import youtube from "../../../assets/Images/youtube.png" */
import igc from "../../../assets/Images/igc.jpg"
import clock from "../../../assets/Images/Clock.png"
import location from "../../../assets/Images/location.png"
import Arrow from "../../../assets/Images/arrow.png"
import Footer from "../../../Modals/Footer"

const Stream = () => {
 /*  useEffect(()=>{
    window.scrollTo({
      top:0,
      behavior:"smooth"
    })
  }) */
  return (
   /*  <div className="flex flex-col gap-16 md:mx-20 mx-2 overflow-x-hidden mt-24">
        <h3 className="flex  justify-center items-center mt-10 font-semibold text-[40px] text-[#222222]">LOCATE US</h3>
        <div className="flex md:flex-row flex-col gap-10 md:gap-0 justify-between">
        <div className="md:w-[306px] h-[306px] bg-[#d9d9d9] px-24 py-10">
            <img src={mixlr} alt="mixler" width={'100.05px'} height={'18.89px'}/>
        </div>
        <div className="md:w-[306px] h-[306px] bg-[#d9d9d9] px-24 py-10">
            <img src={youtube} alt="mixler" width={'100.05px'} height={'18.89px'}/>
        </div>
        <div className="md:w-[306px] h-[306px] bg-[#d9d9d9] px-24 py-10">
            <img src={mixlr} alt="mixler" width={'100.05px'} height={'18.89px'}/>
        </div>

 */
        <div className="flex flex-col w-full gap-16 overflow-x-hidden">

        <div className="md:h-[450px] bg-cover h-[300px]   text-[white] flex  justify-center flex-col items-center  " style={{backgroundImage:"url(https://images.unsplash.com/photo-1541346183200-e8e117d945dd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)", width:"100%",backgroundRepeat:"no-repeat"}}>
        <div className=" w-full h-full flex  justify-center flex-col items-center " style={{ background: "rgba(0,0,0,0.5)"}}>
        <h3 className="flex justify-center items-center  font-semibold md:text-[40px] text-[20px] uppercase  ">Take part in our sermon</h3>
        <div className="md:w-[100px] w-[50px]  flex h-[2px] bg-white mt-3"></div>
        </div>
        </div>
        <div className="flex justify-center items-center gap-10 flex-col  w-full ">
          <p style={{fontFamily:"Lobster Two, sans-serif"}} className="text-[#ff6347] mb-2 text-center md:text-start">Upcoming Sermon</p>
          <div className="bg-[#FFD2A4] md:w-[95%] lg:w-[60%] md:h-[446px] flex md:flex-row flex-col-reverse  justify-between">
              <div className="flex items-center flex-col h-full justify-center pl-10 gap-5  md:w-[50%] ">
                <div className="flex  justify-between items-end w-full   ">
                  <div>
                   <p style={{fontFamily:"Lobster Two, sans-serif"}} className="text-[#ff6347] mb-2 text-center md:text-start">Upcoming Event</p>
                  </div>
                  <div className="flex items-center flex-col pr-3">
                   <p  className="  text-center md:text-start text-[25px]">20</p>
                   <p  className=" -mt-2 font-semibold text-center md:text-start">May</p>
                  </div>
                </div>
                <div className="pr-10 ">
                  <h2 className="font-bold">WATCH AND LISTEN TO OUR SERMON</h2>
                  <p className="font-light text-[13px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                  <div className="mt-3 flex  gap-2 items-start">
                    <div>
                    <img src={clock} alt="mixler" width={'17px'} className="mt-1"/>
                    </div>
                    <div>
                      <p className="text-[13px]">Thursday <strong>5pm </strong></p>
                      <p className="text-[13px]">Friday <strong>5pm </strong></p>
                      <p className="text-[13px]">Saturday<strong> 9am & 5pm </strong></p>
                      <p className="text-[13px]">Sunday <strong>7am</strong></p>
                    </div>
                  </div>
                  <div className="mt-3 flex  gap-2 items-start">
                    <div>
                    <img src={location} alt="mixler" width={'17px'} className="mt-1"/>
                    </div>
                    <div>
                      <p className="text-[13px]">NO 13, OLUWOLE AKINTOLA WAY, IYANA BODIJA, EXPRESSWAY, IBADAN</p>    
                    </div>
                  </div>

                  <button className="bg-black text-white px-5 py-3 cursor-pointer rounded-md mt-3 md:mb-0 mb-10">Register</button>
                </div>
              </div>
              <div className="md:w-[380px] h-[1005]">
                <img src={igc} alt="mixler"/>
              </div>
          </div>
        </div>
        <div className="flex justify-end px-10 items-center">
          <a href=""> view all sermon</a>
          <img src={Arrow} alt="mixler" width={'20px'}/>
        </div>
    <Footer/>
    </div>
  )
}

export default Stream
