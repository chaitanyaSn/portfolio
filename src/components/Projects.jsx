import { motion } from 'framer-motion';
import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from '@heroicons/react/24/outline';

const projects = [
  {
    title: 'BookNest',
    description: 'Online platform for college students to buy/sell used books with in-app chat functionality.',
    features: [
      'Google authentication with college email verification',
      'Real-time chat system',
      'College-specific marketplace'
    ],
    tech: ['React.js', 'Firebase', 'Tailwind CSS'],
    link: 'https://github.com/chaitanyaSn/bookNest.git',
    demo: 'https://book-nest-five.vercel.app/'
  },
  {
    title: 'Craving',
    description: 'Full-stack food ordering platform with secure payment processing and admin panel.',
    features: [
      'User-friendly ordering interface',
      'Secure payment with Razorpay',
      'Admin dashboard for restaurant management'
    ],
    tech: ['Spring Boot', 'React', 'Razorpay', 'MongoDB'],
    link: 'https://github.com/chaitanyaSn/FoodieApi.git',
    demo: ''
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-blue-900 bg-cover opacity-5"></div>
      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-anime mb-4 text-anime-pink">
            <span className="text-anime-blue">/</span> Featured Projects
          </h2>
          <p className="text-lg max-w-2xl mx-auto">
            Some of my most impressive works that showcase my skills
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-anime-purple/30 to-anime-blue/30 rounded-xl blur-md group-hover:blur-lg transition-all duration-500"></div>
              <div className="relative bg-anime-dark/80 backdrop-blur-sm border border-anime-purple/30 rounded-xl overflow-hidden h-full">
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-anime-blue">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-anime-pink mb-2">KEY FEATURES</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-anime-blue mr-2">▹</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-anime-pink mb-2">TECH STACK</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-anime-dark border border-anime-blue/30 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-anime-blue/10 border border-anime-blue text-anime-blue rounded-lg hover:bg-anime-blue/20 transition-all"
                    >
                      <CodeBracketIcon className="w-4 h-4 mr-2" />
                      Code
                    </a>
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-anime-pink/10 border border-anime-pink text-anime-pink rounded-lg hover:bg-anime-pink/20 transition-all"
                    >
                      <ArrowTopRightOnSquareIcon className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;