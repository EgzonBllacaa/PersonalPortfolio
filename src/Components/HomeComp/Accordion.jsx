import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const accordionData = [
  {
    id: 0,
    question: "Skills & Technologies?",
    answer: [
      "Front-end: React, Tailwind CSS, HTML, CSS, JavaScript",
      "Back-end: Node.js, Express, MySQL, Prisma ",
      "Tools: Git, Vercel, Postman, Figma",
    ],

    isOpen: false,
  },
  {
    id: 1,
    question: "How do you approach a new project?",
    answer:
      "I start by thoroughly understanding the project requirements and goals. I create a clear plan, including the tech stack, architecture, and key features. Then I break the project into manageable tasks, starting with core functionality before moving on to styling and animations. I test each part as I go to ensure quality and maintainability.",
    isOpen: false,
  },
  {
    id: 2,
    question: "Do you work full-stack or just front-end?",
    answer:
      "My main focus is front-end development, where I can craft responsive and interactive user interfaces. However, I also have experience with back-end technologies like Node.js, Express, and MySQL, so I’m capable of handling full-stack projects, integrating APIs, managing databases, and implementing authentication systems.",
    isOpen: false,
  },
  {
    id: 3,
    question: "What’s your preferred workflow?",
    answer:
      "I follow a structured workflow to stay organized and efficient. I use Git for version control, managing branches and commits carefully. I often reference Figma or design mockups to ensure pixel-perfect implementation. I develop iteratively, building features step by step, testing each stage thoroughly, and seeking feedback where necessary. This approach helps me deliver high-quality, maintainable code.",
    isOpen: false,
  },
];

const Accordion = () => {
  const [items, setItems] = useState(accordionData);

  const handleClick = (id) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isOpen: !item.isOpen } : item
      )
    );
  };

  return (
    <div className="flex flex-col gap-8 p-8 py-20 border-b sm:py-30 text-[var(--color-neutral)]">
      <div className="flex flex-col items-center gap-4">
        <button className="px-5 py-2 font-medium border rounded-4xl bg-[var(--color-neutral_dark_gray)]">
          FAQ Section
        </button>
        <span className="text-3xl font-bold text-center text-[var(--color-neutral_off_white)]">
          Frequently Asked Questions
        </span>
        <p className="text-lg text-center text-[var(--bg-input-color)]">
          Get answers to your questions and learn about our platform
        </p>
      </div>
      {items.length > 0 && (
        <div className="flex flex-col gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              onClick={() => handleClick(item.id)}
              className="flex flex-col gap-2 px-6 py-4 border rounded-lg cursor-pointer border-slate-400"
            >
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-bold">{item.question}</h4>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className={`bg-[--bg-input-color] ${
                    item.isOpen ? "rotate-180" : ""
                  } transition-transform duration-300 ease-in-out`}
                />
              </div>
              {item.isOpen && (
                <div className="text-[bg-input-color]">
                  {item.answer && typeof item.answer === "string" ? (
                    <p>{item.answer}</p>
                  ) : (
                    item.answer.map((a) => <p>{a}</p>)
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Accordion;
