import { motion } from 'framer-motion';
import { AcademicCapIcon } from '@heroicons/react/24/outline';

const education = [
  {
    institution: 'AISSMS College Of Engineering, Pune',
    degree: 'Computer Engineering',
    grade: 'CGPA: 7.5',
    year: '2021-2025'
  },
  {
    institution: 'Major Hemant Jakate, Nagpur',
    degree: 'HSC',
    grade: 'Percentage: 97%',
    year: '2019-2021'
  },
  {
    institution: 'School of Scholars, Nagpur',
    degree: 'CBSE',
    grade: 'Percentage: 83%',
    year: 'Graduated 2019'
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20 relative">
      <div className="absolute inset-0 bg-blue-900 bg-cover opacity-5"></div>
      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-anime mb-4 text-anime-purple">
            <span className="text-anime-blue">/</span> Education
          </h2>
          <p className="text-lg max-w-2xl mx-auto">
            My academic journey and achievements
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`mb-8 p-6 rounded-xl backdrop-blur-sm border ${index % 2 === 0 ? 'border-anime-blue/30 bg-anime-dark/50' : 'border-anime-pink/30 bg-anime-dark/70'} relative overflow-hidden`}
            >
              <div className="absolute top-6 right-6 text-4xl opacity-10">
                <AcademicCapIcon className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold mb-1 text-anime-blue">{edu.institution}</h3>
              <div className="flex flex-wrap gap-4 mb-3">
                <span className="px-3 py-1 bg-anime-dark/50 border border-anime-blue/30 rounded-full text-sm">
                  {edu.degree}
                </span>
                <span className="px-3 py-1 bg-anime-dark/50 border border-anime-pink/30 rounded-full text-sm">
                  {edu.grade}
                </span>
              </div>
              <p className="text-gray-400">{edu.year}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;