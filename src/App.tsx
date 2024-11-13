import React from 'react';
import { objectives } from './data/objectives';
import { Category } from './types';
import { Header } from './components/Header';
import { CategoryFilter } from './components/CategoryFilter';
import { ObjectiveCard } from './components/ObjectiveCard';

function App() {
  const [selectedCategory, setSelectedCategory] = React.useState<Category | 'all'>('all');

  const filteredObjectives = objectives.filter(
    obj => selectedCategory === 'all' || obj.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <CategoryFilter 
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        <div className="grid gap-6 md:grid-cols-2">
          {filteredObjectives.map((objective) => (
            <ObjectiveCard key={objective.id} objective={objective} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;