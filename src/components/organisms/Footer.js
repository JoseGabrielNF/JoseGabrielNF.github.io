import React from 'react';
import Icon from '../atoms/Icon';
import Button from '../atoms/Button';

const Footer = () => {
  const quickLinks = [
    { href: '#home', label: 'Início' },
    { href: '#about', label: 'Sobre' },
    { href: '#schedule', label: 'Programação' },
    { href: '#speakers', label: 'Palestrantes' }
  ];

  const socialLinks = [
    { name: 'facebook-f', href: '#', bgColor: 'bg-blue-700 hover:bg-blue-800' },
    { name: 'instagram', href: '#', bgColor: 'bg-pink-600 hover:bg-pink-700' },
    { name: 'twitter', href: '#', bgColor: 'bg-blue-400 hover:bg-blue-500' },
    { name: 'youtube', href: '#', bgColor: 'bg-red-600 hover:bg-red-700' }
  ];

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Seminário TA</h3>
            <p className="text-gray-400">
              Evento acadêmico sobre Tecnologia Assistiva e Educação Inclusiva na era da Inteligência Artificial.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-yellow-300 transition"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Icon name="envelope" className="text-yellow-300 mr-2" />
                <span className="text-gray-400">ta.ufms2025@ufms.br</span>
              </li>
              <li className="flex items-center">
                <Icon name="phone" className="text-yellow-300 mr-2" />
                <span className="text-gray-400">(67) 3345-6789</span>
              </li>
              <li className="flex items-center">
                <Icon name="map-marker-alt" className="text-yellow-300 mr-2" />
                <span className="text-gray-400">UFMS, Campo Grande - MS</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Redes Sociais</h3>
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  className={`${social.bgColor} w-10 h-10 rounded-full flex items-center justify-center transition`}
                >
                  <Icon name={social.name} />
                </a>
              ))}
            </div>

            <div>
              <h4 className="font-bold mb-2">Newsletter</h4>
              <form onSubmit={handleNewsletterSubmit} className="flex">
                <input 
                  type="email" 
                  placeholder="Seu e-mail" 
                  className="px-3 py-2 text-gray-800 rounded-l-lg focus:outline-none w-full"
                />
                <Button 
                  type="submit"
                  variant="primary" 
                  className="rounded-l-none rounded-r-lg px-4"
                >
                  <Icon name="paper-plane" />
                </Button>
              </form>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© 2025 Seminário de Tecnologia Assistiva - UFMS. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
