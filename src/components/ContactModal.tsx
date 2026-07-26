import React, { useState } from 'react';
import { X, Mail, Send, CheckCircle2, Cat } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#201F1F] border border-[#353534] rounded-3xl p-6 sm:p-8 shadow-2xl text-[#E5E2E1] space-y-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#2A2A2A] text-[#888888] hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-[#FF6B00]/20 text-[#FF6B00] flex items-center justify-center font-bold border border-[#FF6B00]/30">
            <Mail className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-extrabold text-[#E5E2E1]">
              Fale com a Equipe Neko
            </h3>
            <p className="text-xs text-[#888888]">Sugestões, dúvidas ou suporte técnico</p>
          </div>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-3">
            <CheckCircle2 className="w-12 h-12 text-[#4CAF50] mx-auto animate-bounce" />
            <h4 className="text-lg font-bold text-[#E5E2E1]">Mensagem Enviada!</h4>
            <p className="text-xs text-[#888888]">Obrigado por falar conosco. Responderemos em até 24 horas.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-[#C8C6C5] mb-1.5">Seu Nome</label>
              <input
                type="text"
                required
                placeholder="Ex: Matheus Silva"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-[#353534] border border-[#2A2A2A] rounded-full px-4 py-3 text-xs text-[#E5E2E1] focus:outline-none focus:border-[#FF6B00]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#C8C6C5] mb-1.5">Seu E-mail</label>
              <input
                type="email"
                required
                placeholder="matheus@exemplo.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-[#353534] border border-[#2A2A2A] rounded-full px-4 py-3 text-xs text-[#E5E2E1] focus:outline-none focus:border-[#FF6B00]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#C8C6C5] mb-1.5">Mensagem</label>
              <textarea
                required
                rows={4}
                placeholder="Como podemos te ajudar?"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-[#353534] border border-[#2A2A2A] rounded-2xl p-4 text-xs text-[#E5E2E1] focus:outline-none focus:border-[#FF6B00]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-full bg-[#FF6B00] text-white text-xs font-bold flex items-center justify-center gap-2 hover:bg-[#e05e00] transition-all glow-primary cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Enviar Mensagem</span>
            </button>
          </form>
        )}

      </div>
    </div>
  );
};
