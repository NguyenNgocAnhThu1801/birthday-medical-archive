import React from 'react';
import { type HTMLMotionProps, motion } from 'framer-motion';
import { cn } from '../utils';

interface PrimaryButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({ children, className, ...props }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "bg-[#1A1A1A] text-[#F9D5EE] font-mono px-6 py-3 rounded-md text-sm sm:text-base font-semibold",
        "border border-transparent hover:border-[#FF2DBC]/50 hover:shadow-[0_0_15px_rgba(255,45,188,0.3)]",
        "transition-colors duration-200 uppercase tracking-wider flex items-center justify-center gap-2",
        className
      )}
      {...props}
    >
      <span className="opacity-80">[</span>
      {children}
      <span className="opacity-80">]</span>
    </motion.button>
  );
};
