
import { Mail, Phone, MapPin, Linkedin, MessageSquare } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-company-midnight text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Column 1: Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-display font-semibold mb-4">Advance Group International</h3>
            <p className="text-gray-300 max-w-md">
              Votre partenaire stratégique en financement et investissement international.
            </p>
            <div className="flex space-x-4 pt-4">
              <a href="#" aria-label="LinkedIn" className="text-white hover:text-company-lightBlue transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" aria-label="WhatsApp" className="text-white hover:text-company-lightBlue transition-colors">
                <MessageSquare size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-display font-semibold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a></li>
              <li><a href="#locations" className="text-gray-300 hover:text-white transition-colors">Zones d'Intervention</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">À Propos</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-display font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-start space-x-2">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  Libreville, Gabon | Paris, France | Douala, Cameroun
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={18} className="flex-shrink-0" />
                <span className="text-gray-300">+241 07 724 86 66</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={18} className="flex-shrink-0" />
                <a href="mailto:advancegroupinternational@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                  advancegroupinternational@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-16 pt-6 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; {currentYear} Advance Group International. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
