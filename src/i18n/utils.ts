import { ui, defaultLang, type Lang, type UIKey } from "./ui";

/** Resolve the active locale from the URL path ("/es/..." → "es", else default). */
export function getLangFromUrl(url: URL): Lang {
  const seg = url.pathname.split("/")[1];
  return (seg in ui ? seg : defaultLang) as Lang;
}

/** Translator bound to a locale, falling back to the default language. */
export function useTranslations(lang: Lang) {
  return (key: UIKey): string => ui[lang][key] ?? ui[defaultLang][key];
}

/**
 * Given the current URL, return the equivalent path in each locale.
 * `/about` → { en: "/about", es: "/es/about" }; `/es/` → { en: "/", es: "/es/" }.
 */
export function getLocalePaths(url: URL): Record<Lang, string> {
  const path = url.pathname;
  const onEs = path === "/es" || path.startsWith("/es/");
  const base = onEs ? path.slice(3) || "/" : path;
  return {
    en: base,
    es: "/es" + (base === "/" ? "/" : base),
  };
}
