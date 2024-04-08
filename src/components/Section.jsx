import React from 'react'
import Img from '../assests/New.png'
import previous from "../assests/previous.png"
import next from "../assests/next.png"
import Image from 'next/image'
function Section() {
  return (
    <div className=' w-full h-[724px] absolute top-[810px] p-[40px] bg-[#4A508E] -z-20'>
        <div className='w-[1264px] h-[644px] gap-[50px] flex flex-col  mx-auto  '>
            <div className='w-[1264px] h-[540px] flex flex-col gap-[70px] '>
              <div className='w-[518px] h-[85px] flex flex-col  mx-auto justify-between'> 
                 <div className='w-[465px] h-[48px]  font-[Urbanist] font-[700] leading-[48px] text-[#F8F9FB]  text-3xl  tracking-[.07em] text-center'>Your audience wants links</div>
                 <div className='w-[518px] h-[22px] font-[Urbanist] font-[500] leading-[21.6px] text-[#F8F9FB] tracking-[.09em] text-base'>Make it easy for them by linking products to every post and video</div>
              </div>
              <Image src={Img} alt="Payment Sample" width={720} height={405} className=' mx-auto' />
            </div>
            <div className=' w-[139px] h-[54px] rounded-[18px] bg-white pt-[16px] pr-[24px] pb-[16px] pl-[24px] mx-auto' >
                <div className='w-[91px] h-[22px]  font-[Urbanist]  font-[600] leading-[21.6px] text-black cursor-pointer'>Get Started</div>
             </div>
        </div>
        <Image src={previous} alt='previous' width={48} height={48}  className=' absolute top-[50%] left-[6%] cursor-pointer'/>
        <Image src={next} alt='next' width={48} height={48} className=' absolute top-[50%] left-[91%] cursor-pointer'/>
    </div>
  )
}

export default Section