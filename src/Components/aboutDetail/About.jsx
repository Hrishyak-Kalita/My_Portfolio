import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import "./about.scss";
const About = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div className="about">
      <motion.div className="stars" style={{ x: yBg }}></motion.div>
      <motion.h1>Skills</motion.h1>
      <div className="aboutBox">
        <div className="dev">
          <h2>Technical</h2>
          <div className="items">
          <ul>
            <li>C++/C</li>
            <span>Experienced</span>
          </ul>

          <ul>
            <li>Javascript</li>
            <span>Basic</span>
          </ul>
          <ul>
            <li>React</li>
            <span>Basic</span>
          </ul>
          <ul>
            <li>CSS/SCSS</li>
            <span>Experienced</span>
          </ul>
          <ul>
            <li>HTML</li>
            <span>Experienced</span>
          </ul>
        </div>
        </div>
        <div className="acad">
          <h2>Course</h2>
          <div className="items">
          <ul>
            <li>Data Structure</li>
          </ul>
          <ul>
            <li>Computer Networks</li>
          </ul>
          <ul>
            <li>Algorithms</li>
          </ul>
          <ul>
            <li>OOPS</li>
          </ul>
          <ul>
            <li>OOD</li>
          </ul>
          <ul>
            <li>DBMS</li>
          </ul>
          </div>
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

export default About;
