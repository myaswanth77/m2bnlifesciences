// Data layer: UI only calls get*(). Point dataSource in config.json (or edit load()) at a real API later.
let cfg;
async function load(name) {
  if (!cfg) {
    cfg = { baseUrl: "data/", suffix: ".json" };
    try {
      const r = await fetch("data/config.json");
      if (r.ok) cfg = { ...cfg, ...(await r.json()).dataSource };
    } catch {}
  }
  const r = await fetch(cfg.baseUrl + name + cfg.suffix);
  if (!r.ok) throw new Error(name);
  return r.json();
}
const safe = (n, d) => load(n).catch(() => d);
export const getSiteSettings = () => safe("site", null);
export const getNavigation = () => safe("navigation", []);
export const getCategories = () => safe("categories", []);
export const getBrands = () => safe("brands", []);
export const getIndustries = () => safe("industries", []);
export const getServices = () => safe("services", []);
export const getProcess = () => safe("process", []);
export const getTestimonials = () => safe("testimonials", []);
export const getNews = () => safe("news", []);
export const getConfig = () => safe("config", {});
// API equivalent: GET /api/categories/:slug
export const getCategoryBySlug = async (slug) =>
  (await getCategories()).find((c) => c.slug === slug) || null;
