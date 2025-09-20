import React from 'react'



const Navbar = () => {
  return (
    <div className="bg-black py-10 flex  h-[106px]  pt-[20px] pb-[21px] mx-auto px-4 md:px-[100px]  justify-between border-gray-200 border-b max-w-full fixed top-0 w-full ">
      <div className=' gap-[33px] flex '>
        <div className="flex items-center justify-center border-[1px]  border-gray-600 rounded-xl gap-[7px] py-0 md:py-[17px] px-4 md:px-[22px]">
          <img src="/files/file.png" alt="" className="w-[28px] h-[28px] flex justify-center items-center" />
          <div>
            <h1 className="text-white ">Liz.com</h1>
          </div>
        </div>
        <div>
          <ul className="md:flex items-center justify-center text-white gap-[40px]  border-[1px] py-[18px] px-[22px] border-gray-600 rounded-xl hidden ">
            <li className="text">Home</li>
            <li>Projects</li>
            <li>Resources</li>
            <li>Blogs</li>
            <li>About</li>
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <button className="bg-white text-black rounded-3xl px-0 md:px-[29px] py-2 md:py-[10px] w-20 md:w-[126px] h-[50px] text-[18px]  flex items-center justify-center ">
          Sign up
        </button>
      </div>
    </div>
  );
}

export default Navbar