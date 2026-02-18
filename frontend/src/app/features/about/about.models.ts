export interface TechItem {
  name: string;
  desc: string;
}

export interface TechCategory {
  category: string;
  color: string;
  icon: string;
  items: TechItem[];
}

export interface RoadmapItem {
  phase: string;
  title: string;
  status: 'current' | 'planned';
  desc: string;
  date: string;
}

export interface TeamMember {
  name: string;
  role: string;
  avatar: string;
  color: string;
}

export interface ProjectStat {
  label: string;
  value: string;
}

export interface ArchLayer {
  label: string;
  sub: string;
  desc: string;
  color: string;
  arrow: boolean;
}

export const TECH_STACK: TechCategory[] = [
  {
    category: 'Frontend', color: '#4285f4', icon: '🌐',
    items: [
      { name: 'Angular 20',       desc: 'SPA фреймворк со Standalone Components' },
      { name: 'TypeScript',       desc: 'Строгая типизация'                      },
      { name: 'SCSS / BEM',       desc: 'Методология стилей'                     },
      { name: 'RxJS',             desc: 'Реактивное программирование'            },
    ],
  },
  {
    category: 'Backend', color: '#7c3aed', icon: '⚙️',
    items: [
      { name: 'ASP.NET Core 8', desc: 'REST API + WebSockets' },
      { name: 'C# 12',          desc: 'Язык программирования' },
      { name: 'SignalR',        desc: 'Стриминг ответов AI'   },
      { name: 'Entity Framework', desc: 'ORM для работы с БД' },
    ],
  },
  {
    category: 'База данных', color: '#f43f5e', icon: '🗄️',
    items: [
      { name: 'MS SQL Server', desc: 'Основная СУБД'            },
      { name: 'Redis',         desc: 'Кэширование и сессии'     },
      { name: 'EF Migrations', desc: 'Версионирование схемы'    },
    ],
  },
  {
    category: 'AI / API', color: '#10a37f', icon: '🤖',
    items: [
      { name: 'OpenAI API',      desc: 'GPT-4o, GPT-4 Turbo'       },
      { name: 'Anthropic API',   desc: 'Claude 3.5 Sonnet'          },
      { name: 'Google AI',       desc: 'Gemini 2.0 Flash'           },
      { name: 'Groq / Together', desc: 'Llama, Mistral (быстро)'    },
    ],
  },
  {
    category: 'DevOps', color: '#22d3ee', icon: '🚀',
    items: [
      { name: 'Docker',          desc: 'Контейнеризация' },
      { name: 'GitHub Actions',  desc: 'CI/CD пайплайн'  },
      { name: 'Nginx',           desc: 'Reverse proxy'   },
    ],
  },
];

export const ROADMAP: RoadmapItem[] = [
  { phase: '1', title: 'MVP',               status: 'current', date: 'Февраль 2026', desc: 'Базовый чат с несколькими моделями, авторизация, история'              },
  { phase: '2', title: 'Арена',             status: 'planned', date: 'Март 2026',    desc: 'Сравнение моделей side-by-side, голосование, рейтинги'                 },
  { phase: '3', title: 'Аналитика',         status: 'planned', date: 'Апрель 2026',  desc: 'Статистика по моделям: скорость, качество, стоимость'                  },
  { phase: '4', title: 'API + Интеграции',  status: 'planned', date: 'Май 2026',     desc: 'REST API для разработчиков, Telegram Bot, VSCode плагин'               },
];

export const TEAM: TeamMember[] = [
  { name: 'Кирилл Кислицын',    role: 'Разработчик / Автор диплома', avatar: 'КК', color: '#7c3aed' },
  { name: 'Дмитрий Петров', role: 'Научный руководитель',        avatar: 'ДП', color: '#10a37f' },
];

export const PROJECT_STATS: ProjectStat[] = [
  { label: 'Поддерживаемых моделей', value: '15+' },
  { label: 'Эндпоинтов API',         value: '40+' },
  { label: 'Страниц диплома',        value: '80+' },
  { label: 'Строк кода',             value: '5000+' },
];

export const ARCH_LAYERS: ArchLayer[] = [
  {
    label: 'Angular SPA',       sub: 'Frontend',
    desc:  'Компоненты, сервисы, роутинг, WebSocket клиент',
    color: '#4285f4', arrow: true,
  },
  {
    label: 'ASP.NET Core API',  sub: 'Backend',
    desc:  'REST + SignalR хаб, бизнес-логика, AI-агрегатор',
    color: '#7c3aed', arrow: true,
  },
  {
    label: 'MS SQL + Redis',    sub: 'Data Layer',
    desc:  'Пользователи, чаты, модели, кэш сессий',
    color: '#f43f5e', arrow: false,
  },
];

export const REPO_TREE: { indent: number; color: string; text: string }[] = [
  { indent: 0, color: '#a78bfa', text: 'prisma/'                         },
  { indent: 1, color: '#fff',    text: '├── prisma-frontend/'            },
  { indent: 2, color: '#22d3ee', text: '├── src/app/'                   },
  { indent: 3, color: '#22d3ee', text: '├── features/'                  },
  { indent: 3, color: '#22d3ee', text: '└── shared/'                    },
  { indent: 1, color: '#fff',    text: '├── prisma-backend/'            },
  { indent: 2, color: '#a78bfa', text: '├── Prisma.API/'                },
  { indent: 2, color: '#a78bfa', text: '├── Prisma.Core/'               },
  { indent: 2, color: '#a78bfa', text: '└── Prisma.Infrastructure/'     },
  { indent: 1, color: '#fff',    text: '├── docs/'                      },
  { indent: 1, color: '#fff',    text: '├── docker-compose.yml'         },
  { indent: 1, color: '#fff',    text: '└── README.md'                  },
];