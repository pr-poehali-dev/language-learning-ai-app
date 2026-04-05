import Icon from "@/components/ui/icon";

const HOMEWORK = [
  {
    id: 1,
    title: "Составить 5 предложений",
    description: "Используй Past Simple: расскажи о том, что делал вчера",
    subject: "Грамматика",
    deadline: "Сегодня, 23:59",
    xp: 60,
    color: "#f72585",
    status: "pending",
    urgent: true,
  },
  {
    id: 2,
    title: "Выучить 10 новых слов",
    description: "Тема: Путешествия и транспорт. Добавь слова в словарь",
    subject: "Словарь",
    deadline: "Завтра, 12:00",
    xp: 40,
    color: "#9b5de5",
    status: "pending",
    urgent: false,
  },
  {
    id: 3,
    title: "Диалог про выходные",
    description: "Проведи 5-минутный разговор с Nova AI о своих планах",
    subject: "Разговорный",
    deadline: "Завтра, 23:59",
    xp: 80,
    color: "#00f5d4",
    status: "pending",
    urgent: false,
  },
  {
    id: 4,
    title: "Тест: Артикли",
    description: "Пройди тест на знание артиклей a / an / the. Минимум 80%",
    subject: "Грамматика",
    deadline: "Вчера",
    xp: 50,
    color: "#4361ee",
    status: "done",
    urgent: false,
  },
  {
    id: 5,
    title: "Произношение гласных",
    description: "Запиши и отправь аудио с произношением 10 слов на /æ/",
    subject: "Произношение",
    deadline: "Вчера",
    xp: 70,
    color: "#fee440",
    status: "done",
    urgent: false,
  },
];

const SUBJECT_COLORS: Record<string, string> = {
  "Грамматика": "var(--neon-purple)",
  "Словарь": "var(--neon-cyan)",
  "Разговорный": "var(--neon-pink)",
  "Произношение": "var(--neon-yellow)",
};

export function HomeworkView() {
  const pending = HOMEWORK.filter(h => h.status === "pending");
  const done = HOMEWORK.filter(h => h.status === "done");

  return (
    <div className="space-y-6 pb-8">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="font-unbounded text-xl font-black text-white mb-1">Домашние задания</h2>
          <p className="text-muted-foreground text-sm">Выполни задания и получи XP</p>
        </div>
        <div className="text-right">
          <div className="font-unbounded font-black text-lg" style={{ color: "var(--neon-pink)" }}>{pending.length}</div>
          <div className="text-xs text-muted-foreground">активных</div>
        </div>
      </div>

      {/* Прогресс-бар */}
      <div className="glass-card rounded-2xl p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-semibold text-white">Прогресс недели</span>
          <span className="text-sm font-bold" style={{ color: "var(--neon-cyan)" }}>
            {done.length}/{HOMEWORK.length}
          </span>
        </div>
        <div className="h-2 rounded-full bg-white/10 overflow-hidden">
          <div className="h-full rounded-full transition-all duration-500"
            style={{
              width: `${(done.length / HOMEWORK.length) * 100}%`,
              background: "linear-gradient(90deg, var(--neon-purple), var(--neon-cyan))"
            }} />
        </div>
        <div className="flex justify-between mt-2">
          <span className="text-xs text-muted-foreground">+{done.reduce((s, h) => s + h.xp, 0)} XP заработано</span>
          <span className="text-xs text-muted-foreground">+{pending.reduce((s, h) => s + h.xp, 0)} XP осталось</span>
        </div>
      </div>

      {/* Активные */}
      {pending.length > 0 && (
        <div>
          <h3 className="font-unbounded text-sm font-bold mb-3 uppercase tracking-wider text-muted-foreground">
            Активные
          </h3>
          <div className="space-y-3">
            {pending.map((hw) => (
              <div key={hw.id} className="glass-card rounded-2xl p-4 hover-card-lift cursor-pointer"
                style={hw.urgent ? { border: "1px solid rgba(247,37,133,0.35)" } : {}}>
                <div className="flex items-start gap-3">
                  <div className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: `${hw.color}18`, border: `1px solid ${hw.color}44` }}>
                    <Icon name="ClipboardCheck" size={20} style={{ color: hw.color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                      <h4 className="font-semibold text-white text-sm">{hw.title}</h4>
                      {hw.urgent && (
                        <span className="text-[9px] font-black px-1.5 py-0.5 rounded-full uppercase tracking-wide flex-shrink-0"
                          style={{ background: "rgba(247,37,133,0.2)", color: "var(--neon-pink)", border: "1px solid rgba(247,37,133,0.4)" }}>
                          Срочно
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground mb-2 leading-relaxed">{hw.description}</p>
                    <div className="flex items-center gap-3 text-xs">
                      <span className="px-2 py-0.5 rounded-full"
                        style={{ background: `${SUBJECT_COLORS[hw.subject] ?? "var(--neon-purple)"}18`, color: SUBJECT_COLORS[hw.subject] ?? "var(--neon-purple)" }}>
                        {hw.subject}
                      </span>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Icon name="Clock" size={11} />
                        <span>{hw.deadline}</span>
                      </div>
                      <span style={{ color: "var(--neon-yellow)" }}>+{hw.xp} XP</span>
                    </div>
                  </div>
                </div>
                <button className="w-full mt-3 py-2.5 rounded-xl font-semibold text-sm text-white transition-all hover:opacity-90"
                  style={{ background: `linear-gradient(135deg, ${hw.color}99, ${hw.color}66)`, border: `1px solid ${hw.color}66` }}>
                  Выполнить
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Выполненные */}
      {done.length > 0 && (
        <div>
          <h3 className="font-unbounded text-sm font-bold mb-3 uppercase tracking-wider text-muted-foreground">
            Выполненные
          </h3>
          <div className="space-y-3">
            {done.map((hw) => (
              <div key={hw.id} className="rounded-2xl p-4 opacity-60"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(0,245,212,0.1)", border: "1px solid rgba(0,245,212,0.25)" }}>
                    <Icon name="CheckCircle2" size={20} style={{ color: "var(--neon-cyan)" }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-white text-sm line-through">{hw.title}</h4>
                    <div className="flex items-center gap-2 mt-0.5 text-xs text-muted-foreground">
                      <span>{hw.subject}</span>
                      <span>·</span>
                      <span style={{ color: "var(--neon-cyan)" }}>+{hw.xp} XP получено</span>
                    </div>
                  </div>
                  <Icon name="Check" size={18} style={{ color: "var(--neon-cyan)", flexShrink: 0 }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
