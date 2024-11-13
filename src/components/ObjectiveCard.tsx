import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Objective } from '../types';
import { ProgressBar } from './ProgressBar';

interface ObjectiveCardProps {
  objective: Objective;
}

export function ObjectiveCard({ objective }: ObjectiveCardProps) {
  const [isExpanded, setIsExpanded] = React.useState(false);
  
  const averageProgress = objective.keyResults.reduce((acc, kr) => acc + kr.progress, 0) / objective.keyResults.length;

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4">
      <div 
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900">{objective.title}</h3>
          <p className="text-gray-600 mt-1">{objective.description}</p>
          <div className="mt-4">
            <ProgressBar progress={averageProgress} status="in-progress" />
          </div>
        </div>
        {isExpanded ? (
          <ChevronUp className="w-6 h-6 text-gray-500" />
        ) : (
          <ChevronDown className="w-6 h-6 text-gray-500" />
        )}
      </div>
      
      {isExpanded && (
        <div className="mt-6 space-y-4">
          {objective.keyResults.map((kr) => (
            <div key={kr.id} className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-semibold text-gray-800">{kr.title}</h4>
              <p className="text-sm text-gray-600 mt-1">{kr.details}</p>
              <div className="flex items-center mt-2">
                <span className={`
                  inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                  ${kr.status === 'completed' ? 'bg-green-100 text-green-800' :
                    kr.status === 'in-progress' ? 'bg-blue-100 text-blue-800' :
                    kr.status === 'blocked' ? 'bg-red-100 text-red-800' :
                    'bg-gray-100 text-gray-800'}
                `}>
                  {kr.status}
                </span>
                <div className="ml-4 flex-1">
                  <ProgressBar progress={kr.progress} status={kr.status} />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}