"use client";

import { useState } from 'react';
import { Bell, Menu, X, AlertTriangle, CheckCircle2, Info } from 'lucide-react';
import { cn } from '@/lib/utils';
import React from "react";

const NOTIFICATIONS = [
  {
    id: 1, type: "alert", title: "Research Flag: Priya Nair",
    body: "Skill index dropped below the 50pt threshold. Immediate review recommended.",
    time: "10 min ago", unread: true,
  },
  {
    id: 2, type: "alert", title: "Research Flag: Rohan Varma",
    body: "At-Risk status confirmed after quarterly evaluation.",
    time: "2 hr ago", unread: true,
  },
  {
    id: 3, type: "info", title: "Evaluation Period Open",
    body: "Q1 2025 student evaluations are now open. Deadline: March 31st.",
    time: "Yesterday", unread: false,
  },
  {
    id: 4, type: "success", title: "Report Generated",
    body: "Aarav Nair's diagnosis report was successfully exported.",
    time: "2 days ago", unread: false,
  },
];

interface HeaderProps {
  className?: string;
  onToggleSidebar: () => void;
}

export function Header({ className = "", onToggleSidebar }: HeaderProps) {
  const [notifOpen, setNotifOpen] = useState(false);
  const unreadCount = NOTIFICATIONS.filter((n) => n.unread).length;

  return (
    <header className={cn(
      "flex h-16 items-center justify-between gap-4 border-b px-6 z-10 relative transition-colors",
      "border-slate-200 bg-white dark:border-[#1e2a3a] dark:bg-[#0f1117]",
      className
    )}>
      <div className="flex items-center gap-4 text-slate-600 dark:text-slate-400">
        <button
          aria-label="Toggle sidebar"
          onClick={onToggleSidebar}
          className="md:hidden"
        >
          ☰
        </button>
        <div className="font-semibold text-sm text-slate-700 dark:text-slate-200">Teacher Dashboard</div>
      </div>

      <div className="flex items-center gap-4">
        {/* Notification Bell */}
        <div className="relative">
          <button
            onClick={() => setNotifOpen((v) => !v)}
            className="relative p-2 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
          >
            <Bell className="h-5 w-5" />
            {unreadCount > 0 && (
              <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white dark:ring-[#0f1117]"></span>
            )}
          </button>

          {notifOpen && (
            <>
              <div className="fixed inset-0 z-10" onClick={() => setNotifOpen(false)} />
              <div className="absolute right-0 mt-2 w-80 rounded-xl shadow-xl border z-20 overflow-hidden bg-white dark:bg-[#161b22] border-slate-200 dark:border-[#1e2a3a]">
                <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100 dark:border-[#1e2a3a]">
                  <div className="font-semibold text-sm text-slate-800 dark:text-white">Notifications</div>
                  <div className="flex items-center gap-2">
                    {unreadCount > 0 && (
                      <span className="text-[10px] font-bold bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 px-1.5 py-0.5 rounded-full">{unreadCount} new</span>
                    )}
                    <button onClick={() => setNotifOpen(false)} className="text-slate-400 hover:text-slate-600 dark:hover:text-white">
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <div className="divide-y divide-slate-50 dark:divide-[#1e2a3a] max-h-80 overflow-y-auto">
                  {NOTIFICATIONS.map((notif) => (
                    <div key={notif.id} className={cn(
                      "flex gap-3 px-4 py-3 transition-colors cursor-pointer",
                      "hover:bg-slate-50 dark:hover:bg-white/5",
                      notif.unread && "bg-blue-50/50 dark:bg-blue-900/10"
                    )}>
                      <div className="shrink-0 mt-0.5">
                        {notif.type === "alert" && <AlertTriangle className="h-4 w-4 text-orange-500" />}
                        {notif.type === "success" && <CheckCircle2 className="h-4 w-4 text-emerald-500" />}
                        {notif.type === "info" && <Info className="h-4 w-4 text-blue-500" />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <div className={cn("text-xs font-semibold truncate", notif.unread ? "text-slate-800 dark:text-white" : "text-slate-600 dark:text-slate-400")}>{notif.title}</div>
                          {notif.unread && <span className="h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0 mt-1"></span>}
                        </div>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-2">{notif.body}</p>
                        <div className="text-[10px] text-slate-400 dark:text-slate-500 mt-1 font-medium">{notif.time}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="px-4 py-2.5 border-t border-slate-100 dark:border-[#1e2a3a] bg-slate-50 dark:bg-[#0f1117]">
                  <button className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700">View all notifications</button>
                </div>
              </div>
            </>
          )}
        </div>

        {/* User Profile */}
        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <div className="text-sm font-bold text-slate-800 dark:text-white tracking-tight">Dr. Anitha K.</div>
            <div className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">Teacher • Thrissur</div>
          </div>
          <div className="h-9 w-9 rounded-full bg-[#1a1e5c] flex items-center justify-center text-white text-xs font-bold shadow-sm">
            AK
          </div>
        </div>
      </div>
    </header>
  );
}
