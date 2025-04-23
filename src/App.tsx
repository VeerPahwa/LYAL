import React from 'react';
import { BookOpen, Menu, Heart, Users, BookMarked, AlertTriangle, Sparkles, AlertCircle, Paintbrush} from 'lucide-react';

export function HomeApp() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <header className="absolute top-5 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <BookOpen className="h-8 w-8 text-pink-400" />
              <h1 className="text-2xl font-bold text-white">LGBTQ+ Stories</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="lgcs.html" id="un" className="text-gray-300 hover:text-pink-300 transition-colors after:bg-pink-300">LGCS</a>
              <a href="lals.html" id="un" className="text-gray-300 hover:text-pink-300 transition-colors after:bg-pink-300">LALS</a>
              <a href="gqam.html" id="un" className="text-gray-300 hover:text-pink-300 transition-colors after:bg-pink-300">GQAM</a>
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
            src="https://media.npr.org/assets/img/2022/04/26/npr_moth-final_slide-be503f156cd90f82ce2061fa33a54bc855a92fab.jpg?auto=format&fit=crop&q=80&w=2400"
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
              <h4 className="text-[20px] font-semibold mb-3 text-white"><em id="un" className="after:bg-pink-500/75"><a href="lgcs.html">Lesbiana's Guide to 
              Catholic School</a></em></h4>
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
              <h4 className="text-2xl font-semibold mb-3 text-white"><em id="un" className="after:bg-purple-500/75"><a href="lals.html">Like a Love Story</a></em></h4>
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
              <h4 className="text-2xl font-semibold mb-3 text-white"><em id="un" className="after:bg-blue-500/75"><a href="gqam.html">Gender Queer: A Memoir</a></em></h4>
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

export function LGCSApp() {
  return (
    <div className="min-h-screen bg-gray-900 text-white" style={{overflowX: "hidden"}}>
      {/* Header */}
      <header className="absolute top-5 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <a href="index.html"><BookOpen className="h-8 w-8 text-pink-400" /></a>
              <h1 className="text-2xl font-bold text-white">LGBTQ+ Stories</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="lgcs.html" id="un" className="text-gray-300 hover:text-pink-300 transition-colors after:bg-pink-300">LGCS</a>
              <a href="lals.html" id="un" className="text-gray-300 hover:text-pink-300 transition-colors after:bg-pink-300">LALS</a>
              <a href="gqam.html" id="un" className="text-gray-300 hover:text-pink-300 transition-colors after:bg-pink-300">GQAM</a>
            </nav>
            <button className="md:hidden">
              <Menu className="h-6 w-6 text-white" />
            </button>
          </div>
        </div>
      </header>
      {/* Hero */}
      <section className="relative h-[50vh] overflow-hidden flex items-center justify-center rainbow-border" style={{'border-bottom': '.3vh solid'}}>
        <img
          src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/e7093122-73df-4335-be23-2eb811afa183.__CR0,0,970,300_PT0_SX970_V1___.jpg"
          alt="Lesbiana's Guide"
          className="absolute inset-0 w-full object-cover opacity-10 scale-105"
        />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 text-transparent bg-clip-text">
            Lesbiana's Guide to Catholic School
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A witty, heartfelt debut by Sonora Reyes exploring identity, belonging, and bravery.
          </p>
        </div>
      </section>

      {/* Book Summary */}
      <section className="py-20 bg-gray-800/60  px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-[7vw] items-center">
          <img 
            src="https://m.media-amazon.com/images/I/81rJQN4KZML._AC_UF1000,1000_QL80_.jpg" 
            alt="Book Cover" 
            className="rounded-xl shadow-lg border border-pink-400/30"
          />
          <div className="w-[35vw]">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 text-transparent bg-clip-text">Book Overview</h2>
            <p className="text-gray-300 mb-6">
            Yamilet “Yami” Flores is a sixteen‑year‑old Mexican‑American who, after being outed by her best friend, follows her older brother Cesar to a predominantly white Catholic high school in Phoenix, determined to keep both of their emerging queer identities hidden.
 At home, their devout mother’s strict expectations—and Cesar’s own struggles as a bisexual teen—lead them to a desperate ruse: Yami pretends to be Cesar’s girlfriend to placate their family. 
 Thrust into an environment where faith and conformity reign, Yami’s carefully maintained façade begins to crack when she meets Bo, the only out lesbian at school, whose confidence both inspires and unnerves her. Through the pressure of the fake‑boyfriend scheme, family tension in her relationship with her deported father, and the pull of newfound friendship (and attraction), the novel navigates the tensions of family loyalty, religious tradition, and the courage it takes to claim one’s true self.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Heart className="text-pink-400 mr-3" />
                Most voted for favorite novel
              </li>
              <li className="flex items-center">
                <BookMarked className="text-green-400 mr-3" />
                Recommended Reading Level: Grades 9–12+
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* Book Review Section */}
      <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@600&display=swap" rel="stylesheet"></link>
      <div className="bg-gray-800/60">
      <section
        className="relative w-full overflow-hidden py-24"
        style={{ transform: 'rotate(-1.5deg)' }} // slight slant
      >
        {/* Notebook background */}
        <div className="absolute inset-0 bg-yellow-200"></div>

        {/* Red margin line */}
        <div className="absolute top-0 bottom-0 left-16 w-[2px] bg-red-500"></div>

        {/* Ruled horizontal lines */}
        {[...Array(14)].map((_, i) => (
          <div
            key={i}
            className="absolute left-0 right-0 h-px bg-yellow-300/80"
            style={{ top: `${(i + 1) * 50}px` }}
          />
        ))}

        {/* Content */}
        <div className="relative max-w-4xl mx-auto px-10">
          <h3
            className="text-7xl font-bold text-gray-900 mb-6 font-[Caveat]"
            style={{ fontFamily: "'Caveat', cursive" }}
          >
            ✏️ My Book Review
          </h3>
          <p className="text-lg text-gray-900 leading-relaxed pl-12" style={{ fontFamily: "'Caveat', cursive", fontSize: '1.5em' }}>
            "Lesbiana’s Guide was certainly one of my favorite books that I've read this year. It's a great conversation starter for themes of identity, faith, and family, all while developing an interesting plot with the perfect pacing for reading a novel of this length. The issues it talks about are tough - family getting deported, overall homophobia, but Reyes effectively utilizes these issues to deliver a compelling narrative of the intersectionality of marginialized identities.
            <br></br><br />
            Yami was super relatable too. The characters weren't too far from my age, and in some ways their experiences have made them more mature than me. So while this is a story of adolescenes and coming into your true self, I think the age of the characters fits perfectly for a room of students. So while I don't have the teacher's perspective on this book, I can certainly vouch for it a strong choice of literature for any highschool to college classroom."
          </p>
          <p className="mt-6 text-right text-gray-700 italic">
            – An Opinion of One Singular Undergraduate Student
          </p>
        </div>
      </section>
      </div>
      {/* Teaching Tips */}
      <section className="py-16 px-6 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-3xl font-semibold mb-4 text-white">Disclaimers For Educators</h3>
          <h4 className="flex w-auto items-center mx-auto text-red-400 ml-[1.5vw] mb-4 text-2xl"><AlertCircle className="mr-2 w-11 h-11" /> Banned in Some States in certain districts! Please check your local laws before teaching </h4>
          <div className="grid md:grid-cols-3 gap-6">

            {/* Religious Conflict */}
            <div className="p-6 rounded-xl border-[0.1vw] border-pink-500/50 bg-gray-800/40 flex flex-col items-start">
              <div className="flex items-center mb-3 text-pink-400 mx-auto">
                <AlertTriangle className="h-5 w-5 mr-2" />
                <h4 className="text-xl font-bold">Tension with Religion</h4>
              </div>
              <p className="text-gray-300">Depicts strict Catholic doctrine and the emotional toll it takes on queer students, including moments of spiritual guilt and tension.</p>
            </div>

            {/* Homophobia & Bullying */}
            <div className="p-6 rounded-xl border-[0.1vw] border-purple-500/50 bg-gray-800/40 flex flex-col items-start">
              <div className="flex items-center mb-3 text-purple-400 mx-auto">
                <AlertTriangle className="h-5 w-5 mr-2" />
                <h4 className="text-xl font-bold">Homophobia & Bullying</h4>
              </div>
              <p className="text-gray-300">Contains instances of anti‑LGBTQ+ slurs, peer harassment, and familial rejection that may be upsetting for some readers.</p>
            </div>

            {/* Deception & Mature Themes */}
            <div className="p-6 rounded-xl border-[0.1vw] border-indigo-500/50 bg-gray-800/40 flex flex-col items-start">
              <div className="flex items-center mb-3 text-indigo-400 mx-auto">
                <AlertTriangle className="h-5 w-5 mr-2" />
                <h4 className="text-xl font-bold">Messy Relationships</h4>
              </div>
              <p className="text-gray-300">Centers on a “fake dating” ruse, explores sibling grief, and includes mild language and romantic tension.</p>
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

export function LALSApp() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="absolute top-5 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
            <a href="index.html"><BookOpen className="h-8 w-8 text-pink-400" /></a>
              <h1 className="text-2xl font-bold text-white">LGBTQ+ Stories</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="lgcs.html" id="un" className="text-gray-300 hover:text-pink-300 transition-colors after:bg-pink-300">LGCS</a>
              <a href="lals.html" id="un" className="text-gray-300 hover:text-pink-300 transition-colors after:bg-pink-300">LALS</a>
              <a href="gqam.html" id="un" className="text-gray-300 hover:text-pink-300 transition-colors after:bg-pink-300">GQAM</a>
            </nav>
            <button className="md:hidden">
              <Menu className="h-6 w-6 text-white" />
            </button>
          </div>
        </div>
      </header>
      <div className="min-h-screen bg-gray-900 text-white" style={{overflowX: "hidden"}}>
      {/* Header */}
      <header className="absolute top-5 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <a href="index.html"><BookOpen className="h-8 w-8 text-pink-400" /></a>
              <h1 className="text-2xl font-bold text-white">LGBTQ+ Stories</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="lgcs.html" id="un" className="text-gray-300 hover:text-pink-300 transition-colors after:bg-pink-300">LGCS</a>
              <a href="lals.html" id="un" className="text-gray-300 hover:text-pink-300 transition-colors after:bg-pink-300">LALS</a>
              <a href="gqam.html" id="un" className="text-gray-300 hover:text-pink-300 transition-colors after:bg-pink-300">GQAM</a>
            </nav>
            <button className="md:hidden">
              <Menu className="h-6 w-6 text-white" />
            </button>
          </div>
        </div>
      </header>
      {/* Hero */}
      <section className="relative h-[100vh] overflow-hidden flex items-center justify-center rainbow-border" style={{'border-bottom': '.3vh solid'}}>
        <img
          src="https://media.them.us/photos/5ddd9c24a9636200092e1e14/16:9/w_2560%2Cc_limit/GettyImages-50585405.jpg"
          alt="Lesbiana's Guide"
          className="absolute inset-0 w-full object-cover opacity-10 scale-105"
        />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-6xl h-[8vh] font-extrabold mb-8 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 text-transparent bg-clip-text">
            Like a Love Story
          </h1>
          <p className="text-3xl text-gray-300 max-w-3xl mx-auto">
          A bold, tender novel by Abdi Nazemian that blends queer love, activism, and 1980s pop culture into a story of friendship, fear, and finding your voice.
          </p>
        </div>
      </section>

      {/* Book Summary */}
      <section className="py-20 bg-gray-800/60  px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-[7vw] items-center">
          <img 
            src="https://imyourneighborbooks.org/wp-content/uploads/2020/11/LOVESTORY.jpg" 
            alt="Book Cover" 
            className="rounded-xl shadow-lg border border-pink-400/30"
          />
          <div className="w-[35vw]">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 text-transparent bg-clip-text">Book Overview</h2>
            <p className="text-gray-300 mb-6">
            <i>Like a Love Story</i> by Abdi Nazemian is a powerful and heartfelt YA novel set against the backdrop of 1989 New York, in the midst of the AIDS epidemic. It follows Reza, an Iranian teen who’s closeted, fearful, and newly enrolled at a high school where he meets Judy—an aspiring fashion designer—and her best friend Art, the only out gay student and an ACT UP activist. Reza begins dating Judy to hide his identity, but finds himself falling for Art, throwing all three into emotional turmoil. As they navigate love, loss, and loyalty, the novel becomes a stirring tribute to queer resilience, activism, and the transformative power of chosen family. As Nazemian describes:

               <br /><br /> - “A love letter to queer history, to ACT UP, to Madonna, and to friendship.” <br /><br />

              This is more than a coming-of-age story—it's a poignant exploration of identity, courage, and what it means to take a stand when silence equals death.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Sparkles className="text-yellow-400 mr-3" />
                Widely Celebrated Queer Historical Fiction
              </li>
              <li className="flex items-center">
                <BookMarked className="text-green-400 mr-3" />
                Recommended Reading Level: Grades 10-12+
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* Book Review Section */}
      <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@600&display=swap" rel="stylesheet"></link>
      <div className="bg-gradient-to-r from-gray-800 via-gray-800/30 to-gray-800/60">
      <section
        className="relative w-full overflow-hidden py-24"
        style={{ transform: 'rotate(1.5deg)' }} // slight slant
      >
        {/* Notebook background */}
        <div className="absolute inset-0 bg-yellow-200"></div>

        {/* Red margin line */}
        <div className="absolute top-0 bottom-0 left-16 w-[2px] bg-red-500"></div>

        {/* Ruled horizontal lines */}
        {[...Array(14)].map((_, i) => (
          <div
            key={i}
            className="absolute left-0 right-0 h-px bg-yellow-300/80"
            style={{ top: `${(i + 1) * 50}px` }}
          />
        ))}

        {/* Content */}
        <div className="relative max-w-4xl mx-auto px-10">
          <h3
            className="text-7xl font-bold text-gray-900 mb-6 font-[Caveat]"
            style={{ fontFamily: "'Caveat', cursive" }}
          >
            ✏️ My Book Review
          </h3>
          <p className="text-lg text-gray-900 leading-relaxed pl-12" style={{ fontFamily: "'Caveat', cursive", fontSize: '1.5em' }}>
            "The plot was one of the most interesting I had read in this type of genre. Each chapter alternates perspective between the three main characters, and each section (there are 3) is a time-skip in the narrative. While that sounds confusing, you realize what's going on pretty quick, which makes it a super dynamic way of getting into the thoughts of each of the characters. Sometimes, I wished that one chapter was written in another character's perspective, but in a way, this was a good thing, as it served as a thought exercise that kept me thinking deep about the characters' complex relationships.
            <br /><br />
            I did feel that the novel baked in a so many references to the era that at some points not understanding them would greatly decrease my overall understanding of the characters' emotions, the overall plot, and setting. It was great that we covered a fair bit of the history in my class, but during my readings prior to class, it was somewhat easy to skim over these parts, which is a shame as they were some of the most richest and authentic parts of the narrative."
          </p>
          <p className="mt-6 text-right text-gray-700 italic">
            – An Opinion of One Singular Undergraduate Student
          </p>
        </div>
      </section>
      </div>
      {/* Teaching Tips */}
      <section className="py-16 px-6 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-3xl font-semibold mb-4 text-white">Disclaimers For Educators</h3>
          <h4 className="flex w-auto items-center mx-auto text-red-400 ml-[1.5vw] mb-4 text-2xl"><AlertCircle className="mr-2 w-11 h-11" /> Banned in Some States in certain districts! Please check your local laws before teaching </h4>
          <div className="grid md:grid-cols-3 gap-6">

            {/* Religious Conflict */}
            <div className="p-6 rounded-xl border-[0.1vw] border-pink-500/50 bg-gray-800/40 flex flex-col items-start">
              <div className="flex items-center mb-3 text-pink-400 mx-auto">
                <AlertTriangle className="h-5 w-5 mr-2" />
                <h4 className="text-xl font-bold">Illness and Grief</h4>
              </div>
              <p className="text-gray-300">The book contains vivid depictions of the AIDS crisis, including illness, and the emotional trauma of losing loved ones. These themes may be distressing for some students.</p>
            </div>

            {/* Homophobia & Bullying */}
            <div className="p-6 rounded-xl border-[0.1vw] border-purple-500/50 bg-gray-800/40 flex flex-col items-start">
              <div className="flex items-center mb-3 text-purple-400 mx-auto">
                <AlertTriangle className="h-5 w-5 mr-2" />
                <h4 className="text-xl font-bold">Homophobia & Bullying</h4>
              </div>
              <p className="text-gray-300">Contains instances of anti‑LGBTQ+ slurs, peer harassment, and familial rejection that may be upsetting for some readers.</p>
            </div>

            {/* Deception & Mature Themes */}
            <div className="p-6 rounded-xl border-[0.1vw] border-indigo-500/50 bg-gray-800/40 flex flex-col items-start">
              <div className="flex items-center mb-3 text-indigo-400 mx-auto">
                <AlertTriangle className="h-5 w-5 mr-2" />
                <h4 className="text-xl font-bold">Baked in History</h4>
              </div>
              <p className="text-gray-300">LALS requires somewhat deep historical knowledge of the time period to fully understand. While this enhances the authenticity of the experiences of the characters in the novel, it could be difficult for students to understand. <b>Read more below:</b></p>
            </div>

          </div>
        </div>
      </section>
      <section className="bg-gray-950/60">
        {/* ACT UP Section */}
        <div className="relative h-[60vh] flex items-center justify-center overflow-hidden rainbow-border">
        <img
          src="https://images.bookforum.com/uploads/upload.000/id24491/article00_1064x.jpg"
          alt="ACT UP Protest"
          className="absolute inset-0 w-full h-full object-cover opacity-20 scale-105"
        />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6 py-12" style={{background: 'rgba(0,0,0,0.7)', 'border-radius': '3em', 'padding': '3.5em'}}>
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 text-transparent bg-clip-text">
            ACT UP and the AIDS Crisis
          </h2>
          <p className="text-gray-300 text-xl leading-relaxed mb-6">
            Set in 1989, <em>Like a Love Story</em> features the life-or-death urgency of the AIDS epidemic. ACT UP (AIDS Coalition to Unleash Power) was an activist group that organized protests to demand medical treatment, awareness, and an end to government silence. Their influence echoes through the novel's characters, who risk everything to fight injustice and make queer suffering visible. Students may benefit from understanding the emotional toll and historic bravery of this generation.
          </p>

          {/* Resource Links */}
          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4 text-lg">
            <a
              href="https://actupny.org"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-lg bg-pink-400/20 text-pink-200 hover:bg-pink-400/40 transition duration-200 border border-pink-300"
            >
              🔗 ACT UP NY Official Archives
            </a>
            <a
              href="https://makinggayhistory.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-lg bg-purple-400/20 text-purple-200 hover:bg-purple-400/40 transition duration-200 border border-purple-300"
            >
              🎧 Making Gay History Podcast
            </a>
            <a
              href="https://www.youtube.com/watch?v=MrAzU79PBVM"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-lg bg-indigo-400/20 text-indigo-200 hover:bg-indigo-400/40 transition duration-200 border border-indigo-300"
            >
              📽️ How to Survive a Plague
            </a>
          </div>
        </div>
      </div>

        {/* Madonna Section */}
        <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <img
            src="https://m.media-amazon.com/images/I/71m4MYtuO5L._AC_UF894,1000_QL80_.jpg"
            alt="Madonna 1987"
            className="absolute inset-0 w-full h-full object-cover opacity-20 scale-105"
          />
          <div className="relative z-10 text-center max-w-4xl mx-auto px-6 py-12" style={{background: 'rgba(0,0,0,0.75)', 'border-radius': '3em', 'padding': '3.5em'}}>
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-500 text-transparent bg-clip-text">
              Madonna: A Queer Icon
            </h2>
            <p className="text-gray-300 text-xl leading-relaxed">
              In a world that often turned its back on queer youth, Madonna offered joy, rebellion, and visibility. In <em>Like a Love Story</em>, she represents both escape and empowerment; her fashion, music, and defiance inspire the characters to live unapologetically. Understanding Madonna’s cultural impact helps contextualize the hope and flamboyant expression that kept a generation of queer teens dreaming during a time of immense loss.
            </p>
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
    </div>
  );
}

export function GQAMApp() {
  return (
    <div className="min-h-screen bg-gray-900 text-white" style={{overflowX: "hidden"}}>
      {/* Header */}
      <header className="absolute top-5 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <a href="index.html"><BookOpen className="h-8 w-8 text-pink-400" /></a>
              <h1 className="text-2xl font-bold text-white">LGBTQ+ Stories</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="lgcs.html" id="un" className="text-gray-300 hover:text-pink-300 transition-colors after:bg-pink-300">LGCS</a>
              <a href="lals.html" id="un" className="text-gray-300 hover:text-pink-300 transition-colors after:bg-pink-300">LALS</a>
              <a href="gqam.html" id="un" className="text-gray-300 hover:text-pink-300 transition-colors after:bg-pink-300">GQAM</a>
            </nav>
            <button className="md:hidden">
              <Menu className="h-6 w-6 text-white" />
            </button>
          </div>
        </div>
      </header>
      {/* Hero */}
      <section className="relative h-[90vh] overflow-hidden flex items-center justify-center rainbow-border" style={{'border-bottom': '.3vh solid'}}>
        <img
          src="https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781637150726/gender-queer-a-memoir-deluxe-edition-9781637150726_hr.jpg"
          alt="GQAM"
          className="absolute inset-0 w-full object-cover opacity-10 scale-105"
        />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-6xl font-extrabold mb-4 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 text-transparent bg-clip-text">
            Gender Queer: A Memoir
          </h1>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
            The groundbreaking memoir that sparked national conversations on identity
          </p>
        </div>
      </section>

      {/* Book Summary */}
      <section className="py-20 bg-gray-800/60  px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-[7vw] items-center">
          <img 
            src="https://m.media-amazon.com/images/I/71OXVhRzuuL.jpg" 
            alt="Book Cover" 
            className="rounded-xl shadow-lg border border-pink-400/30"
          />
          <div className="w-[35vw]">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 text-transparent bg-clip-text">Book Overview</h2>
            <p className="text-gray-300 mb-6">
            <i>Gender Queer: A Memoir</i> by Maia Kobabe is a deeply personal and powerful coming-of-age graphic novel that chronicles the author's journey toward understanding and embracing eir nonbinary and asexual identity. With striking illustrations and candid reflections, Kobabe takes readers through childhood confusion, adolescent dysphoria, and the complex process of finding language—and acceptance—for experiences that defy societal norms. The memoir not only explores gender identity and sexuality but also touches on the importance of inclusive education, supportive communities, and the emotional weight of visibility. More than just a personal story, Gender Queer serves as an essential resource for readers of all ages seeking to better understand the intricacies of gender, making it one of the most banned and celebrated books in recent years.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Paintbrush className="text-cyan-400 mr-3" />
                Lends art and memoir to create a singular voice in queer literature
              </li>
              <li className="flex items-center">
                <BookMarked className="text-green-400 mr-3" />
                Recommended Reading Level: Grades 10–12+
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* Book Review Section */}
      <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@600&display=swap" rel="stylesheet"></link>
      <div className="bg-gray-800/60">
      <section
        className="relative w-full overflow-hidden py-24"
        style={{ transform: 'rotate(-1.5deg)' }} // slight slant
      >
        {/* Notebook background */}
        <div className="absolute inset-0 bg-yellow-200"></div>

        {/* Red margin line */}
        <div className="absolute top-0 bottom-0 left-16 w-[2px] bg-red-500"></div>

        {/* Ruled horizontal lines */}
        {[...Array(14)].map((_, i) => (
          <div
            key={i}
            className="absolute left-0 right-0 h-px bg-yellow-300/80"
            style={{ top: `${(i + 1) * 50}px` }}
          />
        ))}

        {/* Content */}
        <div className="relative max-w-4xl mx-auto px-10">
          <h3
            className="text-7xl font-bold text-gray-900 mb-6 font-[Caveat]"
            style={{ fontFamily: "'Caveat', cursive" }}
          >
            ✏️ My Book Review
          </h3>
          <p className="text-lg text-gray-900 leading-relaxed pl-12" style={{ fontFamily: "'Caveat', cursive", fontSize: '1.5em' }}>
            "The graphic novel format was a really refreshing mix up from the usual textually dense book format. Furthermore, art has a whole new dimension of meaning and expression that can't be captured through words alone. All this is to say that the graphic novel is wonderfully composed both artistically and thematically, comprising together to make a wonderful, authentic representation of the author's life.
            <br></br><br />
            There were certainly moments in the novel that made me feel pretty awkward, but intentionally so. The topics that are covered certainly aren't easy to talk about or express, but all in all, the whole novel is about the idea of expressing something that's hard to describe. I can certainly see this book being a great, transformative resource for any student reading it, both in developing their analytical skills of artistic and textual content, but also as a source of information about marginialized identities and self-expression." 
            </p>
          <p className="mt-6 text-right text-gray-700 italic">
            – An Opinion of One Singular Undergraduate Student
          </p>
        </div>
      </section>
      </div>
      {/* Teaching Tips */}
      <section className="py-16 px-6 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-3xl font-semibold mb-4 text-white">Disclaimers For Educators</h3>
          <h4 className="flex w-auto items-center mx-auto text-red-400 ml-[1.5vw] mb-4 text-2xl"><AlertCircle className="mr-2 w-11 h-11" /> Banned in&nbsp;<u>many</u>&nbsp;States in certain districts! Please check your local laws before teaching </h4>
          <div className="grid md:grid-cols-3 gap-6">

            {/* Religious Conflict */}
            <div className="p-6 rounded-xl border-[0.1vw] border-pink-500/50 bg-gray-800/40 flex flex-col items-start">
              <div className="flex items-center mb-3 text-pink-400 mx-auto">
                <AlertTriangle className="h-5 w-5 mr-2" />
                <h4 className="text-xl font-bold">Explicit Visual Content</h4>
              </div>
              <p className="text-gray-300">Includes illustrated depictions of nudity and sexual exploration. These visuals are integral to the memoir's exploration of identity but may be considered mature for some classroom settings.</p>
            </div>

            {/* Homophobia & Bullying */}
            <div className="p-6 rounded-xl border-[0.1vw] border-purple-500/50 bg-gray-800/40 flex flex-col items-start">
              <div className="flex items-center mb-3 text-purple-400 mx-auto">
                <AlertTriangle className="h-5 w-5 mr-2" />
                <h4 className="text-xl font-bold">Frequently Challenged</h4>
              </div>
              <p className="text-gray-300">This memoir has been the #1 most banned book in recent years, making it a powerful conversation starter — but also a text that may draw community or parental scrutiny.</p>
            </div>

            {/* Deception & Mature Themes */}
            <div className="p-6 rounded-xl border-[0.1vw] border-indigo-500/50 bg-gray-800/40 flex flex-col items-start">
              <div className="flex items-center mb-3 text-indigo-400 mx-auto">
                <AlertTriangle className="h-5 w-5 mr-2" />
                <h4 className="text-xl font-bold">Explicit Language</h4>
              </div>
              <p className="text-gray-300">Includes occasional strong language related to personal struggle, inner thoughts, and societal labels, meant to authentically reflect the author’s lived experience.</p>
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


  return ( 
    <div className="min-h-screen bg-gray-900 text-white">
    <header className="absolute top-5 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
            <a href="index.html"><BookOpen className="h-8 w-8 text-pink-400" /></a>
              <h1 className="text-2xl font-bold text-white">LGBTQ+ Stories</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="lgcs.html" id="un" className="text-gray-300 hover:text-pink-300 transition-colors after:bg-pink-300">LGCS</a>
              <a href="lals.html" id="un" className="text-gray-300 hover:text-pink-300 transition-colors after:bg-pink-300">LALS</a>
              <a href="gqam.html" id="un" className="text-gray-300 hover:text-pink-300 transition-colors after:bg-pink-300">GQAM</a>
            </nav>
            <button className="md:hidden">
              <Menu className="h-6 w-6 text-white" />
            </button>
          </div>
        </div>
      </header>
    <div className="max-w-5xl mx-auto px-6 py-24">
      <h2 className="text-5xl font-bold text-blue-400 mb-6">Gender Queer: A Memoir</h2>
      <p className="text-gray-300 text-xl mb-4 italic">by Maia Kobabe</p>
      <img 
        src="https://m.media-amazon.com/images/I/71OXVhRzuuL.jpg"
        alt="Book cover"
        className="w-64 rounded-xl mb-8"
      />
      <section className="mb-10">
        <h3 className="text-2xl font-semibold mb-2">Summary</h3>
        <p className="text-gray-300">
          A graphic novel memoir that explores gender identity, asexuality, and coming out in a deeply personal and visual format.
        </p>
      </section>
      <section className="mb-10">
        <h3 className="text-2xl font-semibold mb-2">Disclaimers</h3>
        <ul className="text-gray-400 list-disc list-inside">
          <li>Contains illustrations of bodies and discussions of sexuality</li>
          <li>May be considered controversial in some districts</li>
        </ul>
      </section>
      <section className="mb-10">
        <h3 className="text-2xl font-semibold mb-2">Classroom Notes</h3>
        <p className="text-gray-300">Strong visual storytelling for students who prefer graphic novels. Great intro to gender spectrum discussions.</p>
      </section>
    </div>
  </div>
  );
}


