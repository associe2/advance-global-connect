
import { useEffect, useState, useRef } from 'react';

const ProfessionalGallery = () => {
  const [isVisible, setIsVisible] = useState(false);
  const galleryRef = useRef<HTMLDivElement>(null);

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

    if (galleryRef.current) {
      observer.observe(galleryRef.current);
    }

    return () => {
      if (galleryRef.current) {
        observer.unobserve(galleryRef.current);
      }
    };
  }, []);

  const images = [
    {
      src: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=900&q=80",
      alt: "Professionnels de la finance en réunion",
      caption: "Expertise et conseil",
    },
    {
      src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80",
      alt: "Équipe de consultants financiers au travail",
      caption: "Analyse et stratégie",
    },
    {
      src: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=900&q=80",
      alt: "Conseiller financier professionnel",
      caption: "Accompagnement personnalisé",
    },
  ];

  return (
    <div ref={galleryRef} className="my-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div 
            key={index}
            className={`rounded-xl overflow-hidden shadow-md transition-all duration-700 ${
              isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'
            }`}
            style={{ 
              transitionDelay: `${index * 200}ms`,
              transitionTimingFunction: 'cubic-bezier(0.19, 1, 0.22, 1)'
            }}
          >
            <img 
              src={image.src} 
              alt={image.alt} 
              className="w-full h-64 object-cover object-center"
            />
            <div className="p-4 bg-white">
              <p className="text-center text-gray-600 font-medium">{image.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfessionalGallery;
