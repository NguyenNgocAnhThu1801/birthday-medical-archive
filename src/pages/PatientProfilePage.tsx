import React from 'react';
import { PrimaryButton } from '../components/PrimaryButton';
import { MedicalLabel } from '../components/MedicalLabel';
import { StatusIndicator } from '../components/StatusIndicator';
import { birthdayData } from '../data/birthdayData';
import { motion } from 'framer-motion';

export const PatientProfilePage: React.FC<{ onNext: () => void }> = ({ onNext }) => {
  const { patient, conditions } = birthdayData;

  return (
    <div className="flex flex-col h-full p-6 sm:p-10">
      <div className="flex-1 max-w-2xl w-full mx-auto space-y-8">
        
        <header className="border-b-2 border-gray-300 pb-5 mb-8">
          <h1 className="font-mono text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">HỒ SƠ BỆNH NHÂN</h1>
          <div className="flex justify-between items-center mt-3">
            <p className="font-mono text-sm opacity-60 tracking-widest">RECORD ID: {patient.recordId}</p>
            <StatusIndicator status="online" label="ACTIVE" />
          </div>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-6 bg-white/60 backdrop-blur-md p-6 sm:p-8 rounded-xl border border-white/80 shadow-sm"
          >
            <MedicalLabel label="TÊN" value={patient.name} valueClassName="font-sans font-semibold text-xl text-gray-900" />
            <MedicalLabel label="TUỔI" value={patient.age} />
            <MedicalLabel label="NGHỀ NGHIỆP" value={patient.occupation} />
            <MedicalLabel label="TÌNH TRẠNG" value={patient.vitalStatus} valueClassName="text-[#FF2DBC] font-semibold" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6 flex flex-col justify-between"
          >
            <div className="bg-white/40 p-6 rounded-xl border border-white/50 h-full flex flex-col">
              <span className="font-mono text-xs opacity-60 uppercase tracking-widest block mb-4 border-b border-gray-200 pb-2">
                KNOWN CONDITIONS
              </span>
              <ul className="space-y-4 flex-1">
                {conditions.map((condition, idx) => {
                  const [title, desc] = condition.split(' - ');
                  return (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-[#FF2DBC] mt-1 text-sm font-bold">{">"}</span> 
                      <div>
                        <span className="font-mono text-sm sm:text-base font-semibold text-gray-800 block">{title}</span>
                        {desc && <span className="font-sans text-sm text-gray-600 mt-1 block">{desc}</span>}
                      </div>
                    </li>
                  )
                })}
              </ul>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white/70 p-5 rounded-xl border border-white/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm"
        >
          <div>
            <span className="font-mono text-xs opacity-60 uppercase tracking-widest block mb-1">CURRENT STATUS</span>
            <span className="font-sans text-lg font-medium text-gray-800">{patient.status}</span>
          </div>
        </motion.div>
      </div>

      <div className="mt-8 pt-6 flex justify-end shrink-0">
        <PrimaryButton onClick={onNext}>
          TIẾP TỤC
        </PrimaryButton>
      </div>
    </div>
  );
};
