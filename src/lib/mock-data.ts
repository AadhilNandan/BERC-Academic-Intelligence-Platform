export type DiagnosisStatus = 'Stable' | 'Needs Intervention' | 'Advanced Potential';
export type SkillTier = 'Bronze' | 'Silver' | 'Gold' | 'Expert';
export type Stage = 'Foundation' | 'Middle' | 'Secondary';

export interface CognitiveMetrics {
  criticalThinking: number;
  problemSolving: number;
  technicalApplication: number;
  questionComplexity: number;
  analyticalAdaptability: number;
}

export interface StudentProfile {
  id: string;
  name: string;
  stage: Stage;
  skillTier: SkillTier;
  skillIndex: number;
  diagnosisStatus: DiagnosisStatus;
  researchFlag: boolean;
  lastEvaluation: string;
  researchPermitId?: string;
  cognitiveMetrics: CognitiveMetrics;
  socioEmotional: {
    collaboration: number;
    leadership: number;
    communication: number;
    notes: string;
  };
  industryExposure: {
    activeIPC: number;
    employabilityReadiness: number;
    verifiedLogs: number;
  };
}

export const mockStudents: StudentProfile[] = [
  {
    id: "BRC-2026-0492",
    name: "Aarav Nair",
    stage: "Secondary",
    skillTier: "Expert",
    skillIndex: 94,
    diagnosisStatus: "Advanced Potential",
    researchFlag: false,
    lastEvaluation: "2026-02-28",
    researchPermitId: "RES-P-884",
    cognitiveMetrics: {
      criticalThinking: 95,
      problemSolving: 92,
      technicalApplication: 88,
      questionComplexity: 96,
      analyticalAdaptability: 90,
    },
    socioEmotional: {
      collaboration: 85,
      leadership: 92,
      communication: 88,
      notes: "Displays highly advanced architectural thinking in group settings. Can struggle with patience when collaborating with Foundation stage peers.",
    },
    industryExposure: {
      activeIPC: 3,
      employabilityReadiness: 91,
      verifiedLogs: 120,
    }
  },
  {
    id: "BRC-2026-0511",
    name: "Meera Krishnan",
    stage: "Middle",
    skillTier: "Silver",
    skillIndex: 68,
    diagnosisStatus: "Needs Intervention",
    researchFlag: true,
    lastEvaluation: "2026-03-01",
    cognitiveMetrics: {
      criticalThinking: 65,
      problemSolving: 60,
      technicalApplication: 72,
      questionComplexity: 58,
      analyticalAdaptability: 62,
    },
    socioEmotional: {
      collaboration: 70,
      leadership: 65,
      communication: 68,
      notes: "Observation: Exhibits fatigue during advanced pattern recognition tasks. Intervention recommended for cognitive pacing.",
    },
    industryExposure: {
      activeIPC: 1,
      employabilityReadiness: 62,
      verifiedLogs: 45,
    }
  },
  {
    id: "BRC-2026-0883",
    name: "Rohan Varma",
    stage: "Foundation",
    skillTier: "Gold",
    skillIndex: 82,
    diagnosisStatus: "Stable",
    researchFlag: false,
    lastEvaluation: "2026-02-15",
    researchPermitId: "RES-P-102",
    cognitiveMetrics: {
      criticalThinking: 80,
      problemSolving: 85,
      technicalApplication: 78,
      questionComplexity: 82,
      analyticalAdaptability: 84,
    },
    socioEmotional: {
      collaboration: 88,
      leadership: 75,
      communication: 82,
      notes: "Steady and methodical. Exceptional retention of complex visual data sets.",
    },
    industryExposure: {
      activeIPC: 2,
      employabilityReadiness: 78,
      verifiedLogs: 80,
    }
  }
];

export const teacherProfile = {
  name: "Dr. Vidya Menon",
  id: "BRC-T-491",
  department: "Department of Cognitive Science",
  totalAssigned: 142,
  averageSkillIndex: 78.4,
  alerts: 3,
};
