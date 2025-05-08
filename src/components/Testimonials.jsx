const testimonials = [
  {
    name: "Anjali Desai",
    role: "Procurement Lead",
    company: "TechVerse",
    quote:
      "SoftSell made the license liquidation process smooth and profitable. Super service!",
  },
  {
    name: "Rahul Mehta",
    role: "IT Admin",
    company: "NetSage",
    quote:
      "Quick turnaround and clear process. Would definitely recommend to others.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 px-6 bg-white dark:bg-gray-900 text-center">
      <h2 className="text-3xl font-bold mb-10">What Our Customers Say</h2>
      <div className="flex flex-col md:flex-row justify-center gap-8 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow max-w-sm"
          >
            <p className="italic mb-4">“{t.quote}”</p>
            <div className="font-semibold">{t.name}</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              {t.role}, {t.company}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
