import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  let body: { type?: string; projectId?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Geçersiz istek" }, { status: 400 });
  }

  if (body.type !== "CARD_CLICK" && body.type !== "CV_DOWNLOAD") {
    return NextResponse.json({ error: "Geçersiz event tipi" }, { status: 400 });
  }

  try {
    await prisma.analytics.create({
      data: {
        eventType: body.type,
        projectId: body.type === "CARD_CLICK" ? body.projectId : undefined,
      },
    });
    if (body.type === "CARD_CLICK" && body.projectId) {
      await prisma.project.update({
        where: { id: body.projectId },
        data: { clickCount: { increment: 1 } },
      });
    }
  } catch {
    // DB hatası ziyaretçi deneyimini etkilemesin
  }

  return NextResponse.json({ ok: true });
}
