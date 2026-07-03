import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const ContactForm = () => {
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus('');

        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            form.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
            .then(() => {
                setStatus('Message sent successfully!');
                form.current.reset();
            }, () => {
                setStatus('Failed to send. Please try again.');
            })
            .finally(() => setIsSubmitting(false));
    };

    const inputStyle = "w-full bg-transparent border border-gray-200 dark:border-gray-800 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gray-400 dark:focus:border-gray-600 transition-colors placeholder:text-gray-400 dark:placeholder:text-gray-600 text-gray-900 dark:text-gray-100";

    return (
        <form ref={form} onSubmit={sendEmail} className="space-y-4 max-w-xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input name="user_name" type="text" placeholder="Name" required className={inputStyle} />
                <input name="user_email" type="email" placeholder="Email" required className={inputStyle} />
            </div>
            <textarea name="message" placeholder="Message" rows={6} required className={inputStyle} />

            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg py-3 text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
            >
                {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            {status && <p className="text-xs text-center text-gray-500">{status}</p>}
        </form>
    );
};