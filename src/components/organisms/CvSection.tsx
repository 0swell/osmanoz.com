import { getCvDownloadCount, getCvUrl } from "@/lib/data";
import { CvDownloadButton } from "@/components/molecules/CvDownloadButton";
import { SectionHeading } from "@/components/atoms/SectionHeading";
import { formatNumber } from "@/utils/format";

export async function CvSection() {
  const [count, cvUrl] = await Promise.all([getCvDownloadCount(), getCvUrl()]);

  return (
    <section
      aria-label="Profil ve CV"
      className="flex min-h-screen items-center px-4 py-24"
    >
      <div className="mx-auto w-full max-w-2xl">
        <div className="rounded-3xl border-2 border-line bg-surface/70 p-8 backdrop-blur-md sm:p-12 text-center">
          <SectionHeading>Profil &amp; CV</SectionHeading>
          <p className="mt-4 leading-relaxed text-muted">
            Kim olduğumu, ne yaptığımı ve bugüne kadarki deneyimimi merak
            ediyorsan CV&apos;mi indirebilirsin.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3">
            <CvDownloadButton cvUrl={cvUrl} />
            {count > 0 && (
              <p className="text-xs text-muted">
                Bugüne kadar <span className="font-semibold text-accent">{formatNumber(count)}</span> kez indirildi
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
