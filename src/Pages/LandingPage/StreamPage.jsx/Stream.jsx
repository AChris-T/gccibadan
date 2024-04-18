import { useEffect } from "react"
import mixlr from "../../../assets/Images/mixlr-1.png"
import youtube from "../../../assets/Images/youtube.png"
const Stream = () => {
  useEffect(()=>{
    window.scrollTo({
      top:0,
      behavior:"smooth"
    })
  })
  return (
    <div className="flex flex-col gap-16 md:mx-20 mx-2 overflow-x-hidden mt-24">
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

        </div>

    </div>
  )
}

export default Stream
