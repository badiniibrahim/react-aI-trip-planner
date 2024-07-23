import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./App.css";
import About from "./components/shared/About";
import FAQ from "./components/shared/FAQ";
import Features from "./components/shared/Features";
import Footer from "./components/shared/Footer";
import Hero from "./components/shared/Hero";
import HowItWorks from "./components/shared/HowItWorks";
import Pricing from "./components/shared/Pricing";

const App = () => {
  // Create useInView hooks for each section
  const { ref: heroRef, inView: heroInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: featuresRef, inView: featuresInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: aboutRef, inView: aboutInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: howItWorksRef, inView: howItWorksInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: pricingRef, inView: pricingInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: faqRef, inView: faqInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: footerRef, inView: footerInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div>
      <motion.div
        ref={heroRef}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: heroInView ? 1 : 0, y: heroInView ? 0 : 50 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Hero />
      </motion.div>

      <motion.div
        ref={featuresRef}
        initial={{ opacity: 0, y: 50 }}
        animate={{
          opacity: featuresInView ? 1 : 0,
          y: featuresInView ? 0 : 50,
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Features />
      </motion.div>

      <motion.div
        ref={aboutRef}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: aboutInView ? 1 : 0, y: aboutInView ? 0 : 50 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <About />
      </motion.div>

      <motion.div
        ref={howItWorksRef}
        initial={{ opacity: 0, y: 50 }}
        animate={{
          opacity: howItWorksInView ? 1 : 0,
          y: howItWorksInView ? 0 : 50,
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <HowItWorks />
      </motion.div>

      <motion.div
        ref={pricingRef}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: pricingInView ? 1 : 0, y: pricingInView ? 0 : 50 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Pricing />
      </motion.div>

      <motion.div
        ref={faqRef}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: faqInView ? 1 : 0, y: faqInView ? 0 : 50 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <FAQ />
      </motion.div>

      <motion.div
        ref={footerRef}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: footerInView ? 1 : 0, y: footerInView ? 0 : 50 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Footer />
      </motion.div>
    </div>
  );
};

export default App;
