import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import Methodology from './components/Methodology';
import About from './components/About';
import SocialProof from './components/SocialProof';
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
      <ServicesApply />
      <Footer />
    </div>
  );
};

export default App;