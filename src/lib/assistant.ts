/**
 * Integração do assistente 24h com a API do Claude.
 *
 * IMPORTANTE: a chave da API NUNCA deve ficar no frontend.
 * Crie um endpoint no seu backend (ex.: /api/chat) que recebe as mensagens,
 * chama a Anthropic com sua ANTHROPIC_API_KEY (variável de ambiente do servidor)
 * e devolve a resposta. O front só conversa com o SEU endpoint.
 *
 * Exemplo de handler no servidor (Node):
 *
 *   import Anthropic from "@anthropic-ai/sdk";
 *   const client = new Anthropic(); // lê ANTHROPIC_API_KEY do ambiente
 *
 *   const res = await client.messages.create({
 *     model: "claude-opus-4-8",          // ou "claude-sonnet-4-6" (mais barato)
 *     max_tokens: 600,
 *     system: SYSTEM_PROMPT,             // identidade + catálogo de máquinas
 *     messages,                          // histórico [{role, content}]
 *   });
 *   return res.content[0].text;
 */

export const SYSTEM_PROMPT = `Você é o assistente virtual da SM Tech, especialista em máquinas
industriais para montagem e solda de placas eletrônicas (SMT). Atenda em português,
de forma objetiva e cordial. Explique como cada máquina funciona, indique o equipamento
ideal conforme a necessidade do cliente (montagem, soldagem, inspeção ou limpeza) e
ajude a iniciar um orçamento coletando: máquina de interesse, volume de produção e cidade.
Nunca invente preços; encaminhe ao time comercial quando for falar de valores.`;

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
