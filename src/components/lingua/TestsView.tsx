import { useState } from "react";
import Icon from "@/components/ui/icon";
import { TEST_QUESTION } from "./data";

export function TestsView() {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  return (
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
}
