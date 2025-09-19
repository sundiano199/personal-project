import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="grid grid-cols-4 bg-black manrope-regular text-[var(--faded-white)] px-[100px]">
        <div className="border-[1px]  border-gray-600 rounded-xl">
          <div className="  gap-[7px] py-[17px] px-[22px]">
            <img
              src="/files/file.png"
              alt=""
              className="w-[28px] h-[28px] flex justify-center items-center"
            />
            <div>
              <h1 className="text-white ">Liz.com</h1>
            </div>
          </div>
          <p>
            Our unparalleled voyages transform the dream of space travel into a
            tranquil reality, inviting you to discover the universe with peace
            and wonder.
          </p>
          <p>Location</p>
          <p>35, Austin bridge, Lagos, Nigeria.</p>
        </div>
        <div className="border-[1px]  border-gray-600 rounded-xl">
          <p>Home</p>
          <p>Project</p>
          <p>Blogs</p>
          <p>About</p>
        </div>
        <div className="border-[1px]  border-gray-600 rounded-xl">
          <p>Terms</p>
          <p>Privacy Notice</p>
          <p>Legal Policies</p>
          <p>Partnerships</p>
        </div>
        {/* icons here */}
        <div className="border-[1px]  border-gray-600 rounded-xl"></div>
      </div>
      <div>
        <p>Copyright Quickrooms 2025</p>
      </div>
    </div>
  );
};

export default Footer;
