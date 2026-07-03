import { ContactForm } from '../components/ContactForm';

export default function ContactPage() {
  return (
    <section className="py-20 max-w-xl">
      <p className="text-xs font-mono text-gray-400 dark:text-gray-600 mb-2">contact</p>
      
      {/* Title and Subtitle mirroring the style in image_067071.png */}
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight pt-4">Get in Touch</h1>
      <p className="text-gray-500 dark:text-gray-400 mb-8 text-sm">
        Have a project in mind or just want to say hi? Feel free to reach out, and I'll get back to you as soon as I can.
      </p>
      
      <ContactForm />
    </section>
  );
}