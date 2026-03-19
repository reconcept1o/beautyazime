export const runtime = 'edge';

import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY || 're_placeholder');
const TURNSTILE_SECRET_KEY = process.env.TURNSTILE_SECRET_KEY;

export async function POST(request) {
  try {
    const { name, email, phone, service, date, message, token } = await request.json();

    // 1. Cloudflare Turnstile Verification
    const verifyRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        secret: TURNSTILE_SECRET_KEY,
        response: token,
      }),
    });

    const verifyData = await verifyRes.json();
    if (!verifyData.success) {
      return NextResponse.json({ error: "Bot verification failed" }, { status: 403 });
    }

    // 2. Send Email to Azime Beauty
    await resend.emails.send({
      from: 'Azime Beauty <info@azimebeauty.com>', 
      to: 'azimebeauty@gmail.com', 
      reply_to: email, 
      subject: `New Request: ${service} - ${name}`,
      html: `
        <div style="font-family: sans-serif; padding: 30px; border: 1px solid #C0AE92; border-radius: 12px; max-width: 600px; color: #333;">
          <h2 style="color: #B50004; border-bottom: 2px solid #F5F5F5; padding-bottom: 15px; margin-bottom: 20px;">
            New Appointment Request
          </h2>
          <div style="line-height: 1.8;">
            <p><strong>Customer:</strong> ${name}</p>
            <p><strong>Service:</strong> ${service}</p>
            <p><strong>Date/Time:</strong> ${date}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Email:</strong> ${email}</p>
            <div style="background: #F9F9F9; padding: 15px; border-radius: 8px; margin-top: 15px; border-left: 4px solid #C0AE92;">
              <strong>Note:</strong><br />${message || 'No note provided.'}
            </div>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Email failed", detail: error.message }, { status: 500 });
  }
}