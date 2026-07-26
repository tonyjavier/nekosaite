import React from 'react';
import { motion } from 'motion/react';
import { DIFFERENTIALS, TESTIMONIALS } from '../data/contentData';
import { Star, ShieldCheck, Quote } from 'lucide-react';
import { ScrollGlowText } from './ScrollGlowText';

export const ProofOfTrust: React.FC = () => {
  return (
    <section id="prova" className="py-20 md:py-28 bg-[#131313] relative border-t border-[#201F1F]">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#FF6B00]/8 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#4CAF50]/10 border border-[#4CAF50]/30 text-[#4CAF50] text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Garantia & Prova de Confiança</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#E5E2E1] tracking-tight">
            Quem experimenta, <span className="text-[#FF6B00]">recomenda</span>.
          </h2>

          <ScrollGlowText className="text-base font-normal leading-relaxed text-center">
            Segurança, velocidade e feedback de pessoas reais que trabalham e estudam usando o Neko Productivity todos os dias.
          </ScrollGlowText>
        </div>

        {/* Top Part: Differentials Horizontal Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
          {DIFFERENTIALS.map((diff, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              className="px-4 py-2.5 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 hover:border-[#FF6B00]/50 text-xs font-semibold text-[#E5E2E1] flex items-center gap-2 shadow-sm hover:scale-105 transition-all cursor-default"
            >
              <span className="w-2 h-2 rounded-full bg-[#FF6B00]" />
              <span>{diff.title}</span>
            </motion.div>
          ))}
        </div>

        {/* Bottom Part: 3 Testimonials Cards with Liquid Glass Styling */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((test, index) => (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-7 rounded-3xl bg-white/5 backdrop-blur-xl backdrop-saturate-150 border border-white/15 shadow-[0_10px_30px_rgba(0,0,0,0.4)] flex flex-col justify-between hover:border-[#FF6B00]/40 transition-all group relative overflow-hidden"
            >
              {/* Subtle top light highlight */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

              <div>
                {/* Rating Stars & Quote Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-[#FF6B00] fill-[#FF6B00]" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#FF6B00]/30 group-hover:text-[#FF6B00] transition-colors" />
                </div>

                <p className="text-sm font-bold text-[#E5E2E1] mb-3">
                  "{test.highlight}"
                </p>

                <ScrollGlowText className="text-xs leading-relaxed italic mb-8 font-normal" delay={index * 0.05}>
                  "{test.text}"
                </ScrollGlowText>
              </div>

              {/* User Avatar & Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                {test.avatar && test.avatar.startsWith('http') ? (
                  <img
                    src={test.avatar}
                    alt={test.name}
                    className="w-10 h-10 rounded-full object-cover border border-[#FF6B00]/40 shadow-md shrink-0"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-[#FF6B00] text-white font-bold flex items-center justify-center text-sm shadow-md shrink-0">
                    {test.name.charAt(0)}
                  </div>
                )}
                <div>
                  <div className="text-xs font-bold text-[#E5E2E1]">{test.name}</div>
                  <div className="text-[10px] text-[#888888]">{test.role}</div>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
