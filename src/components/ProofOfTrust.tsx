import React from 'react';
import { motion } from 'motion/react';
import { DIFFERENTIALS, TESTIMONIALS, APP_BENEFITS_COMPARISON } from '../data/contentData';
import { Star, ShieldCheck, Quote, Zap, WifiOff, Cat, Eye, Sparkles, CheckCircle2, XCircle, ArrowRight, Award } from 'lucide-react';
import { ScrollGlowText } from './ScrollGlowText';

export const ProofOfTrust: React.FC = () => {
  // Helper to resolve icon components dynamically
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Zap':
        return <Zap className="w-5 h-5 text-[#FF6B00]" />;
      case 'WifiOff':
        return <WifiOff className="w-5 h-5 text-[#FF6B00]" />;
      case 'Cat':
        return <Cat className="w-5 h-5 text-[#FF6B00]" />;
      case 'Eye':
        return <Eye className="w-5 h-5 text-[#FF6B00]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#FF6B00]" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#FF6B00]" />;
      default:
        return <Award className="w-5 h-5 text-[#FF6B00]" />;
    }
  };

  return (
    <section id="prova" className="py-20 md:py-28 bg-[#131313] relative border-t border-[#201F1F] overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] bg-[#FF6B00]/8 rounded-full blur-[160px] pointer-events-none" />

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

          <p className="text-base sm:text-lg font-medium leading-relaxed text-[#C8C6C5] max-w-2xl mx-auto">
            Veja por que o Neko Productivity é a escolha ideal para simplificar sua rotina, proteger sua mente do cansaço e garantir alta performance diária.
          </p>
        </div>

        {/* SECTION 1: Key Benefits Cards (Por que o Neko é Muito Melhor) */}
        <div id="diferenciais" className="mb-16 sm:mb-20 scroll-mt-28">
          <div className="text-center mb-8">
            <span className="text-xs font-extrabold tracking-widest text-[#FFB693] uppercase">
              Vantagens Exclusivas
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#E5E2E1] mt-1">
              Por que o Neko é muito melhor?
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {DIFFERENTIALS.map((diff, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/12 hover:border-[#FF6B00]/50 transition-all duration-300 shadow-md group relative overflow-hidden flex flex-col justify-between"
              >
                {/* Top highlight specular line */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#FF6B00]/15 border border-[#FF6B00]/30 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      {renderIcon(diff.icon)}
                    </div>
                    {diff.badge && (
                      <span className="px-2.5 py-1 rounded-full bg-[#FF6B00]/10 border border-[#FF6B00]/30 text-[10px] font-bold text-[#FFB693]">
                        {diff.badge}
                      </span>
                    )}
                  </div>

                  <h4 className="text-base font-bold text-[#E5E2E1] mb-2 group-hover:text-[#FFB693] transition-colors">
                    {diff.title}
                  </h4>

                  <p className="text-xs text-[#A8A6A5] leading-relaxed">
                    {diff.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* SECTION 2: Before vs After Comparison Box */}
        <div className="mb-16 sm:mb-20">
          {APP_BENEFITS_COMPARISON.map((comp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-3xl bg-white/5 backdrop-blur-2xl border border-white/15 p-6 sm:p-10 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#FF6B00]/10 rounded-full blur-3xl pointer-events-none" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Left: The Old Frustrating Way */}
                <div className="space-y-4 p-5 sm:p-6 rounded-2xl bg-[#181818]/80 border border-white/10">
                  <div className="flex items-center gap-2 text-[#FF4444] font-bold text-sm uppercase tracking-wider">
                    <XCircle className="w-5 h-5 shrink-0" />
                    <span>{comp.before}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#A8A6A5] leading-relaxed">
                    {comp.beforeDesc}
                  </p>
                </div>

                {/* Right: The Neko Transformation */}
                <div className="space-y-4 p-5 sm:p-6 rounded-2xl bg-[#FF6B00]/10 border border-[#FF6B00]/40 relative">
                  <div className="flex items-center gap-2 text-[#FF6B00] font-bold text-sm uppercase tracking-wider">
                    <CheckCircle2 className="w-5 h-5 shrink-0 text-[#FF6B00]" />
                    <span>{comp.after}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#E5E2E1] leading-relaxed">
                    {comp.afterDesc}
                  </p>

                  <ul className="space-y-2 pt-2 border-t border-[#FF6B00]/20">
                    {comp.benefits.map((benefit, bIdx) => (
                      <li key={bIdx} className="flex items-center gap-2 text-xs font-semibold text-[#FFB693]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#4CAF50] shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* SECTION 3: Responsive Testimonials Cards with Humanized Story Context */}
        <div id="depoimentos" className="scroll-mt-28">
          <div className="text-center mb-8">
            <span className="text-xs font-extrabold tracking-widest text-[#FFB693] uppercase">
              Depoimentos Reais
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#E5E2E1] mt-1">
              Histórias de quem transformou a rotina
            </h3>
          </div>

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
                  <p className="text-xs sm:text-sm leading-relaxed italic font-normal text-[#C8C6C5] mb-6 flex-1">
                    "{test.text}"
                  </p>
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

      </div>
    </section>
  );
};


