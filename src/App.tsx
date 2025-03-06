import React, { useState, useEffect } from 'react';
import { Brain } from 'lucide-react';
import ExamConfig from './components/ExamConfig';
import Timer from './components/Timer';
import CodeEditor from './components/CodeEditor';
import QuestionDisplay from './components/QuestionDisplay';
import { mockQuestions } from './mockData';
import type { ExamConfig as ExamConfigType, Timer as TimerType, Question } from './types';

function App() {
  const [examStarted, setExamStarted] = useState(false);
  const [config, setConfig] = useState<ExamConfigType>({
    duration: 60,
    difficulty: 'Medium',
    questionsCount: 2
  });
  const [timer, setTimer] = useState<TimerType>({ minutes: 0, seconds: 0 });
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [code, setCode] = useState('');

  useEffect(() => {
    if (examStarted) {
      // Filter questions by difficulty and take required number
      const filteredQuestions = mockQuestions
        .filter(q => q.difficulty === config.difficulty)
        .slice(0, config.questionsCount);
      setQuestions(filteredQuestions);
      setTimer({ minutes: config.duration, seconds: 0 });
    }
  }, [examStarted, config]);

  useEffect(() => {
    let interval: number;
    if (examStarted && (timer.minutes > 0 || timer.seconds > 0)) {
      interval = setInterval(() => {
        setTimer(prev => {
          if (prev.seconds === 0) {
            return { minutes: prev.minutes - 1, seconds: 59 };
          }
          return { ...prev, seconds: prev.seconds - 1 };
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [examStarted, timer]);

  const handleStartExam = () => {
    setExamStarted(true);
  };

  const handleTimeEnd = () => {
    // Handle exam completion
    alert('Time\'s up! Exam completed.');
    setExamStarted(false);
  };

  if (!examStarted) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <Brain className="w-12 h-12 text-indigo-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">DSA Practice Platform</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Customize your practice session and enhance your problem-solving skills with our intelligent question curation system.
            </p>
          </div>
          
          <ExamConfig
            config={config}
            onConfigChange={setConfig}
            onStartExam={handleStartExam}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Brain className="w-6 h-6 text-indigo-600" />
            <h1 className="text-xl font-bold text-gray-900">DSA Practice</h1>
          </div>
          <Timer time={timer} onTimeEnd={handleTimeEnd} />
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            {questions[currentQuestionIndex] && (
              <QuestionDisplay question={questions[currentQuestionIndex]} />
            )}
            
            <div className="flex justify-between">
              <button
                onClick={() => setCurrentQuestionIndex(i => Math.max(0, i - 1))}
                disabled={currentQuestionIndex === 0}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50"
              >
                Previous
              </button>
              <button
                onClick={() => setCurrentQuestionIndex(i => Math.min(questions.length - 1, i + 1))}
                disabled={currentQuestionIndex === questions.length - 1}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-4">
            <CodeEditor code={code} onChange={setCode} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;