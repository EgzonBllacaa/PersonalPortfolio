import { useInView, motion } from "framer-motion";
import { useRef } from "react";

const Reveal = ({
  children,
  overflow = "hidden",
  width = "fit-content",
  delay = 0,
  ease = "easeInOut",
}) => {
  const RevealRef = useRef(null);
  const isInView = useInView(RevealRef, { once: true });

  return (
    <div ref={RevealRef} style={{ overflow, width }}>
      <motion.div
        initial="hidden"
        variants={{
          hidden: { opacity: 0, y: 140 },
          visible: { opacity: 1, y: 0 },
        }}
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration: 0.8, ease, delay }}
      >
        {children}
      </motion.div>
    </div>
  );
};
export default Reveal;
