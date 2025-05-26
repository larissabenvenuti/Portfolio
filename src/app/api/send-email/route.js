import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { name, email, phoneNumber, message } = await request.json();

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ success: false, message: "Campos obrigatórios faltando" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `Nova proposta de ${name}`,
      html: `
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email do remetente:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${phoneNumber || "Não informado"}</p>
        <p><strong>Mensagem:</strong><br/>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ success: true, message: "Email enviado com sucesso!" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Erro ao enviar email:", error);
    return new Response(
      JSON.stringify({ success: false, message: "Erro ao enviar email." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
