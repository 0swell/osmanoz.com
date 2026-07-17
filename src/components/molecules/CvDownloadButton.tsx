"use client";

import { Download } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/atoms/Button";
import { useTrack } from "@/hooks/useTrack";

type Props = {
  cvUrl: string | null;
  label: string;
  downloadingText: string;
  unavailableText: string;
};

export function CvDownloadButton({ cvUrl, label, downloadingText, unavailableText }: Props) {
  const track = useTrack();

  function download() {
    if (!cvUrl) {
      toast.error(unavailableText);
      return;
    }
    track({ type: "CV_DOWNLOAD" });
    toast.success(downloadingText);
    window.open(cvUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <Button onClick={download} className="text-base px-6 py-3">
      <Download size={18} />
      {label}
    </Button>
  );
}
