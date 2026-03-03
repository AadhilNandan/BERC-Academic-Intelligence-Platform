import { Bell, User, Shield, Database, Palette, Globe, ChevronRight } from "lucide-react";

export default function SettingsPage() {
  const sections = [
    { icon: User, title: "Profile & Account", description: "Update your BERC ID credentials and personal information", color: "text-blue-600 bg-blue-50 dark:bg-blue-900/30 dark:text-blue-400" },
    { icon: Bell, title: "Notification Preferences", description: "Configure research alert thresholds and delivery methods", color: "text-orange-600 bg-orange-50 dark:bg-orange-900/30 dark:text-orange-400" },
    { icon: Shield, title: "Security & Access", description: "Manage two-factor authentication and session controls", color: "text-emerald-600 bg-emerald-50 dark:bg-emerald-900/30 dark:text-emerald-400" },
    { icon: Database, title: "Data & Privacy", description: "DPDP Act compliance settings and data sharing preferences", color: "text-purple-600 bg-purple-50 dark:bg-purple-900/30 dark:text-purple-400" },
    { icon: Palette, title: "Display Preferences", description: "Dark mode, font size, low bandwidth mode and language", color: "text-indigo-600 bg-indigo-50 dark:bg-indigo-900/30 dark:text-indigo-400" },
    { icon: Globe, title: "Language & Region", description: "Switch between English and Malayalam interface", color: "text-slate-600 bg-slate-100 dark:bg-slate-700/50 dark:text-slate-300" },
  ];

  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Settings</h2>
        <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Manage your account and platform preferences</p>
      </div>

      <div className="bg-white dark:bg-[#161b22] rounded-xl border border-slate-200 dark:border-[#1e2a3a] shadow-sm overflow-hidden divide-y divide-slate-100 dark:divide-[#1e2a3a] transition-colors">
        {sections.map((section) => (
          <button key={section.title} className="w-full flex items-center gap-4 p-5 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors text-left group">
            <div className={`p-2.5 rounded-lg ${section.color} shrink-0`}>
              <section.icon className="h-5 w-5" />
            </div>
            <div className="flex-1 overflow-hidden">
              <div className="font-semibold text-slate-800 dark:text-slate-100 text-sm">{section.title}</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 truncate">{section.description}</div>
            </div>
            <ChevronRight className="h-4 w-4 text-slate-300 dark:text-slate-600 group-hover:text-slate-500 dark:group-hover:text-slate-300 transition-colors shrink-0" />
          </button>
        ))}
      </div>

      <div className="bg-slate-50 dark:bg-[#0d1117] border border-slate-200 dark:border-[#1e2a3a] rounded-xl p-5 text-xs text-slate-400 dark:text-slate-500 space-y-1">
        <div className="font-semibold text-slate-500 dark:text-slate-400">System Information</div>
        <div>BERC Intelligence Platform v3.2</div>
        <div>Secure Academic Infrastructure • Created By Aadhil Nandan </div>
      </div>
    </div>
  );
}
