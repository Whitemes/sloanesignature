import { NextResponse } from "next/server";
import { Resend } from "resend";

const TO_EMAIL = "hello@sloanesignature.com";

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is not configured");
      return NextResponse.json(
        { error: "Service email non configure." },
        { status: 500 },
      );
    }

    const resend = new Resend(apiKey);
    const fromEmail = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";
    const body = await request.json();
    const { name, email, phone, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Nom, email et message sont requis." },
        { status: 400 },
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Adresse email invalide." },
        { status: 400 },
      );
    }

    const { error } = await resend.emails.send({
      from: `Sloane Signature <${fromEmail}>`,
      to: [TO_EMAIL],
      replyTo: email,
      subject: `Nouveau message de ${name}`,
      html: `
        <div style="font-family: 'Georgia', serif; max-width: 600px; margin: 0 auto; color: #3C2415;">
          <h2 style="color: #3C2415; border-bottom: 1px solid #C9A89A; padding-bottom: 12px;">
            Nouveau message depuis le site
          </h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 120px;">Nom</td>
              <td style="padding: 8px 0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Email</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #3C2415;">${email}</a></td>
            </tr>
            ${phone ? `<tr><td style="padding: 8px 0; font-weight: bold;">Telephone</td><td style="padding: 8px 0;">${phone}</td></tr>` : ""}
          </table>
          <div style="margin-top: 20px; padding: 16px; background-color: #F6F2EA; border-radius: 8px;">
            <p style="font-weight: bold; margin: 0 0 8px;">Message :</p>
            <p style="margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
          <p style="margin-top: 24px; font-size: 12px; color: #7A5C47;">
            Ce message a ete envoye depuis le formulaire de contact de sloanesignature.com
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Erreur lors de l'envoi. Veuillez reessayer." },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Erreur serveur. Veuillez reessayer." },
      { status: 500 },
    );
  }
}
