import React from 'react';
import { motion } from 'motion/react';
import { DIFFERENTIALS } from '../data/contentData';
import { CheckCircle2 } from 'lucide-react';
import { ScrollGlowText } from './ScrollGlowText';

export const Differentials: React.FC = () => {
  return (
    <section id="diferenciais" className="py-20 md:py-24 bg-[#131313] relative border-t border-[#201F1F]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#FF6B00]">
            Por que somos diferentes
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#E5E2E1] tracking-tight">
            Garantia de qualidade <span className="text-[#FF6B00]">Neko</span>.
          </h2>
          <ScrollGlowText className="text-base">
            Detalhes pensados minuciosamente para oferecer a melhor experiência em usabilidade e segurança.
          </ScrollGlowText>
        </div>

        {/* Differentials Horizontal Pills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {DIFFERENTIALS.map((diff, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="p-5 rounded-2xl bg-[#201F1F] border border-[#2A2A2A] hover:border-[#FF6B00]/50 transition-all duration-300 hover:scale-[1.01] flex items-start gap-3.5 group shadow-md"
            >
              <CheckCircle2 className="w-5 h-5 text-[#FF6B00] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
              <div>
                <h3 className="text-sm font-bold text-[#E5E2E1] group-hover:text-[#FFB693] transition-colors">
                  {diff.title}
                </h3>
                <ScrollGlowText className="text-xs mt-1 leading-normal" delay={i * 0.03}>
                  {diff.desc}
                </ScrollGlowText>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
