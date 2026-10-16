/**
 * Chinese (zh) translations
 */
import type { TranslationData } from '../translations';

export const zh: TranslationData = {
    common: {
      vol: '第一卷',
      edition: '2026年版 · 独立自留地',
      subscribe: '关注自留地',
      copied: '已复制',
      copyEmail: '复制邮箱',
      print: '打印版面',
      printDossier: '打印简历',
      contactSupport: '电报专线 →',
      close: '关闭',
      readMore: '阅读全文',
      advertisement: '广告位',
      telegraphDispatch: '点击发报',
      telegraphSubtitle: '电报桌',
      lastRevised: '存档: 2026年10月',
      essentialVitals: '速览',
      geographicCoordinates: '足迹',
      viewRepo: '访问',
      viewLive: '在线体验',
      backToTop: '返回顶端',
      shareArticle: '分享文章',
      linkCopied: '已复制链接',
      readingTimeEst: '预计阅读',
      wordsCount: '字数',
      nav: {
        home: '头版',
        resume: '简历',
        timeline: '轨迹',
        project: '造物',
        blog: '随笔',
        about: '自述'
      },
      footer: {
        edition: '独立档案 · 2026年卷',
        rights: `© ${new Date().getFullYear()} 随意分享 & 欢迎留言 `
      }
    },
    ticker: [
      '快讯: NEINOTE 知识内化笔记应用构建中',
      '声明: 代码由 Antigravity 深度协同辅助开发',
      '地球物理背景转型',
      'TAHX: 场景驱动记账+收纳软件',
      '游玩: 《啊！是哥布林》',
      '多语种爱好者',
    ],
    home: {
      heroKicker: '头条',
      heroHeadline: '人机协同：灵感与实践',
      heroSub: '当灵感降临，或者获得启示时，不要犹豫，不要胆怯。只停留在脑海中孤独地狂欢，日久也便成了疯狂；行动！行动起来！去创造！去实践！',
      dateMeta: '2026年10月13日 · 晨刊',
      readingTime: '阅读约3分钟',
      leadStoryP1: '我必须承认，生成式人工智能已经深刻地重塑了软件工程生产关系，至少对于我而言！代码编写的瓶颈，早已从记忆语法转向探索敏捷原型与把控系统运行规范。从ChatGPT到现在蓬勃发展的AI生态链，我们或许不得不承认AI已经彻底走出了象牙塔，如昔日的搜索引擎般无孔不入地渗透进大众日常。',
      leadStoryP2: '而当交互范式也随之发生质变：人们不再是在冰冷的数据库里“搜索关键词”，而是希望通过自然语言与AI共谋，在探讨中推导出无数问题的解法。古人有云：“超以象外，得其环中。持之匪强，来之不可。”意为：美和灵感超脱于物象之外，潜藏在宇宙运行的枢纽中。你无法强求它，但当时机合适时，它自然会降临到你身上。',
      manifestoBadge: '思考',
      manifestoTitle: '交互与视觉',
      manifestoP: 'AI最大的价值，是让人们可以仅通过使用AI作为元工具或者人类意图的“编译器”来创建系统。然而当“实现的门槛”被削减到及格线，系统的价值就更加淋漓尽致地体现在：底层的交互设计与顶层的视觉呈现中。',
      weatherKicker: '档案速览',
      weatherLocation: '中国 · 贵州 ',
      weatherStudio: '居家远程',
      weatherDegree: '物理与地球物理学',
      weatherDegreeSub: '独立开发者',
      advertKicker: '专栏',
      advertTitle: '点击发报',
      topEditionsKicker: '今日版面',
      topEditionsSub: '点击直达',
      cards: {
        c1Kicker: '第一版',
        c1Title: '造物',
        c1Desc: '独立开发项目：包含前端作品以及全栈项目。',
        c1Action: '进入展厅',
        c2Kicker: '第二版',
        c2Title: '简历',
        c2Desc: '纯前端高精单页版面展示学习履历。',
        c2Action: '查阅简历',
        c3Kicker: '第三版',
        c3Title: '轨迹',
        c3Desc: '我的人生。',
        c3Action: '探索轨迹',
        c4Kicker: '第四版',
        c4Title: '随笔',
        c4Desc: '一些散落地生活碎片。',
        c4Action: '欣赏随笔'
      }
    },
    resume: {
      breadcrumb: '简历',
      archivalExhibit: '个人简历',
      figCaption: '感谢查阅',
      pillarsKicker: '特质',
      pillarsHeadline: '定义“我”',
      pillarsSub: '遂古之初，谁传道之？上下未形，何由考之？',
      pillars: {
        p1Title: '数理逻辑',
        p1Desc: '感谢南方科技大学地球与空间科学系的导师们，让我面对未知复杂问题时，习惯冷静分析并尝试从不同角度解构因果链条、同时尝试搭建解决当下问题的模型，不断增强抽象思维能力。',
        p2Title: '全栈敏捷',
        p2Desc: '不断更新技术栈，长期在开源社区吸收新养分，力求明晰每种工具的特性。不管是稳健并发的Go、前端头把交椅的React、还是跨平台的Flutter，我只挑最合适的武器去把产品漂亮地做出来。',
        p3Title: '人机协同',
        p3Desc: '深度拥抱生成式AI以及AI生态链上的工具，高强度使用Claude Code、Antigravity与Codex等工具，通过人机协同实现高效率的敏捷交付。',
        p4Title: '文化游民',
        p4Desc: '喜欢探索世界与不同的文化，始终认为劳动是文化的一体两面，劳动是文化的骨血，劳动中产生的所有价值的结晶，即各种璀璨不朽的文化瑰宝。'
      },
      calloutBadge: '轨迹',
      calloutTitle: '深入查阅完整轨迹与生活足迹档案',
      calloutDesc: '',
      calloutBtn: '查阅',
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
        msSub: '南方科技大学 · 2022.09 - 2025（已退学）',
        bsTitle: '• 地球物理学学士',
        bsSub: '南方科技大学 · 2018.08 - 2022.06',
        bsThesis: '毕业论文: 长电极电阻率法物理模拟实验研究',
        skillsTitle: '专业技能',
        techLabel: '• 常用技术:',
        langLabel: '• 语言能力:',
        langVal: '中文 (母语), 英语 (六级/托福80), 德语 (A2)',
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
      breadcrumb: '',
      pageTitle: '随笔',
      pageSub: '你是你生活唯一的参与者，唯一的记录者，唯一的见证者。',
      writings: [
        {
          id: 'w-1',
          title: '《无名 之一》',
          genre: '诗',
          date: '2022 · 深圳',
          excerpt: '我身无长物，行走在世间……',
          content: [
            '我身无长物，行走在世间',
            '天上有认识的星星，我就跟着它走，',
            '地上有流淌的溪流，我就跟着它走。',
            '我走啊走……',
            '有一天，突然有了路，',
            '一个声音告诉我，',
            '走啊……走吧！',
            '我说不，',
            '不。',
            '荒芜又充盈，这是我的世界，',
            `从来便没有路。`,
          ],
        },
        {
          id: 'w-2',
          title: '《无法忍受》',
          genre: '随记',
          date: '2023 · 随笔',
          excerpt: '我决计到一个没有人的地方去……',
          content: [
            '我决计到一个没有人的地方去……',
            '我想着我是再也不能忍受这样的生活了，可我又不想贸然同安逸决裂。这需要天大的勇气，不论勇气，就连我为着日后打算的信心，也一并消磨了。',
            '我的耐心已经所剩无几，每每想到这儿，我都直呼——够了！这样的生活，这样的念头，这样的我——真是够了！',
            '无数次，在睁眼的瞬间，吃饭时凝视着白色的墙壁，或者看着高高的楼，堆满垃圾的墙角，无数次，无数次辗转反侧……无时无刻，我在无能狂怒，我在无声呼喊——呐喊——甚至咆哮——',
            '够了！我受够了！可是日复一日，月复一月，我还在忍受着，我难道是在忍受，忍受本身吗？以忍受的痛苦作为我每天的精神食粮吗？',
            '……',

          ]
        },
        {
          id: 'w-3',
          title: '《论幸运》',
          genre: '讨论',
          date: '2021 · 贵州',
          excerpt: '幸运是一种既定的事实吗？还是可以成为一种态度？',
          content: [
            '幸运是一种既定的事实吗？还是可以成为一种态度？',
            '如果幸运只是一种确定的已知的状态，那么“幸运”的标准在哪里？如果能给人生画出一条轨迹线，它总在起伏。我们往往会在顶点时宣称声明赞同——我们是幸运的。而在低谷，即是不幸……',
            '可谁能为每个人的人生画出平均线呢，在那些平常的日子里，我们是在幸与不幸间徘徊吗？还是我们们仅仅只是通过粗浅地比较，哪怕自己在顶点，只要一和他人对比，啊，我是多么地不如他人，便擅自认为自己在低谷呢？',
            '在无穷无尽地比较中，根本没有赢家。比较到最后，只有满身的疲惫和虚无。',
            '把“幸运”看作一种人生的态度吧。',
            '你无法改变既定的事实，但是你可以决定如何看待它的你，你可以决定你的想法，你的行为，你的心！',
            '试试与往常截然不同地去对待好像遭遇了“不幸”的自己，或许只有你自己能为你的人生做出注释——',
            '“X年X月X日，有个人辱骂了我虽然我什么都没有做，Ta说我是个废物，不配活着……',
            '我……',
            '但是我，我礼貌地回应了对方，我会好好生活。”',
          ]
        }
      ],
      colophonKicker: '',
      colophonQuote: '“你是你生活唯一的倾听者，唯一的陈述者，唯一的幸存者。”'
    },
    about: {
      breadcrumb: '自述',
      tagline: '',
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
          sub: '为什么从南方科技大学物理学硕士阶段选择退学？',
          a: '在南方科技大学地球与空间科学系攻读学士与硕士期间，我系统训练了数理思维，明确了自己只是一个对“制造事物”感到狂热的人。2025 年初，我选择退学，希望能将更多的精力直接投入到我的创造中去。'
        },
        {
          q: '人机协同？',
          sub: '为什么坦诚声明全量 AI 辅助深度协同开发？',
          a: '在生成式AI时代，系统架构设计、领域边界抽象、产品视觉设计在软件工程的核心价值的比重逐渐提高到一个新的高度。由于对于多领域交叉项目的我来说，AI是我的全天候结对工程师。公开声明不仅是对新生产力工具的拥抱，更证明了新一代超级个体能够更高效，快速，独立落地高质量复杂产品。'
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
};
