# SM Tech — Site (showroom de máquinas)

Site React totalmente tecnológico com showroom em carrossel, **vídeo de funcionamento
por máquina**, suporte a upload de vídeos e assistente de IA 24h.

Stack: **React + TypeScript + Vite + Tailwind + shadcn/ui**. Tema **Tech Innovation**
(azul elétrico + ciano neon sobre fundo escuro). Vídeos explicativos gerados com **Remotion**.

## Rodar localmente

```bash
pnpm install
pnpm dev        # http://localhost:5173
pnpm build      # build de produção em /dist
```

## Cadastrar / trocar máquinas e vídeos

Tudo fica em [`src/data/machines.ts`](src/data/machines.ts). Cada máquina tem um campo `video`:

```ts
// Arquivo enviado por você (coloque o mp4 em /public/videos):
video: { kind: "file", src: "/videos/minha-maquina.mp4" }

// YouTube:
video: { kind: "youtube", id: "ID_DO_VIDEO" }

// Vimeo:
video: { kind: "vimeo", id: "ID_DO_VIDEO" }
```

A capa (`poster`) fica em `/public/machines`. Para regenerar as capas: `node scripts/gen-posters.mjs`.

## Gerar vídeo de funcionamento com Remotion

A composição está em [`remotion/`](remotion). Para uma nova máquina, edite
`MachineExplainer.tsx` / `Root.tsx` e renderize:

```bash
npx remotion preview remotion/index.ts                 # pré-visualizar
npx remotion render remotion/index.ts PickAndPlace public/videos/pick-and-place.mp4
```

## Assistente de IA 24h

O widget de chat está em [`src/components/site/AssistantWidget.tsx`](src/components/site/AssistantWidget.tsx).
Hoje ele responde com respostas-modelo (offline). Para ligar a **IA real (API do Claude)**:

1. Crie um endpoint no backend (`/api/chat`) que use `ANTHROPIC_API_KEY` (NUNCA no frontend).
2. Use o modelo `claude-opus-4-8` (ou `claude-sonnet-4-6`, mais barato) com o `SYSTEM_PROMPT`
   de [`src/lib/assistant.ts`](src/lib/assistant.ts).
3. No widget, troque a função `fakeReply` pela chamada `askAssistant(...)`.

## Estrutura

```
src/
  data/machines.ts          # catálogo (fonte única das máquinas e vídeos)
  components/site/          # Header, Hero, Showroom, VideoPlayer, Features, Contact, Footer, AssistantWidget
  lib/assistant.ts          # integração com a API do Claude (stub do backend)
remotion/                   # gerador de vídeos de funcionamento
public/machines/            # capas (posters) das máquinas
public/videos/              # vídeos mp4 (enviados ou gerados)
```
