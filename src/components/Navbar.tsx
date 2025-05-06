
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
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
        <a href="#accueil" className="text-dark-blue font-bricolage text-xl font-bold">
          Portfolio
        </a>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-dark-blue"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop menu */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-8">
            <li>
              <a href="#accueil" className="text-dark-blue hover:text-opacity-70 transition-colors">
                Accueil
              </a>
            </li>
            <li>
              <a href="#a-propos" className="text-dark-blue hover:text-opacity-70 transition-colors">
                À Propos
              </a>
            </li>
            <li>
              <a href="#parcours" className="text-dark-blue hover:text-opacity-70 transition-colors">
                Parcours
              </a>
            </li>
            <li>
              <a href="#projets" className="text-dark-blue hover:text-opacity-70 transition-colors">
                Projets
              </a>
            </li>
            <li>
              <a href="#competences" className="text-dark-blue hover:text-opacity-70 transition-colors">
                Compétences
              </a>
            </li>
            <li>
              <a href="#certifications" className="text-dark-blue hover:text-opacity-70 transition-colors">
                Certifications
              </a>
            </li>
            <li>
              <a href="#epreuves" className="text-dark-blue hover:text-opacity-70 transition-colors">
                Épreuves
              </a>
            </li>
            <li>
              <a href="#contact" className="text-dark-blue hover:text-opacity-70 transition-colors">
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
                    className="block text-dark-blue hover:text-opacity-70 transition-colors" 
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Accueil
                  </a>
                </li>
                <li>
                  <a 
                    href="#a-propos" 
                    className="block text-dark-blue hover:text-opacity-70 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    À Propos
                  </a>
                </li>
                <li>
                  <a 
                    href="#parcours" 
                    className="block text-dark-blue hover:text-opacity-70 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Parcours
                  </a>
                </li>
                <li>
                  <a 
                    href="#projets" 
                    className="block text-dark-blue hover:text-opacity-70 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Projets
                  </a>
                </li>
                <li>
                  <a 
                    href="#competences" 
                    className="block text-dark-blue hover:text-opacity-70 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Compétences
                  </a>
                </li>
                <li>
                  <a 
                    href="#certifications" 
                    className="block text-dark-blue hover:text-opacity-70 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Certifications
                  </a>
                </li>
                <li>
                  <a 
                    href="#epreuves" 
                    className="block text-dark-blue hover:text-opacity-70 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Épreuves
                  </a>
                </li>
                <li>
                  <a 
                    href="#contact" 
                    className="block text-dark-blue hover:text-opacity-70 transition-colors"
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
