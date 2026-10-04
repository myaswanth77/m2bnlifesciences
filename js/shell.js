// Shared page shell: navigation, footer, quote modal, search. Used by index.html and product-category.html.
import { submitQuote } from "./services/quoteService.js";
export const $ = (s, r = document) => r.querySelector(s),
  $$ = (s, r = document) => [...r.querySelectorAll(s)];
export const esc = (s) =>
  String(s ?? "").replace(
    /[&<>"]/g,
    (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c],
  );
export const put = (sel, html) => {
  const e = $(sel);
  if (e) e.innerHTML = html;
};
export const slug = (s) =>
  String(s)
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
const isHome = () => document.body.dataset.page === "home";
export const href = (h) =>
  h && h.startsWith("#") && !isHome() ? "index.html" + h : h; // hash links work from any page
export const catUrl = (c, sub, prod) =>
  `product-category.html?category=${c.slug}${prod ? "&product=" + slug(prod) : ""}${sub ? "#" + slug(sub) : ""}`;
// Request a Quote buttons are temporarily disabled for the current UI.
export const qb = (cls = "", pre = "") => "";
const socialIcon = (icon) =>
  icon === "instagram"
    ? '<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" focusable="false"><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="17.5" cy="6.5" r="1.25" fill="currentColor"/></svg>'
    : esc(icon);

function modal(ov) {
  let last;
  const foc = () =>
    $$("button,input,select,textarea,a[href]", ov).filter(
      (e) => !e.disabled && e.offsetParent,
    );
  const close = () => {
    ov.classList.remove("show");
    last && last.focus();
  };
  ov.addEventListener("mousedown", (e) => {
    if (e.target === ov) close();
  });
  ov.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
    if (e.key === "Tab") {
      const f = foc(),
        a = f[0],
        z = f[f.length - 1];
      if (e.shiftKey && document.activeElement === a) {
        e.preventDefault();
        z.focus();
      } else if (!e.shiftKey && document.activeElement === z) {
        e.preventDefault();
        a.focus();
      }
    }
  });
  return {
    open() {
      last = document.activeElement;
      ov.classList.add("show");
      foc()[0]?.focus();
    },
    close,
  };
}

export function initShell({ site: s, nav, cats, brands, services }) {
  const wa = `https://wa.me/${s.whatsapp}?text=${encodeURIComponent(s.whatsappMessage)}`;
  const toggle = `aria-expanded="false" aria-haspopup="true"`;
  put(
    "#nav",
    nav
      .map((n) =>
        n.mega
          ? `<li><button ${toggle}>${esc(n.label)} ▾</button><div class="sub mega"><ul>${cats.map((c) => `<li><a href="${catUrl(c)}">${esc(c.name)}</a></li>`).join("")}</ul><a class="all" href="${href("#products")}">View All Products →</a></div></li>`
          : n.children
            ? `<li><button ${toggle}>${esc(n.label)} ▾</button><ul class="sub">${n.children.map((x) => `<li><a href="${href(x.href)}">${esc(x.label)}</a></li>`).join("")}</ul></li>`
            : `<li><a href="${href(n.href)}">${esc(n.label)}</a></li>`,
      )
      .join(""),
  );
  const phones = [s.phone, s.phoneAlt].filter(Boolean);
  const phoneLinks = phones
    .map(
      (phone) =>
        `<a href="tel:${String(phone).replace(/\s+/g, "")}" style="color:inherit;">📞 ${esc(phone)}</a>`,
    )
    .join("<br>");
  put(
    "#footer",
    `<div class="wrap fg"><div><span class="chip logo-chip"><img src="assets/logos/m2bn-logo.webp" alt="${esc(s.company)}" width="195" height="107" loading="lazy"></span><p style="margin-top:1rem;font-size:.88rem">${esc(s.summary)}</p><div class="soc">${s.social.map((x) => `<a href="${esc(x.url)}" aria-label="${esc(x.label)}" target="_blank" rel="noopener">${socialIcon(x.icon)}</a>`).join("")}</div></div><div><h4>Quick Links</h4><ul>${nav.map((n) => `<li><a href="${href(n.href)}">${esc(n.label)}</a></li>`).join("")}</ul></div><div><h4>Product Categories</h4><ul class="fcats">${cats.map((c) => `<li><a href="${catUrl(c)}">${esc(c.name)}</a></li>`).join("")}</ul></div><div><h4>Brands</h4><ul>${brands.map((b) => `<li><a href="${href("#brands")}">${esc(b.name)}</a></li>`).join("")}</ul></div><div><h4>Contact Us</h4><ul>${s.offices.map((o) => `<li>📍 <b style="color:#fff">${esc(o.name)}</b><br>${esc(o.address)}</li>`).join("")}<li>${phoneLinks}</li><li>✉ <a href="mailto:${esc(s.email)}" style="color:inherit;">${esc(s.email)}</a></li><li>🌐 <a href="${esc(s.websiteUrl)}" style="color:inherit;">${esc(s.website)}</a></li></ul></div></div><div class="wrap fb"><span>© ${new Date().getFullYear()} ${esc(s.company)}. All Rights Reserved.</span></div>`,
  );
  const waButton = $("#waBtn");
  if (waButton) waButton.href = wa;
  document.body.insertAdjacentHTML(
    "beforeend",
    `<div id="quoteModal" class="overlay" role="dialog" aria-modal="true" aria-labelledby="qt"><div class="modal"><h2 id="qt">Request a Quote</h2>
<form id="qform" class="f" novalidate>
<label>Full Name *<input name="name" required autocomplete="name"><span class="err"></span></label>
<label>Company / Institution<input name="company" autocomplete="organization"><span class="err"></span></label>
<label>Email *<input name="email" type="email" required autocomplete="email"><span class="err"></span></label>
<label>Phone *<input name="phone" type="tel" required autocomplete="tel"><span class="err"></span></label>
<label>Product / Category<input id="qcat" name="category" list="qcats" autocomplete="off"><datalist id="qcats">${cats.map((c) => `<option value="${esc(c.name)}">`).join("")}</datalist></label>
<label>Quantity<input name="quantity"></label>
<label class="full">Message / Requirements *<textarea name="message" rows="4" required></textarea><span class="err"></span></label>
<label class="full">Preferred contact method<select name="contactMethod"><option>Email</option><option>Phone</option><option>WhatsApp</option></select></label>
<input class="hp" name="_gotcha" tabindex="-1" autocomplete="off" aria-hidden="true">
<div class="full"><div id="qstatus" class="status" hidden></div><div class="actions"><button type="button" class="btn ghost" data-close>Cancel</button><button id="qsubmit" class="btn">Submit Request</button></div></div></form></div></div>
<div id="searchModal" class="overlay" role="dialog" aria-modal="true" aria-label="Search"><div class="modal"><label for="sq"><b>Search categories, products, brands and services</b></label><input id="sq" type="search" style="width:100%;padding:.7rem;margin-top:.5rem;font-size:1rem" autocomplete="off"><div id="sr" class="results" aria-live="polite"></div><div class="actions"><button class="btn ghost" data-closes>Close</button></div></div></div>`,
  );
  const q = modal($("#quoteModal")),
    sm = modal($("#searchModal"));
  document.addEventListener("click", (e) => {
    const t = e.target.closest("[data-quote]");
    if (t) {
      e.preventDefault();
      $("#qstatus").hidden = true;
      $("#qcat").value = t.dataset.prefill || "";
      q.open();
    }
    if (e.target.closest("[data-close]")) q.close();
    if (e.target.closest("[data-closes]")) sm.close();
  });
  $("#searchBtn").onclick = () => {
    sm.open();
  };
  // missing-image fallback (no inline handlers)
  document.addEventListener(
    "error",
    (e) => {
      const i = e.target;
      if (i.tagName === "IMG" && i.dataset.fb) {
        const p = document.createElement("span");
        p.className = "ph";
        p.textContent = i.dataset.fb;
        i.replaceWith(p);
      }
    },
    true,
  );
  // nav
  const navEl = $("#nav");
  $("#burger").onclick = function () {
    this.setAttribute("aria-expanded", navEl.classList.toggle("show"));
  };
  $$("#nav>li>button").forEach(
    (b) =>
      (b.onclick = () =>
        b.setAttribute(
          "aria-expanded",
          b.parentElement.classList.toggle("open"),
        )),
  );
  $$("#nav a").forEach((a) =>
    a.addEventListener("click", () => navEl.classList.remove("show")),
  );
  // search index built from the same data: categories > subcategories > products, brands, services
  const idx = [];
  cats.forEach((c) => {
    idx.push({ t: c.name, p: "Category", h: catUrl(c) });
    (c.subcategories || []).forEach((sc) => {
      idx.push({ t: sc.name, p: c.name, h: catUrl(c, sc.name) });
      sc.products.forEach((p) =>
        idx.push({
          t: p,
          p: `${c.name} › ${sc.name}`,
          h: catUrl(c, sc.name, p),
        }),
      );
    });
  });
  brands.forEach((b) =>
    idx.push({ t: b.name, p: "Brand", h: href("#brands"), x: b.text }),
  );
  services.forEach((v) =>
    idx.push({ t: v.name, p: "Service", h: href("#services"), x: v.text }),
  );
  $("#sq").oninput = (e) => {
    const v = e.target.value.trim().toLowerCase();
    if (v.length < 2) {
      put("#sr", "");
      return;
    }
    const r = idx
      .filter((i) => (i.t + " " + (i.x || "")).toLowerCase().includes(v))
      .slice(0, 40);
    put(
      "#sr",
      r
        .map(
          (i) =>
            `<a href="${i.h}" data-closes>${esc(i.t)}<br><small>${esc(i.p)}</small></a>`,
        )
        .join("") || '<p class="fallback">No results found.</p>',
    );
  };
  // quote form
  const f = $("#qform");
  f.onsubmit = async (e) => {
    e.preventDefault();
    let ok = true;
    $$("[required]", f).forEach((i) => {
      let m = "";
      if (!i.value.trim()) m = "This field is required.";
      else if (i.type === "email" && !/^\S+@\S+\.\S+$/.test(i.value))
        m = "Enter a valid email.";
      else if (i.name === "phone" && i.value.replace(/\D/g, "").length < 7)
        m = "Enter a valid phone number.";
      i.setAttribute("aria-invalid", !!m);
      i.parentElement.querySelector(".err").textContent = m;
      if (m) ok = false;
    });
    if (!ok) {
      f.querySelector("[aria-invalid=true]").focus();
      return;
    }
    const d = Object.fromEntries(new FormData(f));
    if (d._gotcha) return; // honeypot
    const btn = $("#qsubmit"),
      st = $("#qstatus");
    btn.disabled = true;
    btn.textContent = "Sending…";
    st.hidden = true;
    try {
      await submitQuote(d);
      st.className = "status ok";
      st.textContent =
        "Thank you. Your request has been submitted successfully. Our team will contact you shortly.";
      f.reset();
    } catch (err) {
      st.className = "status bad";
      st.textContent = err.message;
    }
    st.hidden = false;
    btn.disabled = false;
    btn.textContent = "Submit Request";
  };
}
