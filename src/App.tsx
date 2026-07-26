/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ChaosSection } from './components/ChaosSection';
import { FeaturesShowcase } from './components/FeaturesShowcase';
import { HowItWorks } from './components/HowItWorks';
import { MascotShowcase } from './components/MascotShowcase';
import { ProofOfTrust } from './components/ProofOfTrust';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

import { DownloadModal } from './components/DownloadModal';
import { ContactModal } from './components/ContactModal';
import { LegalModal } from './components/LegalModals';

export default function App() {
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  const scrollToFeatures = () => {
    const el = document.getElementById('recursos');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#131313] text-[#E5E2E1] selection:bg-[#FF6B00] selection:text-white flex flex-col font-['Inter',sans-serif]">
      
      {/* Sticky Liquid Glass Header Navigation */}
      <Navbar onOpenDownload={() => setDownloadModalOpen(true)} />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* Section 1: Hero + Social Proof Bar */}
        <Hero
          onOpenDownload={() => setDownloadModalOpen(true)}
          onExploreFeatures={scrollToFeatures}
        />

        {/* Section 2: O Caos Antes do Neko (Pain Point) */}
        <ChaosSection />

        {/* Section 3: Recursos (Bento Grid com Screenshot Real) */}
        <FeaturesShowcase />

        {/* Section 4: Como funciona (5 Etapas com Conector Orgânico) */}
        <HowItWorks />

        {/* Section 5: Conheça o Mascote Gato Preto */}
        <MascotShowcase />

        {/* Section 6: Prova de Confiança (Diferenciais + Depoimentos) */}
        <ProofOfTrust />

        {/* Section 7: FAQ (Accordion) */}
        <FAQ />

        {/* Section 8: Chamada Final */}
        <FinalCTA
          onOpenDownload={() => setDownloadModalOpen(true)}
          onOpenContact={() => setContactModalOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenPrivacy={() => setLegalModalType('privacy')}
        onOpenTerms={() => setLegalModalType('terms')}
        onOpenContact={() => setContactModalOpen(true)}
      />

      {/* Interactive Modals */}
      <DownloadModal
        isOpen={downloadModalOpen}
        onClose={() => setDownloadModalOpen(false)}
      />

      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />

      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />

    </div>
  );
}
