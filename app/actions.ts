'use server';

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
  try {
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

    const apiKey = process.env.RESEND_API_KEY;

    // If Resend isn't configured yet, log the message to server console
    // so submissions aren't lost during setup. Return success to the user
    // (so they don't see a scary error) but in the server logs we have it.
    if (!apiKey) {
      console.log('[Contact form - Resend not configured yet]', {
        name,
        email,
        message,
      });
      return {
        status: 'success',
        message: "Thanks! I'll get back to you soon.",
      };
    }

    // Lazy import + initialize so this doesn't crash at module load time
    const { Resend } = await import('resend');
    const resend = new Resend(apiKey);

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
    console.error('Unexpected error in sendContactMessage:', err);
    return {
      status: 'error',
      message: 'Something went wrong. Please try again later.',
    };
  }
}
