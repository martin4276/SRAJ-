import React from 'react';
import { Video, FileText } from 'lucide-react';
import './ResourceCard.scss';

interface ResourceCardProps {
  resource: {
    id: number;
    title: string;
    description: string;
    category: string;
    type: 'article' | 'video';
    imageUrl: string;
  };
}

const ResourceCard: React.FC<ResourceCardProps> = ({ resource }) => {
  const { title, description, type, imageUrl } = resource;

  return (
    <div className="resource-card">
      <div className="resource-image" style={{ backgroundImage: `url(${imageUrl})` }}>
        <div className="resource-type">
          {type === 'video' ? (
            <Video size={16} className="me-1" />
          ) : (
            <FileText size={16} className="me-1" />
          )}
          {type === 'video' ? 'Vidéo' : 'Article'}
        </div>
      </div>
      <div className="resource-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <button className="btn btn-primary-custom">
          {type === 'video' ? 'Regarder' : 'Lire'}
        </button>
      </div>
    </div>
  );
};

export default ResourceCard;