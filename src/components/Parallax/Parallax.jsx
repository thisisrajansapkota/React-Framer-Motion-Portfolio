import React, { useRef } from 'react'
import './Parallax.css'
import {motion, useScroll, useTransform} from 'framer-motion'
import planets from '../../assets/images/planets.png';
import sun from '../../assets/images/sun.png';

const Parallax = ({ type }) => {
const ref = useRef()

    const { scrollYProgress } = useScroll({
        target: ref,
offset: ["start start", "end start"]
    });

    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"] );
    const xText = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
    const xBg = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);



  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background:
          type === "skills"
            ? "linear-gradient(180deg, #111132, #0c0c1d)"
            : "linear-gradient(180deg, #111132, #505064)",
      }}
    >
      <div className='text'>
      <motion.h1 style={{ y: yText }}>
        {type === "skills" ? "What I Can Do" : "Who am I?"}
      </motion.h1>
      <motion.h2 style={{ x: xText }}>
        {type === "skills"
          ? "These are some of my Skills"
          : "Hi, I am R A J A N."}
      </motion.h2>
      </div>
      <motion.div className="mountains"></motion.div>
      <motion.div
        className="planets"
        style={{
          y: yBg,
          backgroundImage: `url(${type === "skills" ? planets : sun})`,
        }}
      >
       
      </motion.div>
      <motion.div style={{ x: xBg }} className="stars"></motion.div>
    </div>
  );
}
export default Parallax
