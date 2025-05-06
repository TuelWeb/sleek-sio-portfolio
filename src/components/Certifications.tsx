
import resumeData from '@/data/resumeData';
import { Download } from 'lucide-react';

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Certifications</h2>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {resumeData.certifications.map((certification, index) => (
            <div key={index} className="card">
              <h3 className="text-xl font-semibold mb-2 text-dark-blue">
                {certification.name}
              </h3>
              
              <div className="flex flex-col space-y-2 mb-4">
                <p className="text-gray-600">
                  <span className="font-medium">Organisme:</span> {certification.issuer}
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Date d'obtention:</span> {certification.date}
                </p>
              </div>
              
              {certification.pdfUrl && (
                <a 
                  href={certification.pdfUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center text-dark-blue hover:underline"
                >
                  <Download size={18} className="mr-1" />
                  Télécharger le certificat
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
