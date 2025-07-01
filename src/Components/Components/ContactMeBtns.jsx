import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";
import { Link } from "react-router-dom";
import arrow from "../../assets/Arrow.png";
import useScroll from "../hooks/useScroll";
import Reveal from "../Reveal";

const ContactMeBtns = ({ contactRef }) => {
  const handleScroll = useScroll();
  return (
    <>
      <div className="flex items-center gap-2">
        <Reveal overflow="visible">
          <button
            onClick={() => handleScroll(contactRef)}
            className="flex custom-scale-btns cursor-pointer justify-between visible font-bold gap-3 items-center uppercase text-[var(--bg-custom-color)] py-3 pr-6 pl-4.5 bg-[var(--color-primary)] rounded-3xl"
          >
            Contact me
            <div className={`px-3 ml-1 py-3 md:p-1 bg-black rounded-2xl`}>
              <img className="block md:hidden" src={arrow} alt="" />
            </div>
          </button>
        </Reveal>
        <Reveal delay={1} overflow="visible" width="w-full">
          <Link
            to={""}
            className="px-2 py-1 cursor-pointer custom-scale-btns rounded-2xl"
          >
            <img className="max-w-6" src={github} />
          </Link>
        </Reveal>
        <Reveal delay={1.2} ease="easeInOut" width="w-full">
          <Link
            to={""}
            className="px-2 py-1 cursor-pointer custom-scale-btns rounded-2xl"
          >
            <img className="max-w-6" src={linkedin} />
          </Link>
        </Reveal>
      </div>
    </>
  );
};

export default ContactMeBtns;
