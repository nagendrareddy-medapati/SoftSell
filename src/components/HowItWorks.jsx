const steps = [
  {
    icon: "📤",
    title: "Upload License",
    desc: "Submit your software license details securely.",
  },
  {
    icon: "🔍",
    title: "Get Valuation",
    desc: "We evaluate and provide a fair market offer.",
  },
  {
    icon: "💵",
    title: "Get Paid",
    desc: "Accept the offer and receive fast payment.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 px-6 bg-gray-50 dark:bg-gray-800 text-center">
      <h2 className="text-3xl font-bold mb-10">How It Works</h2>
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {steps.map((step, i) => (
          <div
            key={i}
            className="bg-white dark:bg-gray-900 shadow-md p-6 rounded-xl transition"
          >
            <div className="text-4xl mb-4">{step.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
