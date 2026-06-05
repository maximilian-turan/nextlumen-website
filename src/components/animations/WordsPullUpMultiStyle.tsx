import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

export interface StyledSegment {
  text: string;
  className?: string;
}

interface WordsPullUpMultiStyleProps {
  segments: StyledSegment[];
  className?: string;
  stagger?: number;
}

/**
 * Like WordsPullUp, but accepts an array of {text, className} segments and
 * preserves each word's className while applying one continuous pull-up
 * stagger across all words. Words wrap inline and stay centered.
 */
export default function WordsPullUpMultiStyle({
  segments,
  className = "",
  stagger = 0.08,
}: WordsPullUpMultiStyleProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  const words: { word: string; className?: string }[] = [];
  segments.forEach((segment) => {
    segment.text
      .split(" ")
      .filter((w) => w.length > 0)
      .forEach((word) => words.push({ word, className: segment.className }));
  });

  return (
    <span
      ref={ref}
      className={`inline-flex flex-wrap justify-center ${className}`}
    >
      {words.map((item, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom">
          <motion.span
            className={`inline-block ${item.className ?? ""}`}
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.6, delay: i * stagger, ease: EASE }}
          >
            {item.word}
            &nbsp;
          </motion.span>
        </span>
      ))}
    </span>
  );
}
