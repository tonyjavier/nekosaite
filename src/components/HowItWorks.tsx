import React from 'react';
import { motion } from 'motion/react';
import { HOW_IT_WORKS_STEPS } from '../data/contentData';
import { UserPlus, Sliders, LayoutGrid, TrendingUp, Trophy } from 'lucide-react';
import { ScrollGlowText } from './ScrollGlowText';

const icons = [UserPlus, Sliders, LayoutGrid, TrendingUp, Trophy];

export const HowItWorks: React.FC = () => {
  return (
    <section id="como-funciona" className="py-20 md:py-28 bg-[#131313] relative border-t border-[#201F1F] overflow-hidden">
      
      {/* Curved background ambient glow */}
      <div className="absolute top-1/2 right-1/4 w-[450px] h-[450px] bg-[#FF6B00]/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <span className="text-xs font-bold uppercase tracking-widest text-[#FF6B00]">
            Jornada do Usuário
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#E5E2E1] tracking-tight">
            Como funciona o <span className="text-[#FF6B00]">Neko Productivity</span>?
          </h2>
          <ScrollGlowText className="text-base font-normal leading-relaxed text-center">
            Em menos de 2 minutos você configura sua conta, personaliza seu gato preto e organiza toda a sua semana.
          </ScrollGlowText>
        </div>

        {/* Timeline Container with Organic SVG Path Connector */}
        <div className="relative">
          
          {/* Organic Desktop Path Connector Line */}
          <div className="hidden lg:block absolute top-[52px] left-[8%] right-[8%] h-1 z-0 pointer-events-none">
            <svg className="w-full h-8 overflow-visible" preserveAspectRatio="none" viewBox="0 0 1000 20">
              <path
                d="M 0,10 Q 250,22 500,10 T 1000,10"
                fill="none"
                stroke="url(#gradient-line)"
                strokeWidth="3"
                strokeDasharray="6 6"
              />
              <defs>
                <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FF6B00" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#FFB693" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#FF6B00" stopOpacity="0.8" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* 5 Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative z-10">
            {HOW_IT_WORKS_STEPS.map((step, idx) => {
              const IconComponent = icons[idx];
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="relative group p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-[#FF6B00]/60 transition-all duration-300 hover:scale-[1.03] flex flex-col justify-between shadow-[0_10px_30px_rgba(0,0,0,0.4)]"
                >
                  <div>
                    {/* Step Icon Header */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-xl font-black text-[#FF6B00] font-mono">
                        0{idx + 1}
                      </span>
                      <div className="w-11 h-11 rounded-full bg-[#2A2A2A] text-[#FFB693] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#FF6B00] group-hover:text-white transition-all shadow-md">
                        <IconComponent className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-base font-bold text-[#E5E2E1] mb-2 group-hover:text-[#FFB693] transition-colors">
                      {step.title}
                    </h3>

                    <ScrollGlowText className="text-xs leading-relaxed" delay={idx * 0.04}>
                      {step.description}
                    </ScrollGlowText>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
