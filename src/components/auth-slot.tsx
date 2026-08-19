"use client";

import { Link } from "@tanstack/react-router";
import { authEnabled, signOut } from "@/lib/auth/client";
import { useCurrentUserState } from "@/lib/auth/use-current-user";

export function AuthSlot() {
  const { user, isPending } = useCurrentUserState();

  if (isPending) {
    return (
      <div
        className="h-8 w-8 shrink-0 animate-pulse rounded-full bg-surface-2"
        aria-hidden="true"
      />
    );
  }

  if (!user) {
    return (
      <Link
        to="/login"
        className="hidden text-xs font-medium uppercase tracking-[0.16em] text-muted transition-colors hover:text-fg md:inline"
      >
        Entrar
      </Link>
    );
  }

  const label = user.displayName ?? user.primaryEmail ?? "Conta";

  return (
    <div className="flex items-center gap-2">
      {user.profileImageUrl ? (
        <img
          src={user.profileImageUrl}
          alt=""
          className="size-8 rounded-full object-cover"
        />
      ) : (
        <span className="grid size-8 place-items-center rounded-full bg-surface-2 font-display text-sm font-bold text-accent">
          {label.charAt(0).toUpperCase()}
        </span>
      )}
      <span className="hidden max-w-28 truncate text-xs font-medium text-fg sm:inline">
        {label}
      </span>
      {authEnabled && (
        <button
          type="button"
          onClick={() => void signOut()}
          className="text-xs uppercase tracking-[0.14em] text-muted hover:text-fg"
        >
          Sair
        </button>
      )}
    </div>
  );
}
