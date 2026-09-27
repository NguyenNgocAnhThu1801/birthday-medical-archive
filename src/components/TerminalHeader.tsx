import React from 'react';
import { Activity } from 'lucide-react';

export const TerminalHeader: React.FC = () => {
  return (
    <header className="w-full bg-[#FF2DBC] text-white px-4 py-3 flex items-center justify-between shrink-0 relative z-10 shadow-sm shadow-pink-200/50">
      <div className="flex items-center gap-2">
        <Activity size={18} className="animate-pulse" />
        <span className="font-mono text-sm font-semibold tracking-wider">MED-ARCHIVE // SYS-1</span>
      </div>
      <div className="flex items-center gap-4">
        <span className="font-mono text-xs opacity-80 hidden sm:inline-block">ENCRYPTED CONNECTION</span>
        <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
      </div>
    </header>
  );
};
