import { MapPin, Phone, Clock, Instagram, Facebook, Youtube } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();
  return (
    <div className="pt-20 page-transition">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-black via-navy to-black">
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6">
            {t('contact.title')}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all hover:scale-105">
              <MapPin className="w-12 h-12 text-gold mb-4" />
              <h3 className="font-semibold text-lg mb-2">{t('contact.address')}</h3>
              <p className="text-gray-600 text-sm">
                Akat Mahallesi Meydan Caddesi<br />
                Mermerler Sitesi No: 16/A<br />
                Beşiktaş / İstanbul
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all hover:scale-105">
              <Clock className="w-12 h-12 text-gold mb-4" />
              <h3 className="font-semibold text-lg mb-2">{t('contact.workingHours')}</h3>
              <p className="text-gray-600 text-sm">
                {t('contact.mondayToSunday')}<br />
                {t('contact.hours')}<br />
                {t('contact.openEveryDay')}
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all hover:scale-105">
              <Phone className="w-12 h-12 text-gold mb-4" />
              <h3 className="font-semibold text-lg mb-4">{t('contact.phone')}</h3>
              
              {/* Main Shop Number */}
              <div className="mb-4 pb-4 border-b border-gray-200">
                <p className="text-xs text-gray-500 mb-1">Salon</p>
                <a href="tel:+902123511050" className="text-gold hover:text-gold-dark font-semibold block mb-1">
                  +90 212 351 10 50
                </a>
                <a href="https://wa.me/902123511050" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 text-xs">
                  WhatsApp
                </a>
              </div>
              
              {/* Barbers */}
              <div className="space-y-3">
                <p className="text-xs text-gray-500 font-semibold">Berberlerimiz:</p>
                
                <div>
                  <p className="text-xs text-gray-600 font-medium">Mustafa Türk</p>
                  <a href="tel:+905317185900" className="text-gray-700 hover:text-gold text-sm block">
                    +90 531 718 59 00
                  </a>
                </div>
                
                <div>
                  <p className="text-xs text-gray-600 font-medium">Ali Özçelik</p>
                  <a href="tel:+905377712582" className="text-gray-700 hover:text-gold text-sm block">
                    +90 537 771 25 82
                  </a>
                </div>
                
                <div>
                  <p className="text-xs text-gray-600 font-medium">Selim Özşahin</p>
                  <a href="tel:+905334997394" className="text-gray-700 hover:text-gold text-sm block">
                    +90 533 499 73 94
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all hover:scale-105">
              <Instagram className="w-12 h-12 text-gold mb-4" />
              <h3 className="font-semibold text-lg mb-2">{t('contact.socialMedia')}</h3>
              
              {/* Main Shop Social Media */}
              <div className="mb-4 pb-4 border-b border-gray-200">
                <p className="text-xs text-gray-500 mb-2 font-semibold">MAS Barber Shop</p>
                <div className="space-y-2 text-sm">
                  <a href="https://www.instagram.com/masbarbershop/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-600 hover:text-gold transition-colors">
                    <Instagram size={16} />
                    <span>@masbarbershop</span>
                  </a>
                  <a href="https://www.facebook.com/masbarbershopturkey" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-600 hover:text-gold transition-colors">
                    <Facebook size={16} />
                    <span>MAS Barber Shop Turkey</span>
                  </a>
                  <a href="https://www.youtube.com/@masbarbershop4019/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-600 hover:text-gold transition-colors">
                    <Youtube size={16} />
                    <span>@masbarbershop4019</span>
                  </a>
                </div>
              </div>
              
              {/* Barbers' Instagram */}
              <div>
                <p className="text-xs text-gray-500 mb-2 font-semibold">Berberlerimiz</p>
                <div className="space-y-2 text-sm">
                  <a href="https://www.instagram.com/turkmustafa/" target="_blank" rel="noopener noreferrer" className="block text-gray-600 hover:text-gold">
                    @turkmustafa
                  </a>
                  <a href="https://www.instagram.com/aliozcelik52/" target="_blank" rel="noopener noreferrer" className="block text-gray-600 hover:text-gold">
                    @aliozcelik52
                  </a>
                  <a href="https://www.instagram.com/selimozsahin/" target="_blank" rel="noopener noreferrer" className="block text-gray-600 hover:text-gold">
                    @selimozsahin
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Google Maps */}
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.865856789012!2d29.0207223!3d41.0793923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab61357c0a675%3A0x47ba13d669c21e9a!2sMAS%20Berber%20Shop!5e0!3m2!1str!2str!4v1707924000000!5m2!1str!2str"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="MAS Barber Shop Location"
            ></iframe>
          </div>
          
          {/* Direct Map Link */}
          <div className="text-center mt-6">
            <a
              href="https://maps.app.goo.gl/ak7pXuNVc91qyYeJ8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gold text-black px-6 py-3 rounded-full font-semibold hover:bg-gold-dark transition-all hover:scale-105"
            >
              <span>Haritada Aç</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
