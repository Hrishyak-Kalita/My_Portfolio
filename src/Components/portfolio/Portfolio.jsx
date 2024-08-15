import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
const items = [
  {
    id: 1,
    title: "Psychology website",
    img: "nurture.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quo omnis molestias ad, delectus et nemo distinctio repudiandae. Saepe, voluptatum.",
    link: "",
  },

  {
    id: 2,
    title: "Analog Clock Project",
    img: "clock.png",
    desc: `For my Analog Clock project, I built a real-time clock using HTML, CSS, and JavaScript. The clock calculates the rotation of the hands based on the current time, updating smoothly every second. The design features a styled clock face with animated hands, utilizing CSS for layout and JavaScript for dynamic functionality. This project enhanced my skills in DOM manipulation and time-based animations and precise calculations for real-time applications.`,
    link: "https://analog-clock-mocha.vercel.app/",
  },
  {
    id: 3,
    title: "Tic-Tac-toe",
    img: "tic-tac-toe.png",
    desc: "I developed a simple console-based Tic Tac Toe game using HTML, CSS, and JavaScript. This project features a two-player mode with turn-based gameplay, where players take alternate turns. I implemented logic to validate moves and determine the outcomes, ensuring accurate gameplay. This project demonstrates my programming skills in designing interactive software and handling game logic efficiently.",
    link: "https://hrishyak-kalita.github.io/TICK_CROSS/",
  },
  {
    id: 4,
    title: "Research Intern ",
    img: "intern.jpg",
    desc: `During my internship at S.N. Bose National Centre for Basic Sciences (June 2024 – July 2024), I collaborated on a machine learning project titled "Paddy Crops Disease Detection." Under the guidance of Dr. Malaya Dutta Borah, I developed models for disease detection, focusing on data preprocessing, feature extraction, and model training using Python and TensorFlow. I worked with a team of interns on research, report writing, and presented our findings in a final project report.`,
    link: "",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset:["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);


  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            
              <button>
                <a href={item.link}>See Demo</a>
              </button>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
};
const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>My Projects</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
