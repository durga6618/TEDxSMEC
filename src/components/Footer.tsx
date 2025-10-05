import { Heart, Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigate: (section: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Events', id: 'events' },
    { label: 'Speakers', id: 'speakers' }
  ];

  const moreLinks = [
    { label: 'Gallery', id: 'gallery' },
    { label: 'Team', id: 'team' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <footer className="bg-black border-t border-red-600/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              TED<span className="text-red-600">x</span>SMEC
            </h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              A platform for ideas worth spreading. Join us in exploring innovation, creativity, and human potential.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: '#' },
                { icon: Instagram, href: '#' },
                { icon: Twitter, href: '#' },
                { icon: Linkedin, href: '#' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-900 hover:bg-red-600 border border-red-600/20 rounded-lg p-2 transition-all duration-300 transform hover:scale-110"
                >
                  <social.icon size={18} className="text-gray-400 hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="text-gray-400 hover:text-red-600 transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-4">More</h4>
            <ul className="space-y-2">
              {moreLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="text-gray-400 hover:text-red-600 transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-400">
                <MapPin size={18} className="text-red-600 flex-shrink-0 mt-1" />
                <span className="text-sm">
                  St. Martin's Engineering College<br />
                  Dhulapally, Secunderabad<br />
                  Telangana 500100
                </span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Phone size={18} className="text-red-600 flex-shrink-0" />
                <a href="tel:+911234567890" className="text-sm hover:text-red-600 transition-colors">
                  +91 123 456 7890
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Mail size={18} className="text-red-600 flex-shrink-0" />
                <a href="mailto:contact@tedxsmec.com" className="text-sm hover:text-red-600 transition-colors">
                  contact@tedxsmec.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-red-600/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              {currentYear} TEDxSMEC. This independent TEDx event is operated under license from TED.
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-1">
              Made with <Heart size={16} className="text-red-600 fill-current" /> for ideas worth spreading
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
