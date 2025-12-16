import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import Methodology from './components/Methodology';
import About from './components/About';
import SocialProof from './components/SocialProof';
import Testimonials from './components/Testimonials';
import LatestInsights from './components/LatestInsights';
import LearnConnect from './components/LearnConnect';
import ServicesApply from './components/ServicesApply';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ProblemSolution />
      <Methodology />
      <About />
      <SocialProof />
      <Testimonials />
      <LatestInsights />
      <LearnConnect />
      <ServicesApply />
      <Footer />
    </div>
  );
};

export default App;