import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  
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
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 bg-white rounded-2xl shadow-2xl p-4 w-72 mb-2 animate-in fade-in slide-in-from-bottom-4">
          <div className="flex justify-between items-center mb-4 pb-3 border-b border-gray-200">
            <h3 className="font-heading font-semibold text-gray-900">Berberinizi Seçin</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={20} />
            </button>
          </div>
          
          <div className="space-y-2">
            {barbers.map((barber, index) => (
              <button
                key={index}
                onClick={() => handleBarberClick(barber.phone)}
                className="w-full text-left p-3 rounded-lg hover:bg-green-50 transition-all group border border-transparent hover:border-green-500"
              >
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
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Main Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all hover:scale-110 ${
          !isOpen ? 'animate-pulse' : ''
        }`}
        aria-label="WhatsApp ile iletişime geç"
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
      </button>
    </div>
  );
};

export default WhatsAppButton;
