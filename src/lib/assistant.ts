/**
 * 24/7 assistant integration with the Claude API.
 *
 * IMPORTANT: the API key must NEVER live in the frontend.
 * Create a backend endpoint (e.g. /api/chat) that receives the messages,
 * calls Anthropic with your ANTHROPIC_API_KEY (server environment variable)
 * and returns the reply. The frontend only talks to YOUR endpoint.
 *
 * Example server handler (Node):
 *
 *   import Anthropic from "@anthropic-ai/sdk";
 *   const client = new Anthropic(); // reads ANTHROPIC_API_KEY from the env
 *
 *   const res = await client.messages.create({
 *     model: "claude-opus-4-8",          // or "claude-sonnet-4-6" (cheaper)
 *     max_tokens: 600,
 *     system: SYSTEM_PROMPT,             // identity + equipment catalog
 *     messages,                          // history [{role, content}]
 *   });
 *   return res.content[0].text;
 */

export const SYSTEM_PROMPT = `You are the virtual assistant of SMT Solutions (SMTS), a company
specialized in equipment for electronic assembly, automation and testing. Answer in English,
concise and courteous. Explain how each machine works, recommend the right equipment for the
customer's need (placement, printing, inspection, testing or automation) and help start a quote
by collecting: machine of interest, production volume and city. Never invent prices; forward to
the sales team for any pricing.`;

export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

/** Chama o backend que conversa com o Claude. Troque a URL pelo seu endpoint. */
export async function askAssistant(messages: ChatMessage[]): Promise<string> {
  const res = await fetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ messages }),
  });
  if (!res.ok) throw new Error("Falha ao falar com o assistente");
  const data = (await res.json()) as { reply: string };
  return data.reply;
}
