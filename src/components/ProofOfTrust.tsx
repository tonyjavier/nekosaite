import React from 'react';
import { motion } from 'motion/react';
import { DIFFERENTIALS, TESTIMONIALS } from '../data/contentData';
import { Star, ShieldCheck, Quote } from 'lucide-react';
import { ScrollGlowText } from './ScrollGlowText';

export const ProofOfTrust: React.FC = () => {
  return (
    <section id="prova" className="py-20 md:py-28 bg-[#131313] relative border-t border-[#201F1F] overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] sm:w-[600px] h-[500px] sm:h-[600px] bg-[#FF6B00]/8 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14 md:mb-16">
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
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-12 sm:mb-16">
          {DIFFERENTIALS.map((diff, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.03 }}
              className="px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 hover:border-[#FF6B00]/50 text-xs font-semibold text-[#E5E2E1] flex items-center gap-2 shadow-sm hover:scale-105 transition-all cursor-default"
            >
              <span className="w-2 h-2 rounded-full bg-[#FF6B00] shrink-0" />
              <span>{diff.title}</span>
            </motion.div>
          ))}
        </div>

        {/* Bottom Part: Responsive 3 Testimonials Cards with Liquid Glass Styling */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {TESTIMONIALS.map((test, index) => (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-6 sm:p-7 rounded-3xl bg-white/5 backdrop-blur-xl backdrop-saturate-150 border border-white/15 shadow-[0_10px_30px_rgba(0,0,0,0.4)] flex flex-col justify-between hover:border-[#FF6B00]/50 transition-all duration-300 group relative overflow-hidden h-full ${
                index === 2 ? 'md:col-span-2 lg:col-span-1 md:max-w-md md:mx-auto lg:max-w-none w-full' : ''
              }`}
            >
              {/* Subtle top light highlight specular line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />

              {/* Radial subtle ambient light glow on hover */}
              <div className="absolute -top-12 -left-12 w-28 h-28 bg-[#FF6B00]/10 rounded-full blur-2xl pointer-events-none group-hover:bg-[#FF6B00]/25 transition-all duration-500" />

              <div className="flex-1 flex flex-col">
                {/* Rating Stars & Quote Icon Header */}
                <div className="flex items-center justify-between gap-2 mb-5">
                  <div className="flex items-center gap-1 shrink-0">
                    {[...Array(test.rating || 5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-[#FF6B00] fill-[#FF6B00] shrink-0" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF6B00]/30 group-hover:text-[#FF6B00] transition-colors duration-300 shrink-0" />
                </div>

                {/* Testimonial Headline / Highlight */}
                <h3 className="text-sm sm:text-base font-bold text-[#E5E2E1] mb-3 tracking-tight leading-snug">
                  "{test.highlight}"
                </h3>

                {/* Testimonial Text Body */}
                <div className="mb-6 flex-1">
                  <ScrollGlowText className="text-xs sm:text-sm leading-relaxed italic font-normal text-[#C8C6C5]" delay={index * 0.05}>
                    "{test.text}"
                  </ScrollGlowText>
                </div>
              </div>

              {/* User Avatar & Info Footer */}
              <div className="flex items-center gap-3.5 pt-4 mt-auto border-t border-white/10">
                {test.avatar && test.avatar.startsWith('http') ? (
                  <img
                    src={test.avatar}
                    alt={test.name}
                    className="w-11 h-11 rounded-full object-cover border border-[#FF6B00]/50 shadow-md shrink-0 bg-[#201F1F]"
                  />
                ) : (
                  <div className="w-11 h-11 rounded-full bg-[#FF6B00] text-white font-bold flex items-center justify-center text-sm shadow-md shrink-0">
                    {test.name ? test.name.charAt(0) : 'U'}
                  </div>
                )}
                <div className="min-w-0 flex-1">
                  <div className="text-xs sm:text-sm font-bold text-[#E5E2E1] truncate group-hover:text-[#FFB693] transition-colors">
                    {test.name}
                  </div>
                  <div className="text-[11px] sm:text-xs text-[#888888] truncate">
                    {test.role}
                  </div>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

