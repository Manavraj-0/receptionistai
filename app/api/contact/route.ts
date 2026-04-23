import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, business, plan, message } = body;

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required.' },
        { status: 400 }
      );
    }

    // Create transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email to the business
    await transporter.sendMail({
      from: `"DaizyAI Website" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL || 'daizyaiinfo@gmail.com',
      replyTo: email,
      subject: `New enquiry – ${plan || 'General'} – ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0f1729; border-bottom: 1px solid #e2e8f0; padding-bottom: 12px;">
            New Enquiry from DaizyAI Website
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
            <tr>
              <td style="padding: 8px 12px; font-weight: 600; color: #64748b; width: 120px;">Name</td>
              <td style="padding: 8px 12px; color: #0f1729;">${name}</td>
            </tr>
            <tr style="background: #f8fafc;">
              <td style="padding: 8px 12px; font-weight: 600; color: #64748b;">Email</td>
              <td style="padding: 8px 12px; color: #0f1729;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; font-weight: 600; color: #64748b;">Phone</td>
              <td style="padding: 8px 12px; color: #0f1729;">${phone || '—'}</td>
            </tr>
            <tr style="background: #f8fafc;">
              <td style="padding: 8px 12px; font-weight: 600; color: #64748b;">Business</td>
              <td style="padding: 8px 12px; color: #0f1729;">${business || '—'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; font-weight: 600; color: #64748b;">Plan</td>
              <td style="padding: 8px 12px; color: #0f1729; font-weight: 600;">${plan || 'Not selected'}</td>
            </tr>
            ${message ? `
            <tr style="background: #f8fafc;">
              <td style="padding: 8px 12px; font-weight: 600; color: #64748b; vertical-align: top;">Message</td>
              <td style="padding: 8px 12px; color: #0f1729;">${message}</td>
            </tr>
            ` : ''}
          </table>
          <p style="margin-top: 24px; font-size: 12px; color: #94a3b8;">
            Sent from the DaizyAI website contact form
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    );
  }
}
