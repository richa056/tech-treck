import React from 'react';
import { Question } from '../types';

interface Props {
  question: Question;
}

export default function QuestionDisplay({ question }: Props) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">{question.title}</h2>
        <span className={`px-3 py-1 rounded-full text-sm font-medium
          ${question.difficulty === 'Easy' ? 'bg-green-100 text-green-800' : 
            question.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' : 
            'bg-red-100 text-red-800'}`}>
          {question.difficulty}
        </span>
      </div>

      <div className="prose max-w-none">
        <p>{question.description}</p>
      </div>

      {(question.sampleInput || question.sampleOutput) && (
        <div className="space-y-2">
          {question.sampleInput && (
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="font-medium text-sm text-gray-700">Sample Input:</p>
              <pre className="mt-1 text-sm text-gray-600">{question.sampleInput}</pre>
            </div>
          )}
          {question.sampleOutput && (
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="font-medium text-sm text-gray-700">Sample Output:</p>
              <pre className="mt-1 text-sm text-gray-600">{question.sampleOutput}</pre>
            </div>
          )}
        </div>
      )}
    </div>
  );
}