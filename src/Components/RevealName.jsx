import React from "react";
import { motion } from "framer-motion";

const DURATION = 0.3;
const STAGGER = 0.025;

const RevealName = ({ initialText, hoverText }) => {
  // Pad both strings to the same length
  const maxLength = Math.max(initialText.length, hoverText.length);
  const safeInitial = initialText.padEnd(maxLength, " ");
  const safeHover = hoverText.padEnd(maxLength, " ");
  return (
    <motion.div
      initial="initial"
      whileHover="hovered"
      className="relative block overflow-hidden whitespace-nowrap"
      style={{ lineHeight: 1.3 }}
    >
      {/* Top layer: original text */}
      <div>
        {safeInitial.split("").map((l, i) => (
          <motion.span
            key={`top-${i}`}
            variants={{
              initial: { y: 0 },
              hovered: { y: "-140%" },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className={`inline-block ${l === " " ? "w-4" : ""}`}
          >
            {l}
          </motion.span>
        ))}
      </div>

      {/* Bottom layer: hover text */}
      <div className="absolute inset-0">
        {safeHover.split("").map((l, i) => (
          <motion.span
            key={`bottom-${i}`}
            variants={{
              initial: { y: "100%" },
              hovered: { y: 0 },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className={`inline-block text-[var(--color-primary)] ${
              l === " " ? "w-3" : ""
            }`}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

export default RevealName;
