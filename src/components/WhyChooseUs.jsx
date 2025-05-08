const features = [
  {
    icon: "🔐",
    title: "Secure & Transparent",
    desc: "We prioritize your privacy and transparency.",
  },
  {
    icon: "⚡",
    title: "Fast Turnaround",
    desc: "Quick valuation and payment process.",
  },
  {
    icon: "💰",
    title: "Best Market Prices",
    desc: "Get the highest value for your licenses.",
  },
  {
    icon: "🤝",
    title: "Trusted by Many",
    desc: "Used by businesses across multiple industries.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 px-6 text-center">
      <h2 className="text-3xl font-bold mb-10">Why Choose Us</h2>
      <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {features.map((f, i) => (
          <div
            key={i}
            className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-sm"
          >
            <div className="text-3xl mb-4">{f.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
