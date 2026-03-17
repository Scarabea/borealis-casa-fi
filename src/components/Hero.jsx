import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center px-4">
      <img
        src="/images/hero/IMGP1745.jpg"
        alt="Borealis Casa - sisätila"
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/60 via-transparent to-white/80" />

      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative text-5xl md:text-7xl font-bold text-white mb-8"
      >
        Tervetuloa Borealis Casaan
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="relative text-xl md:text-2xl text-white/90 mb-12 max-w-2xl"
      >
        Kodikas ja moderni majoitus Oulussa perheille ja pariskunnille.
      </motion.p>
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={scrollToContact}
        className="relative bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
      >
        Varaa heti
      </motion.button>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="relative mt-16 animate-bounce"
      >
        <ChevronDown size={48} className="text-white/80" />
      </motion.div>
    </section>
  );
};

export default Hero;