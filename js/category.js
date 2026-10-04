// Category detail page: product-category.html?category=<slug>[&product=<product-slug>][#<subcategory-slug>]
import * as D from "./services/dataService.js";
import { $, put, esc, slug, href, initShell } from "./shell.js";
const main = $("#cmain");
const notFound = () => {
  document.title = "Product category not found | M2BN Life Sciences";
  main.innerHTML =
    '<div class="wrap empty"><h1>Product category not found.</h1><p>The category you are looking for does not exist or may have moved.</p><a class="btn" href="index.html#products">View All Products</a> <a class="btn ghost" href="' +
    href("#contact") +
    '">Contact Us</a></div>';
};
async function init() {
  const params = new URLSearchParams(location.search);
  const [s, nav, cats, brands, sv] = await Promise.all([
    D.getSiteSettings(),
    D.getNavigation(),
    D.getCategories(),
    D.getBrands(),
    D.getServices(),
  ]);
  if (!s) {
    main.innerHTML =
      '<p class="fallback">Content could not be loaded. Serve this site over HTTP (see README).</p>';
    return;
  }
  initShell({ site: s, nav, cats, brands, services: sv });
  const c = await D.getCategoryBySlug(params.get("category") || "");
  if (!c) {
    notFound();
    return;
  }
  const subs = c.subcategories || [],
    total = subs.reduce((n, x) => n + x.products.length, 0);
  document.title = `${c.name} | M2BN Life Sciences`;
  document
    .querySelector("meta[name=description]")
    ?.setAttribute("content", c.description);
  const sec = (x) =>
    `<section class="subsec" id="${slug(x.name)}"><h2>${esc(x.name)}</h2><div class="pgrid">${x.products.map((p) => `<div class="pcard" id="p-${slug(p)}"><b>${esc(p)}</b><small>${esc(c.name)} › ${esc(x.name)}</small></div>`).join("")}</div></section>`;
  main.innerHTML = `<div class="wrap"><nav aria-label="Breadcrumb" class="crumb"><ol><li><a href="index.html">Home</a></li><li><a href="index.html#products">Products</a></li><li aria-current="page">${esc(c.name)}</li></ol></nav></div>
<section class="chero"><div class="wrap chero-in"><div class="cimg">${c.image ? `<img src="${c.image}" alt="${esc(c.imageAlt || c.name)}" width="800" height="600" fetchpriority="high" decoding="async" data-fb="${c.e || "🔬"}">` : `<span class="ph">${c.e || "🔬"}</span>`}</div><div><p class="eyebrow">PRODUCT CATEGORY</p><h1>${esc(c.name)}</h1><div class="rule"></div><p class="txt">${esc(c.description)}</p>${subs.length ? `<p class="meta">${subs.length} product groups · ${total} products</p>` : ""}<a class="btn ghost" href="${href("#contact")}">Contact Us</a></div></div></section>
<section class="explore"><div class="wrap">${subs.length ? `<div class="xgrid"><details class="side" id="side"><summary>Product Groups</summary><nav aria-label="Product groups"><ul>${subs.map((x) => `<li><a href="#${slug(x.name)}">${esc(x.name)} <small>${x.products.length}</small></a></li>`).join("")}</ul></nav></details><div><h2 class="exh">Explore Products</h2>${subs.map(sec).join("")}</div></div>` : `<div class="empty"><h2>Product list coming soon</h2><p>Tell us what you need in this category and our team will respond with availability and a quotation.</p></div>`}</div></section>`;
  const side = $("#side");
  if (side) {
    side.open = innerWidth >= 900;
    side.addEventListener("click", (e) => {
      if (e.target.closest("a") && innerWidth < 900) side.open = false;
    });
  }
  const prod = params.get("product"),
    target =
      (prod && document.getElementById("p-" + prod)) ||
      (location.hash &&
        document.getElementById(decodeURIComponent(location.hash.slice(1))));
  if (target) {
    if (prod && target.classList.contains("pcard")) target.classList.add("hit");
    target.scrollIntoView({ block: prod ? "center" : "start" });
  }
  const abs = (u) => new URL(u, location.href).href;
  document.head.insertAdjacentHTML(
    "beforeend",
    `<script type="application/ld+json">${JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        ["Home", abs("index.html")],
        ["Products", abs("index.html#products")],
        [c.name, location.href],
      ].map((x, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: x[0],
        item: x[1],
      })),
    })}<\/script>`,
  );
}
init();
