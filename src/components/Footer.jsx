import React from "react";

const Footer = () => {
  return (
    <div className="bg-black manrope-regular pt-[130px]">
      <div className="grid grid-cols-[1.8fr_1fr_1fr_1fr]  text-[var(--faded-white)] px-[100px] gap-5 ">
        <div className="border-[1px]  border-gray-800 rounded-xl col-span-1.5">
          <div className=" flex gap-[7px] py-[17px] px-[30px]">
            <img
              src="/files/file.png"
              alt=""
              className="w-[28px] h-[28px] flex justify-center items-center"
            />
            <div>
              <h1 className="text-white ">Liz.com</h1>
            </div>
          </div>
          <p className="px-[30px] text-sm">
            Our unparalleled voyages transform the dream of space travel into a
            tranquil reality, inviting you to discover the universe with peace
            and wonder.
          </p>
          <p className="px-[30px] text-sm pt-[142px]">Location</p>
          <p className="px-[30px] text-sm pb-[29px]">
            35, Austin bridge, Lagos, Nigeria.
          </p>
        </div>
        <div className=" text-center  flex flex-col gap-2 ">
          <p className="border-[1px] border-gray-800 rounded-xl py-7">Home</p>
          <p className="border-[1px] border-gray-800 rounded-xl py-7">
            Project
          </p>
          <p className="border-[1px] border-gray-800 rounded-xl py-7">Blogs</p>
          <p className="border-[1px] border-gray-800 rounded-xl py-7">About</p>
        </div>
        <div className="text-center flex flex-col gap-2 ">
          <p className="border-[1px] border-gray-800 rounded-xl py-7">Terms</p>
          <p className="border-[1px] border-gray-800 rounded-xl py-7">
            Privacy Notice
          </p>
          <p className="border-[1px] border-gray-800 rounded-xl py-7">
            Legal Policies
          </p>
          <p className="border-[1px] border-gray-800 rounded-xl py-7">
            Partnerships
          </p>
        </div>
        {/* icons here */}
        <div className="tex-center flex flex-col gap-2 ">
          <div className="border-[1px] border-gray-800 rounded-xl py-7">
            <img src="/files" alt="" />
          </div>
          <div className="border-[1px] border-gray-800 rounded-xl py-7">
            <img src="/files" alt="" />
          </div>
          <div className="border-[1px] border-gray-800 rounded-xl py-7">
            <img src="/files" alt="" />
          </div>
          <div className="border-[1px] border-gray-800 rounded-xl py-7">
            <img src="/files" alt="" />
          </div>
        </div>
      </div>
      <div className="text-center text-[var(--faded-white)] text-xs">
        <p>Copyright Quickrooms 2025</p>
      </div>
    </div>
  );
};

export default Footer;
