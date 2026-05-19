'use server';

export interface ContactFormState {
  status: 'idle' | 'success' | 'error';
  message: string;
}

export async function sendContactMessage(
  _prev: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = String(formData.get('name') || '').trim();
  const email = String(formData.get('email') || '').trim();
  const message = String(formData.get('message') || '').trim();

  if (!name || !email || !message) {
    return { status: 'error', message: 'Please fill in all fields.' };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { status: 'error', message: 'Please enter a valid email address.' };
  }

  // TODO: Integrate with email service (Resend, SendGrid, Nodemailer, etc.)
  // For now this logs and acknowledges. Example with Resend:
  //
  // import { Resend } from 'resend';
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // await resend.emails.send({
  //   from: 'portfolio@yourdomain.com',
  //   to: 'ahmed05muhtasim@gmail.com',
  //   subject: `New message from ${name}`,
  //   text: `From: ${name} <${email}>\n\n${message}`,
  // });

  console.log('Contact form submission:', { name, email, message });

  return {
    status: 'success',
    message: "Thanks! I'll get back to you soon.",
  };
}
