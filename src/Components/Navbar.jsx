import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useDarkMode } from "../context/Context";
import nightMode from "../assets/night-mode.png";
import lightMode from "../assets/brightness.png";
import useScroll from "./hooks/useScroll";

const Navbar = ({ contactRef, projectRef }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { isLightMode, toggleDarkMode } = useDarkMode();
  const handleScroll = useScroll();

  const handleScrollandCloseMenu = (ref) => {
    handleScroll(ref);
    setIsOpen(false);
    // Test
  };

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  const navLinks = (
    <>
      <Link to={"/"}>
        <li>
          <button
            onClick={() => handleScrollandCloseMenu(projectRef)}
            className="text-[var(--color-neutral_off_white)]  font-medium cursor-pointer custom-scale-btns"
          >
            Projects
          </button>
        </li>
      </Link>
      <li>
        <Link
          className="text-[var(--color-neutral_off_white)] font-medium cursor-pointer "
          to="/About"
          onClick={() => setIsOpen(false)}
        >
          <button className="custom-scale-btns">About</button>
        </Link>
      </li>
      <li>
        <Link to={"/"}>
          <button
            onClick={() => handleScrollandCloseMenu(contactRef)}
            className="text-[var(--color-neutral_off_white)] font-medium cursor-pointer custom-scale-btns"
          >
            Contact
          </button>
        </Link>
      </li>

      <button
        onClick={toggleDarkMode}
        className="text-[var(--color-neutral)] font-medium cursor-pointer dark:text-red-500 custom-scale-btns"
      >
        {isLightMode ? (
          <img className="max-w-6" src={nightMode} alt="max-w-" />
        ) : (
          <img className="max-w-6" src={lightMode} alt="max-w-4" />
        )}
      </button>
    </>
  );

  return (
    <nav className="relative z-50 flex items-center justify-between w-full py-7 mb-7">
      <div>
        <span className="text-[var(--color-neutral_off_white)] lg:text-3xl text-xl uppercase font-BebasNeue font-medium">
          <Link to="/">egzon bllaca</Link>
        </span>
      </div>
      <div className="relative">
        <button
          className="relative z-50 text-2xl cursor-pointer md:hidden"
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isLightMode ? (
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
          ) : (
            <FontAwesomeIcon
              className="text-white"
              icon={isOpen ? faTimes : faBars}
            />
          )}
        </button>

        <ul className="items-center justify-center hidden gap-8 md:flex">
          {navLinks}
        </ul>

        {isOpen && (
          <ul className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-[var(--bg-custom-color)] bg-opacity-90 md:hidden">
            {navLinks}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
