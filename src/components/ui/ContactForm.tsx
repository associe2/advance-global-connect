
import { useState } from 'react';
import { Send } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message envoyé",
        description: "Nous vous contacterons dans les plus brefs délais.",
        variant: "default",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
            Nom complet <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-company-blue transition-all"
            placeholder="Votre nom"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-company-blue transition-all"
            placeholder="votre@email.com"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
            Téléphone <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-company-blue transition-all"
            placeholder="+241 07 XX XX XX"
          />
        </div>
        
        <div>
          <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
            Sujet
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-company-blue transition-all"
          >
            <option value="">Sélectionnez un sujet</option>
            <option value="financement">Recherche de financement</option>
            <option value="investissement">Investissement étranger</option>
            <option value="juridique">Services juridiques et fiscalité</option>
            <option value="comptable">Gestion comptable</option>
            <option value="autre">Autre demande</option>
          </select>
        </div>
      </div>
      
      <div>
        <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-company-blue transition-all resize-none"
          placeholder="Comment pouvons-nous vous aider ?"
        ></textarea>
      </div>
      
      <div className="flex justify-end">
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-company-blue text-white px-8 py-3 rounded-md font-medium transition-all duration-300 hover:bg-company-midnight focus:ring-2 focus:ring-company-blue/50 focus:outline-none flex items-center disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Envoi en cours...
            </>
          ) : (
            <>
              Envoyer le message
              <Send size={18} className="ml-2" />
            </>
          )}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
