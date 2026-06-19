import React, { useState } from 'react';
import imagebefore from "../../assets/before-mobile 1.png";
import imageafter from "../../assets/After.png";


export default function CaseStudy() {
  const [sliderPos, setSliderPos] = useState(30);

  const setToBefore = () => setSliderPos(0);
  const setToAfter = () => setSliderPos(100);

  return (
    <section className="relative w-full bg-[#f2f2f2] pt-12 pb-16 font-oswald md:bg-white md:pt-20 md:pb-24 overflow-hidden">
      
      {/* Desktop Horizontal Split Ribbon Background Layer */}
      <div className="absolute inset-x-0 bottom-0 top-[30%] bg-[#f2f2f2] hidden md:block z-0" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-12 lg:px-24 z-10">
        
        {/* Title Block */}
        <div className="mb-10 md:mb-20 text-left">
          <h2 className="text-4xl font-normal text-black font-[Oswald] sm:text-5xl tracking-wide">
            Живой пример
          </h2>
        </div>

        {/* Two-Column Responsive Layout Grid */}
        <div className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-12 lg:gap-16">
          
          {/* Left Text & Stats Column */}
          <div className="flex flex-col justify-between space-y-8 lg:col-span-5 lg:py-6">
            <p className="text-base leading-relaxed text-[#444444] text-center md:text-left">
              Борис сбросил 5 кг за 2 месяца, просто заменив свой обычный корм на Cat Energy Slim. 
              Отличный результат без изнуряющих тренировок! При этом он не менял своих привычек 
              и по-прежнему спит по 16 часов в день.
            </p>

            {/* Metrics Spacing Grid */}
            <div className="flex justify-center gap-6 md:justify-start">
              {/* Weight Card */}
              <div className="relative w-36 rounded-sm border border-gray-200 bg-white py-4 px-2 text-center md:bg-[#f2f2f2]">
                <span className="block text-2xl font-bold uppercase text-black font-[Oswald] sm:text-3xl">5 кг</span>
                <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#f2f2f2] md:bg-white px-2 text-[10px] uppercase tracking-wider text-[#444444] whitespace-nowrap">
                  снижение веса
                </span>
              </div>
              
              {/* Days Card */}
              <div className="relative w-36 rounded-sm border border-gray-200 bg-white py-4 px-2 text-center md:bg-[#f2f2f2]">
                <span className="block text-2xl font-bold uppercase text-black font-[Oswald] sm:text-3xl">60 дней</span>
                <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#f2f2f2] md:bg-white px-2 text-[10px] uppercase tracking-wider text-[#444444] whitespace-nowrap">
                  затрачено времени
                </span>
              </div>
            </div>

            {/* Price Row */}
            <div className="pt-4 text-center md:text-left flex flex-col sm:flex-row sm:items-center gap-3 justify-center md:justify-start">
              <span className="text-base font-bold uppercase tracking-wide text-black font-[Oswald]">
                Затраты на питание:
              </span>
              <span className="text-base font-bold uppercase tracking-wide text-neutral-800 font-[Oswald]">
                15 000 руб.
              </span>
            </div>
          </div>

          {/* Right Slider Image Window Column */}
          <div className="flex flex-col items-center justify-center lg:col-span-7">
            
            {/* Aspect container keeping images flawlessly aligned */}
            <div className="relative h-[250px] w-[280px] overflow-hidden sm:h-[360px] sm:w-[450px] md:h-[460px] md:w-[540px]">
              
              {/* Left Cat Slice Window (Before State) */}
              <div 
                className="absolute inset-y-0 left-0 h-full overflow-hidden" 
                style={{ width: `${sliderPos}%` }}
              >
                <img 
                  src={imagebefore} 
                  alt="Before Cat" 
                  className="absolute inset-y-0 left-0 h-full max-w-none object-cover" 
                  style={{ width: '100%' }} 
                />
              </div>
              
              {/* Right Cat Slice Window (After State) */}
              <div 
                className="absolute inset-y-0 right-0 h-full overflow-hidden"
                style={{ left: `${sliderPos}%`, width: `${100 - sliderPos}%` }}
              >
                <img 
                  src={imageafter} 
                  alt="After Cat" 
                  className="absolute inset-y-0 right-0 h-full max-w-none object-cover object-right"
                  style={{ 
                    width: '100%',
                    left: `-${sliderPos}%`
                  }}
                />
              </div>

            </div>

            {/* Slider Control Handle */}
            <div className="mt-8 flex w-full max-w-[430px] items-center justify-center gap-6 px-4">
              <button 
                onClick={setToBefore}
                className="text-sm font-bold uppercase tracking-wider text-black font-[Oswald] hover:opacity-70 transition-opacity"
              >
                Было
              </button>

              <div className="relative flex flex-1 items-center">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliderPos}
                  onChange={(e) => setSliderPos(Number(e.target.value))}
                  className="h-1 w-full cursor-pointer appearance-none rounded-full bg-gray-300 focus:outline-none"
                  style={{
                    background: `linear-gradient(to right, #63b843 0%, #63b843 ${sliderPos}%, #e5e7eb ${sliderPos}%, #e5e7eb 100%)`
                  }}
                />
                
                {/* Visual Pin Handle Selector */}
                <div 
                  className="absolute h-5 w-5 rounded-full border-2 border-gray-300 bg-white shadow-md flex items-center justify-center pointer-events-none transform -translate-x-1/2 transition-all duration-75"
                  style={{ left: `${sliderPos}%` }}
                >
                  <div className="h-2 w-2 rounded-full bg-[#63b843]" />
                </div>
              </div>

              <button 
                onClick={setToAfter}
                className="text-sm font-bold uppercase tracking-wider text-black font-[Oswald] hover:opacity-70 transition-opacity"
              >
                Стало
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}