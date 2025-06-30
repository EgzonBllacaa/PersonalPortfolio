import React from "react";
import { Link } from "react-router-dom";
import github from "../../assets/github.png";
import githubSVGDark from "../../assets/githubSVGDark.png";
import ArrowUpDark from "../../assets/ArrowUpDark.png";
import arrowUp from "../../assets/icons8-arrow-48.png";

const Project = ({ project, isDarkMode }) => {
  return (
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
            <h2 className="lg:text-3xl text-2xl font-medium text-[var(--color-neutral_off_white)]">
              {project.title}
            </h2>
            <p className="text-lg text-[var(--color-neutral_off_white)]">
              {project.description}
            </p>
          </div>
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
        </div>
        <div className="flex items-center gap-6 uppercase">
          <Link
            target="_blank"
            to={project.live}
            className="custom-border-bottom flex items-center border-b-2 border-red-900 gap-2 text-[var(--color-primary)] hover:text-[var(--color-primary)] "
          >
            Live Demo{" "}
            {isDarkMode ? (
              <img className="w-3 h-3" src={ArrowUpDark} alt="" />
            ) : (
              <img className="w-6 h-6" src={arrowUp} alt="" />
            )}
          </Link>
          {project.github && (
            <Link
              target="_blank"
              to={project.githubRepo}
              className="custom-border-bottom flex items-center gap-2 text-[var(--color-primary)] hover:text-[var(--color-primary)] "
            >
              <p>See On Github</p>
              {isDarkMode ? (
                <img src={githubSVGDark} alt="" />
              ) : (
                <img src={github} alt="" />
              )}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
