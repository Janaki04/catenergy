import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import imagebefore from "../../assets/before-mobile 1.png";
import imageafter from "../../assets/After.png";

export default function CaseStudy() {
  const [sliderPos, setSliderPos] = useState(50);

  const setToBefore = () => {
    let current = sliderPos;
    const interval = setInterval(() => {
      if (current <= 0) clearInterval(interval);
      else {
        current = Math.max(0, current - 4);
        setSliderPos(current);
      }
    }, 10);
  };

  const setToAfter = () => {
    let current = sliderPos;
    const interval = setInterval(() => {
      if (current >= 100) clearInterval(interval);
      else {
        current = Math.min(100, current + 4);
        setSliderPos(current);
      }
    }, 10);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
  };

  return (
    <section className="relative w-full bg-[#f2f2f2] pt-12 pb-16 font-oswald md:bg-white md:pt-20 md:pb-24 overflow-hidden">
      
      <div className="absolute inset-x-0 bottom-0 top-[30%] bg-[#f2f2f2] hidden md:block z-0" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-12 lg:px-24 z-10">
        
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-10 md:mb-20 text-left"
        >
          <h2 className="text-4xl font-normal text-black font-[Oswald] sm:text-5xl tracking-wide">
            Живой пример
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-12 lg:gap-16">
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col justify-between space-y-8 lg:col-span-5 lg:py-6"
          >
            <motion.p variants={itemVariants} className="text-base leading-relaxed text-[#444444] text-center md:text-left">
              Борис сбросил 5 кг за 2 месяца, просто заменив свой обычный корм на Cat Energy Slim. 
              Отличный результат без изнуряющих тренировок! При этом он не менял своих привычек 
              и по-прежнему спит по 16 часов в день.
            </motion.p>

            <div className="flex justify-center gap-6 md:justify-start">
              <motion.div 
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
                className="relative w-36 rounded-sm border border-gray-200 bg-white py-4 px-2 text-center md:bg-[#f2f2f2] shadow-sm transition-shadow duration-300 hover:shadow"
              >
                <span className="block text-2xl font-bold uppercase text-black font-[Oswald] sm:text-3xl">5 кг</span>
                <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#f2f2f2] md:bg-white px-2 text-[10px] uppercase tracking-wider text-[#444444] whitespace-nowrap">
                  снижение веса
                </span>
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
                className="relative w-36 rounded-sm border border-gray-200 bg-white py-4 px-2 text-center md:bg-[#f2f2f2] shadow-sm transition-shadow duration-300 hover:shadow"
              >
                <span className="block text-2xl font-bold uppercase text-black font-[Oswald] sm:text-3xl">60 дней</span>
                <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#f2f2f2] md:bg-white px-2 text-[10px] uppercase tracking-wider text-[#444444] whitespace-nowrap">
                  затрачено времени
                </span>
              </motion.div>
            </div>

            <motion.div variants={itemVariants} className="pt-4 text-center md:text-left flex flex-col sm:flex-row sm:items-center gap-3 justify-center md:justify-start">
              <span className="text-base font-bold uppercase tracking-wide text-black font-[Oswald]">
                Затраты на питание:
              </span>
              <span className="text-base font-bold uppercase tracking-wide text-[#63b843] font-[Oswald] text-lg">
                15 000 руб.
              </span>
            </motion.div>
          </motion.div>

          <div className="flex flex-col items-center justify-center lg:col-span-7">
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 60, delay: 0.2 }}
              className="relative h-[250px] w-[280px] overflow-hidden sm:h-[360px] sm:w-[450px] md:h-[460px] md:w-[540px] rounded-sm shadow-xl bg-white"
            >
              <div 
                className="absolute inset-y-0 left-0 h-full overflow-hidden border-r border-transparent z-10 select-none pointer-events-none" 
                style={{ width: `${sliderPos}%` }}
              >
                <img 
                  src={imagebefore} 
                  alt="Before Cat" 
                  className="absolute inset-y-0 left-0 h-full max-w-none object-contain" 
                  style={{ width: '100%' }} 
                />
              </div>
              
              <div 
                className="absolute inset-y-0 right-0 h-full overflow-hidden select-none pointer-events-none"
                style={{ left: `${sliderPos}%`, width: `${100 - sliderPos}%` }}
              >
                <img 
                  src={imageafter} 
                  alt="After Cat" 
                  className="absolute inset-y-0 right-0 h-full max-w-none object-contain object-right"
                  style={{ 
                    width: '100%',
                    left: `-${sliderPos}%`
                  }}
                />
              </div>
            </motion.div>

            <div className="mt-8 flex w-full max-w-[430px] items-center justify-center gap-6 px-4">
              <button 
                onClick={setToBefore}
                className="text-sm font-bold uppercase tracking-wider text-black font-[Oswald] hover:text-[#63b843] transition-colors focus:outline-none"
              >
                Было
              </button>

              <div className="relative flex flex-1 items-center group">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliderPos}
                  onChange={(e) => setSliderPos(Number(e.target.value))}
                  className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-neutral-300 focus:outline-none"
                  style={{
                    background: `linear-gradient(to right, #63b843 0%, #63b843 ${sliderPos}%, #e5e7eb ${sliderPos}%, #e5e7eb 100%)`
                  }}
                />
                
                <div 
                  className="absolute h-5 w-5 rounded-full border-2 border-[#63b843] bg-white shadow-md flex items-center justify-center pointer-events-none transform -translate-x-1/2 group-hover:scale-110 transition-transform duration-150"
                  style={{ left: `${sliderPos}%` }}
                >
                  <div className="h-2 w-2 rounded-full bg-[#63b843]" />
                </div>
              </div>

              <button 
                onClick={setToAfter}
                className="text-sm font-bold uppercase tracking-wider text-black font-[Oswald] hover:text-[#63b843] transition-colors focus:outline-none"
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