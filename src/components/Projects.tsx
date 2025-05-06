
import resumeData from '@/data/resumeData';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projets" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Mes Projets</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resumeData.projects.map((project, index) => (
            <div 
              key={index} 
              className="card h-full flex flex-col transition-all duration-300 hover:-translate-y-2"
            >
              <div className="h-48 mb-4 overflow-hidden rounded-md bg-light-gray">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h3 className="text-xl font-semibold mb-2 text-dark-blue">
                {project.title}
              </h3>
              
              <p className="text-gray-600 mb-4 flex-grow">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span 
                    key={i} 
                    className="bg-light-gray text-dark-blue text-sm px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4 mt-auto">
                {project.githubUrl && (
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-dark-blue hover:underline"
                  >
                    <Github size={18} className="mr-1" />
                    Code source
                  </a>
                )}
                
                {project.demoUrl && (
                  <a 
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-dark-blue hover:underline"
                  >
                    <ExternalLink size={18} className="mr-1" />
                    Démo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
