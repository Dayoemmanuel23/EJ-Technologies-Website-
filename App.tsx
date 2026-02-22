import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SectionHeader from './components/SectionHeader';
import Footer from './components/Footer';
import Button from './components/Button';
import StorySection from './components/StorySection';
import TrainingCard from './components/TrainingCard';
import WhatsAppButton from './components/WhatsAppButton';
import { TESTIMONIALS, SERVICES, TRAINING_COURSES } from './constants';
import { Quote, Send, Code, Smartphone, FileCheck, Calculator, Sun, Palette, Check } from 'lucide-react';
import { contactService } from './services/api';
import { validateContactForm } from './utils/contactValidation';

const App: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [showSendOptions, setShowSendOptions] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [validationErrors, setValidationErrors] = useState<string[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setValidationErrors([]);

    // Frontend validation
    const errors = validateContactForm(formData);
    if (errors.length > 0) {
      setValidationErrors(errors);
      setLoading(false);
      return;
    }

    try {
      console.log('Form submit initiated with data:', formData);
      const result = await contactService.submitContact(formData);
      console.log('Form submission successful:', result);
      setSubmitted(true);
      setShowSendOptions(true);
      // Do not auto-hide the modal; wait for user action
    } catch (err: any) {
      const errorMsg = err.response?.data?.error || err.response?.data?.details || err.message || 'Failed to send message. Please try again.';
      console.error('Form submission failed:', errorMsg);
      setError(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  // Helper functions for each channel
  const getWhatsAppUrl = () => {
    const phoneNumber = '2348064126498';
    const text = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService: ${formData.service}\nMessage: ${formData.message}`
    );
    return `https://wa.me/${phoneNumber}?text=${text}`;
  };

  const getMailtoUrl = () => {
    const subject = encodeURIComponent(`New Contact: ${formData.service}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService: ${formData.service}\nMessage: ${formData.message}`
    );
    return `mailto:info@ejtechnologies.com.ng?subject=${subject}&body=${body}`;
  };

  const getTwitterUrl = () => {
    const text = encodeURIComponent(
      `Contact: ${formData.name} (${formData.email}) - ${formData.service}: ${formData.message}`
    );
    return `https://twitter.com/messages/compose?recipient_id=ejtechnologies&text=${text}`;
  };

  const getFacebookUrl = () => {
    // Facebook Messenger link (user must be logged in)
    const text = encodeURIComponent(
      `Contact: ${formData.name} (${formData.email}) - ${formData.service}: ${formData.message}`
    );
    return `https://m.me/ejtechnologies1st?ref=${text}`;
  };

  const getInstagramUrl = () => {
    // Instagram DMs cannot be prefilled, but open profile
    return `https://www.instagram.com/ejtechnologies_/`;
  };

  const handleSendOption = (option: 'whatsapp' | 'email' | 'twitter' | 'facebook' | 'instagram') => {
    setShowSendOptions(false);
    setSubmitted(false);
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    if (option === 'whatsapp') {
      window.open(getWhatsAppUrl(), '_blank');
    } else if (option === 'email') {
      window.open(getMailtoUrl(), '_blank');
    } else if (option === 'twitter') {
      window.open(getTwitterUrl(), '_blank');
    } else if (option === 'facebook') {
      window.open(getFacebookUrl(), '_blank');
    } else if (option === 'instagram') {
      window.open(getInstagramUrl(), '_blank');
    }
  };

  return (

    <div className="min-h-screen font-sans text-slate-900">
      <Navbar />
      <WhatsAppButton />
      <main>
        <Hero />

        {/* About Summary / Stats */}
        <section id="services-overview" className="py-20 bg-brand-blue text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
               <h2 className="text-2xl font-bold mb-4 opacity-90">Why Choose EJ Technologies?</h2>
               <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 divide-x divide-white/20">
                  <div className="p-4">
                     <div className="text-4xl font-bold text-white mb-2">500+</div>
                     <div className="text-blue-100 text-sm">Projects Delivered</div>
                  </div>
                  <div className="p-4">
                     <div className="text-4xl font-bold text-brand-green mb-2">98%</div>
                     <div className="text-blue-100 text-sm">Client Satisfaction</div>
                  </div>
                  <div className="p-4">
                     <div className="text-4xl font-bold text-white mb-2">24/7</div>
                     <div className="text-blue-100 text-sm">Support Active</div>
                  </div>
                  <div className="p-4">
                     <div className="text-4xl font-bold text-brand-green mb-2">NG</div>
                     <div className="text-blue-100 text-sm">Nationwide Coverage</div>
                  </div>
               </div>
            </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 bg-white/60 backdrop-blur-sm overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
             <SectionHeader 
              title="Client Success Stories" 
              subtitle="See how we have helped businesses thrive."
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {TESTIMONIALS.map((t) => (
                <div key={t.id} className="relative bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                  <Quote className="absolute top-6 right-6 text-slate-100 h-10 w-10" />
                  <p className="text-slate-600 italic mb-6 relative z-10">"{t.text}"</p>
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-brand-blue/10 flex items-center justify-center font-bold text-brand-blue">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-slate-900">{t.name}</h4>
                      <p className="text-xs text-slate-500">{t.role}, {t.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-24 relative">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
                Let's Start Your Project
              </h2>
              <p className="text-lg text-slate-600">
                Reach out for a quote on software, registration, consultancy, or training.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-slate-200">
              {submitted && showSendOptions ? (
                <div className="text-center py-12">
                  <div className="mx-auto h-16 w-16 bg-brand-green/20 rounded-full flex items-center justify-center mb-6">
                    <Send className="h-8 w-8 text-brand-green" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                  <p className="text-slate-600 mb-6">We'll get back to you within 24 hours.<br/>Would you like to send this message to:</p>
                  <div className="flex flex-wrap gap-3 justify-center">
                    <button type="button" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded font-bold" onClick={() => handleSendOption('whatsapp')}>WhatsApp</button>
                    <button type="button" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-bold" onClick={() => handleSendOption('email')}>Email</button>
                    <button type="button" className="bg-blue-400 hover:bg-blue-500 text-white px-4 py-2 rounded font-bold" onClick={() => handleSendOption('twitter')}>Twitter DM</button>
                    <button type="button" className="bg-blue-800 hover:bg-blue-900 text-white px-4 py-2 rounded font-bold" onClick={() => handleSendOption('facebook')}>Facebook Messenger</button>
                    <button type="button" className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded font-bold" onClick={() => handleSendOption('instagram')}>Instagram</button>
                  </div>
                  <p className="text-xs text-slate-400 mt-4">(Choose one. You can also copy and send manually.)</p>
                </div>
              ) : submitted ? (
                <div className="text-center py-12">
                  <div className="mx-auto h-16 w-16 bg-brand-green/20 rounded-full flex items-center justify-center mb-6">
                    <Send className="h-8 w-8 text-brand-green" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                  <p className="text-slate-600">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          autoComplete="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full rounded-lg border-slate-300 border px-4 py-3 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all"
                          placeholder="Vincent Michael"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          autoComplete="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full rounded-lg border-slate-300 border px-4 py-3 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all"
                          placeholder="vincent@company.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          autoComplete="tel"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full rounded-lg border-slate-300 border px-4 py-3 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all"
                          placeholder="0806 123 4567"
                        />
                      </div>
                    </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-2">Service Interested In</label>
                    <select
                      id="service"
                      name="service"
                      autoComplete="off"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full rounded-lg border-slate-300 border px-4 py-3 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all bg-white"
                    >
                      <option value="">Select a service...</option>
                      {SERVICES.map(s => (
                        <option key={s.id} value={s.title}>{s.title}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      autoComplete="off"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full rounded-lg border-slate-300 border px-4 py-3 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all"
                      placeholder="Tell us about your project or training needs..."
                    ></textarea>
                  </div>

                  {error && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                      {error}
                    </div>
                  )}
                  {validationErrors.length > 0 && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                      <ul className="list-disc pl-5">
                        {validationErrors.map((err, idx) => (
                          <li key={idx}>{err}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <div className="pt-4">
                    <Button type="submit" variant="primary" size="lg" className="w-full" disabled={loading}>
                      {loading ? 'Sending...' : 'Send Message'}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;