
import { motion } from "framer-motion";

export default function VisionMissionCard ({ title, description, direction }) {
    // Animation variants based on direction
    const variants = {
      hidden: {
        opacity: 0,
        x: direction === "left" ? -50 : direction === "right" ? 50 : 0,
        y: direction === "up" ? -50 : direction === "down" ? 50 : 0,
      },
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
      },
    };
  
    return (
      <motion.div
        className="rounded-2xl p-6 flex flex-col items-center h-full border-2"
        variants={variants}
        initial="hidden"
        animate="visible"
        whileHover={{
          boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)",
          transition: { duration: 0.4, ease: "easeOut" },
        }}
      >
        <h2 className="text-2xl font-bold mb-4 relative">{title}</h2>
        <p className="text-center text-sm">{description}</p>
      </motion.div>
    );
  };