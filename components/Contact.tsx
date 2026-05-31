'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { sendContactMessage, type ContactFormState } from '@/app/actions';

const initialState: ContactFormState = { status: 'idle', message: '' };

const contactInfo = [
  { icon: 'call', label: 'Call Me', value: '+880 1534761175' },
  { icon: 'mail', label: 'Email', value: 'ahmed05muhtasim@gmail.com' },
  { icon: 'location_on', label: 'Address', value: '42/C Moneshwar Road, Dhaka' },
];

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full bg-primary text-on-primary py-4 rounded-xl text-label-md hover:shadow-lg active:scale-[0.98] transition-standard disabled:opacity-60 disabled:cursor-not-allowed"
    >
      {pending ? 'Sending…' : 'Send Message'}
    </button>
  );
}

export default function Contact() {
  const [state, formAction] = useFormState(sendContactMessage, initialState);

  return (
    <section id="contact" className="py-xxl bg-surface-container-low">
      <div className="max-w-container mx-auto px-gutter">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-headline-md text-on-surface mb-4">
              Let&apos;s Connect
            </h2>
            <p className="text-body-lg text-on-surface-variant mb-12">
              I&apos;m always open to discussing new projects, creative ideas, or
              opportunities to be part of your visions.
            </p>
            <div className="space-y-8">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">{info.icon}</span>
                  </div>
                  <div>
                    <p className="text-label-md text-on-surface-variant uppercase tracking-widest">
                      {info.label}
                    </p>
                    <p className="text-body-lg text-on-surface font-semibold">
                      {info.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form
            action={formAction}
            className="bg-surface-container-lowest p-8 rounded-3xl border border-outline-variant/30 shadow-xl space-y-6"
          >
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="text-label-md text-on-surface-variant ml-1 block"
              >
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="John Doe"
                className="w-full bg-surface border border-outline-variant focus:border-primary focus:ring-2 focus:ring-primary/30 focus:outline-none rounded-xl p-4 transition-standard text-body-md"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-label-md text-on-surface-variant ml-1 block"
              >
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="john@example.com"
                className="w-full bg-surface border border-outline-variant focus:border-primary focus:ring-2 focus:ring-primary/30 focus:outline-none rounded-xl p-4 transition-standard text-body-md"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="message"
                className="text-label-md text-on-surface-variant ml-1 block"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                placeholder="How can I help you?"
                className="w-full bg-surface border border-outline-variant focus:border-primary focus:ring-2 focus:ring-primary/30 focus:outline-none rounded-xl p-4 transition-standard text-body-md"
              />
            </div>

            {state.status !== 'idle' && (
              <div
                role="status"
                className={`text-body-md p-3 rounded-lg ${
                  state.status === 'success'
                    ? 'bg-primary/10 text-primary'
                    : 'bg-error/10 text-error'
                }`}
              >
                {state.message}
              </div>
            )}

            <SubmitButton />
          </form>
        </div>
      </div>
    </section>
  );
}
