"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line,
} from 'recharts';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { Activity, Users, AlertTriangle, Globe } from "lucide-react";

export default function ResearchAnalyticsDashboard() {
  
  const lineData = [
    { name: 'Mar', value: 60.1 },
    { name: 'Apr', value: 62.4 },
    { name: 'May', value: 63.8 },
    { name: 'Jun', value: 63.5 },
    { name: 'Jul', value: 65.2 },
    { name: 'Aug', value: 66.1 },
    { name: 'Sep', value: 67.4 },
    { name: 'Oct', value: 68.0 },
    { name: 'Nov', value: 68.5 },
    { name: 'Dec', value: 68.4 },
  ];

  const barData = [
    { name: 'Mar', atRisk: 5, intervention: 8 },
    { name: 'Apr', atRisk: 4, intervention: 6 },
    { name: 'May', atRisk: 5, intervention: 5 },
    { name: 'Jun', atRisk: 4, intervention: 7 },
    { name: 'Jul', atRisk: 5, intervention: 4 },
    { name: 'Aug', atRisk: 4, intervention: 6 },
    { name: 'Sep', atRisk: 3, intervention: 5 },
    { name: 'Oct', atRisk: 3, intervention: 4 },
    { name: 'Nov', atRisk: 3, intervention: 3 },
    { name: 'Dec', atRisk: 3, intervention: 3 },
  ];

  const radarData = [
    { subject: 'Communication', A: 75, fullMark: 100 },
    { subject: 'Critical', A: 85, fullMark: 100 },
    { subject: 'Problem', A: 70, fullMark: 100 },
    { subject: 'Technical', A: 65, fullMark: 100 },
    { subject: 'Question', A: 80, fullMark: 100 },
    { subject: 'Collaboration', A: 90, fullMark: 100 },
  ];
  
  const regions = [
    { name: 'Thrissur', index: 68.4, schools: 4, flagged: 8 },
    { name: 'Ernakulam', index: 72.1, schools: 6, flagged: 5 },
    { name: 'Kozhikode', index: 64.8, schools: 3, flagged: 12 },
    { name: 'Thiruvananthapuram', index: 70.3, schools: 5, flagged: 7 },
    { name: 'Palakkad', index: 61.2, schools: 3, flagged: 14 },
    { name: 'Kannur', index: 66.9, schools: 2, flagged: 9 },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-[#1a1e5c] rounded-xl text-white p-6 relative overflow-hidden shadow-sm flex flex-col justify-end min-h-[140px]">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/graph-paper.png')] bg-blend-overlay opacity-20"></div>
         <div className="z-10">
             <div className="flex items-center gap-2 mb-2">
                <BarChartIcon className="h-4 w-4 text-blue-400" />
                <p className="text-blue-300 font-mono text-[10px] tracking-widest uppercase">BERC Research Intelligence Platform</p>
             </div>
             <h1 className="text-2xl font-bold mb-1 tracking-tight">Regional Analytics Dashboard</h1>
             <p className="text-indigo-200 text-sm">Academic year 2024–25 • Kerala State • Data snapshot: December 2024</p>
         </div>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card className="rounded-xl border-slate-200 shadow-sm col-span-1 dark:bg-[#161b22]">
          <CardContent className="p-5 flex items-start justify-between">
            <div>
              <div className="text-3xl font-extrabold text-slate-900 dark:text-white mb-1">66.8</div>
              <div className="text-xs font-semibold text-slate-800 dark:text-slate-200">State Avg Skill Index</div>
              <div className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">Across all districts</div>
            </div>
            <div className="p-2 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg">
               <Activity className="h-4 w-4" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="rounded-xl border-slate-200 shadow-sm col-span-1 dark:bg-[#161b22]">
          <CardContent className="p-5 flex items-start justify-between">
            <div>
              <div className="text-3xl font-extrabold text-slate-900 dark:text-white mb-1">4,820</div>
              <div className="text-xs font-semibold text-slate-800 dark:text-slate-200">Total Students Tracked</div>
              <div className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">Active in BERC system</div>
            </div>
            <div className="p-2 bg-slate-50 dark:bg-slate-600/30 text-slate-600 dark:text-slate-300 rounded-lg">
               <Users className="h-4 w-4" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="rounded-xl border-slate-200 shadow-sm col-span-1 dark:bg-[#161b22]">
          <CardContent className="p-5 flex items-start justify-between">
            <div>
              <div className="text-3xl font-extrabold text-slate-900 dark:text-white mb-1">312</div>
              <div className="text-xs font-semibold text-slate-800 dark:text-slate-200">At-Risk Students</div>
              <div className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">Requiring intervention</div>
            </div>
            <div className="p-2 bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-lg">
               <AlertTriangle className="h-4 w-4" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="rounded-xl border-slate-200 shadow-sm col-span-1 dark:bg-[#161b22]">
          <CardContent className="p-5 flex items-start justify-between">
            <div>
              <div className="text-3xl font-extrabold text-slate-900 dark:text-white mb-1">6</div>
              <div className="text-xs font-semibold text-slate-800 dark:text-slate-200">Districts Active</div>
              <div className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">Kerala district coverage</div>
            </div>
            <div className="p-2 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-lg">
               <Globe className="h-4 w-4" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="rounded-xl border-slate-200 shadow-sm dark:bg-[#161b22]">
           <CardContent className="p-6">
              <h3 className="text-sm font-bold text-slate-800 dark:text-white mb-1">State Skill Index Trend</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mb-6">Monthly average skill index — 2024</p>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={lineData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#1a1e5c" stopOpacity={0.1}/>
                        <stop offset="95%" stopColor="#1a1e5c" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#64748b' }} dy={10} />
                    <YAxis domain={[55, 75]} axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#64748b' }} />
                    <Tooltip 
                      contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                      labelStyle={{ fontWeight: 'bold', color: '#0f172a', marginBottom: '4px' }}
                    />
                    <Line type="monotone" dataKey="value" stroke="#1a1e5c" strokeWidth={2} dot={false} activeDot={{ r: 4, fill: '#1a1e5c' }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
           </CardContent>
        </Card>
        
        <Card className="rounded-xl border-slate-200 shadow-sm dark:bg-[#161b22]">
           <CardContent className="p-6">
              <h3 className="text-sm font-bold text-slate-800 dark:text-white mb-1">At-Risk Student Trend</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mb-6">Monthly at-risk count vs interventions deployed</p>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={barData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }} barGap={2}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#64748b' }} dy={10} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#64748b' }} />
                    <Tooltip 
                      cursor={{ fill: '#f8fafc' }}
                      contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                    />
                    <Bar dataKey="atRisk" fill="#ef4444" radius={[2, 2, 0, 0]} maxBarSize={12} />
                    <Bar dataKey="intervention" fill="#3b82f6" radius={[2, 2, 0, 0]} maxBarSize={12} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
           </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
         <div className="md:col-span-2 space-y-6">
            <Card className="rounded-xl border-slate-200 shadow-sm dark:bg-[#161b22]">
               <CardContent className="p-6">
                  <h3 className="text-sm font-bold text-slate-800 dark:text-white mb-1 flex items-center gap-2">
                     <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400 dark:text-slate-500"><path d="m12 2 8 5-8 5-8-5Z"/><path d="m12 22 8-5-8-5-8 5Z"/></svg>
                     Regional Skill Heatmap
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mb-6">District-wise average skill index and at-risk student count</p>
                  
                  <div className="space-y-4">
                     {regions.map((region) => (
                        <div key={region.name} className="flex items-center justify-between group py-2 border-b border-slate-50 dark:border-slate-700/30 last:border-0">
                           <div className="w-40 font-semibold text-sm text-slate-700 dark:text-slate-300">{region.name}</div>
                           <div className="flex-1 px-4">
                              <div className="w-full bg-slate-100 dark:bg-slate-700/30 rounded-full h-1.5 overflow-hidden">
                                 <div 
                                    className={`h-full rounded-full ${region.index > 70 ? 'bg-emerald-500' : region.index > 65 ? 'bg-blue-500' : 'bg-orange-500'}`} 
                                    style={{ width: `${region.index}%` }}
                                 ></div>
                              </div>
                           </div>
                           <div className="w-16 text-right font-bold text-sm text-blue-600 dark:text-blue-400">{region.index.toFixed(1)}</div>
                           <div className="w-20 text-right text-xs text-slate-500 dark:text-slate-400 pr-4">{region.schools} schools</div>
                           <div className="w-20 text-right text-xs text-red-500 dark:text-red-400 font-medium flex items-center justify-end gap-1">
                              {region.flagged} <AlertTriangle className="h-3 w-3" />
                           </div>
                        </div>
                     ))}
                  </div>
               </CardContent>
            </Card>

            <Card className="rounded-xl border-slate-200 shadow-sm dark:bg-[#161b22]">
               <CardContent className="p-6">
                  <h3 className="text-sm font-bold text-slate-800 dark:text-white mb-1 flex items-center gap-2">
                     <Activity className="h-4 w-4 text-slate-400 dark:text-slate-500" />
                     Skill Gap Distribution
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mb-6">Current average vs target benchmark across skill domains</p>
                  
                  <div className="space-y-4 max-w-lg">
                     {radarData.map((item) => (
                        <div key={item.subject} className="flex items-center gap-4">
                           <div className="w-32 text-right text-xs font-semibold text-slate-600 dark:text-slate-400">{item.subject}</div>
                           <div className="flex-1 relative h-2.5 bg-slate-100 dark:bg-slate-700/30 rounded-full overflow-hidden">
                              <div className="absolute top-0 left-0 h-full bg-slate-200 dark:bg-slate-600 w-[90%] rounded-full"></div>
                              <div className="absolute top-0 left-0 h-full bg-blue-500 rounded-full" style={{ width: `${item.A}%` }}></div>
                           </div>
                           <div className="w-8 text-xs font-mono text-slate-400 dark:text-slate-500">{item.A}</div>
                        </div>
                     ))}
                  </div>
               </CardContent>
            </Card>
         </div>

         <div className="space-y-6">
            <Card className="rounded-xl border-slate-200 shadow-sm dark:bg-[#161b22]">
               <CardContent className="p-6">
                  <h3 className="text-sm font-bold text-slate-800 dark:text-white mb-1">Diagnosis Distribution</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mb-6">Student cohort breakdown by status</p>
                  
                  <div className="space-y-5">
                     <div>
                        <div className="flex justify-between text-xs mb-1.5">
                           <span className="font-bold text-slate-700 dark:text-slate-300">Stable</span>
                           <span className="text-slate-500 dark:text-slate-400 font-mono">15 • 46.9%</span>
                        </div>
                        <div className="w-full bg-slate-100 dark:bg-slate-700/30 rounded-full h-1.5 overflow-hidden">
                           <div className="bg-emerald-500 h-full rounded-full" style={{ width: '46.9%' }}></div>
                        </div>
                     </div>
                     <div>
                        <div className="flex justify-between text-xs mb-1.5">
                           <span className="font-bold text-slate-700 dark:text-slate-300">Advanced Potential</span>
                           <span className="text-slate-500 dark:text-slate-400 font-mono">8 • 25%</span>
                        </div>
                        <div className="w-full bg-slate-100 dark:bg-slate-700/30 rounded-full h-1.5 overflow-hidden">
                           <div className="bg-blue-600 h-full rounded-full" style={{ width: '25%' }}></div>
                        </div>
                     </div>
                     <div>
                        <div className="flex justify-between text-xs mb-1.5">
                           <span className="font-bold text-slate-700 dark:text-slate-300">Needs Intervention</span>
                           <span className="text-slate-500 dark:text-slate-400 font-mono">6 • 18.8%</span>
                        </div>
                        <div className="w-full bg-slate-100 dark:bg-slate-700/30 rounded-full h-1.5 overflow-hidden">
                           <div className="bg-orange-500 h-full rounded-full" style={{ width: '18.8%' }}></div>
                        </div>
                     </div>
                     <div>
                        <div className="flex justify-between text-xs mb-1.5">
                           <span className="font-bold text-slate-700 dark:text-slate-300">At Risk</span>
                           <span className="text-slate-500 dark:text-slate-400 font-mono">3 • 9.4%</span>
                        </div>
                        <div className="w-full bg-slate-100 dark:bg-slate-700/30 rounded-full h-1.5 overflow-hidden">
                           <div className="bg-red-600 h-full rounded-full" style={{ width: '9.4%' }}></div>
                        </div>
                     </div>
                  </div>
               </CardContent>
            </Card>

            <Card className="rounded-xl border-slate-200 shadow-sm flex-1 dark:bg-[#161b22]">
               <CardContent className="p-6 flex flex-col items-center justify-between h-full">
                  <div className="w-full">
                    <h3 className="text-sm font-bold text-slate-800 dark:text-white mb-1">Cognitive Pattern Clusters</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mb-6">State-level skill profile vs target benchmarks</p>
                  </div>
                  
                  <div className="h-48 w-full max-w-[250px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <RadarChart cx="50%" cy="50%" outerRadius="70%" data={radarData}>
                        <PolarGrid stroke="#e2e8f0" />
                        <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748b', fontSize: 9 }} />
                        <Radar name="State Avg" dataKey="A" stroke="#2c49a6" fill="#1a1e5c" fillOpacity={0.1} strokeWidth={2} />
                        <Radar name="Benchmark" dataKey="fullMark" stroke="#16a34a" strokeDasharray="3 3" fill="none" />
                      </RadarChart>
                    </ResponsiveContainer>
                  </div>

                  <div className="w-full mt-6 space-y-3">
                     <p className="text-[10px] font-bold text-slate-800 dark:text-white uppercase tracking-widest border-b border-slate-100 dark:border-slate-700/30 pb-2 mb-3">Stage-Wise Performance</p>
                     <div className="flex items-center gap-3">
                        <span className="text-xs text-slate-500 dark:text-slate-400 w-16">Foundation</span>
                        <div className="flex-1 h-1.5 bg-slate-100 dark:bg-slate-700/30 rounded-full overflow-hidden"><div className="bg-blue-600 h-full rounded-full w-[68%]"></div></div>
                        <span className="text-xs font-mono text-slate-400 dark:text-slate-500">68.2</span>
                     </div>
                     <div className="flex items-center gap-3">
                        <span className="text-xs text-slate-500 dark:text-slate-400 w-16">Middle</span>
                        <div className="flex-1 h-1.5 bg-slate-100 dark:bg-slate-700/30 rounded-full overflow-hidden"><div className="bg-blue-600 h-full rounded-full w-[65%]"></div></div>
                        <span className="text-xs font-mono text-slate-400 dark:text-slate-500">65.0</span>
                     </div>
                     <div className="flex items-center gap-3">
                        <span className="text-xs text-slate-500 dark:text-slate-400 w-16">Secondary</span>
                        <div className="flex-1 h-1.5 bg-slate-100 dark:bg-slate-700/30 rounded-full overflow-hidden"><div className="bg-blue-600 h-full rounded-full w-[74%]"></div></div>
                        <span className="text-xs font-mono text-slate-400 dark:text-slate-500">74.1</span>
                     </div>
                  </div>
               </CardContent>
            </Card>
         </div>
      </div>
    </div>
  );
}

function BarChartIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg 
     {...props}
     xmlns="http://www.w3.org/2000/svg" 
     width="24" height="24" 
     viewBox="0 0 24 24" 
     fill="none" 
     stroke="currentColor" 
     strokeWidth="2" 
     strokeLinecap="round" 
     strokeLinejoin="round" 
    >
       <line x1="12" x2="12" y1="20" y2="10"/><line x1="18" x2="18" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="16"/>
    </svg>
  );
}
