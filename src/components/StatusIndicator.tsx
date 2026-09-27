import React from 'react';
import { cn } from '../utils';

interface StatusIndicatorProps {
  status: 'online' | 'offline' | 'warning' | 'critical';
  label?: string;
  className?: string;
}

export const StatusIndicator: React.FC<StatusIndicatorProps> = ({ status, label, className }) => {
  const colors = {
    online: 'bg-[#10B981]',
    offline: 'bg-gray-400',
    warning: 'bg-yellow-500',
    critical: 'bg-[#FF2DBC]'
  };

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="relative flex h-2.5 w-2.5">
        <span className={cn("animate-ping absolute inline-flex h-full w-full rounded-full opacity-75", colors[status])}></span>
        <span className={cn("relative inline-flex rounded-full h-2.5 w-2.5", colors[status])}></span>
      </div>
      {label && <span className="font-mono text-xs font-semibold tracking-wider uppercase opacity-80">{label}</span>}
    </div>
  );
};
