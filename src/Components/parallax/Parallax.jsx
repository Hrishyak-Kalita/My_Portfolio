import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = (type) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div className="parallax">
      <motion.div className="stars" style={{ x: yBg }}></motion.div>
      <motion.h1>About Me</motion.h1>
      <div className="aboutBox">
        <div className="edu">
          <img src="edu.png" alt="" />
          <h2>Education</h2>
          <span>UnderGrad B.Tech</span>
          <span>CSE  NIT Silchar</span>
          <span>2021-205 Batch</span>
        </div>
        <div className="exp">
          <img src="skills.png" alt="" />
          <h2>Skills</h2>
          <span>DSA</span>
          <span>Frontend Developer</span>
        </div>
      </div>
      {/* <motion.div className="mountains"></motion.div> */}
      {/* <motion.div
        className="planets"
        style={{
          y: yBg,
          backgroundImage: `url(${
            type === "services" ? "/planets.png" : "/sun.png"
          })`,
        }}
      ></motion.div> */}
    </div>
  );
};

export default Parallax;
