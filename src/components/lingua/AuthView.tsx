import { useState } from "react";
import Icon from "@/components/ui/icon";

type AuthStep = "landing" | "login" | "register" | "forgot";

interface AuthViewProps {
  onAuth: () => void;
}

export function AuthView({ onAuth }: AuthViewProps) {
  const [step, setStep] = useState<AuthStep>("landing");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAuth();
  };

  const Blobs = () => (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <div className="absolute top-[-20%] left-[-10%] w-96 h-96 rounded-full blur-3xl opacity-25 animate-float-slow"
        style={{ background: "radial-gradient(circle, var(--neon-purple), transparent)" }} />
      <div className="absolute bottom-[-10%] right-[-5%] w-80 h-80 rounded-full blur-3xl opacity-20 animate-float"
        style={{ background: "radial-gradient(circle, var(--neon-cyan), transparent)" }} />
      <div className="absolute top-[50%] left-[50%] w-64 h-64 rounded-full blur-3xl opacity-10"
        style={{ background: "radial-gradient(circle, var(--neon-pink), transparent)", transform: "translate(-50%,-50%)" }} />
    </div>
  );

  const Logo = () => (
    <div className="text-center mb-8">
      <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4 animate-float"
        style={{ background: "linear-gradient(135deg, var(--neon-purple), #7b2ff7)", boxShadow: "0 0 40px rgba(155,93,229,0.5)" }}>
        🌍
      </div>
      <h1 className="font-unbounded text-3xl font-black gradient-text mb-1">Lexiona</h1>
      <p className="text-muted-foreground text-sm">Учи языки с искусственным интеллектом</p>
    </div>
  );

  const SocialButtons = () => (
    <div className="space-y-2">
      <button onClick={onAuth}
        className="w-full flex items-center gap-3 py-3 px-4 rounded-2xl font-medium text-sm text-white transition-all hover:opacity-80"
        style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)" }}>
        <span className="w-5 h-5 flex items-center justify-center font-black text-base flex-shrink-0"
          style={{ color: "#EA4335" }}>G</span>
        <span className="flex-1 text-center">Продолжить с Google</span>
      </button>
      <button onClick={onAuth}
        className="w-full flex items-center gap-3 py-3 px-4 rounded-2xl font-medium text-sm text-white transition-all hover:opacity-80"
        style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)" }}>
        <Icon name="Apple" size={18} className="flex-shrink-0" />
        <span className="flex-1 text-center">Продолжить с Apple</span>
      </button>
    </div>
  );

  const Divider = () => (
    <div className="flex items-center gap-3 my-5">
      <div className="flex-1 h-px bg-white/10" />
      <span className="text-xs text-muted-foreground">или через email</span>
      <div className="flex-1 h-px bg-white/10" />
    </div>
  );

  const Agreement = () => (
    <p className="text-center text-xs text-muted-foreground mt-4 px-4">
      Продолжая, вы соглашаетесь с{" "}
      <span className="underline cursor-pointer" style={{ color: "var(--neon-purple)" }}>условиями использования</span>
      {" "}и{" "}
      <span className="underline cursor-pointer" style={{ color: "var(--neon-purple)" }}>политикой конфиденциальности</span>
    </p>
  );

  /* ── LANDING ── */
  if (step === "landing") {
    return (
      <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <Blobs />
        <div className="relative w-full max-w-sm mx-auto px-4 py-8">
          <Logo />

          {/* Фичи */}
          <div className="space-y-3 mb-8">
            {[
              { icon: "🤖", text: "ИИ-диалоги для практики речи" },
              { icon: "📚", text: "Уроки грамматики и словаря" },
              { icon: "🎯", text: "Проверка произношения" },
            ].map((f, i) => (
              <div key={i} className="flex items-center gap-3 px-4 py-3 rounded-2xl"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <span className="text-xl">{f.icon}</span>
                <span className="text-sm text-white/80">{f.text}</span>
              </div>
            ))}
          </div>

          {/* Две главные кнопки */}
          <div className="space-y-3">
            <button
              onClick={() => setStep("register")}
              className="w-full py-4 rounded-2xl font-bold text-base text-white btn-glow"
              style={{ background: "linear-gradient(135deg, var(--neon-purple), #7b2ff7)" }}>
              Зарегистрироваться
            </button>
            <button
              onClick={() => setStep("login")}
              className="w-full py-4 rounded-2xl font-bold text-base transition-all hover:opacity-80"
              style={{ background: "rgba(155,93,229,0.12)", border: "1px solid rgba(155,93,229,0.35)", color: "var(--neon-purple)" }}>
              Войти
            </button>
          </div>

          <Agreement />
        </div>
      </div>
    );
  }

  /* ── FORGOT PASSWORD ── */
  if (step === "forgot") {
    return (
      <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <Blobs />
        <div className="relative w-full max-w-sm mx-auto px-4 py-8">
          <div className="glass-card rounded-3xl p-6" style={{ border: "1px solid rgba(155,93,229,0.2)" }}>
            <button onClick={() => setStep("login")}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-white transition-colors mb-5">
              <Icon name="ArrowLeft" size={16} /> Назад
            </button>
            <h2 className="font-unbounded text-xl font-black text-white mb-1">Сброс пароля</h2>
            <p className="text-muted-foreground text-xs mb-5">Отправим ссылку на восстановление</p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="relative">
                <Icon name="Mail" size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input type="email" value={email} onChange={e => setEmail(e.target.value)}
                  placeholder="Email"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl pl-11 pr-4 py-3 text-sm text-white placeholder:text-muted-foreground outline-none focus:border-purple-500/60 transition-colors" />
              </div>
              <button type="submit"
                className="w-full py-3 rounded-2xl font-semibold text-sm text-white btn-glow"
                style={{ background: "linear-gradient(135deg, var(--neon-purple), #7b2ff7)" }}>
                Отправить ссылку
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  /* ── LOGIN / REGISTER ── */
  const isLogin = step === "login";

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <Blobs />
      <div className="relative w-full max-w-sm mx-auto px-4 py-8">

        {/* Назад */}
        <button onClick={() => setStep("landing")}
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-white transition-colors mb-6">
          <Icon name="ArrowLeft" size={16} />
          Назад
        </button>

        <div className="glass-card rounded-3xl p-6 animate-scale-in" style={{ border: "1px solid rgba(155,93,229,0.2)" }}>
          <h2 className="font-unbounded text-xl font-black text-white mb-1">
            {isLogin ? "Добро пожаловать!" : "Создать аккаунт"}
          </h2>
          <p className="text-muted-foreground text-xs mb-5">
            {isLogin ? "Войди, чтобы продолжить обучение" : "Начни учить языки бесплатно"}
          </p>

          {/* Соцсети вверху */}
          <SocialButtons />

          <Divider />

          {/* Email-форма */}
          <form onSubmit={handleSubmit} className="space-y-3">
            {!isLogin && (
              <div className="relative">
                <Icon name="User" size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input value={name} onChange={e => setName(e.target.value)} placeholder="Имя"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl pl-11 pr-4 py-3 text-sm text-white placeholder:text-muted-foreground outline-none focus:border-purple-500/60 transition-colors" />
              </div>
            )}
            <div className="relative">
              <Icon name="Mail" size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email"
                className="w-full bg-white/5 border border-white/10 rounded-2xl pl-11 pr-4 py-3 text-sm text-white placeholder:text-muted-foreground outline-none focus:border-purple-500/60 transition-colors" />
            </div>
            <div className="relative">
              <Icon name="Lock" size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input type={showPassword ? "text" : "password"} value={password}
                onChange={e => setPassword(e.target.value)} placeholder="Пароль"
                className="w-full bg-white/5 border border-white/10 rounded-2xl pl-11 pr-11 py-3 text-sm text-white placeholder:text-muted-foreground outline-none focus:border-purple-500/60 transition-colors" />
              <button type="button" onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-white transition-colors">
                <Icon name={showPassword ? "EyeOff" : "Eye"} size={16} />
              </button>
            </div>

            {isLogin && (
              <div className="text-right">
                <button type="button" onClick={() => setStep("forgot")}
                  className="text-xs hover:opacity-80 transition-opacity" style={{ color: "var(--neon-purple)" }}>
                  Забыл пароль?
                </button>
              </div>
            )}

            <button type="submit"
              className="w-full py-3 rounded-2xl font-semibold text-sm text-white btn-glow mt-1"
              style={{ background: "linear-gradient(135deg, var(--neon-purple), #7b2ff7)" }}>
              {isLogin ? "Войти через email" : "Зарегистрироваться"}
            </button>
          </form>

          {/* Переключение между login/register */}
          <p className="text-center text-xs text-muted-foreground mt-4">
            {isLogin ? "Ещё нет аккаунта? " : "Уже есть аккаунт? "}
            <button
              onClick={() => setStep(isLogin ? "register" : "login")}
              className="font-semibold hover:opacity-80 transition-opacity"
              style={{ color: "var(--neon-purple)" }}>
              {isLogin ? "Зарегистрироваться" : "Войти"}
            </button>
          </p>
        </div>

        <Agreement />
      </div>
    </div>
  );
}
