import github from "../../assets/github.png";

import linkedin from "../../assets/linkedin.png";
import githubDark from "../../assets/githubDark.png";
import linkedinDark from "../../assets/linkedinDark.png";
import { Link } from "react-router-dom";
import useScroll from "../hooks/useScroll";
import Reveal from "../Reveal";
import { useDarkMode } from "../../context/Context";

const ContactMeBtns = ({ contactRef }) => {
  const handleScroll = useScroll();
  const { isLightMode } = useDarkMode();
  return (
    <>
      <div className="flex items-center gap-2">
        <Reveal overflow="visible">
          <button
            onClick={() => handleScroll(contactRef)}
            className="flex text-nowrap custom-scale-btns cursor-pointer justify-between visible font-bold gap-3 items-center uppercase text-[var(--bg-custom-color)] py-3 pr-6 pl-4.5 bg-[var(--color-primary)] rounded-3xl"
          >
            Contact me
            <div className={`p-1 bg-black rounded-2xl`}></div>
          </button>
        </Reveal>
        <Reveal delay={1} overflow="visible">
          <Link
            target="_blank"
            to={"https://github.com/EgzonBllacaa"}
            className="px-2 py-1 cursor-pointer custom-scale-btns rounded-2xl"
          >
            {isLightMode ? (
              <img className="max-w-6" src={githubDark} />
            ) : (
              <img className="w-full max-w-6" src={github} />
            )}
          </Link>
        </Reveal>
        <Reveal delay={1.2} ease="easeInOut">
          <Link
            target="_blank"
            to={"https://www.linkedin.com/in/egzon-bllaca-2b727828a/"}
            className="px-2 py-1 cursor-pointer custom-scale-btns rounded-2xl"
          >
            {isLightMode ? (
              <img className="max-w-6" src={linkedinDark} />
            ) : (
              <img className="max-w-6" src={linkedin} />
            )}
          </Link>
        </Reveal>
      </div>
    </>
  );
};

export default ContactMeBtns;
