import React from 'react';
import image from "../../assets/cat_back.png"
import image1 from "../../assets/cat_back (1).png"
import leaf from "../../assets/icon_leaf.png"
import  tub from "../../assets/icon_tub.png"
import eat from "../../assets/icon_eat.png"
import alarm from "../../assets/icon_alarm.png"

// Mocking SVG / asset icons from the screenshot
const SlimIcon = () => (
  <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-[#63b843]">
    {/* Cat Sitting Silhouette Placeholder */}
    <img src={image}/>
  </div>
);

const ProIcon = () => (
  <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-[#63b843]">
    <img src={image1}/>
  </div>
);

export default function Features() {
  
  const handleProgramClick = (type) => {
    alert(`Переход в каталог: ${type}`);
  };

  const steps = [
    {
      icon: leaf,
      text: "Функциональное питание содержит только полезные питательные вещества.",
    },
    {
      icon: tub,
      text: "Выпускается в виде порошка, который нужно лишь залить кипятком и готово.",
    },
    {
      icon: eat,
      text: "Замените один-два приема обычной еды на наше функциональное питание.",
    },
    {
      icon: alarm,
      text: "Уже через месяц наслаждайтесь изменениями к лучшему вашего питомца!",
    },
  ];

  return (
    <section className="w-full bg-white px-6 py-16 font-oswald md:px-12 lg:px-24">
      <div className="mx-auto max-w-7xl">
        
        {/* SECTION 1: TWO PROGRAM CARDS */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          
          {/* Card 1: Slim */}
          <div className="flex flex-col justify-between bg-[#f2f2f2] p-8 md:p-12">
            <div>
              <div className="flex items-center gap-6">
                <SlimIcon />
                <h3 className="text-2xl font-bold uppercase tracking-wide text-black font-[Oswald] sm:text-3xl">
                  Похудение
                </h3>
              </div>
              <p className="mt-8 text-sm leading-relaxed text-[#444444] sm:text-base">
                Ваш кот весит больше собаки и почти утратил способность лазить по деревьям? Пора на диету! Cat Energy Slim поможет вашему питомцу сбросить лишний вес.
              </p>
            </div>
            <div className="mt-8 border-t border-gray-300 pt-6">
              <button 
                onClick={() => handleProgramClick('Slim')}
                className="group flex items-center gap-4 text-base font-bold uppercase tracking-wider text-black font-[Oswald] hover:opacity-70 transition-opacity"
              >
                Каталог Slim
                <span className="transform transition-transform group-hover:translate-x-2 text-xl">→</span>
              </button>
            </div>
          </div>

          {/* Card 2: Pro */}
          <div className="flex flex-col justify-between bg-[#f2f2f2] p-8 md:p-12">
            <div>
              <div className="flex items-center gap-6">
                <ProIcon />
                <h3 className="text-2xl font-bold uppercase tracking-wide text-black font-[Oswald] sm:text-3xl">
                  Набор массы
                </h3>
              </div>
              <p className="mt-8 text-sm leading-relaxed text-[#444444] sm:text-base">
                Заработать авторитет среди дворовых котов и даже собак? Серия Cat Energy Pro поможет вашему коту нарастить необходимые мышцы!
              </p>
            </div>
            <div className="mt-8 border-t border-gray-300 pt-6">
              <button 
                onClick={() => handleProgramClick('Pro')}
                className="group flex items-center gap-4 text-base font-bold uppercase tracking-wider text-black font-[Oswald] hover:opacity-70 transition-opacity"
              >
                Каталог Pro
                <span className="transform transition-transform group-hover:translate-x-2 text-xl">→</span>
              </button>
            </div>
          </div>

        </div>

        {/* SECTION 2: HOW IT WORKS */}
        <div className="mt-20 md:mt-28">
          <h2 className="text-start text-4xl font-normal text-black font-[Oswald] sm:text-5xl">
            Как это работает
          </h2>

          {/* Responsive 4-Column Grid */}
          <div className="mt-12 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative flex flex-col items-start">
                
                {/* Header visual row with the icon block and massive translucent number */}
                <div className="relative flex w-full items-end justify-between h-20">
                  <div className="flex h-16 w-16 items-center justify-center bg-[#63b843]">
                    <img src={step.icon} alt={step.text} className="h-10 w-10 object-cover" />
                  </div>
                  {/* Huge Number Graphic overlapping background layout */}
                  <span className="absolute right-0 bottom-[-10px] text-8xl font-black text-[#f2f2f2] select-none leading-none font-sans z-0">
                    {index + 1}
                  </span>
                </div>

                {/* Step Text content */}
                <p className="mt-6 text-sm leading-relaxed text-[#444444] z-10 pr-4">
                  {step.text}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}