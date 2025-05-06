
import resumeData from '@/data/resumeData';
import { Download } from 'lucide-react';

const Exams = () => {
  return (
    <section id="epreuves" className="py-20 bg-gradient-exams">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-primary-pink">Épreuves BTS</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Épreuve E4 */}
          <div>
            <div className="card bg-white shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-primary-pink">Épreuve E4</h3>
              <p className="text-gray-600 mb-6">
                Tableau de synthèse des compétences acquises en milieu professionnel.
              </p>
              
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse">
                  <thead>
                    <tr>
                      <th className="border py-2 px-3 bg-primary-pink text-white text-left">Compétence</th>
                      <th className="border py-2 px-3 bg-primary-pink text-white text-left">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {resumeData.examE4.map((item, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-soft-pink bg-opacity-30" : "bg-white"}>
                        <td className="border py-3 px-3">{item.competence}</td>
                        <td className="border py-3 px-3">{item.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="mt-6">
                <a 
                  href="#" 
                  className="bg-primary-pink hover:bg-pink-500 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 inline-flex items-center shadow-md hover:shadow-lg"
                >
                  <Download size={18} className="mr-2" />
                  Télécharger le tableau complet
                </a>
              </div>
            </div>
          </div>
          
          {/* Épreuve E5 */}
          <div>
            <div className="card bg-white shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-primary-pink">Épreuve E5</h3>
              <p className="text-gray-600 mb-6">
                Veille technologique et analyse des solutions logicielles.
              </p>
              
              <div className="space-y-6">
                {resumeData.examE5.map((item, index) => (
                  <div key={index} className="border-b pb-4 last:border-b-0 last:pb-0">
                    <h4 className="text-lg font-semibold text-primary-pink mb-2">{item.subject}</h4>
                    <p className="text-sm text-gray-500 mb-2">Date: {item.date}</p>
                    <p className="text-gray-600 mb-3">{item.summary}</p>
                    
                    {item.pdfUrl && (
                      <a 
                        href={item.pdfUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center text-primary-pink hover:underline"
                      >
                        <Download size={18} className="mr-1" />
                        Télécharger le document
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Exams;
