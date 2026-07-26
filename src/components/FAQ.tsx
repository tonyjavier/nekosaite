import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQ_ITEMS } from '../data/contentData';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { ScrollGlowText } from './ScrollGlowText';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('sync');

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#131313] relative border-t border-[#201F1F]">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#FF6B00]">
            Perguntas Frequentes
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#E5E2E1] tracking-tight">
            Ficou com alguma <span className="text-[#FF6B00]">dúvida</span>?
          </h2>
          <ScrollGlowText className="text-base font-normal leading-relaxed text-center">
            Confira as respostas para as perguntas mais comuns sobre o Neko Productivity.
          </ScrollGlowText>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-all overflow-hidden relative shadow-lg ${
                  isOpen
                    ? 'bg-white/10 backdrop-blur-2xl border-[#FF6B00]/60 shadow-[0_8px_25px_rgba(255,107,0,0.15)]'
                    : 'bg-white/5 backdrop-blur-xl border-white/15 hover:border-[#FF6B00]/40'
                }`}
              >
                {/* Top specular highlight edge */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

                <button
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="text-base font-bold text-[#E5E2E1] flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-[#FF6B00] shrink-0" />
                    <span>{item.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#888888] transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180 text-[#FF6B00]' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="px-5 sm:px-6 pb-6 pt-0 text-sm text-[#E5E2E1] leading-relaxed border-t border-white/10"
                    >
                      <div className="pt-3">
                        <ScrollGlowText className="text-sm text-[#C8C6C5] leading-relaxed" delay={idx * 0.02}>
                          {item.answer}
                        </ScrollGlowText>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

