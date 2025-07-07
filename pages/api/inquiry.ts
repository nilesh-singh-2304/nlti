import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST requests allowed' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Please fill all fields.' });
  }

  try {
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev', // Must use this if domain not verified
      to: 'shyaam2304@gmail.com',
      subject: `New Inquiry from ${name}`,
      html: `
        <div style="font-family: Arial; padding: 10px;">
          <h2>📬 New Inquiry Received</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong><br/>${message}</p>
        </div>
      `,
    });

    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error("Resend Error:", error);
    return res.status(500).json({ error: error.message || "Failed to send email." });
  }
}
