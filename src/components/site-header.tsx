import { Link } from "@tanstack/react-router";
import { AuthSlot } from "@/components/auth-slot";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#metodo", label: "Método" },
  { href: "#diagnostico", label: "Diagnóstico" },
  { href: "#formulario", label: "Começar" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a
          href="#topo"
          className="font-display text-xl font-extrabold tracking-[0.08em] text-fg"
        >
          SCHERER <span className="text-accent">METHOD</span>
        </a>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Seções">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs font-medium uppercase tracking-[0.16em] text-muted transition-colors hover:text-fg"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <AuthSlot />
          <Button asChild size="sm">
            <a href="#formulario">Diagnóstico</a>
          </Button>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-display text-lg font-extrabold tracking-[0.08em]">
            SCHERER <span className="text-accent">METHOD</span>
          </p>
          <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted">
            Porto Alegre · @mtscfit
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:items-end">
          <div className="flex gap-5 text-xs uppercase tracking-[0.16em] text-muted">
            <a
              href="https://www.instagram.com/mtscfit/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-fg"
            >
              Instagram
            </a>
            <Link to="/login" className="hover:text-fg">
              Conta
            </Link>
          </div>
          <p className="max-w-md text-[11px] leading-relaxed text-faint sm:text-right">
            © 2026 Matheus Scherer. Conteúdo educacional. Não substitui
            orientação de profissional de saúde habilitado.
          </p>
        </div>
      </div>
    </footer>
  );
}
