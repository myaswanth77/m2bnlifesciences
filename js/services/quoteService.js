// Quote submission adapter. No secrets: a Formspree endpoint is a public URL.
import { getConfig } from "./dataService.js";
export async function submitQuote(data) {
  const { quoteSubmission: q } = await getConfig();
  if (!q) throw new Error("Quote submission is not configured.");
  const url = q.provider === "api" ? q.apiPath : q.endpoint;
  if (!url || url.includes("CONFIGURE_BEFORE_DEPLOYMENT"))
    throw new Error(
      "The quote form is not connected yet. Set quoteSubmission.endpoint in data/config.json, or email us directly.",
    );
  const r = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(data),
  });
  if (!r.ok)
    throw new Error(
      "Submission failed. Please try again or email us directly.",
    );
  return true;
}
