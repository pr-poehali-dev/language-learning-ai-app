import Icon from "@/components/ui/icon";
import { Section, NAV_ITEMS, EXTRA_NAV_ITEMS, LESSONS, VOCAB_WORDS, ACHIEVEMENTS } from "./data";

interface HomeProps {
  setActiveSection: (s: Section) => void;
}

export function HomeView({ setActiveSection }: HomeProps) {
  return (
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
          {[...NAV_ITEMS, ...EXTRA_NAV_ITEMS].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id as Section)}
              className="glass-card rounded-2xl p-4 text-left hover-card-lift flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: `${item.color}22`, border: `1px solid ${item.color}44` }}>
                <Icon name={item.icon} size={20} style={{ color: item.color }} />
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
}

export function LessonsView() {
  return (
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
}

export function ProgressView() {
  return (
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
              <Icon name={s.icon} size={16} style={{ color: s.color }} />
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
}

export function VocabularyView() {
  return (
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
}

export function ProfileView() {
  return (
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
              <Icon name={s.icon} size={18} style={{ color: s.color }} />
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
}