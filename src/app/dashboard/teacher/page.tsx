"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { mockStudents } from "@/lib/mock-data";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { LayoutGrid, List, AlertTriangle, ExternalLink, Activity, Search, Users } from "lucide-react";

export default function TeacherDashboard() {
  const [view, setView] = useState<"grid" | "table">("grid");
  const router = useRouter();

  const teacherProfile = {
    name: "Dr. Anitha Krishnamurthy",
    role: "Cognitive Sciences & Pedagogy Research",
    school: "BERC Affiliated Institution — Thrissur District",
    id: "BERC-TCH-2024-0847",
  };

  const getStatusColorClass = (status: string) => {
    switch (status) {
      case "Stable": return "bg-emerald-500";
      case "Needs Intervention": return "bg-orange-500";
      case "Advanced Potential": return "bg-blue-600";
      case "At Risk": return "bg-red-600";
      default: return "bg-slate-400";
    }
  };

  const getStatusTextClass = (status: string) => {
    switch (status) {
      case "Needs Intervention": return "text-orange-500";
      case "At Risk": return "text-red-500";
      case "Advanced Potential": return "text-blue-500";
      default: return "text-emerald-500";
    }
  };

  const getTierColorClass = (tier: string) => {
    switch (tier) {
      case "Bronze": return "text-orange-500";
      case "Silver": return "text-slate-400";
      case "Gold": return "text-amber-500";
      case "Expert": return "text-purple-500";
      default: return "text-slate-400";
    }
  };

  return (
    <div className="space-y-6">
      {/* Teacher Hero Banner */}
      <div className="bg-[#1a1e5c] dark:bg-[#111827] rounded-xl text-white p-6 relative overflow-hidden shadow-sm flex justify-between items-start border border-transparent dark:border-[#1e2a3a]">
        <div className="z-10 flex gap-4">
          <div className="pt-1">
            <ShieldIcon className="h-6 w-6 text-blue-400 opacity-80" />
          </div>
          <div>
            <p className="text-blue-300 font-mono text-xs tracking-wider mb-2">{teacherProfile.id}</p>
            <h1 className="text-2xl font-bold mb-1 tracking-tight">{teacherProfile.name}</h1>
            <p className="text-indigo-200 text-sm">{teacherProfile.role}</p>
            <p className="text-indigo-200 text-sm">{teacherProfile.school}</p>
          </div>
        </div>
        <div className="z-10">
          <Button variant="outline" className="bg-[#2a3069] border-[#373e82] text-white hover:bg-[#373e82] hover:text-white rounded-lg gap-2 font-medium">
            <AlertTriangle className="h-4 w-4 text-orange-400" />
            3 Research Alerts
          </Button>
        </div>
      </div>

      {/* Stat Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        {[
          { value: "32", label: "Total Students", sub: "Under supervision", icon: <Users className="h-4 w-4" />, iconBg: "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400" },
          { value: "68.4", label: "Average Skill Index", sub: "Cohort average", icon: <Activity className="h-4 w-4" />, iconBg: "bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400" },
          { value: "3", label: "Research Alerts", sub: "Require attention", icon: <AlertTriangle className="h-4 w-4" />, iconBg: "bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400" },
          { value: "4", label: "Active Research Permits", sub: "Permits active", icon: <BookIcon className="h-4 w-4" />, iconBg: "bg-slate-100 dark:bg-slate-700/50 text-slate-600 dark:text-slate-300" },
        ].map((stat) => (
          <Card key={stat.label} className="col-span-1">
            <CardContent className="p-5 flex items-start justify-between">
              <div>
                <div className="text-3xl font-extrabold text-slate-900 dark:text-white mb-1">{stat.value}</div>
                <div className="text-xs font-semibold text-slate-700 dark:text-slate-200">{stat.label}</div>
                <div className="text-[10px] text-slate-600 dark:text-slate-400 font-medium">{stat.sub}</div>
              </div>
              <div className={`p-2 rounded-lg ${stat.iconBg}`}>{stat.icon}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Toolbar */}
      <div className="bg-white dark:bg-[#161b22] rounded-xl border border-slate-200 dark:border-[#1e2a3a] p-2 shadow-sm flex flex-col sm:flex-row justify-between items-center gap-4 transition-colors">
        <div className="flex items-center gap-3 px-3">
          <Activity className="h-4 w-4 text-slate-400" />
          <span className="font-semibold text-sm text-slate-800 dark:text-slate-200 tracking-tight">Student Cohort</span>
          <Badge variant="outline" className="text-xs font-medium text-slate-500 dark:text-slate-400 border-slate-200 dark:border-slate-600 px-2 py-0 bg-slate-50 dark:bg-slate-700/30">6 students</Badge>
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search students..."
              className="w-full text-sm pl-9 pr-3 py-1.5 rounded-lg border border-slate-200 dark:border-[#2d3748] bg-slate-50 dark:bg-[#0d1117] text-slate-800 dark:text-slate-200 placeholder:text-slate-400 focus:bg-white dark:focus:bg-[#161b22] focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors"
            />
          </div>
          <div className="flex bg-slate-100 dark:bg-[#0d1117] rounded-lg p-0.5 border border-slate-200 dark:border-[#2d3748] shrink-0">
            <button onClick={() => setView("grid")} className={`p-1.5 rounded-md transition-all ${view === 'grid' ? 'bg-white dark:bg-[#1e2a3a] shadow-sm text-blue-600' : 'text-slate-400 hover:text-slate-600'}`}>
              <LayoutGrid className="h-4 w-4" />
            </button>
            <button onClick={() => setView("table")} className={`p-1.5 rounded-md transition-all ${view === 'table' ? 'bg-white dark:bg-[#1e2a3a] shadow-sm text-blue-600' : 'text-slate-400 hover:text-slate-600'}`}>
              <List className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-6 border-b border-slate-200 dark:border-[#1e2a3a]">
        <button className="px-3 pb-2 text-sm font-semibold text-[#1a1e5c] dark:text-blue-400 border-b-2 border-[#1a1e5c] dark:border-blue-400">
          <span className="bg-[#1a1e5c] dark:bg-blue-500/20 text-white dark:text-blue-300 px-2 py-0.5 rounded-md text-xs mr-2">All (6)</span>
          Stable <span className="text-slate-400 font-normal ml-1">(2)</span>
        </button>
        <button className="px-1 pb-2 text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white">Advanced Potential <span className="text-slate-400 font-normal ml-1">(2)</span></button>
        <button className="px-1 pb-2 text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white">Needs Intervention <span className="text-slate-400 font-normal ml-1">(1)</span></button>
        <button className="px-1 pb-2 text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white">At Risk <span className="text-slate-400 font-normal ml-1">(1)</span></button>
      </div>

      {/* Student Grid / Table */}
      {view === "grid" ? (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {mockStudents.map((student) => (
            <div
              key={student.id}
              className="bg-white dark:bg-[#161b22] rounded-xl border border-slate-200 dark:border-[#1e2a3a] p-5 shadow-sm hover:shadow-md dark:hover:border-blue-800/40 transition-all cursor-pointer relative group flex flex-col"
              onClick={() => router.push(`/dashboard/student/${student.id}`)}
            >
              <button className="absolute top-4 right-4 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity hover:text-blue-600">
                <ExternalLink className="h-4 w-4" />
              </button>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 font-bold flex items-center justify-center shrink-0 border border-blue-100 dark:border-blue-900/50">
                  {student.name.split(' ').map((n: string) => n[0]).join('')}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white tracking-tight leading-none mb-1">{student.name}</h3>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                    Grade {student.stage === 'Secondary' ? 'X' : student.stage === 'Middle' ? 'VIII' : 'VI'} • Section {student.id.charAt(student.id.length - 1) > '5' ? 'A' : 'B'}
                  </p>
                </div>
              </div>
              <div className="space-y-4 flex-1">
                <div className="flex justify-between items-end mb-1">
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Skill Index</span>
                  <div className="flex flex-col items-end">
                    <span className={`text-[10px] font-bold uppercase tracking-wider ${getTierColorClass(student.skillTier)}`}>{student.skillTier}</span>
                    <span className="text-sm font-bold text-slate-900 dark:text-white">{student.skillIndex.toFixed(1)}</span>
                  </div>
                </div>
                <div className="w-full bg-slate-100 dark:bg-[#0d1117] rounded-full h-1.5 mb-6 overflow-hidden">
                  <div className={`h-full rounded-full ${getStatusColorClass(student.diagnosisStatus)}`} style={{ width: `${student.skillIndex}%` }}></div>
                </div>
                <div className="flex items-center gap-1.5 pt-4">
                  <span className={`h-2 w-2 rounded-full ${getStatusColorClass(student.diagnosisStatus)}`}></span>
                  <span className={`text-xs font-bold leading-none ${getStatusTextClass(student.diagnosisStatus)}`}>{student.diagnosisStatus}</span>
                </div>
              </div>
              <div className="mt-8 flex justify-between items-center border-t border-slate-100 dark:border-[#1e2a3a] pt-4">
                <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-[#0d1117] px-2 py-0.5 rounded border border-slate-100 dark:border-[#1e2a3a]">{student.stage}</span>
                <span className="text-[10px] font-medium text-slate-400 font-mono">Eval: {student.lastEvaluation}</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <Card className="overflow-hidden">
          <div className="relative w-full overflow-auto">
            <table className="w-full caption-bottom text-sm border-collapse">
              <thead className="bg-slate-50 dark:bg-[#0f1117] border-b border-slate-200 dark:border-[#1e2a3a]">
                <tr>
                  {["ID", "Name", "Stage", "Skill Tier / Index", "Diagnosis Status", "Alerts"].map((h) => (
                    <th key={h} className="h-10 px-4 text-left align-middle font-semibold text-xs tracking-wider text-slate-500 dark:text-slate-400 uppercase">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-[#1e2a3a] bg-white dark:bg-[#161b22]">
                {mockStudents.map((student) => (
                  <tr key={student.id} className="transition-colors hover:bg-slate-50 dark:hover:bg-white/5 cursor-pointer" onClick={() => router.push(`/dashboard/student/${student.id}`)}>
                    <td className="p-4 align-middle font-mono font-medium text-xs text-slate-500 dark:text-slate-400">{student.id}</td>
                    <td className="p-4 align-middle font-bold text-slate-800 dark:text-white">{student.name}</td>
                    <td className="p-4 align-middle text-slate-600 dark:text-slate-300 font-medium text-sm">{student.stage}</td>
                    <td className="p-4 align-middle">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm text-slate-900 dark:text-white">{student.skillIndex.toFixed(1)}</span>
                        <span className={`text-[10px] uppercase font-bold tracking-wider ${getTierColorClass(student.skillTier)}`}>{student.skillTier}</span>
                      </div>
                    </td>
                    <td className="p-4 align-middle">
                      <div className="flex items-center gap-1.5">
                        <span className={`h-2 w-2 rounded-full ${getStatusColorClass(student.diagnosisStatus)}`}></span>
                        <span className={`text-xs font-bold leading-none ${getStatusTextClass(student.diagnosisStatus)}`}>{student.diagnosisStatus}</span>
                      </div>
                    </td>
                    <td className="p-4 align-middle">
                      {student.researchFlag && (
                        <div className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 p-1 rounded-md inline-block">
                          <AlertTriangle className="h-4 w-4" />
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      )}
    </div>
  );
}

function ShieldIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd" />
    </svg>
  );
}

function BookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  );
}
