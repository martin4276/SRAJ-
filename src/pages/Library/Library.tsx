import React, { useState } from 'react';
import { Search, BookOpen, Video, FileText, Award } from 'lucide-react';
import ResourceCard from '../../components/Library/ResourceCard';
import CategoryFilter from '../../components/Library/CategoryFilter';
import SearchBar from '../../components/Library/SearchBar';
import './Library.scss';

interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
}

interface Resource {
  id: number;
  title: string;
  description: string;
  category: string;
  type: 'article' | 'video';
  imageUrl: string;
}

const categories: Category[] = [
  { id: 'contraception', name: 'Contraception', icon: <Award size={20} /> },
  { id: 'puberty', name: 'Puberté', icon: <BookOpen size={20} /> },
  { id: 'sti', name: 'IST et dépistage', icon: <FileText size={20} /> },
  { id: 'relationships', name: 'Relations saines', icon: <Video size={20} /> },
];

const resources: Resource[] = [
  {
    id: 1,
    title: 'Guide complet de la contraception',
    description: 'Découvrez les différentes méthodes contraceptives disponibles.',
    category: 'contraception',
    type: 'article',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=500',
  },
  {
    id: 2,
    title: 'Comprendre la puberté',
    description: "Les changements physiques et émotionnels pendant l'adolescence.",
    category: 'puberty',
    type: 'video',
    imageUrl: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=500',
  },
  {
    id: 3,
    title: 'Guide des IST',
    description: 'Informations essentielles sur la prévention et le dépistage.',
    category: 'sti',
    type: 'article',
    imageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=500',
  },
  {
    id: 4,
    title: 'Relations saines',
    description: 'Comment construire et maintenir des relations respectueuses.',
    category: 'relationships',
    type: 'video',
    imageUrl: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=500',
  },
];

const Library: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredResources = resources.filter(resource => {
    const matchesCategory = !selectedCategory || resource.category === selectedCategory;
    const matchesSearch = !searchQuery || 
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="library-page">
      <div className="library-header">
        <h1>Bibliothèque éducative</h1>
        <p>Explorez nos ressources sur la santé reproductive</p>
        <SearchBar onSearch={setSearchQuery} />
      </div>

      <CategoryFilter 
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      <div className="resources-grid">
        {filteredResources.map(resource => (
          <ResourceCard key={resource.id} resource={resource} />
        ))}
      </div>
    </div>
  );
};

export default Library;