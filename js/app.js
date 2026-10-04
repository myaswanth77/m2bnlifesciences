// Homepage. Shared shell (nav, footer, modals, search) lives in shell.js.
import * as D from "./services/dataService.js";
import { put, esc, qb, catUrl, initShell } from "./shell.js";
const feats = (f) =>
  f
    .map(
      (x) =>
        `<div><span class="ic">${x.i}</span><span><b>${x.a}</b>${x.b}</span></div>`,
    )
    .join("");
const catCard = (c) =>
  `<a class="card cat" href="${catUrl(c)}"><span class="img" style="background:${c.c}">${c.image ? `<img src="${c.image}" srcset="${c.image.replace(".webp", "-400.webp")} 400w, ${c.image} 800w" sizes="(max-width:600px) 45vw, 240px" alt="${esc(c.imageAlt || c.name)}" width="800" height="600" loading="lazy" decoding="async" data-fb="${c.e || "🔬"}">` : `<span class="ph">${c.e || "🔬"}</span>`}</span><span class="nm">${esc(c.name)}</span><i>View Products →</i></a>`;

async function init() {
  const [s, nav, c, b, ind, sv, pr] = await Promise.all([
    D.getSiteSettings(),
    D.getNavigation(),
    D.getCategories(),
    D.getBrands(),
    D.getIndustries(),
    D.getServices(),
    D.getProcess(),
  ]);
  if (!s) {
    document.body.innerHTML =
      '<p class="fallback">Content could not be loaded. Serve this site over HTTP (see README).</p>';
    return;
  }
  const siteUrl = new URL(s.websiteUrl).href;
  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement("link");
    canonical.rel = "canonical";
    document.head.append(canonical);
  }
  canonical.href = siteUrl;
  document
    .querySelector('meta[property="og:url"]')
    ?.setAttribute("content", siteUrl);
  const organization = document.createElement("script");
  organization.type = "application/ld+json";
  organization.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Organization",
    name: s.company,
    url: siteUrl,
    email: s.email,
    telephone: [s.phone, s.phoneAlt].filter(Boolean),
    sameAs: s.social.map((social) => social.url),
    address: s.offices.map((office) => ({
      "@type": "PostalAddress",
      streetAddress: office.address,
      addressLocality: office.city,
      addressRegion: office.region,
      addressCountry: office.country,
    })),
  });
  document.head.append(organization);
  initShell({ site: s, nav, cats: c, brands: b, services: sv });
  put(
    "#hero",
    `<div><p class="eyebrow">${esc(s.hero.eyebrow.toUpperCase())}</p><h1>${s.hero.line1}<span>${s.hero.line2}</span></h1><div class="rule"></div><p class="txt">${esc(s.hero.text)}</p><div class="feats">${feats(s.features)}</div><a class="btn" href="#products">Explore Products →</a> ${qb("ghost")}</div>`,
  );
  put(
    "#stats",
    `<ul class="wrap">${s.stats.map((x) => `<li><span class="ic">${x.i}</span><span><b>${x.n}</b><small>${x.l}</small></span></li>`).join("")}</ul>`,
  );
  put(
    "#quick",
    c.map(catCard).join("") ||
      '<p class="fallback">Categories are being updated.</p>',
  );
  put("#aboutEy", esc(s.about.eyebrow));
  put(
    "#about",
    `<div><h2>${esc(s.about.title)}</h2><div class="rule"></div>${s.about.paras.map((p) => `<p>${p}</p>`).join("")}<div class="feats" style="margin-top:1rem">${feats(s.features)}</div></div><div class="why"><h3>WHY CHOOSE M2BN?</h3><ul>${s.why.map((w) => `<li>${esc(w)}</li>`).join("")}</ul><a class="btn blue" href="#contact">Know More About Us →</a></div>`,
  );
  put(
    "#brandgrid",
    b
      .map(
        (x) =>
          `<article class="card brand"><div class="brand-logo"><img src="${x.logo}" alt="${esc(x.name)}" width="${x.lw}" height="${x.lh}" loading="lazy"></div><p>${esc(x.text)}</p><a href="${x.url}">View Products →</a></article>`,
      )
      .join(""),
  );
  put(
    "#indgrid",
    ind
      .map(
        (x) =>
          `<div class="ind"><div class="i">${x.i}</div><h3>${esc(x.name)}</h3><p>${esc(x.text)}</p></div>`,
      )
      .join(""),
  );
  put(
    "#svc",
    sv
      .map(
        (x) =>
          `<div class="row"><span class="ic">${x.i}</span><span><b>${esc(x.name)}</b><small>${esc(x.text)}</small></span></div>`,
      )
      .join(""),
  );
  put(
    "#proc",
    pr
      .map(
        (x, i) =>
          `<div class="step"><span class="n">0${i + 1}</span><span class="ic">${x.i}</span><span><b>${esc(x.name)}</b><small style="display:block;color:var(--muted)">${esc(x.text)}</small></span></div>`,
      )
      .join(""),
  );
  put(
    "#trust",
    s.trust
      .map(
        (x) =>
          `<div><span class="i">${x.i}</span><span><b>${x.a}</b><small>${x.b}</small></span></div>`,
      )
      .join(""),
  );
  put(
    "#bigcta",
    `<img src="assets/images/cta/cta-banner.webp" alt="" width="1600" height="667" loading="lazy" decoding="async"><div><h2>${esc(s.cta.title)}</h2><p>${esc(s.cta.text)}</p><div class="btns">${qb()}<a class="btn light" href="#contact">Contact Us →</a></div><div class="cf">${s.cta.features.map((f) => `<span>${f.i} ${esc(f.t)}</span>`).join("")}</div></div>`,
  );
  const wa = `https://wa.me/${s.whatsapp}?text=${encodeURIComponent(s.whatsappMessage)}`;
  const phones = [s.phone, s.phoneAlt].filter(Boolean);
  const phoneLinks = phones
    .map(
      (phone) =>
        `<a href="tel:${String(phone).replace(/\s+/g, "")}" style="display:block;color:inherit;">📞 ${esc(phone)}</a>`,
    )
    .join("");
  put(
    "#contact",
    `<div><span class="i">📞</span><span><b>Call Us</b>${phoneLinks}</span></div><div><span class="i">📧</span><span><b>Email Us</b><a href="mailto:${s.email}" style="color:inherit;">${esc(s.email)}</a></span></div><div><span class="i">📍</span><span><b>Location</b>${s.offices.map((o) => esc(o.city)).join("<br>")}</span></div><div><span class="i">🕘</span><span><b>Working Hours</b>${esc(s.hours)}</span></div><div><span class="i g">💬</span><span><b><a href="${wa}" target="_blank" rel="noopener">Chat on WhatsApp</a></b>${phoneLinks}</span></div>`,
  );
}
init();
