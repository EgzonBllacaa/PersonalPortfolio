import React from "react";
import db from "../../db.json";
import Project from "./Project";
import Reveal from "../Reveal";

console.log(db);
const FeaturedProjects = ({ projectRef }) => {
  return (
    <Reveal delay={0.6}>
      <div
        ref={projectRef}
        className="flex flex-col gap-20 py-20 border-b-1 border-[#424242]"
      >
        <div>
          <h3 className="lg:text-7xl md:text-4xl sm:text-3xl text-2xl text-nowrap font-black text-[var(--color-neutral_off_white)] mb-2">
            Featured Projects
          </h3>
          <p className="lg:text-lg text-[var(--color-neutral_off_white)]">
            Here are some of the selected projects that showcase my passion for
            front-end development.
          </p>
        </div>
        <div className="flex flex-col gap-40 pb-10 lg:gap-28 ">
          {db.project.length > 0 &&
            db.project.map((project, index) => (
              <Project key={index} project={project} />
            ))}
        </div>
      </div>
    </Reveal>
  );
};

export default FeaturedProjects;
