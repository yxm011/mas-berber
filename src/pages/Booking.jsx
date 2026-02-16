import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Scissors, Sparkles, Star, Award, Phone, MessageCircle } from 'lucide-react';

const Booking = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const services = {
    'kesim-tasarim': [
      { name: 'Saç Kesimi', icon: Scissors },
      { name: 'Sakal Kesimi', icon: Scissors },
      { name: 'Kişiye Özel Saç Tasarımı', icon: Star },
    ],
    'sac-sekil-renk': [
      { name: 'Kişiye Özel Saç Bakımı', icon: Sparkles },
      { name: 'Kalıcı Saç Düzleştirme (Defrize)', icon: Sparkles },
      { name: 'Kalıcı Saç Dalgalandırma (Bioform)', icon: Sparkles },
      { name: 'Beyaz Saçta Renk Kırma (Zotos)', icon: Star },
      { name: 'Saç, Sakal ve Kaş Boyama', icon: Star },
      { name: 'Saç Şekline Göre Renklendirme', icon: Star },
    ],
    'sac-sakal-bakim': [
      { name: 'Kişiye Özel Sakal Bakımı', icon: Sparkles },
      { name: 'Kalıcı Sakal Düzleştirme (Defrize)', icon: Sparkles },
      { name: 'Kişiye Özel Sakal Tasarımı', icon: Award },
    ],
    'ozel-bakim': [
      { name: 'Batık Tedavisi', icon: Award },
      { name: 'Kişiye Özel Ürün Kullanımı', icon: Award },
    ],
    'kisisel': [
      { name: 'Özel Duş ve Kişisel Hijyen Alanları', icon: Sparkles },
    ],
    'ekstra': [
      { name: 'Ağda', icon: Star },
      { name: 'Manikür', icon: Star },
      { name: 'Pedikür', icon: Star },
    ],
  };

  const categories = [
    { id: 'all', name: 'Tüm Hizmetler' },
    { id: 'kesim-tasarim', name: 'Kesim ve Tasarım' },
    { id: 'sac-sekil-renk', name: 'Saç Şekil ve Renk' },
    { id: 'sac-sakal-bakim', name: 'Saç Sakal Bakım' },
    { id: 'ozel-bakim', name: 'Özel Bakım' },
    { id: 'kisisel', name: 'Kişisel' },
    { id: 'ekstra', name: 'Ekstra Hizmetler' },
  ];

  const getAllServices = () => {
    if (selectedCategory === 'all') {
      return Object.values(services).flat();
    }
    return services[selectedCategory] || [];
  };

  const handleBooking = () => {
    window.open('https://wa.me/902123511050?text=Merhaba, randevu almak istiyorum.', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-white to-cream pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4">
            Randevu <span className="text-gold">Alın</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Hizmetlerimizi inceleyin ve randevu almak için bizimle iletişime geçin
          </p>
          
          {/* Contact Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="tel:+902123511050"
              className="inline-flex items-center justify-center space-x-2 bg-gold text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-gold-dark transition-all hover:scale-105"
            >
              <Phone size={24} />
              <span>+90 212 351 10 50</span>
            </a>
            <button
              onClick={handleBooking}
              className="inline-flex items-center justify-center space-x-2 bg-green-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-600 transition-all hover:scale-105"
            >
              <MessageCircle size={24} />
              <span>WhatsApp ile Randevu</span>
            </button>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-8 overflow-x-auto">
          <div className="flex space-x-2 pb-4 min-w-max">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === category.id
                    ? 'bg-gold text-black shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {getAllServices().map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden group"
              >
                <div className="bg-gradient-to-br from-gold/20 to-gold/5 p-6 border-b border-gold/20">
                  <Icon className="w-12 h-12 text-gold mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-heading font-semibold text-gray-900">
                    {service.name}
                  </h3>
                </div>
                <div className="p-6">
                  <button
                    onClick={handleBooking}
                    className="w-full bg-gold/10 border-2 border-gold text-gold px-6 py-3 rounded-lg hover:bg-gold hover:text-black transition-all font-semibold"
                  >
                    Randevu Al
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-gradient-to-r from-black to-navy rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Randevu Almak İçin
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Telefon veya WhatsApp üzerinden bizimle iletişime geçebilir, 
            istediğiniz hizmeti ve uygun saati belirtebilirsiniz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+902123511050"
              className="inline-flex items-center justify-center space-x-2 bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all"
            >
              <Phone size={20} />
              <span>Hemen Ara</span>
            </a>
            <button
              onClick={handleBooking}
              className="inline-flex items-center justify-center space-x-2 bg-green-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 transition-all"
            >
              <MessageCircle size={20} />
              <span>WhatsApp</span>
            </button>
          </div>
        </div>

        {/* Back to Home */}
        <div className="mt-12 text-center">
          <Link
            to="/"
            className="inline-block text-gray-600 hover:text-gold transition-colors font-semibold"
          >
            ← Ana Sayfaya Dön
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Booking;
