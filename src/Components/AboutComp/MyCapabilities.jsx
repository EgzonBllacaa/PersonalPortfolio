import React from "react";
import db from "../../db.json";
import Reveal from "../Reveal";

const MyCapabilities = () => {
  return (
    <Reveal delay={0.6}>
      <div className="flex flex-wrap lg:flex-nowrap lg:gap-60 gap-10 justify-between py-20  border-b-1 border-[#424242]">
        <div className="font-black text-[var(--color-neutral)] text-4xl lg:text-7xl text-nowrap">
          {db.capabilities.title}
        </div>
        <div className="flex flex-col gap-20 lg:gap-8">
          <div className="text-[var(--color-neutral)] text-lg">
            {db.capabilities.description.header}
          </div>
          <div className="flex flex-col w-full gap-4 lg:items-center lg:flex-row lg:flex-wrap ">
            {db.capabilities.description.body.map((skill, index) => (
              <span
                className="px-10 cursor-pointer flex flex-col items-center mb-2 py-4  border-1 rounded-4xl border-neutral_dark_gray text-[var(--color-neutral)] hover:bg-[var(--color-neutral)] hover:text-[var(--bg-custom-color)] transition-all duration-300 "
                key={index}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export default MyCapabilities;
