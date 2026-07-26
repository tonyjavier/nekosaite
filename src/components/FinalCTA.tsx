import React from 'react';
import { motion } from 'motion/react';
import { Download, Mail, CheckCircle } from 'lucide-react';
import { mascotImg } from '../assets/images';
import { ScrollGlowText } from './ScrollGlowText';

interface FinalCTAProps {
  onOpenDownload: () => void;
  onOpenContact: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenDownload, onOpenContact }) => {
  return (
    <section className="py-20 md:py-28 bg-[#131313] relative border-t border-[#201F1F] overflow-hidden">
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#FF6B00]/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-5 sm:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="p-8 sm:p-14 rounded-3xl bg-white/5 backdrop-blur-xl backdrop-saturate-150 border border-white/15 shadow-[0_20px_60px_rgba(0,0,0,0.6)] text-center space-y-8 hover:border-[#FF6B00]/40 transition-all relative overflow-hidden"
        >
          {/* Top specular edge highlight */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
          
          <div className="w-20 h-20 rounded-full bg-[#FF6B00]/20 border border-[#FF6B00]/40 flex items-center justify-center mx-auto shadow-lg overflow-hidden p-1">
            <img src={mascotImg} alt="Mascote Neko" className="w-full h-full object-cover rounded-full" />
          </div>

          <div className="space-y-4 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#E5E2E1] tracking-tight leading-tight">
              Pronto para organizar <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#FFB693] to-[#FF6B00]">
                sua vida com facilidade?
              </span>
            </h2>

            <ScrollGlowText className="text-base sm:text-lg font-normal leading-relaxed">
              Junte-se a mais de 50.000 pessoas que transformaram tarefas, hábitos e finanças em uma jornada simples e agradável.
            </ScrollGlowText>
          </div>

          {/* Quick Checkpoints */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-xs sm:text-sm text-[#E5E2E1]">
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-[#FF6B00]" />
              100% Gratuito
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-[#FF6B00]" />
              Funciona Offline
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-[#FF6B00]" />
              Sem Anúncios
            </span>
          </div>

          {/* Action Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
            <button
              onClick={onOpenDownload}
              className="w-full sm:w-auto px-10 py-4 rounded-full bg-[#FF6B00] text-white text-base font-bold flex items-center justify-center gap-3 hover:bg-[#e05e00] hover:scale-[1.03] active:scale-[0.98] transition-all shadow-[0_0_25px_rgba(255,107,0,0.35)] cursor-pointer"
            >
              <Download className="w-5 h-5" />
              <span>Baixar aplicativo agora</span>
            </button>

            <button
              onClick={onOpenContact}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-transparent border border-[#2E2E2E] hover:border-[#FF6B00]/60 text-[#E5E2E1] hover:text-white text-base font-semibold flex items-center justify-center gap-2 hover:bg-[#201F1F] transition-all cursor-pointer"
            >
              <Mail className="w-5 h-5 text-[#888888]" />
              <span>Entrar em contato</span>
            </button>
          </div>

        </motion.div>
      </div>
    </section>
  );
};
