"use client";

import { Fragment, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, type Transition } from "framer-motion";
import LiquidMetalBackground from "@/components/ui/liquid-metal-background";
import IntroMontageBackground from "@/components/ui/intro-montage-background";
import Header from "@/components/layout/header";
import LeftNav from "@/components/layout/left-nav";
import Hero from "@/components/sections/hero";
import ResumePanel from "@/components/ui/resume-panel";
import Logo from "@/components/ui/logo";
import { AsciiCubes } from "@/components/ui/ascii-cubes";
import doorDashOldDashboard from "@/components/images/DoorDash Dashboard/DoorDash_OldDashboard 1.png";
import {
  CAPABILITIES,
  HOMEPAGE_EXPERIMENTS,
  HOMEPAGE_FLAGSHIPS,
  HOMEPAGE_PROJECTS,
  PROJECTS_BY_ID,
  SITE,
  cardProblem,
  homepageEyebrow,
  homepageEyebrowText,
  resultDetail,
  type Project,
  type ProjectResult,
} from "@/lib/content";

const PAYPAL_DE = PROJECTS_BY_ID.paypalde;
const PAYPAL = PROJECTS_BY_ID.paypal;
const META = PROJECTS_BY_ID.meta;
const SOLO = PROJECTS_BY_ID.solo;
const SUTTER = PROJECTS_BY_ID.sutter;
const DOORDASH = PROJECTS_BY_ID.doordash;

/**
 * Idle showreel timings, in seconds. With no pointer on the nav the homepage
 * plays the rollover panels itself, one project at a time in nav order.
 *
 * Every step is strictly sequential: the outgoing panel finishes its fade and
 * the band sits empty for GAP before the next project arrives, so two projects
 * are never on screen together. HOLD is measured at full opacity — the fades
 * sit either side of it rather than inside it, which is what takes a step to
 * five seconds and the full loop to thirty.
 */
const SHOWREEL = {
  /** Copy trails the image in by this much, so the panel resolves rather than appears. */
  COPY_LEAD: 0.15,
  FADE_IN: 0.9,
  HOLD: 3,
  FADE_OUT: 0.7,
  /**
   * Empty beat before a project arrives — long enough to also cover the hover
   * wipe, so letting go of the nav does not cut a panel in over a retreating one.
   */
  GAP: 0.6,
};

/** Symmetric curve, so neither end of a fade snaps. */
const SHOWREEL_EASE: [number, number, number, number] = [0.4, 0, 0.6, 1];

const SHOWREEL_LEAD_MS = SHOWREEL.GAP * 1000;
const SHOWREEL_ENTER_MS = (SHOWREEL.COPY_LEAD + SHOWREEL.FADE_IN) * 1000;
const SHOWREEL_EXIT_AT_MS =
  SHOWREEL_LEAD_MS + SHOWREEL_ENTER_MS + SHOWREEL.HOLD * 1000;
const SHOWREEL_STEP_MS = SHOWREEL_EXIT_AT_MS + SHOWREEL.FADE_OUT * 1000;

const SHOWREEL_IN: Transition = { duration: SHOWREEL.FADE_IN, ease: SHOWREEL_EASE };
const SHOWREEL_OUT: Transition = { duration: SHOWREEL.FADE_OUT, ease: SHOWREEL_EASE };

/**
 * The two modes a rollover panel plays in.
 *
 * `hover` is the original pointer reveal — the image wipes up from its bottom
 * edge and the copy lands behind it. `showreel` is a plain fade: nothing is
 * chasing a pointer there, and a wipe on an untouched page reads as a swipe at
 * the viewer rather than an answer to them.
 *
 * The shell carries no fade of its own in showreel mode. At 0.2s it would pull
 * the group out from under the children's longer one; AnimatePresence still
 * holds the unmount until the children have finished.
 */
const PANEL_MOTION = {
  hover: {
    shell: {
      initial: { opacity: 1 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 0.2 },
    },
    copy: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 0.35, delay: 0.25 },
    },
    image: {
      initial: { clipPath: "inset(100% 0% 0% 0%)" },
      animate: { clipPath: "inset(0% 0% 0% 0%)" },
      exit: { clipPath: "inset(100% 0% 0% 0%)" },
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    },
  },
  showreel: {
    shell: { initial: { opacity: 1 }, animate: { opacity: 1 }, exit: { opacity: 1 } },
    copy: {
      initial: { opacity: 0 },
      animate: { opacity: 1, transition: { ...SHOWREEL_IN, delay: SHOWREEL.COPY_LEAD } },
      exit: { opacity: 0, transition: SHOWREEL_OUT },
    },
    image: {
      initial: { opacity: 0 },
      animate: { opacity: 1, transition: SHOWREEL_IN },
      exit: { opacity: 0, transition: SHOWREEL_OUT },
    },
  },
};

/** Figures stacked in a rollover panel. Renders nothing when there are none. */
function PanelResults({ results }: { results: ProjectResult[] }) {
  return (
    <>
      {results.map((result) => (
        <div key={result.value} className="text-right">
          <p className="metric-figure text-white font-normal leading-none font-serif" style={{ fontSize: "58px" }}>
            {result.value}
          </p>
          <p className="metric-label text-white/70 text-[18px] font-light mt-3.5">
            {resultDetail(result)}
          </p>
        </div>
      ))}
    </>
  );
}

const FACT_LABEL_CLASS =
  "text-white/45 text-[11px] uppercase tracking-[0.18em] font-sans";

/**
 * The copy column beside a rollover image. One class for the three panels whose
 * art outmeasures their copy, so the measure stays identical whatever the image
 * beside it is doing: 350px, the narrowest the columns had grown to, sitting
 * 80px above the image's bottom edge rather than flush with it. The other three
 * take CENTERED_PANEL_COPY_CLASS below.
 *
 * Taken out of flow so the image alone sets the panel's height. Bottom-aligned
 * in the flex row the tallest child won, and a long problem statement made that
 * the text — which pushed the image down the screen and ran the whole group into
 * the headline below. Out of flow the image holds its position and the copy
 * grows upward into the empty band beside it. `right: 100% + 40px` puts the
 * column a 40px gutter clear of the image's left edge whatever its width.
 */
const PANEL_COPY_CLASS =
  "absolute bottom-[80px] right-[calc(100%+40px)] w-[350px]";

/**
 * The centered variant, for panels whose copy outgrows the image beside it.
 * The 80px bottom anchor only reads as an alignment while the column is the
 * shorter of the two; past that the text climbs out of the image's top edge and
 * runs at the nav. Centering on the image's vertical midpoint keeps the pair
 * visually tied however far the band clamps the art.
 *
 * Three panels need it, and all three carry the same 362px column — a two-up
 * PanelResults block above a full problem paragraph, which with the 80px anchor
 * wants 442px of image to sit against. Meta's crop is the short, wide "laptop
 * on a desk" one at 394px. PayPal Germany and PayPal both stand 438px once the
 * shared portrait height caps them, four short of the 442.
 */
const CENTERED_PANEL_COPY_CLASS =
  "absolute top-1/2 -translate-y-1/2 right-[calc(100%+40px)] w-[350px]";

/**
 * One height per orientation, shared by every panel of that shape. The six
 * sources are different crops at different ratios, so their widths still differ —
 * but the showreel steps through them on a timer, and a frame that resized on
 * every step read as a stutter rather than a sequence.
 *
 * The portrait figure is the tallest of the four it replaces (PayPal's 532), so
 * nothing gives up size at viewports tall enough to clear the band; below that
 * the band is what both values resolve to anyway.
 */
const PORTRAIT_PANEL_HEIGHT = "min(532px, var(--rollover-band))";
const LANDSCAPE_PANEL_HEIGHT = "min(394px, var(--rollover-band))";

/** Capability signals, set as one quiet metadata line rather than a section. */
function CapabilitySignals({ className = "" }: { className?: string }) {
  return (
    <ul
      className={`flex flex-wrap items-center gap-x-7 gap-y-2 ${FACT_LABEL_CLASS} ${className}`}
    >
      {CAPABILITIES.map((capability) => (
        <li key={capability}>{capability}</li>
      ))}
    </ul>
  );
}

type CardFact = { label: string; value: string };

/** Role and scope as label/value pairs, skipping anything the record lacks. */
function cardFacts(project: Project): CardFact[] {
  return [
    { label: "Role", value: project.cardRole },
    { label: "Scope", value: project.cardScope },
  ].filter((fact): fact is CardFact => Boolean(fact.value));
}

/**
 * Panel copy on the body scale, capped against the same band the art is.
 *
 * 24px/1.4 is the site's body size, and at the 1280x800 reference it clears the
 * hero headline. It stops clearing it below roughly 780px tall: the headline
 * rises as the viewport shortens, and the results block above this paragraph is
 * a fixed 58px figure over an 18px label, so the paragraph is the only part of
 * the column that can give. Scaling it off `--rollover-band` — the derived
 * height PORTRAIT/LANDSCAPE_PANEL_HEIGHT already cap the images with — keeps the
 * whole column inside the same gap, at the same rate.
 *
 * 0.055 is the coefficient that resolves to exactly 24px at the reference, and
 * to 17px at 1280x640 — the shortest viewport the homepage is designed against,
 * where the longest paragraph runs five lines and lands about 9px clear of the
 * headline. The 17px floor is there for viewports shorter than that, where the
 * headline has already crowded everything else out too.
 */
const PANEL_COPY_SIZE_CLASS =
  "text-[clamp(17px,calc(var(--rollover-band)*0.055),24px)] leading-[1.4]";

/**
 * A project's problem statement, sized for the desktop rollover panel.
 *
 * The panel is a hover preview, not a card: it carries the result and the
 * problem only. Role and scope live on the cards and on the case study, because
 * the rollover shares its band with the hero headline and a facts block tall
 * enough to hold them overruns the headline on a 1280x800 viewport.
 */
function PanelCopy({ project }: { project: Project }) {
  return (
    <p className={`${PANEL_COPY_SIZE_CLASS} text-white/80 font-light text-right`}>
      {cardProblem(project)}
    </p>
  );
}

/**
 * A selected-work card for the mobile and tablet layout. Every card carries the
 * problem; role and scope are flagship-only, so the card renders those two only
 * where the record states them.
 */
function WorkCard({ project, priority }: { project: Project; priority: boolean }) {
  const facts = cardFacts(project);

  return (
    <Link
      href={project.route}
      className="group block overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-sm active:scale-[0.99] transition-transform duration-150"
    >
      <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] overflow-hidden bg-black/40">
        <Image
          src={project.thumbnail.image}
          alt={project.thumbnail.alt}
          fill
          sizes="(max-width: 768px) 100vw, 720px"
          className="object-cover"
          style={{ objectPosition: project.thumbnail.objectPosition }}
          priority={priority}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        <div className="absolute left-5 top-5 flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-black/60 px-3 py-1 text-xs text-white/90 backdrop-blur-md">
            {project.cardLabel}
          </span>
          <span className="rounded-full border border-white/20 bg-black/45 px-3 py-1 text-[10px] uppercase tracking-[0.14em] text-white/75 backdrop-blur-md">
            {project.status}
          </span>
        </div>
      </div>
      <div className="p-5 sm:p-6">
        <div className="flex items-end justify-between gap-4">
          <div className="min-w-0 flex-1">
            <p className="text-white/55 text-[11px] uppercase tracking-[0.18em] font-sans">
              {homepageEyebrowText(project)}
            </p>
            <p className="mt-1.5 text-white text-lg sm:text-xl font-light font-sans leading-snug">
              {project.cardTitle}
            </p>
          </div>
          {project.cardResult && (
            <div className="shrink-0 text-right">
              <p className="metric-figure text-white font-serif leading-none text-3xl sm:text-4xl">
                {project.cardResult.value}
              </p>
              <p className="metric-label mt-3.5 text-white/55 text-[10px] uppercase tracking-[0.15em] font-sans max-w-[12ch]">
                {project.cardResult.label}
              </p>
            </div>
          )}
        </div>
        <p className="mt-4 text-white/70 text-sm sm:text-[15px] font-light font-sans leading-relaxed">
          {cardProblem(project)}
        </p>
        {facts.length > 0 && (
          <dl className="mt-4 grid grid-cols-1 gap-3 border-t border-white/10 pt-4 sm:grid-cols-2 sm:gap-6">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt className={FACT_LABEL_CLASS}>{fact.label}</dt>
                <dd className="mt-1 text-white/80 text-sm font-light font-sans leading-snug">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        )}
      </div>
    </Link>
  );
}

export default function HomeClient() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [showreelStep, setShowreelStep] = useState(0);
  const [showreelUp, setShowreelUp] = useState(false);

  // Backgrounds, the hero headline and the positioning block answer to the
  // pointer alone. The showreel drives the panels and leaves the rest still —
  // a page that rewrote its own headline every three seconds would be unreadable.
  const showPayPalDE = hoveredProject === "paypalde";
  const showPayPal = hoveredProject === "paypal";
  const showMeta   = hoveredProject === "meta";
  const showSolo   = hoveredProject === "solo";
  const showSutter = hoveredProject === "sutter";
  const showDoorDash = hoveredProject === "doordash";

  useEffect(() => {
    const imgs = [...HOMEPAGE_PROJECTS.map((p) => p.thumbnail.image.src), doorDashOldDashboard.src];
    imgs.forEach((src) => { const img = new window.Image(); img.src = src; });
  }, []);

  useEffect(() => {
    if (resumeOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => { document.body.style.overflow = prev; };
    }
  }, [resumeOpen]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReducedMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  // The résumé pauses the loop as firmly as a hover does. On desktop the panel
  // only compresses the homepage rather than covering it, so a showreel left
  // running would keep cycling images beside a document someone is reading.
  const showreelPaused =
    Boolean(hoveredProject) || reducedMotion || resumeOpen;

  // One step of the loop: an empty beat, a fade in, three seconds at full
  // opacity, a fade out. Re-runs per project, and whenever the pointer or the
  // résumé takes over — so either one both stops the loop and drops whatever it
  // was holding, and releasing it replays that step from its opening beat
  // rather than cutting into the middle of a fade.
  useEffect(() => {
    if (showreelPaused || HOMEPAGE_PROJECTS.length === 0) {
      setShowreelUp(false);
      return;
    }
    const fadeIn = setTimeout(() => setShowreelUp(true), SHOWREEL_LEAD_MS);
    const fadeOut = setTimeout(() => setShowreelUp(false), SHOWREEL_EXIT_AT_MS);
    const advance = setTimeout(
      () => setShowreelStep((step) => (step + 1) % HOMEPAGE_PROJECTS.length),
      SHOWREEL_STEP_MS
    );
    return () => {
      clearTimeout(fadeIn);
      clearTimeout(fadeOut);
      clearTimeout(advance);
    };
  }, [showreelStep, showreelPaused]);

  const showreelProject = showreelUp
    ? HOMEPAGE_PROJECTS[showreelStep]?.id ?? null
    : null;
  const panelProject = hoveredProject ?? showreelProject;
  const panelMotion = hoveredProject ? PANEL_MOTION.hover : PANEL_MOTION.showreel;

  const panelPayPalDE = panelProject === "paypalde";
  const panelPayPal   = panelProject === "paypal";
  const panelMeta     = panelProject === "meta";
  const panelSolo     = panelProject === "solo";
  const panelSutter   = panelProject === "sutter";
  const panelDoorDash = panelProject === "doordash";

  const hovered = hoveredProject ? PROJECTS_BY_ID[hoveredProject] : undefined;

  const heroTitle = hovered ? (
    <>
      {homepageEyebrow(hovered).map((line, i) => (
        <Fragment key={line}>
          {i > 0 && <br />}
          {line}
        </Fragment>
      ))}
    </>
  ) : undefined;

  const heroKey = hovered?.id ?? "default";

  return (
    <>
      {/* ──────────────────────────────────────────────────────────────
          DESKTOP (≥1024px) — original layout, untouched
         ────────────────────────────────────────────────────────────── */}
      <div className="hidden lg:flex flex-row min-h-screen overflow-x-hidden">
        {/* Resume panel — slides in from the left */}
        <AnimatePresence initial={false}>
          {resumeOpen && (
            <motion.div
              key="resume-panel"
              className="shrink-0 overflow-hidden"
              initial={{ width: 0 }}
              animate={{ width: 717 }}
              exit={{ width: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <ResumePanel />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main homepage content — compresses as resume opens */}
        <div className="flex-1 min-w-0 relative min-h-screen">
          {/* Background */}
          <IntroMontageBackground active={!hovered} />
          {/* All video/image backgrounds always in the DOM so they preload immediately */}
          <div className={`absolute inset-0 z-[-10] bg-black ${showPayPalDE ? "opacity-100" : "opacity-0"}`}>
            <video
              src="/videos/PayPalDE/TryNowPayLaterVideo.mp4"
              autoPlay loop muted playsInline preload="auto" suppressHydrationWarning
              className="absolute inset-0 w-full h-full object-cover opacity-50"
            />
          </div>
          <div className={`absolute inset-0 z-[-10] bg-black ${showPayPal ? "opacity-100" : "opacity-0"}`}>
            <video
              src="/WomanPhoneShopping.mp4"
              autoPlay loop muted playsInline preload="auto" suppressHydrationWarning
              className="absolute inset-0 w-full h-full object-cover opacity-50"
            />
          </div>
          <div className={`absolute inset-0 z-[-10] bg-black ${showMeta ? "opacity-100" : "opacity-0"}`}>
            <video
              src="/CreditCardDeclineMOV.mp4"
              autoPlay loop muted playsInline preload="auto" suppressHydrationWarning
              className="absolute inset-0 w-full h-full object-cover opacity-30"
            />
          </div>
          <div className={`absolute inset-0 z-[-10] bg-black ${showSolo ? "opacity-100" : "opacity-0"}`}>
            <video
              src="/videos/TeacherRecordingActivity/TeacherRecordingActivity2.mp4"
              autoPlay loop muted playsInline preload="auto" suppressHydrationWarning
              className="absolute inset-0 w-full h-full object-cover opacity-30"
            />
          </div>
          <div className={`absolute inset-0 z-[-10] bg-black ${showSutter ? "opacity-100" : "opacity-0"}`}>
            <video
              src="/videos/PatientPortal/SickMan_Rollover.mp4"
              autoPlay loop muted playsInline preload="auto" suppressHydrationWarning
              className="absolute inset-0 w-full h-full object-cover opacity-30"
            />
          </div>
          <div className={`absolute inset-0 z-[-10] bg-black overflow-hidden transition-opacity duration-300 ${showDoorDash ? "opacity-100" : "opacity-0"}`}>
            {/* Chameleon cube field — scrolls the dashboard and samples its colors */}
            <AsciiCubes
              active={showDoorDash}
              imageSrc={doorDashOldDashboard.src}
              className="absolute inset-0 h-full w-full pointer-events-none"
            />
          </div>

          <main
            className={`relative z-10 flex flex-col p-[24px] h-screen ${
              hoveredProject ? "" : "rollover-band-idle"
            }`}
          >
            <div className="shrink-0">
              <Header
                onResumeToggle={() => setResumeOpen((v) => !v)}
                resumeOpen={resumeOpen}
              />
            </div>

            {/* Fixed gap rather than a flex spacer: a two-line project eyebrow
                makes the headline 44px taller on hover, and a flexible gap
                here would drag the nav up out from under the pointer. Re-tuned
                down from the original clamp so the introduction still clears
                the fold at 1280x800. */}
            <div className="flex shrink-0 items-start justify-between gap-[48px] mt-[clamp(40px,calc(18vh_-_100px),140px)]">
              <div
                id="selected-work"
                tabIndex={-1}
                className="relative w-fit shrink-0 rounded-[28px] focus:outline-2 focus:outline-offset-8 focus:outline-white/70"
              >
                <LeftNav onHover={setHoveredProject} />
              </div>
            </div>

            <div className="flex-1 min-h-[32px]" />

            <div className="shrink-0 pb-[14px]">
              <Hero title={heroTitle} titleKey={heroKey} />
              {/* Kept mounted rather than unmounted so the exit fade can play.
                  Collapsed as well as faded while a rollover is up: left
                  at full height the headline floats ~120px above the bottom of
                  the screen with nothing under it. Height animates to 12px so
                  that, with the 14px block padding and the 24px page gutter, the
                  headline lands 50px off the bottom edge. */}
              <motion.div
                className="overflow-hidden"
                animate={{ opacity: hovered ? 0 : 1, height: hovered ? 12 : "auto" }}
                transition={{ duration: 0.25 }}
                aria-hidden={Boolean(hovered)}
              >
                <p className="mt-[22px] text-white font-light font-sans text-2xl leading-7 tracking-[-0.015em]">
                  {SITE.title}
                </p>
                {/* Runs the full column rather than the headline's measure: the
                    five labels come to 786px, so reserving the 528px supporting
                    column broke them onto a second line at every desktop width.
                    Nothing needs that clearance — this block fades to 0 while a
                    rollover is up, and the panel art sits in the band above it.
                    Wrapping is left to the flex row, so the line breaks only
                    where the column genuinely cannot carry it. */}
                <CapabilitySignals className="mt-[18px]" />
              </motion.div>
            </div>

            {/* PayPal Germany rollover panel */}
            <AnimatePresence>
              {panelPayPalDE && (
                <motion.div
                  key="paypalde-panel"
                  className="absolute top-[139px] right-[69px] z-[5] flex items-end"
                  {...panelMotion.shell}
                >
                  <motion.div
                    className={CENTERED_PANEL_COPY_CLASS}
                    {...panelMotion.copy}
                  >
                    <div className="flex flex-col gap-[26px] items-end">
                      <PanelResults results={PAYPAL_DE.panelResults} />
                      <PanelCopy project={PAYPAL_DE} />
                    </div>
                  </motion.div>

                  {/* The German photo frames its phone tighter than the other
                      sources do, so matching the PayPal panel's 350px width
                      pushed the phone past its siblings in size and left it
                      almost touching the bottom edge; 311x513 is where it sits
                      level with the PayPal phone beside it. The aspect ratio is
                      the uncropped image's, so nothing shows around it, and the
                      30px rounding overrides the smaller radius baked into the
                      source, which would otherwise leave its dark corners
                      exposed. */}
                  <motion.div
                    className="shrink-0 rounded-[30px] overflow-hidden"
                    style={{ height: PORTRAIT_PANEL_HEIGHT, aspectRatio: "311 / 513" }}
                    {...panelMotion.image}
                  >
                    <Image src={PAYPAL_DE.thumbnail.image} alt="PayPal Germany checkout screen" className="w-full h-full object-cover" priority />
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* PayPal rollover panel */}
            <AnimatePresence>
              {panelPayPal && (
                <motion.div
                  key="paypal-panel"
                  className="absolute top-[139px] right-[69px] z-[5] flex items-end"
                  {...panelMotion.shell}
                >
                  <motion.div
                    className={CENTERED_PANEL_COPY_CLASS}
                    {...panelMotion.copy}
                  >
                    <div className="flex flex-col gap-[26px] items-end">
                      <PanelResults results={PAYPAL.panelResults} />
                      <PanelCopy project={PAYPAL} />
                    </div>
                  </motion.div>

                  <motion.div
                    className="shrink-0"
                    style={{ height: PORTRAIT_PANEL_HEIGHT, aspectRatio: "350 / 532" }}
                    {...panelMotion.image}
                  >
                    <Image src={PAYPAL.thumbnail.image} alt={PAYPAL.thumbnail.alt} className="w-full h-full object-cover" priority />
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Meta rollover panel */}
            <AnimatePresence>
              {panelMeta && (
                <motion.div
                  key="meta-panel"
                  className="absolute top-[148px] right-[69px] z-[5] flex items-end"
                  {...panelMotion.shell}
                >
                  <motion.div
                    className={CENTERED_PANEL_COPY_CLASS}
                    {...panelMotion.copy}
                  >
                    <div className="flex flex-col gap-[26px] items-end">
                      <PanelResults results={META.panelResults} />
                      <PanelCopy project={META} />
                    </div>
                  </motion.div>

                  <motion.div
                    className="shrink-0 rounded-[30px] overflow-hidden"
                    style={{ height: LANDSCAPE_PANEL_HEIGHT, aspectRatio: "536 / 394" }}
                    {...panelMotion.image}
                  >
                    <Image src={META.thumbnail.image} alt={META.thumbnail.alt} className="w-full h-full object-cover" priority />
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Solo rollover panel */}
            <AnimatePresence>
              {panelSolo && (
                <motion.div
                  key="solo-panel"
                  className="absolute top-[143px] right-[93px] z-[5] flex items-end"
                  {...panelMotion.shell}
                >
                  <motion.div
                    className={PANEL_COPY_CLASS}
                    {...panelMotion.copy}
                  >
                    <div className="flex flex-col gap-[26px] items-end">
                      <PanelResults results={SOLO.panelResults} />
                      <PanelCopy project={SOLO} />
                    </div>
                  </motion.div>

                  <motion.div
                    className="shrink-0 rounded-[30px] overflow-hidden"
                    style={{ height: PORTRAIT_PANEL_HEIGHT, aspectRatio: "290 / 466" }}
                    {...panelMotion.image}
                  >
                    <Image src={SOLO.thumbnail.image} alt="Ms. Sunshine App daily reporting screen on phone" className="w-full h-full object-cover" priority />
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Sutter Health rollover panel */}
            <AnimatePresence>
              {panelSutter && (
                <motion.div
                  key="sutter-panel"
                  className="absolute top-[143px] right-[69px] z-[5] flex items-end"
                  {...panelMotion.shell}
                >
                  <motion.div
                    className={PANEL_COPY_CLASS}
                    {...panelMotion.copy}
                  >
                    <PanelCopy project={SUTTER} />
                  </motion.div>

                  <motion.div
                    className="shrink-0 rounded-[30px] overflow-hidden"
                    style={{ height: PORTRAIT_PANEL_HEIGHT, aspectRatio: "367 / 504" }}
                    {...panelMotion.image}
                  >
                    <Image src={SUTTER.thumbnail.image} alt="Sutter Health patient portal app" className="w-full h-full object-cover" priority />
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* DoorDash Dashboard rollover panel */}
            <AnimatePresence>
              {panelDoorDash && (
                <motion.div
                  key="doordash-panel"
                  className="absolute top-[148px] right-[69px] z-[5] flex items-end"
                  {...panelMotion.shell}
                >
                  <motion.div
                    className={PANEL_COPY_CLASS}
                    {...panelMotion.copy}
                  >
                    <PanelCopy project={DOORDASH} />
                  </motion.div>

                  <motion.div
                    className="shrink-0 rounded-[30px] overflow-hidden"
                    style={{ height: LANDSCAPE_PANEL_HEIGHT, aspectRatio: "536 / 394" }}
                    {...panelMotion.image}
                  >
                    <Image src={DOORDASH.thumbnail.image} alt="DoorDash Dashboard" className="w-full h-full object-cover" priority />
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </main>
        </div>
      </div>

      {/* ──────────────────────────────────────────────────────────────
          MOBILE + TABLET (<1024px) — purpose-built layout
         ────────────────────────────────────────────────────────────── */}
      <div className="lg:hidden relative min-h-[100svh] bg-black text-white overflow-x-hidden">
        <LiquidMetalBackground />

        <header className="relative z-20 flex items-center justify-between px-5 pt-5 pb-3 sm:px-6 sm:pt-6">
          <button
            type="button"
            onClick={() => setResumeOpen(true)}
            aria-expanded={resumeOpen}
            aria-controls="resume-sheet"
            className="rounded-full border border-transparent bg-[#262626] px-4 pt-[11.62px] pb-[8.38px] text-sm font-normal leading-none whitespace-nowrap text-white active:scale-[0.98] transition-all duration-150"
          >
            Résumé
          </button>
          <Logo />
        </header>

        <main className="relative z-10 flex flex-col gap-10 sm:gap-14 px-5 sm:px-6 pt-6 pb-16">
          {/* Hero — clamped from 40 → 72 */}
          <section className="flex flex-col gap-5">
            <h1
              className="text-white font-serif leading-[0.96] tracking-[-0.015em]"
              style={{ fontSize: "clamp(40px, 11vw, 72px)" }}
            >
              {SITE.homeName}
            </h1>
            <p className="text-white font-light font-sans text-xl sm:text-2xl leading-snug tracking-[-0.015em] max-w-[26ch]">
              {SITE.title}
            </p>
            <p className="text-white/75 font-light font-sans text-base sm:text-lg leading-relaxed max-w-[46ch]">
              {SITE.supporting} {SITE.practice}
            </p>
            <CapabilitySignals className="mt-1" />
          </section>

          {/* Selected work — stacked, tap-friendly cards */}
          <section
            id="work"
            tabIndex={-1}
            className="flex flex-col gap-4 sm:gap-5 scroll-mt-4 outline-none"
          >
            <p className="text-white/60 text-xs uppercase tracking-[0.18em] font-sans">
              Selected work
            </p>
            <ul className="flex flex-col gap-4 sm:gap-5">
              {HOMEPAGE_FLAGSHIPS.map((card, i) => (
                <li key={card.id}>
                  <WorkCard project={card} priority={i < 2} />
                </li>
              ))}
            </ul>
          </section>

          {HOMEPAGE_EXPERIMENTS.length > 0 && (
            <section className="flex flex-col gap-4 sm:gap-5">
              <p className="text-white/60 text-xs uppercase tracking-[0.18em] font-sans">
                Experiments
              </p>
              <ul className="flex flex-col gap-4 sm:gap-5">
                {HOMEPAGE_EXPERIMENTS.map((card) => (
                  <li key={card.id}>
                    <WorkCard project={card} priority={false} />
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Footer */}
          <footer className="mt-2 flex flex-col gap-2 border-t border-white/10 pt-6 text-sm text-white/60 font-sans">
            <a
              href={`mailto:${SITE.email}`}
              className="w-fit text-white/90 underline-offset-4 hover:underline"
            >
              {SITE.email}
            </a>
            <Link
              href="/resume/print"
              className="w-fit text-white/90 underline-offset-4 hover:underline"
            >
              View full résumé
            </Link>
            <p>
              {SITE.location} · {SITE.citizenship}
            </p>
          </footer>
        </main>

        {/* Mobile resume sheet — full-screen */}
        <AnimatePresence>
          {resumeOpen && (
            <>
              <motion.div
                key="resume-mobile-scrim"
                className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                onClick={() => setResumeOpen(false)}
              />
              <motion.div
                key="resume-mobile-sheet"
                id="resume-sheet"
                role="dialog"
                aria-label="Résumé"
                className="fixed inset-0 z-50 flex flex-col bg-[#fcf5e0]"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex items-center justify-end px-5 py-3 border-b border-[#e0d3a3] bg-[#f0e4b8]">
                  <button
                    type="button"
                    onClick={() => setResumeOpen(false)}
                    className="rounded-full border border-black/10 bg-white/70 px-4 pt-[7.62px] pb-[4.38px] text-sm text-black"
                  >
                    Close
                  </button>
                </div>
                <div className="flex-1 overflow-y-auto">
                  <ResumePanel />
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
