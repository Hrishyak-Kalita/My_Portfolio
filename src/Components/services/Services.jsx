import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -100,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildern: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2.5,
      repeat: Infinity,
    },
  },
};
// const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);


const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });
  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // whileInView="animate"
      ref={ref}
      animate={isInView && "animate"}
    >
      <motion.div className="stars" ></motion.div>
      <motion.div className="mountains" ></motion.div>
      {/* <motion.div className="planets" ></motion.div> */}

      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on learning, growing
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          {/* <img className="imgproject" src="/projectHome.avif" alt="" /> */}
          <h1>
            My Project
            Works
          </h1>
        </div>
        <div className="title">
          {/* <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your </motion.b>
            Buisness
          </h1> */}
          <button>WHAT I DO?</button>
          <motion.img
            className="scrollimg"
            variants={textVariants}
            src="/scroll.png"
            alt=""
            animate="scrollButton"
          />
        </div>
      </motion.div>
      {/* <motion.div className="listContainer">
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            veritatis voluptatem iure dolores, quae voluptatibus, porro quo odit
            non qui itaque aliquid ratione quas perspiciatis assumenda quia
            deserunt repudiandae, ipsum nemo.
          </p>
          <button>GO</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          {" "}
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            veritatis voluptatem iure dolores, quae voluptatibus, porro quo odit
            non qui itaque aliquid ratione quas perspiciatis assumenda quia
            deserunt repudiandae, ipsum nemo.
          </p>
          <button>GO</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          {" "}
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            veritatis voluptatem iure dolores, quae voluptatibus, porro quo odit
            non qui itaque aliquid ratione quas perspiciatis assumenda quia
            deserunt repudiandae, ipsum nemo.
          </p>
          <button>GO</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          {" "}
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            veritatis voluptatem iure dolores, quae voluptatibus, porro quo odit
            non qui itaque aliquid ratione quas perspiciatis assumenda quia
            deserunt repudiandae, ipsum nemo.
          </p>
          <button>GO</button>
        </motion.div>
      </motion.div> */}
    </motion.div>
  );
};

export default Services;
