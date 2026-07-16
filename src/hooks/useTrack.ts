"use client";

import { useCallback } from "react";
import type { TrackEvent } from "@/types";

/**
 * Analitik eventi /api/track'e sendBeacon ile gönderir.
 * Aynı oturumda aynı event tekrarlanmaz (sayaç şişmesin diye sessionStorage dedupe).
 */
export function useTrack() {
  return useCallback((event: TrackEvent) => {
    const key = `tracked:${event.type}:${event.projectId ?? "-"}`;
    try {
      if (sessionStorage.getItem(key)) return;
      sessionStorage.setItem(key, "1");
    } catch {
      // sessionStorage kapalıysa dedupe olmadan devam et
    }
    const body = JSON.stringify(event);
    if (navigator.sendBeacon) {
      navigator.sendBeacon("/api/track", new Blob([body], { type: "application/json" }));
    } else {
      fetch("/api/track", { method: "POST", body, keepalive: true });
    }
  }, []);
}
