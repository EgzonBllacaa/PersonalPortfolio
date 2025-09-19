import { Link } from "react-router-dom";
import github from "../../assets/github.png";
import githubSVGDark from "../../assets/githubDark.png";
import ArrowUpDark from "../../assets/arrowDark.png";
import arrow from "../../assets/right-up.png";
import Reveal from "../Reveal";
import { useDarkMode } from "../../context/Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Project = ({ project }) => {
  const { isLightMode } = useDarkMode();
  const [images, _] = useState(project.images || []);
  const [currentPage, setCurrentPage] = useState(0);
  const previousBtn = () => {
    setCurrentPage((prevPage) =>
      prevPage > 0 ? prevPage - 1 : images.length - 1
    );
  };
  const nextBtn = () => {
    setCurrentPage((prevPage) =>
      prevPage < images.length - 1 ? prevPage + 1 : 0
    );
  };

  return (
    <Reveal>
      <div className="flex flex-wrap gap-10 lg:gap-12">
        <div className="w-full px-10 py-10 h-fit border-0 bg-[var(--color-neutral_dark_gray)] lg:max-w-2/5 rounded-3xl">
          <Link target="_blank" to={project.live}>
            {images.length > 0 && (
              <img
                className="object-cover w-full h-auto rounded-2xl"
                src={images[currentPage]}
                alt={project.title}
              />
            )}
          </Link>
          {images.length > 1 && (
            <div className="flex items-center justify-center gap-6 mt-4 text-3xl text-[var(--color-primary)]">
              <button className="cursor-pointer" onClick={previousBtn}>
                <FontAwesomeIcon icon={faArrowAltCircleLeft} />
              </button>
              <button className="cursor-pointer" onClick={nextBtn}>
                <FontAwesomeIcon icon={faArrowAltCircleRight} />
              </button>
            </div>
          )}
        </div>
        <div className="flex flex-col gap-12 lg:w-2/4">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <Reveal delay={0.7}>
                <h2 className="lg:text-3xl text-2xl font-bold text-[var(--color-neutral_off_white)]">
                  {project.title}
                </h2>
              </Reveal>
              <Reveal delay={0.8}>
                <p className=" text-[var(--color-neutral_off_white)]">
                  {Array.isArray(project.description)
                    ? project.description.map((line, i) => (
                        <span key={i}>
                          {line}
                          <br />
                        </span>
                      ))
                    : project.description}
                </p>
              </Reveal>
            </div>
            <Reveal delay={0.9} width="w-full">
              <div className="flex flex-col justify-between text-[var(--color-neutral_off_white)] ">
                <p className="mb-2 uppercase">Project Info</p>
                <div
                  className={`flex items-center justify-between py-2 border-y-1 border-gray-400`}
                >
                  <p>Year </p>
                  <p className="text-[var(--color-neutral_off_white)]">
                    {project.year}
                  </p>
                </div>
                <div
                  className={`flex items-center justify-between py-2 border-y-1 border-t-0 border-gray-400`}
                >
                  <p>Role </p>
                  <p className="text-[var(--color-neutral_off_white)]">
                    {project.role}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
          <div className="flex items-center gap-6 uppercase">
            <Reveal delay={0.5}>
              <Link
                target="_blank"
                to={project.live}
                className="custom-border-bottom flex items-center border-b-2 border-red-900 gap-2 text-[var(--color-primary)] hover:text-[var(--color-primary)] "
              >
                Live Demo{" "}
                {isLightMode ? (
                  <img className="w-6 h-6" src={arrow} alt="" />
                ) : (
                  <img className="w-6 h-6" src={ArrowUpDark} alt="" />
                )}
              </Link>
            </Reveal>
            {project.githubRepo && (
              <Link
                target="_blank"
                to={project.githubRepo}
                className="custom-border-bottom flex items-center gap-2 text-[var(--color-primary)] hover:text-[var(--color-primary)] "
              >
                <p>See On Github</p>
                {isLightMode ? (
                  <img src={githubSVGDark} alt="" />
                ) : (
                  <img src={github} alt="" />
                )}
              </Link>
            )}
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export default Project;
