import React, { useState } from 'react';
import { Send } from 'lucide-react';
 
export default function ContactForm({ context = 'therapy' }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState(''); // 'submitting', 'success', 'error'
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
 // https://formspree.io/f/mojbewrb - Michelle formspree endpoint
    try {
      const response = await fetch('https://formspree.io/f/mojbewrb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          context: context === 'therapy' ? 'Clinical Therapy Inquiry' : context === 'coaching' ? 'Executive Coaching Inquiry' : 'General Inquiry'
        })
      });
 
      if (response.ok) {
        setStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: ''
        });
        // Reset success message after 5 seconds
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };
 
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
 
  return (
    <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
      {status === 'success' && (
        <div className="bg-green-50 border-2 border-green-500 text-green-800 px-4 md:px-6 py-3 md:py-4 rounded-lg text-center text-sm md:text-base font-semibold">
          ✓ Thank you! Your message has been sent successfully. Dr. Michelle will be in touch soon.
        </div>
      )}
      
      {status === 'error' && (
        <div className="bg-red-50 border-2 border-red-500 text-red-800 px-4 md:px-6 py-3 md:py-4 rounded-lg text-center text-sm md:text-base font-semibold">
          ✗ There was an error sending your message. Please try again or email directly at drmichelleepstein@gmail.com
        </div>
      )}
 
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div>
          <label className="block text-sm md:text-base font-bold text-black mb-2">First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            disabled={status === 'submitting'}
            className="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base border border-gray-300 rounded focus:outline-none focus:border-gray-900 transition-colors disabled:bg-gray-100"
          />
        </div>
        <div>
          <label className="block text-sm md:text-base font-bold text-black mb-2">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            disabled={status === 'submitting'}
            className="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base border border-gray-300 rounded focus:outline-none focus:border-gray-900 transition-colors disabled:bg-gray-100"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm md:text-base font-bold text-black mb-2">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          disabled={status === 'submitting'}
          className="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base border border-gray-300 rounded focus:outline-none focus:border-gray-900 transition-colors disabled:bg-gray-100"
        />
      </div>
      <div>
        <label className="block text-sm md:text-base font-bold text-black mb-2">Phone Number</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          disabled={status === 'submitting'}
          className="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base border border-gray-300 rounded focus:outline-none focus:border-gray-900 transition-colors disabled:bg-gray-100"
        />
      </div>
      <div>
        <label className="block text-sm md:text-base font-bold text-black mb-2">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          disabled={status === 'submitting'}
          className="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base border border-gray-300 rounded focus:outline-none focus:border-gray-900 transition-colors resize-none disabled:bg-gray-100"
        />
      </div>
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full px-6 md:px-8 py-3 md:py-4 bg-gray-900 text-white text-sm md:text-base font-medium rounded hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        <Send size={18} />
        <span>{status === 'submitting' ? 'Sending...' : 'Send Message'}</span>
      </button>
    </form>
  );
}