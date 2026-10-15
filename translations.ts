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

export const TRANSLATIONS: Record<Language, TranslationData> = {
  zh: {
    common: {
      vol: '第一卷',
      edition: '2026年版 · 独立造物自留地',
      subscribe: '关注自留地',
      copied: '已复制',
      copyEmail: '复制邮箱',
      print: '打印版面',
      printDossier: '打印简历',
      contactSupport: '电报专线 →',
      close: '关闭',
      readMore: '阅读全文 →',
      advertisement: '号外广告',
      telegraphDispatch: '点击发报',
      telegraphSubtitle: '智能电报桌',
      lastRevised: '存档: 2026年10月',
      essentialVitals: '基础速览',
      geographicCoordinates: '地理足迹',
      viewRepo: '访问仓库 →',
      viewLive: '在线体验 →',
      backToTop: '返回顶端',
      shareArticle: '分享文章',
      linkCopied: '已复制链接',
      readingTimeEst: '预计阅读',
      wordsCount: '字数',
      nav: {
        home: '头版',
        resume: '独立简历',
        timeline: '编年轨迹',
        project: '造物展厅',
        blog: '自留地',
        about: '个人自述'
      },
      footer: {
        edition: '何瑞斯独立档案 · 2026年卷',
        rights: `© ${new Date().getFullYear()} 何瑞斯. 保留所有权利.`
      }
    },
    ticker: [
      '今日快讯: NEINOTE 知识内化笔记应用火热构建中',
      '社论声明: 全量代码由 CLAUDE CODE & CODEX 深度协同辅助开发',
      '南科大地球物理学士/物理学硕士背景转型独立造物者',
      'TAHX 场景驱动记账与物件空间收纳软件完成核心架构',
      '正在游玩: 《啊！是哥布林。》极简黑白灰文字增量 RPG',
      '多语种档案: 英语 CET-6 / 托福 80分 · 德语 A2+ 进阶学习中',
      '游民足迹: 西安半载旅居、河北、云南田野深度义工实践',
    ],
    home: {
      heroKicker: '头版头条',
      heroHeadline: '独立软件造物宣言：理科抽象底色 × 全栈敏捷 × 人机协同',
      heroSub: '告别学院派单一轨道束缚。以严谨物理建模思维为基石，以 AI 终端结对为生产力杠杆，全职打造高内化软件实体。',
      dateMeta: '2026年10月13日 · 晨刊',
      readingTime: '阅读约3分钟',
      leadStoryP1: '在生成式人工智能深刻重塑软件工程生产关系的今天，代码编写的瓶颈早已从机械记忆语法转向领域边界抽象、敏捷原型探索与系统级质量守门。拥有南方科技大学地球物理学理科学士与物理硕士科研训练的我，选择在 2025 年初主动退学，投身真实软件实体的独立打造。',
      leadStoryP2: '以 Go 的高并发稳健性与 React 19 现代响应式流体交互为核心底座，我目前正在全职推进 Neinote（知识内化笔记）、Tahx（场景收纳与记账）及极简文字增量游戏《啊！是哥布林。》。我坦诚并自豪地声明：所有项目均在 Claude Code、Antigravity 与 Codex 深度结对赋能下独立交付完成。',
      manifestoBadge: '立场声明',
      manifestoTitle: '坦诚拥抱人机协同',
      manifestoP: '“在超级个体时代，公开声明全量 AI 辅助开发是对新一代生产力范式的致敬。人类主导架构抽象与产品审美，AI 负责高速代码执行与边缘用例推演，实现 10x 敏捷交付。”',
      weatherKicker: '档案速览',
      weatherLocation: '中国 · 西安 / 居家远程',
      weatherStudio: '独立工作空间',
      weatherDegree: '南科大物理与地球物理',
      weatherDegreeSub: '理科学士 / 物理硕士退学独立',
      advertKicker: '号外专栏',
      advertTitle: '点击发报',
      topEditionsKicker: '今日各版',
      topEditionsSub: '点击直达专属版面',
      cards: {
        c1Kicker: '第一版',
        c1Title: '造物展厅',
        c1Desc: '深度解构 Neinote、Tahx、以及《啊！是哥布林。》三大全栈软件架构与人机协同实录。',
        c1Action: '进入展厅 →',
        c2Kicker: '第二版',
        c2Title: '独立简历',
        c2Desc: '纯前端高精单页版面、南科大学术科研履历展示与四大核心差异化特质深度拆解。',
        c2Action: '查阅简历 →',
        c3Kicker: '第三版',
        c3Title: '编年轨迹',
        c3Desc: '南科大物理学、2025初主动退学决断、半年西安旅居沉淀、多地义工服务与四维技能矩阵。',
        c3Action: '探索轨迹 →',
        c4Kicker: '第四版',
        c4Title: '自留地',
        c4Desc: '《在长安的黄昏里注视电线》、《从象牙塔退回真实的地面》等理科视角下的人文思索。',
        c4Action: '进入自留地 →'
      }
    },
    resume: {
      breadcrumb: '独立简历',
      archivalExhibit: '档案展品',
      figCaption: '简历展品',
      pillarsKicker: '核心特质',
      pillarsHeadline: '为何选择何瑞斯？',
      pillarsSub: '将严密的理科因果推导，转化为真实世界中敏捷运转的高杠杆产品。',
      pillars: {
        p1Title: '数理逻辑',
        p1Desc: '深厚的南方科技大学地球物理学与物理科研底色，面对未知复杂问题时习惯从第一性原理出发解构因果链条与数学模型。',
        p2Title: '全栈敏捷',
        p2Desc: '以 Go 的稳健并发与轻量持久化为后端核心，搭配 React 19 + TypeScript 现代响应式交互，独立闭环打造 Neinote 与 Tahx。',
        p3Title: '人机协同',
        p3Desc: '深度拥抱 Claude Code、Antigravity 与 Codex。人类负责架构边界与产品审美，AI 负责高速代码执行，实现 10x 敏捷交付。',
        p4Title: '多语游民',
        p4Desc: '英语 CET-6 / 托福 80分，德语进阶中 (A2+)，日语入门。历经半年古城西安独立旅居与多地义工服务，具备极强的人文共情与适应韧性。'
      },
      calloutBadge: '轨迹档案',
      calloutTitle: '深入查阅完整编年轨迹与生活足迹档案',
      calloutDesc: '包含南科大科研历程、2025初主动退学心路抉择、古城西安独立旅居创作、河北云南深度义工服务与四维技能矩阵，已移至专属独立版面【编年轨迹】。',
      calloutBtn: '查阅轨迹',
      printBtn: '打印简历',
      latex: {
        name: '何瑞斯 (Ruisi HE)',
        phone: '+86 15815548345',
        country: '中国',
        expTitle: '实践经历',
        davinciTitle: '• 达芬奇挑战营 (2019冬令营)',
        davinciSub: '三等奖 · 2019年12月',
        davinciBullets: [
          '掌握 3D建模、3D打印与激光切割等工程制造技能',
          '根据团队项目目标统筹并完成多项制造与理论验证任务',
          '在理论、方法与动手实践中探索创新视角'
        ],
        cguTitle: '• 中国地球科学联合学术年会',
        cguSub: '参会人员 · 2020年10月',
        cguBullets: [
          '参加多场地球物理学前沿口头学术报告与研讨',
          '拓宽学术视野，汲取跨学科计算前沿知识'
        ],
        swipTitle: '• 中核西南物理研究院科研实习',
        swipSub: '实习生 · 2021年7月 - 8月',
        swipBullets: [
          '参与科研机构的大规模实验与理论模型调研',
          '在经验科学与工程计算中独立完成数据分析任务'
        ],
        eduTitle: '教育背景',
        msTitle: '• 物理学硕士研究生',
        msSub: '南方科技大学 · 2022.09 - 2025初退学',
        bsTitle: '• 地球物理学学士',
        bsSub: '南方科技大学 · 2018.08 - 2022.06',
        bsThesis: '毕业论文: 长电极电阻率法物理模拟实验研究',
        skillsTitle: '专业技能',
        techLabel: '• 常用技术:',
        langLabel: '• 语言能力:',
        langVal: '中文 (母语), 英语 (六级/托福80), 德语 (A2+ 自学中)',
        hobbiesTitle: '兴趣爱好',
        hobbies: {
          hiking: '徒步远足',
          writing: '文学写作',
          handcraft: '手工制造'
        }
      }
    },
    timeline: {
      breadcrumb: '编年轨迹',
      backToResume: '返回简历',
      expeditionSpan: '历程总览',
      mastheadTitle: '编年轨迹',
      mastheadSub: '从南方科技大学理科求索，到 2025 初主动退学转向真实软件实体；从古城西安独立旅居，到河北云南草根义工与全栈人机造物。',
      totalMilestones: '节点统计',
      nodesCount: '6 大节点',
      timeSpan: '2018至今',
      filterLabel: '分类筛选:',
      filters: {
        all: '全部',
        indie: '独立造物',
        journey: '旅居生活',
        edu: '学院科研',
        volunteer: '田野义工'
      },
      nodes: [
        {
          id: 't-now',
          period: '2025至今',
          title: '独立开发者 · 人机协同造物',
          organization: '居家工作室',
          location: '远程居家',
          category: '独立造物',
          tag: '全栈造物',
          description: '以 Go + React 为主要构建底座，深度融合 Claude Code、Antigravity、Codex 等前沿 AI 工具。全职投入独立项目打造（Neinote 知识笔记、Tahx 场景收纳、文字放置游戏《啊！是哥布林。》），并持续进阶德语与日语。',
          details: ['高杠杆人机协同开发范式', '多语种自驱进阶学习', '探索商业闭环与极客工具生态']
        },
        {
          id: 't-xian',
          period: '2025上半年',
          title: '古城西安旅居 · 数字游民探索',
          organization: '独立探索旅途',
          location: '陕西 · 西安',
          category: '旅居生活',
          tag: '数字游民',
          description: '在古都西安独立旅居半年，跳出学院轨道的单一评价体系，在历史砖瓦与市井烟火之间专注阅读、写作与代码构建。',
          details: ['半年独立游民生活实践', '沉淀文学写作与哲学思索', '完成数个软件核心架构原型']
        },
        {
          id: 't-choice',
          period: '2025年初',
          title: '人生转折：跳出象牙塔框架，主动退学',
          organization: '南方科技大学物理系',
          location: '广东 · 深圳',
          category: '学院科研',
          tag: '人生转折',
          description: '出于清晰的自我认知与独立创造志向，主动选择退出物理学硕士学位攻读。不再追随标准化路径，坦然迈向属于自己的全自主探索道路。',
          details: ['告别传统学院派定势', '转向真实世界的软件工程与自主造物', '追求时间主权与精神自由']
        },
        {
          id: 't-volunteer',
          period: '多年阶段',
          title: '多地深度义工 · 扎根真实大地',
          organization: '基层公益社群',
          location: '河北 · 云南',
          category: '田野义工',
          tag: '田野服务',
          description: '多次前往河北、云南等地深入开展义工服务，与不同文化和生活境遇的人群共同协作。锤炼了敏锐的共情力、强大的心理韧性与跨地域适应力。',
          details: ['深入乡村与草根青年社群', '培养极强的逆境适应力', '拓宽对多元人类生活形态的理解']
        },
        {
          id: 't-grad',
          period: '2022-2024',
          title: '物理学硕士研究生阶段',
          organization: '南方科技大学物理系',
          location: '广东 · 深圳',
          category: '学院科研',
          tag: '硕士科研',
          description: '深入钻研理论物理、高等量子物理与高阶计算仿真，培养了对微观世界因果逻辑与复杂体系严密推导的系统性思维。',
          details: ['高等物理与理论建模', '系统文献检索与批判性反思', '中核西南物理研究院短期科研实习']
        },
        {
          id: 't-undergrad',
          period: '2018-2022',
          title: '地球物理学学士阶段',
          organization: '南方科技大学地球与空间科学系',
          location: '广东 · 深圳',
          category: '学院科研',
          tag: '学士求索',
          description: '系统学习高等数学、数学物理方程、电磁学与数值反演。毕业论文为《长电极电阻率法物理模拟实验》。荣获达芬奇挑战营三等奖（3D建模/激光切割等工程制造），参加 CGU 2020 中国地球科学联合学术年会。',
          details: ['达芬奇挑战营三等奖（工程制造）', '英语六级、托福 80分', '掌握 Python, MATLAB, Java, Scheme']
        }
      ],
      vitals: {
        nameLabel: '姓名',
        nameVal: '何瑞斯',
        degreeLabel: '学士学位',
        degreeVal: '南科大地球物理学士',
        gradLabel: '硕士经历',
        gradVal: '南科大物理硕士 (退学)',
        engLabel: '英语水平',
        engVal: '六级 / 托福80',
        gerLabel: '德语学习',
        gerVal: 'A2+ 自学中',
        specLabel: '核心栈',
        specVal: 'Go + React (人机协同)'
      },
      skillGroups: [
        {
          category: '全栈工程',
          iconName: 'Code2',
          description: '以 Go 的高并发与稳健性为底座，搭配 React 现代组件化交互体验。',
          skills: [
            { name: 'Go (Golang)', note: '核心后端 · 并发模型 · 性能优化', level: '核心技术' },
            { name: 'React 19 / TypeScript', note: 'Hooks · Framer Motion · 状态机', level: '核心技术' },
            { name: 'Tailwind CSS', note: '原子化排版 · 严密网格系统', level: '熟练掌握' },
            { name: 'SQLite / RESTful API', note: '轻量本地优先持久化与协议', level: '实践应用' }
          ]
        },
        {
          category: '人机协同',
          iconName: 'Cpu',
          description: '践行新一代人机结对敏捷开发，将 AI 作为全天候副驾工程师与思维杠杆。',
          skills: [
            { name: 'Claude Code', note: '终端自动化执行 · 深度系统重构', level: '日常核心' },
            { name: 'Antigravity / Codex', note: '架构原型推演 · 高速代码生成', level: '主力工具' },
            { name: 'Prompt & Context 架构', note: '复杂问题拆解 · 契约约束定义', level: '深入掌握' },
            { name: 'Code Review & 质量守门', note: '严格的正确性验证与架构自洽', level: '严格把关' }
          ]
        },
        {
          category: '科学计算',
          iconName: 'Terminal',
          description: '南科大物理学与地球物理学术训练赋予的数学抽象与系统建模能力。',
          skills: [
            { name: 'Python & NumPy', note: '数据分析与算法原型', level: '扎实基础' },
            { name: 'MATLAB', note: '数值反演与电磁矩阵仿真', level: '学术实践' },
            { name: 'Scheme (Lisp)', note: '函数式编程抽象与符号计算', level: '理解应用' },
            { name: '3D 建模与制造', note: 'CAD建模/3D打印/激光切割', level: '获奖技能' }
          ]
        },
        {
          category: '语言沟通',
          iconName: 'Languages',
          description: '具备全球化信息获取与跨文化交流视野，持续投入语言学习。',
          skills: [
            { name: '中文 (母语)', note: '母语水平 · 文化共情与写作', level: '母语水平' },
            { name: '英语', note: 'CET-6 已过 / TOEFL 托福 80分', level: '工作语言' },
            { name: '德语', note: '自学进阶中 (A2 水平)', level: '自学进阶' },
            { name: '日语', note: '多语种兴趣与基础语法', level: '入门探索' }
          ]
        }
      ],
      geo: {
        title: '地理足迹',
        items: [
          { loc: '深圳:', desc: '南方科技大学学士与物理硕士科研阶段' },
          { loc: '西安:', desc: '2025 上半年独立游民旅居、深度阅读与写作' },
          { loc: '河北/云南:', desc: '深入基层田野开展多段志愿服务' },
          { loc: '独立空间:', desc: '居家工作室，专注全栈独立软件全职开发' }
        ]
      }
    },
    project: {
      breadcrumb: '造物展厅',
      pageTitle: '造物展厅',
      pageSub: '以 Go + React 为核心驱动，全量由 Claude Code、Antigravity、Codex 深度结对赋能。点击卡片查看详细架构拆解。',
      projects: [
        {
          id: 'neinote',
          name: 'Neinote',
          subtitle: '快速录入 + 沉浸式 AI 整合 + 一键输出的知识内化笔记应用',
          category: '效率工具',
          stack: ['Go', 'React', 'TypeScript', 'Tailwind', '向量库', '人机协同'],
          badge: '全栈工程',
          image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=1200&auto=format&fit=crop',
          summary: '打破碎片闪念堆积死角，将灵感秒级捕捉并转化为真正内化的系统知识。',
          description: '许多笔记应用重在“收集”，却死于“整理”。Neinote 专为高频思考者打造：提供接近肌肉记忆的全局低延迟录入通道；内置上下文感知的 AI 整合引擎，能将散落的思考切片自动拓扑为知识网络；支持一键将碎片提炼成结构化文章与长文输出。',
          aiWorkflow: '全流程由 Claude Code & Antigravity 深度辅助落地。由我负责知识内化的核心心智模型设计、API契约约束与前后端架构，AI 协同实现了高并发 Go 存储服务、分词索引管线及 React 双栏流体交互。',
          highlights: [
            '毫秒级无摩擦的闪念唤醒录入通道',
            'AI 沉浸式语义归并与概念内化建议',
            'Local-First 本地优先存储，数据主权完全私有',
            '结构化 Markdown 一键重组为演讲提纲与正式长文'
          ],
          link: 'https://github.com/ruisihe/neinote',
          status: '积极推进'
        },
        {
          id: 'tahx',
          name: 'Tahx',
          subtitle: '以“场景清单”为宗旨的记账 + 物件空间收纳软件',
          category: '生活实用',
          stack: ['Go', 'React', 'SQLite', 'RESTful', 'Tailwind', '人机协同'],
          badge: '全栈工程',
          image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1200&auto=format&fit=crop',
          summary: '告别流水账的记账焦虑，将金钱消耗与物理空间、生活场景深度映射绑定。',
          description: 'Tahx 重新思考了“人、物件与支出”的关系。不仅仅记录“花了多少钱”，而是记录“在什么生活场景下获得了什么”。同时集成空间物品收纳矩阵，让居家整理与财务规划合二为一，避免重复消费并沉淀生活秩序感。',
          aiWorkflow: '与 Codex 及 Claude 深度结对编程。由我制定轻量级领域驱动设计（DDD）模型与极简UI规范，AI 加速完成了 Go 标准库风格的 RESTful API、SQLite 事务迁移脚本以及 React 状态驱动的收纳卡片。',
          highlights: [
            '“场景优先”的收支追踪，杜绝繁复细分类的记账疲劳',
            '实体物品空间多维映射（房间/箱盒/当前状态）',
            '轻量自闭环数据统计，清晰洞察真实生活开销重心',
            '全平台自适应响应式界面，极简性冷淡科技风'
          ],
          link: 'https://github.com/ruisihe/tahx',
          status: '积极推进'
        },
        {
          id: 'goblins',
          name: '啊！是哥布林。',
          subtitle: '一款极简暗黑风的增量文字放置与冒险游戏',
          category: '文字游戏',
          stack: ['Go', 'React', 'Framer Motion', '状态引擎', '人机协同'],
          badge: '全栈工程',
          image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop',
          summary: '用纯文字与极简黑白灰呼吸动效，构建一个荒诞、克制却极度上头的地下冒险世界。',
          description: '《啊！是哥布林。》(Ah! Goblins.) 是一款返璞归真的文字增量放置游戏。剥离华丽的 3D 浮夸材质，回归文字叙事与纯粹数值驱动。玩家在黑暗的地穴深处探寻遗物、招募同伴、做出道德抉择，在时间流动中感受数字增长与荒诞世界的碰撞。',
          aiWorkflow: '借助 AI 探索数值公式拟合与微剧情事件树生成。AI 高效完成了状态转移引擎的原型打磨，并使用 React + Framer Motion 打造了极具打字机质感的黑白灰克制视觉。',
          highlights: [
            '极简暗黑美学：黑白灰排版与呼吸感文字交互',
            '非线性增量数值曲线与地牢随机遭遇机制',
            '轻量级 Go 离线推演引擎，随时继续地下探索',
            '黑色幽默与荒诞文学风格的文本叙事'
          ],
          link: 'https://github.com/ruisihe/goblins-text-rpg',
          status: '火热构建'
        },
        {
          id: 'geophysics',
          name: '长电极模拟实验',
          subtitle: '南科大学士毕业论文课题与跨学科科学计算探索',
          category: '科学计算',
          stack: ['Python', 'MATLAB', 'Scheme', '3D建模', '数值计算'],
          badge: '学术科研',
          image: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?q=80&w=1200&auto=format&fit=crop',
          summary: '运用有限差分/有限元数值计算与物理水槽模拟，探索不均匀介质中电场空间分布。',
          description: '在南方科技大学地球与空间科学系攻读学士学位期间的核心科研课题。针对油气勘探与工程地球物理中长电极供电的几何奇异性，搭建了物理模拟水槽实验平台，并基于 MATLAB/Python 编写数值正演模拟程序，验证边界条件对电位响应的扰动规律。',
          aiWorkflow: '该项目奠定了我扎实的数学物理抽象根底。后续将 Scheme (Lisp) 的函数式哲学与现代 AI 代码重构工具结合，提炼出一批轻量级科学矩阵计算脚本。',
          highlights: [
            '物理水槽实验装置搭建与精细数据采集',
            '长电极有限几何电场解析解与数值解对比',
            '锻炼了面对复杂物理系统的建模拆解与工程动手能力',
            '荣获南科大优秀毕业设计学术答辩认可'
          ],
          link: 'https://github.com/ruisihe/long-electrode-simulation',
          status: '顺利结题'
        }
      ],
      workflowBadge: '开发范式',
      workflowHeadline: '高杠杆人机结对敏捷实践',
      workflowCta: '了解更多',
      steps: [
        {
          num: '第一步',
          title: '架构先行',
          desc: '人类主导业务建模、定义领域边界与接口契约，不依赖 AI 盲目猜测产品逻辑。'
        },
        {
          num: '第二步',
          title: '人机协同',
          desc: '借助终端内原生 Agent 快速编排 Go 高并发管道与 React 状态机，告别重复样板代码。'
        },
        {
          num: '第三步',
          title: '严格把关',
          desc: '严格审核每一行关键代码的内存分配与边界错误，保证独立交付物具有工业级鲁棒性。'
        }
      ]
    },
    blog: {
      breadcrumb: '自留地',
      pageTitle: '自留地',
      pageSub: '从象牙塔退回真实的地面，理科抽象底色与人文思索。点击任意文章展开阅读全文。',
      writings: [
        {
          id: 'w-1',
          title: '《在长安的黄昏里注视电线》',
          genre: '短诗纪事',
          date: '2025 · 西安',
          excerpt: '交错的黑色几何线，把落日切割成若干个等比数列。你不知道哪一根通往唐朝的宫灯，哪一根正运送着我刚推上仓库的代码。',
          content: [
            '交错的黑色几何线，把落日切割成若干个等比数列。',
            '鸽群在城墙上空划出圆锥曲线，',
            '你不知道哪一根通往唐朝的宫灯，',
            '哪一根正运送着我刚推上仓库的代码。',
            '历史是一场未收敛的数值迭代，',
            '而我站在街角，',
            '把一碗温热的油泼面吃成了永恒。'
          ]
        },
        {
          id: 'w-2',
          title: '《从象牙塔退回真实的地面》',
          genre: '散文随笔',
          date: '2025 · 随笔',
          excerpt: '退学不是放弃，而是认清了自己想要的究竟是一纸头衔，还是一间能听见风声、由自己亲手砌筑代码与生活的小屋。',
          content: [
            '在实验室里看光谱的时候，世界是被精密仪器滤过的。',
            '我敬畏那份严谨，但我的心跳却总在渴望触碰未被格式化的土壤。',
            '退学那一刻，空气似乎突然变得凉爽而广袤。',
            '在河北的村庄，在云南的雨后，在西安市井的烟火里，我重新学会了呼吸。',
            '如今坐在屏幕前敲下 Go 与 React 的每一个字符，',
            '它们不再是为了通过某场答辩，而是我与这个世界最真实、最敏捷的直接对话。'
          ]
        },
        {
          id: 'w-3',
          title: '《波函数坍缩前的低语》',
          genre: '短诗纪事',
          date: '2024 · 深圳',
          excerpt: '在所有未测量的状态里，我都同时存在于出发与抵达之间。',
          content: [
            '不要急于给粒子一个确切的位置。',
            '在所有未测量的状态里，',
            '我都同时存在于出发与抵达之间。',
            '概率云在黑夜中轻微颤动，',
            '每一次选择，',
            '都是把无限的可能，坍缩成一条独一无二的足迹。'
          ]
        }
      ],
      colophonKicker: '刊尾寄语',
      colophonQuote: '“生活不仅有编译通过的绿色终端，还有古都电线分割的落日，和未经格式化的泥土。”'
    },
    about: {
      breadcrumb: '个人自述',
      tagline: '个人理念',
      faqTitle: '常见解答',
      helpKicker: '交流合作',
      helpDesc: '需要了解更多细节？请直接与作者电报专线联络。',
      helpCta: '联系邮箱',
      faqs: [
        {
          q: '项目体验？',
          sub: '独立项目如何体验与运行？',
          a: '所有当前项目（包括 Neinote 知识笔记、Tahx 场景收纳工具、以及文字增量放置游戏《啊！是哥布林。》）均在本地与开源优先原则下构建，完全支持一键克隆或在线 Web 端即开即用体验。'
        },
        {
          q: '为何退学？',
          sub: '为什么从南方科技大学物理学硕士阶段选择退学并走向独立造物？',
          a: '在南方科技大学地球与空间科学系攻读学士与硕士期间，我系统训练了偏微分方程、电磁数值模拟与计算思维。2025 年初，出于对独立创造与生活自主权的清晰认知，我主动选择退学，打破既定象牙塔束缚，将严谨的理科抽象能力直接投入到解决真实生活痛点的 Go + React 软件实体中。'
        },
        {
          q: '人机协同？',
          sub: '为什么坦诚且自豪地声明全量 AI 辅助深度协同开发？',
          a: '在 Claude Code、Antigravity、Codex 时代，软件工程的核心价值早已从机械敲击语法糖转向系统架构设计、领域边界抽象、产品品味与严格质量守门。AI 是我的全天候结对工程师。公开声明不仅是对新生产力工具的拥抱，更证明了新一代超级个体能够以 10x 敏捷速度独立落地高质量复杂产品。'
        },
        {
          q: '技术选型？',
          sub: '为什么核心开发栈重点选择 Go + React？',
          a: 'Go 提供坚若磐石的高并发、低内存开销与标准库纯粹性，极其适合构建轻量本地优先存储、向量索引管道与高效 API 服务；而 React 19 + TypeScript + Tailwind 则赋予了前端响应式状态、原子化排版与动效交互的极致掌控力。'
        },
        {
          q: '旅居启发？',
          sub: '半年的西安旅居与多地义工实践带来了什么灵感？',
          a: '跳出校园单一评价框架，在古都城墙下的市井烟火与河北、云南的真实泥土中生活，培养了我的敏锐共情与生活秩序感。正是在那段静心沉淀期，我构思并启动了《Neinote》（知识内化）、《Tahx》（场景收纳记账）以及《啊！是哥布林。》（极简文字放置游戏）。'
        },
        {
          q: '目前状态？',
          sub: '目前的独立开发状态与交流合作方式是怎样的？',
          a: '我目前全职居家与旅居独立开发，自驱推进个人产品生态与多语种自学（德语A2+、日语进阶）。随时开放探索有挑战的 Go/React 项目、AI 工作流顾问咨询或优质的技术思想碰撞，欢迎随时通过电报邮箱直接来信。'
        }
      ],
      storyHeadline: '从南方科技大学物理学，走向真实世界的软件实体',
      p1: '在南方科技大学地球与空间科学系攻读地球物理学学士学位的四年里，我习惯了用偏微分方程和有限元数值反演去模拟不可见的物理世界；随后继续攻读物理学硕士，更加深入了理论物理的抽象体系。但内心里，我一直渴望能够亲手构建那些直接触达人类日常经验的工具。',
      p2: '2025 年初，出于对独立创造与生活自主权的清晰认知，我做出了主动退学的决定。这并不是逃避，而是将自己的时间精力从一纸头衔中解放出来，投入到能够直接创造价值、直接对话用户的真实软件构建中。',
      manifestoBadge: '自立信条',
      manifestoHeadline: '坦诚公开全量人机协同',
      manifestoBody: '在 Claude Code、Antigravity、Codex 涌现的今天，软件工程的核心价值早已从“死记硬背语法糖”转移到“问题抽象、系统架构、产品品味与严格质量控制”。我将 AI 视作全天候的结对工程师。坦诚公开这一点，是对新一代技术范式的尊重，也是超级个体生产力的最好证明。',
      p3: '在古城西安旅居的半年里，我每天在城墙边散步、在市井烟火中思考。正是那段时光孕育了《Neinote》（知识内化）、《Tahx》（场景收纳记账）以及《啊！是哥布林。》（极简文字RPG）。而河北与云南的多段义工经历，则让我始终对土地与具体的人保持温热的连接。',
      connectKicker: '建立联络',
      connectHeadline: '保持联络',
      connectSub: '欢迎探讨 Go + React 全栈开发、AI 协同工作流、独立工具合作或任何思想碰撞。',
      statusKicker: '当前状态',
      statusItems: [
        '• 居家与旅居独立开发中',
        '• 深度投入 Go + React 工具构建',
        '• 德语 A2+ / 日语基础进阶中',
        '• 随时开放项目与技术探讨'
      ]
    },
    chat: {
      title: '数字电报',
      subtitle: '智能助手',
      welcomeMsg: '您好！这里是何瑞斯的数字电报接待处。无论您是想了解全栈项目（Neinote / Tahx / 哥布林）、探寻南科大物理背景与西安旅居见闻，还是探讨人机协同开发，随时向我发报！',
      quickPrompts: [
        '人机协同',
        '关于项目',
        '退学故事',
        '学术背景'
      ],
      placeholder: '输入电报内容，回车发送...',
      send: '发送',
      statusLive: '线路畅通'
    }
  },

  en: {
    common: {
      vol: 'VOL. 1',
      edition: '2026/10/13 · SUSTECH & NOMAD EDITION',
      subscribe: 'SUBSCRIBE',
      copied: 'COPIED!',
      copyEmail: 'COPY EMAIL',
      print: 'PRINT PAGE',
      printDossier: 'PRINT RESUME',
      contactSupport: 'CONTACT SUPPORT →',
      close: 'CLOSE',
      readMore: 'READ FULL ESSAY →',
      advertisement: 'ADVERTISEMENT',
      telegraphDispatch: 'CLICK TO TRANSMIT · AI TELEGRAPH',
      telegraphSubtitle: 'TRANSMIT DIRECT TO DIGITAL TWIN',
      lastRevised: 'ARCHIVE: OCTOBER 2026',
      essentialVitals: 'ESSENTIAL VITALS',
      geographicCoordinates: 'GEOGRAPHIC COORDINATES',
      viewRepo: 'VIEW REPOSITORY (GITHUB) →',
      viewLive: 'LAUNCH DEMO →',
      backToTop: 'BACK TO TOP',
      shareArticle: 'SHARE ESSAY',
      linkCopied: 'LINK COPIED',
      readingTimeEst: 'EST. READ',
      wordsCount: 'WORDS',
      nav: {
        home: 'FRONT PAGE',
        resume: 'RESUME',
        timeline: 'TIMELINE',
        project: 'PROJECT',
        blog: 'BLOG',
        about: 'ABOUT'
      },
      footer: {
        edition: 'THE RUISI CHRONICLE | VOL. 1 · 2026 EDITION',
        rights: `© ${new Date().getFullYear()} Ruisi HE. All rights reserved.`
      }
    },
    ticker: [
      'BREAKING: NEINOTE ACTIVE DEV — KNOWLEDGE INTERNALIZATION APP',
      'EDITORIAL: ALL CODE AUGMENTED BY CLAUDE CODE & CODEX',
      'SUSTECH GEOPHYSICS ALUM TURNS INDEPENDENT BUILDER',
      'TAHX SCENE-DRIVEN LEDGER & STORAGE IN PRODUCTION',
      'NOW PLAYING: "AH! GOBLINS." MINIMALIST TEXT RPG',
      'LANGUAGES: ENGLISH CET-6/TOEFL 80 · GERMAN A2+ IN PROGRESS',
      'NOMAD FOOTPRINTS: XI\'AN, HEBEI, YUNNAN FIELDWORK'
    ],
    home: {
      heroKicker: 'LEAD STORY · EDITORIAL FRONT PAGE',
      heroHeadline: 'INDIE BUILDER MANIFESTO: COMPUTATIONAL FOUNDATION × GO + REACT × HUMAN-AI LEVERAGE',
      heroSub: 'Stepping off the academic conveyor belt. Combining rigorous physics modeling with terminal agent velocity to build tactile, high-leverage software.',
      dateMeta: 'October 13, 2026 · Morning Edition',
      readingTime: '3 min read',
      leadStoryP1: 'In an era where generative AI fundamentally reshapes software engineering, the engineering bottleneck has migrated from rote syntax memorization to domain boundary abstraction, rapid prototype velocity, and uncompromising quality gatekeeping. Armed with academic training in geophysics and physics research from SUSTech, I made the deliberate decision in early 2025 to leave the master\'s program and devote myself fully to independent software creation.',
      leadStoryP2: 'Leveraging the bulletproof concurrency of Go alongside modern React 19 fluid state machines, I am currently developing Neinote (knowledge internalization notes), Tahx (scene-driven ledger & spatial organization), and the minimalist text RPG "Ah! Goblins.". I openly and proudly declare: all projects are independently delivered through deep pair programming with Claude Code, Antigravity, and Codex.',
      manifestoBadge: 'EDITORIAL POSITION',
      manifestoTitle: 'Embracing AI-Augmented Creation',
      manifestoP: '“In the age of the solitary super-individual, declaring full AI-augmented development is a tribute to new productivity paradigms. The human architect governs systems modeling and aesthetic taste; the AI drives rapid execution and edge exploration, unlocking 10x agility.”',
      weatherKicker: 'ARCHIVE VITALS',
      weatherLocation: 'Xi\'an / Remote, China',
      weatherStudio: 'Independent Home Studio',
      weatherDegree: 'SUSTech Physics & Geophysics',
      weatherDegreeSub: 'B.S. Completed / M.S. Ret. for Indie Dev',
      advertKicker: 'ADVERTISEMENT',
      advertTitle: 'CLICK TO TRANSMIT · AI TELEGRAPH',
      topEditionsKicker: 'TOP EDITIONS & DIRECT DISPATCHES',
      topEditionsSub: 'CLICK TO OPEN SECTION',
      cards: {
        c1Kicker: 'SECTION 01',
        c1Title: 'Indie Software Exhibition',
        c1Desc: 'Deconstruct Neinote, Tahx, and "Ah! Goblins." architecture, Go+React stack, and AI pair-programming records.',
        c1Action: 'View Projects Dispatch →',
        c2Kicker: 'SECTION 02',
        c2Title: 'Archival Resume & Pillars',
        c2Desc: 'Pixel-perfect single-page LaTeX exhibition case alongside 4 analytical pillars on why Ruisi HE stands out.',
        c2Action: 'Inspect Resume Dossier →',
        c3Kicker: 'SECTION 03',
        c3Title: 'Chronological Milestones',
        c3Desc: 'Academic physics tenure, withdrawal pivot point, Xi\'an nomad sojourn, fieldwork, and 4D skill matrix.',
        c3Action: 'Explore Full Timeline →',
        c4Kicker: 'SECTION 04',
        c4Title: 'Literary Supplement & Essays',
        c4Desc: 'Poems and reflective prose blending scientific observation with urban and human warmth.',
        c4Action: 'Read Supplement Articles →'
      }
    },
    resume: {
      breadcrumb: 'SECTION A · ARCHIVAL DOSSIER & CURRICULUM VITAE',
      archivalExhibit: 'ARCHIVAL EXHIBIT',
      figCaption: 'FIG. 2.1 · ARCHIVAL DOSSIER · ACADEMIC RESUME',
      pillarsKicker: 'ANALYSIS',
      pillarsHeadline: 'Why Ruisi HE Stands Out',
      pillarsSub: 'Everything you need to turn complex computational logic into living, high-leverage products.',
      pillars: {
        p1Title: 'COMPUTATIONAL RIGOR',
        p1Desc: 'Steeped in SUSTech geophysical modeling and theoretical physics research; approaches ambiguous challenges by dissecting first principles and math foundations.',
        p2Title: 'INDIE FULL-STACK VELOCITY',
        p2Desc: 'Anchored by Go\'s robust concurrency and zero-bloat persistence, paired with React 19 + TypeScript modern reactivity to build Neinote and Tahx end-to-end.',
        p3Title: 'AI-AUGMENTED LEVERAGE',
        p3Desc: 'Deep mastery over Claude Code, Antigravity, and Codex. The human steers domain boundaries and taste; the AI executes code at terminal speed for 10x agility.',
        p4Title: 'MULTILINGUAL & NOMAD GRIT',
        p4Desc: 'CET-6 / TOEFL 80, German progressing actively (A2+), Japanese basics. Six months as an independent nomad in historic Xi\'an and extensive grassroots volunteer work.'
      },
      calloutBadge: 'CHRONOLOGICAL ARCHIVE AVAILABLE IN TIMELINE',
      calloutTitle: 'Inspect Expanded Chronological Milestones & Footprints',
      calloutDesc: 'SUSTech academic research, the early 2025 withdrawal decision, Xi\'an nomad sojourn, volunteer fieldwork across Hebei and Yunnan, and the full 4D skill matrix are housed in Section B.',
      calloutBtn: 'OPEN CHRONOLOGY (TIMELINE)',
      printBtn: 'PRINT RESUME DOSSIER',
      latex: {
        name: 'Ruisi HE',
        phone: '+86 15815548345',
        country: 'P. R. China',
        expTitle: 'EXPERIENCE',
        davinciTitle: '• Da Vinci Challenge Camp - 2019 Winter',
        davinciSub: 'Third Award, December 2019',
        davinciBullets: [
          'Developed analytical engineering skills in 3D modeling, 3D printing & laser cutting',
          'Managed diverse project milestones based on team engineering guidance',
          'Identified creative intersections between theory, numerical methods, and practice'
        ],
        cguTitle: '• Annual Meeting of Chinese Geoscience Union (CGU 2020)',
        cguSub: 'Attendee, October 2020',
        cguBullets: [
          'Broadened research horizons by attending cutting-edge oral symposium presentations',
          'Engaged with scientific computing frontiers in geophysical inversion'
        ],
        swipTitle: '• Internship in Southwestern Institute of Physics',
        swipSub: 'Research Intern, July to August 2021',
        swipBullets: [
          'Collaborated and engaged in extensive institutional experimental research',
          'Acted independently on empirical scientific computing and data analysis'
        ],
        eduTitle: 'EDUCATION',
        msTitle: '• M.S. Physics Candidate',
        msSub: 'Southern University of Science and Technology · 2022.09 - Early 2025 (Withdrew)',
        bsTitle: '• B.S. Geophysics',
        bsSub: 'Southern University of Science and Technology · 2018.08 - 2022.06',
        bsThesis: 'Thesis: Physical Simulation Experiments of Long Electrode Resistivity Method',
        skillsTitle: 'SKILLS',
        techLabel: '• Tech Stack:',
        langLabel: '• Languages:',
        langVal: 'Chinese (Native), English (CET-6, TOEFL 80), German (A2+ Self-learning)',
        hobbiesTitle: 'HOBBIES & INTERESTS',
        hobbies: {
          hiking: 'Hiking',
          writing: 'Writing',
          handcraft: 'Handcraft'
        }
      }
    },
    timeline: {
      breadcrumb: 'SECTION B · CHRONOLOGICAL DOSSIER & EXPEDITIONS',
      backToResume: 'Back to Resume',
      expeditionSpan: '2018 — 2026+ ARCHIVE',
      mastheadTitle: 'Chronology of Milestones & Coordinates',
      mastheadSub: 'From academic geophysics at SUSTech to deliberate withdrawal for independent creation; from nomad life in historic Xi\'an to grassroots fieldwork and Go+React engineering.',
      totalMilestones: 'TOTAL MILESTONES',
      nodesCount: '6 Key Nodes',
      timeSpan: '2018 - 2026+',
      filterLabel: 'FILTER CATEGORY:',
      filters: {
        all: 'ALL EXPEDITIONS',
        indie: 'INDIE DEV',
        journey: 'JOURNEY',
        edu: 'EDUCATION',
        volunteer: 'VOLUNTEER'
      },
      nodes: [
        {
          id: 't-now',
          period: '2025 - PRESENT',
          title: 'Indie Developer · AI-Augmented Product Creation',
          organization: 'Home Studio & Indie Space',
          location: 'Remote / Home Base',
          category: 'Indie Dev',
          tag: 'GO + REACT',
          description: 'Building software primarily on Go + React, seamlessly unified with Claude Code, Antigravity, and Codex. Devoting full-time focus to Neinote, Tahx, and the text RPG "Ah! Goblins.", while actively studying German (A2+) and Japanese.',
          details: ['High-leverage Human-AI pair programming', 'Self-directed polyglot study', 'Exploring sustainable indie product loops']
        },
        {
          id: 't-xian',
          period: '2025 FIRST HALF',
          title: 'Nomad Sojourn in Historic Xi\'an',
          organization: 'Independent Exploration',
          location: 'Shaanxi · Xi\'an',
          category: 'Journey',
          tag: 'NOMAD LIFE',
          description: 'Spent six months living independently as a nomad in the ancient capital of Xi\'an, uncoupling from academic evaluation to immerse in literature, philosophy, and clean software architecture.',
          details: ['Half-year independent nomad living', 'Cultivated essays and philosophical reflections', 'Prototyped foundational software architectures']
        },
        {
          id: 't-choice',
          period: 'EARLY 2025',
          title: 'The Pivot: Stepping Beyond the Ivory Tower',
          organization: 'SUSTech Department of Physics',
          location: 'Guangdong · Shenzhen',
          category: 'Education',
          tag: 'PIVOT POINT',
          description: 'Driven by clear self-knowledge and a commitment to independent creation, voluntarily withdrew from the physics master\'s program to embrace full autonomy and real-world engineering.',
          details: ['Farewell to standard academia', 'Turned toward real-world product delivery', 'Pursuing sovereign time and creative freedom']
        },
        {
          id: 't-volunteer',
          period: 'MULTI-YEAR',
          title: 'Fieldwork & Volunteer Service Across Regions',
          organization: 'Grassroots Community',
          location: 'Hebei, Yunnan & More',
          category: 'Volunteer',
          tag: 'HUMAN TOUCH',
          description: 'Traveled to rural and grassroots communities across Hebei and Yunnan for extensive volunteer initiatives, building deep empathy, psychological resilience, and cross-cultural adaptability.',
          details: ['Grassroots community immersion', 'Cultivated high resilience under adversity', 'Expanded perception of diverse human realities']
        },
        {
          id: 't-grad',
          period: '2022 - 2024',
          title: 'Physics Graduate Research Tenure',
          organization: 'SUSTech Department of Physics',
          location: 'Guangdong · Shenzhen',
          category: 'Education',
          tag: 'GRADUATE',
          description: 'Immersed in advanced quantum physics, electrodynamics, and computational simulation, training rigorous causal deduction and complex system modeling.',
          details: ['Advanced theoretical physics modeling', 'Critical literature review methodology', 'Research internship at Southwestern Institute of Physics']
        },
        {
          id: 't-undergrad',
          period: '2018 - 2022',
          title: 'B.S. in Geophysics',
          organization: 'SUSTech Department of Earth and Space Sciences',
          location: 'Guangdong · Shenzhen',
          category: 'Education',
          tag: 'UNDERGRAD',
          description: 'Systematic curriculum in advanced mathematics, PDEs, electromagnetic methods, and numerical inversion. Thesis on physical tank simulation for long electrode resistivity. Awarded 3rd Prize in Da Vinci Camp.',
          details: ['Da Vinci Challenge Camp 3rd Prize', 'CET-6 / TOEFL 80 score', 'Proficiency in Python, MATLAB, Java, Scheme (Lisp)']
        }
      ],
      vitals: {
        nameLabel: 'NAME',
        nameVal: 'Ruisi HE',
        degreeLabel: 'DEGREE',
        degreeVal: 'SUSTech B.S. Geophysics',
        gradLabel: 'GRADUATE',
        gradVal: 'Physics M.S. (Early 2025 Ret.)',
        engLabel: 'ENGLISH',
        engVal: 'CET-6 / TOEFL 80',
        gerLabel: 'GERMAN',
        gerVal: 'A2+ In Progress',
        specLabel: 'SPECIALTY',
        specVal: 'Go + React (AI Native)'
      },
      skillGroups: [
        {
          category: 'SECTION I · Full-Stack & Modern Web',
          iconName: 'Code2',
          description: 'Go\'s concurrent backend robustness paired with React 19 interactive reactivity.',
          skills: [
            { name: 'Go (Golang)', note: 'Concurrent services · Memory optimization', level: 'MAIN STACK' },
            { name: 'React 19 / TypeScript', note: 'Hooks · Framer Motion · State machines', level: 'MAIN STACK' },
            { name: 'Tailwind CSS', note: 'Atomic typography · Grid systems', level: 'PROFICIENT' },
            { name: 'SQLite / RESTful API', note: 'Local-first persistence & clean protocols', level: 'PRACTICAL' }
          ]
        },
        {
          category: 'SECTION II · Human-AI Augmented Paradigm',
          iconName: 'Cpu',
          description: 'Pioneering human-AI pair engineering, treating AI as a 24/7 copilot and thinking lever.',
          skills: [
            { name: 'Claude Code', note: 'Terminal agent execution · System refactoring', level: 'DAILY CORE' },
            { name: 'Antigravity / Codex', note: 'Architecture prototyping · High-velocity gen', level: 'PRIMARY' },
            { name: 'Prompt & Context Arch', note: 'Problem decomposition · Contract specs', level: 'ADVANCED' },
            { name: 'Code Review & Guardrail', note: 'Strict correctness & architecture sanity', level: 'VIGILANT' }
          ]
        },
        {
          category: 'SECTION III · Scientific Computing & Math',
          iconName: 'Terminal',
          description: 'Mathematical abstraction and numerical modeling cultivated by SUSTech physics training.',
          skills: [
            { name: 'Python & NumPy', note: 'Data analytics & algorithmic prototyping', level: 'SOLID' },
            { name: 'MATLAB', note: 'Numerical inversion & electromagnetic matrices', level: 'ACADEMIC' },
            { name: 'Scheme (Lisp)', note: 'Functional programming & symbolic computation', level: 'CONCEPTUAL' },
            { name: '3D Fabrication', note: 'CAD modeling / 3D printing / Laser cutting', level: 'AWARDED' }
          ]
        },
        {
          category: 'SECTION IV · Polyglot & Cross-Cultural',
          iconName: 'Languages',
          description: 'Global information retrieval and cross-cultural communication horizons.',
          skills: [
            { name: 'Chinese (Mandarin)', note: 'Native Proficiency', level: 'NATIVE' },
            { name: 'English', note: 'CET-6 Certified / TOEFL 80', level: 'WORKING' },
            { name: 'German (Deutsch)', note: 'Active self-study (A2 level)', level: 'LEARNING' },
            { name: 'Japanese', note: 'Grammar basics & polyglot passion', level: 'LEARNING' }
          ]
        }
      ],
      geo: {
        title: 'GEOGRAPHIC COORDINATES',
        items: [
          { loc: 'Shenzhen:', desc: 'Undergraduate and graduate research at SUSTech' },
          { loc: 'Xi\'an:', desc: 'First half of 2025 nomad exploration, reading and coding' },
          { loc: 'Hebei / Yunnan:', desc: 'Grassroots community volunteering and fieldwork' },
          { loc: 'Home Studio:', desc: 'Full-time independent Go+React development' }
        ]
      }
    },
    project: {
      breadcrumb: 'SECTION C · SELECTED INVENTIONS & INDIE SOFTWARE',
      pageTitle: 'Indie Software & Projects',
      pageSub: 'All projects powered by Go + React, collaboratively accelerated with Claude Code, Antigravity, and Codex. Click any card to inspect architecture.',
      projects: [
        {
          id: 'neinote',
          name: 'Neinote',
          subtitle: 'Frictionless capture + immersive AI integration + structured export',
          category: 'Productivity',
          stack: ['Go', 'React', 'TypeScript', 'Tailwind', 'Vector DB', 'Claude Code'],
          badge: 'GO + REACT',
          image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=1200&auto=format&fit=crop',
          summary: 'Eliminate forgotten digital clutter by capturing sparks instantly into an internalized knowledge graph.',
          description: 'Many note apps excel at collecting yet die in organizing. Neinote is built for high-velocity thinkers: muscle-memory global capture; context-aware AI synthesis that topologically clusters scattered insights; and one-click synthesis into polished long-form essays.',
          aiWorkflow: 'Built with Claude Code and Antigravity. I directed the cognitive mental model, API contracts, and architecture; AI collaboratively implemented the Go storage daemon, tokenization pipeline, and fluid dual-column React UI.',
          highlights: [
            'Millisecond low-latency global capture',
            'Context-aware semantic synthesis & concept clustering',
            'Local-first storage ensuring complete data sovereignty',
            'One-click structured Markdown export into speech outlines and essays'
          ],
          link: 'https://github.com/ruisihe/neinote',
          status: 'Active Dev'
        },
        {
          id: 'tahx',
          name: 'Tahx',
          subtitle: 'Scene-first ledger & physical space item organizer',
          category: 'Utility',
          stack: ['Go', 'React', 'SQLite', 'RESTful API', 'Tailwind', 'Codex'],
          badge: 'GO + REACT',
          image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1200&auto=format&fit=crop',
          summary: 'Escape bookkeeping anxiety by anchoring expenses to living spaces and daily life scenes.',
          description: 'Tahx re-evaluates the triangle of people, belongings, and capital. Instead of asking "how much was spent," it asks "what scene was lived and what item was gained." Integrating home inventory with financial tracking builds genuine life order.',
          aiWorkflow: 'Pair-programmed with Codex and Claude. I designed the lightweight DDD domain model and minimalist UI system; AI accelerated standard-library Go REST endpoints, SQLite migration scripts, and state-driven storage matrices.',
          highlights: [
            'Scene-first expense tracking eliminates categorical burnout',
            'Physical item space mapping (rooms / bins / status)',
            'Self-contained analytics revealing genuine living priorities',
            'Responsive, minimalist technology aesthetic'
          ],
          link: 'https://github.com/ruisihe/tahx',
          status: 'Active Dev'
        },
        {
          id: 'goblins',
          name: 'Ah! Goblins.',
          subtitle: 'A minimalist dark-themed incremental text idle adventure',
          category: 'Game',
          stack: ['Go', 'React', 'Framer Motion', 'State Engine', 'AI Assisted'],
          badge: 'GO + REACT',
          image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop',
          summary: 'Pure text and subtle monochrome animations constructing an absurd, restrained underground odyssey.',
          description: 'Stripping away bloated 3D graphics, "Ah! Goblins." returns to narrative delight and mathematical progression. Players uncover subterranean relics, recruit companions, and make ethical choices as numbers tick in the dark.',
          aiWorkflow: 'AI helped fit numerical formulas and generate micro-branching event trees, prototyping the Go offline simulation loop and React typewriter animations.',
          highlights: [
            'Minimalist dark aesthetics with typewriter prose dynamics',
            'Non-linear numerical curves and random subterranean encounters',
            'Lightweight Go offline progression engine',
            'Absurdist black comedy narrative style'
          ],
          link: 'https://github.com/ruisihe/goblins-text-rpg',
          status: 'Active Dev'
        },
        {
          id: 'geophysics',
          name: 'Long-Electrode Physical Tank Simulation',
          subtitle: 'SUSTech undergraduate thesis & cross-disciplinary computing',
          category: 'Science & Math',
          stack: ['Python', 'MATLAB', 'Scheme (Lisp)', '3D Modeling', 'Finite Element'],
          badge: 'SUSTech RESEARCH',
          image: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?q=80&w=1200&auto=format&fit=crop',
          summary: 'Finite difference/element numerical computing and physical water-tank simulation of potential fields.',
          description: 'Addressing geometric singularities in geophysical prospecting with extended current electrodes, this project constructed a laboratory water-tank physical simulation platform and matched numerical solutions against theoretical boundary disruptions.',
          aiWorkflow: 'Established deep grounding in mathematical modeling. Later combined with Scheme functional paradigms and modern AI code analysis for scientific matrix calculations.',
          highlights: [
            'Physical water tank apparatus fabrication & precision acquisition',
            'Analytic vs numerical comparison of finite geometric fields',
            'Trained problem-solving rigor in complex physical systems',
            'Recognized in SUSTech thesis defense excellence'
          ],
          link: 'https://github.com/ruisihe/long-electrode-simulation',
          status: 'Completed'
        }
      ],
      workflowBadge: 'WORKFLOW STATEMENT',
      workflowHeadline: 'How Claude Code & Codex Unlock 10x Delivery Agility',
      workflowCta: 'Read Full Paradigm Report →',
      steps: [
        {
          num: '01',
          title: 'Architecture & Contracts First',
          desc: 'The human designs domain models and interface contracts rather than letting AI blindly guess.'
        },
        {
          num: '02',
          title: 'Terminal Agent Automation',
          desc: 'Leverage terminal agents to orchestrate concurrent Go pipelines and React state machines without boilerplate.'
        },
        {
          num: '03',
          title: 'Strict Review & Validation',
          desc: 'Rigorous manual auditing of every critical memory path and boundary condition ensures industrial robustness.'
        }
      ]
    },
    blog: {
      breadcrumb: 'SECTION D · LITERARY SUPPLEMENT & ESSAYS',
      pageTitle: 'Literary Supplement & Essays',
      pageSub: 'Beyond physical differential equations and code, documenting human sensitivity to land, crowds, and fluid nomadic existence.',
      writings: [
        {
          id: 'w-1',
          title: 'Watching Power Lines in the Xi\'an Dusk',
          genre: '诗歌',
          date: '2025 · Xi\'an',
          excerpt: 'Intersecting black geometric vectors slice the sunset into geometric sequences. You cannot tell which one leads to ancient palace lanterns, and which carries code just committed to the repository.',
          content: [
            'Intersecting black geometric vectors slice the sunset into geometric sequences.',
            'Flocks of pigeons curve conic sections across ancient city walls,',
            'You cannot tell which line leads to Tang Dynasty palace lanterns,',
            'And which carries code I just committed to git.',
            'History is a numerical iteration yet to converge,',
            'While I stand at the street corner,',
            'Savoring a hot bowl of chili noodles into eternity.'
          ]
        },
        {
          id: 'w-2',
          title: 'Retreating from Ivory Towers to the Ground',
          genre: '散文随笔',
          date: '2025 · Essay',
          excerpt: 'Withdrawing was not surrender, but realizing whether what I sought was an academic title, or a self-built cabin echoing with wind, code, and sovereign living.',
          content: [
            'Looking at optical spectra in the laboratory, reality was filtered through precision glass.',
            'I revere that precision, yet my pulse yearned to touch unformatted soil.',
            'The instant I withdrew, the air suddenly felt vast and cool.',
            'In Hebei villages, after Yunnan rainfall, amidst the lively steam of Xi\'an alleys, I relearned how to breathe.',
            'Now tapping every character of Go and React on screen,',
            'They are no longer written to pass an oral defense,',
            'They are my most genuine, agile dialogue with the world.'
          ]
        },
        {
          id: 'w-3',
          title: 'Whisper Before Wavefunction Collapse',
          genre: '诗歌',
          date: '2024 · Shenzhen',
          excerpt: 'In all unmeasured states, I exist simultaneously between departure and arrival.',
          content: [
            'Do not rush to pin the particle to a fixed coordinate.',
            'In all unmeasured states,',
            'I exist simultaneously between departure and arrival.',
            'The probability cloud quivers in the dark,',
            'Every choice made,',
            'Collapses boundless potentials into a solitary, luminous footprint.'
          ]
        }
      ],
      colophonKicker: 'COLOPHON',
      colophonQuote: '“Life contains more than green terminal builds; it holds sunsets sliced by ancient power lines, and soil free from formatting.”'
    },
    about: {
      breadcrumb: 'SECTION E · PHILOSOPHY & FREQUENTLY ASKED QUESTIONS',
      tagline: 'DOSSIER & MANIFESTO',
      faqTitle: 'Frequently asked\nquestions',
      helpKicker: 'HELP CENTER',
      helpDesc: 'Looking for deeper details? Connect directly via telegraph wire.',
      helpCta: 'Contact Developer →',
      faqs: [
        {
          q: 'How does the free trial work?',
          sub: 'How to run and experience the independent projects?',
          a: 'All projects (Neinote, Tahx, and "Ah! Goblins.") are designed with local-first and open-source principles in mind, supporting one-click repository clones or zero-install web access.'
        },
        {
          q: 'Why did you transition from physics to software creation?',
          sub: 'Why withdraw from SUSTech graduate school to pursue independent building?',
          a: 'During undergraduate and graduate studies at SUSTech, I received rigorous training in differential equations, computational simulation, and analytical thinking. In early 2025, clarity regarding creative autonomy led me to step away from traditional academia, channeling scientific modeling directly into living Go + React applications.'
        },
        {
          q: 'Why do you openly declare an AI-augmented development workflow?',
          sub: 'Why proudly acknowledge full AI pair-programming?',
          a: 'In the era of Claude Code, Antigravity, and Codex, engineering value has migrated from typing boilerplate to system architecture, domain boundary definition, and rigorous quality verification. Declaring AI collaboration reflects honesty toward modern tooling and proves how a solitary builder can deliver industrial-grade products with 10x agility.'
        },
        {
          q: 'What is the philosophy behind choosing Go + React?',
          sub: 'Why anchor the core stack around Go and React?',
          a: 'Go provides rock-solid concurrency, low memory overhead, and standard-library purity ideal for local-first storage and fast APIs. React 19 + TypeScript offers total mastery over responsive state machines and fluid typography.'
        },
        {
          q: 'What did nomad life in Xi\'an and volunteering inspire?',
          sub: 'What insights emerged from six months in Xi\'an and grassroots fieldwork?',
          a: 'Living amidst historic city walls and rural communities in Hebei and Yunnan cultivated empathy and real-world order. It was during that quiet contemplation that Neinote, Tahx, and "Ah! Goblins." were conceptualized.'
        },
        {
          q: 'What kind of support do you provide?',
          sub: 'Current development status and collaboration inquiries?',
          a: 'I am building full-time as an independent nomad, advancing my software ecosystem and studying German (A2+) and Japanese. Always open to challenging Go/React endeavors, AI workflow advisory, and intellectual dialogues via email.'
        }
      ],
      storyHeadline: 'From Theoretical Physics to Living Software',
      p1: 'During four years studying geophysics at SUSTech, I spent days simulating invisible physical phenomena using PDEs and finite element inversion; continuing into graduate physics deepened my exposure to theoretical rigor. Yet internally, I craved building tools that touch everyday human experience directly.',
      p2: 'In early 2025, grounded in clear self-knowledge and a commitment to independent creation, I decided to leave the master\'s program. It was not retreat, but liberation: redirecting energy from a paper credential toward building products that solve real problems.',
      manifestoBadge: 'MANIFESTO',
      manifestoHeadline: 'Why I Proudly Declare Full AI-Assisted Development',
      manifestoBody: 'With modern terminal agents, software excellence lies in problem framing, system architecture, taste, and quality control rather than manual syntax typing. Openly acknowledging AI collaboration honors the new paradigm and demonstrates the productive leverage of modern builders.',
      p3: 'During six months living in Xi\'an, walking by historic ramparts every sunset, Neinote, Tahx, and "Ah! Goblins." took shape. Fieldwork across Hebei and Yunnan kept me grounded in real human connections.',
      connectKicker: 'CONTACT & CONNECT',
      connectHeadline: 'Telegraph & Dispatch Desk',
      connectSub: 'Open to Go + React full-stack engineering, AI workflow advisory, and creative collaborations.',
      statusKicker: 'CURRENT STATUS',
      statusItems: [
        '• Full-time independent indie development',
        '• Deeply focused on Go + React software craft',
        '• Advancing German (A2+) and Japanese basics',
        '• Open to technical inquiries and project dialogues'
      ]
    },
    chat: {
      title: 'THE TELEGRAPH DESK',
      subtitle: 'TRANSMIT VIA AI SHADOW · RUISI DIGITAL TWIN',
      welcomeMsg: '【TELEGRAPH DISPATCH】 Greetings! You have reached Ruisi HE\'s digital telegraph desk. Inquire about my Go+React projects (Neinote / Tahx / Goblins), SUSTech physics background, nomad life in Xi\'an, or Claude Code / Codex workflow paradigms anytime.',
      quickPrompts: [
        '📰 Inquire about the AI development workflow',
        '🕹️ Report on "Ah! Goblins." gameplay',
        '📝 Why build Neinote knowledge app?',
        '🏛️ Detail SUSTech physics & withdrawal'
      ],
      placeholder: 'Transmit message via telegraph wire...',
      send: 'TRANSMIT',
      statusLive: 'TELEGRAPH ONLINE'
    }
  },

  de: {
    common: {
      vol: 'BD. 1',
      edition: '13.10.2026 · SUSTECH & NOMADEN-AUSGABE',
      subscribe: 'ABONNIEREN',
      copied: 'KOPIERT!',
      copyEmail: 'E-MAIL KOPIEREN',
      print: 'SEITE DRUCKEN',
      printDossier: 'LEBENSLAUF DRUCKEN',
      contactSupport: 'KONTAKT AUFNEHMEN →',
      close: 'SCHLIESSEN',
      readMore: 'VOLLSTÄNDIGEN ESSAY LESEN →',
      advertisement: 'ANZEIGENTEIL',
      telegraphDispatch: 'TELEGRAMM SENDEN · KI-DESK',
      telegraphSubtitle: 'DIREKT AN DEN DIGITALEN ZWILLING SENDEN',
      lastRevised: 'ARCHIVSTAND: OKTOBER 2026',
      essentialVitals: 'STAMMDATEN · VITALS',
      geographicCoordinates: 'GEOGRAFISCHE KOORDINATEN',
      viewRepo: 'QUELLCODE ANSEHEN (GITHUB) →',
      viewLive: 'PROJEKT ÖFFNEN →',
      backToTop: 'NACH OBEN',
      shareArticle: 'ESSAY TEILEN',
      linkCopied: 'LINK KOPIERT',
      readingTimeEst: 'LESEZEIT',
      wordsCount: 'WÖRTER',
      nav: {
        home: 'TITELSEITE',
        resume: 'RESUME',
        timeline: 'TIMELINE',
        project: 'PROJECT',
        blog: 'BLOG',
        about: 'ABOUT'
      },
      footer: {
        edition: 'DIE RUISI CHRONIK | BD. 1 · AUSGABE 2026',
        rights: `© ${new Date().getFullYear()} Ruisi HE. Alle Rechte vorbehalten.`
      }
    },
    ticker: [
      'EILMELDUNG: NEINOTE WISSENSNOTIZEN-APP IN AKTIVER ENTWICKLUNG',
      'LEITARTIKEL: GESAMTER CODE DURCH CLAUDE CODE & CODEX UNTERSTÜTZT',
      'SUSTECH-GEOPHYSIKER WIRD ZUM UNABHÄNGIGEN SOFTWARE-SCHÖPFER',
      'TAHX SZENARIEN-HAUSHALTSBUCH & RAUMORDNUNG IN PRODUKTION',
      'JETZT SPIELBAR: „AH! GOBLINS.“ MINIMALISTISCHES TEXT-RPG',
      'SPRACHEN: ENGLISCH CET-6/TOEFL 80 · DEUTSCH A2+ IM SELBSTSTUDIUM',
      'NOMADEN-SPUREN: XI\'AN, HEBEI UND YUNNAN FREIWILLIGENDIENST'
    ],
    home: {
      heroKicker: 'TITELSTORY · LEITARTIKEL',
      heroHeadline: 'MANIFEST EINES INDIE-ENTWICKLERS: WISSENSCHAFTLICHE BASIS × GO + REACT × KI-KOLLABORATION',
      heroSub: 'Ausbruch aus akademischen Einbahnstraßen. Die Strenge physikalischer Modellierung vereint mit Terminal-KI-Tempo zur Erschaffung handfester Software.',
      dateMeta: '13. Oktober 2026 · Morgenausgabe',
      readingTime: '3 Min. Lesezeit',
      leadStoryP1: 'In Zeiten generativer KI liegt der Engpass der Softwareentwicklung nicht mehr im Auswendiglernen von Syntax, sondern in Domänenabstraktion, rasanter Prototypen-Geschwindigkeit und kompromissloser Qualitätskontrolle. Mit meinem geophysikalischen und physikalischen Forschungshintergrund an der SUSTech entschied ich mich Anfang 2025 bewusst für den Abbruch des Masterstudiums, um eigenständige Software zu bauen.',
      leadStoryP2: 'Auf dem Fundament von Gos nebenläufiger Robustheit und modernen React 19 Komponenten entwickle ich in Vollzeit Neinote (Wissensinternalisierung), Tahx (szenariobasiertes Haushalten) und das Text-RPG „Ah! Goblins.“. Ich erkläre offen und stolz: Alle Projekte entstehen in enger Paarprogrammierung mit Claude Code, Antigravity und Codex.',
      manifestoBadge: 'LEITLINIE DER REDAKTION',
      manifestoTitle: 'Bekenntnis zur KI-gestützten Entwicklung',
      manifestoP: '„Im Zeitalter des autonomen Schöpfers ist das offene Bekenntnis zu KI-Werkzeugen eine Würdigung moderner Produktivität. Der Mensch lenkt Architektur und Ästhetik; die KI übernimmt rasante Code-Ausführung und Randfall-Prüfung für 10-fache Agilität.“',
      weatherKicker: 'ARCHIV-STAMMDATEN',
      weatherLocation: 'Xi\'an / Remote, China',
      weatherStudio: 'Unabhängiges Home Studio',
      weatherDegree: 'SUSTech Physik & Geophysik',
      weatherDegreeSub: 'B.S. abgeschlossen / M.S. vorzeitig beendet für Indie Dev',
      advertKicker: 'ANZEIGENTEIL',
      advertTitle: 'TELEGRAMM AN DIE REDAKTION',
      topEditionsKicker: 'HAUPTRUBRIKEN & DIREKTE DEPENTSCHEN',
      topEditionsSub: 'KLICKEN ZUM ÖFFNEN DER RUBRIK',
      cards: {
        c1Kicker: 'RUBRIK 01',
        c1Title: 'Software-Werkschau',
        c1Desc: 'Detaillierte Einblicke in Neinote, Tahx und „Ah! Goblins.“ mit Go+React Architektur und KI-Pair-Programming.',
        c1Action: 'Projekte ansehen →',
        c2Kicker: 'RUBRIK 02',
        c2Title: 'Archiv-Lebenslauf & Analyse',
        c2Desc: 'Präzise einseitige LaTeX-Präsentation sowie 4 redaktionelle Säulen zu Ruisi HEs Alleinstellungsmerkmalen.',
        c2Action: 'Lebenslauf einsehen →',
        c3Kicker: 'RUBRIK 03',
        c3Title: 'Chronologische Meilensteine',
        c3Desc: 'Akademische Forschung, Wendepunkt des Studienabbruchs, Xi\'an-Reise, Freiwilligendienste und Kompetenzmatrix.',
        c3Action: 'Chronik erkunden →',
        c4Kicker: 'RUBRIK 04',
        c4Title: 'Literarische Beilage & Essays',
        c4Desc: 'Gedichte und Reflexionen, die naturwissenschaftliche Präzision mit menschlicher Wärme verknüpfen.',
        c4Action: 'Beiträge lesen →'
      }
    },
    resume: {
      breadcrumb: 'RUBRIK A · ARCHIV-DOSSIER & CURRICULUM VITAE',
      archivalExhibit: 'ARCHIV-EXPONAT',
      figCaption: 'ABB. 2.1 · ARCHIV-EXPONAT · AKADEMISCHER LEBENSLAUF',
      pillarsKicker: 'ANALYSE',
      pillarsHeadline: 'Warum Ruisi HE heraussticht',
      pillarsSub: 'Alles, was nötig ist, um komplexe Logik in lebendige, hochwirksame Software zu verwandeln.',
      pillars: {
        p1Title: 'COMPUTATIONAL RIGOR',
        p1Desc: 'Tief geprägt von geophysikalischer Modellierung und Physikforschung an der SUSTech; zerlegt unbekannte Probleme stets von den Grundprinzipien aus.',
        p2Title: 'INDIE FULL-STACK VELOCITY',
        p2Desc: 'Getragen von Gos robuster Nebenläufigkeit und schlanker Persistenz, vereint mit React 19 + TypeScript für reaktive, eigenständige Software.',
        p3Title: 'AI-AUGMENTED LEVERAGE',
        p3Desc: 'Tiefes Beherrschen von Claude Code, Antigravity und Codex. Der Mensch definiert Schnittstellen und Geschmack; die KI liefert rasante Ausführung.',
        p4Title: 'MULTILINGUAL & NOMAD GRIT',
        p4Desc: 'Englisch CET-6 / TOEFL 80, Deutsch im aktiven Selbststudium (A2+), Japanisch-Grundlagen. Sechs Monate Nomadenleben in Xi\'an und Freiwilligendienst.'
      },
      calloutBadge: 'CHRONIK IN EIGENER RUBRIK VERFÜGBAR',
      calloutTitle: 'Ausführliche chronologische Lebensstationen einsehen',
      calloutDesc: 'Forschung an der SUSTech, Entschluss zum Studienabbruch Anfang 2025, Nomadenzeit in Xi\'an, Freiwilligendienste in Hebei und Yunnan sowie die 4D-Kompetenzmatrix befinden sich in Rubrik B.',
      calloutBtn: 'VOLLSTÄNDIGE CHRONIK ÖFFNEN (TIMELINE)',
      printBtn: 'LEBENSLAUF DRUCKEN',
      latex: {
        name: 'Ruisi HE',
        phone: '+86 15815548345',
        country: 'VR China (P. R. China)',
        expTitle: 'ERFAHRUNG & PRAXIS',
        davinciTitle: '• Da Vinci Challenge Camp - Winter 2019',
        davinciSub: 'Dritter Preis (Third Award), Dezember 2019',
        davinciBullets: [
          'Erlernen ingenieurwissenschaftlicher Fertigkeiten in 3D-Modellierung, 3D-Druck und Laserschneiden',
          'Koordination und Umsetzung interdisziplinärer Aufgaben im Team',
          'Kreative Verknüpfung von theoretischer Konzeption und praktischer Fertigung'
        ],
        cguTitle: '• Jahrestagung der Chinesischen Geowissenschaftlichen Union (CGU 2020)',
        cguSub: 'Teilnehmer, Oktober 2020',
        cguBullets: [
          'Erweiterung des wissenschaftlichen Horizonts durch Fachvorträge zu geophysikalischen Grenzforschungen',
          'Einblicke in moderne numerische Inversionsverfahren'
        ],
        swipTitle: '• Forschungspraktikum am Southwestern Institute of Physics',
        swipSub: 'Praktikant, Juli bis August 2021',
        swipBullets: [
          'Mitwirkung an experimenteller Forschung und Modellanalysen in Großforschungseinrichtung',
          'Eigenständige empirische Datenverarbeitung und numerische Berechnungen'
        ],
        eduTitle: 'AUSBILDUNG',
        msTitle: '• M.S. Physik (Masterstudium)',
        msSub: 'Southern University of Science and Technology · 2022.09 - Anfang 2025 (Abgebrochen)',
        bsTitle: '• B.S. Geophysik (Bachelorabschluss)',
        bsSub: 'Southern University of Science and Technology · 2018.08 - 2022.06',
        bsThesis: 'Abschlussarbeit: Physikalische Tanksimulation der Längenelektroden-Widerstandsmethode',
        skillsTitle: 'KENNTNISSE',
        techLabel: '• Tech Stack:',
        langLabel: '• Sprachen:',
        langVal: 'Chinesisch (Muttersprache), Englisch (CET-6, TOEFL 80), Deutsch (A2+ im Selbststudium)',
        hobbiesTitle: 'INTERESSEN & HOBBYS',
        hobbies: {
          hiking: 'Wandern',
          writing: 'Schreiben',
          handcraft: 'Handwerk'
        }
      }
    },
    timeline: {
      breadcrumb: 'RUBRIK B · CHRONOLOGISCHES DOSSIER & EXPEDITIONEN',
      backToResume: 'Zurück zum Lebenslauf',
      expeditionSpan: '2018 — 2026+ EXPEDITIONEN',
      mastheadTitle: 'Chronologie der Meilensteine & Koordinaten',
      mastheadSub: 'Von der Physikforschung an der SUSTech zum bewussten Studienabbruch für eigenständiges Schaffen; vom Nomadenleben in Xi\'an zum Freiwilligendienst und Go+React Full-Stack.',
      totalMilestones: 'MEILENSTEINE GESAMT',
      nodesCount: '6 Kernknoten',
      timeSpan: '2018 - 2026+',
      filterLabel: 'KATEGORIE-FILTER:',
      filters: {
        all: 'ALLE STATIONEN',
        indie: 'INDIE-PROJEKTE',
        journey: 'REISEN & NOMADE',
        edu: 'AUSBILDUNG',
        volunteer: 'ENGAGEMENT'
      },
      nodes: [
        {
          id: 't-now',
          period: '2025 - HEUTE',
          title: 'Indie-Entwickler · KI-gestützte Software-Kreation',
          organization: 'Home Studio & Indie Space',
          location: 'Remote / Home Base',
          category: 'Indie Dev',
          tag: 'GO + REACT',
          description: 'Software-Entwicklung mit Go + React, eng verknüpft mit Claude Code, Antigravity und Codex. Vollzeit-Fokus auf Neinote, Tahx und das Text-RPG „Ah! Goblins.“, begleitet von aktivem Deutsch- (A2+) und Japanisch-Lernen.',
          details: ['Hocheffiziente Mensch-KI-Paarprogrammierung', 'Autodidaktisches Sprachenlernen', 'Aufbau nachhaltiger Indie-Werkzeuge']
        },
        {
          id: 't-xian',
          period: '1. HALBJAHR 2025',
          title: 'Nomadenleben im historischen Xi\'an',
          organization: 'Independent Exploration',
          location: 'Shaanxi · Xi\'an',
          category: 'Journey',
          tag: 'NOMAD LIFE',
          description: 'Sechs Monate unabhängiges Leben in der alten Kaiserstadt Xi\'an, losgelöst von akademischem Druck, vertieft in Lektüre, Philosophie und saubere Software-Architektur.',
          details: ['Halbes Jahr digitales Nomadentum', 'Verfassen von Essays und philosophischen Skizzen', 'Konzeption zentraler Software-Architekturen']
        },
        {
          id: 't-choice',
          period: 'ANFANG 2025',
          title: 'Der Wendepunkt: Abschied vom Elfenbeinturm',
          organization: 'SUSTech Fachbereich Physik',
          location: 'Guangdong · Shenzhen',
          category: 'Education',
          tag: 'PIVOT POINT',
          description: 'Aus klarer Selbsterkenntnis und dem Drang nach schöpferischer Selbstbestimmung freiwilliger Abbruch des Physik-Masterstudiums, um eigenständige Software zu bauen.',
          details: ['Abschied vom klassischen Universitätsbetrieb', 'Fokus auf reale Produkte und Ingenieurskunst', 'Gewinnung von Zeitsouveränität und geistiger Freiheit']
        },
        {
          id: 't-volunteer',
          period: 'MEHRJÄHRIG',
          title: 'Freiwilligendienste & Feldarbeit in mehreren Regionen',
          organization: 'Grassroots Community',
          location: 'Hebei, Yunnan u.a.',
          category: 'Volunteer',
          tag: 'HUMAN TOUCH',
          description: 'Mehrmalige Reisen in ländliche Gemeinschaften in Hebei und Yunnan für Freiwilligenarbeit; schärfte Empathie, psychische Widerstandskraft und Anpassungsfähigkeit.',
          details: ['Tiefes Eintauchen in ländliche Gemeinschaften', 'Stärkung von Resilienz in fordernden Umgebungen', 'Verständnis für vielfältige menschliche Lebensrealitäten']
        },
        {
          id: 't-grad',
          period: '2022 - 2024',
          title: 'Forschungsphase im Physik-Masterstudium',
          organization: 'SUSTech Fachbereich Physik',
          location: 'Guangdong · Shenzhen',
          category: 'Education',
          tag: 'GRADUATE',
          description: 'Vertiefung in theoretischer Quantenphysik, Elektrodynamik und computergestützter Simulation; Schulung von kausalem Denken in komplexen Systemen.',
          details: ['Modellierung fortgeschrittener Physiktheorien', 'Kritische Literatur- und Methodenforschung', 'Forschungspraktikum am Southwestern Institute of Physics']
        },
        {
          id: 't-undergrad',
          period: '2018 - 2022',
          title: 'Bachelor of Science (B.S.) in Geophysik',
          organization: 'SUSTech Fachbereich Geo- und Weltraumwissenschaften',
          location: 'Guangdong · Shenzhen',
          category: 'Education',
          tag: 'UNDERGRAD',
          description: 'Fundierte Ausbildung in höherer Mathematik, Differentialgleichungen, Elektromagnetismus und numerischer Inversion. Abschlussarbeit über Tanksimulation für Elektrodenwiderstand. 3. Preis im Da Vinci Camp.',
          details: ['3. Preis im Da Vinci Challenge Camp (Fertigung)', 'CET-6 bestanden, TOEFL 80 Punkte', 'Kenntnisse in Python, MATLAB, Java, Scheme (Lisp)']
        }
      ],
      vitals: {
        nameLabel: 'NAME',
        nameVal: 'Ruisi HE',
        degreeLabel: 'ABSCHLUSS',
        degreeVal: 'SUSTech B.S. Geophysik',
        gradLabel: 'MASTERSTUDIUM',
        gradVal: 'Physik M.S. (Anfang 2025 beendet)',
        engLabel: 'ENGLISCH',
        engVal: 'CET-6 / TOEFL 80',
        gerLabel: 'DEUTSCH',
        gerVal: 'A2+ im Selbststudium',
        specLabel: 'SCHWERPUNKT',
        specVal: 'Go + React (KI-nativ)'
      },
      skillGroups: [
        {
          category: 'RUBRIK I · Full-Stack & Moderne Webentwicklung',
          iconName: 'Code2',
          description: 'Gos nebenläufige Backend-Stärke gepaart mit React 19 Komponenten-Reaktivität.',
          skills: [
            { name: 'Go (Golang)', note: 'Nebenläufige Dienste · Speicheroptimierung', level: 'MAIN STACK' },
            { name: 'React 19 / TypeScript', note: 'Hooks · Framer Motion · Zustandsautomaten', level: 'MAIN STACK' },
            { name: 'Tailwind CSS', note: 'Atomare Typografie · Rastersysteme', level: 'PROFICIENT' },
            { name: 'SQLite / RESTful API', note: 'Local-First Persistenz & klare Protokolle', level: 'PRACTICAL' }
          ]
        },
        {
          category: 'RUBRIK II · Mensch-KI-Kollaborationsparadigma',
          iconName: 'Cpu',
          description: 'Zukunftsweisende Paarprogrammierung mit KI als 24/7 Co-Pilot und Hebelwerkzeug.',
          skills: [
            { name: 'Claude Code', note: 'Terminal-Agenten · System-Refaktorisierung', level: 'DAILY CORE' },
            { name: 'Antigravity / Codex', note: 'Architektur-Prototyping · Schnelle Codegenerierung', level: 'PRIMARY' },
            { name: 'Prompt & Kontext-Architektur', note: 'Problemzerlegung · Schnittstellenverträge', level: 'ADVANCED' },
            { name: 'Code Review & Qualitätskontrolle', note: 'Strenge Korrektheitsprüfung & Robustheit', level: 'VIGILANT' }
          ]
        },
        {
          category: 'RUBRIK III · Wissenschaftliches Rechnen & Mathe',
          iconName: 'Terminal',
          description: 'Mathematische Abstraktion und Modellierung aus dem SUSTech-Physikstudium.',
          skills: [
            { name: 'Python & NumPy', note: 'Datenanalyse & algorithmisches Prototyping', level: 'SOLID' },
            { name: 'MATLAB', note: 'Numerische Inversion & elektromagnetische Matrizen', level: 'ACADEMIC' },
            { name: 'Scheme (Lisp)', note: 'Funktionale Programmierung & symbolisches Rechnen', level: 'CONCEPTUAL' },
            { name: '3D-Fertigung', note: 'CAD-Modellierung / 3D-Druck / Laserschneiden', level: 'AWARDED' }
          ]
        },
        {
          category: 'RUBRIK IV · Sprachen & Interkulturelle Verbindung',
          iconName: 'Languages',
          description: 'Weltweiter Informationszugang und interkultureller Austauschhorizont.',
          skills: [
            { name: 'Chinesisch (Mandarin)', note: 'Muttersprache', level: 'NATIVE' },
            { name: 'Englisch', note: 'CET-6 zertifiziert / TOEFL 80', level: 'WORKING' },
            { name: 'Deutsch', note: 'Aktives Selbststudium (A2 Niveau)', level: 'LEARNING' },
            { name: 'Japanisch', note: 'Grammatikgrundlagen & Sprachbegeisterung', level: 'LEARNING' }
          ]
        }
      ],
      geo: {
        title: 'GEOGRAFISCHE KOORDINATEN',
        items: [
          { loc: 'Shenzhen:', desc: 'Bachelor- und Masterforschung an der SUSTech' },
          { loc: 'Xi\'an:', desc: 'Erstes Halbjahr 2025 Nomadenleben, Lektüre und Code' },
          { loc: 'Hebei / Yunnan:', desc: 'Freiwilligendienste in ländlichen Gemeinschaften' },
          { loc: 'Home Studio:', desc: 'Vollzeit-Entwicklung unabhängiger Go+React Software' }
        ]
      }
    },
    project: {
      breadcrumb: 'RUBRIK C · INDIE-SOFTWARE & PROJEKT-SCHAU',
      pageTitle: 'Software-Werkschau & Projekte',
      pageSub: 'Alle Projekte basieren auf Go + React und wurden durch Claude Code, Antigravity und Codex beschleunigt. Klick auf eine Karte für Architekturdetails.',
      projects: [
        {
          id: 'neinote',
          name: 'Neinote',
          subtitle: 'Reibungslose Erfassung + immersive KI-Synthese + strukturierter Export',
          category: 'Productivity',
          stack: ['Go', 'React', 'TypeScript', 'Tailwind', 'Vector DB', 'Claude Code'],
          badge: 'GO + REACT',
          image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=1200&auto=format&fit=crop',
          summary: 'Beseitigt vergessene Gedankenfragmente und verwandelt Impulse sekundenschnell in verinnerlichtes Wissen.',
          description: 'Viele Notizen-Apps sammeln fleißig, scheitern aber am Strukturieren. Neinote bietet blitzschnelle Eingabe, kontextbezogene semantische KI-Bündelung und wandelt Notizensplitter per Klick in ausgearbeitete Essays.',
          aiWorkflow: 'Erstellt mit Claude Code und Antigravity. Ich definierte Domänenmodelle, Schnittstellen und Architektur; KI implementierte den Go-Speicherdienst und das React-Interface.',
          highlights: [
            'Verzögerungsfreie globale Blitz-Eingabe',
            'Semantische KI-Bündelung zu Wissensgraphen',
            'Local-First Architektur für absolute Datensouveränität',
            'Export strukturierter Markdown-Texte in Vorträge und Essays'
          ],
          link: 'https://github.com/ruisihe/neinote',
          status: 'Active Dev'
        },
        {
          id: 'tahx',
          name: 'Tahx',
          subtitle: 'Szenarien-Haushaltsbuch & physische Raumordnung',
          category: 'Utility',
          stack: ['Go', 'React', 'SQLite', 'RESTful API', 'Tailwind', 'Codex'],
          badge: 'GO + REACT',
          image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1200&auto=format&fit=crop',
          summary: 'Befreit von Haushaltsbuch-Frust durch Verknüpfung von Ausgaben mit konkreten Lebensräumen und Gegenständen.',
          description: 'Tahx hinterfragt das Verhältnis von Mensch, Eigentum und Geld. Statt nur Beträge zu erfassen, wird verzeichnet, in welcher Lebenssituation welcher Gegenstand angeschafft wurde.',
          aiWorkflow: 'Paarprogrammierung mit Codex und Claude. Ich entwarf das leichtgewichtige DDD-Modell; KI erstellte Go-REST-Endpunkte und reaktive Komponenten.',
          highlights: [
            'Szenarien-Fokus verhindert Kategorisierungs-Müdigkeit',
            'Physische Gegenstands-Zuordnung nach Zimmern und Kisten',
            'Transparente Statistiken über reale Lebensprioritäten',
            'Klares, minimalistisches Technologie-Design'
          ],
          link: 'https://github.com/ruisihe/tahx',
          status: 'Active Dev'
        },
        {
          id: 'goblins',
          name: 'Ah! Goblins.',
          subtitle: 'Ein minimalistisches, düsteres Inkremental-Text-Abenteuer',
          category: 'Game',
          stack: ['Go', 'React', 'Framer Motion', 'State Engine', 'AI Assisted'],
          badge: 'GO + REACT',
          image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop',
          summary: 'Reiner Text und monochrome Ästhetik erschaffen eine absurde, packende unterirdische Expedition.',
          description: 'Ohne überladene 3D-Grafiken kehrt das Spiel zu packender Erzählung und Zahlenspiel zurück. Spieler erkunden Gewölbe, rekrutieren Gefährten und treffen moralische Entscheidungen.',
          aiWorkflow: 'KI half bei der mathematischen Formelberechnung und den Verzweigungsbäumen sowie beim Go-Offline-Berechnungsmotor.',
          highlights: [
            'Minimalistisches Schwarz-Weiß-Design mit Schreibmaschinen-Feeling',
            'Nicht-lineare Zahlenkurven und zufällige Begegnungen',
            'Schlanker Go-Offlinerechner für kontinuierlichen Fortschritt',
            'Schwarzer Humor und absurde literarische Erzählweise'
          ],
          link: 'https://github.com/ruisihe/goblins-text-rpg',
          status: 'Active Dev'
        },
        {
          id: 'geophysics',
          name: 'Physikalische Tanksimulation für Elektrodenwiderstand',
          subtitle: 'SUSTech Bachelorarbeit & interdisziplinäre Berechnungen',
          category: 'Science & Math',
          stack: ['Python', 'MATLAB', 'Scheme (Lisp)', '3D Modeling', 'Finite Element'],
          badge: 'SUSTech RESEARCH',
          image: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?q=80&w=1200&auto=format&fit=crop',
          summary: 'Finite-Differenzen-/Element-Methoden und physikalischer Wassertank zur Potenzialfeld-Simulation.',
          description: 'Untersuchung geometrischer Singularitäten bei geophysikalischen Lang-Elektroden. Aufbau eines Wassertank-Versuchsstands und Abgleich mit numerischen Modellierungen.',
          aiWorkflow: 'Legte das mathematische Fundament für spätere funktionale Programmierparadigmen und KI-gestützte Code-Analysen.',
          highlights: [
            'Konstruktion der Versuchsanordnung und präzise Datenerfassung',
            'Vergleich analytischer und numerischer Feldberechnungen',
            'Fundiertes Problemlösungsvermögen in komplexen physikalischen Systemen',
            'Hervorragende Bewertung in der universitären Verteidigung'
          ],
          link: 'https://github.com/ruisihe/long-electrode-simulation',
          status: 'Completed'
        }
      ],
      workflowBadge: 'ARBEITSWEISE',
      workflowHeadline: 'Wie Claude Code & Codex 10-fache Liefergeschwindigkeit ermöglichen',
      workflowCta: 'Vollständigen Bericht lesen →',
      steps: [
        {
          num: '01',
          title: 'Architektur & Verträge zuerst',
          desc: 'Der Mensch definiert Geschäftsmodelle und Schnittstellen; die KI rät nicht ins Blaue hinein.'
        },
        {
          num: '02',
          title: 'Automatisierung im Terminal',
          desc: 'Terminal-Agenten steuern Go-Pipelines und React-Zustände ohne zeitraubenden Boilerplate-Code.'
        },
        {
          num: '03',
          title: 'Strenge manuelle Prüfung',
          desc: 'Sorgfältige Überprüfung kritischer Codepfade gewährleistet industrielle Zuverlässigkeit.'
        }
      ]
    },
    blog: {
      breadcrumb: 'RUBRIK D · LITERARISCHE BEILAGE & ESSAYS',
      pageTitle: 'Literarische Beilage & Essays',
      pageSub: 'Jenseits von Differentialgleichungen und Code: Schriftliche Erkundungen über Erde, Menschen und nomadische Bewegung.',
      writings: [
        {
          id: 'w-1',
          title: 'Stromleitungen in der Dämmerung von Xi\'an',
          genre: '诗歌',
          date: '2025 · Xi\'an',
          excerpt: 'Schwarze geometrische Linien schneiden das Abendrot in geometrische Reihen. Man weiß nicht, welcher Draht zu antiken Palastlaternen führt und welcher den Code transportiert, den ich gerade ins Repository schob.',
          content: [
            'Schwarze geometrische Linien schneiden das Abendrot in geometrische Reihen.',
            'Taubenschwärme zeichnen Kegelschnitte über die alte Stadtmauer,',
            'Man weiß nicht, welcher Draht zu kaiserlichen Palastlaternen führt,',
            'Und welcher jenen Code transportiert, den ich soeben committete.',
            'Geschichte ist eine noch nicht konvergierte numerische Iteration,',
            'Während ich an der Straßenecke stehe,',
            'Und eine dampfende Schale Chilinudeln in die Ewigkeit verwandle.'
          ]
        },
        {
          id: 'w-2',
          title: 'Vom Elfenbeinturm zurück auf den Boden',
          genre: '散文随笔',
          date: '2025 · Essay',
          excerpt: 'Der Studienabbruch war kein Aufgeben, sondern die Erkenntnis, ob ich einen akademischen Titel suchte oder ein selbstgebautes Zimmer mit Wind, Code und Leben.',
          content: [
            'Im Labor durch optische Spektrometer blickend, erschien die Welt durch Glas gefiltert.',
            'Ich achte diese Präzision, doch mein Herz sehnte sich nach unformatiertem Boden.',
            'Im Moment des Abbruchs schien die Luft plötzlich weit und kühl zu werden.',
            'In den Dörfern von Hebei, im Regen von Yunnan, im Dampf der Gassen von Xi\'an lernte ich wieder zu atmen.',
            'Wenn ich nun die Zeichen von Go und React eintippe,',
            'Geschieht dies nicht für ein Rigorosum,',
            'Sondern als mein aufrichtigster Dialog mit der Welt.'
          ]
        },
        {
          id: 'w-3',
          title: 'Geflüster vor dem Kollaps der Wellenfunktion',
          genre: '诗歌',
          date: '2024 · Shenzhen',
          excerpt: 'In allen ungemessenen Zuständen existiere ich gleichzeitig zwischen Aufbruch und Ankunft.',
          content: [
            'Eile nicht, das Teilchen an einem festen Ort festzunageln.',
            'In allen ungemessenen Zuständen,',
            'Existiere ich gleichzeitig zwischen Aufbruch und Ankunft.',
            'Die Wahrscheinlichkeitswolke zittert in der Nacht,',
            'Jede getroffene Wahl,',
            'Lässt unendliche Möglichkeiten zu einer einzigen, leuchtenden Spur kollabieren.'
          ]
        }
      ],
      colophonKicker: 'SCHLUSSWORT',
      colophonQuote: '„Das Leben besteht aus mehr als grünen Terminal-Builds; es birgt Abendsonne hinter Stromleitungen und Erde frei von Formatierung.“'
    },
    about: {
      breadcrumb: 'RUBRIK E · PHILOSOPHIE & HÄUFIGE FRAGEN',
      tagline: 'DOSSIER & MANIFEST',
      faqTitle: 'Frequently asked\nquestions',
      helpKicker: 'HILFE-ZENTRUM',
      helpDesc: 'Benötigen Sie weitere Einzelheiten? Treten Sie direkt per Telegramm-Leitung in Kontakt.',
      helpCta: 'Kontakt aufnehmen →',
      faqs: [
        {
          q: 'How does the free trial work?',
          sub: 'Wie können die unabhängigen Softwareprojekte getestet werden?',
          a: 'Alle Projekte (Neinote, Tahx und „Ah! Goblins.“) sind Local-First und quelloffen konzipiert und können per Klick im Web oder lokal ohne Hürden ausprobiert werden.'
        },
        {
          q: 'Why did you transition from physics to software creation?',
          sub: 'Warum der Abbruch des Physik-Masterstudiums an der SUSTech für unabhängiges Bauen?',
          a: 'Im Bachelor und Master an der SUSTech wurde ich gründlich in Differentialgleichungen und computergestützter Modellierung ausgebildet. Anfang 2025 entschied ich mich für schöpferische Autonomie, um dieses analytische Rüstzeug direkt in lebendige Go+React Software einzubringen.'
        },
        {
          q: 'Why do you openly declare an AI-augmented development workflow?',
          sub: 'Warum die offene Erklärung zur KI-unterstützten Entwicklung?',
          a: 'Im Zeitalter von Claude Code, Antigravity und Codex liegt der wahre Wert in Systemarchitektur, Domänenabgrenzung und Qualitätskontrolle. Das Bekenntnis zu KI beweist, wie ein einzelner Entwickler mit 10-facher Agilität industrieerprobte Software bauen kann.'
        },
        {
          q: 'What is the philosophy behind choosing Go + React?',
          sub: 'Warum Go und React als Kern-Technologien?',
          a: 'Go bietet felsenfeste Nebenläufigkeit und geringen Speicherverbrauch für Local-First Speicher und APIs; React 19 + TypeScript liefert absolute Kontrolle über reaktive Zustände und Typografie.'
        },
        {
          q: 'What did nomad life in Xi\'an and volunteering inspire?',
          sub: 'Welche Impulse brachten das Nomadenleben in Xi\'an und der Freiwilligendienst?',
          a: 'Das Leben jenseits akademischer Bewertungsmaßstäbe in Xi\'an sowie Freiwilligenarbeit in Hebei und Yunnan schärften Empathie und Lebensordnung. Dort entstanden die Grundideen zu Neinote, Tahx und „Ah! Goblins.“.'
        },
        {
          q: 'What kind of support do you provide?',
          sub: 'Aktueller Arbeitsstatus und Kontaktmöglichkeiten?',
          a: 'Ich entwickle in Vollzeit unabhängig, baue mein Software-Ökosystem aus und lerne Deutsch (A2+) sowie Japanisch. Immer offen für anspruchsvolle Go/React-Projekte, KI-Beratung und Gedankenaustausch per E-Mail.'
        }
      ],
      storyHeadline: 'Von der Physik an der SUSTech zu lebendiger Software',
      p1: 'Vier Jahre lang simulierte ich an der SUSTech unsichtbare physikalische Felder mit PDEs und Finite-Elemente-Inversion; das Masterstudium vertiefte die theoretische Strenge. Doch innerlich wollte ich Werkzeuge schaffen, die den Alltag direkt berühren.',
      p2: 'Anfang 2025 traf ich die bewusste Entscheidung zum Studienabbruch. Kein Aufgeben, sondern Befreiung: Die eigene Schaffenskraft floss direkt in Software, die echten Nutzen stiftet.',
      manifestoBadge: 'MANIFEST',
      manifestoHeadline: 'Warum ich stolz auf „vollständige KI-Unterstützung“ hinweise',
      manifestoBody: 'Heute entscheidet die Fähigkeit zur Problemabstraktion, Architektur und Qualitätskontrolle. Die offene Erklärung zollt der neuen Technologie Respekt und demonstriert die Schlagkraft moderner Schöpfer.',
      p3: 'Während der sechs Monate in Xi\'an entstanden Neinote, Tahx und „Ah! Goblins.“. Freiwilligendienste in Hebei und Yunnan verankerten mich fest im realen Leben.',
      connectKicker: 'KONTAKT & AUSTAUSCH',
      connectHeadline: 'Telegrafen-Leitung',
      connectSub: 'Offen für Go + React Entwicklung, KI-Workflow-Beratung und gedanklichen Austausch.',
      statusKicker: 'AKTUELLER STATUS',
      statusItems: [
        '• Vollzeit-unabhängige Softwareentwicklung',
        '• Fokus auf Go + React Handwerk',
        '• Vertiefung in Deutsch (A2+) und Japanisch',
        '• Jederzeit offen für fachlichen Austausch'
      ]
    },
    chat: {
      title: 'DER TELEGRAFEN-DESK',
      subtitle: 'DIREKTVERDRAHTUNG · RUISIS DIGITALER ZWILLING',
      welcomeMsg: '【TELEGRAMM-MELDUNG】 Guten Tag! Hier ist Ruisi HEs digitaler Telegrafen-Desk. Fragen Sie mich nach meinen Go+React Projekten (Neinote / Tahx / Goblins), dem Physik-Hintergrund an der SUSTech, der Zeit in Xi\'an oder modernen KI-Paarprogrammierung-Workflows!',
      quickPrompts: [
        '📰 Interview zum KI-Entwicklungs-Workflow',
        '🕹️ Bericht über das Gameplay von „Ah! Goblins.“',
        '📝 Warum die Neinote Wissens-App?',
        '🏛️ Details zum SUSTech-Studienabbruch'
      ],
      placeholder: 'Telegramm-Nachricht eingeben und senden...',
      send: 'SENDEN',
      statusLive: 'TELEGRAF ONLINE'
    }
  }
};
