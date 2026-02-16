import { useState } from 'react';
import { Image, Video, Maximize2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('photos');
  const { t } = useLanguage();

  return (
    <div className="pt-20 page-transition">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-black via-navy to-black">
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6">
            {t('gallery.title')}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('gallery.subtitle')}
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tabs */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex rounded-full bg-white shadow-lg p-2">
              <button
                onClick={() => setActiveTab('photos')}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all ${
                  activeTab === 'photos'
                    ? 'bg-gold text-black'
                    : 'text-gray-600 hover:text-gold'
                }`}
              >
                <Image size={20} />
                <span>{t('gallery.photos')}</span>
              </button>
              <button
                onClick={() => setActiveTab('videos')}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all ${
                  activeTab === 'videos'
                    ? 'bg-gold text-black'
                    : 'text-gray-600 hover:text-gold'
                }`}
              >
                <Video size={20} />
                <span>{t('gallery.videos')}</span>
              </button>
              <button
                onClick={() => setActiveTab('360tour')}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all ${
                  activeTab === '360tour'
                    ? 'bg-gold text-black'
                    : 'text-gray-600 hover:text-gold'
                }`}
              >
                <Maximize2 size={20} />
                <span>{t('gallery.tour360')}</span>
              </button>
            </div>
          </div>

          {/* Content */}
          {activeTab === 'photos' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Placeholder for photos - will be populated with actual images */}
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div
                  key={item}
                  className="aspect-square bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all hover:scale-105"
                >
                  <img
                    src={`https://images.unsplash.com/photo-${1585747860715 + item}-2ba37e788b70?w=600&q=80`}
                    alt={`Gallery ${item}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          )}

          {activeTab === 'videos' && (
            <div className="max-w-5xl mx-auto">
              {/* YouTube Video Embed */}
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                <div className="aspect-video">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/t_90Z3VmgyI"
                    title="MAS Barber Shop Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
                <div className="p-6 bg-gradient-to-br from-white to-gray-50">
                  <h3 className="text-2xl font-heading font-semibold mb-4">{t('gallery.comingSoon')}</h3>
                  <p className="text-gray-600 mb-6">
                    {t('gallery.videoGallery')}
                  </p>
                  <a
                    href="https://www.youtube.com/@masbarbershop4019/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-red-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition-all"
                  >
                    <Video size={20} />
                    <span>{t('gallery.viewChannel')}</span>
                  </a>
                </div>
              </div>
            </div>
          )}

          {activeTab === '360tour' && (
            <div className="max-w-6xl mx-auto">
              {/* 360 Tour Embed */}
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                <div style={{ height: '600px' }}>
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://kuula.co/share/collection/7qzcs?logo=1&info=1&fs=1&vr=0&sd=1&thumbs=1"
                    title="MAS Barber Shop 360° Sanal Tur"
                    frameBorder="0"
                    allow="xr-spatial-tracking; gyroscope; accelerometer"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
                <div className="p-6 bg-gradient-to-br from-white to-gray-50">
                  <h3 className="text-2xl font-heading font-semibold mb-4">{t('gallery.comingSoon')}</h3>
                  <p className="text-gray-600">
                    {t('gallery.photoGallery')}
                  </p>
                  <p className="text-gray-600 mb-4">
                    Fareyle sürükleyerek etrafınıza bakabilir, yakınlaştırabilir ve salonumuzun her köşesini görebilirsiniz.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <div className="inline-flex items-center space-x-2 bg-gold/10 text-gold px-4 py-2 rounded-full text-sm font-semibold">
                      <Maximize2 size={16} />
                      <span>Tam Ekran Modu</span>
                    </div>
                    <div className="inline-flex items-center space-x-2 bg-gold/10 text-gold px-4 py-2 rounded-full text-sm font-semibold">
                      <span>🖱️ Sürükle & Keşfet</span>
                    </div>
                    <div className="inline-flex items-center space-x-2 bg-gold/10 text-gold px-4 py-2 rounded-full text-sm font-semibold">
                      <span>🔍 Yakınlaştır</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Gallery;
