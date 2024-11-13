import React from 'react';
import { Category } from '../types';

interface CategoryFilterProps {
  selectedCategory: Category | 'all';
  onCategoryChange: (category: Category | 'all') => void;
}

export function CategoryFilter({ selectedCategory, onCategoryChange }: CategoryFilterProps) {
  const categories: { id: Category | 'all'; label: string }[] = [
    { id: 'all', label: 'All Objectives' },
    { id: 'economy', label: 'Economy' },
    { id: 'immigration', label: 'Immigration' },
    { id: 'foreign-policy', label: 'Foreign Policy' },
    { id: 'domestic-policy', label: 'Domestic Policy' }
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
}