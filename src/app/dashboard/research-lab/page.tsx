import { FlaskConical, FileText, Clock, CheckCircle2, AlertTriangle, Plus } from "lucide-react";

const labProjects = [
  { id: "RES-P-884", title: "Cognitive Load Analysis in Secondary Stage", student: "Aarav Nair", stage: "Secondary", status: "Active", progress: 94, hours: 120, deadline: "2026-04-30" },
  { id: "RES-P-761", title: "Socio-Emotional Resilience in Foundation Cohort", student: "Meera Krishnan", stage: "Middle", status: "Under Review", progress: 62, hours: 48, deadline: "2026-03-31" },
  { id: "RES-P-519", title: "Industry Readiness Benchmark — Kerala Districts", student: "Rohan Varma", stage: "Foundation", status: "Completed", progress: 100, hours: 200, deadline: "2026-02-28" },
];

const statusStyles: Record<string, { text: string; bg: string; dot: string }> = {
  Active: { text: "text-emerald-700 dark:text-emerald-400", bg: "bg-emerald-50 dark:bg-emerald-900/20 border-emerald-100 dark:border-emerald-900/30", dot: "bg-emerald-500" },
  "Under Review": { text: "text-orange-700 dark:text-orange-400", bg: "bg-orange-50 dark:bg-orange-900/20 border-orange-100 dark:border-orange-900/30", dot: "bg-orange-500" },
  Completed: { text: "text-blue-700 dark:text-blue-400", bg: "bg-blue-50 dark:bg-blue-900/20 border-blue-100 dark:border-blue-900/30", dot: "bg-blue-600" },
};

export default function ResearchLabPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Research Lab</h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Active research permits, project tracking and lab submissions</p>
        </div>
        <button className="flex items-center gap-2 bg-[#1a1e5c] text-white text-sm font-semibold px-4 py-2 rounded-lg hover:opacity-90 transition-opacity shadow-sm">
          <Plus className="h-4 w-4" /> New Permit
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { value: "3", label: "Active Permits", icon: <FileText className="h-4 w-4" />, iconBg: "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400" },
          { value: "368h", label: "Total Lab Hours Logged", icon: <Clock className="h-4 w-4" />, iconBg: "bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400" },
          { value: "1", label: "Pending Reviews", icon: <AlertTriangle className="h-4 w-4" />, iconBg: "bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400" },
        ].map((stat) => (
          <div key={stat.label} className="bg-white dark:bg-[#161b22] rounded-xl border border-slate-200 dark:border-[#1e2a3a] p-5 shadow-sm flex items-start justify-between transition-colors">
            <div>
              <div className="text-2xl font-extrabold text-slate-900 dark:text-white">{stat.value}</div>
              <div className="text-xs font-semibold text-slate-600 dark:text-slate-200 mt-0.5">{stat.label}</div>
            </div>
            <div className={`p-2 rounded-lg ${stat.iconBg}`}>{stat.icon}</div>
          </div>
        ))}
      </div>

      <div className="bg-white dark:bg-[#161b22] rounded-xl border border-slate-200 dark:border-[#1e2a3a] shadow-sm overflow-hidden transition-colors">
        <div className="px-5 py-4 border-b border-slate-100 dark:border-[#1e2a3a] flex items-center gap-2">
          <FlaskConical className="h-4 w-4 text-slate-400" />
          <span className="font-semibold text-sm text-slate-800 dark:text-slate-200">Research Projects</span>
        </div>
        <div className="divide-y divide-slate-100 dark:divide-[#1e2a3a]">
          {labProjects.map((project) => {
            const style = statusStyles[project.status];
            return (
              <div key={project.id} className="p-5 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="font-mono text-xs text-slate-400">{project.id}</span>
                      <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2 py-0.5 rounded-full border ${style.bg} ${style.text}`}>
                        <span className={`h-1.5 w-1.5 rounded-full ${style.dot}`}></span>
                        {project.status}
                      </span>
                    </div>
                    <h3 className="font-bold text-slate-800 dark:text-slate-100 text-sm leading-snug">{project.title}</h3>
                    <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 flex-wrap">
                      <span>Student: <span className="font-semibold text-slate-700 dark:text-slate-300">{project.student}</span></span>
                      <span>Stage: <span className="font-semibold text-slate-700 dark:text-slate-300">{project.stage}</span></span>
                      <span>Lab Hours: <span className="font-semibold text-slate-700 dark:text-slate-300">{project.hours}h</span></span>
                      <span>Deadline: <span className="font-mono text-slate-700 dark:text-slate-300">{project.deadline}</span></span>
                    </div>
                  </div>
                  <div className="sm:w-40 shrink-0">
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="text-slate-500 dark:text-slate-400 font-medium">Progress</span>
                      <span className="font-bold text-slate-700 dark:text-slate-200">{project.progress}%</span>
                    </div>
                    <div className="w-full bg-slate-100 dark:bg-[#0d1117] rounded-full h-1.5 overflow-hidden">
                      <div className={`h-full rounded-full ${project.progress === 100 ? 'bg-emerald-500' : 'bg-blue-600'}`} style={{ width: `${project.progress}%` }} />
                    </div>
                    {project.progress === 100 && (
                      <div className="flex items-center gap-1 mt-1.5 text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold">
                        <CheckCircle2 className="h-3 w-3" /> Submitted
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
