import { useRef } from "react";
import Form from "./Form";
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";
import x from "../../assets/X.png";
import instagram from "../../assets/instagram.png";
import githubDark from "../../assets/githubDark.png";
import instagramDark from "../../assets/instagramDark.png";
import xDark from "../../assets/xSVGDark.png";
import linkedinDark from "../../assets/linkedinDark.png";
import Reveal from "../Reveal";
import { useDarkMode } from "../../context/Context";

const LetsConnect = ({ contactRef }) => {
  const inputRef = useRef(null);
  const { isLightMode } = useDarkMode();
  return (
    <Reveal width="w-full">
      <div
        ref={contactRef}
        className="flex flex-wrap min-w-full py-16 lg:gap-30 xl:gap-70 gap-30 lg:py-20"
      >
        <div className="flex flex-col justify-between w-fit">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <h3 className="lg:text-7xl text-5xl font-black text-[var(--color-neutral)] text-nowrap lg:tracking-tighter">
                Let's Connect
              </h3>
              <div>
                <p className="text-[var(--color-neutral)]">
                  Say hello at{" "}
                  <span
                    className="custom-border-bottom cursor-pointer hover:text-[var(--color-neutral)] "
                    onClick={() => inputRef.current.focus()}
                  >
                    egzon.tech@gmail.com
                  </span>
                </p>
                <p className="text-[var(--color-neutral)] ">
                  For more info, send me an{" "}
                  <span
                    className="custom-border-bottom cursor-pointer hover:text-[var(--color-neutral)]"
                    onClick={() => inputRef.current.focus()}
                  >
                    email here
                  </span>
                </p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              {isLightMode ? (
                <img
                  className="max-w-9 custom-scale-btns"
                  src={instagramDark}
                  alt=""
                />
              ) : (
                <img
                  className="max-w-9 custom-scale-btns"
                  src={instagram}
                  alt=""
                />
              )}
              {isLightMode ? (
                <img
                  className="max-w-9 custom-scale-btns"
                  src={linkedinDark}
                  alt=""
                />
              ) : (
                <img
                  className="max-w-9 custom-scale-btns"
                  src={linkedin}
                  alt=""
                />
              )}
              {isLightMode ? (
                <img
                  className="max-w-9 custom-scale-btns"
                  src={githubDark}
                  alt=""
                />
              ) : (
                <img
                  className="max-w-9 custom-scale-btns"
                  src={github}
                  alt=""
                />
              )}
              {isLightMode ? (
                <img className="max-w-7 custom-scale-btns" src={xDark} alt="" />
              ) : (
                <img className="max-w-7 custom-scale-btns" src={x} alt="" />
              )}
            </div>
          </div>
          <span className="text-[var(--color-neutral)] hidden lg:block">
            @{new Date().getFullYear()} Egzon Bllaca
          </span>
        </div>
        <div className="flex-1 flex flex-col gap-20 xl:min-w-[400px] lg:min-w-[205px]">
          <Form contactRef={contactRef} inputRef={inputRef} />
          <span className="text-[var(--color-neutral)] block lg:hidden ">
            @{new Date().getFullYear()} Egzon Bllaca
          </span>
        </div>
      </div>
    </Reveal>
  );
};

export default LetsConnect;
