import { useState, useEffect } from 'react';
import { Scissors, Sparkles, Star, MessageCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Services = () => {
  const [showBarberMenu, setShowBarberMenu] = useState(false);
  const [isOnline, setIsOnline] = useState(false);
  const { t } = useLanguage();

  // Check if current time is within work hours (09:00 - 20:00)
  const checkWorkHours = () => {
    const now = new Date();
    const hours = now.getHours();
    return hours >= 9 && hours < 20;
  };

  // Update online status
  useEffect(() => {
    setIsOnline(checkWorkHours());
    
    // Update status every minute
    const interval = setInterval(() => {
      setIsOnline(checkWorkHours());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.barber-dropdown')) {
        setShowBarberMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const barbers = [
    {
      name: 'Mustafa Türk',
      phone: '905317185900',
      displayPhone: '+90 531 718 59 00',
    },
    {
      name: 'Ali Özçelik',
      phone: '905377712582',
      displayPhone: '+90 537 771 25 82',
    },
    {
      name: 'Selim Özşahin',
      phone: '905334997394',
      displayPhone: '+90 533 499 73 94',
    },
  ];

  const message = 'Merhaba, randevu almak istiyorum.';

  const handleBarberClick = (phone) => {
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
    setShowBarberMenu(false);
  };

  return (
    <div className="pt-20 page-transition">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-black via-navy to-black">
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6">
            {t('services.title')}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-cream via-white to-cream relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-gold text-sm font-semibold tracking-widest uppercase border border-gold px-4 py-2 rounded-full">{t('common.since2017')}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">{t('services.title')}</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">{t('services.subtitle')}</p>
          </div>

          {/* Service Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Kesim ve Tasarım */}
            <div className="group bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-[0_20px_60px_rgba(212,175,55,0.3)] transition-all duration-500 hover:-translate-y-2 border border-gold/20">
              <div className="relative bg-gradient-to-br from-gold via-gold to-gold-dark p-8 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
                <div className="relative flex items-center space-x-4">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Scissors className="w-8 h-8 text-gold" />
                  </div>
                  <h3 className="text-3xl font-heading font-bold text-white">{t('services.cutting.title')}</h3>
                </div>
              </div>
              <div className="p-8 bg-gradient-to-b from-white to-gray-50">
                <ul className="space-y-4">
                  <li className="flex items-start group/item">
                    <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center mr-3 mt-0.5 group-hover/item:bg-gold transition-colors">
                      <span className="text-gold group-hover/item:text-white text-sm font-bold">✓</span>
                    </div>
                    <span className="text-gray-700 font-medium group-hover/item:text-gray-900 transition-colors">{t('services.cutting.haircut')}</span>
                  </li>
                  <li className="flex items-start group/item">
                    <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center mr-3 mt-0.5 group-hover/item:bg-gold transition-colors">
                      <span className="text-gold group-hover/item:text-white text-sm font-bold">✓</span>
                    </div>
                    <span className="text-gray-700 font-medium group-hover/item:text-gray-900 transition-colors">{t('services.cutting.beardcut')}</span>
                  </li>
                  <li className="flex items-start group/item">
                    <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center mr-3 mt-0.5 group-hover/item:bg-gold transition-colors">
                      <span className="text-gold group-hover/item:text-white text-sm font-bold">✓</span>
                    </div>
                    <span className="text-gray-700 font-medium group-hover/item:text-gray-900 transition-colors">{t('services.cutting.customDesign')}</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Saç Şekil ve Renk */}
            <div className="group bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-[0_20px_60px_rgba(212,175,55,0.3)] transition-all duration-500 hover:-translate-y-2 border border-gold/20">
              <div className="relative bg-gradient-to-br from-gold via-gold to-gold-dark p-8 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
                <div className="relative flex items-center space-x-4">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Sparkles className="w-8 h-8 text-gold" />
                  </div>
                  <h3 className="text-3xl font-heading font-bold text-white">{t('services.styling.title')}</h3>
                </div>
              </div>
              <div className="p-8 bg-gradient-to-b from-white to-gray-50">
                <ul className="space-y-4">
                  <li className="flex items-start group/item">
                    <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center mr-3 mt-0.5 group-hover/item:bg-gold transition-colors">
                      <span className="text-gold group-hover/item:text-white text-sm font-bold">✓</span>
                    </div>
                    <span className="text-gray-700 font-medium group-hover/item:text-gray-900 transition-colors">{t('services.styling.customCare')}</span>
                  </li>
                  <li className="flex items-start group/item">
                    <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center mr-3 mt-0.5 group-hover/item:bg-gold transition-colors">
                      <span className="text-gold group-hover/item:text-white text-sm font-bold">✓</span>
                    </div>
                    <span className="text-gray-700 font-medium group-hover/item:text-gray-900 transition-colors">{t('services.styling.straightening')}</span>
                  </li>
                  <li className="flex items-start group/item">
                    <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center mr-3 mt-0.5 group-hover/item:bg-gold transition-colors">
                      <span className="text-gold group-hover/item:text-white text-sm font-bold">✓</span>
                    </div>
                    <span className="text-gray-700 font-medium group-hover/item:text-gray-900 transition-colors">{t('services.styling.waving')}</span>
                  </li>
                  <li className="flex items-start group/item">
                    <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center mr-3 mt-0.5 group-hover/item:bg-gold transition-colors">
                      <span className="text-gold group-hover/item:text-white text-sm font-bold">✓</span>
                    </div>
                    <span className="text-gray-700 font-medium group-hover/item:text-gray-900 transition-colors">{t('services.styling.grayColoring')}</span>
                  </li>
                  <li className="flex items-start group/item">
                    <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center mr-3 mt-0.5 group-hover/item:bg-gold transition-colors">
                      <span className="text-gold group-hover/item:text-white text-sm font-bold">✓</span>
                    </div>
                    <span className="text-gray-700 font-medium group-hover/item:text-gray-900 transition-colors">{t('services.styling.dyeing')}</span>
                  </li>
                  <li className="flex items-start group/item">
                    <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center mr-3 mt-0.5 group-hover/item:bg-gold transition-colors">
                      <span className="text-gold group-hover/item:text-white text-sm font-bold">✓</span>
                    </div>
                    <span className="text-gray-700 font-medium group-hover/item:text-gray-900 transition-colors">{t('services.styling.shapeColoring')}</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Saç Sakal Bakım */}
            <div className="group bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-[0_20px_60px_rgba(212,175,55,0.3)] transition-all duration-500 hover:-translate-y-2 border border-gold/20">
              <div className="relative bg-gradient-to-br from-gold via-gold to-gold-dark p-8 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
                <div className="relative flex items-center space-x-4">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Star className="w-8 h-8 text-gold" />
                  </div>
                  <h3 className="text-3xl font-heading font-bold text-white">{t('services.beardCare.title')}</h3>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start group/item">
                    <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center mr-3 mt-0.5 group-hover/item:bg-gold transition-colors">
                      <span className="text-gold group-hover/item:text-white text-sm font-bold">✓</span>
                    </div>
                    <span className="text-gray-700 font-medium group-hover/item:text-gray-900 transition-colors">{t('services.beardCare.customBeardCare')}</span>
                  </li>
                  <li className="flex items-start group/item">
                    <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center mr-3 mt-0.5 group-hover/item:bg-gold transition-colors">
                      <span className="text-gold group-hover/item:text-white text-sm font-bold">✓</span>
                    </div>
                    <span className="text-gray-700 font-medium group-hover/item:text-gray-900 transition-colors">{t('services.beardCare.beardStraightening')}</span>
                  </li>
                  <li className="flex items-start group/item">
                    <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center mr-3 mt-0.5 group-hover/item:bg-gold transition-colors">
                      <span className="text-gold group-hover/item:text-white text-sm font-bold">✓</span>
                    </div>
                    <span className="text-gray-700 font-medium group-hover/item:text-gray-900 transition-colors">{t('services.beardCare.customBeardDesign')}</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Özel Bakım */}
            <div className="group bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-[0_20px_60px_rgba(212,175,55,0.3)] transition-all duration-500 hover:-translate-y-2 border border-gold/20">
              <div className="relative bg-gradient-to-br from-gold via-gold to-gold-dark p-8 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
                <div className="relative flex items-center space-x-4">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Sparkles className="w-8 h-8 text-gold" />
                  </div>
                  <h3 className="text-3xl font-heading font-bold text-white">{t('services.extraServices.title')}</h3>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start group/item">
                    <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center mr-3 mt-0.5 group-hover/item:bg-gold transition-colors">
                      <span className="text-gold group-hover/item:text-white text-sm font-bold">✓</span>
                    </div>
                    <span className="text-gray-700 font-medium group-hover/item:text-gray-900 transition-colors">{t('services.extraServices.ingrown')}</span>
                  </li>
                  <li className="flex items-start group/item">
                    <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center mr-3 mt-0.5 group-hover/item:bg-gold transition-colors">
                      <span className="text-gold group-hover/item:text-white text-sm font-bold">✓</span>
                    </div>
                    <span className="text-gray-700 font-medium group-hover/item:text-gray-900 transition-colors">{t('services.extraServices.customProducts')}</span>
                  </li>
                  <li className="flex items-start group/item">
                    <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center mr-3 mt-0.5 group-hover/item:bg-gold transition-colors">
                      <span className="text-gold group-hover/item:text-white text-sm font-bold">✓</span>
                    </div>
                    <span className="text-gray-700 font-medium group-hover/item:text-gray-900 transition-colors">{t('services.extraServices.waxing')}</span>
                  </li>
                  <li className="flex items-start group/item">
                    <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center mr-3 mt-0.5 group-hover/item:bg-gold transition-colors">
                      <span className="text-gold group-hover/item:text-white text-sm font-bold">✓</span>
                    </div>
                    <span className="text-gray-700 font-medium group-hover/item:text-gray-900 transition-colors">{t('services.extraServices.manicure')}</span>
                  </li>
                  <li className="flex items-start group/item">
                    <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center mr-3 mt-0.5 group-hover/item:bg-gold transition-colors">
                      <span className="text-gold group-hover/item:text-white text-sm font-bold">✓</span>
                    </div>
                    <span className="text-gray-700 font-medium group-hover/item:text-gray-900 transition-colors">{t('services.extraServices.pedicure')}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="relative bg-gradient-to-br from-black via-navy to-black rounded-3xl p-12 md:p-16 text-center shadow-2xl overflow-visible border border-gold/30 z-10">
            {/* Decorative elements */}
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-gold/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gold/10 rounded-full blur-3xl -z-10"></div>
            
            <div className="relative z-20">
              <div className="inline-block mb-6">
                <span className="text-gold text-sm font-semibold tracking-widest uppercase border border-gold px-4 py-2 rounded-full">{t('common.since2017')}</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">{t('nav.booking')}</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                {t('services.contactText')}
              </p>
              
              {/* WhatsApp Dropdown */}
              <div className="relative inline-block barber-dropdown">
                <button
                  onClick={() => setShowBarberMenu(!showBarberMenu)}
                  className="inline-flex items-center space-x-3 bg-green-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-600 transition-all hover:scale-105 shadow-xl"
                >
                  <MessageCircle className="w-6 h-6" />
                  <span>{t('services.contactButton')}</span>
                </button>
                
                {showBarberMenu && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 bg-white rounded-xl shadow-2xl p-4 w-80 z-[9999]">
                    <h3 className="font-heading font-semibold text-gray-900 mb-3 text-center">{t('common.selectBarber')}</h3>
                    <div className="space-y-2">
                      {barbers.map((barber, index) => (
                        <button
                          key={index}
                          onClick={() => handleBarberClick(barber.phone)}
                          className="w-full text-left p-3 rounded-lg hover:bg-green-50 transition-all group border border-transparent hover:border-green-500"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                <MessageCircle size={20} className="text-white" />
                              </div>
                              <div>
                                <div className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                                  {barber.name}
                                </div>
                                <div className="text-sm text-gray-500">{barber.displayPhone}</div>
                              </div>
                            </div>
                            <div className="flex items-center space-x-1">
                              <div className={`w-2 h-2 rounded-full ${isOnline ? 'bg-green-500' : 'bg-gray-400'}`}></div>
                              <span className={`text-xs font-medium ${isOnline ? 'text-green-600' : 'text-gray-500'}`}>
                                {isOnline ? t('common.online') : t('common.offline')}
                              </span>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
