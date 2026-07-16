"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";

/**
 * Scroll-stack (CLAUDE.md madde 2): 3 section sticky katman olarak üst üste durur;
 * scroll ettikçe üstteki katman yukarı kalkar, alttaki ortaya çıkar.
 * Z sırası: S1 en üstte, S3 en altta. Reduced-motion'da normal akışa döner.
 */
export function ScrollStack({
  sections,
}: {
  sections: [React.ReactNode, React.ReactNode, React.ReactNode];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  // Hydration uyumu: ilk client render her zaman server ile aynı (animasyonlu) yapıyı basar;
  // reduced-motion düzeni ancak mount sonrasında devreye girer.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const y0 = useTransform(scrollYProgress, [0, 0.5], ["0%", "-100%"]);
  const y1 = useTransform(scrollYProgress, [0.5, 1], ["0%", "-100%"]);

  if (mounted && reduceMotion) {
    return (
      <div>
        {sections.map((s, i) => (
          <div key={i} className="min-h-screen border-b-2 border-line">
            {s}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div ref={ref} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div
          style={{ y: y0 }}
          className="absolute inset-0 z-30 border-b-2 border-line bg-background"
        >
          {sections[0]}
        </motion.div>
        <motion.div
          style={{ y: y1 }}
          className="absolute inset-0 z-20 border-b-2 border-line bg-background overflow-y-auto"
        >
          {sections[1]}
        </motion.div>
        <div className="absolute inset-0 z-10 bg-background overflow-y-auto">
          {sections[2]}
        </div>
      </div>
    </div>
  );
}
