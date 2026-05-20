'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Where messages should be delivered
const TO_EMAIL = 'muhtasima80@gmail.com';

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

  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not set');
    return {
      status: 'error',
      message: 'Email service not configured. Please try again later.',
    };
  }

  try {
    const { error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: TO_EMAIL,
      replyTo: email,
      subject: `New portfolio message from ${name}`,
      text: `You received a new message from your portfolio site.

From: ${name}
Email: ${email}

Message:
${message}

---
Reply directly to this email to respond to ${name}.`,
    });

    if (error) {
      console.error('Resend error:', error);
      return {
        status: 'error',
        message: 'Something went wrong sending the message. Please try again.',
      };
    }

    return {
      status: 'success',
      message: "Thanks! I'll get back to you soon.",
    };
  } catch (err) {
    console.error('Unexpected error:', err);
    return {
      status: 'error',
      message: 'Something went wrong. Please try again later.',
    };
  }
}
