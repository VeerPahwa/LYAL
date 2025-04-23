import React from 'react';
import { BookOpen, Menu, Heart, Users, BookMarked, AlertTriangle, Sparkles, AlertCircle, Paintbrush} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function GQAMApp() {
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