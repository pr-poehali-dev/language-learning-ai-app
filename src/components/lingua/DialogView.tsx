import { useState } from "react";
import Icon from "@/components/ui/icon";
import { INITIAL_MESSAGES } from "./data";

export function DialogView() {
  const [inputMessage, setInputMessage] = useState("");
  const [chatMessages, setChatMessages] = useState(INITIAL_MESSAGES);
  const [isRecording, setIsRecording] = useState(false);

  const sendMessage = () => {
    if (!inputMessage.trim()) return;
    setChatMessages(prev => [...prev, { role: "user", text: inputMessage }]);
    setInputMessage("");
  };

  return (
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
}
