import React from "react";
import { Link } from "react-router-dom";
import github from "../../assets/github.png";
import githubSVGDark from "../../assets/githubDark.png";
import ArrowUpDark from "../../assets/arrowDark.png";
import arrow from "../../assets/right-up.png";
import Reveal from "../Reveal";
import { useDarkMode } from "../../context/Context";

const Project = ({ project }) => {
  const { isLightMode } = useDarkMode();
  return (
    <Reveal>
      <div className="flex flex-wrap items-center gap-10 lg:gap-12">
        <div className="lg:w-2/5 min-w-[300px] bg-[#1A1A1A] border-0 rounded-3xl px-10 py-10">
          <img
            className="w-full transition-all ease-in-out cursor-pointer hover:scale-105 duration-600"
            src={project.image}
            alt=""
          />
        </div>
        <div className="flex flex-col gap-12 lg:w-2/4">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-8">
              <Reveal delay={0.7}>
                <h2 className="lg:text-3xl text-2xl font-medium text-[var(--color-neutral_off_white)]">
                  {project.title}
                </h2>
              </Reveal>
              <Reveal delay={0.8}>
                <p className="text-lg text-[var(--color-neutral_off_white)]">
                  {project.description}
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
            {project.github && (
              <Link
                target="_blank"
                to={project.githubRepo}
                className="custom-border-bottom flex items-center gap-2 text-[var(--color-primary)] hover:text-[var(--color-primary)] "
              >
                <p>See On Github</p>
                {isLightMode ? (
                  <img src={github} alt="" />
                ) : (
                  <img src={githubSVGDark} alt="" />
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
