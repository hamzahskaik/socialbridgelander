"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function Dashboard() {
  const [user, setUser] = useState<{ email?: string } | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (!data.user) { router.push("/signin"); return; }
      setUser(data.user);
      setLoading(false);
    });
    const { data: listener } = supabase.auth.onAuthStateChange((event) => {
      if (event === "SIGNED_OUT") router.push("/signin");
    });
    return () => listener.subscription.unsubscribe();
  }, [router]);

  if (loading) return <div className="min-h-screen flex items-center justify-center" style={{ background: "#f5f3ff" }}><div className="w-6 h-6 border-2 border-purple-500 border-t-transparent rounded-full animate-spin" /></div>;

  return (
    <div className="min-h-screen px-6 py-16 flex flex-col items-center" style={{ background: "#f5f3ff" }}>
      <img src="/logo.svg" alt="SocialBridge" className="h-10 mb-8" />
      <p className="text-sm mb-2" style={{ color: "#6b7280" }}>Welcome, {user?.email}</p>
      <h1 className="text-3xl font-semibold mb-3" style={{ color: "#1a1a2e" }}>Download SocialBridge</h1>
      <p className="text-sm mb-10 max-w-md text-center" style={{ color: "#6b7280" }}>Get the desktop app to start managing your creators and their social media accounts.</p>

      <a href="#download-mac" className="flex items-center gap-3 px-10 py-4 rounded-xl font-semibold text-white transition-all duration-150 hover:opacity-90 mb-4" style={{ backgroundColor: "#7c3aed" }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
        Download for Mac
      </a>
      <p className="text-xs mb-12" style={{ color: "#a1a1aa" }}>v1.0.0 · Requires macOS 12+</p>

      <button onClick={() => supabase.auth.signOut()} className="text-xs transition-colors hover:underline" style={{ color: "#a1a1aa" }}>Sign Out</button>
    </div>
  );
}
