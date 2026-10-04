import { useCallback, useEffect, useId, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useInView, useReducedMotion } from "motion/react";
import { ArrowUpRight, X } from "lucide-react";

import type { Project } from "../data/projects";

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;
const PAPER_COUNT = 5;
const CATEGORY_LABELS: Record<string, string> = {
  web: "Web app",
  esports: "Esports",
  bots: "Automation",
  community: "Community",
};

function useImagePositions() {
  return useMemo(() => {
    const totalSpread = 118;
    const step = totalSpread / (PAPER_COUNT - 1);
    const startX = -totalSpread / 2;
    const tilt = 7;

    return Array.from({ length: PAPER_COUNT }, (_, index) => {
      const x = startX + step * index;
      const normalized = (index / (PAPER_COUNT - 1)) * 2 - 1;
      return { x, rotate: normalized * tilt };
    });
  }, []);
}

export default function ProjectFolders({ projects }: { projects: Project[] }) {
  const [openProject, setOpenProject] = useState<Project | null>(null);
  const closeProject = useCallback(() => setOpenProject(null), []);

  return (
    <>
      <div className="project-folders">
        {projects.map((project) => (
          <WorkFolder key={project.id} project={project} onOpen={() => setOpenProject(project)} />
        ))}
      </div>
      <ProjectSheet project={openProject} onClose={closeProject} />
    </>
  );
}

function WorkFolder({ project, onOpen }: { project: Project; onOpen: () => void }) {
  const folderRef = useRef<HTMLButtonElement>(null);
  const visible = useInView(folderRef, { once: true, margin: "300px" });
  const [hovered, setHovered] = useState(false);
  const positions = useImagePositions();
  const reduce = useReducedMotion();
  const active = hovered && !reduce;
  const category = CATEGORY_LABELS[project.category] ?? project.category;

  return (
    <motion.button
      ref={folderRef}
      type="button"
      aria-label={`Open ${project.title}`}
      id={`project-${project.id}`}
      className="project-folder"
      style={{ perspective: 1200, zIndex: active ? 40 : 1, transformStyle: "preserve-3d" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      onClick={onOpen}
      whileTap={reduce ? undefined : { scale: 0.985 }}
      animate={{
        y: active ? -6 : 0,
        filter: active
          ? "drop-shadow(0 28px 40px rgba(0,0,0,0.55))"
          : "drop-shadow(0 14px 22px rgba(0,0,0,0.28))",
      }}
      transition={{ type: "spring", stiffness: 260, damping: 24, mass: 0.7 }}
    >
      <div className="project-folder__stage" style={{ perspective: 1200 }}>
        <motion.div
          className="project-folder__cover"
          animate={{ rotateX: active ? 16 : 0, backgroundColor: active ? "#181817" : "#151514" }}
          transition={{
            rotateX: { type: "spring", stiffness: 200, damping: 25, mass: 0.8 },
            backgroundColor: { duration: 0.25, ease: EASE_OUT_EXPO },
          }}
          style={{ transformStyle: "preserve-3d", transformOrigin: "center bottom" }}
        >
          <motion.div
            className="project-folder__papers"
            animate={{ rotateX: active ? -16 : 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 25, mass: 0.8 }}
            style={{ transformStyle: "flat", transformOrigin: "center bottom" }}
          >
            {visible && positions.map((position, index) => {
              const centerIndex = 2;
              const distance = Math.abs(index - centerIndex);
              const zIndex = 10 - distance;
              const yOffset = -10 * (1 - distance / centerIndex) || 0;
              const scale = distance === 0 ? 1.05 : distance === 1 ? 0.96 : 0.9;
              const x = active ? position.x * 1.28 : position.x;
              const y = active ? -8 + yOffset : 14 + yOffset;
              const rotation = active ? position.rotate * 1.25 : position.rotate * 0.85;
              const finalScale = active ? scale * 1.02 : scale;
              const opacity = distance === 0 ? 1 : distance === 1 ? 0.88 : 0.7;

              return (
                <motion.div
                  key={index}
                  className="project-folder__paper-position"
                  initial={false}
                  animate={{
                    x: `calc(-50% + ${x}px)`,
                    y,
                    rotate: rotation,
                    scale: finalScale,
                    opacity,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 120,
                    damping: 16,
                    mass: 0.9,
                    delay: reduce ? 0 : distance * 0.035,
                  }}
                  style={{ zIndex }}
                >
                  <div className="project-folder__paper-frame">
                    <div className="project-folder__paper">
                      {project.image ? (
                        <img src={project.image} alt="" loading="lazy" />
                      ) : (
                        <div className="project-folder__paper-placeholder">{project.title}</div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        <motion.div
          className="project-folder__label"
          animate={{
            rotateX: active ? -26 : 0,
            backgroundColor: active ? "rgba(16,16,15,0.92)" : "rgba(14,14,13,0.88)",
          }}
          transition={{
            rotateX: { type: "spring", stiffness: 180, damping: 22, mass: 0.8 },
            backgroundColor: { duration: 0.25, ease: EASE_OUT_EXPO },
          }}
          style={{
            backdropFilter: "blur(18px)",
            WebkitBackdropFilter: "blur(18px)",
            transformStyle: "preserve-3d",
            transformOrigin: "center bottom",
          }}
        >
          <div className="project-folder__title-area">
            <h3>{project.title}</h3>
          </div>
          <div className="project-folder__meta">
            <span className="project-folder__description">{project.subtitle ?? project.description}</span>
            <span className="project-folder__category">{category}</span>
          </div>
        </motion.div>
      </div>
    </motion.button>
  );
}

function ProjectSheet({ project, onClose }: { project: Project | null; onClose: () => void }) {
  const titleId = useId();
  const dialogRef = useRef<HTMLElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!project) return;

    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;
      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      previousFocus?.focus();
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div className="project-sheet" initial={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <motion.button
            type="button"
            aria-label="Close project details"
            className="project-sheet__backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: EASE_OUT_EXPO }}
            onClick={onClose}
          />
          <motion.article
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            tabIndex={-1}
            className="project-sheet__panel"
            initial={{ opacity: 0, y: 28, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.28, ease: [0.32, 0.72, 0, 1] }}
          >
            <div className="project-sheet__header">
              <div>
                <p className="project-sheet__eyebrow">
                  {CATEGORY_LABELS[project.category] ?? project.category}
                </p>
                <h3 id={titleId}>{project.title}</h3>
              </div>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={onClose}
                className="project-sheet__close"
                aria-label="Close"
              >
                <X aria-hidden="true" size={16} strokeWidth={1.75} />
              </button>
            </div>

            <p className="project-sheet__description">{project.description}</p>

            {project.stack.length > 0 && (
              <ul className="project-sheet__tags" aria-label="Technologies">
                {project.stack.map((technology) => <li key={technology}>{technology}</li>)}
              </ul>
            )}

            {project.url && (
              <div className="project-sheet__links">
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  Open project
                  <ArrowUpRight aria-hidden="true" size={14} strokeWidth={1.75} />
                </a>
              </div>
            )}
          </motion.article>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
