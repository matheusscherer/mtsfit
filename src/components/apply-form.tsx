"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { submitLead } from "@/lib/leads";
import { goals } from "@/data/protocol";
import { cn } from "@/lib/utils";

const fieldClass =
  "h-12 w-full border border-border bg-bg px-3 text-sm text-fg outline-none transition-colors placeholder:text-faint focus:border-accent";

export function ApplyForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "err">(
    "idle",
  );
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    setStatus("sending");
    setError("");
    try {
      const result = await submitLead({
        data: {
          name: String(fd.get("name") ?? ""),
          email: String(fd.get("email") ?? ""),
          instagram: String(fd.get("instagram") ?? ""),
          goal: String(fd.get("goal") ?? ""),
          website: String(fd.get("website") ?? ""),
        },
      });
      if (!result.ok) {
        setStatus("err");
        setError(result.error);
        return;
      }
      setStatus("ok");
      form.reset();
    } catch (err) {
      setStatus("err");
      setError(err instanceof Error ? err.message : "Não foi possível enviar.");
    }
  }

  if (status === "ok") {
    return (
      <div
        className="border border-accent bg-surface px-6 py-10"
        role="status"
      >
        <p className="font-mono text-xs tracking-[0.24em] text-accent">
          RECEBIDO
        </p>
        <p className="mt-3 font-display text-3xl font-extrabold uppercase leading-none">
          Se fizer sentido, o próximo passo chega.
        </p>
        <p className="mt-4 max-w-sm text-sm text-muted">
          Sem sequência automática. Sem enrolação.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4" noValidate>
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
        aria-hidden="true"
      />
      <label className="grid gap-1.5">
        <span className="font-mono text-2xs uppercase tracking-[0.18em] text-muted">
          Nome
        </span>
        <input
          name="name"
          required
          minLength={2}
          autoComplete="name"
          placeholder="Seu nome"
          className={fieldClass}
        />
      </label>
      <label className="grid gap-1.5">
        <span className="font-mono text-2xs uppercase tracking-[0.18em] text-muted">
          E-mail
        </span>
        <input
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="seu@email.com"
          className={fieldClass}
        />
      </label>
      <label className="grid gap-1.5">
        <span className="font-mono text-2xs uppercase tracking-[0.18em] text-muted">
          Instagram
        </span>
        <input
          name="instagram"
          autoComplete="off"
          placeholder="@usuario"
          className={fieldClass}
        />
      </label>
      <label className="grid gap-1.5">
        <span className="font-mono text-2xs uppercase tracking-[0.18em] text-muted">
          Objetivo
        </span>
        <select name="goal" defaultValue="" className={cn(fieldClass, "pr-8")}>
          <option value="" disabled>
            Selecione
          </option>
          {goals.map((g) => (
            <option key={g} value={g}>
              {g}
            </option>
          ))}
        </select>
      </label>
      {status === "err" && (
        <p className="text-sm text-accent" role="alert">
          {error || "Não foi possível enviar. Tente de novo."}
        </p>
      )}
      <Button type="submit" size="lg" disabled={status === "sending"}>
        {status === "sending" ? "Enviando…" : "Quero começar"}
      </Button>
    </form>
  );
}
