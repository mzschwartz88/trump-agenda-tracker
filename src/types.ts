export interface Objective {
  id: string;
  category: string;
  title: string;
  description: string;
  keyResults: KeyResult[];
}

export interface KeyResult {
  id: string;
  title: string;
  status: 'not-started' | 'in-progress' | 'completed' | 'blocked';
  progress: number;
  details: string;
}

export type Category = 
  | 'immigration'
  | 'economy'
  | 'energy'
  | 'manufacturing'
  | 'rights'
  | 'security'
  | 'justice'
  | 'social'
  | 'education'
  | 'elections';</content></file>

<boltAction type="file" filePath="src/components/CategoryFilter.tsx">import React from 'react';
import { Category } from '../types';

interface CategoryFilterProps {
  selectedCategory: Category | 'all';
  onCategoryChange: (category: Category | 'all') => void;
}

export function CategoryFilter({ selectedCategory, onCategoryChange }: CategoryFilterProps) {
  const categories: { id: Category | 'all'; label: string }[] = [
    { id: 'all', label: 'All Objectives' },
    { id: 'immigration', label: 'Immigration' },
    { id: 'economy', label: 'Economy' },
    { id: 'energy', label: 'Energy' },
    { id: 'manufacturing', label: 'Manufacturing' },
    { id: 'rights', label: 'Rights & Freedom' },
    { id: 'security', label: 'Security' },
    { id: 'justice', label: 'Justice' },
    { id: 'social', label: 'Social Programs' },
    { id: 'education', label: 'Education' },
    { id: 'elections', label: 'Elections' }
  ];

  return (
    <div className="flex space-x-2 mb-8 overflow-x-auto pb-2 scrollbar-hide">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`
            px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap
            ${selectedCategory === category.id
              ? 'bg-red-600 text-white'
              : 'bg-white text-gray-700 hover:bg-gray-100'}
          `}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
}</content></file>

<boltAction type="file" filePath="src/data/objectives.ts">import { Objective } from '../types';

export const objectives: Objective[] = [
  {
    id: 'immigration-1',
    category: 'immigration',
    title: 'Seal the Border and Stop the Migrant Invasion',
    description: 'Secure the southern border and halt unauthorized entry into the United States',
    keyResults: [
      {
        id: 'immigration-1-kr1',
        title: 'Complete border wall construction',
        status: 'not-started',
        progress: 0,
        details: 'Finish and reinforce the physical barrier along the southern border'
      },
      {
        id: 'immigration-1-kr2',
        title: 'Implement enhanced border security measures',
        status: 'not-started',
        progress: 0,
        details: 'Deploy additional personnel and technology for border protection'
      }
    ]
  },
  {
    id: 'immigration-2',
    category: 'immigration',
    title: 'Largest Deportation Operation in American History',
    description: 'Execute comprehensive deportation of unauthorized individuals',
    keyResults: [
      {
        id: 'immigration-2-kr1',
        title: 'Establish deportation task force',
        status: 'not-started',
        progress: 0,
        details: 'Create specialized units for identification and removal operations'
      },
      {
        id: 'immigration-2-kr2',
        title: 'Execute systematic deportation plan',
        status: 'not-started',
        progress: 0,
        details: 'Implement large-scale removal operations'
      }
    ]
  },
  {
    id: 'economy-1',
    category: 'economy',
    title: 'End Inflation and Make America Affordable',
    description: 'Combat rising prices and restore economic stability',
    keyResults: [
      {
        id: 'economy-1-kr1',
        title: 'Implement anti-inflation measures',
        status: 'not-started',
        progress: 0,
        details: 'Policies to reduce inflation and stabilize prices'
      },
      {
        id: 'economy-1-kr2',
        title: 'Reduce cost of living',
        status: 'not-started',
        progress: 0,
        details: 'Programs to make essential goods and services more affordable'
      }
    ]
  },
  {
    id: 'energy-1',
    category: 'energy',
    title: 'Make America the Dominant Energy Producer',
    description: 'Establish U.S. leadership in global energy production',
    keyResults: [
      {
        id: 'energy-1-kr1',
        title: 'Expand domestic energy production',
        status: 'not-started',
        progress: 0,
        details: 'Increase oil, gas, and other energy resource development'
      },
      {
        id: 'energy-1-kr2',
        title: 'Remove energy production restrictions',
        status: 'not-started',
        progress: 0,
        details: 'Eliminate regulatory barriers to energy production'
      }
    ]
  },
  {
    id: 'manufacturing-1',
    category: 'manufacturing',
    title: 'Stop Outsourcing and Boost Manufacturing',
    description: 'Transform U.S. into a manufacturing superpower',
    keyResults: [
      {
        id: 'manufacturing-1-kr1',
        title: 'Implement manufacturing incentives',
        status: 'not-started',
        progress: 0,
        details: 'Create tax benefits and incentives for domestic manufacturing'
      },
      {
        id: 'manufacturing-1-kr2',
        title: 'Reduce foreign manufacturing dependence',
        status: 'not-started',
        progress: 0,
        details: 'Policies to bring manufacturing jobs back to America'
      }
    ]
  },
  {
    id: 'economy-2',
    category: 'economy',
    title: 'Tax Cuts for Workers',
    description: 'Implement tax cuts for workers and eliminate tax on tips',
    keyResults: [
      {
        id: 'economy-2-kr1',
        title: 'Pass worker tax cut legislation',
        status: 'not-started',
        progress: 0,
        details: 'Reduce tax burden on American workers'
      },
      {
        id: 'economy-2-kr2',
        title: 'Eliminate tip taxation',
        status: 'not-started',
        progress: 0,
        details: 'Remove all taxes on tips for service workers'
      }
    ]
  },
  {
    id: 'rights-1',
    category: 'rights',
    title: 'Defend Constitutional Rights',
    description: 'Protect fundamental freedoms including speech, religion, and arms',
    keyResults: [
      {
        id: 'rights-1-kr1',
        title: 'Strengthen First Amendment protections',
        status: 'not-started',
        progress: 0,
        details: 'Enhanced protection for speech and religious freedom'
      },
      {
        id: 'rights-1-kr2',
        title: 'Protect Second Amendment rights',
        status: 'not-started',
        progress: 0,
        details: 'Safeguard right to keep and bear arms'
      }
    ]
  },
  {
    id: 'security-1',
    category: 'security',
    title: 'Prevent World War Three',
    description: 'Restore peace and build missile defense shield',
    keyResults: [
      {
        id: 'security-1-kr1',
        title: 'Implement peace initiatives',
        status: 'not-started',
        progress: 0,
        details: 'Diplomatic efforts in Europe and Middle East'
      },
      {
        id: 'security-1-kr2',
        title: 'Build Iron Dome shield',
        status: 'not-started',
        progress: 0,
        details: 'Develop comprehensive missile defense system'
      }
    ]
  },
  {
    id: 'justice-1',
    category: 'justice',
    title: 'End Government Weaponization',
    description: 'Stop weaponization of government against American people',
    keyResults: [
      {
        id: 'justice-1-kr1',
        title: 'Reform federal agencies',
        status: 'not-started',
        progress: 0,
        details: 'Restructure and reform government agencies'
      },
      {
        id: 'justice-1-kr2',
        title: 'Implement oversight measures',
        status: 'not-started',
        progress: 0,
        details: 'Create new accountability systems'
      }
    ]
  },
  {
    id: 'justice-2',
    category: 'justice',
    title: 'Stop Migrant Crime Epidemic',
    description: 'Combat crime, cartels, and gang violence',
    keyResults: [
      {
        id: 'justice-2-kr1',
        title: 'Dismantle drug cartels',
        status: 'not-started',
        progress: 0,
        details: 'Operations against foreign drug cartels'
      },
      {
        id: 'justice-2-kr2',
        title: 'Enhanced criminal prosecution',
        status: 'not-started',
        progress: 0,
        details: 'Strengthen prosecution of violent offenders'
      }
    ]
  },
  {
    id: 'security-2',
    category: 'security',
    title: 'Rebuild American Cities',
    description: 'Make cities safe, clean, and beautiful again',
    keyResults: [
      {
        id: 'security-2-kr1',
        title: 'Urban renewal programs',
        status: 'not-started',
        progress: 0,
        details: 'Comprehensive city improvement initiatives'
      },
      {
        id: 'security-2-kr2',
        title: 'DC restoration project',
        status: 'not-started',
        progress: 0,
        details: 'Special focus on Washington DC renovation'
      }
    ]
  },
  {
    id: 'security-3',
    category: 'security',
    title: 'Strengthen Military',
    description: 'Make U.S. military the strongest and most powerful',
    keyResults: [
      {
        id: 'security-3-kr1',
        title: 'Military modernization',
        status: 'not-started',
        progress: 0,
        details: 'Update and enhance military capabilities'
      },
      {
        id: 'security-3-kr2',
        title: 'Force readiness improvement',
        status: 'not-started',
        progress: 0,
        details: 'Enhance training and preparedness'
      }
    ]
  },
  {
    id: 'economy-3',
    category: 'economy',
    title: 'Protect U.S. Dollar Status',
    description: 'Maintain U.S. dollar as world reserve currency',
    keyResults: [
      {
        id: 'economy-3-kr1',
        title: 'Strengthen dollar position',
        status: 'not-started',
        progress: 0,
        details: 'Policies to maintain dollar dominance'
      },
      {
        id: 'economy-3-kr2',
        title: 'International monetary leadership',
        status: 'not-started',
        progress: 0,
        details: 'Enhance global financial position'
      }
    ]
  },
  {
    id: 'social-1',
    category: 'social',
    title: 'Protect Social Security and Medicare',
    description: 'Maintain benefits with no cuts or age changes',
    keyResults: [
      {
        id: 'social-1-kr1',
        title: 'Preserve current benefits',
        status: 'not-started',
        progress: 0,
        details: 'Maintain existing benefit levels'
      },
      {
        id: 'social-1-kr2',
        title: 'Strengthen program funding',
        status: 'not-started',
        progress: 0,
        details: 'Ensure long-term financial stability'
      }
    ]
  },
  {
    id: 'energy-2',
    category: 'energy',
    title: 'Cancel EV Mandate',
    description: 'End electric vehicle mandate and reduce regulations',
    keyResults: [
      {
        id: 'energy-2-kr1',
        title: 'Reverse EV requirements',
        status: 'not-started',
        progress: 0,
        details: 'Cancel electric vehicle mandates'
      },
      {
        id: 'energy-2-kr2',
        title: 'Reduce regulations',
        status: 'not-started',
        progress: 0,
        details: 'Cut costly business regulations'
      }
    ]
  },
  {
    id: 'education-1',
    category: 'education',
    title: 'Cut Funding for Critical Race Theory',
    description: 'Remove inappropriate content from schools',
    keyResults: [
      {
        id: 'education-1-kr1',
        title: 'Defund CRT programs',
        status: 'not-started',
        progress: 0,
        details: 'Remove funding for critical race theory'
      },
      {
        id: 'education-1-kr2',
        title: 'Curriculum oversight',
        status: 'not-started',
        progress: 0,
        details: 'Review and restrict inappropriate content'
      }
    ]
  },
  {
    id: 'rights-2',
    category: 'rights',
    title: 'Keep Men Out of Women\'s Sports',
    description: 'Protect women\'s sports competitions',
    keyResults: [
      {
        id: 'rights-2-kr1',
        title: 'Sports participation rules',
        status: 'not-started',
        progress: 0,
        details: 'Establish clear gender-based participation guidelines'
      },
      {
        id: 'rights-2-kr2',
        title: 'Enforcement mechanisms',
        status: 'not-started',
        progress: 0,
        details: 'Implement compliance monitoring system'
      }
    ]
  },
  {
    id: 'education-2',
    category: 'education',
    title: 'Deport Pro-Hamas Radicals',
    description: 'Make college campuses safe and patriotic',
    keyResults: [
      {
        id: 'education-2-kr1',
        title: 'Campus safety measures',
        status: 'not-started',
        progress: 0,
        details: 'Enhance security on college campuses'
      },
      {
        id: 'education-2-kr2',
        title: 'Deportation program',
        status: 'not-started',
        progress: 0,
        details: 'Remove radical elements from campuses'
      }
    ]
  },
  {
    id: 'elections-1',
    category: 'elections',
    title: 'Secure Elections',
    description: 'Implement comprehensive election security measures',
    keyResults: [
      {
        id: 'elections-1-kr1',
        title: 'Voting reform implementation',
        status: 'not-started',
        progress: 0,
        details: 'Same-day voting and voter ID requirements'
      },
      {
        id: 'elections-1-kr2',
        title: 'Paper ballot system',
        status: 'not-started',
        progress: 0,
        details: 'Implement paper ballots and citizenship verification'
      }
    ]
  },
  {
    id: 'unity-1',
    category: 'social',
    title: 'Unite Our Country',
    description: 'Achieve new and record levels of success',
    keyResults: [
      {
        id: 'unity-1-kr1',
        title: 'Economic achievement goals',
        status: 'not-started',
        progress: 0,
        details: 'Set and achieve new economic records'
      },
      {
        id: 'unity-1-kr2',
        title: 'National unity initiatives',
        status: 'not-started',
        progress: 0,
        details: 'Programs to foster national unity'
      }
    ]
  }
];</content></file>

<boltAction type="start">
<command>npm run dev</command>