// utils/motion.js
export const slideUp = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 1 } },
};

export const growIn = {
  hidden: { y: 0, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 3,
      delay: 1, // Delay of 1 second
    },
  },
};
