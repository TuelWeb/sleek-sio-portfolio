
import resumeData from '@/data/resumeData';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-r from-dark-blue to-primary-blue text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-medium">{resumeData.personalInfo.name}</p>
            <p className="text-sm text-gray-300">{resumeData.personalInfo.title}</p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm text-gray-300">
              &copy; {currentYear} | Tous droits réservés
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
