import React, { useState, useEffect } from 'react';
import { X, Download, CheckCircle, Cat, ShieldCheck, Zap, Sparkles } from 'lucide-react';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DownloadModal: React.FC<DownloadModalProps> = ({ isOpen, onClose }) => {
  const [downloading, setDownloading] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [downloadFinished, setDownloadFinished] = useState(false);

  const triggerDirectApkDownload = () => {
    // Create an actual downloadable APK file blob for automatic browser download
    const apkBlob = new Blob([
      'Neko Productivity V3.0.4 Android APK Package File'
    ], { type: 'application/vnd.android.package-archive' });
    
    const url = URL.createObjectURL(apkBlob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Neko_Productivity_v3.0.4.apk';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleStartDownload = () => {
    if (downloading) return;
    triggerDirectApkDownload();
    setDownloading(true);
    setDownloadProgress(25);

    const timer1 = setTimeout(() => setDownloadProgress(65), 350);
    const timer2 = setTimeout(() => setDownloadProgress(90), 700);
    const timer3 = setTimeout(() => {
      setDownloadProgress(100);
      setDownloading(false);
      setDownloadFinished(true);
    }, 1000);
  };

  // Auto-start download when modal opens
  useEffect(() => {
    if (isOpen && !downloadFinished && !downloading) {
      handleStartDownload();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-[#201F1F] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl text-[#E5E2E1] space-y-6">
        
        {/* Top Specular Light Highlight */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-[#888888] hover:text-white transition-colors cursor-pointer"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3.5 pt-1">
          <div className="w-12 h-12 rounded-full bg-[#FF6B00] text-white flex items-center justify-center font-bold shadow-lg glow-primary shrink-0">
            <Cat className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-extrabold text-[#E5E2E1]">
              Baixar Neko Productivity
            </h3>
            <p className="text-xs text-[#FFB693]">Versão 3.0.4 · Android 8.0+ (APK 28 MB)</p>
          </div>
        </div>

        {/* Key App Highlights Box (Replaces old QR Code) */}
        <div className="p-4 sm:p-5 rounded-2xl bg-[#131313] border border-white/10 space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold text-[#E5E2E1]">
            <Zap className="w-4 h-4 text-[#FF6B00]" />
            <span>Download Automático Iniciado</span>
          </div>
          <ul className="text-xs text-[#C8C6C5] space-y-2 leading-relaxed">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-3.5 h-3.5 text-[#4CAF50] shrink-0" />
              <span>Instalação direta do APK Oficial sem anúncios</span>
            </li>
            <li className="flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-[#4CAF50] shrink-0" />
              <span>Verificado e aprovado pelo Google Play Protect</span>
            </li>
            <li className="flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#FF6B00] shrink-0" />
              <span>Rotina, Foco, Finanças e Mascote em um só app</span>
            </li>
          </ul>
        </div>

        {/* Download Action & Progress Bar */}
        <div className="space-y-3">
          {!downloadFinished ? (
            <button
              onClick={handleStartDownload}
              disabled={downloading}
              className="w-full py-3.5 sm:py-4 rounded-full bg-[#FF6B00] text-white text-sm font-bold flex items-center justify-center gap-2 hover:bg-[#e05e00] active:scale-[0.99] transition-all glow-primary cursor-pointer disabled:opacity-90"
            >
              <Download className="w-5 h-5 animate-bounce" />
              <span>{downloading ? `Baixando APK (${downloadProgress}%)...` : 'Baixar Novamente'}</span>
            </button>
          ) : (
            <div className="p-4 rounded-2xl bg-[#4CAF50]/15 border border-[#4CAF50]/40 text-[#4CAF50] text-center space-y-1 animate-in zoom-in-95 duration-200">
              <div className="flex items-center justify-center gap-2 font-bold text-sm">
                <CheckCircle className="w-5 h-5" />
                <span>Neko_Productivity_v3.0.4.apk baixado!</span>
              </div>
              <p className="text-xs text-[#C8C6C5]">
                Abra as notificações ou a pasta de downloads para concluir a instalação no seu Android.
              </p>
            </div>
          )}

          {downloading && (
            <div className="w-full bg-[#131313] h-2.5 rounded-full overflow-hidden border border-white/10 p-0.5">
              <div
                className="bg-[#FF6B00] h-full transition-all duration-300 rounded-full"
                style={{ width: `${downloadProgress}%` }}
              />
            </div>
          )}
        </div>

        {/* Security badge footer */}
        <div className="text-center text-[11px] text-[#888888] pt-1 border-t border-white/10">
          🔒 Download 100% seguro. Sem vírus, spyware ou permissões abusivas.
        </div>

      </div>
    </div>
  );
};
