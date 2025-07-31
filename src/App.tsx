import React, { useState } from 'react';
import { Mail, Github, Twitter, ArrowRight, BookOpen, User, ChevronDown, ChevronUp } from 'lucide-react';

interface Essay {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  content: string;
  featured: boolean;
}

const essays: Essay[] = [
  {
    id: 'digital-minimalism',
    title: 'Digital Minimalism in the Age of Infinite Scroll',
    excerpt: 'Exploring how we can reclaim our attention and find meaningful engagement with technology in a world designed to distract us.',
    date: 'December 15, 2024',
    readTime: '8 min read',
    content: `In our hyperconnected world, the average person checks their phone 96 times per day. We've become slaves to the notification, servants to the scroll, prisoners of our own digital devices. But what if there was another way?

Digital minimalism isn't about abandoning technology entirely—it's about being intentional with how we engage with it. It's about choosing tools that serve our values and ruthlessly eliminating those that don't.

The philosophy is simple: clutter is costly. Not just in terms of physical space, but in terms of attention, time, and mental energy. Every app on your phone, every subscription service, every digital commitment is competing for your most precious resource: your consciousness.

I've spent the last year experimenting with digital minimalism, and the results have been transformative. By carefully curating my digital environment, I've found more time for deep work, meaningful relationships, and the kind of sustained thinking that leads to genuine insight.

The key is to start small. Begin by conducting a digital declutter—remove apps that don't add clear value to your life. Then, slowly reintroduce only those tools that pass a strict test: do they support something you deeply value?

In a world of infinite options, the power to choose nothing is perhaps the most valuable skill we can develop.`,
    featured: true
  },
  {
    id: 'art-of-questioning',
    title: 'The Art of Asking Better Questions',
    excerpt: 'Why the quality of our questions determines the quality of our thinking, and how to develop this underappreciated skill.',
    date: 'November 28, 2024',
    readTime: '6 min read',
    content: `Questions are the engines of intellect, the foundation of all learning, and the root of all progress. Yet we rarely spend time thinking about how to ask better questions.

The right question can unlock insights that years of statements cannot. It can challenge assumptions, reveal hidden connections, and open up entirely new avenues of thought. The wrong question, meanwhile, can lead us down rabbit holes and waste precious mental energy.

So what makes a question good? First, it should be specific enough to be actionable but broad enough to be interesting. "How can I be happier?" is too vague. "What specific daily practice could I implement that would most improve my sense of well-being?" is better.

Second, good questions challenge our existing frameworks. Instead of asking "How can I get better at X?", try "What assumptions am I making about X that might be wrong?" This shifts us from optimization mode to discovery mode.

Third, the best questions often have a temporal element. "What would this look like if it were easy?" "What will matter most in ten years?" "What would I do if I knew I couldn't fail?" These questions help us break free from current constraints and think more creatively.

The meta-skill here is learning to question your questions. Before diving into solving a problem, spend time ensuring you're solving the right problem. As Einstein allegedly said, "If I had an hour to solve a problem, I'd spend 55 minutes defining it and 5 minutes solving it."

In a world overflowing with answers, the scarce resource is good questions. Learn to ask them, and you'll find that the world becomes infinitely more interesting.`,
    featured: true
  },
  {
    id: 'philosophy-of-simplicity',
    title: 'The Philosophy of Simplicity',
    excerpt: 'An exploration of how embracing simplicity in design, thought, and life can lead to profound clarity and effectiveness.',
    date: 'October 12, 2024',
    readTime: '7 min read',
    content: `Simplicity is the ultimate sophistication. This principle, attributed to Leonardo da Vinci, captures something essential about how we should approach both design and life.

But simplicity is often misunderstood. It's not about having less for the sake of having less—it's about having exactly what you need, nothing more, nothing less. It's about clarity of purpose and elegance of execution.

In design, simplicity means removing everything that doesn't serve the core function. It means asking not "what can we add?" but "what can we remove?" Every element should earn its place through utility or beauty, preferably both.

In thought, simplicity means cutting through complexity to find the essential truth. It means being able to explain complex ideas in simple terms—not because you're dumbing them down, but because you understand them so deeply that their essence becomes clear.

In life, simplicity means aligning your actions with your values and removing the friction that prevents you from living authentically. It means saying no to good opportunities so you can say yes to great ones.

The path to simplicity is often complex. It requires discipline, taste, and the courage to make difficult choices. But the reward—clarity, focus, and a sense of rightness—is worth the effort.

As Antoine de Saint-Exupéry wrote, "It seems that perfection is attained not when there is nothing more to add, but when there is nothing more to remove." In a world that constantly pressures us to add more, the radical act is to subtract.`,
    featured: false
  }
];

function App() {
  const [expandedEssay, setExpandedEssay] = useState<string | null>(null);

  const toggleEssay = (essayId: string) => {
    setExpandedEssay(expandedEssay === essayId ? null : essayId);
  };

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-sm border-b border-stone-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-stone-800">Walker Gordillo</h1>
            <div className="hidden md:flex items-center gap-8">
              <a href="#essays" className="text-stone-600 hover:text-emerald-700 transition-colors duration-200 font-medium">Essays</a>
              <a href="#about" className="text-stone-600 hover:text-emerald-700 transition-colors duration-200 font-medium">About</a>
              <a href="#contact" className="text-stone-600 hover:text-emerald-700 transition-colors duration-200 font-medium">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-stone-900 mb-8 leading-tight">
              Essays on Technology,<br />
              <span className="text-emerald-700">Philosophy & Life</span>
            </h2>
            <p className="text-xl text-stone-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Exploring ideas at the intersection of digital culture, human nature, and meaningful living. 
              Thoughts on how we can live more intentionally in our modern world.
            </p>
            <a 
              href="#essays"
              className="inline-flex items-center gap-3 bg-emerald-700 text-white px-10 py-4 rounded-xl hover:bg-emerald-800 transition-all duration-300 font-semibold text-lg group shadow-lg hover:shadow-xl"
            >
              Explore My Writing
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </div>
        </div>
      </section>

      {/* Essays Section */}
      <section id="essays" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-stone-900 mb-6">Recent Essays</h3>
          </div>

          <div className="space-y-6">
            {essays.map((essay) => (
              <article 
                key={essay.id}
                className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden transition-all duration-300 hover:shadow-lg"
              >
                {/* Essay Header */}
                <div 
                  onClick={() => toggleEssay(essay.id)}
                  className="p-8 cursor-pointer hover:bg-stone-50 transition-colors duration-200"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="bg-emerald-100 p-2 rounded-lg">
                          <BookOpen className="text-emerald-700" size={16} />
                        </div>
                        <div className="flex items-center gap-3 text-stone-500 text-sm font-medium">
                          <span>{essay.date}</span>
                          <span className="w-1 h-1 bg-stone-400 rounded-full"></span>
                          <span>{essay.readTime}</span>
                        </div>
                      </div>
                      <h4 className="text-2xl font-bold text-stone-900 mb-4 hover:text-emerald-700 transition-colors duration-200 leading-tight">
                        {essay.title}
                      </h4>
                      <p className="text-stone-600 leading-relaxed text-lg mb-4">
                        {essay.excerpt}
                      </p>
                      <div className="flex items-center text-emerald-700 font-semibold">
                        {expandedEssay === essay.id ? 'Collapse' : 'Read Essay'}
                      </div>
                    </div>
                    <div className="ml-6 flex-shrink-0">
                      {expandedEssay === essay.id ? (
                        <ChevronUp className="text-stone-400" size={24} />
                      ) : (
                        <ChevronDown className="text-stone-400" size={24} />
                      )}
                    </div>
                  </div>
                </div>

                {/* Expanded Essay Content */}
                {expandedEssay === essay.id && (
                  <div className="px-8 pb-8 border-t border-stone-100">
                    <div className="pt-8">
                      <div className="prose prose-lg prose-stone max-w-none">
                        {essay.content.split('\n\n').map((paragraph, index) => (
                          <p key={index} className="mb-6 text-stone-700 leading-relaxed text-lg">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                      <div className="mt-12 pt-6 border-t border-stone-200">
                        <div className="flex items-center justify-between">
                          <button
                            onClick={() => toggleEssay(essay.id)}
                            className="text-emerald-700 hover:text-emerald-800 font-semibold flex items-center gap-2 transition-colors duration-200"
                          >
                            <ChevronUp size={18} />
                            Collapse Essay
                          </button>
                          <div className="flex items-center gap-4">
                            <span className="text-stone-500 text-sm font-medium">Share:</span>
                            <button className="text-stone-400 hover:text-emerald-600 transition-colors duration-200">
                              <Twitter size={20} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="bg-emerald-100 p-4 rounded-2xl w-fit mb-8">
                <User className="text-emerald-700" size={28} />
              </div>
              <h3 className="text-4xl font-bold text-stone-900 mb-8">About Walker</h3>
              <div className="space-y-6 text-lg text-stone-600 leading-relaxed">
                <p>
                  I'm a writer and thinker fascinated by the intersection of technology, philosophy, and human flourishing. 
                  My essays explore how we can live more intentionally in our digital age.
                </p>
                <p>
                  Through my writing, I aim to bridge the gap between ancient wisdom and modern challenges, 
                  offering perspectives on how we might navigate our increasingly complex world with greater clarity and purpose.
                </p>
                <p>
                  When I'm not writing, you can find me reading philosophy, experimenting with minimalist living, 
                  or having deep conversations about the future of human consciousness.
                </p>
              </div>
              <div className="flex gap-4 mt-8">
                <button className="text-stone-400 hover:text-emerald-600 transition-colors duration-200 p-2">
                  <Github size={24} />
                </button>
                <button className="text-stone-400 hover:text-emerald-600 transition-colors duration-200 p-2">
                  <Twitter size={24} />
                </button>
                <button className="text-stone-400 hover:text-emerald-600 transition-colors duration-200 p-2">
                  <Mail size={24} />
                </button>
              </div>
            </div>
            <div className="bg-gradient-to-br from-emerald-50 to-stone-50 rounded-3xl p-10">
              <blockquote className="text-stone-700 text-xl italic leading-relaxed mb-6">
                "The unexamined life is not worth living, but the over-examined life is not worth living either. 
                The key is finding the right balance between reflection and action."
              </blockquote>
              <cite className="block text-stone-500 font-medium">— Personal philosophy</cite>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-stone-900">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold text-white mb-8">Let's Connect</h3>
          <p className="text-stone-300 mb-12 text-xl leading-relaxed max-w-2xl mx-auto">
            Have thoughts on any of my essays? Want to discuss ideas or collaborate? I'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="inline-flex items-center gap-3 bg-emerald-600 text-white px-8 py-4 rounded-xl hover:bg-emerald-700 transition-colors duration-200 font-semibold text-lg shadow-lg">
              <Mail size={20} />
              Send Me an Email
            </button>
            <button className="inline-flex items-center gap-3 border-2 border-stone-600 text-stone-300 px-8 py-4 rounded-xl hover:border-emerald-600 hover:text-white transition-all duration-200 font-semibold text-lg">
              <Twitter size={20} />
              Follow on Twitter
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-950 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <p className="text-stone-400 mb-6 md:mb-0 font-medium">
            © 2024 Walker Gordillo. All thoughts my own.
          </p>
          <div className="flex items-center gap-6">
            <button className="text-stone-500 hover:text-emerald-400 transition-colors duration-200 p-2">
              <Github size={20} />
            </button>
            <button className="text-stone-500 hover:text-emerald-400 transition-colors duration-200 p-2">
              <Twitter size={20} />
            </button>
            <button className="text-stone-500 hover:text-emerald-400 transition-colors duration-200 p-2">
              <Mail size={20} />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;