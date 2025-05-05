import React from 'react';
import { BookOpen, Menu, Heart, Users, BookMarked, AlertTriangle, Sparkles, AlertCircle, Paintbrush} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HomeApp() {
    return (
      <div className="min-h-screen bg-gray-900">
        {/* Header */}
        <header className="absolute top-5 left-0 right-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <Link to="index.html"><BookOpen className="h-8 w-8 text-pink-400" /></Link>
                <h1 className="text-2xl font-bold text-white">LGBTQ+ Stories</h1>
              </div>
              <nav className="hidden md:flex space-x-8">
                <Link to="/LYAL/lgcs" id="un" className="text-gray-300 hover:text-pink-300 transition-colors after:bg-pink-300">Lesbiana's Guide</Link>
                <Link to="/LYAL/lals" id="un" className="text-gray-300 hover:text-pink-300 transition-colors after:bg-pink-300">Like A Love Story</Link>
                <Link to="/LYAL/gqam" id="un" className="text-gray-300 hover:text-pink-300 transition-colors after:bg-pink-300">Gender Queer</Link>
              </nav>
              <button className="md:hidden">
                <Menu className="h-6 w-6 text-white" />
              </button>
            </div>
          </div>
        </header>
  
        {/* Hero Section */}
        <div className="relative min-h-screen flex items-center overflow-hidden">
          {/* Background Image and Overlay */}
          <div className="absolute inset-0 rainbow-border" style={{"border-bottom": ".3vh solid"}}>
            <img 
              src="https://rac.org/sites/default/files/2023-02/pride%20flags.png?auto=format&fit=crop&q=80&w=2400"
              alt="Abstract artistic landscape"
              className="absolute inset-0 w-full h-full object-cover hero-image" 
            />
            <div className="absolute inset-0 rainbow-overlay opacity-0"></div>
            <div className="absolute inset-0 bg-gray-950/85"></div>
          </div>
  
          {/* Main Content */}
          <div className="relative w-full">
            <div className="ml-[30vw] px-4 sm:px-6 lg:px-8 py-32">
              <div className="max-w-2xl">
                <h2 className="font-bold text-white mb-6 leading-tight block">
                  <span className="text-center text-[5vw] block mt-0">Discover</span>
                  <span className="text-center text-[3.2vw] block mt-0 text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300">
                    Stories That Matter
                  </span>
                </h2>
                <p className="text-xl md:text-2xl text-gray-300 mb-12 text-center">
                  A curated collection of LGBTQ+ young adult literature for educators creating inclusive classrooms
                </p>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-start justify-center">
                  <a 
                    href="#explore" 
                    className="px-8 py-4 bg-pink-500 text-white rounded-full text-lg font-semibold hover:bg-pink-600 transition-colors shadow-lg hover:shadow-xl shadow-pink-500/20"
                  >
                    Our Misson
                  </a>
                  <a 
                    href="#resources" 
                    className="px-8 py-4 bg-transparent border-2 border-pink-400 text-pink-400 rounded-full text-lg font-semibold hover:bg-pink-400/10 transition-colors shadow-lg hover:shadow-xl"
                  >
                    Teaching Resources
                  </a>
                </div>
              </div>
            </div>
          </div>
  
          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
  
        {/* Mission Section */}
        <section className="relative py-24 bg-gray-800/50"  id="explore">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 text-transparent bg-clip-text">Our Mission</h3>
                <p className="text-xl text-gray-300 leading-relaxed mb-6">
                  We believe every student deserves to see themselves represented in literature. Our mission is to help educators create inclusive classrooms where all students feel valued and understood through carefully curated LGBTQ+ young adult literature.
                </p>
                <div className="flex items-center space-x-4">
                  <Heart className="h-8 w-8 text-pink-400" />
                  <span className="text-lg text-gray-300">Supporting inclusive education since 2025</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gray-800/50  p-6 rounded-xl border border-pink-500/70">
                  <Users className="h-8 w-8 text-pink-400 mb-4 m-auto" />
                  <h4 className="text-xl font-semibold mb-2 text-white text-center">Community</h4>
                  <p className="text-gray-300 text-center">
                    Spread awareness of LGBTQ+ literature and experiences across the globe by creating a starting point for educators who are interested or inspired to begin teaching this content</p>
                </div>
                <div className="bg-gray-800/50  p-6 rounded-xl border border-blue-500/70">
                  <BookMarked className="h-8 w-8 text-blue-400 mb-4 m-auto" />
                  <h4 className="text-xl font-semibold mb-2 text-white text-center">Resources</h4>
                  <p className="text-gray-300 text-center">
                    Access various novel options and recommendaions with summaries, key notes, student review, and disclaimers to properly gauge which books work best for your class.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        {/* Features Section */}
        <section className="text-center py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900" id="resources">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 text-transparent bg-clip-text mb-4">What We Offer</h3>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Three novel choices as a jumping-off point for your new elective
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-800/50  p-8 rounded-xl border border-pink-500/30 hover:bg-pink-600/10 transition-all">
                <img 
                  src="https://m.media-amazon.com/images/I/81rJQN4KZML._AC_UF1000,1000_QL80_.jpg?auto=format&fit=crop&q=80&w=2400"
                  alt="Abstract artistic landscape"
                  className="rounded-xl mb-6 h-[77%]" 
                />
                <h4 className="text-[20px] font-semibold mb-3 text-white"><em id="un" className="after:bg-pink-500/75"><Link to="/LYAL/lgcs">Lesbiana's Guide to 
                Catholic School</Link></em></h4>
                <p className="text-gray-300 mb-6">
                  <i>Sonora Reyes</i>
                </p>
                <p className="text-gray-300">
                  Student favorite for plot and thematics
                </p>
              </div>
              <div className="bg-gray-800/50  p-8 rounded-xl border border-purple-500/30 hover:bg-purple-600/10 transition-all">
                <img 
                  src="https://imyourneighborbooks.org/wp-content/uploads/2020/11/LOVESTORY.jpg?auto=format&fit=crop&q=80&w=2400"
                  alt="Abstract artistic landscape"
                  className="rounded-xl mb-6 h-[77%]" 
                />
                <h4 className="text-2xl font-semibold mb-3 text-white"><em id="un" className="after:bg-purple-500/75"><Link to="/LYAL/lals">Like a Love Story</Link></em></h4>
                <p className="text-gray-300 mb-6">
                  <i>Abdi Nazemian</i>
                </p>
                <p className="text-gray-300">
                  Want a more historical side to LGBTQ+ Lit?
                </p>
              </div>
              <div className="bg-gray-800/50  p-8 rounded-xl border border-blue-500/30 hover:bg-blue-600/10 transition-all">
                <img 
                  src="https://m.media-amazon.com/images/I/71OXVhRzuuL.jpg?auto=format&fit=crop&q=80&w=2400"
                  alt="Abstract artistic landscape"
                  className="rounded-xl mb-6 h-[77%]" 
                />
                <h4 className="text-2xl font-semibold mb-3 text-white"><em id="un" className="after:bg-blue-500/75"><Link to="/LYAL/gqam">Gender Queer: A Memoir</Link></em></h4>
                <p className="text-gray-300 mb-6">
                  <i>Maia Kobabe</i>
                </p>
                <p className="text-gray-300">
                  Tired of reading? Try a graphic novel!
                </p>
              </div>
            </div>
          </div>
        </section>
  
        {/* Footer */}
        <footer className="bg-gray-950 text-white py-12">
          <div className="max-w-3xl mx-auto px-2 sm:px-4 lg:px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-20 text-center">
              <div>
                <h4 className="text-lg font-semibold mb-4">About</h4>
                <p className="text-gray-400">
                  Supporting educators in creating inclusive classrooms through literature
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Contact</h4>
                <p className="text-gray-400">
                  Questions? Reach out to me at vp510@georgetown.edu
                </p>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
              <p>© 2025 LGBTQ+ YA Literature. Created as a final project for educational purposes</p>
            </div>
          </div>
        </footer>
      </div>
    );
  }