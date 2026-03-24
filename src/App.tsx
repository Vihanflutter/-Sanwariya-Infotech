import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Monitor, 
  Printer, 
  Laptop, 
  Network, 
  BookOpen, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  CheckCircle2,
  ChevronRight,
  Menu,
  X,
  MessageSquare
} from 'lucide-react';

const COLORS = {
  bg: 'bg-[#0A0F1E]', // Deep Navy Blue
  card: 'bg-[#151B2D]',
  accent: 'text-[#FFD700]', // Gold
  accentBg: 'bg-[#FFD700]',
  accentHover: 'hover:bg-[#E6C200]',
  text: 'text-gray-300',
  heading: 'text-white'
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    city: '',
    deviceType: '',
    serviceRequired: '',
    issue: '',
    time: 'Any Time'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Construct the WhatsApp message
    const businessNumber = "919549810793"; // Updated with your actual WhatsApp number
    const message = `*New Service Request - श्री Sanwariya Infotech*%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Mobile:* ${formData.mobile}%0A` +
      `*City:* ${formData.city}%0A` +
      `*Device:* ${formData.deviceType || 'Not Specified'}%0A` +
      `*Service:* ${formData.serviceRequired || 'Not Specified'}%0A` +
      `*Issue:* ${formData.issue}%0A` +
      `*Preferred Time:* ${formData.time}`;

    const whatsappUrl = `https://wa.me/${businessNumber}?text=${message}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');

    setFormStatus('success');
    setFormData({
      name: '',
      mobile: '',
      city: '',
      deviceType: '',
      serviceRequired: '',
      issue: '',
      time: 'Any Time'
    });
  };

  const services = [
    { image: 'https://images.unsplash.com/photo-1597733336794-12d05021d510?auto=format&fit=crop&q=80&w=800', title: 'Laptop & Desktop Repair', desc: 'Expert repair services for all brands of laptops and desktops.' },
    { image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&q=80&w=800', title: 'Printer Repair', desc: 'Fast and reliable printer servicing and cartridge refilling.' },
    { image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800', title: 'AMC Services', desc: 'Annual Maintenance Contracts for businesses and homes.' },
    { image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800', title: 'Networking Solutions', desc: 'Complete office and home networking setup and support.' },
    { image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800', title: 'Smart Classroom Setup Solution', desc: 'Setup and maintenance of smart classes and interactive boards.' },
    { image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&q=80&w=800', title: 'Laptop / Computer Sales', desc: 'New laptop/desktop sales and hardware upgrades.' }
  ];

  return (
    <div className={`min-h-screen ${COLORS.bg} font-sans selection:bg-yellow-500/30`}>
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-[#0A0F1E]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-2">
              <div className={`w-10 h-10 ${COLORS.accentBg} rounded-lg flex items-center justify-center`}>
                <Monitor className="text-[#0A0F1E] w-6 h-6" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white tracking-tight">
                  "श्री Sanwariya" <span className={COLORS.accent}>Infotech</span>
                </h1>
                <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-medium">
                  IT Support Specialist
                </p>
              </div>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {['Home', 'Services', 'About', 'Book Now'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
                >
                  {item}
                </a>
              ))}
              <a 
                href="#book-now"
                className={`${COLORS.accentBg} text-[#0A0F1E] px-5 py-2 rounded-full text-sm font-bold ${COLORS.accentHover} transition-all shadow-lg shadow-yellow-500/10`}
              >
                Get a Quote
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-[#151B2D] border-b border-white/5 p-4 space-y-4"
          >
            {['Home', 'Services', 'About', 'Book Now'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="block text-gray-400 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-yellow-500/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-xs font-bold uppercase tracking-wider mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
                </span>
                Available 24/7 for Emergency Support
              </div>
              <h2 className="text-5xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
                Your Trusted <span className={COLORS.accent}>IT Support</span> Specialist
              </h2>
              <p className="text-xl text-gray-400 mb-10 max-w-lg leading-relaxed">
                From laptop repairs to enterprise networking, we provide professional IT solutions tailored to your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#book-now"
                  className={`${COLORS.accentBg} text-[#0A0F1E] px-8 py-4 rounded-xl text-lg font-bold ${COLORS.accentHover} transition-all flex items-center justify-center gap-2 group shadow-xl shadow-yellow-500/20`}
                >
                  Book a Service
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="#services"
                  className="bg-white/5 border border-white/10 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-white/10 transition-all flex items-center justify-center"
                >
                  Explore Services
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1000" 
                  alt="IT Support" 
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1E] via-transparent to-transparent" />
              </div>
              {/* Floating Stats */}
              <div className="absolute -bottom-6 -left-6 bg-[#151B2D] border border-white/10 p-6 rounded-2xl shadow-xl hidden sm:block">
                <p className="text-3xl font-bold text-white">1000+</p>
                <p className="text-sm text-gray-400">Happy Customers</p>
              </div>
              <div className="absolute -top-6 -right-6 bg-[#151B2D] border border-white/10 p-6 rounded-2xl shadow-xl hidden sm:block">
                <p className="text-3xl font-bold text-white">10+</p>
                <p className="text-sm text-gray-400">Years Experience</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-[#0D1326]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-yellow-500 uppercase tracking-[0.3em] mb-4">What We Do</h2>
            <h3 className="text-4xl font-bold text-white">Comprehensive IT Solutions</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className={`${COLORS.card} overflow-hidden rounded-3xl border border-white/5 hover:border-yellow-500/30 transition-all group`}
              >
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#151B2D] to-transparent opacity-60" />
                </div>
                <div className="p-8">
                  <h4 className="text-xl font-bold text-white mb-4">{service.title}</h4>
                  <p className="text-gray-400 leading-relaxed mb-6">{service.desc}</p>
                  <a href="#book-now" className="text-yellow-500 font-bold flex items-center gap-2 text-sm">
                    Learn More <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-sm font-bold text-yellow-500 uppercase tracking-[0.3em] mb-4">About Us</h2>
              <h3 className="text-4xl font-bold text-white mb-8">Expertise You Can Count On</h3>
              <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                Led by <span className="text-white font-bold">Divyesh Mewara</span>, "श्री Sanwariya" Infotech has been a cornerstone of IT support in the region. We believe in providing honest, fast, and reliable services.
              </p>
              <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                Whether you are a student needing a laptop repair or a large corporation looking for AMC services, we treat every client with the same level of professional care.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h5 className="text-2xl font-bold text-white mb-1">Fast</h5>
                  <p className="text-sm text-gray-500">Response Time</p>
                </div>
                <div>
                  <h5 className="text-2xl font-bold text-white mb-1">Reliable</h5>
                  <p className="text-sm text-gray-500">Solutions</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="aspect-square rounded-3xl overflow-hidden border border-white/10 relative">
                <img 
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000" 
                  alt="About Us" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-yellow-500/10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section id="book-now" className="py-24 bg-[#0D1326]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-yellow-500 uppercase tracking-[0.3em] mb-4">Service Request</h2>
            <h3 className="text-4xl font-bold text-white">Book Your Service Today</h3>
            <p className="text-gray-400 mt-4">Fill out the form below and we'll get back to you instantly via WhatsApp.</p>
          </div>

          <div className={`${COLORS.card} p-8 sm:p-12 rounded-[2rem] border border-white/10 shadow-2xl`}>
            {formStatus === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="text-2xl font-bold text-white mb-4">Request Sent!</h4>
                <p className="text-gray-400 mb-8">Thank you for choosing श्री Sanwariya Infotech. We will contact you shortly.</p>
                <button 
                  onClick={() => setFormStatus('idle')}
                  className="text-yellow-500 font-bold underline"
                >
                  Send another request
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Your Full Name *</label>
                    <input 
                      required
                      type="text"
                      className="w-full bg-[#0A0F1E] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition-all"
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Mobile Number *</label>
                    <input 
                      required
                      type="tel"
                      className="w-full bg-[#0A0F1E] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition-all"
                      placeholder="+91 98765 43210"
                      value={formData.mobile}
                      onChange={(e) => setFormData({...formData, mobile: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">City / Area *</label>
                    <input 
                      required
                      type="text"
                      className="w-full bg-[#0A0F1E] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition-all"
                      placeholder="e.g. Kota, Raj."
                      value={formData.city}
                      onChange={(e) => setFormData({...formData, city: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Device Type</label>
                    <select 
                      className="w-full bg-[#0A0F1E] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition-all appearance-none"
                      value={formData.deviceType}
                      onChange={(e) => setFormData({...formData, deviceType: e.target.value})}
                    >
                      <option value="">Select Device</option>
                      <option>Laptop</option>
                      <option>Desktop / Computer</option>
                      <option>Printer</option>
                      <option>Networking Equipment</option>
                      <option>CCTV / Camera</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Service Required *</label>
                  <select 
                    required
                    className="w-full bg-[#0A0F1E] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition-all appearance-none"
                    value={formData.serviceRequired}
                    onChange={(e) => setFormData({...formData, serviceRequired: e.target.value})}
                  >
                    <option value="">Select a Service</option>
                    <option>Annual Maintenance Contract (AMC)</option>
                    <option>Printer Services & Cartridge Refilling</option>
                    <option>Laptop / Computer Sales</option>
                    <option>Networking Solutions</option>
                    <option>Smart Classroom Setup Solution</option>
                    <option>Laptop & Desktop Repair</option>
                    <option>Data Recovery</option>
                    <option>CCTV & Security Systems</option>
                    <option>Other / Not Sure</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Describe Your Issue / Requirement</label>
                  <textarea 
                    required
                    rows={3}
                    className="w-full bg-[#0A0F1E] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition-all"
                    placeholder="e.g. My laptop screen is cracked"
                    value={formData.issue}
                    onChange={(e) => setFormData({...formData, issue: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Preferred Visit Time</label>
                  <select 
                    className="w-full bg-[#0A0F1E] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition-all appearance-none"
                    value={formData.time}
                    onChange={(e) => setFormData({...formData, time: e.target.value})}
                  >
                    <option>Any Time</option>
                    <option>Morning (9AM - 12PM)</option>
                    <option>Afternoon (12PM - 4PM)</option>
                    <option>Evening (4PM - 8PM)</option>
                  </select>
                </div>

                <button 
                  disabled={formStatus === 'submitting'}
                  type="submit"
                  className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white py-4 rounded-xl text-lg font-bold transition-all shadow-xl shadow-green-500/20 flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <MessageSquare className="w-5 h-5" />
                  {formStatus === 'submitting' ? 'Sending...' : 'Send Request via WhatsApp'}
                </button>
                {formStatus === 'error' && (
                  <p className="text-red-500 text-sm text-center mt-2">Something went wrong. Please try again.</p>
                )}
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className={`w-8 h-8 ${COLORS.accentBg} rounded flex items-center justify-center`}>
                  <Monitor className="text-[#0A0F1E] w-5 h-5" />
                </div>
                <h1 className="text-lg font-bold text-white">
                  "श्री Sanwariya" <span className={COLORS.accent}>Infotech</span>
                </h1>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                Your trusted partner for all IT support and computer services. Fast, reliable, and professional.
              </p>
            </div>
            <div>
              <h5 className="text-white font-bold mb-6">Contact Info</h5>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-gray-500 text-sm">
                  <Phone className="w-4 h-4 text-yellow-500" /> +91 95498 10793
                </li>
                <li className="flex items-center gap-3 text-gray-500 text-sm">
                  <Phone className="w-4 h-4 text-yellow-500" /> +91 99288 10793
                </li>
                <li className="flex items-center gap-3 text-gray-500 text-sm">
                  <Mail className="w-4 h-4 text-yellow-500" /> babacomputerexperts@gmail.com
                </li>
                <li className="flex items-center gap-3 text-gray-500 text-sm">
                  <MapPin className="w-4 h-4 text-yellow-500" /> 73, Anantpura Scheme, Opp to Reliance Petrol Pump, Kota (Raj.)
                </li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-bold mb-6">Business Hours</h5>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-gray-500 text-sm">
                  <Clock className="w-4 h-4 text-yellow-500" /> Mon - Sat: 9:00 AM - 8:00 PM
                </li>
                <li className="flex items-center gap-3 text-gray-500 text-sm">
                  <Clock className="w-4 h-4 text-yellow-500" /> Sunday: Closed
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/5 text-center">
            <p className="text-gray-600 text-xs">
              © 2026 "श्री Sanwariya" Infotech. All rights reserved. Designed for Divyesh Mewara.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
