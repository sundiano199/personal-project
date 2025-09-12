import React from 'react'


const Navbar = () => {
  return (
    <div className="bg-black py-10 flex pt-[20px] pb-[21px] mx-auto px-[100px] justify-between">
      <div className="flex ">
        <img src="/files/file.png" alt="" className="" />
        <div>
          <h1 className="text-white">Liz.com</h1>
        </div>
      </div>
      <div>
        <ul className="flex text-white gap-[40px] pt-[] ml-[-400px]">
          <li className="text">Home</li>
          <li>Projects</li>
          <li>Resources</li>
          <li>Blogs</li>
          <li>About</li>
        </ul>
      </div>
      <div className="flex justify-end">
        <h2 className="bg-white text-black rounded-md ">Sign up</h2>
      </div>
    </div>
  );
}

export default Navbar