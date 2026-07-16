import { uploadCv } from "@/app/admin/actions";
import { Button } from "@/components/atoms/Button";
import { Upload } from "lucide-react";

export function CvUploadForm({ currentUrl }: { currentUrl: string | null }) {
  return (
    <div className="rounded-2xl border-2 border-line bg-surface p-5">
      <h3 className="font-display font-semibold">CV Dosyası</h3>
      <p className="mt-1 text-sm text-muted">
        {currentUrl ? (
          <a href={currentUrl} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
            Mevcut CV&apos;yi görüntüle
          </a>
        ) : (
          "Henüz CV yüklenmedi."
        )}
      </p>
      <form action={uploadCv} className="mt-4 flex flex-wrap items-center gap-3">
        <input
          name="cv"
          type="file"
          accept="application/pdf"
          required
          className="text-sm file:mr-3 file:rounded-xl file:border-0 file:bg-elevated file:px-3 file:py-2 file:text-sm file:cursor-pointer"
        />
        <Button type="submit">
          <Upload size={16} /> Yükle
        </Button>
      </form>
    </div>
  );
}
