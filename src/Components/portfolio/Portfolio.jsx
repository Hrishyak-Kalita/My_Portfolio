import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
const items = [
  {
    id: 1,
    title: "React Commerce",
    img: "https://i.ytimg.com/vi/Eqv8HGyXqxk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA8Uspaq3uofT8c4b05dH9y1ZFfXg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quo omnis molestias ad, delectus et nemo distinctio repudiandae. Saepe, voluptatum.",
  },
  {
    id: 2,
    title: "Next js Commerce",
    img: "https://i.ytimg.com/vi/Eqv8HGyXqxk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA8Uspaq3uofT8c4b05dH9y1ZFfXg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quo omnis molestias ad, delectus et nemo distinctio repudiandae. Saepe, voluptatum.",
  },
  {
    id: 3,
    title: "Vanilla js App",
    img: "https://i.ytimg.com/vi/Eqv8HGyXqxk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA8Uspaq3uofT8c4b05dH9y1ZFfXg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quo omnis molestias ad, delectus et nemo distinctio repudiandae. Saepe, voluptatum.",
  },
  {
    id: 4,
    title: "Music app",
    img: "https://i.ytimg.com/vi/Eqv8HGyXqxk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA8Uspaq3uofT8c4b05dH9y1ZFfXg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quo omnis molestias ad, delectus et nemo distinctio repudiandae. Saepe, voluptatum.",
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
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
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
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
