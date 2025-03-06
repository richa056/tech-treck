import React from 'react';

interface Props {
  code: string;
  onChange: (code: string) => void;
}

export default function CodeEditor({ code, onChange }: Props) {
  return (
    <div className="h-full">
      <textarea
        value={code}
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-full min-h-[400px] font-mono text-sm p-4 bg-gray-900 text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        placeholder="Write your solution here..."
      />
    </div>
  );
}