import { Question } from './types';

export const mockQuestions: Question[] = [
  {
    id: '1',
    title: 'Two Sum',
    difficulty: 'Easy',
    description: 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.',
    timeEstimate: 15,
    category: 'Arrays',
    sampleInput: '[2,7,11,15], target = 9',
    sampleOutput: '[0,1]'
  },
  {
    id: '2',
    title: 'Merge Sort Implementation',
    difficulty: 'Medium',
    description: 'Implement the merge sort algorithm to sort an array of integers in ascending order.',
    timeEstimate: 25,
    category: 'Sorting',
    sampleInput: '[64, 34, 25, 12, 22, 11, 90]',
    sampleOutput: '[11, 12, 22, 25, 34, 64, 90]'
  },
  {
    id: '3',
    title: 'LRU Cache',
    difficulty: 'Hard',
    description: 'Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.',
    timeEstimate: 35,
    category: 'Design',
    sampleInput: 'LRUCache cache = new LRUCache(2); cache.put(1, 1);',
    sampleOutput: 'cache.get(1) returns 1'
  }
];