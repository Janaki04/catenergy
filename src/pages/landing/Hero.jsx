import React, { useState } from 'react';
import can from "../../assets/index-can.png"
import cat from "../../assets/index-background-desktop.png"
import Header from '../../components/Header';
import Features from './Features';
import Footer from '../../components/Footer';
import CaseStudy from './CaseStudy';

export default function CatEnergyHero() {
 

  const handleCtaClick = () => {
    alert('Переход к подбору программы...');
  };

  return (
    <>
    <div className="relative min-h-[600px] w-full overflow-hidden bg-white font-oswald md:h-screen max-h-[800px]">
      
      {/* Background Split Layout for Desktop */}
      <div className="absolute inset-0 hidden grid-cols-2 md:grid">
        <div className="bg-white" />
        <div 
          className="relative bg-[#63b843] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${cat}')`,
          }}
        />
      </div>

      {/* Mobile Background (Fallback stacked layout) */}
      <div className="absolute inset-x-0 bottom-0 top-1/2 bg-[#63b843] md:hidden" />

      {/* Main Content Container */}
      <div className="relative mx-auto flex h-full max-w-7xl flex-col px-6 py-4 md:px-12 md:py-8">
    <Header/>

        {/* Hero Body Content */}
        <div className="grid flex-1 grid-cols-1 items-center pt-8 md:grid-cols-2 md:pt-0">
          
          {/* Left Text Column */}
          <div className="z-10 flex flex-col justify-center space-y-6 text-center md:text-left">
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-[#111111] font-[Oswald] sm:text-5xl lg:text-6xl">
              Функциональное <br />
              питание для котов
            </h1>
            <p className="text-sm font-semibold tracking-widest text-[#222222] uppercase">
              Занялся собой? Займись котом!
            </p>
            <div className="pt-4">
              <button
                onClick={handleCtaClick}
                className="inline-block w-full rounded-sm bg-[#63b843] px-8 py-4 text-center text-base font-bold uppercase tracking-wider text-white shadow-md transition-colors hover:bg-[#529a37] active:bg-[#437e2e] sm:w-auto"
              >
                Подобрать программу
              </button>
            </div>
          </div>

          {/* Right Product Image Column (FIXED & ALIGNED) */}
          <div className="relative flex h-full items-center justify-center md:justify-start py-8 md:py-0">
            

            {/* Product Can wrapper pulling it left to breach the background line split */}
            <div className="z-10 w-[240px] sm:w-[280px] md:w-[320px] lg:w-[360px] xl:w-[400px] md:-ml-20 lg:-ml-28 transition-transform duration-300 hover:scale-105 drop-shadow-2xl">
              <img 
                src={can} 
                alt="Cat Energy Product Can" 
                className="h-auto w-full object-contain"
              />
            </div>

          </div>

        </div>
      </div>
    </div>
    <Features/>
    <CaseStudy/>
    <Footer/>
    </>
  );
}