import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="bg-brand text-white dark:bg-brand-dark text-center py-24 px-6">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold mb-6"
      >
        Sell Unused Software Licenses for Profit
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-lg max-w-2xl mx-auto mb-8"
      >
        SoftSell helps you quickly sell your unused software licenses. Secure,
        fast, and profitable.
      </motion.p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        className="bg-white text-brand font-semibold px-6 py-3 rounded shadow hover:bg-gray-100 transition"
      >
        Get a Free Quote
      </motion.button>
    </section>
  );
};

export default Hero;
