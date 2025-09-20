import React from 'react'
import { MdArrowOutward } from "react-icons/md";



const Hero = () => {
  return (
    <div className="md:grid grid-cols-2 bg-black mx-auto gap-[37px] px-4 md:px-[100px] ">
      <div className="">
        <div className="flex mt-25 md:mt-[139px]  gap-[10px] py-6 md:py-[3px] px-[6px]">
          <div>
            <img src="/files/Frame1.png" alt="" />
          </div>
          <div>
            <p className="text-[var(--faded-white)] text-[15px] manrope-regular">
              Join over 34K happy clients
            </p>
          </div>
        </div>
        <div>
          <h1 className="text-5xl md:text-[65px] text-white  font-[400] leading-snug adamina-regular md:pt-5">
            Beyound Space <br /> Beyound Limit
          </h1>
        </div>
        <div className='mt-[10px]'>
          <p className="text-sm text-[var(--faded-white)] leading-[186%] manrope-regular pr-[187px]">
            We innovate at the forefront of technology, crafting solutions that
            shape the future.
          </p>
        </div>
        <div className="mt-[37px]">
          <button className="flex justify-center items-center bg-white rounded-[20px] py-[10px] px-[19px] gap-[10px] ">
            <p className="text-black text-sm manrope-regular">Get Started</p>
            <div>
              <MdArrowOutward className="bg-black text-white w-full rounded-[14px] text-2xl p-[5px] border-white border-[1px] shadow-[0_2px_10px_#0F0F0F]" />
            </div>
          </button>
        </div>
      </div>
      <div className="pt-3 pb-12 md:mb-[200px]">
        <img src="/files/heroo.svg" alt="" className=" pt-[49px] w-full  " />
      </div>
    </div>
  );
}

//  h-[662px] w-[610px]
export default Hero