import nodemailer from "nodemailer";

export const runtime = "nodejs"; // Ensure Node.js runtime

export async function POST(request) {
  const { firstName, lastName, email, phone, message } = await request.json();

  const transporter = nodemailer.createTransport({
    host: "smtp.zoho.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const mailOptions = {
    from: process.env.SMTP_USER,
    to: process.env.CONTACT_RECEIVER_EMAIL,
    subject: "New Customer From Jcns Solar Website",
    text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
    html: `<p><b>Message:</b> ${message}</p><p><b>Name:</b> ${firstName} ${lastName}</p><p><b>Email:</b> ${email}</p><p><b>Phone:</b> ${phone}</p>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }
}
