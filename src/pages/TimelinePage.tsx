import React from 'react';
import { PrimaryButton } from '../components/PrimaryButton';
import { birthdayData } from '../data/birthdayData';
import { motion } from 'framer-motion';

export const TimelinePage: React.FC<{ onNext: () => void }> = ({ onNext }) => {
  const { timeline } = birthdayData;

  return (
    <div className="flex flex-col h-full p-6 sm:p-10">
      <header className="border-b-2 border-gray-300 pb-5 mb-8 shrink-0">
        <h1 className="font-mono text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">HỒ SƠ TIẾN TRIỂN</h1>
        <p className="font-mono text-sm opacity-60 mt-2 tracking-widest">CASE HISTORY</p>
      </header>

      <div className="flex-1 overflow-y-auto no-scrollbar relative">
        <div className="absolute left-[27px] top-4 bottom-4 w-0.5 bg-[#FF2DBC]/20 hidden sm:block" />
        
        <div className="space-y-12 sm:space-y-16 pb-12 max-w-2xl mx-auto">
          {timeline.map((item, idx) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-10 relative group"
            >
              <div className="hidden sm:flex flex-col items-center shrink-0 w-[54px] z-10">
                <div className="w-4 h-4 rounded-full bg-[#F3F4F6] border-2 border-[#FF2DBC] mt-1.5 group-hover:bg-[#FF2DBC] group-hover:scale-125 transition-all duration-300" />
              </div>
              
              <div className="flex-1 space-y-4 bg-white/60 backdrop-blur-md p-6 rounded-xl border border-white/80 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-mono text-xs font-semibold text-[#FF2DBC] bg-[#FF2DBC]/10 px-2 py-1 rounded">
                    [{item.id}] {item.date}
                  </span>
                </div>
                
                <h3 className="font-sans text-xl font-bold text-gray-900">{item.title}</h3>
                <p className="font-sans text-gray-700 leading-relaxed font-medium">{item.description}</p>
                
              
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-6 pt-6 border-t border-gray-300 flex justify-end shrink-0">
        <PrimaryButton onClick={onNext}>
          XEM CHI TIẾT
        </PrimaryButton>
      </div>
    </div>
  );
};
