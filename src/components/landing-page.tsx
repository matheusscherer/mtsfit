import { ArrowDown, ArrowRight } from "lucide-react";
import { ApplyForm } from "@/components/apply-form";
import { ProtocolGrid } from "@/components/protocol-grid";
import { SiteFooter, SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { flow, stats } from "@/data/protocol";

export function LandingPage() {
  return (
    <div id="topo" className="min-h-screen bg-bg">
      <SiteHeader />
      <main>
        <Hero />
        <Stats />
        <Method />
        <ProtocolGrid />
        <Audience />
        <Coach />
        <Apply />
      </main>
      <SiteFooter />
    </div>
  );
}

function Hero() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto grid max-w-6xl items-end gap-10 px-5 py-16 sm:py-24 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
        <div>
          <p className="font-mono text-xs tracking-[0.28em] text-accent">
            SCHERER METHOD
          </p>
          <h1 className="mt-5 font-display text-hero font-extrabold uppercase leading-[0.84] tracking-tight">
            Pare de treinar
            <br />
            no <span className="text-accent">escuro.</span>
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted">
            Diagnóstico de performance. Gargalo no papel. Um próximo passo.
            Sem enrolação.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild size="lg">
              <a href="#formulario">
                Quero meu diagnóstico
                <ArrowRight className="size-4" strokeWidth={2.2} />
              </a>
            </Button>
            <Button asChild variant="ghost" size="lg">
              <a href="#diagnostico">
                Ver os eixos
                <ArrowDown className="size-4" strokeWidth={2.2} />
              </a>
            </Button>
          </div>
        </div>
        <figure className="justify-self-end">
          <div className="w-56 border border-border bg-surface sm:w-64 lg:w-72">
            <img
              src="/photos/coach.jpg"
              alt="Matheus Scherer, coach do Scherer Method"
              className="aspect-[4/5] w-full object-cover object-[center_20%] grayscale"
            />
            <figcaption className="border-t border-border px-3 py-2.5">
              <p className="font-mono text-2xs uppercase tracking-[0.14em] text-fg">
                Matheus Scherer
              </p>
              <p className="mt-0.5 font-mono text-2xs uppercase tracking-[0.14em] text-accent">
                Coach
              </p>
            </figcaption>
          </div>
        </figure>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto grid max-w-6xl grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={
              i % 2 === 1
                ? "border-b border-border px-5 py-8 lg:border-b-0 lg:border-l"
                : "border-b border-l-0 border-border px-5 py-8 lg:border-b-0 lg:border-l first:lg:border-l-0"
            }
          >
            <p className="font-display text-5xl font-extrabold leading-none tracking-tight text-accent">
              {s.value}
            </p>
            <p className="mt-2 font-mono text-2xs uppercase tracking-[0.18em] text-muted">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Method() {
  return (
    <section id="metodo" className="scroll-mt-20 border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
        <p className="font-mono text-xs tracking-[0.28em] text-accent">
          COMO FUNCIONA
        </p>
        <h2 className="mt-4 max-w-lg font-display text-5xl font-extrabold uppercase leading-[0.9] tracking-tight">
          Informação vira
          <br />
          direção.
        </h2>
        <div className="mt-12 grid gap-3 md:grid-cols-3">
          {flow.map((r) => (
            <article key={r.id} className="border border-border bg-surface p-6">
              <p className="font-mono text-xs tracking-[0.22em] text-accent">
                {r.id}
              </p>
              <h3 className="mt-6 font-display text-3xl font-extrabold uppercase tracking-tight">
                {r.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{r.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Audience() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto grid max-w-6xl md:grid-cols-2">
        <div className="border-b border-border px-5 py-16 md:border-b-0 md:border-r">
          <p className="font-mono text-xs tracking-[0.28em] text-accent">
            PARA
          </p>
          <ul className="mt-8 space-y-5">
            {[
              "Quem já treina e estagnou.",
              "Quem quer direção, não motivação.",
              "Quem trata o treino como trabalho.",
            ].map((t) => (
              <li
                key={t}
                className="border-b border-border pb-5 font-display text-2xl font-bold uppercase leading-tight tracking-tight last:border-0 last:pb-0"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
        <div className="px-5 py-16">
          <p className="font-mono text-xs tracking-[0.28em] text-faint">FORA</p>
          <ul className="mt-8 space-y-5">
            {[
              "Quem busca treino aleatório.",
              "Quem quer resultado sem rotina.",
              "Quem quer conteúdo, não clareza.",
            ].map((t) => (
              <li
                key={t}
                className="border-b border-border pb-5 font-display text-2xl font-bold uppercase leading-tight tracking-tight text-muted last:border-0 last:pb-0"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Coach() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 sm:py-24 lg:grid-cols-[220px_1fr] lg:gap-16">
        <img
          src="/photos/hero.jpg"
          alt="Matheus Scherer"
          className="aspect-square w-40 object-cover object-top grayscale sm:w-52"
        />
        <div>
          <p className="font-mono text-xs tracking-[0.28em] text-accent">
            COACH
          </p>
          <h2 className="mt-3 font-display text-5xl font-extrabold uppercase leading-none tracking-tight">
            Matheus Scherer
          </h2>
          <p className="mt-3 font-mono text-xs tracking-[0.18em] text-muted">
            Porto Alegre · @mtscfit
          </p>
          <p className="mt-6 max-w-lg text-sm leading-relaxed text-muted">
            O diagnóstico nasceu da rotina — não de um funil. Treino. Shape.
            Direção.
          </p>
        </div>
      </div>
    </section>
  );
}

function Apply() {
  return (
    <section id="formulario" className="scroll-mt-20 border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:py-28 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="font-mono text-xs tracking-[0.28em] text-accent">
            COMEÇAR
          </p>
          <h2 className="mt-4 font-display text-5xl font-extrabold uppercase leading-[0.9] tracking-tight">
            Descubra o
            <br />
            próximo nível.
          </h2>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
            Nome e e-mail. Sem sequência automática. Se fizer sentido, você
            recebe o próximo passo.
          </p>
        </div>
        <ApplyForm />
      </div>
    </section>
  );
}
