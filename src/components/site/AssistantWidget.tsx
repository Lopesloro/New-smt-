import { useState } from "react";
import { Bot, Send, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Msg {
  role: "user" | "assistant";
  text: string;
}

const WELCOME =
  "Olá! Sou o assistente da SM Tech, disponível 24h. Posso explicar como cada máquina funciona, indicar o equipamento ideal e iniciar seu orçamento. Como posso ajudar?";

/**
 * Widget de atendimento com IA (24h).
 * Hoje responde com respostas-modelo (offline). Para ligar a IA de verdade,
 * troque `fakeReply` por uma chamada ao seu endpoint que usa a API do Claude
 * (claude-opus-4-8 / claude-sonnet-4-6). Veja src/lib/assistant.ts.
 */
function fakeReply(input: string): string {
  const q = input.toLowerCase();
  if (q.includes("pick") || q.includes("place") || q.includes("componente"))
    return "A Pick & Place posiciona componentes SMD automaticamente com visão por câmera (precisão ± 0,025 mm). Veja o vídeo no showroom. Quer um orçamento?";
  if (q.includes("forno") || q.includes("refluxo") || q.includes("solda"))
    return "Para soldagem temos o Forno de Refluxo (curva térmica por zonas) e a Solda Onda (componentes through-hole). Posso te enviar os vídeos de funcionamento.";
  if (q.includes("preço") || q.includes("orçamento") || q.includes("valor"))
    return "Para gerar seu orçamento preciso de: máquina de interesse, volume de produção e cidade. Pode me passar esses dados?";
  return "Posso ajudar com isso! Me diga qual etapa da produção você quer automatizar (montagem, soldagem, inspeção ou limpeza) que eu indico a máquina certa.";
}

export function AssistantWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Msg[]>([
    { role: "assistant", text: WELCOME },
  ]);

  function send() {
    const text = input.trim();
    if (!text) return;
    setMessages((m) => [...m, { role: "user", text }]);
    setInput("");
    // Resposta-modelo; substitua por chamada à API do Claude.
    setTimeout(() => {
      setMessages((m) => [...m, { role: "assistant", text: fakeReply(text) }]);
    }, 450);
  }

  return (
    <>
      <button
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground ring-glow transition hover:scale-105"
        aria-label="Abrir assistente 24h"
      >
        {open ? <X className="h-6 w-6" /> : <Bot className="h-6 w-6" />}
      </button>

      {open && (
        <div className="fixed bottom-24 right-5 z-50 flex h-[28rem] w-[22rem] max-w-[calc(100vw-2.5rem)] flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
          <div className="flex items-center gap-3 border-b border-border bg-secondary/40 px-4 py-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/15 text-primary">
              <Bot className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-semibold">Assistente SM Tech</p>
              <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <span className="h-2 w-2 rounded-full bg-green-500" /> Online 24h
              </p>
            </div>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto p-4">
            {messages.map((m, i) => (
              <div
                key={i}
                className={cn(
                  "max-w-[85%] rounded-2xl px-3 py-2 text-sm",
                  m.role === "assistant"
                    ? "bg-secondary text-foreground"
                    : "ml-auto bg-primary text-primary-foreground",
                )}
              >
                {m.text}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2 border-t border-border p-3">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="Digite sua dúvida..."
              className="flex-1 rounded-full border border-input bg-background px-4 py-2 text-sm outline-none focus:border-primary"
            />
            <Button size="icon" className="rounded-full" onClick={send} aria-label="Enviar">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
