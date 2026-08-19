"use client";

import { createFileRoute, Link } from "@tanstack/react-router";
import { GROK_PROVIDERS, authEnabled, signIn } from "@/lib/auth/client";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/login")({ component: Login });

function Login() {
  return (
    <main className="grid min-h-screen place-items-center bg-bg px-5 text-fg">
      <div className="w-full max-w-sm">
        <Link
          to="/"
          className="font-display text-xl font-extrabold tracking-[0.08em]"
        >
          SCHERER <span className="text-accent">METHOD</span>
        </Link>
        <h1 className="mt-10 font-display text-4xl font-extrabold uppercase leading-none tracking-tight">
          Entrar
        </h1>
        <p className="mt-3 text-sm text-muted">
          Acesse sua conta para acompanhar o método.
        </p>
        <div className="mt-8 grid gap-3">
          {authEnabled ? (
            GROK_PROVIDERS.map((p) => (
              <Button
                key={p.providerId}
                type="button"
                variant="ghost"
                size="lg"
                className="w-full"
                onClick={() => signIn(p.providerId, { callbackURL: "/" })}
              >
                Continuar com {p.label}
              </Button>
            ))
          ) : (
            <p className="text-sm text-muted">Entrada desativada.</p>
          )}
        </div>
        <Link
          to="/"
          className="mt-8 inline-block text-xs uppercase tracking-[0.16em] text-muted hover:text-fg"
        >
          Voltar
        </Link>
      </div>
    </main>
  );
}
