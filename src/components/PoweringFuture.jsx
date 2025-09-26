import React from "react";
import qa1 from "../assets/files/QA1.png";
import qa2 from "../assets/files/QA2.png";
import qa3 from "../assets/files/QA3.png";
const PoweringFuture = () => {
  return (
    <div className="bg-black">
      <div className="text-center bg-black pb-10">
        <div className="pb-4">
          <h2 className="text-white adamina-regular text-xl pt-10 md:pt-0 md:text-4xl px-4 md:px-[373px] leading-snug">
            Powering the future with quantum automation
          </h2>
        </div>
        <div>
          <p className="text-[var(--faded-white)] manrope-regular text-sm px-4 md:px-[440px] leading-snug">
            We innovate at the forefront of technology, crafting solutions that
            shape the future.
          </p>
        </div>
      </div>

      <div className="md:grid grid-cols-3 bg-black px-4 md:px-[100px] mx-4 md:mx-0 md:border-0 border-[1px] border-gray-600 rounded-2xl ">
        <div className="p-2 py-3 md:p-[20px]  md:border-[1px]  border-gray-600 rounded-tl-2xl rounded-bl-2xl ">
          <img src={qa1} alt="" className="w-full" />
          <h2 className="text-white text-xl adamina-regular py-2">
            Space & Saterlite Tech
          </h2>
          <p className="text-sm text-[var(--faded-white)] manrope-regular">
            Connecting earth through advanced space tech
          </p>
        </div>
        
        <div className="p-2 md:p-[20px] md:border-[1px]  border-gray-600">
          <img src={qa2} alt="" className="w-full" />
          <h2 className="text-white text-lg adamina-regular py-2">
            Quantum Processing
          </h2>
          <p className="text-sm text-[var(--faded-white)] manrope-regular">
            Next-gen speed through quantum breakthroughs
          </p>
        </div>
        <div className="p-2 md:p-[20px] md:border-[1px]  border-gray-600 rounded-tr-2xl rounded-br-2xl">
          <img src={qa3} alt="" className="w-full" />
          <h2 className="text-white text-lg adamina-regular py-2">
            Biotech Integration
          </h2>
          <p className="text-sm text-[var(--faded-white)] manrope-regular">
            Where biology meets intelligent technology
          </p>
        </div>
      </div>
    </div>
  );
};

export default PoweringFuture;
