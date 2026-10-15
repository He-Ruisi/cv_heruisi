/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

export interface Project {
  id: string;
  name: string;
  subtitle: string;
  category: string;
  stack: string[];
  image: string;
  badge: string;
  summary: string;
  description: string;
  aiWorkflow: string; // 说明该项目如何借助 Claude Code / Antigravity / Codex 等 AI 辅助加速开发
  highlights: string[];
  link?: string;
  status: string;
}

export interface TimelineNode {
  id: string;
  period: string;
  title: string;
  organization: string;
  location: string;
  category: string;
  description: string;
  details?: string[];
  tag?: string;
}

export interface WritingItem {
  id: string;
  title: string;
  genre: string;
  date: string;
  excerpt: string;
  content: string[];
}

export interface SkillGroup {
  category: string;
  iconName: string;
  skills: { name: string; note?: string; level?: string }[];
  description: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export enum Section {
  HERO = 'hero',
  PROJECTS = 'projects',
  PARADIGM = 'paradigm',
  TIMELINE = 'timeline',
  WRITING = 'writing',
  SKILLS = 'skills',
  CONTACT = 'contact',
}
