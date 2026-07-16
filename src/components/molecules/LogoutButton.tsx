"use client";

import { signOut } from "next-auth/react";
import { LogOut } from "lucide-react";

export function LogoutButton() {
  return (
    <button
      onClick={() => signOut({ callbackUrl: "/" })}
      className="inline-flex items-center gap-2 rounded-xl px-3 py-1.5 text-sm text-muted hover:bg-elevated hover:text-foreground transition-colors cursor-pointer"
    >
      <LogOut size={16} />
      Çıkış
    </button>
  );
}
