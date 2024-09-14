// Components/AnimatedContent.js
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AnimatedContent = ({ children, animation = 'fadeIn', delay = 0, duration = 0.5 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const animations = {
    fadeIn: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
    },
    slideUp: {
      initial: { opacity: 0, y: 50 },
      animate: { opacity: 1, y: 0 },
    },
    slideDown: {
      initial: { opacity: 0, y: -50 },
      animate: { opacity: 1, y: 0 },
    },
    slideLeft: {
      initial: { opacity: 0, x: 50 },
      animate: { opacity: 1, x: 0 },
    },
    slideRight: {
      initial: { opacity: 0, x: -50 },
      animate: { opacity: 1, x: 0 },
    },
    zoomIn: {
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 },
    },
    zoomOut: {
      initial: { opacity: 0, scale: 1.2 },
      animate: { opacity: 1, scale: 1 },
    },
    flip: {
      initial: { opacity: 0, rotateY: 90 },
      animate: { opacity: 1, rotateY: 0 },
    },
    spin: {
      initial: { opacity: 0, rotate: 180 },
      animate: { opacity: 1, rotate: 0 },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate={inView ? "animate" : "initial"}
      variants={animations[animation]}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedContent;