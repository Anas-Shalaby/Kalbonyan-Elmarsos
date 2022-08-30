import React, { useState } from "react";
import "./Navbar.scss";
import { images } from "../../constants";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { MdDarkMode } from "react-icons/md";
import { BsSun } from "react-icons/bs";
const Navbar = () => {
  const [toogle, setToogle] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const handleDark = () => {
    if (isDark === false) {
      setIsDark(true);
      document.body.classList.add("black-theme");
    } else {
      setIsDark(false);
      document.body.classList.remove("black-theme");
    }
  };
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {["home", "about", "work", "skills", "contact"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
      <span className="mode-span" onClick={handleDark}>
        {isDark ? (
          <BsSun className="light-mood-icon" />
        ) : (
          <MdDarkMode className="dark-mood-icon" />
        )}
      </span>
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToogle(true)} />
        {toogle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX
              onClick={() => {
                setToogle(false);
              }}
            />
            <ul>
              {["home", "about", "work", "skills", "contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    onClick={() => {
                      setToogle(false);
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
