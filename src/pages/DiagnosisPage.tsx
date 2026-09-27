import React, { useState, useEffect } from 'react';
import { PrimaryButton } from '../components/PrimaryButton';
import { MedicalLabel } from '../components/MedicalLabel';
import { birthdayData } from '../data/birthdayData';
import { motion, AnimatePresence } from 'framer-motion';

export const DiagnosisPage: React.FC<{ onNext: () => void }> = ({ onNext }) => {
  const { diagnosis, patient } = birthdayData;
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [step, setStep] = useState(0);

  const steps = [
    "ĐANG PHÂN TÍCH...",
    "KIỂM TRA TRIỆU CHỨNG...",
    "ĐỐI CHIẾU DỮ LIỆU...",
    "HOÀN TẤT."
  ];

  useEffect(() => {
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += Math.random() * 8;
      if (currentProgress > 100) {
        currentProgress = 100;
        setIsComplete(true);
        clearInterval(interval);
      }
      setProgress(currentProgress);
      
      const newStep = Math.floor((currentProgress / 100) * steps.length);
      if (newStep < steps.length) setStep(newStep);

    }, 120);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col h-full p-6 sm:p-10 justify-center">
      <AnimatePresence mode="wait">
        {!isComplete ? (
          <motion.div 
            key="loading"
            exit={{ opacity: 0, scale: 0.95 }}
            className="max-w-md w-full mx-auto space-y-6 bg-white/60 backdrop-blur-md p-8 rounded-xl border border-white/80 shadow-lg"
          >
            <div className="flex justify-between items-end">
              <span className="font-mono text-[#FF2DBC] font-semibold">{steps[step]}</span>
              <span className="font-mono text-sm opacity-60 font-bold">{Math.floor(progress)}%</span>
            </div>
            
            <div className="h-2.5 w-full bg-gray-200 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-[#FF2DBC]"
                animate={{ width: `${progress}%` }}
                transition={{ ease: "linear", duration: 0.1 }}
              />
            </div>
          </motion.div>
        ) : (
          <motion.div 
            key="result"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-2xl mx-auto space-y-8"
          >
            <header className="border-b-2 border-[#FF2DBC]/30 pb-5 mb-6 text-center">
              <h1 className="font-mono text-2xl sm:text-3xl font-bold tracking-tight text-[#FF2DBC]">BÁO CÁO CHẨN ĐOÁN CHÍNH THỨC</h1>
              <p className="font-mono text-sm opacity-60 mt-2 tracking-widest text-gray-700">CONFIDENTIAL FILE</p>
            </header>

            <div className="bg-white/70 backdrop-blur-sm p-6 sm:p-8 rounded-xl border border-white/80 shadow-md space-y-8">
              <div className="flex items-center gap-4 pb-5 border-b border-gray-300">
                <MedicalLabel label="PATIENT" value={patient.name} valueClassName="font-sans font-semibold text-gray-900" />
                <MedicalLabel label="ID" value={patient.recordId} className="ml-auto text-right" />
              </div>

              <div>
                <p className="font-mono text-xs opacity-60 uppercase text-[#FF2DBC] mb-2 font-bold tracking-widest">CHẨN ĐOÁN CHÍNH</p>
                <h2 className="font-sans text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
                  {diagnosis.primary}
                </h2>
              </div>

              <div className="pt-4">
                <p className="font-mono text-xs opacity-60 uppercase mb-3 font-semibold">CƠ CHẾ</p>
                <p className="font-sans text-lg font-medium text-gray-800 leading-relaxed">
                  {diagnosis.mechanism}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6 border-t border-gray-300">
                <div>
                  <p className="font-mono text-xs opacity-60 uppercase mb-3 font-semibold">TIÊN LƯỢNG</p>
                  <p className="font-sans text-xl font-bold text-gray-900">{diagnosis.prognosis}</p>
                </div>
                <div>
                  <p className="font-mono text-xs opacity-60 uppercase mb-3 font-semibold">TÌNH TRẠNG</p>
                  <p className="font-sans text-xl font-bold text-[#FF2DBC]">{diagnosis.status}</p>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-300">
                <p className="font-sans text-sm font-semibold opacity-80 uppercase mb-3 text-gray-700">Tình trạng có thể được kiểm soát bằng:</p>
                <ul className="space-y-2">
                  {diagnosis.treatment.map((t, idx) => (
                    <li key={idx} className="font-sans text-base font-medium flex items-center gap-3 bg-[#FF2DBC]/10 px-4 py-2.5 rounded-md text-gray-900">
                      <div className="w-1.5 h-1.5 bg-[#FF2DBC] rounded-full shrink-0" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex justify-end pt-4">
              <PrimaryButton onClick={onNext}>
                XEM ĐƠN THUỐC
              </PrimaryButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
