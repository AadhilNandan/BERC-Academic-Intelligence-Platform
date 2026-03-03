"use client";

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Home, Users, BarChart2, FlaskConical, LogOut, Settings, Sun, Moon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTheme } from '@/lib/ThemeProvider';

export function Sidebar({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const pathname = usePathname();
  const router = useRouter();
  const { theme, toggle } = useTheme();

  const navLinks = [
    { href: '/dashboard/teacher', label: 'Teacher Dashboard', icon: Home },
    { href: '/dashboard/research', label: 'Research Analytics', icon: BarChart2 },
    { href: '/dashboard/teacher/students', label: 'All Students', icon: Users },
    { href: '/dashboard/research-lab', label: 'Research Lab', icon: FlaskConical },
    { href: '/dashboard/settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div
      className={cn(
        "flex h-screen flex-col border-r border-[#2a3069] bg-[#1a1e5c] text-slate-300 w-64 shrink-0",
        className
      )}
      {...props}
    >
      <div className="flex h-16 items-center px-4 border-b border-[#2a3069]">
        <div className="flex items-center gap-3 w-full">
          <div className="h-8 w-8 rounded bg-blue-600 flex items-center justify-center text-white font-bold text-sm shadow-inner">
            B
          </div>
          <div className="flex-1 overflow-hidden">
            <div className="text-white font-semibold text-sm leading-tight truncate">BERC</div>
            <div className="text-[10px] text-indigo-300 font-medium truncate">Intelligence Platform</div>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-auto py-6">
        <nav className="grid items-start px-3 gap-0.5 text-sm font-medium">
          {navLinks.map(({ href, label, icon: Icon }) => {
            const isActive = pathname === href || (href !== '/dashboard/teacher' && pathname.startsWith(href));
            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2.5 transition-all border-l-2",
                  isActive
                    ? "text-blue-400 bg-[#2a3069]/60 border-blue-500"
                    : "text-slate-300 border-transparent hover:bg-[#2a3069]/30 hover:text-white"
                )}
              >
                <Icon className="h-4 w-4 shrink-0" />
                {label}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="mt-auto border-t border-[#2a3069] bg-[#141746]">
        <div className="p-4 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold shrink-0">
              AK
            </div>
            <div className="overflow-hidden">
              <div className="text-sm font-medium text-white truncate">Dr. A. Krishnamurthy</div>
              <div className="text-xs text-indigo-300 font-mono truncate">BERC-TCH-2024-0847</div>
            </div>
          </div>

          <div className="space-y-0.5">
            <button
              onClick={toggle}
              className="flex w-full items-center gap-3 rounded-lg px-2 py-2 text-slate-400 text-sm transition-all hover:text-white hover:bg-[#2a3069]/30"
            >
              {theme === 'dark'
                ? <><Sun className="h-4 w-4" /> Light Mode</>
                : <><Moon className="h-4 w-4" /> Dark Mode</>
              }
            </button>
            <button
              onClick={() => router.push('/')}
              className="flex w-full items-center gap-3 rounded-lg px-2 py-2 text-slate-400 text-sm transition-all hover:text-white hover:bg-[#2a3069]/30"
            >
              <LogOut className="h-4 w-4" />
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
