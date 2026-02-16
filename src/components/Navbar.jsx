import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Scissors, MessageCircle } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBarberMenu, setShowBarberMenu] = useState(false);
  const [isOnline, setIsOnline] = useState(false);
  const location = useLocation();

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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.navbar-dropdown')) {
        setShowBarberMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  const handleBarberClick = (phone) => {
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
    setShowBarberMenu(false);
  };

  const isHomePage = location.pathname === '/';
  
  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled || !isHomePage ? 'bg-black/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <img 
                src="/logo.png" 
                alt="MAS Barber Shop Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-2xl font-heading font-bold text-white">MAS Barber Shop</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-gold transition-all duration-300 hover:scale-110">
              Ana Sayfa
            </Link>
            <Link to="/hakkimizda" className="text-white hover:text-gold transition-all duration-300 hover:scale-110">
              Hakkımızda
            </Link>
            <Link to="/hizmetlerimiz" className="text-white hover:text-gold transition-all duration-300 hover:scale-110">
              Hizmetlerimiz
            </Link>
            <Link to="/galeri" className="text-white hover:text-gold transition-all duration-300 hover:scale-110">
              Galeri
            </Link>
            <Link to="/iletisim" className="text-white hover:text-gold transition-all duration-300 hover:scale-110">
              İletişim
            </Link>
            
            {/* Randevu Al Dropdown */}
            <div className="relative navbar-dropdown">
              <button
                onClick={() => setShowBarberMenu(!showBarberMenu)}
                className="bg-gold text-black px-6 py-2 rounded-full font-semibold hover:bg-gold-dark transition-all duration-300 hover:scale-105 active:scale-95"
              >
                Randevu Al
              </button>
              
              {showBarberMenu && (
                <div className="absolute top-full right-0 mt-2 bg-white rounded-xl shadow-2xl p-4 w-80 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <h3 className="font-heading font-semibold text-gray-900 mb-3 text-center">Berberinizi Seçin</h3>
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

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/98 backdrop-blur-sm">
          <div className="px-4 pt-2 pb-6 space-y-4">
            <Link 
              to="/"
              onClick={() => setIsOpen(false)}
              className="block w-full text-left text-white hover:text-gold transition-colors py-2"
            >
              Ana Sayfa
            </Link>
            <Link 
              to="/hakkimizda"
              onClick={() => setIsOpen(false)}
              className="block w-full text-left text-white hover:text-gold transition-colors py-2"
            >
              Hakkımızda
            </Link>
            <Link 
              to="/hizmetlerimiz"
              onClick={() => setIsOpen(false)}
              className="block w-full text-left text-white hover:text-gold transition-colors py-2"
            >
              Hizmetlerimiz
            </Link>
            <Link 
              to="/galeri"
              onClick={() => setIsOpen(false)}
              className="block w-full text-left text-white hover:text-gold transition-colors py-2"
            >
              Galeri
            </Link>
            <Link 
              to="/iletisim"
              onClick={() => setIsOpen(false)}
              className="block w-full text-left text-white hover:text-gold transition-colors py-2"
            >
              İletişim
            </Link>
            
            {/* Mobile Barber Selection */}
            <div className="pt-4 border-t border-gray-700">
              <h3 className="text-white font-semibold mb-3 text-center">Randevu Al - Berberinizi Seçin</h3>
              <div className="space-y-2">
                {barbers.map((barber, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      handleBarberClick(barber.phone);
                      setIsOpen(false);
                    }}
                    className="w-full text-left p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-all group"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <MessageCircle size={20} className="text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-white">
                          {barber.name}
                        </div>
                        <div className="text-sm text-gray-300">{barber.displayPhone}</div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
