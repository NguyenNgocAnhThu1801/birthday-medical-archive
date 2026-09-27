import React, { useState } from 'react';
import { PrimaryButton } from '../components/PrimaryButton';
import { birthdayData } from '../data/birthdayData';
import { motion, AnimatePresence } from 'framer-motion';

export const PrescriptionPage: React.FC<{ onNext: () => void }> = ({ onNext }) => {
  const { prescription } = birthdayData;
  const [unlocked, setUnlocked] = useState(false);

  return (
    <div className="flex flex-col h-full p-4 sm:p-10 justify-center items-center">
      <AnimatePresence mode="wait">
        {!unlocked ? (
          <motion.div
            key="locked"
            exit={{ opacity: 0, scale: 0.95 }}
            className="flex flex-col items-center gap-6 bg-white/50 backdrop-blur-md p-10 rounded-xl border border-white/80 shadow-sm"
          >
            <div className="w-16 h-16 border-4 border-[#FF2DBC] text-[#FF2DBC] rounded-full flex items-center justify-center font-bold text-3xl mb-2 opacity-90 shadow-sm">
              !
            </div>
            <h2 className="font-mono text-xl sm:text-2xl font-bold tracking-widest text-gray-900 uppercase">ACCESS RESTRICTED</h2>
            <p className="font-sans font-medium text-gray-600 text-center max-w-sm">
              The final prescription requires authorized patient clearance.
            </p>
            <PrimaryButton onClick={() => setUnlocked(true)} className="mt-4">
              XEM ĐƠN THUỐC
            </PrimaryButton>
          </motion.div>
        ) : (
          <motion.div
            key="unlocked"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-xl mx-auto bg-[#Fdfdfd] border-2 border-[#1A1A1A] p-6 sm:p-10 shadow-2xl relative"
            style={{
              backgroundImage: 'radial-gradient(#1A1A1A 1px, transparent 1px)',
              backgroundSize: '24px 24px',
              backgroundPosition: '-12px -12px',
              backgroundAttachment: 'fixed',
              backgroundColor: '#FAFAFA'
            }}
          >
            {/* Watermark */}
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none overflow-hidden">
              <div className="font-mono text-[12rem] font-bold text-black rotate-[-30deg]">Rx</div>
            </div>

            <div className="relative z-10 space-y-8">
              <header className="flex justify-between items-start border-b-2 border-black pb-5">
                <div>
                  <h1 className="font-sans text-3xl sm:text-4xl font-bold uppercase tracking-tight text-gray-900">ĐƠN THUỐC</h1>
                  <p className="font-mono text-xs opacity-60 mt-1 font-semibold">OFFICIAL MEDICAL DOCUMENT</p>
                </div>
                <div className="text-5xl font-serif italic font-bold text-gray-900">Rx</div>
              </header>

              <div className="space-y-7">
                <div className="flex justify-between items-end border-b border-gray-300 pb-2">
                  <span className="font-mono text-xs uppercase font-bold text-gray-500">DATE:</span>
                  <span className="font-mono text-base font-semibold text-gray-900 border-b border-dashed border-gray-400 min-w-[120px] text-center pb-1">
                    {prescription.date}
                  </span>
                </div>

                <div className="space-y-5">
                  {prescription.items.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <span className="font-serif italic text-xl font-bold text-gray-400 shrink-0">Rx {item.id}</span>
                      <p className="font-sans text-lg font-medium text-gray-900 pt-0.5">{item.text}</p>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-6 pt-6 border-t border-gray-300 font-mono">
                  <div>
                    <span className="opacity-60 block text-xs uppercase mb-1 font-bold">TÁI CẤP:</span>
                    <span className="font-semibold text-gray-900">
                      {prescription.refills}
                    </span>
                  </div>
                  <div>
                    <span className="opacity-60 block text-xs uppercase mb-1 font-bold">VALIDITY:</span>
                    <span className="font-semibold text-gray-900">
                      {prescription.validity}
                    </span>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-300">
                  <p className="font-sans text-xs font-bold uppercase mb-3 text-[#FF2DBC]">SIDE EFFECTS MAY INCLUDE:</p>
                  <ul className="list-disc list-inside font-sans font-medium text-base space-y-1.5 text-gray-700">
                    {prescription.sideEffects.map((effect, idx) => (
                      <li key={idx}>{effect}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-8 flex justify-center border-t-2 border-black mt-8">
                <PrimaryButton onClick={onNext} className="w-full sm:w-auto bg-[#FF2DBC] text-white hover:border-black hover:shadow-none hover:bg-[#1A1A1A]">
                  XÁC NHẬN ĐƠN THUỐC
                </PrimaryButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
