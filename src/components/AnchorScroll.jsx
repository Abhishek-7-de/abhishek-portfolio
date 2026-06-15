import { useEffect } from "react";
import { useLenis } from "lenis/react";

/**
 * Routes in-page anchor clicks (href="#id") through Lenis for smooth scrolling.
 * Rendered inside <ReactLenis> so useLenis() has context. Also exposes the
 * Lenis instance on window in dev for tooling.
 */
export default function AnchorScroll() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;
    if (import.meta.env.DEV) window.__lenis = lenis;

    const onClick = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const hash = a.getAttribute("href");
      if (!hash || hash.length < 2) return;
      const el = document.querySelector(hash);
      if (!el) return;
      e.preventDefault();
      lenis.scrollTo(el, { offset: -76 });
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [lenis]);

  return null;
}
