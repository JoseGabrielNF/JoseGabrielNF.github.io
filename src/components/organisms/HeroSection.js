import React from 'react';
import CountdownTimer from '../molecules/CountdownTimer';

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="hero text-white py-20 md:py-32"
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Seminário de Tecnologia Assistiva
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Voltada para a Educação nos Tempos de Inteligência Artificial
        </h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          9 a 12 de setembro de 2025 | UFMS, Campo Grande - MS
        </p>

        <CountdownTimer />
      </div>
    </section>
  );
};

export default HeroSection;
