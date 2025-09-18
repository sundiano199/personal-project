import React from 'react'
import { MdArrowOutward } from "react-icons/md";


const Hero = () => {
  return (
    <div className="flex bg-black">
      <div>
        <div className="flex">
          <div>
            <img src="/files/Frame1.png" alt="" />
          </div>
          <div>
            <p className="text-white">Join over 34K happy clients</p>
          </div>
        </div>
        <div>
          <h1>Beyound Space</h1>
          <h1>Beyound Limit</h1>
        </div>
        <div>
          <p>
            We innovate at the forefront of technology, crafting solutions that
            shape the future.
          </p>
        </div>
        <div>
          <button className="flex">
            <p>Get Started</p>
            <MdArrowOutward />
          </button>
        </div>
      </div>
      <div>
        <img src="/files/heropicture.png" alt="" />
      </div>
    </div>
  );
}

export default Hero