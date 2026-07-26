import React from 'react';
import { motion } from 'motion/react';
import { FileSpreadsheet, CheckSquare, BrainCircuit, Smartphone, AlertTriangle, ArrowRight } from 'lucide-react';
import { ScrollGlowText } from './ScrollGlowText';

export const ChaosSection: React.FC = () => {
  return (
    <section id="por-que-neko" className="py-20 md:py-28 relative overflow-hidden bg-[#131313] border-t border-[#201F1F]">
      {/* Dark Ambient Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FF4444]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF4444]/10 border border-[#FF4444]/20 text-[#FF4444] text-xs font-bold uppercase tracking-wider">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>O Caos da Rotina Moderna</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#E5E2E1] tracking-tight">
            Sua rotina não devia ser um <span className="text-[#FF4444]">quebra-cabeça</span>.
          </h2>

          <ScrollGlowText className="text-base sm:text-lg font-normal leading-relaxed text-center">
            Você estuda, trabalha, cuida das contas e tenta manter a vida em dia. Mas os afazeres ficam espalhados em papéis, no WhatsApp, em três aplicativos diferentes e na sua cabeça. No fim do dia, a sensação é sempre a mesma: você correu o dia todo, mas parece que não saiu do lugar.
          </ScrollGlowText>
        </div>

        {/* Intentionally Scattered / Chaotic Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          
          {/* Card 1: Tarefas no papel / blocos soltos */}
          <motion.div
            initial={{ opacity: 0, y: 20, rotate: -2 }}
            whileInView={{ opacity: 1, y: 0, rotate: -1.5 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/15 shadow-xl hover:border-[#FF4444]/60 transition-all group relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
            <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-[#888] group-hover:text-[#FF4444] mb-4">
              <CheckSquare className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#E5E2E1] mb-2">
              Listas de Tarefas Perdidas
            </h3>
            <ScrollGlowText className="text-xs leading-relaxed" delay={0.05}>
              Post-its amarelados na mesa, cadernos esquecidos na mochila e anotações no bloco de notas que você nunca mais lê.
            </ScrollGlowText>
          </motion.div>

          {/* Card 2: Finanças sem controle */}
          <motion.div
            initial={{ opacity: 0, y: 20, rotate: 2 }}
            whileInView={{ opacity: 1, y: 0, rotate: 1.5 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/15 shadow-xl hover:border-[#FF4444]/60 transition-all group lg:translate-y-4 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
            <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-[#888] group-hover:text-[#FF4444] mb-4">
              <FileSpreadsheet className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#E5E2E1] mb-2">
              Planilhas Confusas
            </h3>
            <ScrollGlowText className="text-xs leading-relaxed" delay={0.1}>
              Gastos não anotados, surpresas no final do mês e a incerteza constante de quanto sobrou para fechar a conta.
            </ScrollGlowText>
          </motion.div>

          {/* Card 3: Dispersão e Distrações */}
          <motion.div
            initial={{ opacity: 0, y: 20, rotate: -1 }}
            whileInView={{ opacity: 1, y: 0, rotate: -1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/15 shadow-xl hover:border-[#FF4444]/60 transition-all group relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
            <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-[#888] group-hover:text-[#FF4444] mb-4">
              <Smartphone className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#E5E2E1] mb-2">
              Foco Desfragmentado
            </h3>
            <ScrollGlowText className="text-xs leading-relaxed" delay={0.15}>
              Tentativas de foco interrompidas por notificações, redes sociais e falta de cronograma bem definido.
            </ScrollGlowText>
          </motion.div>

          {/* Card 4: Cansaço mental */}
          <motion.div
            initial={{ opacity: 0, y: 20, rotate: 2 }}
            whileInView={{ opacity: 1, y: 0, rotate: 2 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/15 shadow-xl hover:border-[#FF4444]/60 transition-all group lg:translate-y-4 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
            <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-[#888] group-hover:text-[#FF4444] mb-4">
              <BrainCircuit className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#E5E2E1] mb-2">
              Sobrecarga de Informação
            </h3>
            <ScrollGlowText className="text-xs leading-relaxed" delay={0.2}>
              Lembrar datas, compromissos e obrigações apenas pela memória causa estresse e sensação constante de atraso.
            </ScrollGlowText>
          </motion.div>

        </div>

        {/* Transition Bridge to Neko Solution */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-xs font-semibold text-[#FFB693] shadow-lg">
            <span>Chega de desorganização. O Neko Productivity unifica tudo para você.</span>
            <ArrowRight className="w-4 h-4 text-[#FF6B00]" />
          </div>
        </div>

      </div>
    </section>
  );
};
