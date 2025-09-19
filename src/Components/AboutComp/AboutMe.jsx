import db from "../../db.json";
import { Link, useLocation } from "react-router-dom";
import ContactMeBtns from "../Components/ContactMeBtns";
import Reveal from "../Reveal";
import { useDarkMode } from "../../context/Context";
import { useEffect } from "react";

const AboutMe = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const { isLightMode } = useDarkMode();

  console.log(db.about);
  useEffect(() => {
    if (location.state?.scrollTarget === "about") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [location]);
  return (
    <>
      <Reveal>
        {db ? (
          <div
            className={`flex flex-wrap border-b border-[#424242] lg:flex-nowrap  items-start gap-6  lg:gap-52  ${
              isHome
                ? "lg:pb-28 py-26  border-b-1 border-[#424242]"
                : "pb-30 pt-40"
            }`}
          >
            <div className="text-nowrap font-black  text-4xl w-2/4 lg:text-6xl text-[var(--color-neutral)]">
              {db.about.title}
            </div>
            <div className="flex flex-col w-full gap-13 ">
              <div className="flex flex-col gap-2 lg:gap-4">
                <h5 className="lg:font-semibold text-[var(--color-neutral)] text-lg lg:text-3xl">
                  {db.about.description.header}
                </h5>
                <div className="text-[var(--color-neutral)] lg:text-lg">
                  {isHome ? (
                    <div className="flex flex-col items-end">
                      <h6 className="text-[var(--color-neutral)] lg:text-lg">
                        {db.about.description.body.slice(0, 300)}...
                      </h6>
                      <Link
                        to={"/about"}
                        state={{ scrollTarget: "about" }}
                        className="px-4 py-1 font-medium border rounded-3xl"
                      >
                        Read more
                      </Link>
                    </div>
                  ) : (
                    <h6>{db.about.description.body}</h6>
                  )}
                </div>
              </div>
              <ContactMeBtns isLightMode={isLightMode} />
            </div>
          </div>
        ) : (
          <p className="text-lg text-red-500">Error: No data in the database</p>
        )}
      </Reveal>
    </>
  );
};

export default AboutMe;
