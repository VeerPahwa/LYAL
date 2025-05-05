import React from 'react';
import { BookOpen, Menu, Heart, Users, BookMarked, AlertTriangle, Sparkles, AlertCircle, Paintbrush} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function LALSApp() {
    return (
      <div className="min-h-screen bg-gray-900 text-white">
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

        {/* Teaching Activity*/}
        <div className="max-w-5xl mx-auto my-16 px-6">
          <div
            className="bg-white border-[1.5px] border-yellow-400 shadow-lg px-8 py-6 relative transform rotate-[-1.5deg]"
            style={{
              fontFamily: "'Caveat', cursive",
              backgroundImage:
                'repeating-linear-gradient(180deg, #fef9c3, #fef9c3 48px, #fef08a 48px, #fef08a 50px)',
            }}
          >
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Teaching Activity:&nbsp;&nbsp;Making Flashcards
            </h3>

            <p className="text-xl text-gray-900 leading-relaxed mb-4">
              Inspired by the moment Reza discovers Art’s flashcards, this activity asks students to create their own set of LGBTQ+ history flashcards to explore identity, resistance, and discovery.
              After a history listen on the ACT UP movement and AIDS crisis, challenge your students to make new notecards that would fill in the gaps of information missing in Art's.    
            </p>

            <div className="bg-white/80 border border-yellow-300 rounded-xl px-4 py-3 mb-4 shadow-sm">
              <p className="text-2xl text-gray-800 mb-2">✍️ <strong>Directions:</strong></p>
              <ul className="list-disc list-inside space-y-1 text-gray-800 text-xl">
                <li><strong>Front:</strong> LGBTQ+ term, movement, or reference</li>
                <li><strong>Back:</strong> Meaning, historical context, or emotional impact</li>
                <li><strong>Optional:</strong> Add visuals, symbols, or quotes</li>
              </ul>
            </div>

            <div className="bg-yellow-100 border-l-4 border-yellow-500 px-4 py-3 rounded-md shadow-sm text-gray-800 text-xl">
              <p><strong>Example:</strong></p>
              <p><strong>Front:</strong> “SILENCE = DEATH”</p>
              <p><strong>Back:</strong> A protest slogan from ACT UP calling attention to the government's inaction during the AIDS crisis.</p>
            </div>

            <p className="mt-6 text-right text-gray-700 italic text-lg">
              – What truths would your flashcards uncover?
            </p>
          </div>
        </div>
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