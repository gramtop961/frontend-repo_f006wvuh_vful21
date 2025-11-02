import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 pt-10 sm:pt-16 lg:pt-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900"
            >
              Brew Smarter Learning with <span className="bg-gradient-to-r from-[#6B4EFF] via-fuchsia-500 to-sky-500 bg-clip-text text-transparent">Potion AI</span>.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-5 text-lg text-slate-600"
            >
              Your all-in-one AI-powered study companion — create notes, generate quizzes, and collaborate in real time.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a href="/signup" className="rounded-2xl bg-[#6B4EFF] text-white px-6 py-3 text-sm font-medium shadow-lg shadow-[#6B4EFF]/30 hover:brightness-110 transition">
                Try for Free
              </a>
              <a href="/demo" className="rounded-2xl border border-slate-300 px-6 py-3 text-sm font-medium text-slate-800 hover:shadow-md transition">
                See Demo
              </a>
            </motion.div>
            <div className="mt-10 grid grid-cols-3 gap-4 text-sm text-slate-500">
              <div className="rounded-xl border border-slate-200 p-3">AI Notes in Seconds</div>
              <div className="rounded-xl border border-slate-200 p-3">Collaborative Study Rooms</div>
              <div className="rounded-xl border border-slate-200 p-3">Smart Quizzes</div>
            </div>
          </div>
          <div className="relative h-[420px] sm:h-[520px] lg:h-[560px] rounded-3xl">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-fuchsia-200/40 via-indigo-200/40 to-sky-200/40 pointer-events-none" />
            <Spline scene="https://prod.spline.design/lsFGaFqoD7t-tmSb/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
