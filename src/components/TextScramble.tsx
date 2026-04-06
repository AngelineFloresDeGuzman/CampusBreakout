import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

interface TextScrambleProps {
  children: string;
  className?: string;
  as?: "p" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const chars = "!@#$%^&*()_+-=[]{}|;:,.<>?/~`ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const TextScramble = ({ 
  children, 
  className = "",
  as: Component = "span"
}: TextScrambleProps) => {
  const [text, setText] = useState(children);
  const [isHovering, setIsHovering] = useState(false);

  const scramble = useCallback(() => {
    let iteration = 0;
    const originalText = children;
    
    const interval = setInterval(() => {
      setText(
        originalText
          .split("")
          .map((char, index) => {
            if (index < iteration) {
              return originalText[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      iteration += 1 / 2;

      if (iteration >= originalText.length) {
        clearInterval(interval);
        setText(originalText);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [children]);

  useEffect(() => {
    if (isHovering) {
      const cleanup = scramble();
      return cleanup;
    } else {
      setText(children);
    }
  }, [isHovering, children, scramble]);

  return (
    <motion.span
      className={`${className} inline-block`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      whileHover={{ scale: 1.02 }}
    >
      {text}
    </motion.span>
  );
};

export default TextScramble;
