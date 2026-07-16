"use client";

import { Download } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/atoms/Button";
import { useTrack } from "@/hooks/useTrack";

export function CvDownloadButton({ cvUrl }: { cvUrl: string | null }) {
  const track = useTrack();

  function download() {
    if (!cvUrl) {
      toast.error("CV şu an mevcut değil");
      return;
    }
    track({ type: "CV_DOWNLOAD" });
    toast.success("CV indiriliyor");
    window.open(cvUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <Button onClick={download} className="text-base px-6 py-3">
      <Download size={18} />
      CV İndir
    </Button>
  );
}
