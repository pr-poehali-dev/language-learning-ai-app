import { useState } from "react";
import Icon from "@/components/ui/icon";

const XP_PACKS = [
  { id: "xp_small", amount: "500 XP", price: "59 ₽", icon: "⚡", color: "var(--neon-yellow)", popular: false },
  { id: "xp_medium", amount: "1500 XP", price: "149 ₽", icon: "⚡⚡", color: "var(--neon-yellow)", popular: true },
  { id: "xp_large", amount: "5000 XP", price: "399 ₽", icon: "⚡⚡⚡", color: "var(--neon-yellow)", popular: false },
];

export function StoreView() {
  const [activePlan, setActivePlan] = useState<"month" | "year">("year");
  const [bought, setBought] = useState<string | null>(null);

  return (
    <div className="space-y-6 pb-8">
      <div>
        <h2 className="font-unbounded text-xl font-black text-white mb-1">Магазин</h2>
        <p className="text-muted-foreground text-sm">Подписка и бонусы для быстрого прогресса</p>
      </div>

      {/* Premium-баннер */}
      <div className="relative overflow-hidden rounded-3xl p-6"
        style={{ background: "linear-gradient(135deg, rgba(155,93,229,0.35), rgba(67,97,238,0.35))", border: "1px solid rgba(155,93,229,0.4)" }}>
        <div className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl opacity-20 animate-float-slow"
          style={{ background: "radial-gradient(circle, var(--neon-cyan), transparent)" }} />
        <div className="absolute -bottom-4 -left-4 w-28 h-28 rounded-full blur-2xl opacity-15 animate-float"
          style={{ background: "radial-gradient(circle, var(--neon-pink), transparent)" }} />

        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-3">
            <div className="px-2 py-0.5 rounded-full text-xs font-black uppercase tracking-wider"
              style={{ background: "linear-gradient(135deg, var(--neon-yellow), #f59e0b)", color: "#000" }}>
              ✦ Premium
            </div>
          </div>
          <h3 className="font-unbounded text-2xl font-black text-white mb-1">Без ограничений</h3>
          <p className="text-sm mb-4" style={{ color: "rgba(255,255,255,0.7)" }}>
            Все уроки, безлимитные диалоги с ИИ, приоритетная проверка произношения
          </p>

          {/* Что входит */}
          <div className="space-y-2 mb-5">
            {[
              "Все уроки без ограничений",
              "Безлимитные диалоги с Nova AI",
              "Приоритетная проверка произношения",
              "Расширенная статистика прогресса",
              "Без рекламы",
            ].map((f, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-white/80">
                <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(0,245,212,0.25)" }}>
                  <Icon name="Check" size={10} style={{ color: "var(--neon-cyan)" }} />
                </div>
                {f}
              </div>
            ))}
          </div>

          {/* Переключатель план */}
          <div className="flex gap-1 p-1 rounded-xl mb-4" style={{ background: "rgba(0,0,0,0.2)" }}>
            <button onClick={() => setActivePlan("month")}
              className="flex-1 py-2 rounded-lg text-sm font-semibold transition-all"
              style={activePlan === "month"
                ? { background: "rgba(255,255,255,0.15)", color: "#fff" }
                : { color: "rgba(255,255,255,0.5)" }}>
              Месяц
            </button>
            <button onClick={() => setActivePlan("year")}
              className="flex-1 py-2 rounded-lg text-sm font-semibold transition-all relative"
              style={activePlan === "year"
                ? { background: "rgba(255,255,255,0.15)", color: "#fff" }
                : { color: "rgba(255,255,255,0.5)" }}>
              Год
              <span className="absolute -top-2 -right-1 text-[9px] font-black px-1 py-0.5 rounded-full"
                style={{ background: "var(--neon-pink)", color: "#fff" }}>-50%</span>
            </button>
          </div>

          <div className="flex items-end gap-2 mb-4">
            <span className="font-unbounded text-3xl font-black text-white">
              {activePlan === "month" ? "299 ₽" : "1 490 ₽"}
            </span>
            <span className="text-sm text-white/50 mb-1">
              {activePlan === "month" ? "/ месяц" : "/ год · 124 ₽/мес"}
            </span>
          </div>

          <button
            onClick={() => setBought("premium")}
            className="w-full py-3.5 rounded-2xl font-bold text-sm transition-all"
            style={bought === "premium"
              ? { background: "rgba(0,245,212,0.2)", border: "2px solid var(--neon-cyan)", color: "var(--neon-cyan)" }
              : { background: "linear-gradient(135deg, var(--neon-yellow), #f59e0b)", color: "#000", boxShadow: "0 0 30px rgba(254,228,64,0.4)" }}>
            {bought === "premium" ? "✓ Подключено" : "Получить Premium"}
          </button>
        </div>
      </div>

      {/* Пакеты XP */}
      <div>
        <h3 className="font-unbounded text-sm font-bold mb-3 uppercase tracking-wider text-muted-foreground">Пакеты XP</h3>
        <div className="space-y-3">
          {XP_PACKS.map((pack) => (
            <div key={pack.id} className="glass-card rounded-2xl p-4 flex items-center gap-4 relative overflow-hidden hover-card-lift"
              style={pack.popular ? { border: "1px solid rgba(254,228,64,0.4)" } : {}}>
              {pack.popular && (
                <div className="absolute top-2 right-2 text-[9px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider"
                  style={{ background: "rgba(254,228,64,0.2)", color: "var(--neon-yellow)", border: "1px solid rgba(254,228,64,0.4)" }}>
                  Популярный
                </div>
              )}
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl flex-shrink-0"
                style={{ background: "rgba(254,228,64,0.12)", border: "1px solid rgba(254,228,64,0.25)" }}>
                {pack.icon}
              </div>
              <div className="flex-1">
                <div className="font-unbounded font-black text-white">{pack.amount}</div>
                <div className="text-xs text-muted-foreground mt-0.5">Мгновенное зачисление</div>
              </div>
              <button
                onClick={() => setBought(pack.id)}
                className="px-4 py-2 rounded-xl font-semibold text-sm transition-all flex-shrink-0"
                style={bought === pack.id
                  ? { background: "rgba(0,245,212,0.15)", color: "var(--neon-cyan)", border: "1px solid rgba(0,245,212,0.3)" }
                  : { background: "linear-gradient(135deg, rgba(254,228,64,0.2), rgba(254,228,64,0.1))", color: "var(--neon-yellow)", border: "1px solid rgba(254,228,64,0.3)" }}>
                {bought === pack.id ? "✓" : pack.price}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Текущий план */}
      <div className="glass-card rounded-2xl p-4 flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ background: "rgba(155,93,229,0.15)", border: "1px solid rgba(155,93,229,0.3)" }}>
          <Icon name="Sparkles" size={18} style={{ color: "var(--neon-purple)" }} />
        </div>
        <div className="flex-1">
          <div className="text-sm font-semibold text-white">Текущий план: Бесплатный</div>
          <div className="text-xs text-muted-foreground mt-0.5">3 урока в день · Базовые диалоги</div>
        </div>
        <Icon name="ChevronRight" size={16} className="text-muted-foreground" />
      </div>
    </div>
  );
}
