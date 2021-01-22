import { motion } from "framer-motion";

export default function Triangle() {
  return (
    <motion.img
      src="/triangle.svg"
      className="block w-1/2 md:w-full mx-auto"
      animate={{ rotate: 360 }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 1,
        duration: 3,
      }}
    ></motion.img>
  );
}
