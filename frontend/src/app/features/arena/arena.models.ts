export interface ArenaModel {
  id: string;
  name: string;
  company: string;
  color: string;
}

export interface ArenaResult {
  modelId: string;
  text: string;
  votes: number;
  liked: boolean | null;
}

export const ARENA_MODELS: ArenaModel[] = [
  { id: 'gpt4o',    name: 'GPT-4o',      company: 'OpenAI',    color: '#10a37f' },
  { id: 'claude35', name: 'Claude 3.5',  company: 'Anthropic', color: '#d97706' },
  { id: 'gemini20', name: 'Gemini 2.0',  company: 'Google',    color: '#4285f4' },
  { id: 'llama33',  name: 'Llama 3.3',   company: 'Meta',      color: '#0866ff' },
  { id: 'grok2',    name: 'Grok-2',      company: 'xAI',       color: '#a78bfa' },
  { id: 'deepseek', name: 'DeepSeek R1', company: 'DeepSeek',  color: '#22d3ee' },
];

export const DEMO_RESPONSES: Record<string, string> = {
  gpt4o: 'Трансформер — это архитектура нейронной сети, основанная на механизме внимания (attention). В отличие от RNN, она обрабатывает все токены параллельно, что даёт огромный прирост скорости обучения. Ключевой блок — Multi-Head Self-Attention, позволяющий каждому токену «смотреть» на все остальные токены в последовательности.',
  claude35: 'Transformer-архитектура решила главную проблему предшественников (RNN/LSTM) — последовательную обработку токенов. Теперь модель может обрабатывать весь контекст одновременно благодаря механизму self-attention. Представь, что каждое слово задаёт вопрос всем остальным: «насколько ты важен для понимания меня?»',
  gemini20: 'Архитектура Transformer была предложена в 2017 году в статье «Attention is All You Need». Она состоит из Encoder и Decoder блоков, каждый из которых содержит: (1) Multi-Head Attention, (2) Feed-Forward Network, (3) Layer Normalization и Residual Connections для стабильности.',
  llama33: 'Transformer — это sequence-to-sequence модель. Её мощь в механизме attention. Формула: Attention(Q,K,V) = softmax(QKᵀ/√d_k)V. Llama использует улучшения: RoPE embeddings, GQA (Grouped Query Attention), SwiGLU активации.',
  grok2: 'Честно говоря, Transformer — лучшее, что случилось с ИИ за последнее десятилетие. Суть проста: вместо того чтобы читать текст слово за словом, модель смотрит на всё сразу и вычисляет, что важно относительно друг друга.',
  deepseek: 'С точки зрения математики: Self-attention: Q=XW_Q, K=XW_K, V=XW_V. Выход = softmax(QKᵀ/√d)·V. Это операция «взвешенного суммирования». DeepSeek добавляет MLA (Multi-head Latent Attention) для сжатия KV-кэша.',
};

export const PROMPT_SUGGESTIONS: string[] = [
  'Объясни квантовые вычисления',
  'Напиши функцию на C#',
  'Лучшие практики REST API',
];