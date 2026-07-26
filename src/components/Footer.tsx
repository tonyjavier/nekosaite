import React from 'react';
import { Heart, Github, Instagram, Mail } from 'lucide-react';
import { mascotImg } from '../assets/images';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onOpenTerms, onOpenContact }) => {
  return (
    <footer className="bg-[#131313] border-t border-[#201F1F] pt-16 pb-12 text-[#888888]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#201F1F]">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#201F1F] border border-[#FF6B00]/40 flex items-center justify-center overflow-hidden p-0.5">
                <img src={mascotImg} alt="Mascote Neko" className="w-full h-full object-cover rounded-full" />
              </div>
              <span className="font-extrabold text-lg tracking-tight text-[#E5E2E1]">
                Neko <span className="text-[#FF6B00]">Productivity</span>
              </span>
            </div>

            <p className="text-xs text-[#888888] leading-relaxed max-w-sm font-normal">
              O aplicativo definitivo de organização pessoal, hábitos, tarefas, finanças e foco em bloco Pomodoro — acompanhado por um inteligente gato preto.
            </p>

            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#201F1F] border border-[#2A2A2A] flex items-center justify-center text-[#888888] hover:text-[#FF6B00] hover:border-[#FF6B00] transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#201F1F] border border-[#2A2A2A] flex items-center justify-center text-[#888888] hover:text-[#FF6B00] hover:border-[#FF6B00] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <button
                onClick={onOpenContact}
                className="w-9 h-9 rounded-full bg-[#201F1F] border border-[#2A2A2A] flex items-center justify-center text-[#888888] hover:text-[#FF6B00] hover:border-[#FF6B00] transition-colors cursor-pointer"
                aria-label="E-mail Contato"
              >
                <Mail className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-bold text-[#E5E2E1] uppercase tracking-wider">
              Navegação
            </div>
            <ul className="space-y-2 text-xs font-medium">
              <li><a href="#por-que-neko" className="hover:text-[#FFB693] transition-colors">Por que Neko</a></li>
              <li><a href="#recursos" className="hover:text-[#FFB693] transition-colors">Recursos do App</a></li>
              <li><a href="#como-funciona" className="hover:text-[#FFB693] transition-colors">Como Funciona</a></li>
              <li><a href="#mascote" className="hover:text-[#FFB693] transition-colors">Mascote Gato Preto</a></li>
              <li><a href="#diferenciais" className="hover:text-[#FFB693] transition-colors">Diferenciais</a></li>
              <li><a href="#depoimentos" className="hover:text-[#FFB693] transition-colors">Depoimentos</a></li>
              <li><a href="#faq" className="hover:text-[#FFB693] transition-colors">FAQ / Suporte</a></li>
            </ul>
          </div>

          {/* Legal Links Column */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-bold text-[#E5E2E1] uppercase tracking-wider">
              Legal & Transparência
            </div>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <button onClick={onOpenPrivacy} className="hover:text-[#FFB693] transition-colors text-left cursor-pointer">
                  Política de Privacidade
                </button>
              </li>
              <li>
                <button onClick={onOpenTerms} className="hover:text-[#FFB693] transition-colors text-left cursor-pointer">
                  Termos de Uso e Serviço
                </button>
              </li>
              <li>
                <button onClick={onOpenContact} className="hover:text-[#FFB693] transition-colors text-left cursor-pointer">
                  Fale com a Equipe Neko
                </button>
              </li>
            </ul>
            <div className="pt-2 text-[11px] text-[#888888]">
              Desenvolvido com Material Design 3 e arquitetura de alto desempenho.
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#888888] gap-4">
          <div>
            © {new Date().getFullYear()} Neko Productivity. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-1.5 text-[11px]">
            <span>Feito com</span>
            <Heart className="w-3.5 h-3.5 text-[#FF4444] fill-[#FF4444]" />
            <span>para impulsionar seu foco diário.</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
