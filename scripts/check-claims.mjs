// Claims guard: fails if the site copy makes a claim the product can't back up.
//
// The source of truth is the OpesFlux application code and the verified product
// knowledge file. Every pattern below matches a claim that was once on this site
// and was false. A line that clearly states the opposite ("doesn't",
// "not available", "No:") is allowed, and so is a line about a named competitor
// (comparison pages state their features, sourced and dated). To allow a line
// deliberately, add the text "claims-ok" to it (in a code comment).
//
// Usage: node scripts/check-claims.mjs   (exit code 1 on any finding)

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SCAN = ["src", "keystatic.config.tsx"];
const EXT = /\.(tsx?|mdx?)$/;

const RULES = [
  // Filing and HMRC submissions OpesFlux does not do
  { re: /MTD VAT filing|filing direct to HMRC|VAT filing to HMRC/i, why: "OpesFlux does not file VAT returns (MTD)" },
  { re: /RTI submissions? (to HMRC )?(are )?automat|RTI submits|submits? RTI (to HMRC )?automatic|RTI that submits/i, why: "OpesFlux does not send RTI" },
  { re: /\bCIS (returns|deductions|module|compliance)\b/i, why: "No CIS features" },
  { re: /\bIR35\b/, why: "No IR35 features" },
  { re: /\btronc\b|tip distribution|gratuity handling|service charge distribution/i, why: "No tronc/tips features" },
  { re: /kitchen display|table management|fire to kitchen|table plans?\b/i, why: "No hospitality table/kitchen features" },
  { re: /gift cards?|loyalty (points|programme|scheme)/i, why: "No gift cards or loyalty" },
  { re: /split (payments?|bills?)/i, why: "POS takes one payment method per sale" },
  { re: /batch (and|&) serial|serial number tracking|lot tracking/i, why: "No batch/serial tracking" },
  { re: /three-way match|3-way match/i, why: "No three-way matching" },
  { re: /bin locations?/i, why: "No bin locations" },
  // Planned, not built: must not be mentioned
  { re: /customer[- ]specific pric|price lists?\b|pricing tiers|price tiers|tiered pricing/i, why: "Customer price lists are planned, not built" },
  { re: /whatsapp (order|voice)|voice notes?/i, why: "WhatsApp/voice order capture is planned, not built" },
  { re: /automatic (late[- ]payment )?interest/i, why: "Automatic late-payment interest is planned, not built" },
  // Unverifiable promises and invented proof
  { re: /within 24 hours|live in 24 hours|set up in a day|live within a day|in 24 hours/i, why: "No guaranteed go-live time" },
  { re: /\b\d+\+ countries|countries supported|uptime SLA|processed monthly/i, why: "Invented statistic" },
  { re: /trusted by|testimonial|our customers (tell|say|love)/i, why: "No published customers or testimonials" },
  { re: /Okafor|Sarah Chen|Priya Patel|Marcus Webb|Tom Harrison|Amelia Grant/, why: "Invented person" },
  // Brand rules
  { re: /\bClarix\b/i, why: "Internal codename must never be public" },
  { re: /Ghadai/i, why: "Never mention Ghadai Traders" },
  { re: /Devs (and|&) Visuals Ltd/i, why: "Never write Ltd after Devs and Visuals" },
];

const COMPETITOR = /\b(Sage|Xero|Unleashed|Brightpearl|QuickBooks|Odoo)\b|unleashedsoftware|brightpearl\.com/i;
const NEGATION =
  /\b(doesn't|does not|don't|do not|isn't|is not|no longer|not available|not listed|not mentioned|never|without)\b|\bNo[:.]|\bNot a fit\b|\bno (loyalty|gift|table|batch|alcohol|van|cis|ir35)\b|claims-ok/i;

function walk(p, out) {
  const st = fs.statSync(p);
  if (st.isDirectory()) for (const f of fs.readdirSync(p)) walk(path.join(p, f), out);
  else if (EXT.test(p)) out.push(p);
  return out;
}

const files = SCAN.flatMap((s) => walk(path.join(ROOT, s), []));
const findings = [];
for (const f of files) {
  const rel = path.relative(ROOT, f).replace(/\\/g, "/");
  fs.readFileSync(f, "utf8").split(/\r?\n/).forEach((line, i) => {
    if (NEGATION.test(line) || COMPETITOR.test(line)) return;
    for (const r of RULES) {
      if (r.re.test(line)) findings.push(`${rel}:${i + 1}  ${r.why}\n    ${line.trim().slice(0, 160)}`);
    }
  });
}

if (findings.length) {
  console.error(`Claims guard: ${findings.length} problem(s)\n`);
  console.error(findings.join("\n"));
  process.exit(1);
}
console.log(`Claims guard: ${files.length} files checked, no problems.`);
