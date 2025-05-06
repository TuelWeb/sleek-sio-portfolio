
import resumeData from '@/data/resumeData';

const About = () => {
  return (
    <section id="a-propos" className="py-20 bg-gradient-about">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-primary-purple">À Propos de Moi</h2>
        
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
            <p className="text-lg text-gray-700 mb-6">
              {resumeData.about.description}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="card bg-soft-purple shadow-md hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-semibold mb-2 text-primary-purple">Qualités</h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Curieux</li>
                  <li>Persévérant</li>
                  <li>Créatif</li>
                  <li>Autodidacte</li>
                </ul>
              </div>
              
              <div className="card bg-soft-teal shadow-md hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-semibold mb-2 text-primary-teal">Passions</h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Développement web</li>
                  <li>Nouvelles technologies</li>
                  <li>Cybersécurité</li>
                  <li>Intelligence artificielle</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <div className="w-full max-w-md h-80 rounded-lg overflow-hidden shadow-lg">
              <img
                src="/placeholder.svg"
                alt="À propos"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
