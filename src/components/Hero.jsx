import { motion } from 'framer-motion';
import { CodeBracketIcon, CommandLineIcon, CursorArrowRaysIcon } from '@heroicons/react/24/solid';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-anime-purple/10 to-anime-dark"></div>
        <div className="absolute inset-0 bg-blue-900 bg-cover opacity-10 mix-blend-overlay"></div>
      </div>

      <motion.div 
        className="container mx-auto px-6 z-10 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="relative inline-block mb-8"
          whileHover={{ scale: 1.05 }}
        >
          <div className="absolute inset-0 bg-anime-pink rounded-full blur-xl opacity-70 animate-pulse"></div>
          <motion.img
            src="./profile.jpeg" // Replace with your anime avatar
            alt="Chaitanya's Anime Avatar"
            className="relative w-48 h-48 rounded-full border-4 border-anime-blue mx-auto"
            whileHover={{ 
              scale: 1.1,
              rotate: [0, 5, -5, 0],
              transition: { duration: 0.5 }
            }}
          />
        </motion.div>

        <motion.h1 
          className="text-5xl md:text-7xl font-anime mb-4 bg-clip-text text-transparent bg-gradient-to-r from-anime-pink to-anime-blue"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          CHAITANYA <span className="text-anime-blue">NEWARE</span>
        </motion.h1>

        <motion.p 
          className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-anime-blue"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Full Stack Developer | Creative Coder
        </motion.p>

        <motion.div
          className="flex justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <a 
            href="#contact" 
            className="px-8 py-3 bg-gradient-to-r from-anime-pink to-anime-purple rounded-full font-bold hover:shadow-lg hover:shadow-anime-pink/30 transition-all duration-300 flex items-center"
          >
            <CursorArrowRaysIcon className="w-5 h-5 mr-2" />
            Contact Me
          </a>
          <a 
            href="#projects" 
            className="px-8 py-3 border-2 border-anime-blue text-anime-blue rounded-full font-bold hover:bg-anime-blue/10 transition-all duration-300 flex items-center"
          >
            <CodeBracketIcon className="w-5 h-5 mr-2" />
            View Projects
          </a>
        </motion.div>

        <motion.div 
          className="mt-16 flex justify-center gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <motion.a 
            href="mailto:newarechaitanya832@gmail.com"
            className="text-sm hover:text-anime-pink flex items-center"
            whileHover={{ y: -3 }}
          >
            <CommandLineIcon className="w-4 h-4 mr-2" />
            newarechaitanya832@gmail.com
          </motion.a>
          <motion.a 
            href="tel:+917558254715"
            className="text-sm hover:text-anime-blue flex items-center"
            whileHover={{ y: -3 }}
          >
            <CommandLineIcon className="w-4 h-4 mr-2" />
            +91 7558254715
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <svg className="w-8 h-8 text-anime-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;