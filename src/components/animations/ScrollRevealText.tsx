import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";

interface ScrollRevealTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Reveals body text character-by-character as the element scrolls through the
 * viewport. Each character's opacity ramps from 0.2 to 1 based on scroll
 * progress, staggered by its position in the string.
 */
export default function ScrollRevealText({
  text,
  className = "",
  style,
}: ScrollRevealTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"],
  });

  const chars = text.split("");

  return (
    <p ref={ref} className={className} style={style}>
      {chars.map((char, i) => (
        <AnimatedLetter
          key={i}
          char={char}
          index={i}
          total={chars.length}
          progress={scrollYProgress}
        />
      ))}
    </p>
  );
}

interface AnimatedLetterProps {
  char: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
}

function AnimatedLetter({ char, index, total, progress }: AnimatedLetterProps) {
  const charProgress = index / total;
  const opacity = useTransform(
    progress,
    [charProgress - 0.1, charProgress + 0.05],
    [0.2, 1]
  );

  return (
    <motion.span style={{ opacity }}>
      {char === " " ? " " : char}
    </motion.span>
  );
}
