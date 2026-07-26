import React from 'react';
import { motion } from 'motion/react';
import { WHY_CHOOSE_ITEMS } from '../data/contentData';
import { CheckSquare, Wallet, Flame, FileText, Timer, CloudCheck, LucideIcon } from 'lucide-react';
import { ScrollGlowText } from './ScrollGlowText';

const iconMap: Record<string, LucideIcon> = {
  CheckSquare,
  Wallet,
  Flame,
  FileText,
  Timer,
  CloudCheck,
};

export const WhyChoose: React.FC = () => {
  return (
    <section id="beneficios" className="py-20 md:py-28 bg-[#131313] relative border-t border-[#201F1F]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#FF6B00]">
            Diferenciais & Vantagens
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#E5E2E1] tracking-tight">
            Por que escolher o <span className="text-[#FF6B00]">Neko Productivity</span>?
          </h2>
          <ScrollGlowText className="text-base font-normal leading-relaxed">
            Esqueça a bagunça de múltiplos aplicativos. Centralizamos todas as suas necessidades diárias em uma experiência coesa, fluida e com um design dark impecável.
          </ScrollGlowText>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_CHOOSE_ITEMS.map((item, index) => {
            const IconComponent = iconMap[item.iconName] || CheckSquare;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group p-6 sm:p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/15 hover:border-[#FF6B00]/60 transition-all duration-300 hover:scale-[1.02] shadow-xl flex flex-col justify-between relative overflow-hidden"
              >
                {/* Top specular edge highlight */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white/10 group-hover:bg-[#FF6B00]/20 border border-white/20 group-hover:border-[#FF6B00]/50 flex items-center justify-center text-[#FF6B00] mb-6 transition-colors shadow-inner">
                    <IconComponent className="w-6 h-6 text-[#FF6B00]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#E5E2E1] mb-3 group-hover:text-[#FFB693] transition-colors">
                    {item.title}
                  </h3>
                  <ScrollGlowText className="text-sm leading-relaxed font-normal" delay={index * 0.05}>
                    {item.description}
                  </ScrollGlowText>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-semibold text-[#FFB693] group-hover:text-[#FF6B00] transition-colors">
                  <span>Recurso Integrado</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
