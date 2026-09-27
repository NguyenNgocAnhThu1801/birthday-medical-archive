import React, { useState, useEffect } from 'react';
import { PrimaryButton } from '../components/PrimaryButton';
import { StatusIndicator } from '../components/StatusIndicator';
import { birthdayData } from '../data/birthdayData';
import { motion } from 'framer-motion';

export const LoadingPage: React.FC<{ onNext: () => void }> = ({ onNext }) => {
  const [logs, setLogs] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    const sequence = [
      "SYSTEM INITIALIZING...",
      "ESTABLISHING SECURE CONNECTION...",
      "ACCESSING PATIENT FILE...",
      "VERIFYING RECORD ID: " + birthdayData.patient.recordId + "...",
      "PATIENT IDENTIFIED."
    ];

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < sequence.length) {
        setLogs(prev => [...prev, sequence[currentIndex]]);
        currentIndex++;
      } else {
        clearInterval(interval);
        setTimeout(() => setShowResult(true), 500);
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col h-full p-6 sm:p-10 justify-center">
      <div className="max-w-xl w-full mx-auto space-y-8">
        
        <div className="space-y-3 font-mono text-sm sm:text-base opacity-80 min-h-[160px]">
          {logs.map((log, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2"
            >
              <span className="text-[#FF2DBC]">{">"}</span> {log}
            </motion.div>
          ))}
          {!showResult && logs.length < 5 && (
            <motion.div
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="w-2.5 h-4 bg-[#FF2DBC] inline-block mt-1"
            />
          )}
        </div>

        {showResult && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8 bg-white/60 backdrop-blur-md p-6 sm:p-8 rounded-xl border border-white/80 shadow-lg"
          >
            <div className="space-y-6">
              <div className="flex justify-between items-start border-b border-gray-300 pb-5">
                <div>
                  <p className="font-mono text-xs opacity-60 uppercase tracking-widest">Patient</p>
                  <p className="font-sans font-semibold text-xl sm:text-2xl mt-1 text-gray-900">{birthdayData.patient.name}</p>
                  <p className="font-mono text-sm opacity-70 mt-1">{birthdayData.patient.age} — {birthdayData.patient.occupation}</p>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <StatusIndicator status="online" label="ONLINE" />
                  <span className="font-mono text-xs font-semibold text-[#FF2DBC] bg-[#FF2DBC]/10 px-2 py-1 rounded">
                    VITAL: {birthdayData.patient.vitalStatus}
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <p className="font-mono text-xs opacity-60 uppercase tracking-widest text-gray-600 font-semibold mb-2">
                  CHẨN ĐOÁN BAN ĐẦU
                </p>
                <p className="font-mono text-lg sm:text-xl font-bold text-gray-900">
                  Hôm nay là sinh nhật anh.
                </p>
              </div>
            </div>

            <PrimaryButton onClick={onNext} className="w-full bg-[#1A1A1A] hover:bg-[#FF2DBC] hover:text-white border-transparent">
              MỞ HỒ SƠ
            </PrimaryButton>
          </motion.div>
        )}
      </div>
    </div>
  );
};
