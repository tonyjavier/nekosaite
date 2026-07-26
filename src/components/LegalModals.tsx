import React from 'react';
import { X, ShieldCheck, FileText } from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const isPrivacy = type === 'privacy';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#201F1F] border border-[#353534] rounded-3xl p-6 sm:p-8 shadow-2xl text-[#E5E2E1] space-y-6 max-h-[85vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#2A2A2A] text-[#888888] hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#FF6B00]/20 text-[#FF6B00] flex items-center justify-center font-bold">
            {isPrivacy ? <ShieldCheck className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
          </div>
          <h3 className="text-xl font-extrabold text-[#E5E2E1]">
            {isPrivacy ? 'Política de Privacidade' : 'Termos de Uso e Serviço'}
          </h3>
        </div>

        {/* Body Text */}
        <div className="space-y-4 text-xs text-[#C8C6C5] leading-relaxed">
          {isPrivacy ? (
            <>
              <p>
                <strong>1. Compromisso de Privacidade:</strong> O Neko Productivity respeita profundamente a privacidade dos seus dados. Operamos sob o modelo <em>Offline First</em>, onde suas tarefas, notas e hábitos permanecem armazenados prioritariamente no seu dispositivo local.
              </p>
              <p>
                <strong>2. Coleta de Dados:</strong> Coletamos apenas informações essenciais necessárias para sincronização em nuvem (como e-mail e nome cadastrado via Google Auth ou formulário direto).
              </p>
              <p>
                <strong>3. Armazenamento Seguro:</strong> Todas as requisições para a infraestrutura de nuvem (Supabase) usam criptografia SSL/TLS e padrão AES-256 no banco de dados. Nunca comercializamos seus dados com terceiros.
              </p>
              <p>
                <strong>4. Seus Direitos:</strong> Você pode solicitar a exclusão completa da sua conta e dados de sincronização a qualquer momento através do aplicativo no menu Perfil.
              </p>
            </>
          ) : (
            <>
              <p>
                <strong>1. Aceitação dos Termos:</strong> Ao baixar e utilizar o Neko Productivity, você concorda com os presentes Termos de Serviço.
              </p>
              <p>
                <strong>2. Uso do Serviço:</strong> O aplicativo é disponibilizado para uso pessoal e profissional de organização. Você concorda em não tentar realizar engenharia reversa nos serviços de sincronização em nuvem.
              </p>
              <p>
                <strong>3. Atualizações e Recursos:</strong> Reservamo-nos o direito de aprimorar, modificar ou lançar atualizações de recursos do Neko Productivity com o objetivo de melhorar a experiência do usuário.
              </p>
              <p>
                <strong>4. Suporte:</strong> Nossa equipe está disponível para auxiliar na solução de qualquer contratempo técnico ou dúvida sobre usabilidade do aplicativo.
              </p>
            </>
          )}
        </div>

        {/* Action Button */}
        <div className="pt-4 border-t border-[#2A2A2A] text-right">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-[#FF6B00] text-white text-xs font-bold hover:bg-[#e05e00] transition-colors cursor-pointer"
          >
            Entendido
          </button>
        </div>

      </div>
    </div>
  );
};
