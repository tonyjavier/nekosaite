import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Download, ChevronRight, Star, Flame, Cat, ShieldCheck, Play, Pause, Volume2, VolumeX, X, Smartphone, Film } from 'lucide-react';
import { heroDashboardImg, mascotImg } from '../assets/images';
import { ScrollGlowText } from './ScrollGlowText';

interface HeroProps {
  onOpenDownload: () => void;
  onExploreFeatures: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDownload, onExploreFeatures }) => {
  const [activeMedia, setActiveMedia] = useState<'screenshot' | 'video'>('video');
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const modalVideoRef = useRef<HTMLVideoElement>(null);

  // High quality sample mobile app UI demo video URL
  const demoVideoUrl = "https://assets.mixkit.co/videos/preview/mixkit-mobile-app-interface-animation-43093-large.mp4";

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

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

            {/* CTA Buttons Block with ample spacing */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenDownload}
                className="px-8 py-4 rounded-full bg-[#FF6B00] text-white text-sm font-bold flex items-center justify-center gap-3 hover:bg-[#e05e00] hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_25px_rgba(255,107,0,0.35)] cursor-pointer group"
              >
                <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
                <span>Baixar para Android</span>
              </button>

              <button
                onClick={() => setIsVideoModalOpen(true)}
                className="px-7 py-4 rounded-full bg-white/5 border border-white/15 hover:border-[#FF6B00] text-[#E5E2E1] hover:text-white text-sm font-semibold flex items-center justify-center gap-2.5 hover:bg-white/10 backdrop-blur-xl transition-all cursor-pointer group shadow-lg"
              >
                <div className="w-6 h-6 rounded-full bg-[#FF6B00] text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-3 h-3 fill-white ml-0.5" />
                </div>
                <span>Assistir Vídeo Demo</span>
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

          {/* Right Column: Smartphone Frame with REAL App Screenshot or Video Demo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
            className="lg:col-span-5 relative flex flex-col justify-center items-center"
          >
            {/* Phone Container Ambient Radial Glow */}
            <div className="absolute w-[340px] h-[550px] bg-gradient-to-tr from-[#FF6B00]/25 via-[#FF6B00]/10 to-transparent rounded-[60px] blur-3xl pointer-events-none" />

            {/* Media Selector Pills: Screenshot vs Video */}
            <div className="mb-4 z-20 flex items-center gap-1 p-1 rounded-full bg-white/10 backdrop-blur-xl border border-white/15 shadow-md">
              <button
                onClick={() => setActiveMedia('video')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeMedia === 'video'
                    ? 'bg-[#FF6B00] text-white shadow-sm'
                    : 'text-[#C8C6C5] hover:text-white'
                }`}
              >
                <Film className="w-3.5 h-3.5" />
                <span>Vídeo Demo</span>
              </button>
              <button
                onClick={() => setActiveMedia('screenshot')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeMedia === 'screenshot'
                    ? 'bg-[#FF6B00] text-white shadow-sm'
                    : 'text-[#C8C6C5] hover:text-white'
                }`}
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span>Tela Início</span>
              </button>
            </div>

            {/* Smartphone Outer Frame */}
            <div className="relative w-[300px] sm:w-[330px] bg-[#0A0A0A] p-3 sm:p-3.5 rounded-[46px] border-[5px] border-[#353534] shadow-[0_20px_50px_rgba(0,0,0,0.8)] z-10 hover:border-[#5A4136] transition-all duration-300">
              
              {/* Speaker & Sensor Notch */}
              <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-4 bg-[#181818] rounded-full z-30 flex items-center justify-center gap-2 border border-[#2A2A2A]">
                <div className="w-8 h-1 bg-[#353534] rounded-full" />
                <div className="w-2 h-2 rounded-full bg-[#111]" />
              </div>

              {/* Inner Screen Displaying REAL App Screenshot OR Video */}
              <div className="w-full h-[580px] sm:h-[620px] rounded-[38px] overflow-hidden bg-[#000000] border border-[#2A2A2A] relative group">
                {activeMedia === 'video' ? (
                  <div className="relative w-full h-full bg-[#131313]">
                    <video
                      ref={videoRef}
                      src={demoVideoUrl}
                      poster={heroDashboardImg}
                      autoPlay
                      loop
                      muted={isMuted}
                      playsInline
                      className="w-full h-full object-cover object-center"
                    />

                    {/* Video Overlay Controls */}
                    <div className="absolute bottom-4 left-3 right-3 p-3 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-between text-white z-20">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={togglePlay}
                          className="w-8 h-8 rounded-full bg-[#FF6B00] flex items-center justify-center text-white hover:scale-105 transition-transform cursor-pointer"
                          title={isPlaying ? 'Pausar' : 'Reproduzir'}
                        >
                          {isPlaying ? <Pause className="w-4 h-4 fill-white" /> : <Play className="w-4 h-4 fill-white ml-0.5" />}
                        </button>
                        <span className="text-[11px] font-bold text-[#E5E2E1]">
                          {isPlaying ? 'Em reprodução' : 'Pausado'}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={toggleMute}
                          className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                          title={isMuted ? 'Ativar som' : 'Desativar som'}
                        >
                          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-[#FF6B00]" />}
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <img
                    src={heroDashboardImg}
                    alt="Neko Productivity App Real Screen - Dashboard Início"
                    className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-500"
                  />
                )}
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

      {/* FULL VIDEO MODAL */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setIsVideoModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-[#1A1A1A] border border-[#353534] rounded-3xl overflow-hidden shadow-2xl p-4 sm:p-6 space-y-4"
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-[#2A2A2A] pb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#FF6B00]/20 border border-[#FF6B00]/40 flex items-center justify-center text-[#FF6B00]">
                    <Film className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#E5E2E1]">Demonstração Neko Productivity</h3>
                    <p className="text-xs text-[#888888]">Conheça a experiência de uso do aplicativo em ação</p>
                  </div>
                </div>

                <button
                  onClick={() => setIsVideoModalOpen(false)}
                  className="p-2 rounded-full bg-[#252525] text-[#888] hover:text-white hover:bg-[#333] transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Video Player */}
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black border border-[#2A2A2A]">
                <video
                  ref={modalVideoRef}
                  src={demoVideoUrl}
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Footer Note */}
              <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-[#888888] pt-2 gap-3">
                <span className="flex items-center gap-1.5 text-[#FFB693]">
                  <Cat className="w-4 h-4 text-[#FF6B00]" />
                  <span>Sua rotina simples, organizada e leve com seu mascote companheiro.</span>
                </span>
                <button
                  onClick={() => {
                    setIsVideoModalOpen(false);
                    onOpenDownload();
                  }}
                  className="px-5 py-2 rounded-full bg-[#FF6B00] text-white font-bold hover:bg-[#e05e00] transition-colors cursor-pointer"
                >
                  Baixar Aplicativo
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

