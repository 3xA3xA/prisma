export interface Model {
  name: string;
  company: string;
  color: string;
  tag: string;
}

export interface Feature {
  icon: string;
  title: string;
  desc: string;
}

export interface ArenaItem {
  model: string;
  color: string;
  text: string;
}

export const MODELS: Model[] = [
  { name: 'GPT-4o',     company: 'OpenAI',     color: '#10a37f', tag: 'Лучший текст'    },
  { name: 'Claude 3.5', company: 'Anthropic',  color: '#d97706', tag: 'Анализ'          },
  { name: 'Gemini 2.0', company: 'Google',     color: '#4285f4', tag: 'Модальный' },
  { name: 'Llama 3.3',  company: 'Meta',       color: '#0866ff', tag: 'Open Source'     },
  { name: 'Grok-2',     company: 'xAI',        color: '#a3a3a3', tag: 'Реальное время'  },
  { name: 'Mistral',    company: 'Mistral AI', color: '#f43f5e', tag: 'Быстрый'         },
];

export const FEATURES: Feature[] = [
  {
    icon: '🧠',
    title: 'Все модели в одном месте',
    desc: 'GPT-4o, Claude, Gemini, Llama, Mistral и десятки других — без переключения вкладок.',
  },
  {
    icon: '⚡',
    title: 'Арена сравнения',
    desc: 'Один запрос — ответы от нескольких моделей одновременно. Оцени, кто лучше.',
  },
  {
    icon: '🔮',
    title: 'История и аналитика',
    desc: 'Все чаты сохраняются. Скорость, качество, стоимость каждой модели.',
  },
  {
    icon: '🎨',
    title: 'Настройка под себя',
    desc: 'Системные промпты, температура, контекст — под каждую задачу.',
  },
  {
    icon: '🔐',
    title: 'Свои API-ключи',
    desc: 'Используй собственные ключи или наш пул. Полная прозрачность.',
  },
  {
    icon: '🌐',
    title: 'Open Source & REST API',
    desc: 'Открытый код. REST API для интеграции в твои приложения.',
  },
];

export const ARENA_ITEMS: ArenaItem[] = [
  {
    model: 'GPT-4o',
    color: '#10a37f',
    text: 'Квантовые вычисления используют принципы суперпозиции и запутанности...',
  },
  {
    model: 'Claude',
    color: '#d97706',
    text: 'Давайте начнём с аналогии. Обычный бит — это переключатель...',
  },
];