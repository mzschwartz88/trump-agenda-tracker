import React from 'react';
import { GanttChart } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <GanttChart className="h-8 w-8 text-red-600" />
            <h1 className="ml-3 text-2xl font-bold text-gray-900">
              Trump Agenda Tracker
            </h1>
          </div>
          <div className="text-sm text-gray-500">
            Last updated: {new Date().toLocaleDateString()}
          </div>
        </div>
        <p className="mt-2 text-sm text-gray-600">
          Tracking progress on Donald Trump's 2024 campaign platform promises
        </p>
      </div>
    </header>
  );
}