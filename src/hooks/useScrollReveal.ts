import { useRef } from 'react';
import { useScroll, useTransform, MotionValue } from 'motion/react';

interface UseScrollRevealOptions {
  offset?: [string, string];
  inputRange?: [number, number];
  startColor?: string;
  endColor?: string;
  startOpacity?: number;
  endOpacity?: number;
}

export interface WordScrollAnimation {
  color: MotionValue<string>;
  opacity: MotionValue<number>;
  textShadow: MotionValue<string>;
  scale: MotionValue<number>;
}

export function useScrollReveal(
  wordsCount: number,
  options: UseScrollRevealOptions = {}
) {
  const containerRef = useRef<HTMLParagraphElement | HTMLDivElement>(null);

  const {
    offset = ['start 0.85', 'start 0.35'],
    startColor = '#3a3a3a',
    endColor = '#FFFFFF',
    startOpacity = 0.2,
    endOpacity = 1.0,
  } = options;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: offset as [any, any],
  });

  const getGlowShadow = () =>
    '0 0 10px rgba(255,255,255,0.9), 0 0 20px rgba(255,107,0,0.4)';

  const wordAnimations: WordScrollAnimation[] = Array.from({ length: wordsCount }, (_, i) => {
    const start = i / Math.max(1, wordsCount);
    const end = Math.min(1, (i + 1) / Math.max(1, wordsCount) + 0.15);

    const color = useTransform(scrollYProgress, [start, end], [startColor, endColor]);
    const opacity = useTransform(scrollYProgress, [start, end], [startOpacity, endOpacity]);
    const textShadow = useTransform(
      scrollYProgress,
      [start, end],
      ['0 0 0px rgba(0,0,0,0)', getGlowShadow()]
    );
    const scale = useTransform(scrollYProgress, [start, end], [0.98, 1]);

    return { color, opacity, textShadow, scale };
  });

  return {
    containerRef,
    scrollYProgress,
    wordAnimations,
  };
}
