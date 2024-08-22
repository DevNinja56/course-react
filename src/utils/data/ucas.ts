import { QualificationData } from '@/types';

export const UCAS_DATA: QualificationData[] = [
    {
        name: 'A-Level',
        group: 'A-Level',
        grades: [
            { grade: 'A*', score: '56' },
            { grade: 'A', score: '48' },
            { grade: 'B', score: '40' },
            { grade: 'C', score: '32' },
            { grade: 'D', score: '24' },
            { grade: 'E', score: '16' }
        ]
    },
    {
        name: 'AS-Level',
        group: 'A-Level',
        grades: [
            { grade: 'A', score: '20' },
            { grade: 'B', score: '16' },
            { grade: 'C', score: '12' },
            { grade: 'D', score: '8' },
            { grade: 'E', score: '4' }
        ]
    },
    {
        name: 'A-Level Double Award',
        group: 'A-Level Double Award',
        grades: [
            { grade: 'A*A*', score: '112' },
            { grade: 'A*A', score: '104' },
            { grade: 'AA', score: '96' },
            { grade: 'AB', score: '88' },
            { grade: 'BB', score: '80' },
            { grade: 'BC', score: '72' },
            { grade: 'CC', score: '64' },
            { grade: 'CD', score: '56' },
            { grade: 'DD', score: '48' },
            { grade: 'DE', score: '40' },
            { grade: 'EE', score: '32' }
        ]
    },
    {
        name: 'AS-Level Double Award',
        group: 'A-Level Double Award',
        grades: [
            { grade: 'AA', score: '40' },
            { grade: 'AB', score: '36' },
            { grade: 'BB', score: '32' },
            { grade: 'BC', score: '28' },
            { grade: 'CC', score: '24' },
            { grade: 'CD', score: '22' },
            { grade: 'DD', score: '20' },
            { grade: 'DE', score: '16' },
            { grade: 'EE', score: '12' }
        ]
    }
];
