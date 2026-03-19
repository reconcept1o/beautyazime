import { Resend } from 'resend';
import { NextResponse } from 'next/server';

// Build sırasında patlamaması için API key yoksa boş string geçiyoruz
// Canlıda Cloudflare Variables kısmından gerçek keyi okuyacak
const resend = new Resend(process.env.RESEND_API_KEY || 're_placeholder');

export async function POST(request) {
  // Runtime kontrolü: Eğer key gerçekten yoksa hata dön
  if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === 're_placeholder') {
    console.error("Missing RESEND_API_KEY in environment variables");
    return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
  }

  try {
    const { name, email, phone, service, date, message } = await request.json();

    // 1. Azime Hanım'a Gelen Bildirim (Admin Maili)
    await resend.emails.send({
      from: 'Azime Beauty <info@send.azimebeauty.com>', 
      to: 'azimebeautynyc@gmail.com', // Azime Hanım'ın maili
      reply_to: email, 
      subject: `New Request: ${service} - ${name}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #C0AE92; border-radius: 8px;">
          <h2 style="color: #B50004;">New Appointment Request</h2>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
          <p><strong>Customer:</strong> ${name}</p>
          <p><strong>Service:</strong> ${service}</p>
          <p><strong>Preferred Date:</strong> ${date}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Customer Note:</strong> ${message || 'No note provided'}</p>
        </div>
      `,
    });

    // 2. Müşteriye Giden Onay (Auto-Reply)
    await resend.emails.send({
      from: 'Azime Beauty <info@send.azimebeauty.com>',
      to: email,
      subject: 'Confirmation: Your Appointment Request at Azime Beauty',
      html: `
        <div style="font-family: sans-serif; color: #333; max-width: 600px; line-height: 1.6;">
          <h1 style="color: #C0AE92;">Hello ${name},</h1>
          <p>Thank you for reaching out to <strong>Azime Beauty</strong> in Sunnyside, NY.</p>
          <p>We have received your request for <strong>${service}</strong> on <strong>${date}</strong>.</p>
          <p>Our team will review the schedule and contact you at <strong>${phone}</strong> shortly to confirm the final booking.</p>
          <br />
          <p>Stay Beautiful,</p>
          <p><strong>Azime Beauty Team</strong></p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
          <p style="font-size: 12px; color: #999;">
            48-17 Skillman Ave, Sunnyside, NY 11104<br />
            Phone: (914) 746-4232
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Resend Error Detail:", error);
    return NextResponse.json({ error: "Could not send emails", detail: error.message }, { status: 500 });
  }
}