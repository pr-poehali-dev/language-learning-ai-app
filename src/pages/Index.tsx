import { useState } from "react";
import Icon from "@/components/ui/icon";

type LucideIconName = string;

type Section = "home" | "lessons" | "dialog" | "tests" | "progress" | "vocabulary" | "profile";

const NAV_ITEMS = [
  { id: "lessons", label: "Уроки", icon: "BookOpen", color: "var(--neon-purple)" },
  { id: "dialog", label: "Диалоги", icon: "MessageCircle", color: "var(--neon-cyan)" },
  { id: "tests", label: "Тесты", icon: "ClipboardList", color: "var(--neon-yellow)" },
  { id: "progress", label: "Прогресс", icon: "TrendingUp", color: "var(--neon-pink)" },
  { id: "vocabulary", label: "Словарь", icon: "BookMarked", color: "var(--neon-blue)" },
  { id: "profile", label: "Профиль", icon: "User", color: "#a8edea" },
];

const LESSONS = [
  { title: "Времена глаголов", level: "A2", topic: "Грамматика", xp: 50, duration: "15 мин", color: "#9b5de5", done: true },
  { title: "Числа и даты", level: "A1", topic: "Словарь", xp: 30, duration: "10 мин", color: "#00f5d4", done: true },
  { title: "Условные предложения", level: "B1", topic: "Грамматика", xp: 70, duration: "20 мин", color: "#f72585", done: false },
  { title: "Деловая лексика", level: "B2", topic: "Словарь", xp: 80, duration: "25 мин", color: "#fee440", done: false },
  { title: "Артикли", level: "A1", topic: "Грамматика", xp: 40, duration: "12 мин", color: "#4361ee", done: false },
  { title: "Описание внешности", level: "A2", topic: "Словарь", xp: 45, duration: "15 мин", color: "#9b5de5", done: false },
];

const VOCAB_WORDS = [
  { word: "Ephemeral", translation: "Мимолётный", transcription: "/ɪˈfem.ər.əl/", category: "Adj", mastery: 85 },
  { word: "Serendipity", translation: "Счастливая случайность", transcription: "/ˌser.ənˈdɪp.ɪ.ti/", category: "Noun", mastery: 60 },
  { word: "Melancholy", translation: "Меланхолия", transcription: "/ˈmel.ən.kɒl.i/", category: "Noun", mastery: 45 },
  { word: "Persevere", translation: "Настойчиво добиваться", transcription: "/ˌpɜː.sɪˈvɪər/", category: "Verb", mastery: 90 },
  { word: "Ambiguous", translation: "Неоднозначный", transcription: "/æmˈbɪɡ.ju.əs/", category: "Adj", mastery: 30 },
];

const ACHIEVEMENTS = [
  { title: "Первый урок", icon: "⭐", color: "#fee440", earned: true },
  { title: "7 дней подряд", icon: "🔥", color: "#f72585", earned: true },
  { title: "100 слов", icon: "📚", color: "#9b5de5", earned: true },
  { title: "Разговорник", icon: "💬", color: "#00f5d4", earned: false },
  { title: "Перфекционист", icon: "💎", color: "#4361ee", earned: false },
  { title: "Месяц подряд", icon: "🏆", color: "#fee440", earned: false },
];

const INITIAL_MESSAGES = [
  { role: "ai", text: "Привет! Сегодня потренируем разговорный английский. Расскажи о своём дне — что ты делал?" },
  { role: "user", text: "I woke up early and went to gym." },
  { role: "ai", text: "Отлично! Небольшое замечание: лучше сказать 'went to the gym' — с определённым артиклем. Продолжай!" },
];

const TEST_QUESTION = {
  question: "Выберите правильную форму глагола:",
  sentence: "She ___ to the store yesterday.",
  options: ["go", "went", "goes", "going"],
  correct: 1,
};

export default function Index() {
  const [activeSection, setActiveSection] = useState<Section>("home");
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [inputMessage, setInputMessage] = useState("");
  const [chatMessages, setChatMessages] = useState(INITIAL_MESSAGES);
  const [isRecording, setIsRecording] = useState(false);

  const sendMessage = () => {
    if (!inputMessage.trim()) return;
    setChatMessages(prev => [...prev, { role: "user", text: inputMessage }]);
    setInputMessage("");
  };

  const renderHome = () => (
    <div className="space-y-8 pb-8">
      {/* Hero */}
      <div className="relative overflow-hidden rounded-3xl p-8 noise" style={{
        background: "linear-gradient(135deg, rgba(155,93,229,0.25) 0%, rgba(0,245,212,0.15) 50%, rgba(247,37,133,0.2) 100%)",
        border: "1px solid rgba(155,93,229,0.3)"
      }}>
        <div className="absolute top-4 right-4 w-32 h-32 rounded-full animate-float-slow opacity-20"
          style={{ background: "radial-gradient(circle, var(--neon-cyan), transparent)" }} />
        <div className="absolute bottom-4 left-8 w-20 h-20 rounded-full animate-float opacity-15"
          style={{ background: "radial-gradient(circle, var(--neon-pink), transparent)" }} />
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-2 h-2 rounded-full animate-pulse-glow" style={{ background: "var(--neon-cyan)" }} />
            <span className="text-xs font-medium uppercase tracking-widest" style={{ color: "var(--neon-cyan)" }}>ИИ-ассистент активен</span>
          </div>
          <h1 className="font-unbounded text-3xl font-black mb-2 leading-tight">
            <span className="gradient-text">Доброе утро,</span>
            <br />
            <span className="text-white">Алексей! 👋</span>
          </h1>
          <p className="text-muted-foreground text-sm mb-6">Продолжай учить английский — ты на 73% к цели</p>
          <div className="flex items-center gap-4 mb-5">
            <div className="flex-1 h-2 rounded-full bg-white/10 overflow-hidden">
              <div className="h-full rounded-full animate-gradient" style={{
                width: "73%",
                background: "linear-gradient(90deg, var(--neon-purple), var(--neon-cyan))",
              }} />
            </div>
            <span className="text-sm font-bold gradient-text">73%</span>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => setActiveSection("lessons")}
              className="btn-glow px-5 py-2.5 rounded-xl font-semibold text-sm text-white flex items-center gap-2"
              style={{ background: "linear-gradient(135deg, var(--neon-purple), #7b2ff7)" }}>
              <Icon name="Zap" size={16} />
              Продолжить
            </button>
            <button
              onClick={() => setActiveSection("dialog")}
              className="btn-glow-cyan px-5 py-2.5 rounded-xl font-semibold text-sm flex items-center gap-2"
              style={{ background: "linear-gradient(135deg, rgba(0,245,212,0.2), rgba(0,245,212,0.1))", color: "var(--neon-cyan)", border: "1px solid rgba(0,245,212,0.4)" }}>
              <Icon name="Mic" size={16} />
              Говорить
            </button>
          </div>
        </div>
      </div>

      {/* Статистика */}
      <div>
        <h2 className="font-unbounded text-sm font-bold mb-4 uppercase tracking-wider text-muted-foreground">Сегодня</h2>
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "Очки", value: "340 XP", icon: "⚡", color: "var(--neon-yellow)" },
            { label: "Серия", value: "7 дней", icon: "🔥", color: "var(--neon-pink)" },
            { label: "Слов", value: "24", icon: "💡", color: "var(--neon-cyan)" },
          ].map((stat, i) => (
            <div key={i} className="glass-card rounded-2xl p-4 text-center hover-card-lift cursor-pointer">
              <div className="text-2xl mb-1">{stat.icon}</div>
              <div className="font-unbounded text-lg font-black" style={{ color: stat.color }}>{stat.value}</div>
              <div className="text-xs text-muted-foreground mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Быстрые разделы */}
      <div>
        <h2 className="font-unbounded text-sm font-bold mb-4 uppercase tracking-wider text-muted-foreground">Разделы</h2>
        <div className="grid grid-cols-2 gap-3">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id as Section)}
              className="glass-card rounded-2xl p-4 text-left hover-card-lift flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: `${item.color}22`, border: `1px solid ${item.color}44` }}>
                <Icon name={item.icon as LucideIconName} size={20} style={{ color: item.color }} />
              </div>
              <span className="font-semibold text-sm text-white">{item.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Рекомендованный урок */}
      <div>
        <h2 className="font-unbounded text-sm font-bold mb-4 uppercase tracking-wider text-muted-foreground">Рекомендуем</h2>
        <div className="rounded-2xl p-5 hover-card-lift cursor-pointer" onClick={() => setActiveSection("lessons")}
          style={{ background: "linear-gradient(135deg, rgba(247,37,133,0.15), rgba(155,93,229,0.15))", border: "1px solid rgba(247,37,133,0.25)" }}>
          <div className="flex items-start justify-between mb-3">
            <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ background: "rgba(247,37,133,0.2)", color: "var(--neon-pink)" }}>B1 · Грамматика</span>
            <span className="text-xs text-muted-foreground">20 мин</span>
          </div>
          <h3 className="font-unbounded text-lg font-bold text-white mb-1">Условные предложения</h3>
          <p className="text-sm text-muted-foreground mb-4">If I had studied more, I would have passed...</p>
          <div className="flex items-center justify-between">
            <span className="text-sm font-bold" style={{ color: "var(--neon-yellow)" }}>+70 XP</span>
            <div className="flex items-center gap-1 text-sm" style={{ color: "var(--neon-pink)" }}>
              Начать <Icon name="ArrowRight" size={16} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderLessons = () => (
    <div className="space-y-6 pb-8">
      <div>
        <h2 className="font-unbounded text-xl font-black text-white mb-1">Уроки</h2>
        <p className="text-muted-foreground text-sm">Грамматика и словарный запас с ИИ</p>
      </div>
      <div className="flex gap-2 overflow-x-auto pb-1">
        {["Все", "Грамматика", "Словарь", "A1", "A2", "B1", "B2"].map((f, i) => (
          <button key={i} className={`flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-all ${i === 0 ? "text-white" : "text-muted-foreground"}`}
            style={i === 0 ? { background: "linear-gradient(135deg, var(--neon-purple), #7b2ff7)" } : { background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
            {f}
          </button>
        ))}
      </div>
      <div className="space-y-3">
        {LESSONS.map((lesson, i) => (
          <div key={i} className={`glass-card rounded-2xl p-4 hover-card-lift cursor-pointer ${lesson.done ? "opacity-60" : ""}`}>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 font-unbounded font-black text-sm"
                style={{ background: `${lesson.color}22`, color: lesson.color, border: `1px solid ${lesson.color}44` }}>
                {lesson.level}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <h3 className="font-semibold text-white text-sm">{lesson.title}</h3>
                  {lesson.done && <Icon name="CheckCircle2" size={14} style={{ color: "var(--neon-cyan)", flexShrink: 0 }} />}
                </div>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span>{lesson.topic}</span>
                  <span>·</span>
                  <span>{lesson.duration}</span>
                  <span>·</span>
                  <span style={{ color: "var(--neon-yellow)" }}>+{lesson.xp} XP</span>
                </div>
              </div>
              <Icon name={lesson.done ? "RotateCcw" : "Play"} size={18} style={{ color: lesson.done ? "hsl(var(--muted-foreground))" : lesson.color, flexShrink: 0 }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderDialog = () => (
    <div className="flex flex-col pb-4" style={{ height: "calc(100dvh - 160px)" }}>
      <div className="mb-4">
        <h2 className="font-unbounded text-xl font-black text-white mb-1">Диалог с ИИ</h2>
        <p className="text-muted-foreground text-sm">Практикуй разговорный язык</p>
      </div>
      <div className="flex items-center gap-3 p-4 rounded-2xl mb-4"
        style={{ background: "rgba(0,245,212,0.08)", border: "1px solid rgba(0,245,212,0.2)" }}>
        <div className="relative w-12 h-12 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
          style={{ background: "linear-gradient(135deg, rgba(0,245,212,0.3), rgba(155,93,229,0.3))" }}>
          🤖
          <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full animate-pulse" style={{ background: "var(--neon-cyan)" }} />
        </div>
        <div>
          <div className="font-semibold text-white text-sm">Nova AI</div>
          <div className="text-xs" style={{ color: "var(--neon-cyan)" }}>Онлайн · Английский B1</div>
        </div>
        <div className="ml-auto flex items-center gap-0.5 h-6">
          {[1, 2, 3, 4, 5].map((_, i) => (
            <div key={i} className="w-1 rounded-full animate-wave"
              style={{ background: "var(--neon-cyan)", height: `${[40, 70, 100, 60, 45][i]}%`, animationDelay: `${i * 0.15}s` }} />
          ))}
        </div>
      </div>
      <div className="flex-1 overflow-y-auto space-y-3 mb-4 pr-1">
        {chatMessages.map((msg, i) => (
          <div key={i} className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
            {msg.role === "ai" && (
              <div className="w-8 h-8 rounded-xl flex items-center justify-center text-base flex-shrink-0"
                style={{ background: "rgba(0,245,212,0.15)" }}>🤖</div>
            )}
            <div className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm text-white ${msg.role === "user" ? "rounded-tr-sm" : "rounded-tl-sm"}`}
              style={msg.role === "user"
                ? { background: "linear-gradient(135deg, var(--neon-purple), #7b2ff7)" }
                : { background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
              {msg.text}
            </div>
          </div>
        ))}
      </div>
      <div className="space-y-2">
        <button
          onClick={() => setIsRecording(!isRecording)}
          className={`w-full flex items-center justify-center gap-2 py-3 rounded-2xl font-semibold text-sm transition-all ${isRecording ? "animate-pulse-glow" : ""}`}
          style={isRecording
            ? { background: "rgba(247,37,133,0.2)", border: "2px solid var(--neon-pink)", color: "var(--neon-pink)" }
            : { background: "rgba(0,245,212,0.1)", border: "1px solid rgba(0,245,212,0.3)", color: "var(--neon-cyan)" }}>
          <Icon name={isRecording ? "MicOff" : "Mic"} size={18} />
          {isRecording ? "Остановить запись" : "Говорить по-английски"}
        </button>
        <div className="flex gap-2">
          <input
            value={inputMessage}
            onChange={e => setInputMessage(e.target.value)}
            onKeyDown={e => e.key === "Enter" && sendMessage()}
            placeholder="Напиши по-английски..."
            className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-sm text-white placeholder:text-muted-foreground outline-none focus:border-purple-500/50 transition-colors"
          />
          <button onClick={sendMessage}
            className="w-12 h-12 rounded-2xl flex items-center justify-center btn-glow flex-shrink-0"
            style={{ background: "linear-gradient(135deg, var(--neon-purple), #7b2ff7)" }}>
            <Icon name="Send" size={18} color="white" />
          </button>
        </div>
      </div>
    </div>
  );

  const renderTests = () => (
    <div className="space-y-6 pb-8">
      <div>
        <h2 className="font-unbounded text-xl font-black text-white mb-1">Тесты</h2>
        <p className="text-muted-foreground text-sm">Проверь свои знания</p>
      </div>
      <div className="rounded-3xl p-6 space-y-5"
        style={{ background: "linear-gradient(135deg, rgba(67,97,238,0.2), rgba(155,93,229,0.2))", border: "1px solid rgba(67,97,238,0.3)" }}>
        <div className="flex items-center justify-between">
          <span className="text-xs px-3 py-1 rounded-full font-medium" style={{ background: "rgba(67,97,238,0.3)", color: "#a8b4ff" }}>Вопрос 1 из 10</span>
          <div className="flex items-center gap-1.5 text-xs" style={{ color: "var(--neon-yellow)" }}>
            <Icon name="Timer" size={14} />
            <span>01:23</span>
          </div>
        </div>
        <div className="h-1.5 rounded-full bg-white/10">
          <div className="h-full rounded-full" style={{ width: "10%", background: "linear-gradient(90deg, var(--neon-blue), var(--neon-purple))" }} />
        </div>
        <div>
          <p className="text-muted-foreground text-sm mb-2">{TEST_QUESTION.question}</p>
          <p className="font-unbounded text-lg font-bold text-white">"{TEST_QUESTION.sentence}"</p>
        </div>
        <div className="space-y-2">
          {TEST_QUESTION.options.map((opt, i) => (
            <button key={i} onClick={() => setSelectedAnswer(i)}
              className="w-full text-left px-4 py-3.5 rounded-xl font-medium text-sm text-white transition-all"
              style={selectedAnswer === i
                ? i === TEST_QUESTION.correct
                  ? { background: "rgba(0,245,212,0.2)", border: "2px solid var(--neon-cyan)" }
                  : { background: "rgba(247,37,133,0.2)", border: "2px solid var(--neon-pink)" }
                : { background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
              <span className="font-unbounded mr-3 opacity-50">{["A", "B", "C", "D"][i]}</span>
              {opt}
              {selectedAnswer !== null && i === TEST_QUESTION.correct && (
                <Icon name="Check" size={14} className="inline ml-2" style={{ color: "var(--neon-cyan)" }} />
              )}
            </button>
          ))}
        </div>
        {selectedAnswer !== null && (
          <div className="p-4 rounded-xl text-sm"
            style={selectedAnswer === TEST_QUESTION.correct
              ? { background: "rgba(0,245,212,0.1)", border: "1px solid rgba(0,245,212,0.3)", color: "var(--neon-cyan)" }
              : { background: "rgba(247,37,133,0.1)", border: "1px solid rgba(247,37,133,0.3)", color: "var(--neon-pink)" }}>
            {selectedAnswer === TEST_QUESTION.correct
              ? "✅ Правильно! 'Went' — прошедшее время глагола go."
              : "❌ Неверно. Правильный ответ: 'went'. Это прошедшее время от go."}
          </div>
        )}
        <button className="w-full py-3 rounded-xl font-semibold text-sm text-white btn-glow"
          style={{ background: "linear-gradient(135deg, var(--neon-blue), var(--neon-purple))" }}>
          {selectedAnswer !== null ? "Следующий вопрос" : "Пропустить"}
        </button>
      </div>

      <div>
        <h3 className="font-unbounded text-sm font-bold mb-3 uppercase tracking-wider text-muted-foreground">Доступные тесты</h3>
        <div className="space-y-3">
          {[
            { title: "Времена глаголов", questions: 15, time: "10 мин", color: "var(--neon-purple)", score: 87 },
            { title: "Артикли и предлоги", questions: 20, time: "15 мин", color: "var(--neon-cyan)", score: null },
            { title: "Неправильные глаголы", questions: 30, time: "20 мин", color: "var(--neon-yellow)", score: null },
          ].map((test, i) => (
            <div key={i} className="glass-card rounded-2xl p-4 flex items-center gap-4 hover-card-lift cursor-pointer">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(155,93,229,0.15)", border: "1px solid rgba(155,93,229,0.3)" }}>
                <Icon name="ClipboardList" size={20} style={{ color: test.color }} />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-white text-sm">{test.title}</h4>
                <div className="text-xs text-muted-foreground mt-0.5">{test.questions} вопросов · {test.time}</div>
              </div>
              {test.score ? (
                <div className="text-right">
                  <div className="font-unbounded font-black text-lg" style={{ color: "var(--neon-cyan)" }}>{test.score}%</div>
                  <div className="text-xs text-muted-foreground">пройдено</div>
                </div>
              ) : (
                <Icon name="ChevronRight" size={18} className="text-muted-foreground" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderProgress = () => (
    <div className="space-y-6 pb-8">
      <div>
        <h2 className="font-unbounded text-xl font-black text-white mb-1">Прогресс</h2>
        <p className="text-muted-foreground text-sm">Твоя статистика и достижения</p>
      </div>
      <div className="rounded-3xl p-6 text-center relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, rgba(155,93,229,0.2), rgba(0,245,212,0.15))", border: "1px solid rgba(155,93,229,0.3)" }}>
        <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
          <div className="w-48 h-48 rounded-full animate-spin-slow"
            style={{ border: "2px solid var(--neon-purple)", borderTopColor: "transparent" }} />
        </div>
        <div className="relative z-10">
          <div className="font-unbounded text-6xl font-black gradient-text mb-1">B1</div>
          <div className="text-white font-semibold mb-1">Средний уровень</div>
          <div className="text-muted-foreground text-sm mb-4">1240 из 2000 XP до B2</div>
          <div className="h-2 rounded-full bg-white/10 mx-8">
            <div className="h-full rounded-full" style={{ width: "62%", background: "linear-gradient(90deg, var(--neon-purple), var(--neon-cyan))" }} />
          </div>
        </div>
      </div>

      <div className="glass-card rounded-2xl p-5">
        <h3 className="font-unbounded text-sm font-bold mb-4 uppercase tracking-wider text-muted-foreground">Активность за 7 дней</h3>
        <div className="flex items-end gap-2 h-20">
          {[45, 80, 60, 100, 55, 90, 70].map((h, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1">
              <div className="w-full rounded-t-lg transition-all duration-300 hover:opacity-80"
                style={{ height: `${h}%`, background: h > 80 ? "linear-gradient(to top, var(--neon-purple), var(--neon-cyan))" : "rgba(155,93,229,0.4)" }} />
              <span className="text-xs text-muted-foreground">
                {["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"][i]}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {[
          { label: "Всего уроков", value: "47", icon: "BookOpen", color: "var(--neon-purple)" },
          { label: "Дней подряд", value: "7", icon: "Flame", color: "var(--neon-pink)" },
          { label: "Слов выучено", value: "312", icon: "Brain", color: "var(--neon-cyan)" },
          { label: "Тестов сдано", value: "19", icon: "Trophy", color: "var(--neon-yellow)" },
        ].map((s, i) => (
          <div key={i} className="glass-card rounded-2xl p-4 hover-card-lift">
            <div className="w-8 h-8 rounded-xl flex items-center justify-center mb-2"
              style={{ background: `${s.color}22` }}>
              <Icon name={s.icon as LucideIconName} size={16} style={{ color: s.color }} />
            </div>
            <div className="font-unbounded text-2xl font-black text-white">{s.value}</div>
            <div className="text-xs text-muted-foreground mt-0.5">{s.label}</div>
          </div>
        ))}
      </div>

      <div>
        <h3 className="font-unbounded text-sm font-bold mb-3 uppercase tracking-wider text-muted-foreground">Достижения</h3>
        <div className="grid grid-cols-3 gap-3">
          {ACHIEVEMENTS.map((a, i) => (
            <div key={i} className={`rounded-2xl p-4 text-center ${a.earned ? "hover-card-lift cursor-pointer" : "opacity-40"}`}
              style={{ background: a.earned ? `${a.color}18` : "rgba(255,255,255,0.04)", border: `1px solid ${a.earned ? a.color + "44" : "rgba(255,255,255,0.08)"}` }}>
              <div className="text-2xl mb-1">{a.icon}</div>
              <div className="text-xs font-medium" style={{ color: a.earned ? a.color : "hsl(var(--muted-foreground))" }}>{a.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderVocabulary = () => (
    <div className="space-y-6 pb-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-unbounded text-xl font-black text-white mb-1">Мой словарь</h2>
          <p className="text-muted-foreground text-sm">312 сохранённых слов</p>
        </div>
        <button className="w-10 h-10 rounded-xl flex items-center justify-center btn-glow"
          style={{ background: "linear-gradient(135deg, var(--neon-purple), #7b2ff7)" }}>
          <Icon name="Plus" size={18} color="white" />
        </button>
      </div>
      <div className="relative">
        <Icon name="Search" size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
        <input placeholder="Найти слово..."
          className="w-full bg-white/5 border border-white/10 rounded-2xl pl-11 pr-4 py-3 text-sm text-white placeholder:text-muted-foreground outline-none focus:border-purple-500/50 transition-colors" />
      </div>
      <div className="flex gap-2 overflow-x-auto pb-1">
        {["Все", "Глаголы", "Существительные", "Прилагательные"].map((c, i) => (
          <button key={i} className={`flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-all ${i === 0 ? "text-white" : "text-muted-foreground"}`}
            style={i === 0 ? { background: "linear-gradient(135deg, var(--neon-purple), #7b2ff7)" } : { background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
            {c}
          </button>
        ))}
      </div>
      <div className="space-y-3">
        {VOCAB_WORDS.map((word, i) => (
          <div key={i} className="glass-card rounded-2xl p-4 hover-card-lift cursor-pointer">
            <div className="flex items-start justify-between mb-2">
              <div>
                <div className="flex items-center gap-2 mb-0.5">
                  <h3 className="font-unbounded font-bold text-white">{word.word}</h3>
                  <span className="text-xs px-2 py-0.5 rounded-full"
                    style={{ background: "rgba(155,93,229,0.2)", color: "var(--neon-purple)" }}>{word.category}</span>
                </div>
                <div className="text-xs text-muted-foreground">{word.transcription}</div>
              </div>
              <button className="text-muted-foreground hover:text-yellow-400 transition-colors">
                <Icon name="Volume2" size={16} />
              </button>
            </div>
            <div className="text-sm text-white/80 mb-3">{word.translation}</div>
            <div className="flex items-center gap-3">
              <div className="flex-1 h-1.5 rounded-full bg-white/10">
                <div className="h-full rounded-full transition-all"
                  style={{
                    width: `${word.mastery}%`,
                    background: word.mastery >= 80 ? "linear-gradient(90deg, var(--neon-cyan), #00c9a7)"
                      : word.mastery >= 50 ? "linear-gradient(90deg, var(--neon-purple), #7b2ff7)"
                        : "linear-gradient(90deg, var(--neon-pink), #c9184a)"
                  }} />
              </div>
              <span className="text-xs text-muted-foreground">{word.mastery}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderProfile = () => (
    <div className="space-y-6 pb-8">
      <div className="rounded-3xl p-6 text-center relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, rgba(67,97,238,0.2), rgba(155,93,229,0.2))", border: "1px solid rgba(67,97,238,0.3)" }}>
        <div className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl"
          style={{ background: "linear-gradient(90deg, var(--neon-blue), var(--neon-purple), var(--neon-pink))" }} />
        <div className="relative w-20 h-20 mx-auto mb-3">
          <div className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl"
            style={{ background: "linear-gradient(135deg, rgba(155,93,229,0.4), rgba(67,97,238,0.4))", border: "2px solid rgba(155,93,229,0.5)" }}>
            👤
          </div>
          <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-lg flex items-center justify-center"
            style={{ background: "var(--neon-cyan)" }}>
            <Icon name="Edit3" size={12} color="#000" />
          </div>
        </div>
        <h2 className="font-unbounded text-xl font-black text-white">Алексей Петров</h2>
        <p className="text-muted-foreground text-sm mb-3">alexey@example.com</p>
        <div className="flex justify-center gap-4">
          <div className="text-center">
            <div className="font-unbounded font-black text-lg gradient-text">B1</div>
            <div className="text-xs text-muted-foreground">Уровень</div>
          </div>
          <div className="w-px bg-white/10" />
          <div className="text-center">
            <div className="font-unbounded font-black text-lg" style={{ color: "var(--neon-yellow)" }}>1240</div>
            <div className="text-xs text-muted-foreground">XP</div>
          </div>
          <div className="w-px bg-white/10" />
          <div className="text-center">
            <div className="font-unbounded font-black text-lg" style={{ color: "var(--neon-pink)" }}>7</div>
            <div className="text-xs text-muted-foreground">Серия</div>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="font-unbounded text-sm font-bold mb-3 uppercase tracking-wider text-muted-foreground">Настройки</h3>
        {[
          { icon: "Globe", label: "Изучаемый язык", value: "Английский 🇬🇧", color: "var(--neon-cyan)" },
          { icon: "Target", label: "Цель в день", value: "30 мин", color: "var(--neon-purple)" },
          { icon: "Bell", label: "Уведомления", value: "Включены", color: "var(--neon-yellow)" },
          { icon: "Mic", label: "Распознавание речи", value: "Активно", color: "var(--neon-pink)" },
          { icon: "Shield", label: "Приватность", value: "Данные защищены", color: "var(--neon-blue)" },
        ].map((s, i) => (
          <button key={i} className="w-full glass-card rounded-2xl p-4 flex items-center gap-4 hover-card-lift text-left">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: `${s.color}18`, border: `1px solid ${s.color}33` }}>
              <Icon name={s.icon as LucideIconName} size={18} style={{ color: s.color }} />
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium text-white">{s.label}</div>
              <div className="text-xs text-muted-foreground">{s.value}</div>
            </div>
            <Icon name="ChevronRight" size={16} className="text-muted-foreground" />
          </button>
        ))}
      </div>

      <button className="w-full py-3 rounded-2xl font-semibold text-sm transition-all hover:opacity-80"
        style={{ background: "rgba(247,37,133,0.1)", border: "1px solid rgba(247,37,133,0.3)", color: "var(--neon-pink)" }}>
        Выйти из аккаунта
      </button>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case "home": return renderHome();
      case "lessons": return renderLessons();
      case "dialog": return renderDialog();
      case "tests": return renderTests();
      case "progress": return renderProgress();
      case "vocabulary": return renderVocabulary();
      case "profile": return renderProfile();
      default: return renderHome();
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      {/* Фоновые блобы */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-96 h-96 rounded-full blur-3xl opacity-20 animate-float-slow"
          style={{ background: "radial-gradient(circle, var(--neon-purple), transparent)" }} />
        <div className="absolute bottom-[-10%] right-[-5%] w-80 h-80 rounded-full blur-3xl opacity-15 animate-float"
          style={{ background: "radial-gradient(circle, var(--neon-pink), transparent)" }} />
        <div className="absolute top-[40%] right-[10%] w-64 h-64 rounded-full blur-3xl opacity-10"
          style={{ background: "radial-gradient(circle, var(--neon-cyan), transparent)" }} />
      </div>

      {/* Контейнер */}
      <div className="relative w-full max-w-sm mx-auto px-4" style={{ minHeight: "100dvh" }}>
        {/* Хедер */}
        <div className="sticky top-0 z-20 pb-3 pt-4 bg-background/80 backdrop-blur-xl">
          <div className="glass-card rounded-2xl px-4 py-3 flex items-center justify-between">
            <button onClick={() => setActiveSection("home")} className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl flex items-center justify-center text-base"
                style={{ background: "linear-gradient(135deg, var(--neon-purple), #7b2ff7)" }}>
                🌍
              </div>
              <span className="font-unbounded font-black text-sm gradient-text">LinguaAI</span>
            </button>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl"
                style={{ background: "rgba(254,228,64,0.12)", border: "1px solid rgba(254,228,64,0.25)" }}>
                <span className="text-sm">⚡</span>
                <span className="font-unbounded font-black text-sm" style={{ color: "var(--neon-yellow)" }}>340</span>
              </div>
              <div className="flex items-center gap-1 px-3 py-1.5 rounded-xl"
                style={{ background: "rgba(247,37,133,0.12)", border: "1px solid rgba(247,37,133,0.25)" }}>
                <span className="text-sm">🔥</span>
                <span className="font-unbounded font-black text-sm" style={{ color: "var(--neon-pink)" }}>7</span>
              </div>
            </div>
          </div>
        </div>

        {/* Контент */}
        <div className="animate-fade-in">
          {renderContent()}
        </div>

        {/* Нижняя навигация */}
        <div className="sticky bottom-4 z-20 mt-4 bg-background/60 backdrop-blur-xl rounded-2xl">
          <div className="glass-card rounded-2xl px-1 py-2 flex items-center justify-around">
            <button onClick={() => setActiveSection("home")}
              className={`flex flex-col items-center gap-0.5 px-2 py-2 rounded-xl transition-all ${activeSection === "home" ? "scale-105" : "opacity-40 hover:opacity-70"}`}
              style={activeSection === "home" ? { color: "var(--neon-cyan)" } : { color: "hsl(var(--muted-foreground))" }}>
              <Icon name="Home" size={19} />
              <span className="text-[9px] font-medium">Главная</span>
            </button>
            {NAV_ITEMS.map((item) => (
              <button key={item.id} onClick={() => setActiveSection(item.id as Section)}
                className={`flex flex-col items-center gap-0.5 px-2 py-2 rounded-xl transition-all ${activeSection === item.id ? "scale-105" : "opacity-40 hover:opacity-70"}`}
                style={activeSection === item.id ? { color: item.color } : { color: "hsl(var(--muted-foreground))" }}>
                <Icon name={item.icon as LucideIconName} size={19} />
                <span className="text-[9px] font-medium">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}