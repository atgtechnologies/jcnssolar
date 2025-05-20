export const StaggerParent = function (staggerVolume = 0.2, delay = 0.3) {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerVolume,
        delay,
      },
    },
  };
};

export const AnimateToRight = {
  hidden: { opacity: 0, x: -30 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

export const AnimateToLeft = {
  hidden: { opacity: 0, x: 30 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: "linear",
    },
  },
};

export const AnimateToLeftWithDelay = {
  hidden: { opacity: 0, x: 30 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: "linear",
      delay: 0.3,
    },
  },
};
export const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export const fadeInViewport = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
  viewport: { once: true, amount: 0.8 },
};

export const shake = {
  whileInView: {
    x: [0, -6, 6, -4, 4, -2, 2, 0],
  },
  Initial: { x: 0 },
  transition: {
    duration: 0.6,
    ease: [0.36, 0.07, 0.19, 0.97], // custom bezier for bounce-like feel
  },
};

export const floatAnimation = {
  hover: {
    y: [0, -10, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
  rest: {
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};
