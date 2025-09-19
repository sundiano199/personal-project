import React from 'react'

const SaterliteLauch = () => {
  return (
    <div className="bg-black grid grid-cols-2 px-[100px] pt-22">
      <div>
        <img src="/files/k2-saterlight.png" alt=""  />
      </div>
      <div className="py-[39px] pl-[72px] manrope-regular">
        <h1 className="text-white text-5xl adamina-regular pr-[125px] leading-snug">
          K2-11 Satellite Launch
        </h1>
        <p className="text-[var(--faded-white)] manrope-regular text-sm py-4 leading-snug">
          Lifting the future: K2-11 has launched — unlocking new frontiers in
          space communication and earth observation.
        </p>
        <div className="text-white grid gap-1">
          <div className="flex items-center gap-2 text-sm">
            <img src="/files/CheckCircle.png" alt="" className="w-4 h-4" />
            <p>Over 100,000 viewers participated live</p>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <img src="/files/CheckCircle.png" alt="" className="w-4 h-4" />
            <p>Led by Liz.co & NASA scientists.</p>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <img src="/files/CheckCircle.png" alt="" className="w-4 h-4" />
            <p>Lunar surface data for joint research on future missions.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SaterliteLauch