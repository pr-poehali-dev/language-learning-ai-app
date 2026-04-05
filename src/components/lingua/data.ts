export type Section = "home" | "lessons" | "dialog" | "tests" | "progress" | "vocabulary" | "profile" | "homework" | "store";

export const NAV_ITEMS = [
  { id: "lessons", label: "Уроки", icon: "BookOpen", color: "var(--neon-purple)" },
  { id: "dialog", label: "Диалоги", icon: "MessageCircle", color: "var(--neon-cyan)" },
  { id: "homework", label: "Задания", icon: "ClipboardCheck", color: "var(--neon-pink)" },
  { id: "progress", label: "Прогресс", icon: "TrendingUp", color: "#a8edea" },
  { id: "profile", label: "Профиль", icon: "User", color: "var(--neon-purple)" },
];

export const EXTRA_NAV_ITEMS = [
  { id: "tests", label: "Тесты", icon: "ClipboardList", color: "var(--neon-yellow)" },
  { id: "vocabulary", label: "Словарь", icon: "BookMarked", color: "var(--neon-blue)" },
  { id: "store", label: "Магазин", icon: "Sparkles", color: "var(--neon-yellow)" },
];

export const LESSONS = [
  { title: "Времена глаголов", level: "A2", topic: "Грамматика", xp: 50, duration: "15 мин", color: "#9b5de5", done: true },
  { title: "Числа и даты", level: "A1", topic: "Словарь", xp: 30, duration: "10 мин", color: "#00f5d4", done: true },
  { title: "Условные предложения", level: "B1", topic: "Грамматика", xp: 70, duration: "20 мин", color: "#f72585", done: false },
  { title: "Деловая лексика", level: "B2", topic: "Словарь", xp: 80, duration: "25 мин", color: "#fee440", done: false },
  { title: "Артикли", level: "A1", topic: "Грамматика", xp: 40, duration: "12 мин", color: "#4361ee", done: false },
  { title: "Описание внешности", level: "A2", topic: "Словарь", xp: 45, duration: "15 мин", color: "#9b5de5", done: false },
];

export const VOCAB_WORDS = [
  { word: "Ephemeral", translation: "Мимолётный", transcription: "/ɪˈfem.ər.əl/", category: "Adj", mastery: 85 },
  { word: "Serendipity", translation: "Счастливая случайность", transcription: "/ˌser.ənˈdɪp.ɪ.ti/", category: "Noun", mastery: 60 },
  { word: "Melancholy", translation: "Меланхолия", transcription: "/ˈmel.ən.kɒl.i/", category: "Noun", mastery: 45 },
  { word: "Persevere", translation: "Настойчиво добиваться", transcription: "/ˌpɜː.sɪˈvɪər/", category: "Verb", mastery: 90 },
  { word: "Ambiguous", translation: "Неоднозначный", transcription: "/æmˈbɪɡ.ju.əs/", category: "Adj", mastery: 30 },
];

export const ACHIEVEMENTS = [
  { title: "Первый урок", icon: "⭐", color: "#fee440", earned: true },
  { title: "7 дней подряд", icon: "🔥", color: "#f72585", earned: true },
  { title: "100 слов", icon: "📚", color: "#9b5de5", earned: true },
  { title: "Разговорник", icon: "💬", color: "#00f5d4", earned: false },
  { title: "Перфекционист", icon: "💎", color: "#4361ee", earned: false },
  { title: "Месяц подряд", icon: "🏆", color: "#fee440", earned: false },
];

export const INITIAL_MESSAGES = [
  { role: "ai", text: "Привет! Сегодня потренируем разговорный английский. Расскажи о своём дне — что ты делал?" },
  { role: "user", text: "I woke up early and went to gym." },
  { role: "ai", text: "Отлично! Небольшое замечание: лучше сказать 'went to the gym' — с определённым артиклем. Продолжай!" },
];

export const TEST_QUESTION = {
  question: "Выберите правильную форму глагола:",
  sentence: "She ___ to the store yesterday.",
  options: ["go", "went", "goes", "going"],
  correct: 1,
};