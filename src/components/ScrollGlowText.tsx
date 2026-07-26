import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'motion/react';

interface ScrollGlowTextProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: 'white' | 'orange' | 'gold';
  delay?: number;
}

interface WordProps {
  word: string;
  progress: MotionValue<number>;
  start: number;
  end: number;
  glowColor: 'white' | 'orange' | 'gold';
}

const extractText = (node: React.ReactNode): string => {
  if (typeof node === 'string' || typeof node === 'number') {
    return String(node);
  }
  if (Array.isArray(node)) {
    return node.map(extractText).join('');
  }
  if (React.isValidElement(node) && (node.props as { children?: React.ReactNode })?.children) {
    return extractText((node.props as { children?: React.ReactNode }).children);
  }
  return '';
};

const Word: React.FC<WordProps> = ({ word, progress, start, end, glowColor }) => {
  const getGlowShadow = () => {
    switch (glowColor) {
      case 'orange':
        return '0 0 10px rgba(255,107,0,0.9), 0 0 20px rgba(255,107,0,0.5)';
      case 'gold':
        return '0 0 10px rgba(255,215,0,0.9), 0 0 20px rgba(255,165,0,0.5)';
      default:
        return '0 0 10px rgba(255,255,255,0.95), 0 0 20px rgba(255,255,255,0.7), 0 0 30px rgba(255,107,0,0.4)';
    }
  };

  const color = useTransform(progress, [start, end], ['#2a2a2a', '#FFFFFF']);
  const opacity = useTransform(progress, [start, end], [0.25, 1]);
  const textShadow = useTransform(
    progress,
    [start, end],
    ['0 0 0px rgba(0,0,0,0)', getGlowShadow()]
  );
  const scale = useTransform(progress, [start, end], [0.98, 1]);

  return (
    <motion.span
      style={{ color, opacity, textShadow, scale }}
      className="inline-block transition-all duration-75 mr-[0.28em] last:mr-0 select-none"
    >
      {word}
    </motion.span>
  );
};

export const ScrollGlowText: React.FC<ScrollGlowTextProps> = ({
  children,
  className = '',
  glowColor = 'white',
}) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.85', 'start 0.35'],
  });

  const fullText = extractText(children);

  if (!fullText) {
    return <p className={className}>{children}</p>;
  }

  const words = fullText.trim().split(/\s+/);

  return (
    <p ref={containerRef} className={`flex flex-wrap ${className}`}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = Math.min(1, (i + 1) / words.length + 0.12);
        return (
          <Word
            key={i}
            word={word}
            progress={scrollYProgress}
            start={start}
            end={end}
            glowColor={glowColor}
          />
        );
      })}
    </p>
  );
};
