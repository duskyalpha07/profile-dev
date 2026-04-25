import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Wrong method' });
  }

  try {
    const { name, message, email } = req.body;

    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: 'emiem.gdl@gmail.com',
      subject: `Nuevo mensaje de tu Portafolio - ${name}`,
      html: `
        <h3>Tienes un nuevo mensaje de contacto</h3>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email de contacto:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `,
    });
    if (error) {
      console.error("Error de Resend:", error);
      return res.status(400).json({ error });
    }
    return res.status(200).json({ data });
    
  } catch (catchError) {
    console.error("Error de Servidor:", catchError);
    return res.status(500).json({ error: catchError.message });
  }
}