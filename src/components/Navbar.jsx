import React from 'react';
import { LogIn, Sparkles } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-semibold text-slate-900">
            <span className="text-2xl leading-none">🧠</span>
            <span className="text-xl tracking-tight">Potion AI</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-700">
            <a href="#features" className="hover:text-slate-900">Features</a>
            <a href="#pricing" className="hover:text-slate-900">Pricing</a>
            <a href="#faq" className="hover:text-slate-900">FAQ</a>
            <a href="#login" className="hover:text-slate-900 flex items-center gap-1"><LogIn className="h-4 w-4"/> Login</a>
            <a href="/signup" className="inline-flex items-center gap-2 rounded-2xl bg-[#6B4EFF] px-4 py-2 text-white shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition">
              <Sparkles className="h-4 w-4"/>
              Try Free
            </a>
          </nav>
          <div className="md:hidden">
            <a href="/signup" className="inline-flex items-center gap-2 rounded-2xl bg-[#6B4EFF] px-4 py-2 text-white shadow-sm">
              <Sparkles className="h-4 w-4"/> Get Started
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
