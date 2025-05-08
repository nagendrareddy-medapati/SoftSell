import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import ThemeToggle from "./components/ThemeToggle";
import ChatWidget from "./components/ChatWidget";

function App() {
  return (
    <div className="relative font-sans transition-colors bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      <ThemeToggle />
      <Hero />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <ContactForm />
      <Footer />
      <ChatWidget />
    </div>
  );
}

export default App;
