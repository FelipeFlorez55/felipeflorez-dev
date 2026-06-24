/**
 * Motion foundation: Lenis smooth scroll + GSAP reveals.
 *
 * Hard rules: animate only transform/opacity, and fully disable under
 * prefers-reduced-motion (content is visible by default in CSS; JS only animates when
 * motion is allowed, so a JS failure or reduced-motion just shows static content).
 *
 * ClientRouter-aware: runs on every `astro:page-load`. Lenis is created once and reused.
 */
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const prefersReduced = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

let lenis: Lenis | null = null;

function initLenis() {
  if (lenis || prefersReduced()) return;
  lenis = new Lenis({ duration: 1.1, smoothWheel: true });
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => lenis?.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
}

function heroIntro() {
  const items = gsap.utils.toArray<HTMLElement>("[data-hero-item]");
  if (!items.length) return;
  gsap.from(items, {
    opacity: 0,
    y: 24,
    duration: 0.8,
    ease: "power3.out",
    stagger: 0.08,
  });
}

function scrollReveals() {
  const items = gsap.utils.toArray<HTMLElement>("[data-reveal]");
  items.forEach((el) => {
    gsap.from(el, {
      opacity: 0,
      y: 24,
      duration: 0.7,
      ease: "power2.out",
      scrollTrigger: { trigger: el, start: "top 85%" },
    });
  });
}

function bindAnchors() {
  document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const href = a.getAttribute("href");
      if (!href || href === "#") return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      lenis?.scrollTo(target as HTMLElement, { offset: -64 });
    });
  });
}

function setup() {
  try {
    if (prefersReduced()) return; // leave everything visible & static (native anchors + scroll-mt)
    initLenis();
    bindAnchors();
    ScrollTrigger.getAll().forEach((t) => t.kill());
    heroIntro();
    scrollReveals();
    ScrollTrigger.refresh();
  } catch {
    /* never let motion break the page */
  }
}

document.addEventListener("astro:page-load", setup);
