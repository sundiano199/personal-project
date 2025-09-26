import React from 'react'
import map from "../assets/files/allcountries.png";

const GlobalImpact = () => {
  return (
    <div className=" bg-black px-4 md:px-[188px] pt-[85px]">
      <div>
        <h1 className="text-white text-4xl text-center adamina-regular ">
          Creating global impact
        </h1>
      </div >
      <div>
        <img src={map} alt="" className="bg-black w-full" />
      </div>
    </div>
  );
}

export default GlobalImpact