import access from '../../../assets/Images/access.png'
import copy from '../../../assets/Images/copy.png'
const Give = () => {
  return (
    <div className='overflow-x-hidden'>
    <div className="flex flex-col gap-16 md:mx-20 mx-2  mt-24">
        <h3 className="flex  justify-center items-center mt-10 font-semibold text-[40px] text-[#222222]">GIVE</h3>
        <div>
            <h3 className="md:w-[435px] h-[90px] bg-[#222222] text-[white] font-semibold text-[32px] pl-5 flex  items-center">Local Payments</h3>
            <div className="flex justify-between px-4 md:flex-row flex-col items-center">
                <img src={access} alt='access bank'/>
                <div className='flex flex-col justify-center gap-4'>
                <div className='flex justify-between items-center  '>
                <img src={copy} alt='copy'/>
                <div>
                <h3 className='font-semibold text-[40px]'>1566798666</h3>
                </div>

                </div>
                <div>
                    <h3 className='font-semibold text-[32px] text-[#5a5a5a] flex text-center'>GLORY REALM COMMUNITY MINISTRY</h3>
                </div>

                </div>

            </div>
        </div>
        </div>
        <div className='flex flex-col'>
            <h3 className=" md:mx-20 md:w-[435px] md:h-[90px] h-[92px] bg-[#222222] text-[white] font-semibold text-[32px] pl-5 flex flex-wrap mt-10 text-center  items-center ">Interantional Payments</h3>
            <div className='flex flex-col bg-[#F2F2F2] md:px-20 mt-10 '>
            <div className=" flex mt-6 justify-between md:flex-row flex-col items-center px-4">
                <img src={access} alt='access bank'/>
                <div className='flex flex-col justify-center gap-4'>
                <h3 className=' justify-end flex text-[#5A5A5A] font-semibold text-[32px]'>DOLLAR ACCOUNT</h3>
                <div className='flex justify-between items-center  '>
                <img src={copy} alt='copy'/>
                <div>
                <h3 className='font-semibold text-[40px]'>1836470005</h3>
                </div>

                </div>
                <div>
                    <h3 className='font-semibold text-[32px] text-[#5a5a5a] flex text-center'>GLORY REALM COMMUNITY MINISTRY</h3>
                </div>

                </div>
            </div>
                <div className="md:w-full  px-20  h-[1px] rounded-sm border-[1px] border-[#9D9D9D] mt-16 "></div>
                <div className=" flex    mt-6 justify-between md:flex-row-reverse flex-col items-center">
                <img src={access} alt='access bank'/>
                <div className='flex px-2 flex-col justify-center gap-4 mb-10'>
                <h3 className='flex text-[#5A5A5A] font-semibold text-[32px]'>POUNDS ACCOUNT</h3>
                <div className='flex flex-row-reverse justify-between items-center  '>
                <img src={copy} alt='copy'/>
                <div>
                <h3 className='font-semibold text-[40px]'>0369259253</h3>
                </div>

                </div>
                <div>
                    <h3 className='font-semibold text-[32px] text-[#5a5a5a] flex text-center'>GLORY REALM COMMUNITY MINISTRY</h3>
                </div>

                </div>
            </div>
            </div>
            <div className='bg-white md:mx-20 mt-10'>
            <h3 className="md:w-[435px] h-[90px] bg-[#222222] text-[white] font-semibold text-[32px] pl-5 flex  items-center">Project Account</h3>
            <div className="flex justify-between px-4 md:flex-row flex-col items-center">
                <img src={access} alt='access bank'/>
                <div className='flex flex-col justify-center gap-4 md:mt-20'>
                <div className='flex justify-between items-center  '>
                <img src={copy} alt='copy'/>
                <div>
                <h3 className='font-semibold text-[40px]'>1845902081</h3>
                </div>

                </div>
                <div>
                    <h3 className='md:w-[600px] font-semibold text-[32px] text-[#5a5a5a] flex text-center'>GLORY REALM COMMUNITY MINISTRY IBADAN BRANCH</h3>
                </div>

                </div>

            </div>
                </div>
        </div>
      
    </div>
  )
}

export default Give
