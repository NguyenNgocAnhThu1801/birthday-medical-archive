import React from 'react';
import { cn } from '../utils';

interface MedicalLabelProps {
  label: string;
  value?: React.ReactNode;
  className?: string;
  valueClassName?: string;
}

export const MedicalLabel: React.FC<MedicalLabelProps> = ({ label, value, className, valueClassName }) => {
  return (
    <div className={cn("flex flex-col gap-1", className)}>
      <span className="font-mono text-xs opacity-60 uppercase tracking-widest">{label}</span>
      {value && <span className={cn("font-mono font-medium text-sm sm:text-base", valueClassName)}>{value}</span>}
    </div>
  );
};
