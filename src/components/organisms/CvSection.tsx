import { getCvDownloadCount, getCvUrl } from "@/lib/data";
import { CvDownloadButton } from "@/components/molecules/CvDownloadButton";
import { SectionHeading } from "@/components/atoms/SectionHeading";
import { formatNumber } from "@/utils/format";
import type { Dictionary } from "@/i18n/dictionaries";

export async function CvSection({ dict }: { dict: Dictionary }) {
  const [count, cvUrl] = await Promise.all([getCvDownloadCount(), getCvUrl()]);

  return (
    <section
      aria-label={dict.cv.title}
      className="flex min-h-screen items-center px-4 py-24"
    >
      <div className="mx-auto w-full max-w-2xl">
        <div className="rounded-3xl border-2 border-line bg-surface/70 p-8 backdrop-blur-md sm:p-12 text-center">
          <SectionHeading>{dict.cv.title}</SectionHeading>
          <p className="mt-4 leading-relaxed text-muted">{dict.cv.desc}</p>
          <div className="mt-8 flex flex-col items-center gap-3">
            <CvDownloadButton
              cvUrl={cvUrl}
              label={dict.cv.button}
              downloadingText={dict.cv.downloading}
              unavailableText={dict.cv.unavailable}
            />
            {count > 0 && (
              <p className="text-xs text-muted">
                {dict.cv.downloadedPrefix}{" "}
                <span className="font-semibold text-accent">{formatNumber(count)}</span>{" "}
                {dict.cv.downloadedSuffix}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
