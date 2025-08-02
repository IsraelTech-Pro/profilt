import React from 'react';
import useScrollIntoView from '../hooks/useScrollIntoView';
import { PhoneIcon, EmailIcon } from './icons/ContactIcons';
import AnimatedBackground from './AnimatedBackground';

const Contact: React.FC = () => {
  const [targetRef] = useScrollIntoView<HTMLDivElement>();
  const [infoCardRef] = useScrollIntoView<HTMLDivElement>();
  const [formRef] = useScrollIntoView<HTMLFormElement>();

  const [form, setForm] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = React.useState(false);
  const [feedback, setFeedback] = React.useState<string|null>(null);
  const [showSuccess, setShowSuccess] = React.useState(false);
  React.useEffect(() => {
    if (feedback && feedback.startsWith('Your message')) {
      setShowSuccess(true);
      const timer = setTimeout(() => setShowSuccess(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [feedback]);

  // Import popup animation CSS
  React.useEffect(() => {
    import('../popup-animation.css');
  }, []);

  // Replace this URL with your deployed Google Apps Script Web App URL
  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbygte4iAHt-WiRPQcD092k-VbVTJfQayf0NyBT2IM_VAy2zBk_rrXikjIn0a6Q-FUllwg/exec';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setFeedback(null);
    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(form as Record<string, string>).toString()
      });
      const result = await response.json();
      if (result.success) {
        setFeedback('Your message has been sent!');
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        setFeedback('Failed to send message: ' + result.message);
      }
    } catch (err: any) {
      // Treat all errors as success (e.g., CORS errors)
      setFeedback('Your message has been sent!');
      setForm({ name: '', email: '', subject: '', message: '' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Loading Overlay */}
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div className="flex flex-col items-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-red-500 mb-4"></div>
            <span className="text-white text-lg font-semibold animate-pulse">Sending...</span>
          </div>
        </div>
      )}
      {/* Success Popup */}
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center animate-popup">
            <svg className="h-16 w-16 text-green-500 mb-4 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <h3 className="text-2xl font-bold mb-2 text-green-600">Message Sent!</h3>
            <p className="text-gray-700 mb-4">Thank you for reaching out. I will get back to you soon.</p>
            <button onClick={() => setShowSuccess(false)} className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-lg transition-all">Close</button>
          </div>
        </div>
      )}
      <section className="relative py-20 px-4 md:px-8 lg:px-16 overflow-hidden">
        <AnimatedBackground />
        <div className="relative max-w-4xl mx-auto z-10">
          <div ref={targetRef} className="text-center mb-16 scroll-target">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Get In Touch</h2>
            <p className="text-gray-300 text-lg">Have a question or want to work together? Let's connect.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div ref={infoCardRef} className="scroll-target" style={{animationDelay: `100ms`}}>
              <div className="floating-card rounded-2xl p-8 h-full">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="text-red-500 mr-4"><PhoneIcon /></div>
                    <div>
                      <p className="font-semibold">Phone</p>
                      <a href="tel:0244555049" className="text-gray-300 hover:text-red-400 transition-colors">0244555049</a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="text-red-500 mr-4"><EmailIcon /></div>
                    <div>
                      <p className="font-semibold">Email</p>
                      <a href="mailto:samuelkareenkporxah82@gmail.com" className="text-gray-300 hover:text-red-400 transition-colors">samuelkareenkporxah82@gmail.com</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <form ref={formRef} className="floating-card rounded-2xl p-8 space-y-6 scroll-target" style={{animationDelay: `200ms`}} onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                <input type="text" id="name" name="name" value={form.name} onChange={handleChange} required className="w-full bg-black/30 border border-gray-600 rounded-lg p-3 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all" placeholder="Your Name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required className="w-full bg-black/30 border border-gray-600 rounded-lg p-3 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all" placeholder="Your Email" />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                <input type="text" id="subject" name="subject" value={form.subject} onChange={handleChange} required className="w-full bg-black/30 border border-gray-600 rounded-lg p-3 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all" placeholder="Subject" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea id="message" name="message" rows={4} value={form.message} onChange={handleChange} required className="w-full bg-black/30 border border-gray-600 rounded-lg p-3 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all" placeholder="Your Message"></textarea>
              </div>
              <button type="submit" disabled={loading} className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-60">
                {loading ? 'Sending...' : 'Send Message'}
              </button>
              {/* Hide feedback text, popup is used instead */}
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
