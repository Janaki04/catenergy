import React from 'react';
import { motion } from 'framer-motion';
import can from "../../assets/index-can.png";
import cat from "../../assets/index-background-desktop.png";
import Header from '../../components/Header';
import Features from './Features';
import Footer from '../../components/Footer';
import CaseStudy from './CaseStudy';
import { toast } from "react-toastify";

export default function CatEnergyHero() {
  
  const handleCtaClick = () => {
    toast.info('Переход к подбору программы...');
  };

  const titleLineVariants = {
    hidden: { y: "100%" },
    visible: {
      y: 0,
      transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }
    }
  };

  return (
    <>
      <div className="relative min-h-[600px] w-full overflow-hidden bg-white font-oswald md:h-screen max-h-[800px]">
        
        <div className="absolute inset-0 hidden grid-cols-2 md:grid">
          <div className="bg-white" />
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative bg-[#63b843] bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('${cat}')`,
            }}
          />
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-x-0 bottom-0 top-1/2 bg-[#63b843] md:hidden" 
        />

        <div className="relative mx-auto flex h-full max-w-7xl flex-col px-6 py-4 md:px-12 md:py-8">
          <Header />

          <div className="grid flex-1 grid-cols-1 items-center pt-8 md:grid-cols-2 md:pt-0">
            
            <div className="z-10 flex flex-col justify-center space-y-6 text-center md:text-left">
              
              <h1 className="text-4xl font-bold leading-tight tracking-tight text-[#111111] font-[Oswald] sm:text-5xl lg:text-6xl">
                <div className="overflow-hidden" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}>
                  <motion.div initial="hidden" animate="visible" variants={titleLineVariants}>
                    Функциональное
                  </motion.div>
                </div>
                <div className="overflow-hidden" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}>
                  <motion.div initial="hidden" animate="visible" variants={titleLineVariants} transition={{ delay: 0.15 }}>
                    питание для котов
                  </motion.div>
                </div>
              </h1>

              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-sm font-semibold tracking-widest text-[#222222] uppercase"
              >
                Занялся собой? Займись котом!
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55, duration: 0.5 }}
                className="pt-4"
              >
                <motion.button
                  whileHover={{ scale: 1.03, backgroundColor: '#529a37' }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleCtaClick}
                  className="inline-block w-full rounded-sm bg-[#63b843] px-8 py-4 text-center text-base font-bold uppercase tracking-wider text-white shadow-md transition-colors sm:w-auto focus:outline-none"
                >
                  Подобрать программу
                </motion.button>
              </motion.div>
            </div>

            <div className="relative flex h-full items-center justify-center md:justify-start py-8 md:py-0">
              
              <motion.div 
                initial={{ opacity: 0, x: 100, rotate: 5 }}
                animate={{ opacity: 1, x: 0, rotate: 0 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 45, 
                  damping: 12,
                  delay: 0.3 
                }}
                className="z-10 w-[240px] sm:w-[280px] md:w-[320px] lg:w-[360px] xl:w-[400px] md:-ml-20 lg:-ml-28 drop-shadow-2xl cursor-pointer transition-filter duration-300"
              >
                <motion.div
                    animate={{
                        y: [-10, 10, -10], 
                    }}
                    transition={{
                        duration: 3, 
                        repeat: Infinity, 
                        ease: "linear"
                    }}
                    whileHover={{ 
                        scale: 1.05, 
                        rotate: -1,
                        filter: "drop-shadow(0 25px 35px rgba(0,0,0,0.35))" 
                      }}
                >
                    <img 
                    src={can} 
                    alt="Cat Energy Product Can" 
                    className="h-auto w-full object-contain"
                    />
                </motion.div>
              </motion.div>

            </div>

          </div>
        </div>
      </div>
      <Features />
      <CaseStudy />
      <Footer />
    </>
  );
}