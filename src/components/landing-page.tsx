import { Button } from "@/components/ui/button";
import { DayMark } from "@/components/day-mark";
import { Reveal } from "@/components/reveal";
import { bullets, offer, steps } from "@/data/offer";

export function LandingPage() {
  return (
    <div id="topo" className="relative min-h-svh overflow-x-hidden bg-bg pb-24 md:pb-0">
      <Header />
      <main className="relative mx-auto max-w-xl px-5">
        <Hero />
        <Proof />
        <Deliverables />
        <How />
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
          className="text-sm font-semibold tracking-[0.22em] uppercase"
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
            <a href={offer.checkoutUrl}>R${offer.price}</a>
          </Button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="border-b border-border py-9">
      <h1 className="hero-in font-display text-hero font-black leading-[0.92] tracking-tight">
        6 mil veem o shape.
        <br />
        Quase ninguém vê
        <br />
        o que <span className="text-accent">eu faço.</span>
      </h1>
      <div className="hero-in hero-in-2">
        <p className="mt-5 max-w-[18rem] text-sm leading-relaxed text-muted">
          21 dias no meu protocolo. Treino. Comida. Rotina. De R$
          {offer.priceFrom} por R${offer.price}.
        </p>
        <div className="mt-6">
          <Cta label={offer.ctaHero} />
          <p className="mt-3 text-xs text-muted">{offer.guarantee}</p>
        </div>
      </div>
    </section>
  );
}

function Proof() {
  return (
    <Reveal className="border-b border-border py-9">
      <p className="font-mono text-2xs tracking-[0.28em] text-muted">A PROVA</p>
      <p className="mt-3 font-display text-4xl font-extrabold leading-[0.95] tracking-tight">
        O protocolo é o que eu sigo.
        <br />
        O shape é a prova.
      </p>
      <a
        href={offer.instagramUrl}
        target="_blank"
        rel="noreferrer"
        className="mt-5 flex items-center justify-between gap-3 text-sm text-muted transition-colors hover:text-fg"
      >
        <span>
          {offer.followers} no Instagram. Abre e confere.
        </span>
        <span className="shrink-0 font-mono text-2xs tracking-[0.18em] text-accent">
          {offer.handle} →
        </span>
      </a>
    </Reveal>
  );
}

function Deliverables() {
  return (
    <Reveal className="border-b border-border py-9">
      <p className="font-mono text-2xs tracking-[0.28em] text-muted">
        O QUE VOCÊ RECEBE
      </p>
      <div className="mt-6">
        <DayMark />
      </div>
      <ul className="mt-8 space-y-5">
        {bullets.map((item) => (
          <li key={item.id} className="border-l-2 border-accent pl-4">
            <p className="font-display text-2xl font-extrabold leading-tight tracking-tight">
              {item.title}
            </p>
            <p className="mt-1 text-sm text-muted">{item.body}</p>
          </li>
        ))}
      </ul>
    </Reveal>
  );
}

function How() {
  return (
    <Reveal className="border-b border-border py-9">
      <p className="font-mono text-2xs tracking-[0.28em] text-muted">
        COMO ENTRA
      </p>
      <ol className="mt-5 grid grid-cols-3 gap-2">
        {steps.map((step) => (
          <li key={step.id} className="border border-border bg-surface px-3 py-3">
            <p className="font-mono text-2xs tracking-[0.18em] text-muted">
              {step.id}
            </p>
            <p className="mt-2 font-display text-lg font-extrabold leading-tight tracking-tight">
              {step.title}
            </p>
          </li>
        ))}
      </ol>
    </Reveal>
  );
}

function FinalCta() {
  return (
    <Reveal className="py-10">
      <h2 className="font-display text-4xl font-extrabold leading-[0.95] tracking-tight">
        Quer o shape?
        <br />
        Paga o <span className="text-heat">dia a dia.</span>
      </h2>
      <div className="mt-6">
        <Cta label={offer.ctaFinal} />
        <p className="mt-3 text-xs text-muted">
          De R${offer.priceFrom} por R${offer.price}.
        </p>
      </div>
    </Reveal>
  );
}

function Footer() {
  return (
    <footer className="relative border-t border-border">
      <div className="mx-auto flex max-w-xl flex-col gap-3 px-5 py-8">
        <p className="text-sm font-semibold tracking-[0.22em] uppercase">
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
          {offer.ctaPrice}
          <span className="font-mono text-xs tracking-normal">R${offer.price}</span>
        </a>
      </Button>
    </div>
  );
}

function Cta({ label }: { label: string }) {
  return (
    <Button asChild size="xl">
      <a href={offer.checkoutUrl}>
        {label}
        <span className="font-mono text-xs tracking-normal">R${offer.price}</span>
      </a>
    </Button>
  );
}
