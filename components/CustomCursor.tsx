/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState('READ');
  
  // Initialize off-screen
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  
  // Mechanical fast spring
  const springConfig = { damping: 24, stiffness: 450, mass: 0.1 }; 
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      const target = e.target as HTMLElement;
      const clickable = target.closest('button') || 
                        target.closest('a') || 
                        target.closest('[data-hover="true"]');
      
      if (clickable) {
        setIsHovering(true);
        const actionType = clickable.getAttribute('data-cursor') || 'DISPATCH';
        setCursorText(actionType);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition, { passive: true });
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none hidden md:flex items-center justify-center will-change-transform"
      style={{ x, y, translateX: '-50%', translateY: '-50%' }}
    >
      {/* Newsprint Sharp Reticle / Printer's Stamp */}
      <motion.div
        className="relative bg-[#111111] text-[#F9F9F7] border border-[#111111] flex items-center justify-center shadow-[2px_2px_0px_0px_#CC0000]"
        animate={{
          width: isHovering ? 84 : 14,
          height: isHovering ? 28 : 14,
          backgroundColor: isHovering ? '#111111' : '#111111',
        }}
        transition={{ duration: 0.15, ease: "easeOut" }}
      >
        {/* Subtle Crosshairs when not hovering */}
        {!isHovering && (
          <div className="w-1.5 h-1.5 bg-[#F9F9F7]" />
        )}

        {/* Text inside sharp newsprint stamp on hover */}
        {isHovering && (
          <motion.span 
            className="text-[10px] font-mono font-bold tracking-widest uppercase overflow-hidden whitespace-nowrap text-[#F9F9F7]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1 }}
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>
    </motion.div>
  );
};

export default CustomCursor;