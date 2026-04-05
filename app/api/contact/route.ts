import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return Response.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['bhuttoshahab15@gmail.com'],
      subject: `New Contact Form Message from ${name}`,
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <title>New Contact Message</title>
        </head>
        <body style="margin:0;padding:0;background:#0a0a0a;font-family:'Segoe UI',Arial,sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0a;padding:40px 0;">
            <tr>
              <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background:#111111;border-radius:16px;border:1px solid #27272a;overflow:hidden;max-width:600px;width:100%;">
                  <!-- Header -->
                  <tr>
                    <td style="padding:32px 40px;background:linear-gradient(135deg,#0e4a5a,#0a2540);border-bottom:1px solid #27272a;">
                      <p style="margin:0 0 8px;font-size:11px;letter-spacing:4px;color:#22d3ee;text-transform:uppercase;font-weight:600;">Portfolio Contact</p>
                      <h1 style="margin:0;font-size:26px;font-weight:700;color:#ffffff;">New Message Received</h1>
                    </td>
                  </tr>
                  <!-- Body -->
                  <tr>
                    <td style="padding:40px;">
                      <!-- Sender Info -->
                      <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
                        <tr>
                          <td style="padding:16px 20px;background:#1a1a1a;border-radius:12px;border-left:3px solid #22d3ee;">
                            <p style="margin:0 0 4px;font-size:11px;color:#71717a;text-transform:uppercase;letter-spacing:2px;">From</p>
                            <p style="margin:0;font-size:18px;font-weight:600;color:#ffffff;">${name}</p>
                          </td>
                        </tr>
                      </table>
                      <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
                        <tr>
                          <td style="padding:16px 20px;background:#1a1a1a;border-radius:12px;border-left:3px solid #22d3ee;">
                            <p style="margin:0 0 4px;font-size:11px;color:#71717a;text-transform:uppercase;letter-spacing:2px;">Email</p>
                            <a href="mailto:${email}" style="color:#22d3ee;text-decoration:none;font-size:16px;font-weight:500;">${email}</a>
                          </td>
                        </tr>
                      </table>
                      <!-- Message -->
                      <p style="margin:0 0 12px;font-size:11px;color:#71717a;text-transform:uppercase;letter-spacing:2px;">Message</p>
                      <div style="background:#1a1a1a;border-radius:12px;padding:24px;border:1px solid #27272a;">
                        <p style="margin:0;font-size:16px;line-height:1.7;color:#d4d4d8;white-space:pre-wrap;">${message}</p>
                      </div>
                      <!-- CTA -->
                      <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:32px;">
                        <tr>
                          <td align="center">
                            <a href="mailto:${email}" style="display:inline-block;padding:14px 32px;background:#22d3ee;color:#000000;font-weight:700;font-size:15px;border-radius:50px;text-decoration:none;letter-spacing:0.5px;">Reply to ${name}</a>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <!-- Footer -->
                  <tr>
                    <td style="padding:20px 40px;border-top:1px solid #27272a;text-align:center;">
                      <p style="margin:0;font-size:12px;color:#52525b;">Sent from your portfolio contact form</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return Response.json(
        { error: 'Failed to send email. Please try again.' },
        { status: 500 }
      );
    }

    return Response.json({ success: true, message: 'Message sent successfully!' });
  } catch (err) {
    console.error('Contact route error:', err);
    return Response.json(
      { error: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    );
  }
}
