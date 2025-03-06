import React, { useEffect } from 'react';
import { Timer as TimerType } from '../types';
import { Clock } from 'lucide-react';

interface Props {
  time: TimerType;
  onTimeEnd: () => void;
}

export default function Timer({ time, onTimeEnd }: Props) {
  useEffect(() => {
    if (time.minutes === 0 && time.seconds === 0) {
      onTimeEnd();
    }
  }, [time, onTimeEnd]);

  return (
    <div className="flex items-center gap-2 text-lg font-semibold">
      <Clock className="w-5 h-5" />
      <span>
        {String(time.minutes).padStart(2, '0')}:{String(time.seconds).padStart(2, '0')}
      </span>
    </div>
  );
}