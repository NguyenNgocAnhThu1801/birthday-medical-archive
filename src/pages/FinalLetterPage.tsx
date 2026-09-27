import React from 'react';
import { birthdayData } from '../data/birthdayData';
import { motion } from 'framer-motion';

export const FinalLetterPage: React.FC = () => {
  const { finalLetter } = birthdayData;

  return (
    <div className="flex flex-col h-full p-6 sm:p-10 justify-center items-center bg-[#F9D5EE] transition-colors duration-1000">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-2xl w-full mx-auto space-y-10 text-center"
      >
        <h1 className="font-sans text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
          {finalLetter.greeting}
        </h1>

        <div className="space-y-6 font-sans text-lg sm:text-xl text-gray-800 leading-relaxed font-medium px-4">
          {finalLetter.paragraphs.map((p, idx) => (
            <motion.p 
              key={idx}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 + (idx * 0.5), duration: 0.8 }}
            >
              {p}
            </motion.p>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4, duration: 1 }}
          className="pt-16 pb-12"
        >
          <div className="w-12 h-1 bg-gray-300 mx-auto mb-8 rounded-full" />
          <p className="font-sans text-base sm:text-lg font-semibold tracking-wide text-[#FF2DBC] whitespace-pre-line leading-relaxed">
            {finalLetter.signoff}
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};
