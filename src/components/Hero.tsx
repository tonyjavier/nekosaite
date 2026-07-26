import React from 'react';
import { motion } from 'motion/react';
import { Download, ChevronRight, Star, Flame, Cat, ShieldCheck, Sparkles } from 'lucide-react';
import { heroDashboardImg, mascotImg } from '../assets/images';
import { ScrollGlowText } from './ScrollGlowText';

interface HeroProps {
  onOpenDownload: () => void;
  onExploreFeatures: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDownload, onExploreFeatures }) => {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-[#131313]">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#FF6B00]/12 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[380px] h-[380px] bg-[#FFB693]/8 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Copy, CTAs, Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Tag Badge with Liquid Glass */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 backdrop-blur-xl backdrop-saturate-150 border border-white/15 text-xs font-semibold text-[#FFB693] shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
              <span className="w-2 h-2 rounded-full bg-[#FF6B00] animate-pulse" />
              <img src={mascotImg} alt="Mascote Neko" className="w-5 h-5 rounded-full object-cover border border-[#FF6B00]/40" />
              <span>Neko Productivity V3.0 · Focus & Companion</span>
            </div>

            {/* Display Hero Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#E5E2E1] tracking-tight leading-[1.1]">
              Organize sua vida. <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#FFB693] to-[#FF6B00]">
                Um objetivo por vez.
              </span>
            </h1>

            {/* Body Subtitle with Scroll Glow Word-by-Word Animation */}
            <ScrollGlowText
              className="text-base sm:text-lg font-normal leading-relaxed max-w-2xl"
              glowColor="white"
            >
              Trabalho, estudo, contas e hábitos — tudo espalhado, e o dia nunca rende. O Neko Productivity junta tarefas, hábitos, finanças, notas, agenda e foco num só app, feito para quem vive numa rotina corrida e não pode se perder. E o melhor: você não organiza sozinho, tem um gato preto te acompanhando em cada progresso.
            </ScrollGlowText>

            {/* CTA Buttons Block */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenDownload}
                className="px-8 py-4 rounded-full bg-[#FF6B00] text-white text-sm font-bold flex items-center justify-center gap-3 hover:bg-[#e05e00] hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_25px_rgba(255,107,0,0.35)] cursor-pointer group"
              >
                <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
                <span>Baixar para Android</span>
              </button>

              <button
                onClick={onExploreFeatures}
                className="px-7 py-4 rounded-full bg-white/5 border border-white/15 hover:border-[#FF6B00] text-[#E5E2E1] hover:text-white text-sm font-semibold flex items-center justify-center gap-2 hover:bg-white/10 backdrop-blur-xl transition-all cursor-pointer group shadow-lg"
              >
                <span>Explorar Recursos</span>
                <ChevronRight className="w-4 h-4 text-[#FF6B00] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* STATS GRID CONTAINER */}
            <div className="pt-6 border-t border-[#201F1F]">
              <div className="grid grid-cols-3 gap-4 sm:gap-6 bg-[#201F1F]/80 p-4 sm:p-6 rounded-2xl border border-[#2A2A2A]">
                
                {/* Column 1: Downloads */}
                <div className="flex flex-col space-y-1">
                  <span className="text-2xl sm:text-3xl font-extrabold text-[#E5E2E1] tracking-tight">
                    50.000+
                  </span>
                  <span className="text-xs sm:text-sm text-[#888888] font-medium">
                    Downloads ativos
                  </span>
                </div>

                {/* Column 2: Rating */}
                <div className="flex flex-col space-y-1 border-l border-[#2A2A2A] pl-4 sm:pl-6">
                  <div className="flex items-center gap-1.5">
                    <span className="text-2xl sm:text-3xl font-extrabold text-[#E5E2E1] tracking-tight">
                      4.9
                    </span>
                    <Star className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF6B00] fill-[#FF6B00]" />
                  </div>
                  <span className="text-xs sm:text-sm text-[#888888] font-medium">
                    Avaliação na loja
                  </span>
                </div>

                {/* Column 3: Focus Increase */}
                <div className="flex flex-col space-y-1 border-l border-[#2A2A2A] pl-4 sm:pl-6">
                  <span className="text-2xl sm:text-3xl font-extrabold text-[#FF6B00] tracking-tight">
                    98%
                  </span>
                  <span className="text-xs sm:text-sm text-[#888888] font-medium">
                    Aumento de foco
                  </span>
                </div>

              </div>
            </div>

          </motion.div>

          {/* Right Column: Smartphone Frame with REAL App Screenshot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
            className="lg:col-span-5 relative flex flex-col justify-center items-center"
          >
            {/* Phone Container Ambient Radial Glow */}
            <div className="absolute w-[340px] h-[550px] bg-gradient-to-tr from-[#FF6B00]/25 via-[#FF6B00]/10 to-transparent rounded-[60px] blur-3xl pointer-events-none" />

            {/* Smartphone Outer Frame */}
            <div className="relative w-[300px] sm:w-[330px] bg-[#0A0A0A] p-3 sm:p-3.5 rounded-[46px] border-[5px] border-[#353534] shadow-[0_20px_50px_rgba(0,0,0,0.8)] z-10 hover:border-[#5A4136] transition-all duration-300">
              
              {/* Speaker & Sensor Notch */}
              <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-4 bg-[#181818] rounded-full z-30 flex items-center justify-center gap-2 border border-[#2A2A2A]">
                <div className="w-8 h-1 bg-[#353534] rounded-full" />
                <div className="w-2 h-2 rounded-full bg-[#111]" />
              </div>

              {/* Inner Screen Displaying REAL App Screenshot */}
              <div className="w-full h-[580px] sm:h-[620px] rounded-[38px] overflow-hidden bg-[#000000] border border-[#2A2A2A] relative group">
                <img
                  src={heroDashboardImg}
                  alt="Neko Productivity App Real Screen - Dashboard Início"
                  className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-500"
                />
              </div>

            </div>

            {/* FLOATING BADGE 1: Mascot Companion (Top Left) */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="absolute -top-4 -left-4 sm:-left-8 z-20"
            >
              <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-xl backdrop-saturate-150 border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.5)] flex items-center gap-3 hover:scale-105 hover:border-[#FF6B00] transition-all duration-300">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-[#FF6B00]/50 bg-[#131313] shrink-0">
                  <img src={mascotImg} alt="Divo do Gatinho" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="text-xs font-extrabold text-[#E5E2E1]">Divo do Gatinho 🐾</div>
                  <div className="text-[10px] text-[#FFB693] font-medium">Nível 8 · XP 620/1000</div>
                </div>
              </div>
            </motion.div>

            {/* FLOATING BADGE 2: Streak (Bottom Right) */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
              className="absolute -bottom-6 -right-4 sm:-right-8 z-20"
            >
              <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-xl backdrop-saturate-150 border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.5)] flex items-center gap-3 hover:scale-105 hover:border-[#FF6B00] transition-all duration-300">
                <div className="w-9 h-9 rounded-full bg-[#FF6B00]/20 border border-[#FF6B00]/40 flex items-center justify-center text-[#FF6B00]">
                  <Flame className="w-5 h-5 fill-[#FF6B00]" />
                </div>
                <div>
                  <div className="text-xs font-extrabold text-[#E5E2E1]">14 Dias de Sequência</div>
                  <div className="text-[10px] text-[#FFB693]">Foco Imparável 🔥</div>
                </div>
              </div>
            </motion.div>

            {/* FLOATING BADGE 3: Offline Sync (Top Right) */}
            <div className="absolute top-20 -right-6 sm:-right-10 z-20 hidden sm:flex">
              <div className="p-2.5 rounded-full bg-white/10 backdrop-blur-xl backdrop-saturate-150 border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.5)] flex items-center gap-2 px-3.5">
                <ShieldCheck className="w-4 h-4 text-[#4CAF50]" />
                <span className="text-[11px] font-bold text-[#E5E2E1]">Offline First 100%</span>
              </div>
            </div>

          </motion.div>

        </div>
      </div>

    </section>
  );
};
