export interface AiModel {
  id: string;
  name: string;
  company: string;
  color: string;
  category: string;
  tags: string[];
  desc: string;
  ctx: string;
  speed: string;
  price: string;
  rating: number;
}

export const CATEGORIES: string[] = [
  'Все',
  'Текст',
  'Код',
  'Мультимодальные',
  'Open Source',
];

export const AI_MODELS: AiModel[] = [
  {
    id: 'gpt4o', name: 'GPT-4o', company: 'OpenAI', color: '#10a37f',
    category: 'Мультимодальные', tags: ['Текст', 'Код', 'Изображения'],
    desc: 'Самая мощная модель OpenAI. Поддерживает текст, изображения и аудио. Идеальна для сложных задач.',
    ctx: '128k', speed: 'Средняя', price: '$5/M', rating: 9.4,
  },
  {
    id: 'claude35', name: 'Claude 3.5 Sonnet', company: 'Anthropic', color: '#d97706',
    category: 'Текст', tags: ['Текст', 'Анализ', 'Код'],
    desc: 'Лучший в своём классе для анализа документов, написания текстов и рассуждений. Безопасный по дизайну.',
    ctx: '200k', speed: 'Средняя', price: '$3/M', rating: 9.2,
  },
  {
    id: 'gemini20', name: 'Gemini 2.0 Flash', company: 'Google', color: '#4285f4',
    category: 'Мультимодальные', tags: ['Текст', 'Изображения', 'Видео'],
    desc: 'Быстрая мультимодальная модель от Google. Нативно понимает текст, изображения, аудио и видео.',
    ctx: '1M', speed: 'Быстрая', price: '$0.1/M', rating: 9.0,
  },
  {
    id: 'llama33', name: 'Llama 3.3 70B', company: 'Meta', color: '#0866ff',
    category: 'Open Source', tags: ['Open Source', 'Текст', 'Код'],
    desc: 'Флагманская open-source модель Meta. Бесплатна для использования, сопоставима с GPT-4.',
    ctx: '128k', speed: 'Быстрая', price: 'Бесплатно', rating: 8.8,
  },
  {
    id: 'grok2', name: 'Grok-2', company: 'xAI', color: '#a78bfa',
    category: 'Текст', tags: ['Текст', 'Реальное время'],
    desc: 'Модель Илона Маска с доступом к реальным данным X (Twitter). Честная и прямолинейная.',
    ctx: '128k', speed: 'Средняя', price: '$2/M', rating: 8.6,
  },
  {
    id: 'mistral', name: 'Mistral Large', company: 'Mistral AI', color: '#f43f5e',
    category: 'Код', tags: ['Код', 'Текст', 'Open Source'],
    desc: 'Эффективная европейская модель с отличным знанием кода и русского языка.',
    ctx: '32k', speed: 'Очень быстрая', price: '$2/M', rating: 8.5,
  },
  {
    id: 'deepseek', name: 'DeepSeek R1', company: 'DeepSeek', color: '#22d3ee',
    category: 'Код', tags: ['Код', 'Математика', 'Open Source'],
    desc: 'Лучшая модель для математики и кода. Рассуждающая (chain-of-thought) архитектура.',
    ctx: '64k', speed: 'Медленная', price: '$0.5/M', rating: 9.1,
  },
  {
    id: 'qwen', name: 'Qwen 2.5', company: 'Alibaba', color: '#f59e0b',
    category: 'Open Source', tags: ['Текст', 'Код', 'Open Source'],
    desc: 'Мощная открытая модель от Alibaba. Сильна в китайском и английском, хороший code generation.',
    ctx: '128k', speed: 'Быстрая', price: 'Бесплатно', rating: 8.3,
  },
];