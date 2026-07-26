import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Cat, Heart, Sparkles, Fish, Target, Volume2 } from 'lucide-react';
import { mascotImg } from '../assets/images';
import { ScrollGlowText } from './ScrollGlowText';

export const MascotShowcase: React.FC = () => {
  const [mascotStatus, setMascotStatus] = useState<string>('O Neko está pronto para te acompanhar nas tarefas!');
  const [activeReaction, setActiveReaction] = useState<string | null>(null);
  const [purrCount, setPurrCount] = useState<number>(42);

  const handlePet = () => {
    setActiveReaction('heart');
    setPurrCount(prev => prev + 1);
    setMascotStatus(' Purrr... O Neko amou o carinho! Foco aumentado em +10%!');
    setTimeout(() => setActiveReaction(null), 2000);
  };

  const handleFeed = () => {
    setActiveReaction('fish');
    setMascotStatus('🐟 Nhac! Neko alimentado com sucesso. Nível de felicidade: 100%!');
    setTimeout(() => setActiveReaction(null), 2000);
  };

  const handleFocusMode = () => {
    setActiveReaction('target');
    setMascotStatus('🎯 Modo Foco Ativado! Neko está em silêncio absoluto para você produzir.');
    setTimeout(() => setActiveReaction(null), 2000);
  };

  return (
    <section id="mascote" className="py-20 md:py-28 bg-[#131313] relative border-t border-[#201F1F] overflow-hidden">
      
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#FF6B00]/12 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Official Mascot Illustration with Floating Reactions */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 relative flex justify-center"
          >
            
            {/* Mascot Image Container with Floating motion */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
              className="relative group w-full max-w-md rounded-3xl overflow-hidden border-2 border-[#353534] bg-[#1A1A1A] shadow-2xl p-6 transition-all hover:border-[#FF6B00]"
            >
              <img
                src={mascotImg}
                alt="Neko Productivity Mascot - Black Cat Official Illustration"
                className="w-full h-auto rounded-2xl object-contain drop-shadow-[0_10px_25px_rgba(255,107,0,0.2)]"
              />

              {/* Reaction Float Effect */}
              {activeReaction === 'heart' && (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl animate-bounce pointer-events-none">
                  ❤️🐾
                </div>
              )}
              {activeReaction === 'fish' && (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl animate-bounce pointer-events-none">
                  🐟✨
                </div>
              )}
              {activeReaction === 'target' && (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl animate-bounce pointer-events-none">
                  🎯⚡
                </div>
              )}

              {/* Status Ribbon overlay */}
              <div className="mt-4 p-3 rounded-2xl bg-[#131313]/90 backdrop-blur-md border border-[#353534] flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-[#FFB693]">
                  <Cat className="w-4 h-4 text-[#FF6B00]" />
                  <span className="font-bold text-[#E5E2E1]">Gato Preto Companion</span>
                </div>
                <span className="text-[10px] text-[#888888] font-mono">{purrCount} Carinhos recebidos</span>
              </div>
            </motion.div>

          </motion.div>

          {/* Right Column: Copy & Interactive Reaction Buttons */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF6B00]/10 border border-[#FF6B00]/30 text-xs font-bold text-[#FF6B00]">
              <Sparkles className="w-4 h-4" />
              <span>Seu Novo Companheiro de Rotina</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#E5E2E1] tracking-tight">
              Conheça o seu <span className="text-[#FF6B00]">Gato Preto</span> de estimação.
            </h2>

            <ScrollGlowText className="text-base sm:text-lg font-normal leading-relaxed">
              O Neko Productivity foi criado para transformar produtividade em uma experiência leve, divertida e eficiente.
            </ScrollGlowText>

            <ScrollGlowText className="text-sm leading-relaxed" delay={0.1}>
              Enquanto você conclui tarefas e mantém seus hábitos em dia, seu mascote reage às suas conquistas, te encoraja a continuar e celebra cada meta alcançada.
            </ScrollGlowText>

            {/* Live Mascot Status Box */}
            <div className="p-4 rounded-2xl bg-[#201F1F] border border-[#2A2A2A] text-xs font-semibold text-[#FFB693] flex items-center gap-3">
              <Volume2 className="w-5 h-5 text-[#FF6B00] shrink-0" />
              <span>{mascotStatus}</span>
            </div>

            {/* Interactive Buttons */}
            <div className="pt-2 flex flex-wrap gap-3">
              <button
                onClick={handlePet}
                className="px-5 py-2.5 rounded-full bg-[#201F1F] hover:bg-[#FF6B00]/20 border border-[#353534] hover:border-[#FF6B00] text-[#E5E2E1] text-xs font-bold flex items-center gap-2 transition-all cursor-pointer"
              >
                <Heart className="w-4 h-4 text-[#FF4444]" />
                <span>Fazer Carinho 🐾</span>
              </button>

              <button
                onClick={handleFeed}
                className="px-5 py-2.5 rounded-full bg-[#201F1F] hover:bg-[#FF6B00]/20 border border-[#353534] hover:border-[#FF6B00] text-[#E5E2E1] text-xs font-bold flex items-center gap-2 transition-all cursor-pointer"
              >
                <Fish className="w-4 h-4 text-[#FFB693]" />
                <span>Dar Petisco 🐟</span>
              </button>

              <button
                onClick={handleFocusMode}
                className="px-5 py-2.5 rounded-full bg-[#201F1F] hover:bg-[#FF6B00]/20 border border-[#353534] hover:border-[#FF6B00] text-[#E5E2E1] text-xs font-bold flex items-center gap-2 transition-all cursor-pointer"
              >
                <Target className="w-4 h-4 text-[#FF6B00]" />
                <span>Modo Foco 🎯</span>
              </button>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
