import { blocks, deliverables } from "@/data/protocol";

export function ProtocolGrid() {
  return (
    <section id="diagnostico" className="scroll-mt-20 border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
        <p className="font-mono text-xs tracking-[0.28em] text-accent">
          DIAGNÓSTICO
        </p>
        <h2 className="mt-4 max-w-xl font-display text-5xl font-extrabold uppercase leading-[0.9] tracking-tight">
          Quatro eixos.
          <br />
          Dados, não foto.
        </h2>
        <p className="mt-5 max-w-md text-sm leading-relaxed text-muted">
          Nome, tempo, foco. O resto é direção.
        </p>

        <div className="mt-12 grid gap-3 sm:grid-cols-2">
          {blocks.map((b) => (
            <article
              key={b.id}
              className="flex min-h-64 flex-col border border-border bg-surface p-6 transition-[border-color,box-shadow] duration-200 ease-[var(--ease-out)] hover:border-accent hover:shadow-[var(--shadow-border-hover)]"
            >
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-xs tracking-[0.2em] text-accent">
                  {b.id}
                </span>
                <span className="font-mono text-sm tabular-nums text-accent">
                  {b.minutes} MIN
                </span>
              </div>
              <h3 className="mt-8 font-display text-block font-extrabold leading-none tracking-tight">
                {b.code}
              </h3>
              <p className="mt-2 text-sm text-muted">{b.detail}</p>
              <dl className="mt-auto grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 border-t border-border pt-4 font-mono text-2xs uppercase tracking-[0.16em]">
                <dt className="text-faint">Foco</dt>
                <dd className="text-right text-fg">{b.focus}</dd>
                <dt className="text-faint">Entrega</dt>
                <dd className="text-right text-fg">{b.output}</dd>
              </dl>
            </article>
          ))}
        </div>

        <div className="mt-3 border border-border bg-surface">
          <div className="flex flex-wrap items-end justify-between gap-3 border-b border-border px-5 py-4">
            <div>
              <p className="font-mono text-2xs tracking-[0.24em] text-accent">
                O QUE VOLTA
              </p>
              <h3 className="mt-1 font-display text-3xl font-extrabold tracking-tight">
                DIREÇÃO
              </h3>
            </div>
            <p className="max-w-xs text-xs text-muted">
              Clareza no papel. Não uma lista de 40 exercícios.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[32rem] text-left text-sm">
              <thead>
                <tr className="border-b border-border font-mono text-2xs uppercase tracking-[0.18em] text-faint">
                  <th className="px-5 py-3 font-medium">Cód</th>
                  <th className="px-5 py-3 font-medium">Entrega</th>
                  <th className="px-5 py-3 font-medium">Para quê</th>
                </tr>
              </thead>
              <tbody>
                {deliverables.map((row) => (
                  <tr
                    key={row.code}
                    className="border-b border-border last:border-0"
                  >
                    <td className="px-5 py-3.5 font-mono text-xs text-accent">
                      {row.code}
                    </td>
                    <td className="px-5 py-3.5 font-medium">{row.name}</td>
                    <td className="px-5 py-3.5 text-muted">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
