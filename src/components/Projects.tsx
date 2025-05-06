
import resumeData from '@/data/resumeData';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  // Images d'exemple pour les projets
  const projectImages = [
    "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
  ];

  return (
    <section id="projets" className="py-20 bg-light-gray">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-primary-blue">Mes Projets</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resumeData.projects.map((project, index) => (
            <div 
              key={index} 
              className="card bg-white h-full flex flex-col transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-xl"
            >
              <div className="h-48 mb-4 overflow-hidden rounded-md bg-light-gray">
                <img
                  src={projectImages[index % projectImages.length]}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h3 className="text-xl font-semibold mb-2 text-primary-blue">
                {project.title}
              </h3>
              
              <p className="text-gray-600 mb-4 flex-grow">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span 
                    key={i} 
                    className="bg-soft-blue text-primary-blue text-sm px-3 py-1 rounded-full"
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
                    className="flex items-center text-primary-blue hover:underline"
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
                    className="flex items-center text-primary-blue hover:underline"
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
