/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../types';
import { ArrowUpRight, Cpu } from 'lucide-react';
import { Language } from '../translations';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
  index: number;
  language?: Language;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick, index, language = 'zh' }) => {
  const figNumber = String(index + 1).padStart(2, '0');

  return (
    <motion.article
      className="group relative bg-[#F9F9F7] border border-[#111111] p-6 md:p-8 flex flex-col justify-between cursor-pointer transition-all duration-200 hover:bg-[#FFFFFF] hard-shadow-hover"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      onClick={onClick}
      data-hover="true"
      data-cursor={language === 'zh' ? '查看' : 'INSPECT'}
    >
      {/* Top Ledger: Plate Number, Category, AI Stamp */}
      <div className="flex items-center justify-between border-b border-[#111111] pb-3 mb-5">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs font-bold text-[#111111] bg-[#111111] text-[#F9F9F7] px-1.5 py-0.5 tracking-wider">
            {language === 'zh' ? `展品 ${figNumber}` : `FIG. ${figNumber}`}
          </span>
          <span className="font-mono text-xs uppercase tracking-widest text-[#737373]">
            {project.badge}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="font-mono text-[10px] uppercase tracking-wider text-[#CC0000] border border-[#CC0000] px-1.5 py-0.5 font-bold flex items-center gap-1">
            <Cpu className="w-3 h-3 text-[#CC0000]" />
            {language === 'zh' ? '人机协同' : 'AI-Augmented'}
          </span>
          <div className="w-6 h-6 border border-[#111111] flex items-center justify-center text-[#111111] group-hover:bg-[#111111] group-hover:text-[#F9F9F7] transition-colors">
            <ArrowUpRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>

      {/* Centerpiece Halftone / Grayscale Newspaper Image */}
      <div className="relative w-full h-48 md:h-56 overflow-hidden border border-[#111111] mb-5 bg-[#E5E5E0]">
        <motion.img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover grayscale contrast-125 transition-all duration-500 group-hover:scale-105 group-hover:sepia-[30%]"
        />
        {/* Halftone Dot Overlay */}
        <div 
          className="absolute inset-0 opacity-15 pointer-events-none mix-blend-multiply"
          style={{
            backgroundImage: `radial-gradient(#111111 1px, transparent 1px)`,
            backgroundSize: '4px 4px'
          }}
        />
        <div className="absolute bottom-2 left-2 bg-[#F9F9F7] border border-[#111111] px-2 py-0.5 text-[10px] font-mono uppercase text-[#111111]">
          {project.category}
        </div>
      </div>

      {/* Headline & Editorial Copy */}
      <div className="space-y-3 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-serif text-2xl lg:text-3xl font-black text-[#111111] leading-tight group-hover:text-[#CC0000] transition-colors">
            {project.name}
          </h3>
          <p className="font-serif italic text-xs text-[#525252] mt-1 border-l-2 border-[#111111] pl-2.5">
            {project.subtitle}
          </p>
          <p className="font-body text-sm text-[#404040] leading-relaxed mt-3 line-clamp-3">
            {project.summary}
          </p>
        </div>

        {/* Stack & Metadata Footer */}
        <div className="pt-4 border-t border-[#E5E5E0] mt-4">
          <div className="flex flex-wrap gap-1.5 mb-2">
            {project.stack.slice(0, 4).map((tech, i) => (
              <span
                key={i}
                className="font-mono text-[10px] uppercase border border-[#111111] px-1.5 py-0.5 text-[#111111] bg-transparent"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex justify-between items-center text-[10px] font-mono text-[#737373]">
            <span>{language === 'zh' ? `状态: ${project.status}` : `STATUS: ${project.status.toUpperCase()}`}</span>
            <span className="text-[#CC0000] font-bold group-hover:underline">
              {language === 'zh' ? '查阅简报 →' : 'Read Dossier →'}
            </span>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;