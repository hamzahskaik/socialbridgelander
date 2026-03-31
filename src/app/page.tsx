"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";

const features = [
  { title: "Multi-Creator Management", desc: "Organize all your creators in one sidebar. Switch between them instantly.", icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="1.5"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg> },
  { title: "Every Platform", desc: "Instagram, TikTok, X, Reddit, Discord — each with its own isolated login session.", icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="1.5"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c-2 3-2 9 0 12s2 9 0 12"/></svg> },
  { title: "Split View", desc: "View all platforms at once in a grid, or focus on one at a time.", icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="12" y1="3" x2="12" y2="21"/></svg> },
  { title: "Antidetect Protection", desc: "Unique browser fingerprints and proxy support per creator. Stay undetected.", icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="1.5"><path d="M12 2l7 4v5c0 5-3 9-7 11-4-2-7-6-7-11V6l7-4z"/><path d="M9 12l2 2 4-4"/></svg> },
];

const steps = [
  { num: "1", title: "Add Creators", desc: "Create a profile for each person or brand you manage." },
  { num: "2", title: "Connect Platforms", desc: "Add Instagram, TikTok, X, Reddit, or Discord. Each gets its own session." },
  { num: "3", title: "Manage Everything", desc: "Browse, post, schedule, and take notes — all from one app." },
];

export default function Home() {
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add("animate-fade-in-up"); });
    }, { threshold: 0.1 });
    cardsRef.current?.querySelectorAll(".feature-card").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <section className="min-h-screen flex flex-col items-center justify-center px-6 relative" style={{ background: "linear-gradient(180deg, #f5f3ff 0%, #ede8f5 100%)" }}>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(#7c3aed 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <div className="relative z-10 text-center max-w-2xl">
          <img src="/logo.svg" alt="SocialBridge" className="h-12 mx-auto mb-6 animate-float" />
          <h1 className="text-5xl font-bold tracking-tight mb-4" style={{ color: "#1a1a2e" }}>SocialBridge</h1>
          <p className="text-xl mb-2" style={{ color: "#6b7280" }}>Manage all your creators. Every platform. One app.</p>
          <p className="text-sm mb-10" style={{ color: "#a1a1aa" }}>A product by Ember Ventures LLC</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://github.com/hamzahskaik/socialbridgelander/releases/download/v1.1.0/SocialBridge-1.1.0-arm64.dmg" className="px-8 py-3 rounded-xl font-semibold text-white transition-all duration-150 hover:opacity-90 flex items-center gap-2" style={{ backgroundColor: "#7c3aed" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              Download for Mac
            </a>
            <a href="#features" className="px-8 py-3 rounded-xl font-semibold border-2 transition-all duration-150 hover:bg-purple-50" style={{ color: "#7c3aed", borderColor: "#7c3aed" }}>Learn More</a>
          </div>
        </div>
      </section>

      <section id="features" className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16" style={{ color: "#1a1a2e" }}>Everything in one place</h2>
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className={`feature-card bg-white rounded-2xl p-8 opacity-0`} style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.06)", animationDelay: `${i * 0.1}s` }}>
              <div className="mb-5">{f.icon}</div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: "#1a1a2e" }}>{f.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 px-6" style={{ background: "#faf9ff" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16" style={{ color: "#1a1a2e" }}>How it works</h2>
          <div className="flex flex-col md:flex-row gap-8 md:gap-4 items-start">
            {steps.map((s, i) => (
              <div key={i} className="flex-1 text-center relative">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4" style={{ backgroundColor: "#7c3aed" }}>{s.num}</div>
                {i < 2 && <div className="hidden md:block absolute top-6 left-[calc(50%+28px)] w-[calc(100%-56px)] border-t-2 border-dashed" style={{ borderColor: "#d1d5db" }} />}
                <h3 className="text-lg font-semibold mb-2" style={{ color: "#1a1a2e" }}>{s.title}</h3>
                <p className="text-sm" style={{ color: "#6b7280" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-10 text-center text-sm" style={{ color: "#a1a1aa" }}>
        <p>&copy; 2026 Ember Ventures LLC. All rights reserved.</p>
        <div className="flex gap-6 justify-center mt-3">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Service</a>
        </div>
      </footer>
    </div>
  );
}
