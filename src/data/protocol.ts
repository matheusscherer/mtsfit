export type Block = {
  id: string;
  code: string;
  minutes: number;
  detail: string;
  focus: string;
  output: string;
};

export const blocks: Block[] = [
  {
    id: "01",
    code: "TREINO",
    minutes: 8,
    detail: "Volume · frequência · carga",
    focus: "Progressão",
    output: "Trava",
  },
  {
    id: "02",
    code: "ROTINA",
    minutes: 5,
    detail: "Horários · consistência · vida real",
    focus: "Aderência",
    output: "Fricção",
  },
  {
    id: "03",
    code: "RECUPERAÇÃO",
    minutes: 4,
    detail: "Sono · folga · stress",
    focus: "Capacidade",
    output: "Custo",
  },
  {
    id: "04",
    code: "OBJETIVO",
    minutes: 3,
    detail: "12 semanas · prioridade única",
    focus: "Direção",
    output: "Passo",
  },
];

export const flow: { id: string; title: string; body: string }[] = [
  {
    id: "01",
    title: "Dados",
    body: "Rotina, treino, objetivo. Direto. Sem texto longo.",
  },
  {
    id: "02",
    title: "Gargalo",
    body: "O que trava a evolução, destacado. Sem achismo.",
  },
  {
    id: "03",
    title: "Direção",
    body: "Um próximo passo. Onde concentrar energia.",
  },
];

export const deliverables: { code: string; name: string; note: string }[] = [
  { code: "A1", name: "Gargalo principal", note: "O que está travando agora" },
  { code: "A2", name: "Energia mal alocada", note: "Onde você gasta à toa" },
  { code: "B1", name: "Próximo passo", note: "Uma ação, não uma lista" },
  { code: "B2", name: "O que ignorar", note: "Ruído fora do jogo" },
];

export const stats = [
  { value: "03", label: "Pilares analisados" },
  { value: "20", label: "Minutos no diagnóstico" },
  { value: "01", label: "Próximo passo" },
  { value: "00", label: "Enrolação" },
];

export const goals = [
  "Sair da estagnação",
  "Hipertrofia",
  "Composição corporal",
  "Performance",
] as const;
