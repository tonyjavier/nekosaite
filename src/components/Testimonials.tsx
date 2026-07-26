import React from 'react';
import { motion } from 'motion/react';
import { TESTIMONIALS } from '../data/contentData';
import { Star, Quote } from 'lucide-react';
import { ScrollGlowText } from './ScrollGlowText';

export const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="py-20 md:py-28 bg-[#131313] relative border-t border-[#201F1F]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#FF6B00]">
            Histórias Reais de Sucesso
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#E5E2E1] tracking-tight">
            Quem usa, <span className="text-[#FF6B00]">recomenda</span>.
          </h2>
          <ScrollGlowText className="text-base font-normal leading-relaxed">
            Veja como o Neko Productivity está ajudando milhares de pessoas a organizarem tarefas, hábitos e finanças diariamente.
          </ScrollGlowText>
        </div>

        {/* Testimonials 3 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((test, index) => (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-[#201F1F] border border-[#2A2A2A] hover:border-[#FF6B00]/50 transition-all duration-300 flex flex-col justify-between relative group hover:scale-[1.02] shadow-lg"
            >
              <Quote className="w-8 h-8 text-[#FF6B00]/20 absolute top-6 right-6" />

              <div>
                {/* 5 Stars Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(test.rating)].map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 text-[#FF6B00] fill-[#FF6B00]" />
                  ))}
                </div>

                <p className="text-sm font-bold text-[#FFB693] mb-3">
                  "{test.highlight}"
                </p>

                <ScrollGlowText className="text-xs leading-relaxed italic mb-8 font-normal" delay={index * 0.05}>
                  "{test.text}"
                </ScrollGlowText>
              </div>

              {/* User Bio */}
              <div className="flex items-center gap-3 pt-4 border-t border-[#2A2A2A]">
                <img
                  src={test.avatar}
                  alt={test.name}
                  className="w-10 h-10 rounded-full object-cover border border-[#353534]"
                />
                <div>
                  <div className="text-sm font-bold text-[#E5E2E1] group-hover:text-[#FF6B00] transition-colors">
                    {test.name}
                  </div>
                  <div className="text-[11px] text-[#888888]">{test.role}</div>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
