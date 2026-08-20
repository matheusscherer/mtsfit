import { ArrowRight, Check, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { bullets, faqs, offer } from "@/data/offer";

export function LandingPage() {
  return (
    <div id="topo" className="relative min-h-svh overflow-x-hidden bg-bg pb-24 md:pb-0">
      <div className="lime-blob" aria-hidden="true" />
      <Header />
      <main className="relative mx-auto max-w-xl px-5">
        <Hero />
        <Proof />
        <Deliverables />
        <PriceBlock />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <StickyCta />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-xl items-center justify-between px-5">
        <a
          href="#topo"
          className="font-display text-lg font-extrabold tracking-[0.1em]"
        >
          MTS<span className="text-accent">FIT</span>
        </a>
        <div className="flex items-center gap-4">
          <a
            href={offer.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden text-xs font-medium uppercase tracking-[0.16em] text-muted transition-colors hover:text-fg sm:inline"
          >
            {offer.handle}
          </a>
          <Button asChild size="sm">
            <a href={offer.checkoutUrl}>{offer.cta}</a>
          </Button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="border-b border-border py-10 sm:py-12">
      <p className="enter enter-1 font-mono text-2xs tracking-[0.28em] text-accent">
        DESAFIO 21 DIAS
      </p>
      <h1 className="enter enter-2 mt-3 font-display text-hero font-extrabold uppercase leading-[0.88] tracking-tight">
        Por que teu treino
        <br />
        não <span className="text-accent">cresce.</span>
      </h1>
      <p className="enter enter-3 mt-4 max-w-sm text-sm leading-relaxed text-muted">
        Não é motivação. É protocolo. 21 dias de hipertrofia, já montado. Sem
        enrolação.
      </p>
      <div className="enter enter-4 mt-7">
        <Cta />
      </div>
    </section>
  );
}

function Proof() {
  return (
    <section className="border-b border-border py-6">
      <a
        href={offer.instagramUrl}
        target="_blank"
        rel="noreferrer"
        className="flex items-center justify-between gap-3 transition-colors hover:text-accent"
      >
        <p className="font-display text-xl font-extrabold uppercase tracking-tight">
          {offer.followers}{" "}
          <span className="text-muted">acompanham o método</span>
        </p>
        <span className="shrink-0 font-mono text-2xs tracking-[0.18em] text-accent">
          {offer.handle} →
        </span>
      </a>
    </section>
  );
}

function Deliverables() {
  return (
    <section className="border-b border-border py-8">
      <p className="font-mono text-2xs tracking-[0.28em] text-accent">
        O QUE VOCÊ RECEBE
      </p>
      <ul className="mt-5 space-y-4">
        {bullets.map((item) => (
          <li key={item.id} className="flex gap-4 border border-border bg-surface p-4">
            <span
              className="mt-0.5 grid size-6 shrink-0 place-items-center bg-accent text-accent-fg"
              aria-hidden="true"
            >
              <Check className="size-3.5" strokeWidth={3} />
            </span>
            <div>
              <p className="font-display text-lg font-extrabold uppercase tracking-tight">
                {item.title}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-muted">{item.body}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

function PriceBlock() {
  return (
    <section id="comprar" className="scroll-mt-20 border-b border-border py-8">
      <p className="font-mono text-2xs tracking-[0.28em] text-accent">
        PREÇO DE ENTRADA
      </p>
      <p className="mt-3 text-sm text-muted">
        Consultoria custa centenas. O protocolo custa um lanche.
      </p>
      <div className="mt-5 flex items-end gap-3">
        <p className="font-display text-5xl font-extrabold leading-none tracking-tight text-accent">
          R${offer.price}
        </p>
        <p className="mb-1 font-mono text-2xs uppercase tracking-[0.16em] text-muted">
          acesso único · sem mensalidade
        </p>
      </div>
      <div className="mt-6">
        <Cta />
      </div>
      <p className="mt-4 flex items-center gap-2 text-xs text-muted">
        <ShieldCheck className="size-4 shrink-0 text-accent" strokeWidth={2} />
        {offer.guarantee}
      </p>
    </section>
  );
}

function Faq() {
  return (
    <section className="border-b border-border py-8">
      <p className="font-mono text-2xs tracking-[0.28em] text-accent">DÚVIDAS</p>
      <div className="mt-5 divide-y divide-border border border-border">
        {faqs.map((item) => (
          <details key={item.q} className="group px-4 py-3">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-3 font-display text-lg font-bold uppercase tracking-tight [&::-webkit-details-marker]:hidden">
              {item.q}
              <span
                className="font-mono text-accent transition-transform duration-150 group-open:rotate-45"
                aria-hidden="true"
              >
                +
              </span>
            </summary>
            <p className="mt-2 pb-1 text-sm leading-relaxed text-muted">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="py-10">
      <h2 className="font-display text-4xl font-extrabold uppercase leading-[0.9] tracking-tight">
        21 dias.
        <br />
        R${offer.price}.
        <br />
        Sem enrolação.
      </h2>
      <div className="mt-6">
        <Cta />
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative border-t border-border">
      <div className="mx-auto flex max-w-xl flex-col gap-3 px-5 py-8">
        <p className="font-display text-sm font-extrabold tracking-[0.1em]">
          MTS<span className="text-accent">FIT</span>
        </p>
        <a
          href={offer.instagramUrl}
          target="_blank"
          rel="noreferrer"
          className="w-fit font-mono text-2xs tracking-[0.18em] text-muted hover:text-fg"
        >
          {offer.handle} · Instagram
        </a>
        <p className="text-[11px] leading-relaxed text-faint">
          Material educacional. Não substitui avaliação médica, orientação de
          profissional de Educação Física ou acompanhamento nutricional.
          Resultados variam. © 2026 Matheus Scherer.
        </p>
      </div>
    </footer>
  );
}

function StickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-bg/95 p-3 backdrop-blur-md md:hidden">
      <Button asChild size="xl" className="w-full">
        <a href={offer.checkoutUrl}>
          {offer.cta}
          <span className="font-mono text-xs tracking-normal">R${offer.price}</span>
        </a>
      </Button>
    </div>
  );
}

function Cta() {
  return (
    <Button asChild size="xl">
      <a href={offer.checkoutUrl}>
        {offer.cta}
        <ArrowRight className="size-4" strokeWidth={2.4} />
      </a>
    </Button>
  );
}
