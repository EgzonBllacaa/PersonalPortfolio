import React from "react";
import CodeImg from "../../assets/CodeImg.jpg";
import ContactMeBtns from "../Components/ContactMeBtns";
import Reveal from "../Reveal";
import RevealName from "../RevealName";

const Hero = ({ contactRef }) => {
  return (
    <>
      <Reveal>
        <div className="flex flex-wrap md:flex-nowrap items-center justify-between gap-20 border-b-1 border-[#424242] pb-20">
          <div className="flex flex-col gap-10 w-xl">
            <div className="flex flex-col gap-2">
              <h1 className="font-BebasNeue text-[var(--color-neutral)] font-black text-4xl leading-tight md:text-6xl lg:text-7xl lg:leading-26">
                Hi, I am
                <RevealName
                  initialText="Egzon Bllaca"
                  hoverText="Front End Dev"
                />
              </h1>

              <p className="text-[var(--color-neutral_off_white)] lg:text-lg">
                A Prishtina based front-end developer passionate about building
                accessible and user frindly websites.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Reveal overflow="visible">
                <ContactMeBtns contactRef={contactRef} />
              </Reveal>
            </div>
          </div>
          <div className="max-w-[600px] w-full">
            <Reveal delay={0.3} className={"w-full"}>
              <img
                className="w-full min-w-80 rounded-xl custom-scale"
                src={CodeImg}
                alt=""
              />
            </Reveal>
          </div>
        </div>
      </Reveal>
    </>
  );
};

export default Hero;
