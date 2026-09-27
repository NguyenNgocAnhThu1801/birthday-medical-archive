import React from 'react';
import { TerminalHeader } from './TerminalHeader';

interface TerminalPanelProps {
  children: React.ReactNode;
}

export const TerminalPanel: React.FC<TerminalPanelProps> = ({ children }) => {
  return (
    <div className="min-h-screen w-full bg-[#F3F4F6] flex flex-col items-center sm:p-6 md:p-12 font-sans selection:bg-[#FF2DBC] selection:text-white">
      <div className="w-full max-w-[800px] flex-1 sm:flex-none sm:min-h-[700px] bg-[#F9D5EE] sm:rounded-xl shadow-2xl overflow-hidden flex flex-col relative">
        <TerminalHeader />
        
        {/* The main content area with a subtle scan line effect */}
        <main className="flex-1 overflow-y-auto relative scan-line flex flex-col">
          {children}
        </main>
        
        {/* Subtle decorative border bottom */}
        <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#FF2DBC]/30 to-transparent absolute bottom-0 left-0" />
      </div>
    </div>
  );
};
