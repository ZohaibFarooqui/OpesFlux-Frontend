import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { emailLogoDataUri } from "@/lib/email-logo-b64";

function createTransport() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.hostinger.com",
    port: Number(process.env.SMTP_PORT || 465),
    secure: process.env.SMTP_SECURE !== "false",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

const FROM = process.env.EMAIL_FROM || "OpesFlux <hello.opesflux@devsandvisuals.com>";
const TO = process.env.CONTACT_EMAIL_TO || "hello.opesflux@devsandvisuals.com";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://opesflux.devsandvisuals.com";

const EMAIL_HEADER = `
  <div style="background:#0A2540; padding:24px 32px; display:flex; align-items:center; gap:12px;">
    <img src="${emailLogoDataUri}" alt="OpesFlux" width="56" height="56" style="display:block; border-radius:8px;" />
    <div>
      <span style="color:#ffffff; font-size:20px; font-weight:700; letter-spacing:-0.02em;">OpesFlux</span>
      <p style="color:rgba(248,250,252,0.55); margin:2px 0 0; font-size:12px;">Your Workflow Companion</p>
    </div>
  </div>`;

const EMAIL_FOOTER = `
  <div style="background:#f8fafc; padding:16px 32px; text-align:center; border-top:1px solid #e2e8f0;">
    <img src="${emailLogoDataUri}" alt="" width="24" height="24" style="display:inline-block; vertical-align:middle; margin-right:8px; opacity:0.5;" />
    <span style="color:#94a3b8; font-size:12px; vertical-align:middle;">© 2026 Devs and Visuals Ltd ·
      <a href="${SITE_URL}/privacy" style="color:#94a3b8;">Privacy Policy</a>
    </span>
  </div>`;

// Email to the OpesFlux inbox — new lead notification
function buildNotificationEmail(data: {
  fullName: string;
  email: string;
  company: string;
  phone?: string;
  industry: string;
  teamSize: string;
  message?: string;
  hearAbout?: string;
  plan?: string;
}) {
  const { fullName, email, company, phone, industry, teamSize, message, hearAbout, plan } = data;
  return {
    from: FROM,
    to: TO,
    subject: `📋 New demo request — ${fullName} · ${company}`,
    html: `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8" /></head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background:#f8fafc; margin:0; padding:24px;">
  <div style="max-width:560px; margin:0 auto; background:#ffffff; border-radius:16px; overflow:hidden; box-shadow:0 4px 24px rgba(10,37,64,0.08);">
    ${EMAIL_HEADER}
    <div style="padding:28px 32px 8px; background:#0A2540;">
      <h1 style="color:#20B5A2; margin:0; font-size:18px; font-weight:600; letter-spacing:-0.01em;">New Demo Request</h1>
      <p style="color:rgba(248,250,252,0.55); margin:4px 0 24px; font-size:13px;">via opesflux.devsandvisuals.com</p>
    </div>
    <div style="padding:32px;">
      <table style="width:100%; border-collapse:collapse;">
        <tr>
          <td style="padding:8px 0; color:#64748b; font-size:13px; width:140px;">Name</td>
          <td style="padding:8px 0; color:#0A2540; font-size:14px; font-weight:600;">${fullName}</td>
        </tr>
        <tr style="border-top:1px solid #e2e8f0;">
          <td style="padding:8px 0; color:#64748b; font-size:13px;">Email</td>
          <td style="padding:8px 0;"><a href="mailto:${email}" style="color:#20B5A2; font-size:14px;">${email}</a></td>
        </tr>
        <tr style="border-top:1px solid #e2e8f0;">
          <td style="padding:8px 0; color:#64748b; font-size:13px;">Company</td>
          <td style="padding:8px 0; color:#0A2540; font-size:14px;">${company}</td>
        </tr>
        ${phone ? `
        <tr style="border-top:1px solid #e2e8f0;">
          <td style="padding:8px 0; color:#64748b; font-size:13px;">Phone</td>
          <td style="padding:8px 0;"><a href="tel:${phone}" style="color:#20B5A2; font-size:14px;">${phone}</a></td>
        </tr>` : ""}
        <tr style="border-top:1px solid #e2e8f0;">
          <td style="padding:8px 0; color:#64748b; font-size:13px;">Industry</td>
          <td style="padding:8px 0; color:#0A2540; font-size:14px; text-transform:capitalize;">${industry}</td>
        </tr>
        <tr style="border-top:1px solid #e2e8f0;">
          <td style="padding:8px 0; color:#64748b; font-size:13px;">Team size</td>
          <td style="padding:8px 0; color:#0A2540; font-size:14px;">${teamSize} staff</td>
        </tr>
        ${plan ? `
        <tr style="border-top:1px solid #e2e8f0;">
          <td style="padding:8px 0; color:#64748b; font-size:13px;">Plan interest</td>
          <td style="padding:8px 0; color:#0A2540; font-size:14px; text-transform:capitalize;">${plan}</td>
        </tr>` : ""}
        ${hearAbout ? `
        <tr style="border-top:1px solid #e2e8f0;">
          <td style="padding:8px 0; color:#64748b; font-size:13px;">Heard via</td>
          <td style="padding:8px 0; color:#0A2540; font-size:14px;">${hearAbout}</td>
        </tr>` : ""}
      </table>
      ${message ? `
      <div style="margin-top:24px; background:#f8fafc; border-radius:12px; padding:16px; border-left:3px solid #20B5A2;">
        <p style="margin:0 0 6px; color:#64748b; font-size:12px; font-weight:600; text-transform:uppercase; letter-spacing:0.08em;">Their message</p>
        <p style="margin:0; color:#334155; font-size:14px; line-height:1.7;">${message}</p>
      </div>` : ""}
      <div style="margin-top:28px; text-align:center;">
        <a href="mailto:${email}" style="display:inline-block; background:linear-gradient(135deg,#1E6AB5,#20B5A2); color:#ffffff; padding:12px 28px; border-radius:8px; font-weight:700; font-size:14px; text-decoration:none;">Reply to ${fullName.split(" ")[0]}</a>
      </div>
    </div>
    ${EMAIL_FOOTER}
  </div>
</body>
</html>`,
    text: `New demo request from ${fullName} (${company})\n\nEmail: ${email}\nPhone: ${phone || "not provided"}\nIndustry: ${industry}\nTeam: ${teamSize}\n${message ? `\nMessage: ${message}` : ""}`,
  };
}

// Confirmation email sent to the person who filled the form
function buildConfirmationEmail(data: { fullName: string; email: string; industry: string }) {
  const firstName = data.fullName.split(" ")[0];
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/opesflux/demo";
  return {
    from: FROM,
    to: data.email,
    subject: `Your OpesFlux demo request — we'll be in touch shortly`,
    html: `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8" /></head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background:#f8fafc; margin:0; padding:24px;">
  <div style="max-width:560px; margin:0 auto; background:#ffffff; border-radius:16px; overflow:hidden; box-shadow:0 4px 24px rgba(10,37,64,0.08);">
    ${EMAIL_HEADER}
    <div style="padding:36px 32px;">
      <h2 style="color:#0A2540; margin:0 0 16px; font-size:22px; font-weight:600; letter-spacing:-0.02em;">
        Thanks, ${firstName} — we've got your request!
      </h2>
      <p style="color:#334155; margin:0 0 16px; font-size:15px; line-height:1.7;">
        We'll be in touch within one business day to confirm your demo time. In the meantime, if you'd like to pick a slot right now, you can book directly using the link below.
      </p>
      <div style="background:#f8fafc; border-radius:12px; padding:20px 24px; margin:24px 0; border:1px solid #e2e8f0; border-left:3px solid #20B5A2;">
        <p style="margin:0 0 4px; color:#64748b; font-size:12px; font-weight:600; text-transform:uppercase; letter-spacing:0.08em;">What happens next</p>
        <ul style="margin:12px 0 0; padding:0 0 0 20px; color:#334155; font-size:14px; line-height:1.8;">
          <li>One of our team will email you within 1 business day</li>
          <li>We'll schedule a 20-minute walkthrough tailored to ${data.industry}</li>
          <li>After the demo you get a 7-day free trial — no credit card needed</li>
        </ul>
      </div>
      <div style="text-align:center; margin:28px 0;">
        <a href="${calendlyUrl}" style="display:inline-block; background:linear-gradient(135deg,#1E6AB5,#20B5A2); color:#ffffff; padding:14px 32px; border-radius:8px; font-weight:700; font-size:15px; text-decoration:none;">Book a time on Calendly</a>
      </div>
      <p style="color:#64748b; font-size:13px; line-height:1.7; margin:0;">
        Any questions in the meantime? Reply to this email or call us on
        <a href="tel:+447490350688" style="color:#20B5A2;">+44 7490 350688</a>.
      </p>
    </div>
    ${EMAIL_FOOTER}
  </div>
</body>
</html>`,
    text: `Hi ${firstName},\n\nThanks for requesting a demo of OpesFlux. We'll be in touch within one business day to confirm your slot.\n\nOr book directly: ${calendlyUrl}\n\nAny questions? Reply to this email or call +44 7490 350688.\n\nThe OpesFlux Team`,
  };
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { fullName, email, company, phone, industry, teamSize, message, hearAbout, plan } = body;

    if (!fullName || !email || !company || !industry || !teamSize) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const transporter = createTransport();

    await Promise.all([
      transporter.sendMail(
        buildNotificationEmail({ fullName, email, company, phone, industry, teamSize, message, hearAbout, plan })
      ),
      transporter.sendMail(
        buildConfirmationEmail({ fullName, email, industry })
      ),
    ]);

    const slackWebhook = process.env.SLACK_WEBHOOK_URL;
    if (slackWebhook) {
      await fetch(slackWebhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: `📋 New demo request from *${fullName}* at *${company}* (${industry}, ${teamSize} staff)${plan ? ` — interested in ${plan}` : ""}`,
        }),
      }).catch(() => {});
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Failed to send email. Please try again." }, { status: 500 });
  }
}
