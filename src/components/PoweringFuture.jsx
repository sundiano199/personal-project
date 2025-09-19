import React from "react";

const PoweringFuture = () => {
  return (
    <div>
      <div className="text-center bg-black pb-10">
        <div className="pb-4">
          <h2 className="text-white adamina-regular text-4xl px-[373px] leading-snug">
            Powering the future with quantum automation
          </h2>
        </div>
        <div>
          <p className="text-[var(--faded-white)] manrope-regular text-sm px-[440px] leading-snug">
            We innovate at the forefront of technology, crafting solutions that
            shape the future.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 bg-black px-[100px] ">
        <div className="p-[20px]  border-[1px]  border-gray-600 rounded-tl-2xl rounded-bl-2xl">
          <img src="/files/QA1.png" alt="" className="w-full" />
          <h2 className="text-white text-xl adamina-regular py-2">
            Space & Saterlite Tech
          </h2>
          <p className="text-sm text-[var(--faded-white)] manrope-regular">
            Connecting earth through advanced space tech
          </p>
        </div>
        <div className="p-[20px] border-[1px]  border-gray-600">
          <img src="/files/QA2.png" alt="" className="w-full" />
          <h2 className="text-white text-lg adamina-regular py-2">
            Quantum Processing
          </h2>
          <p className="text-sm text-[var(--faded-white)] manrope-regular">
            Next-gen speed through quantum breakthroughs
          </p>
        </div>
        <div className="p-[20px] border-[1px]  border-gray-600 rounded-tr-2xl rounded-br-2xl">
          <img src="/files/QA3.png" alt="" className="w-full" />
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
