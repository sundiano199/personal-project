import React from "react";
import { astronuts } from "./data";
import { useState } from "react";

const Team = () => {
  return (
    <div className="bg-black px-4 md:px-[100px] text-center pt-3">
      <div className="md:px-[271px]">
        <h1 className="text-white adamina-regular text-2xl">
          Our Incredible team
        </h1>
        <p className="manrope-regular text-sm text-[var(--faded-white)] px-[20px] leading-snug pt-2">
          Meet the people powering innovation, collaboration, and extraordinary
          results every day.
        </p>
      </div>
      <div className="md:grid grid-cols-4 gap-3 pt-10 mx-auto">
        {astronuts.map((astronut) => {
          return (
            <div
              key={astronut.id}
              className="border-[1.5px]  border-gray-600 rounded-3xl py-[20px] px-[20px]"
            >
              <img
                src={astronut.img}
                alt=""
                className=" w-full  "
              />
              <h1 className="pt-[20px] text-white adamina-regular">
                {astronut.name}
              </h1>
              <h1 className="pt-[3px] text-[var(--faded-white)] text-sm manrope-regular">
                {astronut.roles}
              </h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Team;
