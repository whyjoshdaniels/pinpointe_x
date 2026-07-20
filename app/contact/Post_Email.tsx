import nodemailer from "nodemailer";

export async function POST(req) {
  const body = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  const mailOptions = {
    from: body.email,
    to: process.env.MAIL_TO,
    subject: `WEBSITE message from ${body.name}`,
    text: `
Name: ${body.name}
Email: ${body.email}
Phone: ${body.phone}
Message: ${body.message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ success: true }));
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ success: false }), { status: 500 });
  }
}
  