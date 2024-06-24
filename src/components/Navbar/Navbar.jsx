import React from "react";
import "./Navbar.css";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <div className="navbar">
      {/* Sidebar */}
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
        <div className="navRight">
          <motion.ul
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              type: "spring",
            }}
          >
            <li>
              <a href="https://github.com/thisisrajansapkota" target="_blank">
                <img src="../../../src/assets/icons/github.png" alt="github" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/rajan-sapkota-88b95a18b/"
                target="_blank"
              >
                <img
                  src="../../../src/assets/icons/linkedin.png"
                  alt="linkedin"
                />
              </a>
            </li>
            <li>
              <a href="#">Skills</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </motion.ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
