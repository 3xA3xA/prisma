export interface Message {
  id: number;
  role: 'user' | 'ai';
  text: string;
  model?: string;
  time: string;
}

export interface ChatModel {
  id: string;
  name: string;
  company: string;
  color: string;
}

export interface ChatHistory {
  id: number;
  title: string;
  preview: string;
  time: string;
}

export const CHAT_MODELS: ChatModel[] = [
  { id: 'gpt4o',   name: 'GPT-4o',     company: 'OpenAI',     color: '#10a37f' },
  { id: 'claude',  name: 'Claude 3.5', company: 'Anthropic',  color: '#d97706' },
  { id: 'gemini',  name: 'Gemini 2.0', company: 'Google',     color: '#4285f4' },
  { id: 'llama',   name: 'Llama 3.3',  company: 'Meta',       color: '#0866ff' },
  { id: 'grok',    name: 'Grok-2',     company: 'xAI',        color: '#a78bfa' },
  { id: 'mistral', name: 'Mistral',    company: 'Mistral AI', color: '#f43f5e' },
];

export const CHAT_HISTORY: ChatHistory[] = [
  { id: 1, title: 'Объяснение квантовых вычислений', preview: 'Как работает суперпозиция?',    time: '10:34'  },
  { id: 2, title: 'Написание кода на C#',            preview: 'Нужен пример async/await...',   time: '09:12'  },
  { id: 3, title: 'Сравнение архитектур БД',         preview: 'PostgreSQL vs MSSQL',           time: 'Вчера'  },
  { id: 4, title: 'Помощь с дипломом',               preview: 'Как оформить введение?',        time: 'Вчера'  },
];

export const DEMO_MESSAGES: Message[] = [
  {
    id: 1,
    role: 'user',
    text: 'Привет! Объясни мне, как работает Transformer архитектура в нейросетях',
    time: '10:34',
  },
  {
    id: 2,
    role: 'ai',
    model: 'GPT-4o',
    time: '10:34',
    text: 'Отличный вопрос! Transformer — это революционная архитектура, предложенная в статье «Attention is All You Need» (2017).\n\nКлючевые компоненты:\n• Self-Attention — каждый токен «смотрит» на все остальные\n• Multi-Head Attention — несколько голов внимания параллельно\n• Feed-Forward layers — полносвязные слои после внимания\n• Positional Encoding — информация о позиции токена\n\nЭто позволяет модели улавливать дальние зависимости в тексте.',
  },
  {
    id: 3,
    role: 'user',
    text: 'А чем отличается encoder от decoder в этой архитектуре?',
    time: '10:36',
  },
];

export const AI_RESPONSES: string[] = [
  'Encoder обрабатывает входную последовательность и создаёт её представление (эмбеддинги), а Decoder генерирует выходную последовательность, используя это представление плюс уже сгенерированные токены.',
  'Encoder состоит из стеков Self-Attention + FFN и работает с полным контекстом входа. Decoder добавляет Cross-Attention — механизм, который позволяет смотреть на выход Encoder-а.',
  'В современных LLM (GPT, Llama) используется только Decoder. BERT, наоборот, использует только Encoder для задач понимания текста.',
];