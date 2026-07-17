"use server";

import { revalidatePath } from "next/cache";
import { getServerSession } from "next-auth";
import { put, del } from "@vercel/blob";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

async function requireAdmin() {
  const session = await getServerSession(authOptions);
  if (!session) throw new Error("Yetkisiz işlem");
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[ğüşıöç]/g, (c) => ({ ğ: "g", ü: "u", ş: "s", ı: "i", ö: "o", ç: "c" })[c] ?? c)
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export async function saveProject(formData: FormData) {
  await requireAdmin();
  const id = formData.get("id") as string | null;
  const title = (formData.get("title") as string).trim();
  const data = {
    title,
    slug: slugify(title),
    desc: (formData.get("desc") as string).trim(),
    techStack: (formData.get("techStack") as string)
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean),
    links: {
      github: (formData.get("github") as string)?.trim() || undefined,
      live: (formData.get("live") as string)?.trim() || undefined,
    },
    order: Number(formData.get("order") ?? 0),
    isActive: formData.get("isActive") === "on",
  };

  if (id) {
    await prisma.project.update({ where: { id }, data });
  } else {
    await prisma.project.create({ data });
  }
  revalidatePath("/");
  revalidatePath("/admin/dashboard");
}

export async function deleteProject(formData: FormData) {
  await requireAdmin();
  const id = formData.get("id") as string;
  await prisma.project.delete({ where: { id } });
  revalidatePath("/");
  revalidatePath("/admin/dashboard");
}

export async function uploadCv(formData: FormData) {
  await requireAdmin();
  const file = formData.get("cv") as File;
  if (!file || file.type !== "application/pdf") {
    throw new Error("Sadece PDF yüklenebilir");
  }
  // Eski dosya Blob'da yetim kalmasın: önce sil, sonra yenisini yükle
  const old = await prisma.settings.findUnique({ where: { key: "cv_url" } });
  if (old) await del(old.value).catch(() => {});
  // Dosya, yüklendiği isimle saklanır — indirme de aynı isimle iner (örn. Resume-OsmanOz.pdf)
  const blob = await put(`cv/${file.name}`, file, {
    access: "public",
    addRandomSuffix: false,
    allowOverwrite: true,
  });
  await prisma.settings.upsert({
    where: { key: "cv_url" },
    update: { value: blob.url },
    create: { key: "cv_url", value: blob.url },
  });
  revalidatePath("/");
  revalidatePath("/admin/dashboard");
}

export async function deleteCv() {
  await requireAdmin();
  const old = await prisma.settings.findUnique({ where: { key: "cv_url" } });
  if (old) {
    await del(old.value).catch(() => {});
    await prisma.settings.delete({ where: { key: "cv_url" } });
  }
  revalidatePath("/");
  revalidatePath("/admin/dashboard");
}
