import React, { useState } from 'react';
import { PrimaryButton } from '../components/PrimaryButton';
import { birthdayData } from '../data/birthdayData';
import { motion, AnimatePresence } from 'framer-motion';

export const LoveReasonsPage: React.FC<{ onNext: () => void }> = ({ onNext }) => {
  const { reasons } = birthdayData;
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <div className="flex flex-col h-full p-6 sm:p-10">
      <header className="border-b-2 border-gray-300 pb-5 mb-8 shrink-0">
        <h1 className="font-mono text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">7 ĐIỀU EM NHẬN THẤY Ở ANH</h1>
        <p className="font-sans font-medium opacity-70 mt-2 tracking-wide text-gray-700">Những điều nhỏ xíu khiến em thích anh hơn mỗi ngày.</p>
      </header>

      <div className="flex-1 overflow-y-auto no-scrollbar pb-10 space-y-4 max-w-3xl w-full mx-auto">
        {reasons.map((reason) => {
          const isExpanded = expandedId === reason.id;
          return (
            <motion.div 
              layout
              key={reason.id}
              onClick={() => setExpandedId(isExpanded ? null : reason.id)}
              className="bg-white/60 backdrop-blur-md border border-white/80 rounded-xl overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
            >
              <div className="p-4 sm:p-5 flex items-center justify-between border-l-4 border-transparent hover:border-[#FF2DBC] transition-colors">
                <div className="flex items-center gap-4">
                  <span className="font-mono text-xs sm:text-sm font-semibold text-gray-600 bg-gray-200/60 px-2 py-1 rounded">
                    FILE #{reason.id}
                  </span>
                  <span className="font-mono text-xs sm:text-sm uppercase opacity-80 font-medium">
                    {isExpanded ? "DECRYPTING..." : "ENCRYPTED ENTRY"}
                  </span>
                </div>
                <div className="w-6 h-6 flex items-center justify-center text-[#FF2DBC] font-mono text-lg font-bold">
                  {isExpanded ? "-" : "+"}
                </div>
              </div>
              
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="border-t border-white/50"
                  >
                    <div className="p-6 bg-white/40">
                      <p className="font-sans text-lg sm:text-xl text-gray-900 font-medium leading-relaxed">
                        {reason.text}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-6 pt-6 border-t border-gray-300 flex justify-end shrink-0">
        <PrimaryButton onClick={onNext}>
          CHẠY CHẨN ĐOÁN
        </PrimaryButton>
      </div>
    </div>
  );
};
