import React from 'react';
import { motion } from 'framer-motion';
import image from "../../assets/cat_back.png";
import image1 from "../../assets/cat_back (1).png";
import leaf from "../../assets/icon_leaf.png";
import tub from "../../assets/icon_tub.png";
import eat from "../../assets/icon_eat.png";
import alarm from "../../assets/icon_alarm.png";
import { toast } from "react-toastify";

const SlimIcon = () => (
  <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-[#63b843] shadow-inner">
    <img src={image} alt="Slim Cat Icon" />
  </div>
);

const ProIcon = () => (
  <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-[#63b843] shadow-inner">
    <img src={image1} alt="Pro Cat Icon" />
  </div>
);

export default function Features() {
  const handleProgramClick = (type) => {
    toast.info(`Переход в каталог: ${type}`);
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

  // Animation variants for the steps grid container
  const stepsContainerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const stepItemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 80, damping: 15 } 
    },
  };

  const largeNumberVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { delay: 0.2, duration: 0.6, ease: "easeOut" } 
    },
  };

  return (
    <section className="w-full bg-white px-6 py-16 font-oswald md:px-12 lg:px-24 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 60, damping: 14 }}
            whileHover={{ y: -4, boxShadow: "0px 12px 30px rgba(0,0,0,0.06)" }}
            className="flex flex-col justify-between bg-[#f2f2f2] p-8 md:p-12 rounded-sm group transition-shadow duration-300"
          >
            <div>
              <div className="flex items-center gap-6">
                <motion.div 
                  className="origin-center"
                  whileHover={{ scale: 1.08, rotate: -3 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <SlimIcon />
                </motion.div>
                <h3 className="text-2xl font-bold uppercase tracking-wide text-black font-[Oswald] sm:text-3xl">
                  Похудение
                </h3>
              </div>
              <p className="mt-8 text-sm leading-relaxed text-[#444444] sm:text-base">
                Ваш кот весит больше собаки и почти утратил способность лазить по деревьям? Пора на диету! Cat Energy Slim поможет вашему питомцу сбросить лишний вес.
              </p>
            </div>
            <div className="mt-8 border-t border-neutral-300 pt-6">
              <button 
                onClick={() => handleProgramClick('Slim')}
                className="group flex items-center gap-4 text-base font-bold uppercase tracking-wider text-black font-[Oswald] transition-colors hover:text-[#63b843]"
              >
                Каталог Slim
                <span className="transform transition-transform group-hover:translate-x-2 text-xl text-[#63b843]">→</span>
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 60, damping: 14 }}
            whileHover={{ y: -4, boxShadow: "0px 12px 30px rgba(0,0,0,0.06)" }}
            className="flex flex-col justify-between bg-[#f2f2f2] p-8 md:p-12 rounded-sm group transition-shadow duration-300"
          >
            <div>
              <div className="flex items-center gap-6">
                <motion.div 
                  className="origin-center"
                  whileHover={{ scale: 1.08, rotate: 3 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <ProIcon />
                </motion.div>
                <h3 className="text-2xl font-bold uppercase tracking-wide text-black font-[Oswald] sm:text-3xl">
                  Набор массы
                </h3>
              </div>
              <p className="mt-8 text-sm leading-relaxed text-[#444444] sm:text-base">
                Заработать авторитет среди дворовых котов и даже собак? Серия Cat Energy Pro поможет вашему коту нарастить необходимые мышцы!
              </p>
            </div>
            <div className="mt-8 border-t border-neutral-300 pt-6">
              <button 
                onClick={() => handleProgramClick('Pro')}
                className="group flex items-center gap-4 text-base font-bold uppercase tracking-wider text-black font-[Oswald] transition-colors hover:text-[#63b843]"
              >
                Каталог Pro
                <span className="transform transition-transform group-hover:translate-x-2 text-xl text-[#63b843]">→</span>
              </button>
            </div>
          </motion.div>

        </div>

        <div className="mt-20 md:mt-28">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-start text-4xl font-normal text-black font-[Oswald] sm:text-5xl"
          >
            Как это работает
          </motion.h2>

          <motion.div 
            variants={stepsContainerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="mt-12 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8"
          >
            {steps.map((step, index) => (
              <motion.div 
                key={index} 
                variants={stepItemVariants}
                className="relative flex flex-col items-start group"
              >
                
                <div className="relative flex w-full items-end justify-between h-20">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="flex h-16 w-16 items-center justify-center bg-[#63b843] shadow-md z-10"
                  >
                    <img src={step.icon} alt="" className="h-10 w-10 object-contain" />
                  </motion.div>
                  
                  <motion.span 
                    variants={largeNumberVariants}
                    className="absolute right-0 bottom-[-10px] text-8xl font-black text-[#f2f2f2] select-none leading-none font-sans z-0 group-hover:text-neutral-200/70 transition-colors duration-300"
                  >
                    {index + 1}
                  </motion.span>
                </div>

                <p className="mt-6 text-sm leading-relaxed text-[#444444] z-10 pr-4">
                  {step.text}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  );
}