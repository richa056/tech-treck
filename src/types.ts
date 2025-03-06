export interface Question {
  id: string;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  description: string;
  timeEstimate: number; // in minutes
  category: string;
  sampleInput?: string;
  sampleOutput?: string;
}

export interface ExamConfig {
  duration: number; // in minutes
  difficulty: 'Easy' | 'Medium' | 'Hard';
  questionsCount: number;
}

export interface Timer {
  minutes: number;
  seconds: number;
}