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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#131313]/75 backdrop-blur-xl backdrop-saturate-150 border-b border-white/10 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.5)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        {/* Brand Logo with Mascot Image */}
        <a href="#" className="flex items-center gap-3 group focus:outline-none">
          <div className="w-10 h-10 rounded-full bg-[#201F1F] border border-[#FF6B00]/40 flex items-center justify-center overflow-hidden p-0.5 group-hover:scale-105 transition-transform shadow-md">
            <img src={mascotImg} alt="Mascote Neko" className="w-full h-full object-cover rounded-full" />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-lg tracking-tight text-[#E5E2E1] flex items-center gap-1.5">
              Neko <span className="text-[#FF6B00]">Productivity</span>
            </span>
            <span className="text-[10px] text-[#888888] font-medium tracking-widest uppercase -mt-1">
              Focus & Companion
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7">
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
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenDownload}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FF6B00] text-white text-xs font-bold hover:bg-[#e05e00] hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_20px_rgba(255,107,0,0.35)] cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Baixar App</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-full bg-[#201F1F] border border-[#353534] text-[#E5E2E1] hover:text-[#FF6B00] transition-colors cursor-pointer"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#131313]/98 border-b border-[#2A2A2A] px-5 py-6 space-y-4 backdrop-blur-xl animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold text-[#E5E2E1] hover:text-[#FF6B00] transition-colors py-2 px-3 rounded-xl hover:bg-[#201F1F]"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDownload();
              }}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#FF6B00] text-white text-sm font-bold shadow-[0_0_20px_rgba(255,107,0,0.35)] cursor-pointer"
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
