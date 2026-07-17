"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronDown, ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { Badge } from "@/components/atoms/Badge";
import { useTrack } from "@/hooks/useTrack";
import type { ProjectLinks } from "@/types";

type Props = {
  id: string;
  title: string;
  desc: string;
  techStack: string[];
  links: ProjectLinks;
};

export function ProjectCard({ id, title, desc, techStack, links }: Props) {
  const [open, setOpen] = useState(false);
  const track = useTrack();
  const reduceMotion = useReducedMotion();

  function toggle() {
    setOpen((o) => !o);
    track({ type: "CARD_CLICK", projectId: id });
  }

  return (
    <article className="rounded-2xl border-2 border-line bg-surface p-5 transition-colors hover:border-accent">
      <button
        onClick={toggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-3 text-left cursor-pointer"
      >
        <h3 className="font-display text-lg font-semibold line-clamp-1">{title}</h3>
        <ChevronDown
          size={18}
          className={`shrink-0 text-muted transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={reduceMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            {/* Sabit yükseklik: tüm açık kartlarda linkler ve rozetler aynı hizada kalır */}
            <p className="mt-3 text-sm leading-relaxed text-muted line-clamp-4 min-h-[5.75rem]">{desc}</p>
            <div className="mt-4 flex items-center gap-3 min-h-5">
              {links.github && (
                <a
                  href={links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-accent transition-colors"
                >
                  <SiGithub size={14} /> Kod
                </a>
              )}
              {links.live && (
                <a
                  href={links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-accent transition-colors"
                >
                  <ExternalLink size={14} /> Canlı
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-4 flex flex-wrap content-start gap-2 min-h-14">
        {techStack.map((t) => (
          <Badge key={t}>{t}</Badge>
        ))}
      </div>
    </article>
  );
}
