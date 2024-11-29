import React from 'react';
import { Search } from 'lucide-react';
import './SearchBar.scss';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  return (
    <div className="search-bar">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Rechercher dans la bibliothèque..."
          onChange={(e) => onSearch(e.target.value)}
        />
        <button className="btn btn-primary-custom">
          <Search size={20} />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;