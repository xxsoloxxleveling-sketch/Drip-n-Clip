/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShoppingBag, 
  ChevronRight, 
  Star, 
  Heart, 
  Sparkles, 
  Menu, 
  X, 
  Instagram, 
  Twitter as TikTok, 
  ArrowRight,
  Plus
} from 'lucide-react';

// --- Components ---

const Logo = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center gap-4 ${className}`}>
    <img 
      src="/image.1064010168.png" 
      alt="Clip Drip Logo" 
      className="h-16 w-auto object-contain drop-shadow-sm" 
      onError={(e) => {
        const target = e.target as HTMLImageElement;
        target.style.display = 'none';
        const fallback = document.getElementById('logo-fallback');
        if (fallback) fallback.style.display = 'flex';
      }}
    />
    <div id="logo-fallback" style={{ display: 'none' }} className="flex flex-col items-center">
      <div className="flex items-center gap-2">
        <span className="text-3xl font-script text-gold leading-none italic transform -rotate-2">
          Clip
        </span>
        <Heart size={20} className="text-heart-pink fill-heart-pink animate-pulse" />
        <span className="text-3xl font-script text-gold leading-none italic transform rotate-2">
          Drip
        </span>
      </div>
      <div className="flex items-center gap-2 w-full mt-1">
        <div className="h-[1px] flex-1 bg-gold/30" />
        <span className="text-[9px] uppercase tracking-[0.3em] font-black text-gold/70">Drip Your Clip</span>
        <div className="h-[1px] flex-1 bg-gold/30" />
      </div>
    </div>
  </div>
);

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 bg-[#FFF5F9]/80 backdrop-blur-md border-b border-soft-pink px-6 py-3 flex justify-between items-center shadow-sm">
    <Logo />
    <div className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-[0.2em] text-[#111111]/70">
      <a href="#shop" className="hover:text-heart-pink transition-colors">Shop</a>
      <a href="#customize" className="hover:text-heart-pink transition-colors">Customize</a>
      <a href="#why" className="hover:text-heart-pink transition-colors">About</a>
    </div>
    <div className="flex items-center gap-4">
      <button className="p-2 hover:bg-soft-pink ring-1 ring-transparent hover:ring-gold/20 rounded-full transition-all text-heart-pink">
        <ShoppingBag size={20} strokeWidth={2} />
      </button>
      <button className="md:hidden p-2">
        <Menu size={20} />
      </button>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 px-6 text-center overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full -z-10 bg-[#FFF5F9] flex">
      <div className="flex-1 opacity-60 bg-[radial-gradient(circle_at_20%_20%,#FCE7F3_0%,transparent_50%)]" />
      <div className="flex-1 opacity-50 bg-[radial-gradient(circle_at_80%_80%,#FBCFE8_0%,transparent_60%)]" />
    </div>

    {/* Clip Art Decorations - Stickers */}
    <motion.div 
      animate={{ rotate: 360 }} 
      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      className="absolute top-40 left-[5%] opacity-40 pointer-events-none"
    >
      <div className="p-4 bg-white rounded-2xl shadow-lg border-2 border-gold -rotate-12">
        <Star size={40} className="text-gold fill-gold" />
      </div>
    </motion.div>

    <motion.div 
      animate={{ y: [0, -20, 0], x: [0, 10, 0] }} 
      transition={{ duration: 5, repeat: Infinity }}
      className="absolute top-60 right-[5%] opacity-40 pointer-events-none"
    >
      <div className="p-4 bg-white rounded-full shadow-lg border-2 border-heart-pink rotate-12">
        <Heart size={40} className="text-heart-pink fill-heart-pink" />
      </div>
    </motion.div>

    <motion.div 
      animate={{ scale: [1, 1.1, 1] }} 
      transition={{ duration: 3, repeat: Infinity }}
      className="absolute bottom-60 left-[10%] opacity-30 pointer-events-none"
    >
      <div className="p-3 bg-white rounded-xl shadow-md border-2 border-blue-200 rotate-6">
        <Sparkles size={30} className="text-blue-300 fill-blue-300" />
      </div>
    </motion.div>

    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="z-10 max-w-6xl w-full"
    >
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-0">
        <div className="flex-1 text-left order-2 lg:order-1">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold mb-6 block">New Collection 2026</span>
            <h1 className="text-7xl md:text-9xl font-display font-black leading-[0.85] mb-8 tracking-tighter">
              YOUR NAME.<br />
              <span className="text-gold italic font-light">YOUR STYLE.</span>
            </h1>
            <p className="text-lg text-[#111111]/70 mb-10 max-w-sm font-medium leading-relaxed">
              Express yourself through fully customizable hair accessories. 100% unique to you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-10 py-5 bg-[#111111] text-white font-bold rounded-2xl border-b-4 border-r-4 border-gray-700 hover:translate-x-0.5 hover:translate-y-0.5 active:border-b-0 active:border-r-0 active:translate-y-1 transition-all flex items-center justify-center gap-3 group">
                Shop the Drop <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-10 py-5 bg-white text-gold font-bold rounded-2xl border-4 border-gold border-b-8 border-r-8 hover:translate-x-0.5 hover:translate-y-0.5 active:border-b-4 active:border-r-4 active:translate-y-1 transition-all flex items-center justify-center">
                Design Yours
              </button>
            </div>
          </motion.div>
        </div>

        <div className="flex-1 relative order-1 lg:order-2 h-[500px] md:h-[700px] w-full">
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="w-full h-full relative p-4"
          >
            {/* Background Sticker Effect */}
            <div className="absolute top-10 left-10 w-20 h-20 bg-pink-100/50 rounded-full blur-2xl animate-pulse" />
            <div className="absolute bottom-20 right-10 w-32 h-32 bg-yellow-100/50 rounded-full blur-3xl animate-pulse delay-75" />

            <div className="absolute inset-0 bg-soft-pink rounded-[50px] -rotate-2 -z-10 border-2 border-dashed border-gold/30 shadow-inner" />
            <div className="absolute inset-0 bg-white border-8 border-white rounded-[40px] overflow-hidden shadow-2xl">
                <img 
                  src="/aesthetic_hair_clips_1778091663485.png" 
                  alt="Aesthetic Hair Clips" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
               <div className="absolute inset-0 bg-gradient-to-t from-heart-pink/30 via-transparent to-transparent" />
               <div className="absolute bottom-8 left-8 right-8">
                 <div className="bg-white/95 backdrop-blur-md px-8 py-5 rounded-[2.5rem] border-2 border-gold/20 shadow-2xl flex items-center justify-between">
                    <div>
                      <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-heart-pink mb-1 underline decoration-gold/50">Handcrafted</p>
                      <p className="text-2xl font-display font-black text-[#111111]">THE CLIP DRIP</p>
                    </div>
                    <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center text-gold">
                      <Sparkles size={24} />
                    </div>
                 </div>
               </div>
            </div>
          </motion.div>
          
          {/* Floating Accents */}
          <motion.div 
            animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="absolute -top-10 -right-10 hidden xl:block"
          >
             <div className="w-24 h-24 bg-gold rounded-full flex items-center justify-center text-white border-8 border-white shadow-xl">
                <Star size={32} fill="white" />
             </div>
          </motion.div>
        </div>
      </div>
    </motion.div>

    {/* Scroll Indicator */}
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
      <div className="w-px h-12 bg-[#111111]" />
    </div>
  </section>
);

const ProductCard = ({ title, price, image, delay }: { title: string, price: string, image: string, delay: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="group cursor-pointer"
  >
    <div className="aspect-[4/5] overflow-hidden bg-white border-4 border-white rounded-[2rem] mb-4 relative shadow-xl group-hover:shadow-2xl transition-all">
      <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
      <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-full border-2 border-soft-pink shadow-sm">
        <span className="text-[10px] font-black tracking-widest text-[#111111] uppercase">Trending</span>
      </div>
      <div className="absolute inset-0 bg-heart-pink/10 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
        <button className="w-full py-3 bg-[#111111] text-white font-bold rounded-xl border-b-4 border-gray-700 active:border-b-0 active:translate-y-px">
          Quick Add
        </button>
      </div>
    </div>
    <div className="px-2">
      <h3 className="font-display text-xl font-black uppercase tracking-tight">{title}</h3>
      <p className="text-heart-pink font-black text-lg">{price}</p>
    </div>
  </motion.div>
);

const InteractivePreview = () => {
  const [name, setName] = useState("Drip");
  const [charm, setCharm] = useState("heart");
  
  const charms = [
    { id: 'heart', icon: <Heart size={20} className="text-[#EC4899] fill-[#EC4899]" /> },
    { id: 'star', icon: <Star size={20} fill="#FDE047" className="text-[#FDE047]" /> },
    { id: 'sparkle', icon: <Sparkles size={20} fill="#D4AF37" className="text-[#D4AF37]" /> },
  ];

  return (
    <section id="customize" className="py-24 px-6 bg-[#FCE7F3]/40 border-y-4 border-dashed border-soft-pink">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 relative">
        {/* Section Decor Stickers */}
        <div className="absolute -top-16 left-0 text-heart-pink/30 -rotate-12 pointer-events-none hidden md:block">
          <div className="p-6 bg-white rounded-[2rem] shadow-xl border-4 border-soft-pink">
            <Heart size={80} fill="currentColor" strokeWidth={0} />
          </div>
        </div>
        <div className="absolute -bottom-16 right-0 text-gold/30 rotate-12 pointer-events-none hidden md:block">
          <div className="p-6 bg-white rounded-[2rem] shadow-xl border-4 border-gold/20">
            <Sparkles size={80} fill="currentColor" strokeWidth={0} />
          </div>
        </div>

        <div className="flex-1 space-y-8 z-10">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-display font-black tracking-tight leading-none">
              DESIGN <span className="italic text-gold italic">LIVE.</span>
            </h2>
            <p className="text-[#111111]/70 max-w-sm">
              Enter your name and choose charms to create your personalized hair clip. See it come to life in real-time.
            </p>
          </div>
          
          <div className="space-y-6 max-w-md">
            <div className="space-y-2">
              <label className="text-xs uppercase font-bold tracking-widest opacity-50">Your Name</label>
              <input 
                type="text" 
                maxLength={10}
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border-b-2 border-[#111111] bg-transparent pb-2 text-2xl font-bold focus:outline-none focus:border-gold transition-colors"
                placeholder="Type here..."
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-xs uppercase font-bold tracking-widest opacity-50">Choose Charm</label>
              <div className="flex gap-4">
                {charms.map((c) => (
                  <button 
                    key={c.id}
                    onClick={() => setCharm(c.id)}
                    className={`p-4 rounded-2xl border-2 transition-all ${charm === c.id ? 'border-gold bg-white text-gold scale-110' : 'border-transparent bg-white/50 opacity-50 hover:opacity-100'}`}
                  >
                    {c.icon}
                  </button>
                ))}
              </div>
            </div>

            <button className="w-full py-4 bg-gold text-white font-bold rounded-2xl hover:brightness-110 transition-all shadow-lg shadow-gold/20">
              Buy This Design
            </button>
          </div>
        </div>
        
        <div className="flex-1 w-full relative h-[400px] flex items-center justify-center">
          <motion.div 
            transition={{ type: "spring", stiffness: 100 }}
            className="w-[320px] h-[72px] bg-white border-[3px] border-gold rounded-full shadow-2xl relative flex items-center justify-center px-10 overflow-hidden"
          >
            {/* Gloss Reflection */}
            <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-transparent opacity-40 mix-blend-overlay" />
            <div className="absolute top-0 left-0 w-full h-[30%] bg-white/30 backdrop-blur-sm" />

            <div className="flex items-center gap-4 relative z-10 w-full justify-between">
              <motion.span 
                key={name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-3xl font-script text-gold whitespace-nowrap overflow-hidden text-ellipsis"
              >
                {name || "Your Name"}
              </motion.span>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={charm}
                  initial={{ opacity: 0, scale: 0, rotate: -20 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0, rotate: 20 }}
                  className="text-gold"
                >
                  {charms.find(c => c.id === charm)?.icon}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
          
          {/* Background Decor */}
          <div className="absolute -z-10 w-96 h-96 bg-white rounded-full border-4 border-dashed border-soft-pink animate-pulse" />
        </div>
      </div>
    </section>
  );
};

const Features = () => (
  <section id="why" className="py-24 px-6 overflow-hidden bg-white/40 border-y-4 border-dotted border-soft-pink">
    <div className="max-w-6xl mx-auto">
      <div className="mb-16 text-center">
        <span className="text-xs font-bold uppercase tracking-[0.4em] text-heart-pink mb-2 block">— The Quality —</span>
        <h2 className="text-4xl md:text-5xl font-display font-black leading-none uppercase">THE Clip Drip STANDARD</h2>
        <p className="text-muted text-lg max-w-lg mx-auto mt-4">Why our customers choose us for their daily aesthetic.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { icon: <Sparkles size={24} />, title: "Fully Personalized", desc: "Crafted specifically with your name and personality." },
          { icon: <Star size={24} />, title: "Trendy Aesthetic", desc: "Aesthetic designs that match your Instagram grid." },
          { icon: <ShoppingBag size={24} />, title: "Affordable Luxury", desc: "Premium quality materials without the premium price." },
          { icon: <Heart size={24} />, title: "Perfect For Gifts", desc: "The most meaningful birthday or friendship gift." },
        ].map((f, i) => (
          <div key={i} className="p-8 rounded-3xl bg-soft-pink/10 border border-soft-pink/20 hover:border-gold/30 transition-all group">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-gold mb-6 shadow-sm group-hover:scale-110 transition-transform">
              {f.icon}
            </div>
            <h4 className="text-xl font-bold mb-2">{f.title}</h4>
            <p className="text-sm text-[#111111]/60 leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const SocialFeed = () => (
  <section className="py-24 px-6 border-t border-soft-pink/20 bg-white text-[#111111] overflow-hidden">
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
        <div className="space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#F472B6]">Follow Us</span>
          <h2 className="text-4xl md:text-6xl font-display font-black leading-tight uppercase">INSTA<span className="italic text-gold italic font-light text-heart-pink">DRIP.</span></h2>
        </div>
        <a href="https://www.instagram.com/clipdripppp?igsh=ZzI0MDF2d240cmdk" target="_blank" rel="noopener noreferrer" className="text-md text-[#111111]/60 mb-2 font-medium hover:text-[#F472B6] transition-colors">@clipdripppp</a>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {[
          { url: "/insta_feed_1_1778091714407.png", rotation: "-rotate-2" },
          { url: "/insta_feed_2_1778091731642.png", rotation: "rotate-3" },
          { url: "/insta_feed_3_1778091746028.png", rotation: "-rotate-1" },
          { url: "/insta_feed_4_1778091761870.png", rotation: "rotate-2" }
        ].map((item, i) => (
          <motion.div 
            key={i} 
            whileHover={{ scale: 1.05, rotate: 0 }}
            className={`aspect-square p-3 bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all cursor-pointer border border-soft-pink ${item.rotation}`}
          >
            <div className="w-full h-[85%] overflow-hidden rounded-lg mb-2">
              <img 
                src={item.url} 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="flex justify-between items-center px-1">
              <a href="https://www.instagram.com/clipdripppp?igsh=ZzI0MDF2d240cmdk" target="_blank" rel="noopener noreferrer">
                <Instagram size={12} className="text-[#F472B6] hover:scale-125 transition-transform" />
              </a>
              <Heart size={12} className="text-[#F472B6]" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-20 px-6 bg-[#FFF5F9] border-t border-soft-pink/40">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
      <div className="space-y-6">
        <Logo />
        <p className="text-sm text-[#111111]/60 leading-relaxed font-medium">
          The ultimate destination for custom hair accessories. Designed by you, handmade for you.
        </p>
        <div className="flex gap-4">
          <a href="https://www.instagram.com/clipdripppp?igsh=ZzI0MDF2d240cmdk" target="_blank" rel="noopener noreferrer" className="p-2 border border-soft-pink rounded-full bg-white text-heart-pink shadow-sm hover:scale-110 transition-transform cursor-pointer block">
            <Instagram size={18} />
          </a>
          <div className="p-2 border border-soft-pink rounded-full bg-white text-heart-pink shadow-sm hover:scale-110 transition-transform cursor-pointer">
            <TikTok size={18} />
          </div>
        </div>
      </div>
      
      <div className="space-y-4">
        <h5 className="font-bold text-sm uppercase tracking-widest">Quick Links</h5>
        <ul className="space-y-2 text-sm text-[#111111]/60 font-medium">
          <li className="hover:text-gold transition-colors cursor-pointer">Track Order</li>
          <li className="hover:text-gold transition-colors cursor-pointer">Gift Cards</li>
          <li className="hover:text-gold transition-colors cursor-pointer">Privacy Policy</li>
          <li className="hover:text-gold transition-colors cursor-pointer">Shipping</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h5 className="font-bold text-sm uppercase tracking-widest">Support</h5>
        <ul className="space-y-2 text-sm text-[#111111]/60 font-medium">
          <li>hello@clipdrip.com</li>
          <li>+1 (234) 567 890</li>
          <li>Based in London</li>
        </ul>
      </div>

      <div className="space-y-6">
        <h5 className="font-bold text-sm uppercase tracking-widest text-[#111111]">Join the Drip</h5>
        <p className="text-xs text-[#111111]/60">Get 10% off your first custom order.</p>
        <div className="flex gap-2">
          <input 
            type="email" 
            placeholder="Email Address" 
            className="flex-1 bg-soft-pink/30 px-4 py-3 rounded-xl focus:outline-none focus:ring-1 focus:ring-gold text-sm"
          />
          <button className="bg-[#111111] text-white px-4 py-2 rounded-xl">
             <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
    <div className="max-w-6xl mx-auto pt-16 mt-16 border-t border-soft-pink/20 text-center opacity-40 text-xs font-bold tracking-widest">
      © 2026 CLIPDRIP ACCESSORIES. ALL RIGHTS RESERVED.
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="bg-[#FFF5F9] min-h-screen relative overflow-hidden">
      {/* Global Background Decorations - More "Clip Art" style */}
      <div className="absolute top-[5%] right-[2%] text-gold opacity-30 animate-pulse -z-0">
        <Star size={150} fill="currentColor" strokeWidth={0} />
      </div>
      <div className="absolute top-[35%] left-[-8%] text-heart-pink opacity-20 animate-bounce delay-700 -z-0">
        <Heart size={250} fill="currentColor" strokeWidth={0} />
      </div>
      <div className="absolute bottom-[15%] right-[-10%] text-soft-pink opacity-40 -rotate-12 -z-0">
        <Sparkles size={400} fill="currentColor" strokeWidth={0} />
      </div>
      <div className="absolute top-[60%] left-[80%] text-yellow-200 opacity-20 -z-0">
        <Star size={100} fill="currentColor" strokeWidth={0} />
      </div>

      <Navbar />
      <main>
        <Hero />
        
        <section id="shop" className="py-24 px-6 max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16 px-4">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-gold">Shop Best Sellers</span>
              <h2 className="text-4xl md:text-5xl font-display font-black tracking-tight leading-none">
                OUR TOP <span className="italic">DROPS.</span>
              </h2>
            </div>
            <a href="#" className="text-sm font-bold border-b border-[#111111] pb-1 hidden md:block">View All Collections</a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <ProductCard 
              title="Custom Name Hair Clip" 
              price="Rs. 999" 
              image="/custom_name_clip_1778091677747.png" 
              delay={0.1}
            />
            <ProductCard 
              title="Charm Hair Clip" 
              price="Rs. 799" 
              image="/charm_hair_clip_1778091692606.png" 
              delay={0.2}
            />
            <ProductCard 
              title="Premium Personalized Clip" 
              price="Rs. 1,299" 
              image="/aesthetic_hair_clips_1778091663485.png" 
              delay={0.3}
            />
          </div>
        </section>

        <InteractivePreview />
        
        <Features />
        
        <SocialFeed />
      </main>
      <Footer />
    </div>
  );
}
