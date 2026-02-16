import { Award, Instagram, Calendar, MapPin, Users, Sparkles, Star } from 'lucide-react';

const About = () => {
  const founders = [
    {
      name: 'Mustafa Türk',
      instagram: 'https://www.instagram.com/turkmustafa/',
      handle: '@turkmustafa',
      photo: '/mas-barber-berber-shop-mustafa-turk.webp'
    },
    {
      name: 'Ali Özçelik',
      instagram: 'https://www.instagram.com/aliozcelik52/',
      handle: '@aliozcelik52',
      photo: '/mas-barber-berber-shop-ali-ozcelik.webp'
    },
    {
      name: 'Selim Özşahin',
      instagram: 'https://www.instagram.com/selimozsahin/',
      handle: '@selimozsahin',
      photo: '/mas-barber-berber-shop-selim-ozsahin.webp'
    }
  ];

  const partners = [
    { name: 'Schwarzkopf Professional', category: 'Profesyonel Saç Bakımı' },
    { name: 'Contura', category: 'Styling & Bakım' },
    { name: 'Wella Professionals', category: 'Renk & Bakım Uzmanı' },
    { name: 'American Crew', category: 'Erkek Bakım Ürünleri' }
  ];

  return (
    <div className="pt-20 page-transition">
      {/* Hero Section with Image */}
      <section className="relative py-32 bg-gradient-to-br from-black via-navy to-black overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="/mas-abiler.webp" 
            alt="MAS Barber Shop Team"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-6">
            <span className="text-gold text-sm font-semibold tracking-widest uppercase border border-gold px-6 py-2 rounded-full">2017'den Beri</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6">
            MAS Barber Shop
          </h1>
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
            Profesyonel berberlik sanatında mükemmellik
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-gray-300">
            <div className="flex items-center space-x-2">
              <Calendar className="w-5 h-5 text-gold" />
              <span>Nisan 2017</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5 text-gold" />
              <span>Etiler, İstanbul</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-gold" />
              <span>3 Kurucu Ortak</span>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Hikayemiz</h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Mustafa Türk, Ali Özçelik ve Selim Özşahin 2017 Nisan ayında bir araya gelerek 
              MAS Barber Shop'u faaliyete geçirmişlerdir.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Rahatlığı ön planda tuttukları mekanlarında, 3 adet 40 m² bahçe manzaralı VIP odalar, 
              samimi ve huzurlu bir ana salon tasarlayıp, müşterilerine keyifli bir ortam sunmaktadırlar.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              MAS Barber Shop'un berber salonu anlayışında öncelik müşterilerinin kendilerini 
              tamamen rahat hissetmeleridir. Her detayda mükemmellik ve müşteri memnuniyeti odaklı 
              hizmet anlayışıyla sektörde fark yaratmaktadır.
            </p>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20 bg-gradient-to-br from-cream via-white to-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Kurucularımız</h2>
            <p className="text-xl text-gray-600">MAS Barber Shop'un vizyoner ekibi</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {founders.map((founder, index) => (
              <div key={index} className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={founder.photo} 
                    alt={founder.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                    <h3 className="text-2xl font-heading font-bold text-white mb-1">{founder.name}</h3>
                    <p className="text-gold text-sm font-semibold">Kurucu Ortak</p>
                  </div>
                </div>
                <div className="p-6 text-center bg-gradient-to-br from-white to-gray-50">
                  <a 
                    href={founder.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-gray-700 hover:text-gold transition-colors group-hover:scale-110 transition-transform"
                  >
                    <Instagram className="w-5 h-5" />
                    <span className="font-medium">{founder.handle}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-black via-navy to-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-gold mb-2">7+</div>
              <div className="text-gray-300">Yıllık Deneyim</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-gold mb-2">3</div>
              <div className="text-gray-300">VIP Oda</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-gold mb-2">40m²</div>
              <div className="text-gray-300">Bahçe Manzaralı</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-gold mb-2">100%</div>
              <div className="text-gray-300">Müşteri Memnuniyeti</div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-gold text-sm font-semibold tracking-widest uppercase border border-gold px-4 py-2 rounded-full">Premium Markalar</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Partnerlerimiz</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Dünya çapında tanınmış premium markalarla çalışarak size en kaliteli hizmeti sunuyoruz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <div 
                key={index}
                className="group bg-gradient-to-br from-white to-cream p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-gold/30"
              >
                <div className="text-center">
                  <div className="w-20 h-20 bg-gold/10 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:bg-gold/20 transition-colors group-hover:scale-110 duration-300">
                    <Star className="w-10 h-10 text-gold" />
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-2 text-gray-900">{partner.name}</h3>
                  <p className="text-sm text-gray-600">{partner.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Değerlerimiz</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-2xl transition-all hover:-translate-y-2">
              <div className="w-16 h-16 bg-gold/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Award className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4">Profesyonellik</h3>
              <p className="text-gray-600">
                Alanında uzman ekibimiz ve sürekli eğitim anlayışımızla en yüksek standartları sunuyoruz.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-2xl transition-all hover:-translate-y-2">
              <div className="w-16 h-16 bg-gold/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4">Kalite</h3>
              <p className="text-gray-600">
                Premium ürünler ve modern tekniklerle her zaman en iyi sonucu hedefliyoruz.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-2xl transition-all hover:-translate-y-2">
              <div className="w-16 h-16 bg-gold/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Users className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4">Müşteri Odaklılık</h3>
              <p className="text-gray-600">
                Müşterilerimizin rahatı ve memnuniyeti her zaman önceliğimizdir.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
