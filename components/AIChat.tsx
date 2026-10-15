/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Sparkles, Terminal, Radio } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';
import { Language, TRANSLATIONS } from '../translations';

interface AIChatProps {
  language?: Language;
}

const AIChat: React.FC<AIChatProps> = ({ language = 'zh' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const chatT = TRANSLATIONS[language]?.chat || TRANSLATIONS.zh.chat;

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'model',
      text: chatT.welcomeMsg
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Update greeting when language changes if no interaction has occurred
  useEffect(() => {
    if (messages.length === 1 && messages[0].role === 'model') {
      setMessages([{ role: 'model', text: chatT.welcomeMsg }]);
    }
  }, [language, chatT.welcomeMsg]);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      const { scrollHeight, clientHeight } = chatContainerRef.current;
      chatContainerRef.current.scrollTo({
        top: scrollHeight - clientHeight,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSendPrompt = async (textToSend: string) => {
    if (!textToSend.trim() || isLoading) return;

    const userMessage: ChatMessage = { role: 'user', text: textToSend };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    setTimeout(scrollToBottom, 50);

    const promptWithLang = `[User Language: ${language}] ${textToSend}`;
    const responseText = await sendMessageToGemini(promptWithLang);
    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 flex flex-col items-end pointer-events-auto">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="mb-4 w-[92vw] sm:w-[440px] bg-[#F9F9F7] text-[#111111] border-2 border-[#111111] hard-shadow-lg flex flex-col max-h-[80vh] overflow-hidden"
          >
            {/* Newspaper Masthead Header */}
            <div className="bg-[#111111] text-[#F9F9F7] p-3.5 flex justify-between items-center border-b-2 border-[#111111]">
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-6 bg-[#CC0000] text-white flex items-center justify-center font-mono font-bold text-xs">
                  {language === 'zh' ? '电' : 'AI'}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-serif font-black text-sm tracking-wider uppercase">
                      {chatT.title}
                    </h3>
                    <span className="w-1.5 h-1.5 bg-[#CC0000] animate-ping" />
                  </div>
                  <p className="text-[10px] text-[#A3A3A3] font-mono tracking-widest">
                    {chatT.subtitle}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="text-[#F9F9F7] hover:text-[#CC0000] p-1 transition-colors"
                data-hover="true"
                data-cursor={language === 'zh' ? '关闭' : 'CLOSE'}
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Prompts Ticker */}
            <div className="p-2.5 bg-[#E5E5E0] border-b border-[#111111] flex gap-2 overflow-x-auto no-scrollbar">
              {chatT.quickPrompts.map((prompt, i) => (
                <button
                  key={i}
                  onClick={() => handleSendPrompt(prompt)}
                  disabled={isLoading}
                  className="whitespace-nowrap text-[11px] font-mono px-2 py-1 bg-[#F9F9F7] hover:bg-[#111111] hover:text-[#F9F9F7] border border-[#111111] text-[#111111] transition-all flex-shrink-0"
                  data-hover="true"
                  data-cursor={language === 'zh' ? '发报' : 'TRANSMIT'}
                >
                  {prompt}
                </button>
              ))}
            </div>

            {/* Messages Area */}
            <div
              ref={chatContainerRef}
              className="h-72 sm:h-88 overflow-y-auto p-4 space-y-4 scroll-smooth text-sm bg-[#F9F9F7]"
            >
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <span className="text-[10px] font-mono tracking-widest text-[#737373] uppercase mb-1">
                    {msg.role === 'user' 
                      ? (language === 'zh' ? '读者来信' : 'INCOMING INQUIRY') 
                      : (language === 'zh' ? '电报回复' : 'WIRE DISPATCH / RUISI AI')}
                  </span>
                  <div
                    className={`max-w-[90%] p-3 text-xs leading-relaxed font-body ${
                      msg.role === 'user'
                        ? 'bg-[#111111] text-[#F9F9F7] border border-[#111111] shadow-[2px_2px_0px_0px_#737373]'
                        : 'bg-white text-[#111111] border border-[#111111] shadow-[2px_2px_0px_0px_#111111]'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex items-center gap-2 p-2 border border-[#111111] bg-white text-xs font-mono text-[#CC0000]">
                  <Radio className="w-3.5 h-3.5 animate-spin" />
                  <span>{language === 'zh' ? '电报传输中' : 'TRANSMITTING VIA WIRE...'}</span>
                </div>
              )}
            </div>

            {/* Input Bar */}
            <div className="p-3 border-t-2 border-[#111111] bg-[#F9F9F7]">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendPrompt(input);
                }}
                className="flex items-center gap-2"
              >
                <div className="relative flex-1">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder={chatT.placeholder}
                    disabled={isLoading}
                    className="w-full bg-white border border-[#111111] px-3 py-2 text-xs font-mono text-[#111111] focus:outline-none focus:border-[#CC0000] placeholder:text-[#A3A3A3]"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="bg-[#111111] text-[#F9F9F7] px-3.5 py-2 text-xs font-mono font-bold uppercase hover:bg-[#CC0000] disabled:opacity-50 transition-colors flex items-center gap-1.5 min-h-[38px]"
                  data-hover="true"
                  data-cursor="SEND"
                >
                  <Send className="w-3 h-3" />
                  <span className="hidden sm:inline">{chatT.send}</span>
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Launcher Button: Condensed into transparent icon, reveals on hover or touch */}
      {!isOpen && (
        <div className="relative group">
          {/* Revealed Label Pill on Hover */}
          <div className="pointer-events-none absolute right-full mr-2.5 top-1/2 -translate-y-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-200 translate-x-1 group-hover:translate-x-0 hidden sm:flex items-center gap-1.5 bg-[#111111] text-[#F9F9F7] px-2.5 py-1 border border-[#111111] shadow-[2px_2px_0px_0px_#CC0000]">
            <span className="w-1.5 h-1.5 bg-[#CC0000] inline-block animate-pulse" />
            <span className="font-mono text-[11px] font-bold uppercase tracking-wider">
              {chatT.title}
            </span>
          </div>

          {/* Compact Transparent Icon Button: Barely visible when idle (opacity-20 & transparent bg), fully visible on hover / active */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="w-10 h-10 sm:w-9 sm:h-9 flex items-center justify-center border border-[#111111]/30 bg-white/40 text-[#111111] hover:bg-[#111111] hover:text-[#F9F9F7] active:opacity-100 hover:border-[#111111] hover:shadow-[2px_2px_0px_0px_#CC0000] opacity-25 hover:opacity-100 backdrop-blur-[1px] transition-all duration-300 cursor-pointer rounded-none"
            data-hover="true"
            data-cursor={language === 'zh' ? '电报' : 'TELEGRAPH'}
            aria-label={chatT.title}
            title={chatT.title}
          >
            <div className="relative flex items-center justify-center">
              <Radio className="w-4 h-4 text-[#111111] group-hover:text-[#F9F9F7] transition-colors" />
              <span className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-[#CC0000] ring-1 ring-white" />
            </div>
          </motion.button>
        </div>
      )}
    </div>
  );
};

export default AIChat;
