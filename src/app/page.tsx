"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Palette,
  Sparkles,
  Video,
  Layers,
  Zap,
  Shield,
  Cpu,
  ArrowRight,
  ChevronRight
} from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-primary/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg shadow-primary/20">
              <span className="font-black text-xl">M</span>
            </div>
            <span className="text-2xl font-bold tracking-tighter gradient-text">mikmedia</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-white/60 hover:text-white transition-colors">Features</a>
            <a href="#studio" className="text-sm font-medium text-white/60 hover:text-white transition-colors">Studio</a>
            <a href="#ai" className="text-sm font-medium text-white/60 hover:text-white transition-colors">AI Engine</a>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/studio" className="px-6 py-2.5 rounded-full bg-white text-black text-sm font-bold hover:bg-white/90 transition-all flex items-center gap-2 group">
              Open App <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-gradient-to-b from-primary/10 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-xs font-bold tracking-widest uppercase">The Next Generation of Design</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tight leading-[0.9]">
              Design <span className="gradient-text">Anything.</span> <br />
              Generate <span className="text-secondary italic">Everything.</span>
            </h1>
            <p className="text-xl text-white/40 mb-12 max-w-2xl mx-auto leading-relaxed">
              Mikmedia is the world's most advanced design suite. From high-end image sketching to neural video generation, create at the speed of thought.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/studio" className="w-full sm:w-auto px-10 py-5 bg-primary rounded-2xl font-bold text-lg shadow-[0_20px_40px_rgba(139,92,246,0.3)] hover:scale-105 transition-all">
                Get Started for Free
              </Link>
              <button className="w-full sm:w-auto px-10 py-5 bg-white/5 border border-white/10 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all">
                Watch Demo
              </button>
            </div>
          </motion.div>

          {/* App Preview */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-24 relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-secondary/30 blur-2xl rounded-[40px] opacity-20" />
            <div className="relative bg-[#0A0A0A] border border-white/10 rounded-[32px] p-4 shadow-2xl">
              <div className="aspect-[16/10] bg-[#111] rounded-[20px] overflow-hidden border border-white/5 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
                <img
                  src="https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop"
                  alt="App Interface"
                  className="w-full h-full object-cover opacity-50 grayscale"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="p-8 rounded-full bg-white/10 backdrop-blur-2xl border border-white/20">
                     <Play className="w-12 h-12 fill-white" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={Palette}
              title="Pro Sketch Engine"
              description="Hyper-responsive canvas with support for multi-format exports and professional filters."
            />
            <FeatureCard
              icon={Cpu}
              title="Neural Generation"
              description="Transform text to photorealistic images and cinematic video clips instantly."
            />
            <FeatureCard
              icon={Shield}
              title="Enterprise Assets"
              description="Secure, cloud-based asset management for your entire creative library."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready to define the future?</h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
            Join 100,000+ elite creators using mikmedia to disrupt the design industry.
          </p>
          <Link href="/studio" className="inline-flex items-center gap-3 px-12 py-6 bg-white text-black rounded-2xl font-black text-xl hover:scale-105 transition-transform">
            Launch mikmedia <ChevronRight className="w-6 h-6" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5 bg-black">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <span className="font-black text-sm">M</span>
            </div>
            <span className="text-xl font-bold tracking-tighter">mikmedia</span>
          </div>
          <div className="flex gap-8 text-white/40 text-sm font-medium">
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">Discord</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
          </div>
          <p className="text-white/20 text-sm">© 2024 mikmedia inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon: Icon, title, description }: any) {
  return (
    <div className="p-8 rounded-[32px] bg-white/5 border border-white/10 hover:border-primary/50 transition-all group">
      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        <Icon className="w-7 h-7 text-primary" />
      </div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-white/40 leading-relaxed">{description}</p>
    </div>
  );
}

function Play({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 3L19 12L5 21V3Z" fill="currentColor" />
    </svg>
  );
}
