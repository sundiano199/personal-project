import React from 'react'
import { MdArrowOutward } from "react-icons/md";

const Newsletter = () => {
  return (
    <div className="bg-black px-[357px] pt-[100px]">
      <div className="text-center ">
        <h1 className="adamina-regular  text-white text-3xl">
          Stay in the Loop, Beyond Earth
        </h1>
        <p className="manrope-regular text-sm text-[var(--faded-white)] py-5">
          Join our cosmic circle — get the latest mission updates,
          behind-the-scenes insights, and discoveries sent straight to your
          inbox. No spam, just pure space magic.
        </p>
      </div>
      <div className="relative text-center ">
        <div className="px-[85px]">
          <input
            type="email"
            placeholder="Enter mail"
            className="border-[1px]  border-gray-600 rounded-3xl py-[15px]  px-[16px] manrope-regular faded-color w-full"
          />
        </div>

        <div className='absolute top-2 right-24'>
          <button className="flex justify-center items-center bg-white rounded-[20px] py-[8px] px-[15px] gap-[10px]">
            <p className="text-black text-sm manrope-regular">Get Started</p>
            <div>
              <MdArrowOutward className="bg-black text-white w-full rounded-[14px] text-2xl p-[4px] border-white border-[1px] shadow-[0_2px_10px_#0F0F0F]" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Newsletter