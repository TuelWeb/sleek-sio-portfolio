
import resumeData from '@/data/resumeData';

const Education = () => {
  return (
    <section id="parcours" className="py-20 bg-gradient-to-br from-soft-blue to-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-primary-blue">Parcours</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education Section */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-primary-blue">Formation</h3>
            <div className="space-y-8">
              {resumeData.education.map((edu, index) => (
                <div key={index} className="card border-l-4 border-primary-blue bg-white shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-500 mb-1">{edu.period}</span>
                    <h4 className="text-xl font-semibold text-primary-blue">{edu.degree}</h4>
                    <p className="text-gray-700 mt-1">
                      {edu.institution}, {edu.location}
                    </p>
                    {edu.description && (
                      <p className="text-gray-600 mt-3">{edu.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-primary-blue">Expériences professionnelles</h3>
            <div className="space-y-8">
              {resumeData.experiences.map((exp, index) => (
                <div key={index} className="card border-l-4 border-primary-blue bg-white shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-500 mb-1">{exp.period}</span>
                    <h4 className="text-xl font-semibold text-primary-blue">{exp.position}</h4>
                    <p className="text-gray-700 mt-1">
                      {exp.company}, {exp.location}
                    </p>
                    <p className="text-gray-600 mt-3">{exp.description}</p>
                    
                    <div className="mt-4">
                      <h5 className="font-semibold text-primary-blue mb-1">Technologies utilisées:</h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <span 
                            key={i} 
                            className="bg-soft-blue text-primary-blue px-3 py-1 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <h5 className="font-semibold text-primary-blue mb-1">Compétences acquises:</h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, i) => (
                          <span 
                            key={i} 
                            className="bg-blue-50 text-primary-blue px-3 py-1 rounded-full text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
