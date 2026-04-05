import { useState } from "react";
import Icon from "@/components/ui/icon";

type AuthMode = "login" | "register" | "forgot";

interface AuthViewProps {
  onAuth: () => void;
}

export function AuthView({ onAuth }: AuthViewProps) {
  const [mode, setMode] = useState<AuthMode>("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAuth();
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Фоновые блобы */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-96 h-96 rounded-full blur-3xl opacity-25 animate-float-slow"
          style={{ background: "radial-gradient(circle, var(--neon-purple), transparent)" }} />
        <div className="absolute bottom-[-10%] right-[-5%] w-80 h-80 rounded-full blur-3xl opacity-20 animate-float"
          style={{ background: "radial-gradient(circle, var(--neon-cyan), transparent)" }} />
        <div className="absolute top-[50%] left-[50%] w-64 h-64 rounded-full blur-3xl opacity-10"
          style={{ background: "radial-gradient(circle, var(--neon-pink), transparent)", transform: "translate(-50%,-50%)" }} />
      </div>

      <div className="relative w-full max-w-sm mx-auto px-4 py-8">
        {/* Логотип */}
        <div className="text-center mb-8 animate-fade-in">
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4 animate-float"
            style={{ background: "linear-gradient(135deg, var(--neon-purple), #7b2ff7)", boxShadow: "0 0 40px rgba(155,93,229,0.5)" }}>
            🌍
          </div>
          <h1 className="font-unbounded text-3xl font-black gradient-text mb-1">Lexiona</h1>
          <p className="text-muted-foreground text-sm">Учи языки с искусственным интеллектом</p>
        </div>

        {/* Карточка */}
        <div className="glass-card rounded-3xl p-6 animate-scale-in" style={{ border: "1px solid rgba(155,93,229,0.2)" }}>

          {/* Табы login/register */}
          {mode !== "forgot" && (
            <div className="flex gap-1 p-1 rounded-xl mb-6" style={{ background: "rgba(255,255,255,0.05)" }}>
              <button
                onClick={() => setMode("login")}
                className="flex-1 py-2 rounded-lg text-sm font-semibold transition-all"
                style={mode === "login"
                  ? { background: "linear-gradient(135deg, var(--neon-purple), #7b2ff7)", color: "#fff" }
                  : { color: "hsl(var(--muted-foreground))" }}>
                Вход
              </button>
              <button
                onClick={() => setMode("register")}
                className="flex-1 py-2 rounded-lg text-sm font-semibold transition-all"
                style={mode === "register"
                  ? { background: "linear-gradient(135deg, var(--neon-purple), #7b2ff7)", color: "#fff" }
                  : { color: "hsl(var(--muted-foreground))" }}>
                Регистрация
              </button>
            </div>
          )}

          {mode === "forgot" && (
            <div className="mb-6">
              <button onClick={() => setMode("login")} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-white transition-colors mb-4">
                <Icon name="ArrowLeft" size={16} /> Назад
              </button>
              <h2 className="font-unbounded text-lg font-black text-white">Сброс пароля</h2>
              <p className="text-muted-foreground text-xs mt-1">Отправим ссылку на восстановление</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-3">
            {mode === "register" && (
              <div className="relative">
                <Icon name="User" size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="Имя"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl pl-11 pr-4 py-3 text-sm text-white placeholder:text-muted-foreground outline-none focus:border-purple-500/60 transition-colors"
                />
              </div>
            )}

            <div className="relative">
              <Icon name="Mail" size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Email"
                className="w-full bg-white/5 border border-white/10 rounded-2xl pl-11 pr-4 py-3 text-sm text-white placeholder:text-muted-foreground outline-none focus:border-purple-500/60 transition-colors"
              />
            </div>

            {mode !== "forgot" && (
              <div className="relative">
                <Icon name="Lock" size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="Пароль"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl pl-11 pr-11 py-3 text-sm text-white placeholder:text-muted-foreground outline-none focus:border-purple-500/60 transition-colors"
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-white transition-colors">
                  <Icon name={showPassword ? "EyeOff" : "Eye"} size={16} />
                </button>
              </div>
            )}

            {mode === "login" && (
              <div className="text-right">
                <button type="button" onClick={() => setMode("forgot")}
                  className="text-xs transition-colors hover:opacity-80" style={{ color: "var(--neon-purple)" }}>
                  Забыл пароль?
                </button>
              </div>
            )}

            <button type="submit"
              className="w-full py-3 rounded-2xl font-semibold text-sm text-white btn-glow mt-2"
              style={{ background: "linear-gradient(135deg, var(--neon-purple), #7b2ff7)" }}>
              {mode === "login" ? "Войти" : mode === "register" ? "Создать аккаунт" : "Отправить ссылку"}
            </button>
          </form>

          {mode !== "forgot" && (
            <>
              {/* Разделитель */}
              <div className="flex items-center gap-3 my-5">
                <div className="flex-1 h-px bg-white/10" />
                <span className="text-xs text-muted-foreground">или</span>
                <div className="flex-1 h-px bg-white/10" />
              </div>

              {/* Соцсети */}
              <div className="space-y-2">
                <button
                  onClick={onAuth}
                  className="w-full flex items-center gap-3 py-3 px-4 rounded-2xl font-medium text-sm text-white transition-all hover:opacity-80"
                  style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)" }}>
                  <span className="text-lg">G</span>
                  <span className="flex-1 text-center">Продолжить с Google</span>
                </button>
                <button
                  onClick={onAuth}
                  className="w-full flex items-center gap-3 py-3 px-4 rounded-2xl font-medium text-sm text-white transition-all hover:opacity-80"
                  style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)" }}>
                  <Icon name="Apple" size={18} />
                  <span className="flex-1 text-center">Продолжить с Apple</span>
                </button>
              </div>
            </>
          )}
        </div>

        {/* Соглашение */}
        <p className="text-center text-xs text-muted-foreground mt-4 px-4">
          Продолжая, вы соглашаетесь с{" "}
          <span className="underline cursor-pointer" style={{ color: "var(--neon-purple)" }}>условиями использования</span>
          {" "}и{" "}
          <span className="underline cursor-pointer" style={{ color: "var(--neon-purple)" }}>политикой конфиденциальности</span>
        </p>
      </div>
    </div>
  );
}
