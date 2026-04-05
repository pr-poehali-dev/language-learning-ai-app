import { useState } from "react";
import Icon from "@/components/ui/icon";
import { Section, NAV_ITEMS } from "@/components/lingua/data";
import { HomeView, LessonsView, ProgressView, VocabularyView, ProfileView } from "@/components/lingua/SectionViews";
import { DialogView } from "@/components/lingua/DialogView";
import { TestsView } from "@/components/lingua/TestsView";

export default function Index() {
  const [activeSection, setActiveSection] = useState<Section>("home");

  const renderContent = () => {
    switch (activeSection) {
      case "home":       return <HomeView setActiveSection={setActiveSection} />;
      case "lessons":    return <LessonsView />;
      case "dialog":     return <DialogView />;
      case "tests":      return <TestsView />;
      case "progress":   return <ProgressView />;
      case "vocabulary": return <VocabularyView />;
      case "profile":    return <ProfileView />;
      default:           return <HomeView setActiveSection={setActiveSection} />;
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
                <Icon name={item.icon} size={19} />
                <span className="text-[9px] font-medium">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
