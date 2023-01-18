import React from "react";
import { motion } from "framer-motion";

interface AnimatedPageProps {
  children: any;
}

const AnimatedPage: React.FC<AnimatedPageProps> = ({ children }) => {
  const animations = {
    initial: { opacity: 0, y: -100 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 100 },
  };
  return (
    <motion.div
      //   variants={animations}   uncomment to activate transitions
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.7 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPage;
