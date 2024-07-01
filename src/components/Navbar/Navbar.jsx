import React, { useState } from "react";
import "./Navbar.css";
import { motion } from "framer-motion";
import sunIcon from "../../assets/sun.svg";
import moonIcon from "../../assets/moon.svg";
import githubImg from "../../../src/assets/icons/github.png";
import linkedinImg from "../../../src/assets/icons/linkedin.png";

function Navbar({ darkMode, handleClick }) {
  const [sideBar, setSideBar] = useState(false);
  const handleSidebarToggle = () => {
    setSideBar(!sideBar);
  };

  const handleLinkClick = () => {
    setSideBar(false); // Close the sidebar
    console.log(e);
  };

  return (
    <div
      className="navbar"
      style={{ backgroundColor: darkMode ? "black" : "#fff" }}
    >
      <div className="navWrapper">
        <div className="navLeft">
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
            }}
          >
            RAJAN
          </motion.span>
        </div>

        {/* Middle Section with Toggle theme & toggle menu */}
        <div className="middle-section">
          <div
            className="toggle-container"
            onClick={handleClick}
            style={{ background: darkMode ? "#faa11b" : "#9e9abd" }}
          >
            {darkMode ? (
              <div className="sunDiv">
                <img src={sunIcon} alt="Light Mode" className="toggle-icon" />
              </div>
            ) : (
              <div className="moonDiv">
                <img src={moonIcon} alt="Dark Mode" className="toggle-icon" />
              </div>
            )}
          </div>
          <button className="sidebar-toggle" onClick={handleSidebarToggle}>
            &#9776;
          </button>
        </div>

        <div className="navRight">
          <motion.ul
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 3,
              type: "spring",
            }}
          >
            <li>
              <a href="https://github.com/thisisrajansapkota" target="_blank">
                <img
                  src={githubImg}
                  alt="github"
                  style={{ width: 37, height: 37 }}
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/rajan-sapkota-88b95a18b/"
                target="_blank"
              >
                <img src={linkedinImg} alt="linkedin" />
              </a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </motion.ul>
        </div>

        <div
          className={sideBar ? "sidebar open" : "sidebar"}
          style={{ backgroundColor: darkMode ? "black" : "white" }}
        >
          <motion.ul
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 3,
              type: "spring",
            }}
          >
            <li>
              <a
                href="https://github.com/thisisrajansapkota"
                target="_blank"
                onClick={handleLinkClick}
              >
                <img
                  src={githubImg}
                  alt="github"
                  style={{ width: 37, height: 37 }}
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/rajan-sapkota-88b95a18b/"
                target="_blank"
                onClick={handleLinkClick}
              >
                <img src={linkedinImg} alt="linkedin" />
              </a>
            </li>
            <li>
              <a href="#skills" onClick={handleLinkClick}>
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" onClick={handleLinkClick}>
                Projects
              </a>
            </li>
            <li>
              <a href="#about" onClick={handleLinkClick}>
                About
              </a>
            </li>
            <li>
              <a href="#contact" onClick={handleLinkClick}>
                Contact
              </a>
            </li>
          </motion.ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
