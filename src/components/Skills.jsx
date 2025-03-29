import { motion } from 'framer-motion';
import { StarIcon } from '@heroicons/react/24/solid';

const skills = [
  { name: 'Java', level: 85, icon: '☕' },
  { name: 'JavaScript', level: 90, icon: '📜' },
  { name: 'React', level: 88, icon: '⚛️' },
  { name: 'Spring Boot', level: 80, icon: '🌱' },
  { name: 'SQL', level: 85, icon: '🗃️' },
  { name: 'MongoDB', level: 75, icon: '🍃' },
  { name: 'Git', level: 85, icon: '🐙' },
  { name: 'Docker', level: 70, icon: '🐳' },
  { name: 'AWS', level: 60, icon: '☁️' },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-blue-900 bg-cover opacity-5"></div>
      </div>

      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-anime mb-4 text-anime-blue">
            <span className="text-anime-pink">/</span> Skills & Abilities
          </h2>
          <p className="text-lg max-w-2xl mx-auto">
            My arsenal of technologies and tools to bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="bg-anime-dark/50 backdrop-blur-sm border border-anime-purple/30 rounded-xl p-6 shadow-lg hover:shadow-anime-blue/20 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{skill.icon}</div>
              <h3 className="text-xl font-bold mb-2">{skill.name}</h3>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className={`w-5 h-5 ${i < Math.floor(skill.level / 20) ? 'text-anime-pink' : 'text-gray-600'}`}
                  />
                ))}
              </div>
              <div className="w-full bg-gray-800 rounded-full h-2.5">
                <motion.div
                  className="h-2.5 rounded-full bg-gradient-to-r from-anime-pink to-anime-blue"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  viewport={{ once: true }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;