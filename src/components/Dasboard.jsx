import React from 'react'
import background from "../assests/background.png"
import Image from 'next/image'
import heroimage from "../assests/HeroImage.png"

import Section from './Section'
function dasboard() {
  return (
    <div className=' relative w-full '>
      <div className=' absolute -z-20 w-full top-[-100px] h-[1024px]  '>
        <Image src={background} alt='background' className='w-full  ' />
      </div>
      <div className='w-[630px] h-[630px] absolute top-[126px] left-[850px]  -z-20' >
         <Image src={heroimage} alt='Mobile' className=' absolute left-[105px] shadow-[rgba(0,0,0,0.2)]' width={460} height={630} />
      </div>
      <div className='w-[474px] h-[360px] absolute top-[232px] left-[180px] gap-[50px]  -z-20' >
         <div className='w-[474px] h-[256px] gap-[28px]  flex flex-col'>
             <div className='w-[474px] h-[162px] gap-[40px] flex flex-col'>
                <div className='w-[474px] h-[96px] gap-[40px] font-[Urbanist] font-[700] leading-[48px] text-black text-4xl tracking-[.07em]'>
                  Welcome To India’s First <span className=' bg-gradient-to-r from-[rgba(74,80,142,1)] to-[rgba(103,74,142,1)] inline-block text-transparent bg-clip-text'>Creator’s Marketplace</span> 
                </div>
                <div className='w-[368px] h-[26px]  font-[Urbanist] font-[700] text-xl tracking-wide leading-[26.4px] text-black '>
                  Create your first E-Store @ Zero Cost
                </div>
             </div>
             <div className='w-[474px] h-[66px]  font-[Urbanist]  font-[530] leading-[21.6px] text-black text-lg tracking-wide'>Empower your creativity with Createnary. Showcase, sell, and connect with a global audience effortlessly, turn your products into profits.</div>
             <div className=' w-[144px] h-[54px] rounded-[18px] bg-[rgba(74,80,142,1)] pt-[16px] pr-[24px] pb-[16px] pl-[24px]' >
                <div className='w-[96px] h-[22px]  font-[Urbanist]  font-[600] leading-[21.6px] text-white'>Get Started</div>
             </div>
         </div>
      </div>
      <Section/>
    </div>
  )
}

export default dasboard