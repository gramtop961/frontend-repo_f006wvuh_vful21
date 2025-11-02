import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Users, Puzzle, Brain, BookOpen, Image, Video, ShoppingBag, CheckCircle2 } from 'lucide-react';

const SectionHeading = ({ eyebrow, title, subtitle }) => (
  <div className="text-center max-w-3xl mx-auto">
    {eyebrow && <p className="text-[#6B4EFF] font-semibold">{eyebrow}</p>}
    <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-slate-900">{title}</h2>
    {subtitle && <p className="mt-3 text-slate-600">{subtitle}</p>}
  </div>
);

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const Sections = () => {
  return (
    <>
      {/* Why Potion AI */}
      <section className="py-16 sm:py-24 bg-white" id="why">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Learning Should Feel Magical — Not Stressful."
            subtitle="Potion AI turns scattered notes and topics into clear explanations, flashcards, and quizzes — organized automatically and shared effortlessly."
          />
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
            transition={{ staggerChildren: 0.08 }}
            className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4"
          >
            {[{icon: Zap, text: 'AI Notes in Seconds'}, {icon: Users, text: 'Collaborative Study Rooms'}, {icon: Puzzle, text: 'Smart Quizzes for Self & Group Learning'}].map((item, i) => (
              <motion.div key={i} variants={cardVariants} className="rounded-2xl border border-slate-200 p-5 shadow-sm bg-white">
                <div className="flex items-center gap-3">
                  <item.icon className="h-5 w-5 text-[#6B4EFF]"/>
                  <p className="font-medium text-slate-800">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 sm:py-24 bg-slate-50" id="features">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Everything You Need to Learn, Create & Grow."
          />
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
            transition={{ staggerChildren: 0.06 }}
            className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              { icon: Brain, title: 'AI Note Generator', desc: 'Turn topics or uploads into summaries & flashcards.' },
              { icon: BookOpen, title: 'Custom Book Builder', desc: 'Combine notes into AI-generated study books.' },
              { icon: Puzzle, title: 'Quiz Generator', desc: 'Personalized quizzes for individual or group study.' },
              { icon: Video, title: 'AI-Assisted Study Calls', desc: 'Voice / video sessions with AI support.' },
              { icon: Image, title: 'Diagram Explainer', desc: 'Upload images for AI-based explanations.' },
              { icon: ShoppingBag, title: 'Marketplace', desc: 'Sell or share AI-generated books and notes.' },
            ].map((f, i) => (
              <motion.div key={i} variants={cardVariants} className="rounded-2xl bg-white p-6 border border-slate-200 shadow-sm">
                <f.icon className="h-6 w-6 text-[#6B4EFF]"/>
                <h3 className="mt-4 font-semibold text-slate-900">{f.title}</h3>
                <p className="mt-1.5 text-sm text-slate-600">{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 sm:py-24 bg-white" id="how">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Just 3 Steps to Smarter Studying."
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { step: 1, title: 'Upload or type your topic.' },
              { step: 2, title: 'Potion AI creates notes and quizzes.' },
              { step: 3, title: 'Learn solo or collaborate with friends.' },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#6B4EFF] text-white text-sm font-semibold">{s.step}</div>
                <p className="mt-3 text-slate-800">{s.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 sm:py-24 bg-slate-50" id="pricing">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Simple, Transparent & Student-Friendly Pricing." />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { name: 'Free', badge: '🪄 Free Plan', price: '₹0 / month', features: ['10 AI generations/day'] },
              { name: 'Pro', badge: '⚡ Pro Plan', price: '₹299 / month', features: ['Unlimited quizzes', 'GPT-4 access'] },
              { name: 'Pro+', badge: '🔮 Pro+ Plan', price: '₹599 / month', features: ['Video sessions', 'Marketplace access'] },
            ].map((tier, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`rounded-2xl border p-6 shadow-sm bg-white ${i===1 ? 'border-[#6B4EFF] ring-2 ring-[#6B4EFF]/20' : 'border-slate-200'}`}
              >
                <p className="text-sm">{tier.badge}</p>
                <p className="mt-2 text-3xl font-bold text-slate-900">{tier.price}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  {tier.features.map((f, idx) => (
                    <li key={idx} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[#6B4EFF]"/> {f}</li>
                  ))}
                </ul>
                <a href="/signup" className="mt-6 inline-block w-full text-center rounded-2xl bg-[#6B4EFF] text-white px-4 py-2 font-medium hover:brightness-110 transition">Start Free →</a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-24 bg-white" id="testimonials">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Loved by Students and Educators Alike." />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { quote: 'Potion AI made studying for my exams a breeze.', name: 'Riya S.' },
              { quote: 'Group study with AI is so engaging — it feels like a virtual classroom.', name: 'Aaron T.' },
              { quote: 'I create quizzes for my students in seconds.', name: 'Shaurya P.' },
            ].map((t, i) => (
              <motion.blockquote
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl border border-slate-200 p-6 bg-white shadow-sm"
              >
                <p className="text-slate-800">“{t.quote}”</p>
                <div className="mt-4 flex items-center gap-3">
                  <img src={`https://api.dicebear.com/7.x/thumbs/svg?seed=${i+1}`} alt={t.name} className="h-8 w-8 rounded-full" />
                  <span className="text-sm text-slate-600">— {t.name}</span>
                </div>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-24 bg-slate-50" id="faq">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Got Questions? We’ve Got Answers." />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[{
              q: 'Is my data safe?',
              a: 'Yes, end-to-end encryption and secure cloud storage.'
            },{
              q: 'Can I study with friends?',
              a: 'Yes, Potion AI supports realtime collaboration and video calls.'
            },{
              q: 'Do I need technical skills?',
              a: 'No, Potion AI is built for students of all levels.'
            },{
              q: 'Can I try it for free?',
              a: 'Yes, start with the Free plan and upgrade anytime.'
            }].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h4 className="font-semibold text-slate-900">{item.q}</h4>
                <p className="mt-2 text-slate-600 text-sm">{item.a}</p>
              </motion.div>
            ))}
          </div>

          {/* Final CTA */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">Ready to Brew Your Learning Magic?</h3>
            <p className="mt-3 text-slate-600 max-w-2xl mx-auto">Join thousands of students transforming how they study with Potion AI.</p>
            <div className="mt-6 flex items-center justify-center gap-4">
              <a href="/signup" className="rounded-2xl bg-[#6B4EFF] text-white px-6 py-3 text-sm font-medium shadow-lg shadow-[#6B4EFF]/30 hover:brightness-110 transition">Get Started for Free</a>
              <a href="/demo" className="rounded-2xl border border-slate-300 px-6 py-3 text-sm font-medium text-slate-800 hover:shadow-md transition">Watch Demo</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sections;
