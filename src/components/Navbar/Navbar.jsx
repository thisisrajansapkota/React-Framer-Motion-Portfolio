import { motion } from "framer-motion";
<<<<<<< HEAD
import React, { useState } from "react";
import githubImg from "../../../src/assets/icons/github.png";
import linkedinImg from "../../../src/assets/icons/linkedin.png";
import moonIcon from "../../assets/moon.svg";
import sunIcon from "../../assets/sun.svg";
import "./Navbar.css";
=======
import { Link } from "react-router-dom";
import sunIcon from "../../assets/sun.svg";
import moonIcon from "../../assets/moon.svg";
import githubImg from "../../../src/assets/icons/github.png";
import linkedinImg from "../../../src/assets/icons/linkedin.png";
>>>>>>> 6879c48635499ca42016c88ff6728215c8d56898

function Navbar({ darkMode, handleClick }) {
  const [sideBar, setSideBar] = useState(false);

  const handleSidebarToggle = () => {
    setSideBar(!sideBar);
  };

<<<<<<< HEAD
=======
  const handleLinkClick = () => {
    setTimeout(() => {
      setSideBar(false);
    }, 200);
  };

>>>>>>> 6879c48635499ca42016c88ff6728215c8d56898
  return (
    <div
      className="navbar"
      style={{ backgroundColor: darkMode ? "black" : "#fff" }}
    >
      <div className="navWrapper">
        {/* <li>
          <Link to="/skills" onClick={handleLinkClick}>
            Skills
          </Link>
        </li> */}
        <div className="navLeft">
            <Link to="/" onClick={handleLinkClick}>
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
            }}
          >
            RAJAN
            
          </motion.span>
           </Link>
        </div>

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
              <Link to="/" onClick={handleLinkClick}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/skills" onClick={handleLinkClick}>
                Skills
              </Link>
            </li>
            <li>
              <Link to="/portfolio" onClick={handleLinkClick}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={handleLinkClick}>
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={handleLinkClick}>
                Contact
              </Link>
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
              <Link to="/" onClick={handleLinkClick}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/skills" onClick={handleLinkClick}>
                Skills
              </Link>
            </li>
            <li>
              <Link to="/portfolio" onClick={handleLinkClick}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={handleLinkClick}>
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={handleLinkClick}>
                Contact
              </Link>
            </li>
          </motion.ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
