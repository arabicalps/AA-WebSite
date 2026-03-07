// =============================================================================
// frontend/api/contact.js
// =============================================================================
// Vercel Serverless Function.
//
// Receives enquiries from both:
//   1. The chatbot  (Chatbot.js)  — sends: name, email, phone, company, message
//   2. The contact form (Contact.js) — sends: name, email, phone, company, message
//
// Both forms now use identical field names, so this function is simple —
// it just receives the five fields and sends the email. No detection needed.
//
// Required environment variables (add in Vercel dashboard → Settings → Environment Variables):
//   SMTP_HOST      →  mail.hostpoint.ch
//   SMTP_USER      →  info@arabicalps.ch
//   SMTP_PASSWORD  →  your Hostpoint SMTP password
// =============================================================================

const nodemailer = require('nodemailer');

export default async function handler(req, res) {

  // Only accept POST requests — reject anything else
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Unpack the five fields sent by both forms
  const { name, email, phone, company, message } = req.body;

  // Basic validation — name and email are required
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }

  // ── Connect to Hostpoint SMTP ──────────────────────────────────────────────
  // Credentials come from Vercel's encrypted environment variables vault,
  // never from this code file directly.
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,       // mail.hostpoint.ch
    port: 587,
    secure: false,                     // STARTTLS — upgrades to encrypted automatically
    auth: {
      user: process.env.SMTP_USER,     // info@arabicalps.ch
      pass: process.env.SMTP_PASSWORD, // your Hostpoint SMTP password
    },
  });

  // ── Compose the email ──────────────────────────────────────────────────────
  const mailOptions = {
    from: `"Arabic Alps Website" <${process.env.SMTP_USER}>`,
    to: 'info@arabicalps.ch',
    cc: 'nawal@arabicalps.ch',
    subject: `New Enquiry from ${name}`,

    // Plain text version — fallback for email clients that don't render HTML
    text: `
New enquiry received via arabicalps.com

────────────────────────────────────
CONTACT DETAILS
────────────────────────────────────
Name:     ${name}
Email:    ${email}
Phone:    ${phone || 'Not provided'}
Company:  ${company || 'Not provided'}

MESSAGE
────────────────────────────────────
${message || 'Not provided'}

────────────────────────────────────
Sent automatically from arabicalps.com
    `.trim(),

    // HTML version — clean, professional layout for most inboxes
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; color: #0f172a;">

        <div style="border-bottom: 2px solid #4fa3e0; padding-bottom: 16px; margin-bottom: 24px;">
          <h2 style="margin: 0 0 4px 0; color: #0f172a;">New Enquiry — Arabic Alps</h2>
          <p style="margin: 0; color: #64748b; font-size: 14px;">Received via arabicalps.com</p>
        </div>

        <h3 style="color: #1e293b; margin: 0 0 12px 0;">Contact Details</h3>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 28px;">
          <tr style="border-bottom: 1px solid #e2e8f0;">
            <td style="padding: 10px 12px; color: #64748b; width: 130px; font-size: 14px;">Name</td>
            <td style="padding: 10px 12px; color: #0f172a; font-weight: 600;">${name}</td>
          </tr>
          <tr style="border-bottom: 1px solid #e2e8f0;">
            <td style="padding: 10px 12px; color: #64748b; font-size: 14px;">Email</td>
            <td style="padding: 10px 12px;">
              <a href="mailto:${email}" style="color: #4fa3e0; text-decoration: none;">${email}</a>
            </td>
          </tr>
          <tr style="border-bottom: 1px solid #e2e8f0;">
            <td style="padding: 10px 12px; color: #64748b; font-size: 14px;">Phone</td>
            <td style="padding: 10px 12px; color: #0f172a;">${phone || '—'}</td>
          </tr>
          <tr>
            <td style="padding: 10px 12px; color: #64748b; font-size: 14px;">Company</td>
            <td style="padding: 10px 12px; color: #0f172a;">${company || '—'}</td>
          </tr>
        </table>

        <h3 style="color: #1e293b; margin: 0 0 12px 0;">Message</h3>
        <div style="background: #f8fafc; padding: 16px 20px; border-radius: 8px; border-left: 4px solid #4fa3e0; color: #1e293b; line-height: 1.7; white-space: pre-wrap;">
${message || 'Not provided'}
        </div>

        <p style="color: #94a3b8; font-size: 12px; margin-top: 32px; padding-top: 16px; border-top: 1px solid #e2e8f0;">
          Sent automatically from arabicalps.com
        </p>
      </div>
    `,
  };

  // ── Send and respond ───────────────────────────────────────────────────────
  try {
    await transporter.sendMail(mailOptions);
    // If we reach here, the email was delivered to Hostpoint successfully
    return res.status(200).json({ success: true });
  } catch (error) {
    // Logged in Vercel's Logs tab — never shown to the visitor
    console.error('Failed to send email:', error);
    return res.status(500).json({ error: 'Failed to send email. Please try again.' });
  }
}