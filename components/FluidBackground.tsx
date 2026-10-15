/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const HalftoneDust = () => {
  const particles = useMemo(() => {
    return Array.from({ length: 18 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 15 + 20,
      delay: Math.random() * 5,
    }));
  }, []);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute bg-[#111111] opacity-[0.06] will-change-transform"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            opacity: [0.03, 0.08, 0.03],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.delay,
          }}
        />
      ))}
    </div>
  );
};

const FluidBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#F9F9F7] pointer-events-none">
      {/* Dot Grid Paper Matrix Texture */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3E%3Cpath fill='%23111111' d='M0 0h1v1H0z'/%3E%3C/svg%3E")`,
          backgroundSize: '16px 16px',
        }}
      />

      {/* Floating Halftone Floating Dust */}
      <HalftoneDust />

      {/* Subtle Slow-Moving Ink Gradient Blurs for Organic Paper Flow */}
      <motion.div
        className="absolute -top-[15%] -left-[10%] w-[60vw] h-[60vw] bg-[#111111]/[0.025] filter blur-[70px] pointer-events-none will-change-transform"
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -30, 20, 0],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-[40%] -right-[15%] w-[70vw] h-[70vw] bg-[#CC0000]/[0.015] filter blur-[90px] pointer-events-none will-change-transform"
        animate={{
          x: [0, -30, 20, 0],
          y: [0, 40, -20, 0],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Subtle Fine Column Grid Guides */}
      <div className="max-w-screen-xl mx-auto h-full grid grid-cols-4 md:grid-cols-12 opacity-[0.02] border-x border-[#111111]">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="border-r border-[#111111] h-full" />
        ))}
      </div>
    </div>
  );
};

export default FluidBackground;