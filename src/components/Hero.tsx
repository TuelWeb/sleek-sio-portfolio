
import resumeData from '@/data/resumeData';
import { Download } from 'lucide-react';

const Hero = () => {
  const { name, title, profileImage, cvUrl } = resumeData.personalInfo;

  return (
    <section id="accueil" className="min-h-screen flex items-center bg-light-gray pt-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-10 md:mb-0 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-dark-blue">
            Bonjour, je suis <br />
            <span className="block mt-2">{name}</span>
          </h1>
          <p className="text-xl md:text-2xl mb-6 text-gray-600">
            {title}
          </p>
          <p className="text-lg mb-8 text-gray-600 max-w-lg">
            Passionné par le développement informatique et les nouvelles technologies, 
            je cherche constamment à approfondir mes connaissances et à relever de nouveaux défis.
          </p>
          <a 
            href={cvUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-primary inline-flex items-center"
          >
            <Download size={18} className="mr-2" />
            Télécharger mon CV
          </a>
        </div>
        <div className="md:w-1/2 flex justify-center animate-fade-in">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
            <img
              src={profileImage}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
