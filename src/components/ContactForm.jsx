import { useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    license: "",
    message: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted! (Frontend only)");
  };

  return (
    <section className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
      <h2 className="text-3xl font-bold mb-10 text-center">Get in Touch</h2>
      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto grid gap-6">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
          className="p-3 border rounded bg-white dark:bg-gray-900 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          className="p-3 border rounded bg-white dark:bg-gray-900 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
        />
        <input
          type="text"
          name="company"
          placeholder="Company"
          value={form.company}
          onChange={handleChange}
          required
          className="p-3 border rounded bg-white dark:bg-gray-900 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
        />
        <select
          name="license"
          value={form.license}
          onChange={handleChange}
          required
          className="p-3 border rounded bg-white dark:bg-gray-900 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
        >
          <option value="">Select License Type</option>
          <option>Windows</option>
          <option>Office</option>
          <option>Adobe</option>
          <option>Other</option>
        </select>
        <textarea
          name="message"
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
          required
          className="p-3 border h-32 rounded bg-white dark:bg-gray-900 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
        />
        <button
          type="submit"
          className="bg-brand text-white font-semibold py-3 px-6 rounded hover:bg-brand-dark transition"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
