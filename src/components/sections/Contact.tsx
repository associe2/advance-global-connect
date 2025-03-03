
import { useEffect, useState, useRef } from 'react';
import ContactForm from '../ui/ContactForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="contact" className="py-24 bg-company-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className={`transition-all duration-700 ease-out-expo ${isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'}`}>
            <span className="text-company-blue font-medium inline-block mb-2">CONTACTEZ-NOUS</span>
            <h2 className="section-title">Parlons de vos projets</h2>
            <p className="section-subtitle">
              Nous sommes à votre disposition pour répondre à vos questions et vous accompagner 
              dans vos démarches de financement et d'investissement international.
            </p>
          </div>
        </div>

        <div ref={sectionRef} className="flex flex-col lg:flex-row gap-12">
          {/* Contact Form */}
          <div className={`lg:w-2/3 transition-all duration-700 ease-out-expo ${isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-white rounded-xl shadow-lg p-8 h-full">
              <h3 className="text-2xl font-semibold mb-6 text-company-midnight">Envoyez-nous un message</h3>
              <ContactForm />
            </div>
          </div>
          
          {/* Contact Info */}
          <div className={`lg:w-1/3 transition-all duration-700 delay-200 ease-out-expo ${isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-company-blue text-white rounded-xl shadow-lg p-8 h-full">
              <h3 className="text-2xl font-semibold mb-6">Informations de contact</h3>
              
              <div className="space-y-6">
                <div className="flex">
                  <MapPin size={20} className="mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">Nos bureaux</h4>
                    <p className="text-gray-200 mb-1">Libreville, Gabon</p>
                    <p className="text-gray-200 mb-1">Paris, France</p>
                    <p className="text-gray-200">Douala, Cameroun</p>
                  </div>
                </div>
                
                <div className="flex">
                  <Phone size={20} className="mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">Téléphone</h4>
                    <p className="text-gray-200">+241 07 724 86 66</p>
                  </div>
                </div>
                
                <div className="flex">
                  <Mail size={20} className="mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">Email</h4>
                    <a 
                      href="mailto:advancegroupinternational@gmail.com"
                      className="text-gray-200 hover:text-white transition-colors"
                    >
                      advancegroupinternational@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex">
                  <Clock size={20} className="mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">Heures d'ouverture</h4>
                    <p className="text-gray-200 mb-1">Lundi - Vendredi: 8h30 - 17h30</p>
                    <p className="text-gray-200">Samedi: 9h00 - 12h00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
