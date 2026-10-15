/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, 
  Terminal, 
  Cpu, 
  Sparkles, 
  Compass, 
  BookOpen, 
  Mail, 
  Copy, 
  Check, 
  ChevronLeft, 
  ChevronRight, 
  X, 
  Menu, 
  Languages, 
  MapPin, 
  GraduationCap, 
  Feather, 
  ArrowUpRight,
  Printer,
  Share2,
  Calendar,
  Layers,
  ArrowRight,
  FileText,
  Plus,
  Minus
} from 'lucide-react';
import FluidBackground from './components/FluidBackground';
import CustomCursor from './components/CustomCursor';
import ProjectCard from './components/ArtistCard';
import AIChat from './components/AIChat';
import { Project, TimelineNode, WritingItem, SkillGroup } from './types';
import { Language, TRANSLATIONS } from './translations';

type PageRoute = 'home' | 'resume' | 'timeline' | 'project' | 'blog' | 'about';

// ==========================================
// MAIN APP COMPONENT
// ==========================================

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageRoute>('home');
  const [language, setLanguage] = useState<Language>('zh');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [selectedWritingId, setSelectedWritingId] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [timelineFilter, setTimelineFilter] = useState<string>('ALL');
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [copiedShareLink, setCopiedShareLink] = useState(false);

  // Active translation dictionary
  const t = TRANSLATIONS[language] || TRANSLATIONS.zh;

  // Active project & writing objects derived from current language
  const selectedProject = selectedProjectId
    ? t.project.projects.find((p) => p.id === selectedProjectId) || null
    : null;

  const selectedWriting = selectedWritingId
    ? t.blog.writings.find((w) => w.id === selectedWritingId) || null
    : null;

  // Sync with Hash Route
  useEffect(() => {
    const parseHash = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '').toLowerCase();
      if (['resume', 'timeline', 'project', 'blog', 'about'].includes(hash)) {
        setCurrentPage(hash as PageRoute);
      } else {
        setCurrentPage('home');
      }
    };

    parseHash();
    window.addEventListener('hashchange', parseHash);
    return () => window.removeEventListener('hashchange', parseHash);
  }, []);

  // Scroll listener for Back-to-Top indicator (transparent while scrolling, clear when stationary/idle)
  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout | null = null;
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
      setIsScrolling(true);
      if (scrollTimeout) clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 450);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, []);

  // Global Escape key listener & body scroll lock for modals & drawers
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (selectedProjectId) setSelectedProjectId(null);
        if (selectedWritingId) setSelectedWritingId(null);
        if (mobileMenuOpen) setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProjectId, selectedWritingId, mobileMenuOpen]);

  useEffect(() => {
    if (selectedProjectId || selectedWritingId) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedProjectId, selectedWritingId]);

  const navigateTo = (page: PageRoute) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '#/' : `#/${page}`;
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('r.s.he477@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <div className="relative min-h-screen text-[#111111] bg-[#F9F9F7] selection:bg-[#111111] selection:text-[#F9F9F7] cursor-auto md:cursor-none overflow-x-hidden font-body flex flex-col justify-between">
      <CustomCursor />
      <FluidBackground />
      <AIChat language={language} />

      {/* ========================================================
          STICKY TWO-TIER NEWS-HEADER
          TIER 1: TOP INFORMATION BAR (Brand, Edition, Lang Switcher, Action)
          TIER 2: CENTERED SUB-NAVIGATION BAR (Resume, Timeline, Project, Blog, About)
         ======================================================== */}
      <header className="border-b-2 border-[#111111] bg-[#F9F9F7] sticky top-0 z-50">
        {/* ROW 1: TOP INFORMATION BAR (顶部信息栏) */}
        <div className="border-b border-[#111111]">
          <div className="max-w-screen-xl mx-auto px-4 md:px-6 py-2.5 flex items-center justify-between">
            {/* Left: Brand Title & Edition Tag */}
            <div className="flex items-center gap-3 md:gap-4">
              <button
                onClick={() => navigateTo('home')}
                className="font-serif text-2xl sm:text-3xl font-black tracking-tight text-[#111111] hover:text-[#CC0000] transition-colors cursor-pointer bg-transparent border-none p-0 text-left"
                data-hover="true"
                data-cursor="HOME"
              >
                RUISI.HE
              </button>

              {/* Edition Box */}
              <div className="hidden sm:inline-flex items-center border border-[#111111] px-2.5 py-0.5 font-mono text-[11px] tracking-wider text-[#111111] bg-[#F9F9F7] select-none">
                {t.common.vol} &nbsp;|&nbsp; {t.common.edition}
              </div>
            </div>

            {/* Right: Language Switcher, Subscribe Button & Mobile Hamburger */}
            <div className="flex items-center gap-3 sm:gap-4">
              {/* Multilingual Switcher: ZH | EN | DE */}
              <div className="flex items-center border border-[#111111] bg-white font-mono text-[11px] overflow-hidden select-none">
                <button
                  onClick={() => setLanguage('zh')}
                  className={`px-2.5 py-1 font-bold transition-colors cursor-pointer border-r border-[#111111] ${
                    language === 'zh'
                      ? 'bg-[#111111] text-[#F9F9F7]'
                      : 'bg-white text-[#111111] hover:bg-[#E5E5E0]'
                  }`}
                  title="中文版本"
                  data-hover="true"
                  data-cursor="ZH"
                >
                  中
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-2.5 py-1 font-bold transition-colors cursor-pointer border-r border-[#111111] ${
                    language === 'en'
                      ? 'bg-[#111111] text-[#F9F9F7]'
                      : 'bg-white text-[#111111] hover:bg-[#E5E5E0]'
                  }`}
                  title="English Version"
                  data-hover="true"
                  data-cursor="EN"
                >
                  EN
                </button>
                <button
                  onClick={() => setLanguage('de')}
                  className={`px-2.5 py-1 font-bold transition-colors cursor-pointer ${
                    language === 'de'
                      ? 'bg-[#111111] text-[#F9F9F7]'
                      : 'bg-white text-[#111111] hover:bg-[#E5E5E0]'
                  }`}
                  title="Deutsche Version"
                  data-hover="true"
                  data-cursor="DE"
                >
                  DE
                </button>
              </div>

              {/* Subscribe Action Button */}
              <button
                onClick={handleCopyEmail}
                className="bg-[#111111] text-[#F9F9F7] px-4 py-1.5 font-mono text-xs font-bold tracking-widest uppercase hover:bg-[#CC0000] transition-colors cursor-pointer hidden sm:block"
                data-hover="true"
                data-cursor="SUBSCRIBE"
                aria-label="Subscribe & Contact"
              >
                {copiedEmail ? t.common.copied : t.common.subscribe}
              </button>

              {/* Mobile Hamburger Menu Toggle */}
              <button
                className="md:hidden text-[#111111] p-2 min-w-[44px] min-h-[44px] flex items-center justify-center hover:text-[#CC0000] transition-colors cursor-pointer"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* ROW 2: CENTERED SUB-NAVIGATION BAR (页面导航栏：手机端顺畅横向滑动，桌面端绝对居中) */}
        <div className="bg-[#F9F9F7] py-2 border-b border-[#111111]/15">
          <div className="max-w-screen-xl mx-auto px-4 md:px-6 flex items-center justify-center">
            <nav className="flex items-center justify-start md:justify-center gap-5 sm:gap-10 lg:gap-14 font-mono text-xs font-bold uppercase tracking-widest text-[#111111] overflow-x-auto no-scrollbar py-0.5 w-full md:w-auto scroll-smooth">
              {[
                { id: 'resume', label: t.common.nav.resume },
                { id: 'timeline', label: t.common.nav.timeline },
                { id: 'project', label: t.common.nav.project },
                { id: 'blog', label: t.common.nav.blog },
                { id: 'about', label: t.common.nav.about },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => navigateTo(tab.id as PageRoute)}
                  className={`bg-transparent border-none cursor-pointer py-1.5 px-1 min-h-[36px] flex items-center transition-all relative shrink-0 ${
                    currentPage === tab.id 
                      ? 'text-[#CC0000] font-black' 
                      : 'hover:text-[#CC0000]'
                  }`}
                  data-hover="true"
                  data-cursor={tab.label}
                >
                  {tab.label}
                  {currentPage === tab.id && (
                    <span className="absolute -bottom-1 left-0 right-0 h-[2.5px] bg-[#CC0000]" />
                  )}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-0 top-[100px] z-40 bg-[#F9F9F7] border-b-4 border-[#111111] p-6 md:hidden flex flex-col gap-4 overflow-y-auto"
          >
            {[
              { id: 'home', label: `01. ${t.common.nav.home}` },
              { id: 'resume', label: `02. ${t.common.nav.resume}` },
              { id: 'timeline', label: `03. ${t.common.nav.timeline}` },
              { id: 'project', label: `04. ${t.common.nav.project}` },
              { id: 'blog', label: `05. ${t.common.nav.blog}` },
              { id: 'about', label: `06. ${t.common.nav.about}` },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => navigateTo(item.id as PageRoute)}
                className={`text-left font-serif text-2xl font-black py-2.5 border-b border-[#111111] transition-colors ${
                  currentPage === item.id ? 'text-[#CC0000]' : 'hover:text-[#CC0000]'
                }`}
              >
                {item.label}
              </button>
            ))}

            <div className="pt-2 flex items-center justify-between">
              <span className="font-mono text-xs font-bold uppercase text-[#737373]">
                {language === 'zh' ? '切换语言:' : 'LANGUAGE:'}
              </span>
              <div className="flex border border-[#111111] bg-white font-mono text-xs">
                <button
                  onClick={() => setLanguage('zh')}
                  className={`px-3 py-1 font-bold ${language === 'zh' ? 'bg-[#111111] text-white' : ''}`}
                >
                  中文
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1 font-bold ${language === 'en' ? 'bg-[#111111] text-white' : ''}`}
                >
                  EN
                </button>
                <button
                  onClick={() => setLanguage('de')}
                  className={`px-3 py-1 font-bold ${language === 'de' ? 'bg-[#111111] text-white' : ''}`}
                >
                  DE
                </button>
              </div>
            </div>

            <button
              onClick={handleCopyEmail}
              className="mt-4 bg-[#111111] text-[#F9F9F7] py-3 text-center font-mono text-xs font-bold tracking-widest uppercase hover:bg-[#CC0000] transition-colors"
            >
              {copiedEmail ? `${t.common.copied} r.s.he477@gmail.com` : `${t.common.copyEmail}: r.s.he477@gmail.com`}
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ========================================================
          DYNAMIC PAGE CONTENT VIEWS
         ======================================================== */}
      <AnimatePresence mode="wait">
        {/* ======================================================
            PAGE 0: HOME / FRONT PAGE (经典头版模式)
           ====================================================== */}
        {currentPage === 'home' && (
          <motion.main
            key={`page-home-${language}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="flex-1"
          >
            {/* Lead Story Hero */}
            <section className="border-b border-[#111111] bg-[#F9F9F7]">
              <div className="max-w-screen-xl mx-auto px-4 md:px-6 py-8 md:py-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                  
                  {/* Left Main Editorial Column (8-col) */}
                  <div className="lg:col-span-8 space-y-6">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold bg-[#CC0000] text-white px-2 py-0.5 uppercase tracking-wider">
                        {t.home.heroKicker}
                      </span>
                      <span className="font-mono text-xs text-[#737373]">
                        {t.home.dateMeta} &nbsp;|&nbsp; {t.home.readingTime}
                      </span>
                    </div>

                    <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl font-black text-[#111111] leading-[0.98] tracking-tighter">
                      {t.home.heroHeadline}
                    </h1>

                    <p className="font-serif italic text-lg sm:text-xl text-[#404040] leading-relaxed border-l-4 border-[#111111] pl-4">
                      {t.home.heroSub}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2 font-body text-sm sm:text-base text-[#111111] leading-relaxed text-justify">
                      <p className="drop-cap col-hairline">
                        {t.home.leadStoryP1}
                      </p>
                      <p>
                        {t.home.leadStoryP2}
                      </p>
                    </div>

                    {/* Editorial Callout: AI-Augmented Manifesto */}
                    <div className="border-2 border-[#111111] bg-[#FFFFFF] p-6 space-y-2 hard-shadow-sm relative overflow-hidden">
                      <div className="absolute right-4 top-4 hidden sm:block">
                        <span className="editorial-stamp text-[10px]">
                          {language === 'zh' ? '人机协同' : '10X AI'}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-[#CC0000] inline-block" />
                        <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#111111]">
                          {t.home.manifestoBadge}
                        </span>
                      </div>
                      <h4 className="font-serif text-xl font-bold text-[#111111]">
                        {t.home.manifestoTitle}
                      </h4>
                      <p className="font-body text-xs sm:text-sm text-[#525252] leading-relaxed italic pr-0 sm:pr-24">
                        {t.home.manifestoP}
                      </p>
                    </div>
                  </div>

                  {/* Right Side Column (4-col): Weather, Telegraph, Advertisement */}
                  <div className="lg:col-span-4 space-y-6 border-t lg:border-t-0 lg:border-l border-[#111111] lg:pl-8 pt-6 lg:pt-0">
                    {/* Archive Vitals Box */}
                    <div className="border border-[#111111] p-5 bg-white">
                      <div className="font-mono text-xs font-bold uppercase border-b border-[#111111] pb-2 mb-3 flex justify-between items-center text-[#111111]">
                        <span>{t.home.weatherKicker}</span>
                        <MapPin className="w-3.5 h-3.5 text-[#CC0000]" />
                      </div>
                      <div className="space-y-3 font-mono text-xs">
                        <div className="flex justify-between border-b border-[#E5E5E0] pb-1.5">
                          <span className="text-[#737373]">{language === 'zh' ? '常驻坐标' : (language === 'de' ? 'STANDORT' : 'LOCATION')}</span>
                          <span className="font-bold">{t.home.weatherLocation}</span>
                        </div>
                        <div className="flex justify-between border-b border-[#E5E5E0] pb-1.5">
                          <span className="text-[#737373]">{language === 'zh' ? '工作空间' : (language === 'de' ? 'STUDIO' : 'STUDIO')}</span>
                          <span className="font-bold text-[#CC0000]">{t.home.weatherStudio}</span>
                        </div>
                        <div className="flex justify-between border-b border-[#E5E5E0] pb-1.5">
                          <span className="text-[#737373]">{language === 'zh' ? '教育背景' : (language === 'de' ? 'BILDUNG' : 'EDUCATION')}</span>
                          <span className="font-bold">{t.home.weatherDegree}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-[#737373]">{language === 'zh' ? '当前状态' : (language === 'de' ? 'STATUS' : 'STATUS')}</span>
                          <span className="font-bold text-[#CC0000]">{t.home.weatherDegreeSub}</span>
                        </div>
                      </div>
                    </div>

                    {/* Advertisement Slot */}
                    <div className="p-6 md:p-8 border border-[#111111] bg-[#FFFFFF]">
                      <span className="font-mono text-[10px] text-[#737373] uppercase tracking-widest block text-center mb-2">
                        {t.home.advertKicker}
                      </span>
                      <div 
                        onClick={() => {
                          const chatBtn = document.querySelector('[data-cursor="TELEGRAPH"]') as HTMLElement;
                          if (chatBtn) chatBtn.click();
                        }}
                        className="w-full bg-[#111111] border-2 border-[#111111] h-36 flex flex-col items-center justify-center cursor-pointer hover:bg-black transition-all group"
                        data-hover="true"
                        data-cursor="TELEGRAPH"
                      >
                        <div className="text-white group-hover:scale-110 transition-transform">
                          <svg 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="1.75" 
                            className="w-10 h-10 text-white"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                          </svg>
                        </div>
                        <span className="font-mono text-[10px] text-[#A3A3A3] mt-2 tracking-widest uppercase group-hover:text-white text-center px-4">
                          {t.home.advertTitle}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Breaking News Ticker */}
            <div className="bg-[#111111] text-[#F9F9F7] py-2.5 overflow-hidden border-b border-[#111111]">
              <motion.div
                className="flex w-fit will-change-transform"
                animate={{ x: '-50%' }}
                transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
              >
                {[0, 1].map((key) => (
                  <div key={key} className="flex whitespace-nowrap shrink-0">
                    {t.ticker.map((text, i) => (
                      <span key={i} className="text-xs font-mono font-bold tracking-widest px-6 flex items-center gap-3">
                        <span className="w-2 h-2 bg-[#CC0000] inline-block" />
                        {text}
                      </span>
                    ))}
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Frontpage Section Previews (四版要闻推荐网格) */}
            <section className="max-w-screen-xl mx-auto px-4 md:px-6 py-12">
              <div className="flex justify-between items-center border-b-2 border-[#111111] pb-3 mb-8">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#CC0000]">
                  {t.home.topEditionsKicker}
                </span>
                <span className="font-mono text-xs text-[#737373]">{t.home.topEditionsSub}</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Card 1: To Projects */}
                <article
                  onClick={() => navigateTo('project')}
                  className="border border-[#111111] bg-[#FFFFFF] p-6 hover:bg-[#F9F9F7] transition-all cursor-pointer hard-shadow-hover flex flex-col justify-between"
                  data-hover="true"
                  data-cursor="PROJECTS"
                >
                  <div>
                    <span className="font-mono text-[10px] bg-[#111111] text-[#F9F9F7] px-2 py-0.5 uppercase tracking-wider font-bold">
                      {t.home.cards.c1Kicker}
                    </span>
                    <h3 className="font-serif text-2xl font-black text-[#111111] mt-3 mb-2">
                      {t.home.cards.c1Title}
                    </h3>
                    <p className="font-body text-xs text-[#525252] leading-relaxed">
                      {t.home.cards.c1Desc}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-[#E5E5E0] mt-4 flex justify-between items-center font-mono text-xs font-bold text-[#CC0000]">
                    <span>{t.home.cards.c1Action}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </article>

                {/* Card 2: To Resume */}
                <article
                  onClick={() => navigateTo('resume')}
                  className="border border-[#111111] bg-[#FFFFFF] p-6 hover:bg-[#F9F9F7] transition-all cursor-pointer hard-shadow-hover flex flex-col justify-between"
                  data-hover="true"
                  data-cursor="RESUME"
                >
                  <div>
                    <span className="font-mono text-[10px] bg-[#111111] text-[#F9F9F7] px-2 py-0.5 uppercase tracking-wider font-bold">
                      {t.home.cards.c2Kicker}
                    </span>
                    <h3 className="font-serif text-2xl font-black text-[#111111] mt-3 mb-2">
                      {t.home.cards.c2Title}
                    </h3>
                    <p className="font-body text-xs text-[#525252] leading-relaxed">
                      {t.home.cards.c2Desc}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-[#E5E5E0] mt-4 flex justify-between items-center font-mono text-xs font-bold text-[#CC0000]">
                    <span>{t.home.cards.c2Action}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </article>

                {/* Card 3: To Timeline */}
                <article
                  onClick={() => navigateTo('timeline')}
                  className="border border-[#111111] bg-[#FFFFFF] p-6 hover:bg-[#F9F9F7] transition-all cursor-pointer hard-shadow-hover flex flex-col justify-between"
                  data-hover="true"
                  data-cursor="TIMELINE"
                >
                  <div>
                    <span className="font-mono text-[10px] bg-[#111111] text-[#F9F9F7] px-2 py-0.5 uppercase tracking-wider font-bold">
                      {t.home.cards.c3Kicker}
                    </span>
                    <h3 className="font-serif text-2xl font-black text-[#111111] mt-3 mb-2">
                      {t.home.cards.c3Title}
                    </h3>
                    <p className="font-body text-xs text-[#525252] leading-relaxed">
                      {t.home.cards.c3Desc}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-[#E5E5E0] mt-4 flex justify-between items-center font-mono text-xs font-bold text-[#CC0000]">
                    <span>{t.home.cards.c3Action}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </article>

                {/* Card 4: To Blog & Essays */}
                <article
                  onClick={() => navigateTo('blog')}
                  className="border border-[#111111] bg-[#FFFFFF] p-6 hover:bg-[#F9F9F7] transition-all cursor-pointer hard-shadow-hover flex flex-col justify-between"
                  data-hover="true"
                  data-cursor="BLOG"
                >
                  <div>
                    <span className="font-mono text-[10px] bg-[#111111] text-[#F9F9F7] px-2 py-0.5 uppercase tracking-wider font-bold">
                      {t.home.cards.c4Kicker}
                    </span>
                    <h3 className="font-serif text-2xl font-black text-[#111111] mt-3 mb-2">
                      {t.home.cards.c4Title}
                    </h3>
                    <p className="font-body text-xs text-[#525252] leading-relaxed">
                      {t.home.cards.c4Desc}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-[#E5E5E0] mt-4 flex justify-between items-center font-mono text-xs font-bold text-[#CC0000]">
                    <span>{t.home.cards.c4Action}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </article>
              </div>
            </section>
          </motion.main>
        )}

        {/* ======================================================
            PAGE 1: RESUME (独立专属履历页面 · 参考图 1 格式)
           ====================================================== */}
        {currentPage === 'resume' && (
          <motion.main
            key={`page-resume-${language}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="flex-1 max-w-screen-xl mx-auto px-4 md:px-6 py-10 w-full"
          >
            {/* Breadcrumb Header */}
            <div className="border-b border-[#111111] pb-3 mb-8 flex flex-wrap justify-between items-center text-xs font-mono gap-2">
              <div className="flex items-center gap-2 font-bold text-[#CC0000] uppercase tracking-widest">
                <span>{t.resume.breadcrumb}</span>
              </div>
              <div className="flex items-center gap-4 text-[#737373]">
                <span>{t.common.lastRevised}</span>
                <span>|</span>
                <button
                  onClick={() => window.print()}
                  className="text-[#111111] hover:text-[#CC0000] font-bold uppercase flex items-center gap-1 cursor-pointer bg-transparent border-none p-0"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>{t.common.print}</span>
                </button>
              </div>
            </div>

            {/* MAIN RESUME SECTION: 1:1 REPLICATION OF REFERENCE IMAGE 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 border-b-2 border-[#111111] pb-10 mb-10 items-start">
              {/* LEFT COLUMN: ARCHIVAL EXHIBITION CASE WITH HIGH-FIDELITY LATEX RESUME */}
              <div className="lg:col-span-6 border-2 border-[#111111] bg-[#F4F4F0] p-4 sm:p-6 relative hard-shadow-sm flex flex-col justify-between">
                {/* Top Action Toolbar */}
                <div className="flex justify-between items-center pb-3 mb-4 border-b border-[#111111] text-[11px] font-mono">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#CC0000] inline-block" />
                    <span className="font-bold text-[#111111] uppercase">{t.resume.archivalExhibit}</span>
                  </div>
                  <div className="flex items-center gap-3 text-[#737373]">
                    <button
                      onClick={handleCopyEmail}
                      className="hover:text-[#111111] uppercase font-bold flex items-center gap-1 cursor-pointer bg-transparent border-none p-0"
                    >
                      <Copy className="w-3 h-3 text-[#CC0000]" />
                      <span>{copiedEmail ? t.common.copied : t.common.copyEmail}</span>
                    </button>
                  </div>
                </div>

                {/* THE HIGH-FIDELITY LATEX PAPER RESUME CARD */}
                <div className="bg-white border border-[#111111] p-6 sm:p-8 font-serif shadow-sm text-[#111111] select-text">
                  {/* LaTeX Header */}
                  <div className="border-b-2 border-[#111111] pb-4 mb-5">
                    <h2 className="text-3xl sm:text-4xl font-normal tracking-wide text-[#111111]">
                      {t.resume.latex.name}
                    </h2>
                    <div className="mt-2 space-y-1 font-mono text-xs text-[#333333]">
                      <div className="flex items-center gap-2">
                        <Mail className="w-3.5 h-3.5 text-[#555555]" />
                        <a href="mailto:r.s.he477@gmail.com" className="hover:underline">r.s.he477@gmail.com</a>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold">☎</span>
                        <span>{t.resume.latex.phone}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 text-[#555555]" />
                        <span>{t.resume.latex.country}</span>
                      </div>
                    </div>
                  </div>

                  {/* LaTeX Two-Column Layout */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 text-xs leading-relaxed">
                    {/* Column 1: EXPERIENCE */}
                    <div className="md:col-span-7 space-y-4">
                      <div>
                        <h4 className="font-mono text-xs font-black uppercase tracking-wider border-b border-[#111111] pb-1 mb-2 text-[#111111]">
                          {t.resume.latex.expTitle}
                        </h4>

                        {/* Item 1: Da Vinci */}
                        <div className="space-y-1 mb-3">
                          <div className="font-bold text-[#111111]">
                            {t.resume.latex.davinciTitle}
                          </div>
                          <div className="font-serif italic text-[#555555] text-[11px]">
                            {t.resume.latex.davinciSub}
                          </div>
                          <ul className="list-disc pl-4 space-y-0.5 text-[#444444] text-[11px]">
                            {t.resume.latex.davinciBullets.map((b, bIdx) => (
                              <li key={bIdx}>{b}</li>
                            ))}
                          </ul>
                        </div>

                        {/* Item 2: CGU */}
                        <div className="space-y-1 mb-3">
                          <div className="font-bold text-[#111111]">
                            {t.resume.latex.cguTitle}
                          </div>
                          <div className="font-serif italic text-[#555555] text-[11px]">
                            {t.resume.latex.cguSub}
                          </div>
                          <ul className="list-disc pl-4 space-y-0.5 text-[#444444] text-[11px]">
                            {t.resume.latex.cguBullets.map((b, bIdx) => (
                              <li key={bIdx}>{b}</li>
                            ))}
                          </ul>
                        </div>

                        {/* Item 3: SWIP */}
                        <div className="space-y-1">
                          <div className="font-bold text-[#111111]">
                            {t.resume.latex.swipTitle}
                          </div>
                          <div className="font-serif italic text-[#555555] text-[11px]">
                            {t.resume.latex.swipSub}
                          </div>
                          <ul className="list-disc pl-4 space-y-0.5 text-[#444444] text-[11px]">
                            {t.resume.latex.swipBullets.map((b, bIdx) => (
                              <li key={bIdx}>{b}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Column 2: EDUCATION & SKILLS & HOBBIES */}
                    <div className="md:col-span-5 space-y-4 border-t md:border-t-0 md:border-l border-[#E5E5E0] md:pl-4 pt-4 md:pt-0">
                      {/* Education Section */}
                      <div>
                        <h4 className="font-mono text-xs font-black uppercase tracking-wider border-b border-[#111111] pb-1 mb-2 text-[#111111]">
                          {t.resume.latex.eduTitle}
                        </h4>
                        <div className="space-y-2 text-[11px]">
                          <div>
                            <div className="font-bold text-[#111111]">{t.resume.latex.msTitle}</div>
                            <div className="italic text-[#555555]">{t.resume.latex.msSub}</div>
                          </div>
                          <div>
                            <div className="font-bold text-[#111111]">{t.resume.latex.bsTitle}</div>
                            <div className="italic text-[#555555]">{t.resume.latex.bsSub}</div>
                            <div className="text-[10px] text-[#666666] italic mt-0.5">
                              {t.resume.latex.bsThesis}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Skills Section */}
                      <div>
                        <h4 className="font-mono text-xs font-black uppercase tracking-wider border-b border-[#111111] pb-1 mb-2 text-[#111111]">
                          {t.resume.latex.skillsTitle}
                        </h4>
                        <div className="space-y-1.5 text-[11px] text-[#444444]">
                          <div>
                            <span className="font-bold text-[#111111]">{t.resume.latex.techLabel}</span> Python, Go, React, MATLAB, Java, Scheme
                          </div>
                          <div>
                            <span className="font-bold text-[#111111]">{t.resume.latex.langLabel}</span> {t.resume.latex.langVal}
                          </div>
                        </div>
                      </div>

                      {/* Hobbies Section */}
                      <div>
                        <h4 className="font-mono text-xs font-black uppercase tracking-wider border-b border-[#111111] pb-1 mb-2 text-[#111111]">
                          {t.resume.latex.hobbiesTitle}
                        </h4>
                        <div className="flex justify-between items-center text-[10px] font-mono text-[#555555] pt-1">
                          <div className="text-center">
                            <span className="text-base block">🥾</span>
                            <span>{t.resume.latex.hobbies.hiking}</span>
                          </div>
                          <div className="text-center">
                            <span className="text-base block">✍️</span>
                            <span>{t.resume.latex.hobbies.writing}</span>
                          </div>
                          <div className="text-center">
                            <span className="text-base block">📐</span>
                            <span>{t.resume.latex.hobbies.handcraft}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Exhibit Bottom Metadata Bar */}
                <div className="mt-4 pt-3 border-t border-[#111111] flex justify-between items-center text-[11px] font-mono text-[#737373]">
                  <span className="font-bold text-[#111111]">FIG. 2.1</span>
                  <span>{t.resume.figCaption}</span>
                </div>
              </div>

              {/* RIGHT COLUMN: 4 VALUE PILLARS */}
              <div className="lg:col-span-6 space-y-6 lg:pl-4">
                {/* Top Label */}
                <div className="border-b border-[#111111] pb-1 w-fit">
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#111111]">
                    {t.resume.pillarsKicker}
                  </span>
                </div>

                {/* Headline */}
                <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-black text-[#111111] leading-[1.05] tracking-tight">
                  {t.resume.pillarsHeadline}
                </h2>

                {/* Subtitle */}
                <p className="font-serif italic text-lg sm:text-xl text-[#525252] leading-relaxed">
                  {t.resume.pillarsSub}
                </p>

                {/* Divider Line */}
                <div className="w-full h-px bg-[#111111] my-4" />

                {/* 4 Numbered Pillars (Red 1. 2. 3. 4.) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8 pt-2">
                  <div className="space-y-2">
                    <div className="flex items-baseline gap-2">
                      <span className="font-mono text-lg font-bold text-[#CC0000]">1.</span>
                      <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#111111]">
                        {t.resume.pillars.p1Title}
                      </h4>
                    </div>
                    <p className="font-body text-xs text-[#525252] leading-relaxed text-justify">
                      {t.resume.pillars.p1Desc}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-baseline gap-2">
                      <span className="font-mono text-lg font-bold text-[#CC0000]">2.</span>
                      <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#111111]">
                        {t.resume.pillars.p2Title}
                      </h4>
                    </div>
                    <p className="font-body text-xs text-[#525252] leading-relaxed text-justify">
                      {t.resume.pillars.p2Desc}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-baseline gap-2">
                      <span className="font-mono text-lg font-bold text-[#CC0000]">3.</span>
                      <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#111111]">
                        {t.resume.pillars.p3Title}
                      </h4>
                    </div>
                    <p className="font-body text-xs text-[#525252] leading-relaxed text-justify">
                      {t.resume.pillars.p3Desc}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-baseline gap-2">
                      <span className="font-mono text-lg font-bold text-[#CC0000]">4.</span>
                      <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#111111]">
                        {t.resume.pillars.p4Title}
                      </h4>
                    </div>
                    <p className="font-body text-xs text-[#525252] leading-relaxed text-justify">
                      {t.resume.pillars.p4Desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Archival Callout & Direct Link to Timeline */}
            <div className="border-2 border-[#111111] bg-[#F4F4F0] p-6 sm:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 hard-shadow-sm">
              <div className="space-y-1.5 max-w-2xl">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#CC0000] inline-block" />
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#CC0000]">
                    {t.resume.calloutBadge}
                  </span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-black text-[#111111]">
                  {t.resume.calloutTitle}
                </h3>
                <p className="font-body text-xs sm:text-sm text-[#525252] leading-relaxed">
                  {t.resume.calloutDesc}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <button
                  onClick={() => navigateTo('timeline')}
                  className="bg-[#111111] text-[#F9F9F7] px-6 py-3 font-mono text-xs font-bold uppercase tracking-widest hover:bg-[#CC0000] transition-colors cursor-pointer flex items-center gap-2"
                  data-hover="true"
                  data-cursor="TIMELINE"
                >
                  <span>{t.resume.calloutBtn}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => window.print()}
                  className="border border-[#111111] bg-white text-[#111111] px-4 py-3 font-mono text-xs font-bold uppercase tracking-widest hover:bg-[#111111] hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>{t.resume.printBtn}</span>
                </button>
              </div>
            </div>
          </motion.main>
        )}

        {/* ======================================================
            PAGE 2: TIMELINE (独立专属编年轨迹与生活足迹档案)
           ====================================================== */}
        {currentPage === 'timeline' && (
          <motion.main
            key={`page-timeline-${language}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="flex-1 max-w-screen-xl mx-auto px-4 md:px-6 py-10 w-full"
          >
            {/* Breadcrumb Header */}
            <div className="border-b border-[#111111] pb-3 mb-8 flex flex-wrap justify-between items-center text-xs font-mono gap-2">
              <div className="flex items-center gap-2 font-bold text-[#CC0000] uppercase tracking-widest">
                <span>{t.timeline.breadcrumb}</span>
              </div>
              <div className="flex items-center gap-4 text-[#737373]">
                <span>{t.timeline.expeditionSpan}</span>
                <span>|</span>
                <button
                  onClick={() => navigateTo('resume')}
                  className="text-[#111111] hover:text-[#CC0000] font-bold uppercase flex items-center gap-1 cursor-pointer bg-transparent border-none p-0"
                >
                  <ArrowRight className="w-3.5 h-3.5 rotate-180" />
                  <span>{t.timeline.backToResume}</span>
                </button>
              </div>
            </div>

            {/* Masthead Header */}
            <div className="border-b-4 border-[#111111] pb-6 mb-8">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h1 className="font-serif text-4xl sm:text-6xl font-black text-[#111111]">
                    {t.timeline.mastheadTitle}
                  </h1>
                  <p className="font-serif italic text-sm md:text-base text-[#525252] mt-2 max-w-3xl leading-relaxed">
                    {t.timeline.mastheadSub}
                  </p>
                </div>

                {/* Quick Stats Pill */}
                <div className="border border-[#111111] bg-white p-3 font-mono text-xs hidden sm:flex items-center gap-4 hard-shadow-sm">
                  <div>
                    <span className="text-[10px] text-[#737373] block">{t.timeline.totalMilestones}</span>
                    <span className="font-bold text-base text-[#111111]">{t.timeline.nodesCount}</span>
                  </div>
                  <div className="w-px h-8 bg-[#E5E5E0]" />
                  <div>
                    <span className="text-[10px] text-[#737373] block">
                      {language === 'zh' ? '历时年份' : 'TIME SPAN'}
                    </span>
                    <span className="font-bold text-base text-[#CC0000]">{t.timeline.timeSpan}</span>
                  </div>
                </div>
              </div>

              {/* Category Filter Pills */}
              <div className="flex flex-wrap items-center gap-2 mt-6 pt-4 border-t border-[#E5E5E0]">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#737373] mr-2">
                  {t.timeline.filterLabel}
                </span>
                {[
                  { id: 'ALL', label: t.timeline.filters.all },
                  { id: 'Indie Dev', label: t.timeline.filters.indie },
                  { id: 'Journey', label: t.timeline.filters.journey },
                  { id: 'Education', label: t.timeline.filters.edu },
                  { id: 'Volunteer', label: t.timeline.filters.volunteer }
                ].map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setTimelineFilter(cat.id)}
                    className={`font-mono text-xs px-3 py-1 border transition-all cursor-pointer ${
                      timelineFilter === cat.id
                        ? 'bg-[#111111] text-[#F9F9F7] border-[#111111] font-bold'
                        : 'bg-white text-[#111111] border-[#111111] hover:bg-[#F4F4F0]'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Two Column Layout: Timeline vs Competency Matrix */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              {/* Left 8-Col: Chronological Timeline */}
              <div className="lg:col-span-8 space-y-8">
                <div className="border-t border-[#111111] divide-y divide-[#111111]">
                  {t.timeline.nodes
                    .filter((node) => timelineFilter === 'ALL' || node.category === timelineFilter)
                    .map((node) => (
                      <article key={node.id} className="py-6 space-y-2.5">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span className="font-mono text-xs font-bold bg-[#111111] text-[#F9F9F7] px-2 py-0.5 uppercase tracking-wider">
                            {node.period}
                          </span>
                          <div className="flex items-center gap-3 font-mono text-xs text-[#737373]">
                            <span className="flex items-center gap-1">
                              <MapPin className="w-3.5 h-3.5 text-[#CC0000]" />
                              {node.location}
                            </span>
                            {node.tag && (
                              <span className="border border-[#CC0000] text-[#CC0000] px-1.5 py-0.2 text-[10px] font-bold uppercase">
                                {node.tag}
                              </span>
                            )}
                          </div>
                        </div>

                        <h4 className="font-serif text-2xl font-bold text-[#111111]">
                          {node.title}
                        </h4>
                        <div className="font-serif italic text-xs text-[#737373]">
                          {node.organization}
                        </div>

                        <p className="font-body text-sm text-[#404040] leading-relaxed text-justify">
                          {node.description}
                        </p>

                        {node.details && (
                          <div className="flex flex-wrap gap-2 pt-1 font-mono text-xs text-[#525252]">
                            {node.details.map((d, idx) => (
                              <span key={idx} className="border border-[#E5E5E0] bg-[#FFFFFF] px-2 py-0.5">
                                • {d}
                              </span>
                            ))}
                          </div>
                        )}
                      </article>
                    ))}
                </div>
              </div>

              {/* Right 4-Col: Skill Matrix & Language Dossier */}
              <div className="lg:col-span-4 space-y-8">
                {/* Snapshot Card */}
                <div className="border-2 border-[#111111] bg-white p-6 hard-shadow-sm">
                  <div className="border-b-2 border-[#111111] pb-2 mb-4 font-mono text-xs font-bold uppercase text-[#111111]">
                    {t.common.essentialVitals}
                  </div>
                  <div className="space-y-3 font-mono text-xs">
                    <div className="flex justify-between border-b border-[#E5E5E0] pb-1.5">
                      <span className="text-[#737373]">{t.timeline.vitals.nameLabel}</span>
                      <span className="font-bold">{t.timeline.vitals.nameVal}</span>
                    </div>
                    <div className="flex justify-between border-b border-[#E5E5E0] pb-1.5">
                      <span className="text-[#737373]">{t.timeline.vitals.degreeLabel}</span>
                      <span className="font-bold">{t.timeline.vitals.degreeVal}</span>
                    </div>
                    <div className="flex justify-between border-b border-[#E5E5E0] pb-1.5">
                      <span className="text-[#737373]">{t.timeline.vitals.gradLabel}</span>
                      <span className="font-bold">{t.timeline.vitals.gradVal}</span>
                    </div>
                    <div className="flex justify-between border-b border-[#E5E5E0] pb-1.5">
                      <span className="text-[#737373]">{t.timeline.vitals.engLabel}</span>
                      <span className="font-bold text-[#CC0000]">{t.timeline.vitals.engVal}</span>
                    </div>
                    <div className="flex justify-between border-b border-[#E5E5E0] pb-1.5">
                      <span className="text-[#737373]">{t.timeline.vitals.gerLabel}</span>
                      <span className="font-bold">{t.timeline.vitals.gerVal}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#737373]">{t.timeline.vitals.specLabel}</span>
                      <span className="font-bold text-[#CC0000]">{t.timeline.vitals.specVal}</span>
                    </div>
                  </div>
                </div>

                {/* Skill Blocks */}
                <div className="border border-[#111111] bg-white divide-y divide-[#111111]">
                  {t.timeline.skillGroups.map((group, idx) => (
                    <div key={idx} className="p-5">
                      <h5 className="font-serif font-black text-sm text-[#111111] mb-1">
                        {group.category}
                      </h5>
                      <p className="font-body text-[11px] text-[#737373] mb-3 leading-relaxed">
                        {group.description}
                      </p>
                      <div className="space-y-2 font-mono text-xs">
                        {group.skills.map((s, sIdx) => (
                          <div key={sIdx} className="flex justify-between items-center">
                            <span className="font-bold text-[#111111]">{s.name}</span>
                            <span className="text-[10px] text-[#CC0000] border border-[#CC0000] px-1 py-0.2">
                              {s.level}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Geographic Footprints Card */}
                <div className="border border-[#111111] bg-[#FFFFFF] p-6 text-xs font-mono space-y-3">
                  <div className="font-bold text-[#111111] uppercase border-b border-[#111111] pb-1 mb-2">
                    {t.timeline.geo.title}
                  </div>
                  <div className="space-y-2 text-[#525252]">
                    {t.timeline.geo.items.map((item, gIdx) => (
                      <div key={gIdx} className="flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 text-[#CC0000] shrink-0" />
                        <span><strong>{item.loc}</strong> {item.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.main>
        )}

        {/* ======================================================
            PAGE 3: PROJECT (独立精选造物展厅)
           ====================================================== */}
        {currentPage === 'project' && (
          <motion.main
            key={`page-project-${language}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="flex-1 max-w-screen-xl mx-auto px-4 md:px-6 py-10 w-full"
          >
            {/* Page Header */}
            <div className="border-b-4 border-[#111111] pb-6 mb-10">
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#CC0000] uppercase tracking-widest mb-1">
                <span>{t.project.breadcrumb}</span>
              </div>
              <h1 className="font-serif text-4xl sm:text-6xl font-black text-[#111111]">
                {t.project.pageTitle}
              </h1>
              <p className="font-serif italic text-sm md:text-base text-[#525252] mt-2 max-w-2xl">
                {t.project.pageSub}
              </p>
            </div>

            {/* 4-Column Newspaper Project Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {t.project.projects.map((proj, idx) => (
                <ProjectCard
                  key={proj.id}
                  project={proj}
                  index={idx}
                  language={language}
                  onClick={() => setSelectedProjectId(proj.id)}
                />
              ))}
            </div>

            {/* AI-Augmented Workflow Deep-dive Bar */}
            <div className="mt-14 p-8 bg-[#111111] text-[#F9F9F7] border-2 border-[#111111] hard-shadow">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-[#333333] pb-4 mb-6">
                <div>
                  <span className="font-mono text-xs font-bold text-[#CC0000] uppercase tracking-widest block mb-1">
                    {t.project.workflowBadge}
                  </span>
                  <h3 className="font-serif text-2xl font-black">
                    {t.project.workflowHeadline}
                  </h3>
                </div>
                <button
                  onClick={() => navigateTo('about')}
                  className="bg-[#F9F9F7] text-[#111111] px-5 py-2 font-mono text-xs font-bold uppercase hover:bg-[#CC0000] hover:text-white transition-colors shrink-0"
                >
                  {t.project.workflowCta}
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
                {t.project.steps.map((st, sIdx) => (
                  <div key={sIdx} className="border border-[#333333] p-4 bg-[#1a1a1a]">
                    <span className="text-[#CC0000] font-bold block mb-1">{st.num}. {st.title}</span>
                    <p className="text-[#A3A3A3] font-body text-xs leading-relaxed">
                      {st.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.main>
        )}

        {/* ======================================================
            PAGE 4: BLOG (独立文艺与随笔副刊)
           ====================================================== */}
        {currentPage === 'blog' && (
          <motion.main
            key={`page-blog-${language}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="flex-1 max-w-screen-xl mx-auto px-4 md:px-6 py-10 w-full"
          >
            {/* Page Header */}
            <div className="border-b-4 border-[#111111] pb-6 mb-10">
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#CC0000] uppercase tracking-widest mb-1">
                <span>{t.blog.breadcrumb}</span>
              </div>
              <h1 className="font-serif text-4xl sm:text-6xl font-black text-[#111111]">
                {t.blog.pageTitle}
              </h1>
              <p className="font-serif italic text-sm md:text-base text-[#525252] mt-2 max-w-2xl">
                {t.blog.pageSub}
              </p>
            </div>

            {/* Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {t.blog.writings.map((item) => (
                <article
                  key={item.id}
                  onClick={() => setSelectedWritingId(item.id)}
                  className="border border-[#111111] bg-white p-8 flex flex-col justify-between cursor-pointer hard-shadow-hover transition-all min-h-[380px]"
                  data-hover="true"
                  data-cursor="READ"
                >
                  <div>
                    <div className="flex justify-between items-center border-b border-[#111111] pb-2 mb-4 font-mono text-xs">
                      <span className="font-bold text-[#CC0000]">{item.genre}</span>
                      <span className="text-[#737373]">{item.date}</span>
                    </div>

                    <h3 className="font-serif text-2xl font-bold text-[#111111] mb-4 hover:text-[#CC0000] transition-colors leading-snug">
                      {item.title}
                    </h3>

                    <p className="font-body text-sm text-[#525252] leading-relaxed italic line-clamp-5">
                      “{item.excerpt}”
                    </p>
                  </div>

                  <div className="pt-6 border-t border-[#E5E5E0] mt-6 flex justify-between items-center font-mono text-xs text-[#111111]">
                    <span className="font-bold uppercase tracking-wider">{t.common.readMore}</span>
                    <BookOpen className="w-4 h-4 text-[#CC0000]" />
                  </div>
                </article>
              ))}
            </div>

            {/* Editorial Footer Quote */}
            <div className="mt-14 p-8 border-2 border-[#111111] bg-[#F9F9F7] text-center max-w-2xl mx-auto">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#737373] block mb-2">
                {t.blog.colophonKicker}
              </span>
              <p className="font-serif italic text-lg text-[#111111] leading-relaxed">
                {t.blog.colophonQuote}
              </p>
            </div>
          </motion.main>
        )}

        {/* ======================================================
            PAGE 5: ABOUT (独立自述与理念档案)
           ====================================================== */}
        {currentPage === 'about' && (
          <motion.main
            key={`page-about-${language}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="flex-1 max-w-screen-xl mx-auto px-4 md:px-6 py-10 w-full"
          >
            {/* Page Breadcrumb Header */}
            <div className="border-b border-[#111111] pb-3 mb-8 flex justify-between items-center text-xs font-mono">
              <div className="flex items-center gap-2 font-bold text-[#CC0000] uppercase tracking-widest">
                <span>{t.about.breadcrumb}</span>
              </div>
              <span className="text-[#737373]">{t.about.tagline}</span>
            </div>

            {/* FAQ SECTION */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 border-b-4 border-[#111111] pb-14 mb-14 items-start">
              {/* Left Column: Title + Help Center Box */}
              <div className="lg:col-span-4 space-y-6">
                <h2 className="font-serif text-4xl sm:text-5xl lg:text-[3.25rem] font-black text-[#111111] leading-[1.05] tracking-tight whitespace-pre-line">
                  {t.about.faqTitle}
                </h2>

                <div className="border border-[#111111] bg-[#FFFFFF] p-6 max-w-sm hard-shadow-sm">
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#111111] block mb-2">
                    {t.about.helpKicker}
                  </span>
                  <p className="font-body text-xs text-[#525252] leading-relaxed mb-4">
                    {t.about.helpDesc}
                  </p>
                  <button
                    onClick={handleCopyEmail}
                    className="text-[#CC0000] font-mono text-xs font-bold hover:underline flex items-center gap-1 cursor-pointer p-0 bg-transparent border-none"
                    data-hover="true"
                    data-cursor="CONTACT"
                  >
                    <span>{copiedEmail ? t.common.copied : t.about.helpCta}</span>
                  </button>
                </div>
              </div>

              {/* Right Column: Newsprint Accordion List */}
              <div className="lg:col-span-8 border-t border-[#111111]">
                {t.about.faqs.map((faq, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div key={idx} className="border-b border-[#111111]">
                      <button
                        onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                        className="w-full py-5 text-left flex justify-between items-center gap-4 bg-transparent border-none cursor-pointer group"
                        data-hover="true"
                        data-cursor="TOGGLE"
                      >
                        <div className="flex-1">
                          <span className="font-serif text-lg md:text-xl font-bold text-[#111111] group-hover:text-[#CC0000] transition-colors leading-snug block">
                            {faq.q}
                          </span>
                          <span className="font-serif italic text-xs text-[#737373] mt-1 block">
                            {faq.sub}
                          </span>
                        </div>

                        {/* Plus/Minus Icon */}
                        <div className="border border-[#111111] w-7 h-7 flex items-center justify-center shrink-0 bg-white group-hover:bg-[#111111] group-hover:text-[#F9F9F7] transition-all">
                          {isOpen ? (
                            <Minus className="w-4 h-4" />
                          ) : (
                            <Plus className="w-4 h-4" />
                          )}
                        </div>
                      </button>

                      {/* Expandable Answer */}
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="pb-5 font-body text-sm text-[#404040] leading-relaxed border-t border-[#E5E5E0] pt-3 text-justify">
                              {faq.a}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Editorial Long-form Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              {/* Left 8-Col Narrative */}
              <div className="lg:col-span-8 space-y-8 font-body text-base text-[#111111] leading-relaxed text-justify">
                <div className="border-b-2 border-[#111111] pb-3 mb-6">
                  <h3 className="font-serif text-2xl font-black">
                    {t.about.storyHeadline}
                  </h3>
                </div>

                <p className="drop-cap">
                  {t.about.p1}
                </p>

                <p>
                  {t.about.p2}
                </p>

                {/* Inverted Callout: Why AI-Augmented */}
                <div className="p-6 bg-[#111111] text-[#F9F9F7] border border-[#111111] space-y-3">
                  <span className="editorial-stamp">
                    {t.about.manifestoBadge}
                  </span>
                  <h4 className="font-serif text-xl font-bold text-white">
                    {t.about.manifestoHeadline}
                  </h4>
                  <p className="font-body text-xs text-[#D4D4D4] leading-relaxed">
                    {t.about.manifestoBody}
                  </p>
                </div>

                <p>
                  {t.about.p3}
                </p>
              </div>

              {/* Right 4-Col Quick Facts & Contact Form */}
              <div className="lg:col-span-4 space-y-8">
                <div className="border-2 border-[#111111] bg-white p-6 hard-shadow-sm">
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#CC0000] block mb-2">
                    {t.about.connectKicker}
                  </span>
                  <h4 className="font-serif text-2xl font-black mb-3">{t.about.connectHeadline}</h4>
                  <p className="font-body text-xs text-[#525252] leading-relaxed mb-6">
                    {t.about.connectSub}
                  </p>

                  <div className="space-y-3 font-mono text-xs">
                    <button
                      onClick={handleCopyEmail}
                      className="w-full bg-[#111111] text-[#F9F9F7] py-3 text-center font-bold tracking-widest uppercase hover:bg-[#CC0000] transition-colors"
                      data-hover="true"
                    >
                      {copiedEmail ? t.common.copied : t.common.copyEmail}
                    </button>

                    <a
                      href="mailto:r.s.he477@gmail.com"
                      className="w-full border border-[#111111] py-3 text-center block font-bold tracking-widest uppercase hover:bg-[#111111] hover:text-[#F9F9F7] transition-all"
                      data-hover="true"
                    >
                      r.s.he477@gmail.com
                    </a>
                  </div>
                </div>

                <div className="border border-[#111111] bg-[#FFFFFF] p-6 text-xs font-mono space-y-2 text-[#525252]">
                  <div className="font-bold text-[#111111] uppercase border-b border-[#111111] pb-1 mb-2">
                    {t.about.statusKicker}
                  </div>
                  {t.about.statusItems.map((st, stIdx) => (
                    <p key={stIdx}>{st}</p>
                  ))}
                </div>
              </div>
            </div>
          </motion.main>
        )}
      </AnimatePresence>

      {/* ========================================================
          GLOBAL NEWSPRINT FOOTER
         ======================================================== */}
      <footer className="border-t-2 border-[#111111] bg-[#F9F9F7] py-8 mt-16">
        <div className="max-w-screen-xl mx-auto px-4 md:px-6 flex flex-wrap justify-between items-center gap-4 text-xs font-mono text-[#737373]">
          <div>
            <span className="font-bold text-[#111111]">{t.common.footer.edition}</span>
            <p className="text-[11px] mt-0.5">{t.common.footer.rights}</p>
          </div>

          <div className="flex items-center gap-6">
            <button onClick={() => navigateTo('home')} className="hover:text-[#CC0000] uppercase font-bold">
              {t.common.nav.home}
            </button>
            <button onClick={() => navigateTo('resume')} className="hover:text-[#CC0000] uppercase font-bold">
              {t.common.nav.resume}
            </button>
            <button onClick={() => navigateTo('timeline')} className="hover:text-[#CC0000] uppercase font-bold">
              {t.common.nav.timeline}
            </button>
            <button onClick={() => navigateTo('project')} className="hover:text-[#CC0000] uppercase font-bold">
              {t.common.nav.project}
            </button>
            <button onClick={() => navigateTo('blog')} className="hover:text-[#CC0000] uppercase font-bold">
              {t.common.nav.blog}
            </button>
            <button onClick={() => navigateTo('about')} className="hover:text-[#CC0000] uppercase font-bold">
              {t.common.nav.about}
            </button>
          </div>
        </div>
      </footer>

      {/* ========================================================
          PROJECT EXTRA EDITION MODAL (号外特刊弹窗)
         ======================================================== */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProjectId(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-[#111111]/80 backdrop-blur-sm cursor-auto"
          >
            <motion.div
              initial={{ scale: 0.96, y: 16 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96, y: 16 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#F9F9F7] border-4 border-[#111111] p-6 md:p-10 hard-shadow-lg text-[#111111]"
            >
              <button
                onClick={() => setSelectedProjectId(null)}
                className="absolute top-4 right-4 z-20 p-2 bg-[#111111] text-[#F9F9F7] hover:bg-[#CC0000] transition-colors cursor-pointer"
                data-hover="true"
                data-cursor="CLOSE"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex justify-between items-center border-b-2 border-[#111111] pb-3 mb-6 font-mono text-xs">
                <span className="bg-[#CC0000] text-white font-bold px-2 py-0.5 uppercase tracking-wider">
                  {language === 'zh' ? '号外特刊' : 'EXTRA EDITION'}
                </span>
                <span className="text-[#737373]">{language === 'zh' ? '何瑞斯 · 档案' : 'RUISI HE · ARCHIVES'}</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-5">
                  <div className="border border-[#111111] p-1 bg-white mb-3">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.name}
                      className="w-full h-56 object-cover grayscale contrast-125"
                    />
                  </div>
                  <div className="font-mono text-[10px] text-[#737373] text-center border-b border-[#E5E5E0] pb-2">
                    {language === 'zh' ? '展品图示' : `FIG. ARCHIVAL PHOTOGRAPH OF ${selectedProject.name.toUpperCase()}`}
                  </div>
                  <div className="mt-4 space-y-2 font-mono text-xs">
                    <div className="flex justify-between border-b border-[#E5E5E0] pb-1">
                      <span className="text-[#737373]">{language === 'zh' ? '项目分类' : 'CATEGORY'}</span>
                      <span className="font-bold">{selectedProject.category}</span>
                    </div>
                    <div className="flex justify-between border-b border-[#E5E5E0] pb-1">
                      <span className="text-[#737373]">{language === 'zh' ? '当前状态' : 'STATUS'}</span>
                      <span className="font-bold text-[#CC0000]">{selectedProject.status}</span>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-7 space-y-4">
                  <h3 className="font-serif text-3xl md:text-4xl font-black text-[#111111] leading-tight">
                    {selectedProject.name}
                  </h3>
                  <p className="font-serif italic text-sm text-[#404040] border-l-2 border-[#111111] pl-3">
                    {selectedProject.subtitle}
                  </p>

                  <p className="font-body text-sm leading-relaxed text-[#111111] text-justify">
                    {selectedProject.description}
                  </p>

                  <div className="border border-[#111111] p-4 bg-[#FFFFFF]">
                    <div className="font-mono text-xs font-bold text-[#CC0000] uppercase mb-1">
                      {language === 'zh' ? '人机协同' : 'AI-AUGMENTED WORKFLOW'}
                    </div>
                    <p className="font-body text-xs text-[#404040] leading-relaxed">
                      {selectedProject.aiWorkflow}
                    </p>
                  </div>

                  <div>
                    <h5 className="font-mono text-xs font-bold uppercase tracking-wider text-[#111111] mb-2">
                      {language === 'zh' ? '核心亮点' : 'KEY HIGHLIGHTS'}
                    </h5>
                    <div className="space-y-1.5 font-body text-xs text-[#404040]">
                      {selectedProject.highlights.map((hl, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2">
                          <span className="text-[#CC0000] font-bold">•</span>
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {selectedProject.stack.map((s, sIdx) => (
                      <span
                        key={sIdx}
                        className="font-mono text-[10px] uppercase border border-[#111111] px-1.5 py-0.5 bg-[#FFFFFF]"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  {selectedProject.link && (
                    <div className="pt-4 mt-3 border-t border-[#111111] flex flex-wrap gap-3 items-center justify-between">
                      <a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#111111] text-[#F9F9F7] hover:bg-[#CC0000] px-4 py-2 font-mono text-xs font-bold tracking-wider transition-colors hard-shadow-sm cursor-pointer min-h-[40px]"
                        data-hover="true"
                        data-cursor="GITHUB"
                      >
                        <Code2 className="w-4 h-4" />
                        <span>{t.common.viewRepo || (language === 'zh' ? '访问仓库 →' : 'VIEW REPOSITORY →')}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                      <span className="font-mono text-[10px] text-[#737373]">
                        {language === 'zh' ? '开源项目' : 'OPEN SOURCE REPOSITORY'}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ========================================================
          WRITING ARTICLE MODAL (副刊文章弹窗)
         ======================================================== */}
      <AnimatePresence>
        {selectedWriting && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedWritingId(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center p-3 sm:p-4 bg-[#111111]/80 backdrop-blur-sm cursor-auto"
          >
            <motion.div
              initial={{ scale: 0.96, y: 16 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96, y: 16 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl bg-[#F9F9F7] border-4 border-[#111111] p-6 sm:p-8 md:p-12 hard-shadow-lg text-[#111111] max-h-[88vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedWritingId(null)}
                className="absolute top-4 right-4 p-2.5 bg-[#111111] text-[#F9F9F7] hover:bg-[#CC0000] transition-colors cursor-pointer min-w-[38px] min-h-[38px] flex items-center justify-center"
                data-hover="true"
                data-cursor="CLOSE"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="border-b-2 border-[#111111] pb-2 mb-6 font-mono text-xs flex flex-wrap justify-between items-center gap-2">
                <div className="flex items-center gap-2">
                  <span className="bg-[#CC0000] text-white font-bold px-2 py-0.5 uppercase">
                    {language === 'zh' ? selectedWriting.genre : `${selectedWriting.genre} · SUPPLEMENT`}
                  </span>
                  <span className="text-[#737373]">{selectedWriting.date}</span>
                </div>
                <div className="flex items-center gap-3 text-[#737373] text-[11px]">
                  <span>
                    {language === 'zh'
                      ? `约 ${selectedWriting.content.join('').length} 字`
                      : `~${selectedWriting.content.join(' ').split(/\s+/).length} WORDS`}
                  </span>
                  <span>·</span>
                  <span>
                    {language === 'zh'
                      ? `预计阅读 ${Math.max(1, Math.round(selectedWriting.content.join('').length / 300))} 分钟`
                      : `~${Math.max(1, Math.round(selectedWriting.content.join(' ').split(/\s+/).length / 180))} MIN READ`}
                  </span>
                  <button
                    onClick={() => {
                      const url = `${window.location.origin}${window.location.pathname}#/blog`;
                      navigator.clipboard.writeText(url);
                      setCopiedShareLink(true);
                      setTimeout(() => setCopiedShareLink(false), 2200);
                    }}
                    className="border border-[#111111] bg-white hover:bg-[#111111] hover:text-[#F9F9F7] px-2 py-0.5 text-[10px] font-bold transition-colors flex items-center gap-1 cursor-pointer min-h-[32px]"
                    title={language === 'zh' ? '复制文章分享链接' : 'Copy essay link'}
                    data-hover="true"
                    data-cursor="SHARE"
                  >
                    {copiedShareLink ? (
                      <>
                        <Check className="w-3 h-3 text-[#CC0000]" />
                        <span className="text-[#CC0000]">{t.common.linkCopied || (language === 'zh' ? '已复制' : 'COPIED')}</span>
                      </>
                    ) : (
                      <>
                        <Share2 className="w-3 h-3" />
                        <span>{t.common.shareArticle || (language === 'zh' ? '分享' : 'SHARE')}</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              <h3 className="font-serif text-3xl font-black text-[#111111] mb-6 leading-tight">
                {selectedWriting.title}
              </h3>

              <div className="space-y-4 font-body text-base text-[#111111] leading-relaxed">
                {selectedWriting.content.map((p, pIdx) => (
                  <p key={pIdx} className="tracking-wide">
                    {p}
                  </p>
                ))}
              </div>

              <div className="mt-10 pt-6 border-t-2 border-[#111111] flex justify-between items-center font-mono text-xs text-[#737373]">
                <span>{language === 'zh' ? '作者: 何瑞斯 · 个人自留地' : 'AUTHOR: RUISI HE · THE CHRONICLE'}</span>
                <button
                  onClick={() => setSelectedWritingId(null)}
                  className="text-[#CC0000] font-bold hover:underline cursor-pointer min-h-[36px] flex items-center"
                >
                  {t.common.close} &rarr;
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ========================================================
          FLOATING BACK TO TOP BUTTON (Bottom-Center, Dynamic Opacity & Safe-Area)
         ======================================================== */}
      <div className="fixed left-1/2 -translate-x-1/2 bottom-5 sm:bottom-6 z-40 pointer-events-none pb-[env(safe-area-inset-bottom,0px)]">
        <AnimatePresence>
          {showBackToTop && (
            <motion.button
              initial={{ opacity: 0, y: 16, scale: 0.95 }}
              animate={{
                opacity: isScrolling ? 0.2 : 0.95,
                y: 0,
                scale: 1
              }}
              exit={{ opacity: 0, y: 16, scale: 0.95 }}
              transition={{ duration: 0.22 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="pointer-events-auto bg-[#F9F9F7] text-[#111111] hover:!opacity-100 hover:bg-[#111111] hover:text-[#F9F9F7] border-2 border-[#111111] px-4 py-2 sm:py-2 min-h-[38px] font-mono text-xs font-bold tracking-wider hard-shadow-sm flex items-center gap-2 transition-all cursor-pointer select-none active:translate-y-0.5"
              aria-label="Back to Top"
              data-hover="true"
              data-cursor="TOP"
            >
              <span className="text-sm font-black leading-none">↑</span>
              <span>{t.common.backToTop || (language === 'zh' ? '返回顶端' : 'TOP')}</span>
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default App;