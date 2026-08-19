import { createServerFn } from "@tanstack/react-start";
import { getSql } from "@/lib/db";

export type LeadInput = {
  name: string;
  email: string;
  instagram?: string;
  goal?: string;
  website?: string;
};

export type LeadResult = { ok: true } | { ok: false; error: string };

function parseLead(input: LeadInput): LeadInput {
  const name = input.name.trim();
  const email = input.email.trim().toLowerCase();
  const instagram = (input.instagram ?? "").trim().replace(/^@/, "").slice(0, 80);
  const goal = (input.goal ?? "").trim().slice(0, 80);
  const website = (input.website ?? "").trim();
  if (name.length < 2 || name.length > 80) {
    throw new Error("Informe um nome válido.");
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 160) {
    throw new Error("Informe um e-mail válido.");
  }
  return { name, email, instagram, goal, website };
}

export const submitLead = createServerFn({ method: "POST" })
  .validator((input: LeadInput) => parseLead(input))
  .handler(async ({ data }): Promise<LeadResult> => {
    if (data.website) return { ok: true };

    const sql = await getSql();
    await sql`
      insert into leads (name, email, instagram, goal)
      values (${data.name}, ${data.email}, ${data.instagram || null}, ${data.goal || null})
      on conflict (email) do update set
        name = excluded.name,
        instagram = excluded.instagram,
        goal = excluded.goal
    `;
    return { ok: true };
  });
