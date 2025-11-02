import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 items-start">
          <div>
            <div className="flex items-center gap-2 font-semibold text-slate-900">
              <span className="text-2xl">🧠</span>
              <span className="text-lg tracking-tight">Potion AI</span>
            </div>
            <p className="mt-3 text-sm text-slate-600 max-w-sm">Brew smarter learning with AI — notes, quizzes, and collaboration in one magical workspace.</p>
            <div className="mt-4 flex items-center gap-3">
              <a aria-label="LinkedIn" href="#" className="p-2 rounded-full border border-slate-200 hover:bg-slate-50"><Linkedin className="h-4 w-4"/></a>
              <a aria-label="GitHub" href="#" className="p-2 rounded-full border border-slate-200 hover:bg-slate-50"><Github className="h-4 w-4"/></a>
              <a aria-label="Twitter" href="#" className="p-2 rounded-full border border-slate-200 hover:bg-slate-50"><Twitter className="h-4 w-4"/></a>
            </div>
          </div>
          <div className="sm:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-6 text-sm text-slate-700">
            <div className="space-y-2">
              <a href="#" className="block hover:text-slate-900">About</a>
              <a href="#features" className="block hover:text-slate-900">Features</a>
              <a href="#pricing" className="block hover:text-slate-900">Pricing</a>
            </div>
            <div className="space-y-2">
              <a href="#" className="block hover:text-slate-900">Privacy Policy</a>
              <a href="#" className="block hover:text-slate-900">Terms</a>
              <a href="#" className="block hover:text-slate-900">Contact</a>
            </div>
            <div className="space-y-2">
              <a href="/signup" className="inline-block rounded-2xl bg-[#6B4EFF] text-white px-4 py-2 font-medium">Get Started</a>
              <a href="/demo" className="block hover:text-slate-900">See Demo</a>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-slate-200 text-xs text-slate-500 flex items-center justify-between">
          <p>© 2025 Potion AI — All rights reserved.</p>
          <p>Built with love for students and educators.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
