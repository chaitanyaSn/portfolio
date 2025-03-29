import { motion } from 'framer-motion';
import { HomeIcon, AcademicCapIcon, CodeBracketIcon, FolderIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

const Navigation = ({ activeSection }) => {
  const navItems = [
    { id: 'home', icon: HomeIcon, label: 'Home' },
    { id: 'education', icon: AcademicCapIcon, label: 'Education' },
    { id: 'skills', icon: CodeBracketIcon, label: 'Skills' },
    { id: 'projects', icon: FolderIcon, label: 'Projects' },
    { id: 'contact', icon: EnvelopeIcon, label: 'Contact' },
  ];

  return (
    <nav className="fixed top-1/2 right-6 transform -translate-y-1/2 z-50 hidden md:block">
      <motion.ul 
        className="flex flex-col gap-4"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
      >
        {navItems.map((item) => (
          <motion.li 
            key={item.id}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <a 
              href={`#${item.id}`} 
              className={`flex items-center justify-center w-12 h-12 rounded-full transition-all ${activeSection === item.id ? 'bg-anime-pink text-white' : 'bg-anime-dark/80 text-gray-300 hover:bg-anime-blue/30 hover:text-anime-blue border border-anime-purple/30'}`}
              aria-label={item.label}
            >
              <item.icon className="w-6 h-6" />
            </a>
          </motion.li>
        ))}
      </motion.ul>
    </nav>
  );
};

export default Navigation;