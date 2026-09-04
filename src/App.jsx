import React from 'react';
import { HumanAICanvas } from './components/HumanAICanvas';
import { AdminConfigBanner } from './components/AdminConfigBanner';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CountdownTimer } from './components/CountdownTimer';
import { AboutSection } from './components/AboutSection';
import { TracksSection } from './components/TracksSection';
import { TimelineSection } from './components/TimelineSection';
import { PrizesSection } from './components/PrizesSection';
import { RulesSection } from './components/RulesSection';
import { RegistrationForm } from './components/RegistrationForm';
import { FaqSection } from './components/FaqSection';
import { CoordinatorsSection } from './components/CoordinatorsSection';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', background: 'var(--bg-dark)' }}>
      {/* Dynamic Interactive Human x AI Canvas Background */}
      <HumanAICanvas />

      {/* Admin / Committee Helper Banner */}
      <AdminConfigBanner />

      {/* Fixed Navigation Header */}
      <Navbar />

      {/* Main Single-Page Content Sections */}
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <CountdownTimer />
        <AboutSection />
        <TracksSection />
        <TimelineSection />
        <PrizesSection />
        <RulesSection />
        <RegistrationForm />
        <FaqSection />
        <CoordinatorsSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
