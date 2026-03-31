"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) { setError("Enter email and password"); return; }
    setLoading(true); setError("");
    const { error: err } = await supabase.auth.signInWithPassword({ email, password });
    if (err) { setError(err.message); setLoading(false); return; }
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6" style={{ background: "linear-gradient(180deg, #f5f3ff 0%, #ede8f5 100%)" }}>
      <div className="w-full max-w-[420px] bg-white rounded-2xl p-8" style={{ boxShadow: "0 2px 24px rgba(0,0,0,0.08)" }}>
        <img src="/logo.svg" alt="SocialBridge" className="h-10 mx-auto mb-8" />
        <h2 className="text-2xl font-semibold text-center mb-1" style={{ color: "#1a1a2e" }}>Welcome back</h2>
        <p className="text-sm text-center mb-8" style={{ color: "#6b7280" }}>Sign in to access your download</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-xs font-medium mb-1.5" style={{ color: "#6b7280" }}>Email</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@example.com"
              className="w-full h-11 rounded-xl px-4 text-sm outline-none transition-all duration-150"
              style={{ backgroundColor: "#f4f4f5", border: "1px solid transparent" }}
              onFocus={e => { e.target.style.borderColor = "#7c3aed"; e.target.style.boxShadow = "0 0 0 3px rgba(124,58,237,0.1)"; }}
              onBlur={e => { e.target.style.borderColor = "transparent"; e.target.style.boxShadow = "none"; }} />
          </div>
          <div className="mb-4 relative">
            <label className="block text-xs font-medium mb-1.5" style={{ color: "#6b7280" }}>Password</label>
            <input type={showPass ? "text" : "password"} value={password} onChange={e => setPassword(e.target.value)} placeholder="••••••••"
              className="w-full h-11 rounded-xl px-4 pr-12 text-sm outline-none transition-all duration-150"
              style={{ backgroundColor: "#f4f4f5", border: "1px solid transparent" }}
              onFocus={e => { e.target.style.borderColor = "#7c3aed"; e.target.style.boxShadow = "0 0 0 3px rgba(124,58,237,0.1)"; }}
              onBlur={e => { e.target.style.borderColor = "transparent"; e.target.style.boxShadow = "none"; }} />
            <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-4 top-[34px] text-xs" style={{ color: "#a1a1aa" }}>{showPass ? "Hide" : "Show"}</button>
          </div>
          {error && <p className="text-xs text-center mb-4" style={{ color: "#ef4444" }}>{error}</p>}
          <button type="submit" disabled={loading}
            className="w-full h-11 rounded-xl text-white font-semibold text-sm transition-all duration-150 hover:opacity-90 disabled:opacity-60"
            style={{ backgroundColor: "#7c3aed" }}>
            {loading ? <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" /> : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}
