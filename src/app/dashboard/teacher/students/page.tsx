"use client";

import { useRouter } from "next/navigation";
import { mockStudents } from "@/lib/mock-data";
import { AlertTriangle, ExternalLink, Search } from "lucide-react";
import { useState } from "react";

export default function AllStudentsPage() {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const filtered = mockStudents.filter(
    (s) =>
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.id.toLowerCase().includes(search.toLowerCase())
  );

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
      case "Needs Intervention": return "text-orange-600";
      case "At Risk": return "text-red-600";
      case "Advanced Potential": return "text-blue-600";
      default: return "text-emerald-600";
    }
  };

  const getTierColorClass = (tier: string) => {
    switch (tier) {
      case "Bronze": return "text-orange-900";
      case "Silver": return "text-slate-500";
      case "Gold": return "text-amber-500";
      case "Expert": return "text-purple-600";
      default: return "text-slate-400";
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">All Students</h2>
        <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Complete roster across all stages and cohorts</p>
      </div>

      <div className="bg-white dark:bg-[#161b22] rounded-xl border border-slate-200 dark:border-[#1e2a3a] shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 border-b border-slate-100 dark:border-[#1e2a3a]">
          <div className="relative w-full sm:max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search by name or BERC ID…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-sm rounded-lg border border-slate-200 dark:border-[#2d3748] bg-slate-50 dark:bg-[#0d1117] text-slate-900 dark:text-slate-200 placeholder:text-slate-400 focus:bg-white dark:focus:bg-[#161b22] focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors"
            />
          </div>
          <div className="text-xs font-medium text-slate-400 dark:text-slate-500">{filtered.length} students</div>
        </div>

        <div className="relative w-full overflow-auto">
          <table className="w-full caption-bottom text-sm border-collapse">
            <thead className="bg-slate-50 dark:bg-[#0f1117] border-b border-slate-200 dark:border-[#1e2a3a]">
              <tr>
                <th className="h-10 px-4 text-left align-middle text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Student ID</th>
                <th className="h-10 px-4 text-left align-middle text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Name</th>
                <th className="h-10 px-4 text-left align-middle text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Stage</th>
                <th className="h-10 px-4 text-left align-middle text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Skill Index</th>
                <th className="h-10 px-4 text-left align-middle text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Tier</th>
                <th className="h-10 px-4 text-left align-middle text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Diagnosis</th>
                <th className="h-10 px-4 text-left align-middle text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Last Eval</th>
                <th className="h-10 px-4 text-left align-middle text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Alerts</th>
                <th className="h-10 px-4 text-right align-middle text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">View</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-[#1e2a3a] bg-white dark:bg-[#161b22]">
              {filtered.map((student) => (
                <tr
                  key={student.id}
                  className="transition-colors hover:bg-slate-50 dark:hover:bg-white/5 cursor-pointer"
                  onClick={() => router.push(`/dashboard/student/${student.id}`)}
                >
                  <td className="p-4 align-middle font-mono text-xs text-slate-400 dark:text-slate-500">{student.id}</td>
                  <td className="p-4 align-middle">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 font-bold text-xs flex items-center justify-center border border-blue-100 dark:border-blue-900/50 shrink-0">
                        {student.name.split(" ").map((n: string) => n[0]).join("")}
                      </div>
                      <span className="font-bold text-slate-800 dark:text-white">{student.name}</span>
                    </div>
                  </td>
                  <td className="p-4 align-middle">
                    <span className="text-xs font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700/30 px-2 py-0.5 rounded border border-slate-200 dark:border-[#2d3748]">{student.stage}</span>
                  </td>
                  <td className="p-4 align-middle">
                    <div className="flex items-center gap-3">
                      <div className="w-20 h-1.5 bg-slate-100 dark:bg-[#0d1117] rounded-full overflow-hidden">
                        <div className={`h-full rounded-full ${getStatusColorClass(student.diagnosisStatus)}`} style={{ width: `${student.skillIndex}%` }}></div>
                      </div>
                      <span className="font-bold text-sm text-slate-800 dark:text-white">{student.skillIndex.toFixed(1)}</span>
                    </div>
                  </td>
                  <td className="p-4 align-middle">
                    <span className={`text-xs font-bold uppercase tracking-wider ${getTierColorClass(student.skillTier)}`}>{student.skillTier}</span>
                  </td>
                  <td className="p-4 align-middle">
                    <div className="flex items-center gap-1.5">
                      <span className={`h-2 w-2 rounded-full ${getStatusColorClass(student.diagnosisStatus)}`}></span>
                      <span className={`text-xs font-bold ${getStatusTextClass(student.diagnosisStatus)}`}>{student.diagnosisStatus}</span>
                    </div>
                  </td>
                  <td className="p-4 align-middle font-mono text-xs text-slate-400 dark:text-slate-500">{student.lastEvaluation}</td>
                  <td className="p-4 align-middle">
                    {student.researchFlag && (
                      <div className="bg-red-50 dark:bg-red-900/20 text-red-500 dark:text-red-400 p-1 rounded inline-flex">
                        <AlertTriangle className="h-3.5 w-3.5" />
                      </div>
                    )}
                  </td>
                  <td className="p-4 align-middle text-right">
                    <button className="text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      <ExternalLink className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
