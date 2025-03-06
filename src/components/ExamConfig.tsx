import React from 'react';
import { Settings, Clock, BarChart2 } from 'lucide-react';
import type { ExamConfig } from '../types';

interface Props {
  config: ExamConfig;
  onConfigChange: (config: ExamConfig) => void;
  onStartExam: () => void;
}

export default function ExamConfig({ config, onConfigChange, onStartExam }: Props) {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      <div className="flex items-center gap-2 mb-6">
        <Settings className="w-6 h-6 text-indigo-600" />
        <h2 className="text-2xl font-bold text-gray-800">Exam Configuration</h2>
      </div>

      <div className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <Clock className="w-5 h-5 text-gray-600" />
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">Duration (minutes)</label>
              <select
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={config.duration}
                onChange={(e) => onConfigChange({ ...config, duration: Number(e.target.value) })}
              >
                <option value={30}>30 minutes</option>
                <option value={60}>60 minutes</option>
                <option value={90}>90 minutes</option>
                <option value={120}>120 minutes</option>
              </select>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <BarChart2 className="w-5 h-5 text-gray-600" />
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">Difficulty Level</label>
              <select
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={config.difficulty}
                onChange={(e) => onConfigChange({ ...config, difficulty: e.target.value as ExamConfig['difficulty'] })}
              >
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-5 h-5 flex items-center justify-center text-gray-600">#</div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">Number of Questions</label>
              <select
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={config.questionsCount}
                onChange={(e) => onConfigChange({ ...config, questionsCount: Number(e.target.value) })}
              >
                <option value={1}>1 question</option>
                <option value={2}>2 questions</option>
                <option value={3}>3 questions</option>
                <option value={5}>5 questions</option>
              </select>
            </div>
          </div>
        </div>

        <button
          onClick={onStartExam}
          className="w-full py-3 px-4 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
        >
          Start Practice Exam
        </button>
      </div>
    </div>
  );
}