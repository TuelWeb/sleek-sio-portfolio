
import { useState } from 'react';
import resumeData from '@/data/resumeData';
import { Mail, Github, Linkedin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message envoyé !",
        description: "Merci pour votre message. Je vous répondrai dès que possible.",
      });
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Contact</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="flex flex-col justify-center">
            <p className="text-lg text-gray-700 mb-8">
              N'hésitez pas à me contacter pour toute question, proposition de collaboration ou simplement pour échanger. 
              Je vous répondrai dans les plus brefs délais.
            </p>
            
            <div className="space-y-6">
              <a
                href={`mailto:${resumeData.personalInfo.email}`}
                className="flex items-center text-gray-700 hover:text-dark-blue transition-colors"
              >
                <Mail size={24} className="mr-4" />
                <span>{resumeData.personalInfo.email}</span>
              </a>
              
              <a
                href={resumeData.personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-700 hover:text-dark-blue transition-colors"
              >
                <Github size={24} className="mr-4" />
                <span>GitHub</span>
              </a>
              
              <a
                href={resumeData.personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-700 hover:text-dark-blue transition-colors"
              >
                <Linkedin size={24} className="mr-4" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-dark-blue"
                  placeholder="Votre nom"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-dark-blue"
                  placeholder="Votre email"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-gray-700 mb-2">
                  Sujet
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-dark-blue"
                  placeholder="Sujet de votre message"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-dark-blue"
                  placeholder="Votre message"
                ></textarea>
              </div>
              
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full"
                >
                  {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
