import { prisma } from "@/lib/prisma";
import type { Project } from "@prisma/client";

/** DB erişilemezse (örn. lokal kurulumda Neon bağlanmadan önce) site boş veriyle ayakta kalır. */
export async function getActiveProjects(): Promise<Project[]> {
  try {
    return await prisma.project.findMany({
      where: { isActive: true },
      orderBy: { order: "asc" },
    });
  } catch {
    return [];
  }
}

export async function getCvDownloadCount(): Promise<number> {
  try {
    return await prisma.analytics.count({ where: { eventType: "CV_DOWNLOAD" } });
  } catch {
    return 0;
  }
}

export async function getCvUrl(): Promise<string | null> {
  try {
    const row = await prisma.settings.findUnique({ where: { key: "cv_url" } });
    return row?.value ?? null;
  } catch {
    return null;
  }
}
