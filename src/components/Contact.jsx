import { motion } from 'framer-motion';
import { EnvelopeIcon, PhoneIcon, MapPinIcon, ArrowUpRightIcon } from '@heroicons/react/24/outline';

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 bg-blue-900 bg-cover opacity-5"></div>
      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-anime mb-4 text-anime-blue">
            <span className="text-anime-pink">/</span> Get In Touch
          </h2>
          <p className="text-lg max-w-2xl mx-auto">
            Feel free to reach out for collaborations or just to say hello!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-anime-pink">Contact Information</h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-anime-blue/10 rounded-lg">
                  <EnvelopeIcon className="w-6 h-6 text-anime-blue" />
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <a 
                    href="mailto:newarechaitanya832@gmail.com" 
                    className="text-gray-400 hover:text-anime-blue transition-colors flex items-center"
                  >
                    newarechaitanya832@gmail.com
                    <ArrowUpRightIcon className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-anime-pink/10 rounded-lg">
                  <PhoneIcon className="w-6 h-6 text-anime-pink" />
                </div>
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <a 
                    href="tel:+917558254715" 
                    className="text-gray-400 hover:text-anime-blue transition-colors flex items-center"
                  >
                    +91 7558254715
                    <ArrowUpRightIcon className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-anime-purple/10 rounded-lg">
                  <MapPinIcon className="w-6 h-6 text-anime-purple" />
                </div>
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-gray-400">Pune, Maharashtra, India</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <h4 className="font-semibold mb-3">Connect with me</h4>
              <div className="flex gap-4">
                <a 
                  href="https://www.linkedin.com/in/chaitanya-neware-706293231/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-anime-dark/50 border border-anime-blue/30 rounded-lg hover:bg-anime-blue/10 transition-all"
                  aria-label="LinkedIn"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a 
                  href="https://github.com/chaitanyaSn" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-anime-dark/50 border border-anime-purple/30 rounded-lg hover:bg-anime-purple/10 transition-all"
                  aria-label="GitHub"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 bg-anime-dark/50 border border-anime-blue/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-anime-blue focus:border-transparent transition-all" 
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 bg-anime-dark/50 border border-anime-blue/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-anime-blue focus:border-transparent transition-all" 
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block mb-2 text-sm font-medium">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-4 py-3 bg-anime-dark/50 border border-anime-blue/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-anime-blue focus:border-transparent transition-all" 
                  placeholder="Enter subject"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium">Message</label>
                <textarea 
                  id="message" 
                  rows="5" 
                  className="w-full px-4 py-3 bg-anime-dark/50 border border-anime-blue/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-anime-blue focus:border-transparent transition-all" 
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-3 bg-gradient-to-r from-anime-pink to-anime-purple rounded-lg font-bold hover:shadow-lg hover:shadow-anime-pink/30 transition-all duration-300"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;