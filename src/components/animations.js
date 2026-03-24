export const fadeUp = {
  hidden: { opacity: 0, y: 80 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

export const stagger = {
  show: { transition: { staggerChildren: 0.15 } }
};
