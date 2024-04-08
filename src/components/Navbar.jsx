import React from 'react'
import frame from "../assests/Frame.png"
import Image from "next/image"
import { IoIosInformationCircleOutline } from "react-icons/io";
import vector from "../assests/Vector.png"
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { FiShoppingCart } from "react-icons/fi";
function Navbar() {
  return (
    <div className=' fixed '>
        <div className=" w-[1024px] h-[90px] absolute z-10  top-[25px] left-[208px] rounded-[35px]  gap-[50px] bg-[rgba(214,214,214,0.5)]  flex justify-center items-center" >
           
              <div className=' w-[434px] h-[50px] rounded-[25px]  '>
                <div className=' w-[290px] h-[50px] absolute top-[19px] left-[189px] rounded-[25px] bg-[#F8F9FB] '>
                   <div className='  flex'>
                     <Image src={frame} alt="frame" className='  w-[20px] h-[20px]  absolute top-[15px] left-[16px] '/>
                   </div>
                   <div className=' w-[116px] text-lg h-[19px] absolute top-[16px] left-[46px] font-[Urbanist] font-[500]  leading-[19.2px]  '> <span className=' text-slate-950'> Search Creators</span></div>
                </div>
                <div className=' w-[114px]  h-[26px] text-2xl absolute top-[31px] left-[45.25px] font-[Urbanist] font-[700]  leading-[26.4px] text-black  '>Createnary</div>
              </div>
              <div className='w-[449.5px] h-[42px] rounded-[15px]  '>
                <div className='w-[123px] h-[42px] absolute top-[24px] left-[855.75px] rounded-[15px] border border-black flex justify-center items-center gap-[10px]' style={{padding:"10px,25px,10px,25px"}}>
                  
                    <div className=' w-[43px]  h-[22px] text-xl  font-[Urbanist] font-[520]  leading-[21.6px] text-center text-black '>Login</div>
                    <div><Image src={vector} alt='vector' className=' w-[13.75px] h-[7.5px] '/></div>
                  
                </div>
                <div className='w-[300px] h-[22px] absolute  top-[34px] left-[529px] gap-[30px] flex'>
                     <div className=' w-[66px] h-[22px] '>
                        <div className='w-[36px]  h-[22px]  absolute  left-[22px] font-[Urbanist] font-[500]  leading-[21.6px] text-[rgba(17,21,29,1)] text-center'>Cart</div>
                        <div className='w-[20px] h-[20px] absolute top-[1.8px] '><FiShoppingCart /></div>
                     </div>
                     <div className=' w-[80px] h-[22px] '>
                        <div className='w-[20px] h-[20px] absolute top-[1.88px] left-[96px]'><IoIosInformationCircleOutline /></div>
                        <div className='w-[49px]  h-[22px]  absolute  left-[115px] font-[Urbanist] font-[500]  leading-[21.6px] text-[rgba(17,21,29,1)] text-center'>About</div>
                     </div>
                     <div className='w-[94px] h-[22px]'>
                        <div className='w-[20px] h-[20px] absolute left-[206px] top-[1.88px]'><TfiHeadphoneAlt /></div>
                        <div className='w-[64px]  h-[22px]  absolute  left-[236px] font-[Urbanist] font-[500]  leading-[21.6px] text-[rgba(17,21,29,1)] text-center'>Contact</div>
                     </div>
                </div>
              </div>
           
        </div>
    </div>
  )
}

export default Navbar