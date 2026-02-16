import { useState, useEffect } from 'react';
import { Scissors, ChevronDown, Award, Clock, Users, Sparkles, Star, MapPin, Phone, Instagram, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [showHeroBarberMenu, setShowHeroBarberMenu] = useState(false);
  const [showServicesBarberMenu, setShowServicesBarberMenu] = useState(false);
  const [isOnline, setIsOnline] = useState(false);

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

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.barber-dropdown')) {
        setShowHeroBarberMenu(false);
        setShowServicesBarberMenu(false);
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

  const handleBarberClick = (phone, closeMenu) => {
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
    closeMenu();
  };

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center bg-gradient-to-br from-black via-navy to-black">
        <div className="absolute inset-0 bg-black/70"></div>
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=1920&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="w-56 h-56 mx-auto mt-16 mb-8">
            <img 
              src="/logo.png" 
              alt="MAS Barber Shop Logo"
              className="w-full h-full object-contain"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 leading-tight">
            MAS Barber Shop<br />
            <span className="text-gold">Profesyonel Bakım</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            2017'den beri Etiler'de hizmet veren profesyonel berber salonumuzda, 
            modern teknikler ve geleneksel ustalıkla size özel bakım deneyimi sunuyoruz.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* WhatsApp Dropdown */}
            <div className="relative barber-dropdown">
              <button
                onClick={() => setShowHeroBarberMenu(!showHeroBarberMenu)}
                className="bg-gold text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-gold-dark transition-all hover:scale-105"
              >
                WhatsApp ile Randevu Al
              </button>
              
              {showHeroBarberMenu && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 bg-white rounded-xl shadow-2xl p-4 w-80 z-50">
                  <h3 className="font-heading font-semibold text-gray-900 mb-3 text-center">Berberinizi Seçin</h3>
                  <div className="space-y-2">
                    {barbers.map((barber, index) => (
                      <button
                        key={index}
                        onClick={() => handleBarberClick(barber.phone, () => setShowHeroBarberMenu(false))}
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
                              {isOnline ? 'Online' : 'Offline'}
                            </span>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <a 
              href="#services" 
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-black transition-all inline-block"
            >
              Hizmetlerimiz
            </a>
          </div>
          
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
            <ChevronDown className="w-8 h-8 text-gold" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Column */}
            <div className="relative">
              <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&q=80" 
                  alt="MAS Barber Shop Interior"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
            </div>

            {/* Content Column */}
            <div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                Hakkımızda
              </h2>
              
              <p className="text-lg text-gray-700 mb-4">
                Mustafa Türk, Ali Özçelik ve Selim Özşahin 2017 Nisan ayında bir araya gelerek 
                MAS Barber Shop'u faaliyete geçirmişlerdir.
              </p>
              
              <p className="text-lg text-gray-700 mb-6">
                Rahatlığı ön planda tuttukları mekanlarında, 3 adet 40 m² bahçe manzaralı VIP odalar, 
                samimi ve huzurlu bir ana salon tasarlayıp, müşterilerine keyifli bir ortam sunmaktadırlar.
              </p>

              <p className="text-lg text-gray-700 mb-8">
                MAS Barber Shop'un berber salonu anlayışında öncelik müşterilerinin kendilerini 
                tamamen rahat hissetmeleridir.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-gold">
                  <div className="text-4xl font-bold text-gold mb-2">7+</div>
                  <div className="text-gray-600">Yıllık Deneyim</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-gold">
                  <div className="text-4xl font-bold text-gold mb-2">3</div>
                  <div className="text-gray-600">VIP Oda</div>
                </div>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow">
                  <Award className="w-8 h-8 text-gold flex-shrink-0" />
                  <span className="font-semibold text-sm">Profesyonel Ekip</span>
                </div>
                <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow">
                  <Sparkles className="w-8 h-8 text-gold flex-shrink-0" />
                  <span className="font-semibold text-sm">Premium Ürünler</span>
                </div>
                <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow">
                  <Users className="w-8 h-8 text-gold flex-shrink-0" />
                  <span className="font-semibold text-sm">Müşteri Memnuniyeti</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Hizmetlerimiz</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Profesyonel ekibimiz ve kaliteli ürünlerimizle size özel hizmet sunuyoruz
            </p>
          </div>

          {/* Service Categories */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-gold/30 rounded-2xl p-8 md:p-12">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-heading font-semibold mb-4 text-gold flex items-center">
                    <Scissors className="w-6 h-6 mr-3" />
                    Kesim ve Tasarım
                  </h3>
                  <ul className="space-y-2 text-gray-300 ml-9">
                    <li>• Saç Kesimi</li>
                    <li>• Sakal Kesimi</li>
                    <li>• Kişiye Özel Saç Tasarımı</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-heading font-semibold mb-4 text-gold flex items-center">
                    <Sparkles className="w-6 h-6 mr-3" />
                    Saç Şekil ve Renk
                  </h3>
                  <ul className="space-y-2 text-gray-300 ml-9">
                    <li>• Kişiye Özel Saç Bakımı</li>
                    <li>• Kalıcı Saç Düzleştirme (Defrize)</li>
                    <li>• Kalıcı Saç Dalgalandırma (Bioform)</li>
                    <li>• Beyaz Saçta Renk Kırma (Zotos)</li>
                    <li>• Saç, Sakal ve Kaş Boyama</li>
                    <li>• Saç Şekline Göre Renklendirme</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-heading font-semibold mb-4 text-gold flex items-center">
                    <Award className="w-6 h-6 mr-3" />
                    Saç Sakal Bakım
                  </h3>
                  <ul className="space-y-2 text-gray-300 ml-9">
                    <li>• Kişiye Özel Sakal Bakımı</li>
                    <li>• Kalıcı Sakal Düzleştirme (Defrize)</li>
                    <li>• Kişiye Özel Sakal Tasarımı</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-heading font-semibold mb-4 text-gold flex items-center">
                    <Star className="w-6 h-6 mr-3" />
                    Özel Bakım ve Ekstra Hizmetler
                  </h3>
                  <ul className="space-y-2 text-gray-300 ml-9">
                    <li>• Batık Tedavisi</li>
                    <li>• Kişiye Özel Ürün Kullanımı</li>
                    <li>• Ağda</li>
                    <li>• Manikür</li>
                    <li>• Pedikür</li>
                  </ul>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-gold/30 text-center">
                <p className="text-gray-300 mb-6 text-lg">
                  Randevu almak ve fiyat bilgisi için WhatsApp üzerinden iletişime geçin
                </p>
                
                {/* WhatsApp Dropdown */}
                <div className="relative inline-block barber-dropdown">
                  <button
                    onClick={() => setShowServicesBarberMenu(!showServicesBarberMenu)}
                    className="inline-flex items-center space-x-2 bg-green-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-600 transition-all hover:scale-105"
                  >
                    <span>WhatsApp ile İletişime Geç</span>
                  </button>
                  
                  {showServicesBarberMenu && (
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 bg-white rounded-xl shadow-2xl p-4 w-80 z-50">
                      <h3 className="font-heading font-semibold text-gray-900 mb-3 text-center">Berberinizi Seçin</h3>
                      <div className="space-y-2">
                        {barbers.map((barber, index) => (
                          <button
                            key={index}
                            onClick={() => handleBarberClick(barber.phone, () => setShowServicesBarberMenu(false))}
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
                                  {isOnline ? 'Online' : 'Offline'}
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
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">İletişim</h2>
            <p className="text-xl text-gray-600">Bize ulaşın, size yardımcı olmaktan mutluluk duyarız</p>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all hover:scale-105">
              <MapPin className="w-12 h-12 text-gold mb-4" />
              <h3 className="font-semibold text-lg mb-2">Adres</h3>
              <p className="text-gray-600 text-sm">
                Akat Mahallesi Meydan Caddesi<br />
                Mermerler Sitesi No: 16/A<br />
                Beşiktaş / İstanbul
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all hover:scale-105">
              <Clock className="w-12 h-12 text-gold mb-4" />
              <h3 className="font-semibold text-lg mb-2">Çalışma Saatleri</h3>
              <p className="text-gray-600 text-sm">
                Pazartesi - Pazar<br />
                09:00 - 20:00<br />
                Her gün açık
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all hover:scale-105">
              <Phone className="w-12 h-12 text-gold mb-4" />
              <h3 className="font-semibold text-lg mb-2">Telefon</h3>
              <a href="tel:+902123511050" className="text-gold hover:text-gold-dark font-semibold block mb-2">
                +90 212 351 10 50
              </a>
              <a href="https://wa.me/902123511050" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 text-sm">
                WhatsApp ile iletişim
              </a>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all hover:scale-105">
              <Instagram className="w-12 h-12 text-gold mb-4" />
              <h3 className="font-semibold text-lg mb-2">Sosyal Medya</h3>
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

export default Home;
