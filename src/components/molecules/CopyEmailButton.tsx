"use client";

import { Copy } from "lucide-react";
import { toast } from "sonner";

type Props = {
  email: string;
  copiedText: string;
  failText: string;
};

export function CopyEmailButton({ email, copiedText, failText }: Props) {
  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      toast.success(copiedText);
    } catch {
      toast.error(failText);
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
