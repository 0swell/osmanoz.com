"use client";

import { Copy } from "lucide-react";
import { toast } from "sonner";

export function CopyEmailButton({ email }: { email: string }) {
  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      toast.success("E-posta panoya kopyalandı");
    } catch {
      toast.error("Kopyalanamadı");
    }
  }
  return (
    <button
      onClick={copy}
      className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors cursor-pointer"
    >
      <Copy size={14} />
      {email}
    </button>
  );
}
