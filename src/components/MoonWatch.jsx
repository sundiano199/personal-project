import React from 'react'

const MoonWatch = () => {
  return (
    <div className="bg-black px-[100px] grid grid-cols-2 justify-between">
      <div className="py-[39px] pr-[72px] manrope-regular">
        <h1 className="text-white text-5xl adamina-regular pr-[125px] leading-snug">
          Moon watch view with NASA
        </h1>
        <p className="text-[var(--faded-white)] manrope-regular text-sm py-4 leading-snug">
          Under the gaze of the Moon, we partnered with NASA to bring space
          closer than ever — a night of discovery, wonder, and breakthrough
          moments.
        </p>
        <div className="text-white grid gap-1">
          <div className="flex items-center gap-2 text-sm">
            <img src="/files/CheckCircle.png" alt="" className="w-4 h-4" />
            <p>Educational Outreach</p>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <img src="/files/CheckCircle.png" alt="" className="w-4 h-4" />
            <p>Data Collaboration.</p>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <img src="/files/CheckCircle.png" alt="" className="w-4 h-4" />
            <p>Real-Time Public Engagement</p>
          </div>
        </div>
      </div>
      <div>
        <img src="/files/moon.png" alt="" />
      </div>
    </div>
  );
}

export default MoonWatch