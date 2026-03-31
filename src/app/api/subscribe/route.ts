import { NextRequest, NextResponse } from "next/server";

const TG_TOKEN = process.env.TELEGRAM_BOT_TOKEN!;
const TG_CHAT = process.env.TELEGRAM_CHAT_ID!;

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();
    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "invalid email" }, { status: 400 });
    }

    // Extract browser/geo info from headers
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "unknown";
    const country = req.headers.get("x-vercel-ip-country") || "?";
    const city = req.headers.get("x-vercel-ip-city") || "?";
    const region = req.headers.get("x-vercel-ip-country-region") || "?";
    const ua = req.headers.get("user-agent") || "unknown";
    const referer = req.headers.get("referer") || "direct";
    const locale = req.headers.get("accept-language")?.split(",")[0] || "?";
    const time = new Date().toISOString().replace("T", " ").slice(0, 19) + " UTC";

    // Parse UA for readable browser/OS
    const browser = parseBrowser(ua);
    const os = parseOS(ua);

    const message =
      `📬 <b>New subscriber</b>\n` +
      `\n` +
      `<b>Email:</b> <code>${escapeHtml(email)}</code>\n` +
      `<b>Time:</b> ${time}\n` +
      `\n` +
      `<b>Location:</b> ${city}, ${region}, ${country}\n` +
      `<b>IP:</b> <code>${ip}</code>\n` +
      `<b>Browser:</b> ${browser}\n` +
      `<b>OS:</b> ${os}\n` +
      `<b>Language:</b> ${locale}\n` +
      `<b>Referer:</b> ${escapeHtml(referer)}`;

    // Send to Telegram (silent)
    await fetch(`https://api.telegram.org/bot${TG_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: TG_CHAT,
        text: message,
        parse_mode: "HTML",
        disable_notification: true,
      }),
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "server error" }, { status: 500 });
  }
}

function escapeHtml(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function parseBrowser(ua: string): string {
  if (ua.includes("Firefox/")) return "Firefox " + ua.split("Firefox/")[1]?.split(" ")[0];
  if (ua.includes("Edg/")) return "Edge " + ua.split("Edg/")[1]?.split(" ")[0];
  if (ua.includes("Chrome/")) return "Chrome " + ua.split("Chrome/")[1]?.split(" ")[0];
  if (ua.includes("Safari/") && !ua.includes("Chrome")) return "Safari " + (ua.split("Version/")[1]?.split(" ")[0] || "");
  return ua.slice(0, 50);
}

function parseOS(ua: string): string {
  if (ua.includes("iPhone")) return "iOS (iPhone)";
  if (ua.includes("iPad")) return "iOS (iPad)";
  if (ua.includes("Android")) return "Android";
  if (ua.includes("Mac OS X")) return "macOS";
  if (ua.includes("Windows NT 10")) return "Windows 10/11";
  if (ua.includes("Windows")) return "Windows";
  if (ua.includes("Linux")) return "Linux";
  return "Unknown";
}
