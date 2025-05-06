
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('accueil');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Update active section based on scroll position
      const sections = document.querySelectorAll('section');
      let currentSection = 'accueil';

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 200)) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#accueil" className="text-primary-blue font-bricolage text-xl font-bold">
          Portfolio
        </a>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-primary-blue"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop menu */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-8">
            <li>
              <a 
                href="#accueil" 
                className={`hover:text-primary-blue transition-colors ${
                  activeSection === 'accueil' ? 'text-primary-blue font-medium' : 'text-gray-700'
                }`}
              >
                Accueil
              </a>
            </li>
            <li>
              <a 
                href="#a-propos" 
                className={`hover:text-primary-blue transition-colors ${
                  activeSection === 'a-propos' ? 'text-primary-blue font-medium' : 'text-gray-700'
                }`}
              >
                À Propos
              </a>
            </li>
            <li>
              <a 
                href="#parcours" 
                className={`hover:text-primary-blue transition-colors ${
                  activeSection === 'parcours' ? 'text-primary-blue font-medium' : 'text-gray-700'
                }`}
              >
                Parcours
              </a>
            </li>
            <li>
              <a 
                href="#projets" 
                className={`hover:text-primary-blue transition-colors ${
                  activeSection === 'projets' ? 'text-primary-blue font-medium' : 'text-gray-700'
                }`}
              >
                Projets
              </a>
            </li>
            <li>
              <a 
                href="#competences" 
                className={`hover:text-primary-blue transition-colors ${
                  activeSection === 'competences' ? 'text-primary-blue font-medium' : 'text-gray-700'
                }`}
              >
                Compétences
              </a>
            </li>
            <li>
              <a 
                href="#certifications" 
                className={`hover:text-primary-blue transition-colors ${
                  activeSection === 'certifications' ? 'text-primary-blue font-medium' : 'text-gray-700'
                }`}
              >
                Certifications
              </a>
            </li>
            <li>
              <a 
                href="#epreuves" 
                className={`hover:text-primary-blue transition-colors ${
                  activeSection === 'epreuves' ? 'text-primary-blue font-medium' : 'text-gray-700'
                }`}
              >
                Épreuves
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                className={`hover:text-primary-blue transition-colors ${
                  activeSection === 'contact' ? 'text-primary-blue font-medium' : 'text-gray-700'
                }`}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile menu (dropdown) */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-md py-4 md:hidden">
            <nav className="container mx-auto px-4">
              <ul className="flex flex-col space-y-4">
                <li>
                  <a 
                    href="#accueil" 
                    className={`block hover:text-primary-blue transition-colors ${
                      activeSection === 'accueil' ? 'text-primary-blue font-medium' : 'text-gray-700'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Accueil
                  </a>
                </li>
                <li>
                  <a 
                    href="#a-propos" 
                    className={`block hover:text-primary-blue transition-colors ${
                      activeSection === 'a-propos' ? 'text-primary-blue font-medium' : 'text-gray-700'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    À Propos
                  </a>
                </li>
                <li>
                  <a 
                    href="#parcours" 
                    className={`block hover:text-primary-blue transition-colors ${
                      activeSection === 'parcours' ? 'text-primary-blue font-medium' : 'text-gray-700'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Parcours
                  </a>
                </li>
                <li>
                  <a 
                    href="#projets" 
                    className={`block hover:text-primary-blue transition-colors ${
                      activeSection === 'projets' ? 'text-primary-blue font-medium' : 'text-gray-700'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Projets
                  </a>
                </li>
                <li>
                  <a 
                    href="#competences" 
                    className={`block hover:text-primary-blue transition-colors ${
                      activeSection === 'competences' ? 'text-primary-blue font-medium' : 'text-gray-700'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Compétences
                  </a>
                </li>
                <li>
                  <a 
                    href="#certifications" 
                    className={`block hover:text-primary-blue transition-colors ${
                      activeSection === 'certifications' ? 'text-primary-blue font-medium' : 'text-gray-700'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Certifications
                  </a>
                </li>
                <li>
                  <a 
                    href="#epreuves" 
                    className={`block hover:text-primary-blue transition-colors ${
                      activeSection === 'epreuves' ? 'text-primary-blue font-medium' : 'text-gray-700'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Épreuves
                  </a>
                </li>
                <li>
                  <a 
                    href="#contact" 
                    className={`block hover:text-primary-blue transition-colors ${
                      activeSection === 'contact' ? 'text-primary-blue font-medium' : 'text-gray-700'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
