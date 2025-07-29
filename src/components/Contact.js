import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="py-16 px-6 bg-[#1e293b] dark:bg-gray-800 text-white" id="contact">
      <h3 className="text-4xl font-bold text-center mb-4">Contact Me</h3>
      <h2 className="text-2xl text-center text-pink-500 mb-10 font-semibold">I'd Love To Hear From You</h2>
<form
  action="https://formsubmit.co/zainjamil455@gmail.com"
  method="POST"
  onSubmit={handleSubmit}
  className="max-w-xl mx-auto bg-base-100 p-8 rounded-2xl shadow-md text-base-content"
>
  <input type="hidden" name="_captcha" value="false" />
  <input type="hidden" name="_next" value="https://zain455377.github.io/Portfolio/" />
  <div className="mb-4">
    <input
      type="text"
      name="name"
      required
      value={formData.name}
      onChange={handleChange}
      placeholder="name"
      className="w-full p-3 bg-gray-800 text-white placeholder-gray-400 border-b-2 border-pink-500 focus:outline-none focus:ring-0 focus:border-pink-400"
    />
  </div>
  <div className="mb-4">
    <input
      type="email"
      name="email"
      required
      value={formData.email}
      onChange={handleChange}
      placeholder="email"
      className="w-full p-3 bg-gray-800 text-white placeholder-gray-400 border-b-2 border-pink-500 focus:outline-none focus:ring-0 focus:border-pink-400"
    />
  </div>
  <div className="mb-6">
    <textarea
      name="message"
      rows="5"
      required
      value={formData.message}
      onChange={handleChange}
      placeholder="message"
      className="w-full p-3 bg-gray-800 text-white placeholder-gray-400 border-b-2 border-pink-500 focus:outline-none focus:ring-0 focus:border-pink-400"
    />
  </div>
  <button
    type="submit"
    className="w-full py-3 px-6 bg-pink-600 hover:bg-pink-700 text-white rounded-xl text-lg font-semibold transition duration-300 shadow-md"
  >
    Submit
  </button>
</form>
    </section>
  );
};

export default Contact;