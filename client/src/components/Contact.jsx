
import React, { useState } from 'react';
export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitStatus, setSubmitStatus] = useState('');

  // const apiUrl ="https://portfolio-g31z.vercel.app/contact";
   const apiUrl ="https://portfolio-server-1.vercel.app/contact";
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('Message sent successfully , please dont send unnecessary messages');
      } else {
        setSubmitStatus('Failed to send message');
      }
    } catch (error) {
      setSubmitStatus('Error sending message');
    }
  };

  return (
    <section id='contact' className="bg-black min-h-screen text-white flex flex-col items-center py-16 px-6 lg:px-24">
      <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
      <form onSubmit={handleSubmit} className="bg-black/60 p-8 rounded-lg shadow-lg border border-gray-700 backdrop-blur-sm w-full max-w-lg">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-semibold mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-md border border-gray-600 bg-transparent text-white placeholder-gray-400 focus:border-indigo-500 focus:outline-none"
            placeholder="Your Name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-semibold mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-md border border-gray-600 bg-transparent text-white placeholder-gray-400 focus:border-indigo-500 focus:outline-none"
            placeholder="Your Email"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-semibold mb-2">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className="w-full p-3 rounded-md border border-gray-600 bg-transparent text-white placeholder-gray-400 focus:border-indigo-500 focus:outline-none"
            placeholder="Your Message"
          />
        </div>
        <button type="submit" className="w-full py-2.5 px-4 rounded-md bg-indigo-600 text-white font-semibold shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          Send Message
        </button>
        {submitStatus && <p className="mt-4 text-center">{submitStatus}</p>}
      </form>
    </section>
  );
}
