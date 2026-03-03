"use client";

import { use } from "react";
import { useRouter } from "next/navigation";
import { mockStudents } from "@/lib/mock-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { RadarChart } from "@/components/dashboard/RadarChart";
import { ArrowLeft, Brain, Users, Microscope, Briefcase, Printer } from "lucide-react";

export default function StudentDiagnosisPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const router = useRouter();
  const student = mockStudents.find((s) => s.id === resolvedParams.id) || mockStudents[0];

  const cognitiveData = [
    { subject: "Critical Thinking", A: student.cognitiveMetrics.criticalThinking, fullMark: 100 },
    { subject: "Problem Solving", A: student.cognitiveMetrics.problemSolving, fullMark: 100 },
    { subject: "Tech Application", A: student.cognitiveMetrics.technicalApplication, fullMark: 100 },
    { subject: "Complexity Index", A: student.cognitiveMetrics.questionComplexity, fullMark: 100 },
    { subject: "Adaptability", A: student.cognitiveMetrics.analyticalAdaptability, fullMark: 100 },
  ];

  return (
    <div className="space-y-6 max-w-6xl mx-auto pb-12">
      <div className="flex items-center justify-between">
        <Button variant="ghost" size="sm" onClick={() => router.back()} className="gap-2">
          <ArrowLeft className="h-4 w-4" /> Back to Roster
        </Button>
        <Button variant="outline" size="sm" className="gap-2 text-muted-foreground hidden sm:flex">
          <Printer className="h-4 w-4" /> Print PDF Report
        </Button>
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border pb-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">{student.name}</h2>
          <div className="flex items-center gap-3 mt-2 text-muted-foreground font-mono">
            <span>{student.id}</span>
            <span className="h-4 w-px bg-border"></span>
            <span>Last Evaluated: {student.lastEvaluation}</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="text-sm px-3 py-1">{student.stage} Stage</Badge>
          <Badge variant="secondary" className="text-sm px-3 py-1">{student.skillTier} Tier</Badge>
          <Badge variant="default" className="text-sm px-3 py-1 bg-primary">{student.diagnosisStatus}</Badge>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader className="flex flex-row items-center gap-2 pb-2">
              <Brain className="h-5 w-5 text-primary" />
              <CardTitle>Cognitive Diagnosis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <RadarChart data={cognitiveData} />
                <div className="space-y-4">
                  <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">Analytical Notes</h4>
                  <p className="text-sm leading-relaxed border-l-2 border-primary/20 pl-4 py-1">
                    Student displays a highly articulated spread across problem-solving logic pathways.
                    The variance between theoretical reasoning and application is nominal, indicating highly stable translation of concepts.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-border">
                    <div className="bg-slate-50 dark:bg-slate-900/50 p-3 rounded-md">
                      <div className="text-xs text-muted-foreground uppercase">Skill Index</div>
                      <div className="text-xl font-bold text-primary mt-1">{student.skillIndex}</div>
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-900/50 p-3 rounded-md">
                      <div className="text-xs text-muted-foreground uppercase">Risk Level</div>
                      <div className="text-xl font-bold text-green-600 mt-1">Minimal</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center gap-2 pb-2">
              <Users className="h-5 w-5 text-blue-500" />
              <CardTitle>Socio-Emotional Profile</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-muted/40 p-4 rounded-lg border border-border/50 text-center">
                  <div className="text-3xl font-bold text-foreground mb-1">{student.socioEmotional.collaboration}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide">Collaboration<br/>Consistency</div>
                </div>
                <div className="bg-muted/40 p-4 rounded-lg border border-border/50 text-center">
                  <div className="text-3xl font-bold text-foreground mb-1">{student.socioEmotional.leadership}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide">Leadership<br/>Initiative</div>
                </div>
                <div className="bg-muted/40 p-4 rounded-lg border border-border/50 text-center">
                  <div className="text-3xl font-bold text-foreground mb-1">{student.socioEmotional.communication}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide">Communication<br/>Clarity</div>
                </div>
              </div>
              <div className="bg-blue-50/50 dark:bg-blue-950/20 p-4 rounded-lg border border-blue-100 dark:border-blue-900/50">
                <h4 className="font-semibold text-sm mb-2 text-blue-800 dark:text-blue-300">Behavioral Observation Log</h4>
                <p className="text-sm text-blue-900/80 dark:text-blue-200/80">{student.socioEmotional.notes}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="bg-slate-900 text-slate-50 border-slate-800">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <Microscope className="h-5 w-5 text-blue-400" />
                Research Integration
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {student.researchPermitId ? (
                <div className="bg-slate-950/50 p-3 rounded border border-slate-800">
                  <div className="text-xs text-slate-400 uppercase">Permit ID</div>
                  <div className="font-mono text-blue-300 mt-1">{student.researchPermitId}</div>
                </div>
              ) : (
                <div className="text-sm text-slate-400 italic">No active research permit.</div>
              )}
              <div className="flex justify-between items-center py-2 border-b border-slate-800">
                <span className="text-sm text-slate-400">Lab Hours Logged</span>
                <span className="font-semibold">{student.industryExposure.verifiedLogs}h</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-800">
                <span className="text-sm text-slate-400">Project Completion</span>
                <span className="font-semibold">94%</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-sm text-slate-400">Innovation Score</span>
                <span className="font-semibold">A+</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2 text-foreground">
                <Briefcase className="h-5 w-5 text-emerald-600" />
                Industry Alignment
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="text-sm">Active IPC Projects</div>
                <Badge variant="outline">{student.industryExposure.activeIPC}</Badge>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-sm">Employability Index</div>
                <div className="font-bold text-emerald-600">{student.industryExposure.employabilityReadiness}</div>
              </div>
            </CardContent>
          </Card>

          <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full -mr-8 -mt-8" />
            <h3 className="font-semibold text-lg text-primary mb-4 relative z-10">BERC Recommendation Engine</h3>
            <ul className="space-y-3 relative z-10">
              <li className="text-sm flex items-start gap-2">
                <div className="h-5 w-5 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs mt-0.5 shrink-0">1</div>
                <span>Advanced Track alignment for Cognitive Architecture modules.</span>
              </li>
              <li className="text-sm flex items-start gap-2">
                <div className="h-5 w-5 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs mt-0.5 shrink-0">2</div>
                <span>Slight intervention recommended for inter-stage collaboration events.</span>
              </li>
              <li className="text-sm flex items-start gap-2">
                <div className="h-5 w-5 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs mt-0.5 shrink-0">3</div>
                <span>Candidate for accelerated industry placement next quartile.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
