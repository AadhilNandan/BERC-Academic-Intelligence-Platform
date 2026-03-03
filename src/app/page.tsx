"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Shield, Globe, Wifi, Eye, EyeOff, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type Role = "teacher" | "analyst" | "admin";

const ROLES: { id: Role; label: string; description: string; format: string; placeholder: string }[] = [
  { id: "teacher",  label: "Teacher / Mentor",    description: "Classroom educators and academic mentors",      format: "BERC-TCH-XXXX", placeholder: "e.g. BERC-TCH-2024-0847" },
  { id: "analyst",  label: "Research Analyst",     description: "BERC research and policy team members",         format: "BERC-RSH-XXXX", placeholder: "e.g. BERC-RSH-2024-0112" },
  { id: "admin",    label: "Administrator",         description: "System and institution-level administration",   format: "BERC-ADM-XXXX", placeholder: "e.g. BERC-ADM-2024-0009" },
];

const FORMAT_PATTERNS: Record<Role, RegExp> = {
  teacher: /^BERC-TCH-\d{4}-\d{4}$/,
  analyst: /^BERC-RSH-\d{4}-\d{4}$/,
  admin:   /^BERC-ADM-\d{4}-\d{4}$/,
};

export default function LoginPage() {
  const router = useRouter();
  const [role, setRole] = useState<Role>("admin");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [bercId, setBercId] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [touched, setTouched] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedRole = ROLES.find((r) => r.id === role)!;
  const isValidId = !bercId || FORMAT_PATTERNS[role].test(bercId);
  const showError = touched && bercId.length > 0 && !isValidId;

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/dashboard/teacher");
  };

  return (
    <div className="flex min-h-screen">
      {/* ── Left branding panel ── */}
      <div className="flex-1 hidden lg:flex flex-col bg-[#1e2370] relative border-r border-indigo-900/40">
        <div className="p-12 flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center gap-4 mb-16">
            <div className="h-12 w-12 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-xl shadow-inner border border-blue-500/40">B</div>
            <div>
              <h2 className="text-white font-semibold tracking-wide text-sm">BERC</h2>
              <p className="text-indigo-300 text-xs font-medium">© 2019-2024 Brahmand Educational Research Council</p>
            </div>
          </div>

          {/* Tagline */}
          <div className="max-w-xl">
            <h1 className="text-4xl font-bold text-white mb-4 leading-tight tracking-tight">
              Brahmand Educational Research<br />Council
            </h1>
            <p className="text-indigo-200 text-lg mb-16 font-medium">
              Beyond Grades: Empowering the Natural Genius of Every Student.
            </p>
          </div>

          {/* Feature cards */}
          <div className="space-y-4 max-w-lg">
            {[
              { title: "Research-Driven Evaluation", sub: "Academic intelligence beyond numerical scores" },
              { title: "Cognitive Diagnosis System", sub: "Comprehensive student developmental analysis" },
              { title: "Institutional Research Network", sub: "Connected across 24 districts, 400+ schools" },
            ].map((f) => (
              <div key={f.title} className="bg-[#242f88]/50 p-4 rounded-xl border border-indigo-400/10">
                <h3 className="text-white font-semibold flex items-center gap-2 mb-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-400"></span>
                  {f.title}
                </h3>
                <p className="text-indigo-300 text-sm ml-3.5">{f.sub}</p>
              </div>
            ))}
          </div>

          {/* Footer */}
          <p> </p>
          <div className="mt-auto text-indigo-400/50 text-xs flex items-center gap-2">
            <Shield className="h-3.5 w-3.5" />
            Secure Academic Infrastructure v3.2 • Created by Aadhil Nandan <br />© 2019-2024 Brahmand Educational Research Council
          </div>
        </div>
      </div>

      {/* ── Right login panel — DARK ── */}
      <div className="flex-1 flex flex-col justify-center px-4 py-12 sm:px-6 lg:px-20 xl:px-28 bg-[#111827]">
        <div className="mx-auto w-full max-w-md">
          <h2 className="text-2xl font-bold tracking-tight text-white mb-1">Institutional Sign In</h2>
          <p className="text-sm text-slate-400 mb-8">
            Access the BERC <span className="text-blue-400 border-b border-blue-400/40">Academic Intelligence Platform</span>
          </p>

          {/* Toggles */}
          <div className="flex gap-3 mb-8">
            <button className="flex items-center gap-2 text-sm font-medium text-slate-300 border border-slate-600 bg-slate-800 rounded-lg px-3 py-1.5 hover:bg-slate-700 transition-colors">
              <Globe className="h-4 w-4" /> English
            </button>
            <button className="flex items-center gap-2 text-sm font-medium text-blue-300 border border-blue-600/60 bg-blue-900/30 rounded-lg px-3 py-1.5 hover:bg-blue-900/50 transition-colors">
              <Wifi className="h-4 w-4" /> Low Bandwidth Mode
            </button>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">

            {/* ── Role Dropdown ── */}
            <div>
              <label className="block text-sm font-semibold text-slate-200 mb-1.5">Access Role</label>
              <div ref={dropdownRef} className="relative">
                <button
                  type="button"
                  onClick={() => setDropdownOpen((v) => !v)}
                  className={cn(
                    "w-full flex items-center justify-between px-4 py-3 rounded-lg border text-left transition-colors",
                    "bg-[#1e293b] border-slate-600 text-white hover:border-slate-500",
                    dropdownOpen && "border-blue-500 ring-1 ring-blue-500"
                  )}
                >
                  <div>
                    <div className="text-sm font-semibold text-white">{selectedRole.label}</div>
                    <div className="text-xs text-slate-400 mt-0.5">{selectedRole.description}</div>
                  </div>
                  <ChevronDown className={cn("h-4 w-4 text-slate-400 transition-transform shrink-0 ml-3", dropdownOpen && "rotate-180")} />
                </button>

                {dropdownOpen && (
                  <div className="absolute z-20 mt-1 w-full bg-[#1e293b] border border-slate-600 rounded-lg shadow-2xl overflow-hidden">
                    {ROLES.map((r) => (
                      <button
                        key={r.id}
                        type="button"
                        onClick={() => { setRole(r.id); setDropdownOpen(false); setBercId(""); setTouched(false); }}
                        className={cn(
                          "w-full flex items-start gap-3 px-4 py-3 text-left transition-colors hover:bg-[#263244]",
                          r.id === role && "bg-[#263244]"
                        )}
                      >
                        <span className={cn(
                          "mt-1 h-3.5 w-3.5 rounded-full border-2 shrink-0 flex items-center justify-center",
                          r.id === role ? "border-blue-500" : "border-slate-500"
                        )}>
                          {r.id === role && <span className="h-1.5 w-1.5 rounded-full bg-blue-500"></span>}
                        </span>
                        <div>
                          <div className="text-sm font-semibold text-white">{r.label}</div>
                          <div className="text-xs text-slate-400 mt-0.5">{r.description}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* ── BERC ID ── */}
            <div>
              <label htmlFor="bercid" className="block text-sm font-semibold text-slate-200 mb-1.5">BERC ID</label>
              <input
                id="bercid"
                type="text"
                value={bercId}
                onChange={(e) => setBercId(e.target.value.toUpperCase())}
                onBlur={() => setTouched(true)}
                placeholder={selectedRole.placeholder}
                className={cn(
                  "block w-full rounded-lg py-3 px-4 bg-[#1e293b] text-white font-mono text-sm placeholder:text-slate-500 placeholder:font-sans focus:outline-none ring-1 ring-inset transition-all",
                  showError
                    ? "ring-red-500 focus:ring-red-500"
                    : "ring-slate-600 focus:ring-blue-500"
                )}
              />
              {showError ? (
                <p className="mt-1.5 text-xs text-red-400 font-medium">
                  ⚠ Expected format: <span className="font-mono">{selectedRole.format}</span>
                </p>
              ) : (
                <p className="mt-1.5 text-xs text-slate-500">
                  Format: <span className="font-mono text-slate-400">{selectedRole.format}</span>
                </p>
              )}
            </div>

            {/* ── Password ── */}
            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-slate-200 mb-1.5">Password</label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  placeholder="••••••••••••"
                  className="block w-full rounded-lg py-3 px-4 pr-11 bg-[#1e293b] text-white placeholder:text-slate-500 ring-1 ring-inset ring-slate-600 focus:outline-none focus:ring-blue-500 transition-all sm:text-sm"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            {/* ── Sign In Button ── */}
            <div className="pt-1">
              <button
                type="submit"
                className="w-full h-12 text-base font-semibold bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-900/30 rounded-lg flex items-center justify-center gap-2 transition-colors"
              >
                <Shield className="h-4 w-4" /> Secure Sign In
              </button>
            </div>

            <div className="text-center">
              <a href="#" className="text-sm text-slate-500 hover:text-slate-300 font-medium transition-colors">Forgot BERC ID?</a>
            </div>

            <div className="flex justify-center border-t border-slate-700/60 pt-6">
              <p className="text-xs text-slate-600">
                Secure Academic Infrastructure v3.2 • Created by Aadhil Nandan <br />© 2019-2024 Brahmand Educational Research Council
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
