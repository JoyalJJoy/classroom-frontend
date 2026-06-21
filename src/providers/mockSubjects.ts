import { BaseRecord } from "@refinedev/core";

export const mockSubjects: BaseRecord[] = [
  {
    id: 1,
    code: 'CS101',
    name: 'Introduction to Computer Science',
    department: 'Computer Science',
    description: 'Fundamentals of programming, problem solving, algorithms, and an introduction to computer systems.',
    createdAt: '2024-08-01T09:00:00.000Z'
  },
  {
    id: 2,
    code: 'MATH201',
    name: 'Calculus II',
    department: 'Mathematics',
    description: 'Continuation of single-variable calculus covering techniques of integration, infinite series, and polar coordinates.',
    createdAt: '2024-08-02T09:00:00.000Z'
  },
  {
    id: 3,
    code: 'ENG305',
    name: 'Academic Writing and Research',
    department: 'English',
    description: 'Advanced academic composition, research methods, citation practices, and critical analysis of scholarly texts.',
    createdAt: '2024-08-03T09:00:00.000Z'
  }
];
