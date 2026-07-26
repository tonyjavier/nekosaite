import React, { useState } from 'react';
import { X, Download, QrCode, Smartphone, CheckCircle, Cat, Sparkles, ArrowRight } from 'lucide-react';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DownloadModal: React.FC<DownloadModalProps> = ({ isOpen, onClose }) => {
  const [downloading, setDownloading] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [downloadFinished, setDownloadFinished] = useState(false);

  if (!isOpen) return null;

  const handleStartDownload = () => {
    setDownloading(true);
    setDownloadProgress(10);

    const timer1 = setTimeout(() => setDownloadProgress(45), 400);
    const timer2 = setTimeout(() => setDownloadProgress(80), 800);
    const timer3 = setTimeout(() => {
      setDownloadProgress(100);
      setDownloading(false);
      setDownloadFinished(true);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#201F1F] border border-[#353534] rounded-3xl p-6 sm:p-8 shadow-2xl text-[#E5E2E1] space-y-6">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#2A2A2A] text-[#888888] hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-[#FF6B00] text-white flex items-center justify-center font-bold shadow-lg glow-primary">
            <Cat className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-extrabold text-[#E5E2E1]">
              Baixar Neko Productivity
            </h3>
            <p className="text-xs text-[#888888]">Versão 3.0.4 · Android 8.0+ (APK 28 MB)</p>
          </div>
        </div>

        {/* QR Code Scan Section */}
        <div className="p-5 rounded-2xl bg-[#131313] border border-[#2A2A2A] flex flex-col sm:flex-row items-center gap-5">
          <div className="w-32 h-32 bg-white p-2 rounded-2xl flex items-center justify-center shrink-0 shadow-md">
            {/* Custom SVG QR Code Representation */}
            <svg viewBox="0 0 100 100" className="w-full h-full text-black fill-current">
              <rect x="0" y="0" width="100" height="100" fill="white" />
              <rect x="10" y="10" width="30" height="30" fill="black" />
              <rect x="15" y="15" width="20" height="20" fill="white" />
              <rect x="20" y="20" width="10" height="10" fill="black" />
              
              <rect x="60" y="10" width="30" height="30" fill="black" />
              <rect x="65" y="15" width="20" height="20" fill="white" />
              <rect x="70" y="20" width="10" height="10" fill="black" />

              <rect x="10" y="60" width="30" height="30" fill="black" />
              <rect x="15" y="65" width="20" height="20" fill="white" />
              <rect x="20" y="70" width="10" height="10" fill="black" />

              <rect x="50" y="50" width="10" height="10" fill="black" />
              <rect x="70" y="50" width="15" height="15" fill="black" />
              <rect x="50" y="70" width="20" height="20" fill="black" />
              <rect x="75" y="75" width="15" height="15" fill="black" />
            </svg>
          </div>

          <div className="space-y-2 text-center sm:text-left">
            <div className="text-xs font-bold text-[#FFB693] flex items-center justify-center sm:justify-start gap-1.5">
              <QrCode className="w-4 h-4 text-[#FF6B00]" />
              <span>Escaneie para instalar no celular</span>
            </div>
            <p className="text-xs text-[#888888] leading-relaxed">
              Aponte a câmera do seu smartphone para escanear o QR Code e iniciar o download diretamente no seu dispositivo.
            </p>
          </div>
        </div>

        {/* Download Direct APK Section */}
        <div className="space-y-3">
          {!downloadFinished ? (
            <button
              disabled={downloading}
              onClick={handleStartDownload}
              className="w-full py-4 rounded-full bg-[#FF6B00] text-white text-sm font-bold flex items-center justify-center gap-2 hover:bg-[#e05e00] transition-all glow-primary cursor-pointer disabled:opacity-80"
            >
              <Download className="w-5 h-5" />
              <span>{downloading ? `Baixando APK... (${downloadProgress}%)` : 'Baixar arquivo APK Direto'}</span>
            </button>
          ) : (
            <div className="p-4 rounded-2xl bg-[#4CAF50]/10 border border-[#4CAF50]/40 text-[#4CAF50] text-center space-y-1">
              <div className="flex items-center justify-center gap-2 font-bold text-sm">
                <CheckCircle className="w-5 h-5" />
                <span>Download do Neko-v3.0.apk concluído!</span>
              </div>
              <div className="text-xs text-[#888888]">
                Abra a pasta de downloads no seu Android para concluir a instalação.
              </div>
            </div>
          )}

          {downloading && (
            <div className="w-full bg-[#131313] h-2 rounded-full overflow-hidden border border-[#2A2A2A]">
              <div
                className="bg-[#FF6B00] h-full transition-all duration-300 rounded-full"
                style={{ width: `${downloadProgress}%` }}
              />
            </div>
          )}
        </div>

        {/* Store Links info */}
        <div className="text-center text-[11px] text-[#888888] pt-2 border-t border-[#2A2A2A]">
          🔒 Instalação segura verificada pelo Google Play Protect. Sem permissões abusivas.
        </div>

      </div>
    </div>
  );
};
