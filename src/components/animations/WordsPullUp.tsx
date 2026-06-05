import { CSSProperties, useRef } from "react";
import { motion, useInView } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

interface WordsPullUpProps {
  text: string;
  className?: string;
  style?: CSSProperties;
  /** Adds a superscript asterisk after the last character of the final word. */
  showAsterisk?: boolean;
  /** Per-word stagger delay in seconds. */
  stagger?: number;
}

/**
 * Splits `text` by spaces and slides each word up from y:20 with a staggered
 * delay. Triggered once when scrolled into view.
 */
export default function WordsPullUp({
  text,
  className = "",
  style,
  showAsterisk = false,
  stagger = 0.08,
}: WordsPullUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const words = text.split(" ");

  return (
    <span ref={ref} className={className} style={style}>
      {words.map((word, i) => {
        const isLast = i === words.length - 1;
        return (
          <span key={i} className="inline-block overflow-hidden align-bottom">
            <motion.span
              className="inline-block"
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.6, delay: i * stagger, ease: EASE }}
            >
              {isLast && showAsterisk ? (
                <>
                  {word.slice(0, -1)}
                  <span className="relative inline-block">
                    {word.slice(-1)}
                    <span className="absolute top-[0.65em] -right-[0.3em] text-[0.31em]">
                      *
                    </span>
                  </span>
                </>
              ) : (
                word
              )}
              {!isLast && " "}
            </motion.span>
          </span>
        );
      })}
    </span>
  );
}
