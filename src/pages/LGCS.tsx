import React from 'react';
import { BookOpen, Menu, Heart, Users, BookMarked, AlertTriangle, Sparkles, AlertCircle, Paintbrush} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function LGCSApp() {
    return (
      <div className="min-h-screen bg-gray-900 text-white" style={{overflowX: "hidden"}}>
        {/* Header */}
        <header className="absolute top-5 left-0 right-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <Link to="index.html"><BookOpen className="h-8 w-8 text-pink-400" /></Link>
                <h1 className="text-2xl font-bold text-white">LGBTQ+ Stories</h1>
              </div>
              <nav className="hidden md:flex space-x-8">
                <Link to="/LYAL/lgcs" id="un" className="text-gray-300 hover:text-pink-300 transition-colors after:bg-pink-300">LGCS</Link>
                <Link to="/LYAL/lals" id="un" className="text-gray-300 hover:text-pink-300 transition-colors after:bg-pink-300">LALS</Link>
                <Link to="/LYAL/gqam" id="un" className="text-gray-300 hover:text-pink-300 transition-colors after:bg-pink-300">GQAM</Link>
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