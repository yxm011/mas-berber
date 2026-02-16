import { Instagram, Phone, Mail, MapPin, Facebook, Youtube } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="relative bg-black text-white py-12 z-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Business Info */}
          <div>
            <h3 className="text-2xl font-heading font-bold mb-4 text-gold">MAS Barber Shop</h3>
            <p className="text-gray-400 mb-4">
              {t('footer.aboutText')}
            </p>
            
            {/* Main Shop Social Media */}
            <div className="mb-4 space-y-2">
              <a href="https://www.instagram.com/masbarbershop/" target="_blank" rel="noopener noreferrer" 
                className="flex items-center space-x-2 text-gray-400 hover:text-gold transition-colors">
                <Instagram size={20} />
                <span className="text-sm">@masbarbershop</span>
              </a>
              <a href="https://www.facebook.com/masbarbershopturkey" target="_blank" rel="noopener noreferrer" 
                className="flex items-center space-x-2 text-gray-400 hover:text-gold transition-colors">
                <Facebook size={20} />
                <span className="text-sm">MAS Barber Shop Turkey</span>
              </a>
              <a href="https://www.youtube.com/@masbarbershop4019/" target="_blank" rel="noopener noreferrer" 
                className="flex items-center space-x-2 text-gray-400 hover:text-gold transition-colors">
                <Youtube size={20} />
                <span className="text-sm">@masbarbershop4019</span>
              </a>
            </div>
            
            {/* Barbers' Instagram */}
            <div className="space-y-2 text-sm">
              <p className="text-gray-500 font-semibold">{t('footer.followUs')}:</p>
              <a href="https://www.instagram.com/turkmustafa/" target="_blank" rel="noopener noreferrer" 
                className="flex items-center space-x-2 text-gray-400 hover:text-gold transition-colors">
                <Instagram size={16} />
                <span>Mustafa Türk - @turkmustafa</span>
              </a>
              <a href="https://www.instagram.com/aliozcelik52/" target="_blank" rel="noopener noreferrer" 
                className="flex items-center space-x-2 text-gray-400 hover:text-gold transition-colors">
                <Instagram size={16} />
                <span>Ali Özçelik - @aliozcelik52</span>
              </a>
              <a href="https://www.instagram.com/selimozsahin/" target="_blank" rel="noopener noreferrer" 
                className="flex items-center space-x-2 text-gray-400 hover:text-gold transition-colors">
                <Instagram size={16} />
                <span>Selim Özşahin - @selimozsahin</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-gold transition-colors">{t('nav.home')}</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-gold transition-colors">{t('nav.about')}</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-gold transition-colors">{t('nav.services')}</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-gold transition-colors">{t('nav.contact')}</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.contactInfo')}</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start space-x-2">
                <MapPin size={20} className="mt-1 flex-shrink-0" />
                <span>Akat Mahallesi Meydan Caddesi<br />Mermerler Sitesi No: 16/A<br />Beşiktaş / İstanbul</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={20} />
                <a href="tel:+902123511050" className="hover:text-gold transition-colors">+90 212 351 10 50</a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={20} />
                <a href="mailto:info@masbarbershop.com" className="hover:text-gold transition-colors">info@masbarbershop.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© 2017 - {new Date().getFullYear()} MAS Barber Shop. {t('footer.allRightsReserved')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
