"use client";

import { useState, Suspense } from "react";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { LogIn } from "lucide-react";
import { Button } from "@/components/atoms/Button";
import { Logo } from "@/components/atoms/Logo";

function LoginForm() {
  const router = useRouter();
  const params = useSearchParams();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const form = new FormData(e.currentTarget);
    const res = await signIn("credentials", {
      email: form.get("email"),
      password: form.get("password"),
      redirect: false,
    });
    setLoading(false);
    if (res?.error) {
      setError("E-posta veya şifre hatalı");
      return;
    }
    router.push(params.get("callbackUrl") ?? "/admin/dashboard");
  }

  return (
    <form
      onSubmit={onSubmit}
      className="w-full max-w-sm rounded-3xl border-2 border-line bg-surface/60 p-8 shadow-xl backdrop-blur-xl"
    >
      <Logo className="mx-auto mb-4 h-14 w-auto" />
      <h1 className="font-display text-2xl font-bold">Admin Girişi</h1>
      <p className="mt-1 text-sm text-muted">osmanoz.com yönetim paneli</p>

      <label className="mt-6 block text-sm font-medium">
        E-posta
        <input
          name="email"
          type="email"
          required
          autoComplete="username"
          className="mt-1 w-full rounded-xl border-2 border-line bg-background px-3 py-2 outline-none focus:border-accent"
        />
      </label>
      <label className="mt-4 block text-sm font-medium">
        Şifre
        <input
          name="password"
          type="password"
          required
          autoComplete="current-password"
          className="mt-1 w-full rounded-xl border-2 border-line bg-background px-3 py-2 outline-none focus:border-accent"
        />
      </label>

      {error && <p className="mt-3 text-sm text-red-500">{error}</p>}

      <Button type="submit" disabled={loading} className="mt-6 w-full justify-center">
        <LogIn size={16} />
        {loading ? "Giriş yapılıyor..." : "Giriş Yap"}
      </Button>
    </form>
  );
}

export default function LoginPage() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden px-4">
      <div
        aria-hidden
        className="absolute -top-32 left-1/4 size-96 rounded-full bg-accent/20 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-32 right-1/4 size-96 rounded-full bg-accent/10 blur-3xl"
      />
      <Suspense>
        <LoginForm />
      </Suspense>
    </div>
  );
}
