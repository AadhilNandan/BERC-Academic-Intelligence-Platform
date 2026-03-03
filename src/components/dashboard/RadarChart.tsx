"use client";

import { ResponsiveContainer, RadarChart as RechartsRadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Tooltip } from 'recharts';

interface RadarChartProps {
  data: { subject: string; A: number; fullMark: number }[];
}

export function RadarChart({ data }: RadarChartProps) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <RechartsRadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
        <PolarGrid gridType="polygon" />
        <PolarAngleAxis dataKey="subject" tick={{ fill: 'currentColor', fontSize: 12 }} />
        <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
        <Radar
          name="Student"
          dataKey="A"
          stroke="var(--color-primary)"
          fill="var(--color-primary)"
          fillOpacity={0.4}
        />
        <Tooltip
          contentStyle={{ backgroundColor: 'var(--color-card)', borderColor: 'var(--color-border)', color: 'var(--color-foreground)' }}
          itemStyle={{ color: 'var(--color-foreground)' }}
        />
      </RechartsRadarChart>
    </ResponsiveContainer>
  );
}
