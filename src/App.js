import React, { useState } from 'react';
import { Users, Briefcase, Home, Scale, Building, FileText, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export default function EstudioJuridicoLanding() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const mailtoLink = `mailto:e.sebastian.lapalma@gmail.com?subject=Consulta desde la web - ${formData.nombre}&body=Nombre: ${formData.nombre}%0D%0AEmail: ${formData.email}%0D%0ATeléfono: ${formData.telefono}%0D%0A%0D%0AMensaje:%0D%0A${formData.mensaje}`;
    
    window.location.href = mailtoLink;
    
    setShowSuccess(true);
    setFormData({
      nombre: '',
      email: '',
      telefono: '',
      mensaje: ''
    });
    
    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const servicios = [
    {
      icon: <Users size={48} />,
      titulo: "Derecho de Familia",
      descripcion: "Divorcios, custodias, pensiones alimenticias y regímenes de visitas."
    },
    {
      icon: <Briefcase size={48} />,
      titulo: "Derecho Laboral",
      descripcion: "Despidos, accidentes laborales, conflictos y asesoramiento empresarial."
    },
    {
      icon: <Home size={48} />,
      titulo: "Derecho Inmobiliario",
      descripcion: "Compraventa, alquileres, desalojos y sucesiones."
    },
    {
      icon: <Scale size={48} />,
      titulo: "Derecho Penal",
      descripcion: "Defensa en causas penales y asesoramiento en procedimientos judiciales."
    },
    {
      icon: <Building size={48} />,
      titulo: "Derecho Comercial",
      descripcion: "Contratos, sociedades, concursos y quiebras."
    },
    {
      icon: <FileText size={48} />,
      titulo: "Asesoramiento Legal",
      descripcion: "Consultoría jurídica integral para todas tus necesidades legales."
    }
  ];

  return (
    <div className="font-sans text-gray-800">
      <style>{`
        @keyframes slideDown {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }

        @keyframes shine {
          to {
            left: 100%;
          }
        }

        .animate-slideDown {
          animation: slideDown 0.5s ease-out;
        }

        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out;
        }

        .animate-pulse-custom {
          animation: pulse 2s infinite;
        }

        .animate-bounce-custom {
          animation: bounce 2s infinite;
        }

        .hero-shine::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          animation: shine 3s infinite;
        }

        .card-delay-1 {
          animation-delay: 0.1s;
        }
        .card-delay-2 {
          animation-delay: 0.2s;
        }
        .card-delay-3 {
          animation-delay: 0.3s;
        }
        .card-delay-4 {
          animation-delay: 0.4s;
        }
        .card-delay-5 {
          animation-delay: 0.5s;
        }
        .card-delay-6 {
          animation-delay: 0.6s;
        }

        .hover-lift {
          transition: all 0.3s;
        }

        .hover-lift:hover {
          transform: translateY(-10px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        }

        .hover-scale {
          transition: transform 0.5s;
        }

        .hover-scale:hover {
          transform: scale(1.1);
        }
      `}</style>

      {/* Header */}
      <header className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-4 fixed w-full top-0 z-50 shadow-lg animate-slideDown">
        <nav className="max-w-6xl mx-auto px-8 flex justify-between items-center">
          <div className="text-2xl font-bold">⚖️ Estudio Jurídico</div>
          <ul className="hidden md:flex gap-8">
            <li><button onClick={() => scrollToSection('inicio')} className="hover:opacity-80 transition-opacity">Inicio</button></li>
            <li><button onClick={() => scrollToSection('servicios')} className="hover:opacity-80 transition-opacity">Servicios</button></li>
            <li><button onClick={() => scrollToSection('nosotros')} className="hover:opacity-80 transition-opacity">Nosotros</button></li>
            <li><button onClick={() => scrollToSection('contacto')} className="hover:opacity-80 transition-opacity">Contacto</button></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="mt-16 bg-gradient-to-br from-blue-900 to-blue-800 text-white py-32 px-8 text-center relative overflow-hidden hero-shine">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="max-w-4xl mx-auto relative z-10 animate-fadeInUp">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">Defendemos tus Derechos</h1>
          <p className="text-xl md:text-2xl mb-8 opacity-95">Asesoramiento legal profesional con más de 20 años de experiencia. Soluciones jurídicas efectivas para particulares y empresas.</p>
          <button 
            onClick={() => scrollToSection('contacto')}
            className="inline-block px-10 py-4 bg-orange-600 text-white rounded-full text-lg font-bold hover:bg-orange-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 animate-pulse-custom"
          >
            Consulta Gratuita
          </button>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="py-20 px-8 bg-gray-100">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">Nuestros Servicios</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicios.map((servicio, index) => (
            <div 
              key={index}
              className={`bg-white p-8 rounded-lg shadow-lg hover-lift animate-fadeInUp card-delay-${index + 1}`}
            >
              <div className="text-blue-900 mb-4">{servicio.icon}</div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">{servicio.titulo}</h3>
              <p className="text-gray-700">{servicio.descripcion}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sobre Nosotros */}
      <section id="nosotros" className="py-20 px-8 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-blue-900 mb-6">Sobre Nosotros</h2>
            <p className="text-lg mb-4 leading-relaxed">Somos un estudio jurídico con más de 20 años de experiencia, comprometidos con la defensa de los derechos de nuestros clientes.</p>
            <p className="text-lg mb-4 leading-relaxed">Nuestro equipo de abogados especializados trabaja con dedicación y profesionalismo para ofrecer las mejores soluciones legales, adaptadas a cada caso particular.</p>
            <p className="text-lg leading-relaxed">Confianza, transparencia y resultados son los pilares de nuestro trabajo.</p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800" 
              alt="Equipo profesional" 
              className="w-full h-full object-cover hover-scale"
            />
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-20 px-8 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <h2 className="text-4xl font-bold text-center mb-12">Contáctanos</h2>
        <div className="max-w-2xl mx-auto bg-white bg-opacity-10 backdrop-blur-lg p-12 rounded-2xl shadow-2xl">
          {showSuccess && (
            <div className="bg-green-500 text-white p-4 rounded-lg mb-6 text-center">
              ¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.
            </div>
          )}
          <div>
            <div className="mb-6">
              <label htmlFor="nombre" className="block mb-2 font-medium">Nombre Completo</label>
              <input 
                type="text" 
                id="nombre" 
                name="nombre" 
                value={formData.nombre}
                onChange={handleInputChange}
                required
                className="w-full p-3 rounded-lg text-gray-800"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 font-medium">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full p-3 rounded-lg text-gray-800"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="telefono" className="block mb-2 font-medium">Teléfono</label>
              <input 
                type="tel" 
                id="telefono" 
                name="telefono" 
                value={formData.telefono}
                onChange={handleInputChange}
                required
                className="w-full p-3 rounded-lg text-gray-800"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="mensaje" className="block mb-2 font-medium">Mensaje</label>
              <textarea 
                id="mensaje" 
                name="mensaje" 
                value={formData.mensaje}
                onChange={handleInputChange}
                required
                rows={5}
                className="w-full p-3 rounded-lg text-gray-800 resize-y"
              />
            </div>
            <button 
              onClick={handleSubmit}
              className="w-full py-4 bg-orange-600 text-white rounded-full text-lg font-bold hover:bg-orange-700 transition-all hover:-translate-y-1"
            >
              Enviar Consulta
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex flex-col items-center">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-4">⚖️ Estudio Jurídico</h3>
              <p className="text-gray-400 text-center">Defendiendo tus derechos con profesionalismo</p>
            </div>
            
            <div className="flex gap-6 mb-6">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition-all hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-pink-600 transition-all hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-blue-700 transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-blue-400 transition-all hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter size={24} />
              </a>
            </div>
            
            <div className="border-t border-gray-700 pt-6 w-full text-center">
              <p className="text-gray-400">&copy; 2025 Estudio Jurídico. Todos los derechos reservados.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/5493454019821?text=Hola,%20necesito%20asesoramiento%20legal"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-all hover:scale-110 z-50 animate-bounce-custom"
      >
        <svg 
          viewBox="0 0 24 24" 
          width="36" 
          height="36" 
          fill="currentColor"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>
    </div>
  );
}