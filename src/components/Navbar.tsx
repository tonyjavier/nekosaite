import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { mascotImg } from '../assets/images';

interface NavbarProps {
  onOpenDownload: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDownload }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Por que Neko', href: '#por-que-neko' },
    { name: 'Recursos', href: '#recursos' },
    { name: 'Como Funciona', href: '#como-funciona' },
    { name: 'Mascote', href: '#mascote' },
    { name: 'Diferenciais', href: '#diferenciais' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="fixed top-3 sm:top-4 left-1/2 -translate-x-1/2 w-[calc(100%-1.5rem)] sm:w-[calc(100%-2.5rem)] max-w-7xl z-50 transition-all duration-300">
      <div
        className={`w-full rounded-2xl sm:rounded-full transition-all duration-300 px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between border relative overflow-hidden ${
          isScrolled
            ? 'bg-[#131313]/80 backdrop-blur-2xl backdrop-saturate-150 border-white/20 shadow-[0_12px_40px_rgba(0,0,0,0.6)]'
            : 'bg-white/10 backdrop-blur-xl backdrop-saturate-150 border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.4)]'
        }`}
      >
        {/* Top subtle specular light reflection */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />

        {/* Brand Logo with Mascot Image */}
        <a href="#" className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none shrink-0">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#201F1F] border border-[#FF6B00]/40 flex items-center justify-center overflow-hidden p-0.5 group-hover:scale-105 transition-transform shadow-md">
            <img src={mascotImg} alt="Mascote Neko" className="w-full h-full object-cover rounded-full" />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-base sm:text-lg tracking-tight text-[#E5E2E1] flex items-center gap-1.5">
              Neko <span className="text-[#FF6B00]">Productivity</span>
            </span>
            <span className="text-[9px] sm:text-[10px] text-[#888888] font-medium tracking-widest uppercase -mt-1">
              Focus & Companion
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-semibold text-[#E5E2E1] hover:text-[#FFB693] transition-colors py-1 relative group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF6B00] transition-all duration-200 group-hover:w-full rounded-full" />
            </a>
          ))}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
          <button
            onClick={onOpenDownload}
            className="hidden sm:inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#FF6B00] text-white text-xs font-bold hover:bg-[#e05e00] hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_20px_rgba(255,107,0,0.35)] cursor-pointer"
          >
            <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>Baixar App</span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 sm:p-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-[#E5E2E1] hover:text-[#FF6B00] transition-colors cursor-pointer"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation (Translucent Glass Card) */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 rounded-2xl bg-[#181818]/95 backdrop-blur-2xl border border-white/15 p-5 space-y-4 shadow-[0_16px_40px_rgba(0,0,0,0.7)] animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold text-[#E5E2E1] hover:text-[#FF6B00] transition-colors py-2.5 px-3.5 rounded-xl hover:bg-white/10 active:bg-white/15"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="pt-2 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDownload();
              }}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#FF6B00] text-white text-sm font-bold shadow-[0_0_20px_rgba(255,107,0,0.35)] hover:bg-[#e05e00] transition-all cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Baixar Neko Productivity</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
