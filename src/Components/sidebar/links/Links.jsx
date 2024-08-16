import React from "react";
import { motion } from "framer-motion";
const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};
const itemVariants = {
  open: {
    y: 50,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = ({setOpen}) => {
  const items = [
    ["#home","Home"],
    ["#about", "About"],
    ["#skill", "Skill"],
    ["#services", "Project"],
    ["#contact", "Contact"],
  ];

  return (
    <motion.div className="links" variants={variants}>
      {items.map(([id, label]) => (
        <motion.a
          href={id}
          key={id}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          onClick={() => setOpen((prev) => !prev)}
        >
          {label}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
