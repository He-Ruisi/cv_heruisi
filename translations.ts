/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import { Project, TimelineNode, WritingItem, SkillGroup } from './types';

export type Language = 'zh' | 'en' | 'de';

export interface TranslationData {
  common: {
    vol: string;
    edition: string;
    subscribe: string;
    copied: string;
    copyEmail: string;
    print: string;
    printDossier: string;
    contactSupport: string;
    close: string;
    readMore: string;
    advertisement: string;
    telegraphDispatch: string;
    telegraphSubtitle: string;
    lastRevised: string;
    essentialVitals: string;
    geographicCoordinates: string;
    viewRepo?: string;
    viewLive?: string;
    backToTop?: string;
    shareArticle?: string;
    linkCopied?: string;
    readingTimeEst?: string;
    wordsCount?: string;
    nav: {
      home: string;
      resume: string;
      timeline: string;
      project: string;
      blog: string;
      about: string;
    };
    footer: {
      edition: string;
      rights: string;
    };
  };
  ticker: string[];
  home: {
    heroKicker: string;
    heroHeadline: string;
    heroSub: string;
    dateMeta: string;
    readingTime: string;
    leadStoryP1: string;
    leadStoryP2: string;
    manifestoBadge: string;
    manifestoTitle: string;
    manifestoP: string;
    weatherKicker: string;
    weatherLocation: string;
    weatherStudio: string;
    weatherDegree: string;
    weatherDegreeSub: string;
    advertKicker: string;
    advertTitle: string;
    topEditionsKicker: string;
    topEditionsSub: string;
    cards: {
      c1Kicker: string;
      c1Title: string;
      c1Desc: string;
      c1Action: string;
      c2Kicker: string;
      c2Title: string;
      c2Desc: string;
      c2Action: string;
      c3Kicker: string;
      c3Title: string;
      c3Desc: string;
      c3Action: string;
      c4Kicker: string;
      c4Title: string;
      c4Desc: string;
      c4Action: string;
    };
  };
  resume: {
    breadcrumb: string;
    archivalExhibit: string;
    figCaption: string;
    pillarsKicker: string;
    pillarsHeadline: string;
    pillarsSub: string;
    pillars: {
      p1Title: string;
      p1Desc: string;
      p2Title: string;
      p2Desc: string;
      p3Title: string;
      p3Desc: string;
      p4Title: string;
      p4Desc: string;
    };
    calloutBadge: string;
    calloutTitle: string;
    calloutDesc: string;
    calloutBtn: string;
    printBtn: string;
    latex: {
      name: string;
      phone: string;
      country: string;
      expTitle: string;
      davinciTitle: string;
      davinciSub: string;
      davinciBullets: string[];
      cguTitle: string;
      cguSub: string;
      cguBullets: string[];
      swipTitle: string;
      swipSub: string;
      swipBullets: string[];
      eduTitle: string;
      msTitle: string;
      msSub: string;
      bsTitle: string;
      bsSub: string;
      bsThesis: string;
      skillsTitle: string;
      techLabel: string;
      langLabel: string;
      langVal: string;
      hobbiesTitle: string;
      hobbies: { hiking: string; writing: string; handcraft: string };
    };
  };
  timeline: {
    breadcrumb: string;
    backToResume: string;
    expeditionSpan: string;
    mastheadTitle: string;
    mastheadSub: string;
    totalMilestones: string;
    nodesCount: string;
    timeSpan: string;
    filterLabel: string;
    filters: {
      all: string;
      indie: string;
      journey: string;
      edu: string;
      volunteer: string;
    };
    nodes: TimelineNode[];
    vitals: {
      nameLabel: string;
      nameVal: string;
      degreeLabel: string;
      degreeVal: string;
      gradLabel: string;
      gradVal: string;
      engLabel: string;
      engVal: string;
      gerLabel: string;
      gerVal: string;
      specLabel: string;
      specVal: string;
    };
    skillGroups: SkillGroup[];
    geo: {
      title: string;
      items: { loc: string; desc: string }[];
    };
  };
  project: {
    breadcrumb: string;
    pageTitle: string;
    pageSub: string;
    projects: Project[];
    workflowBadge: string;
    workflowHeadline: string;
    workflowCta: string;
    steps: { num: string; title: string; desc: string }[];
  };
  blog: {
    breadcrumb: string;
    pageTitle: string;
    pageSub: string;
    writings: WritingItem[];
    colophonKicker: string;
    colophonQuote: string;
  };
  about: {
    breadcrumb: string;
    tagline: string;
    faqTitle: string;
    helpKicker: string;
    helpDesc: string;
    helpCta: string;
    faqs: { q: string; sub: string; a: string }[];
    storyHeadline: string;
    p1: string;
    p2: string;
    manifestoBadge: string;
    manifestoHeadline: string;
    manifestoBody: string;
    p3: string;
    connectKicker: string;
    connectHeadline: string;
    connectSub: string;
    statusKicker: string;
    statusItems: string[];
  };
  chat: {
    title: string;
    subtitle: string;
    welcomeMsg: string;
    quickPrompts: string[];
    placeholder: string;
    send: string;
    statusLive: string;
  };
}

import { zh } from './locales/zh';
import { en } from './locales/en';
import { de } from './locales/de';

export const TRANSLATIONS: Record<Language, TranslationData> = {
  zh,
  en,
  de,
};
