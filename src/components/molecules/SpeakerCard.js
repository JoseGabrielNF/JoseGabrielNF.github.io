import React from 'react';
import Card from '../atoms/Card';

const SpeakerCard = ({ 
  name, 
  title, 
  institution, 
  description, 
  image,
  className = '' 
}) => {
  return (
    <Card variant="speaker" hover={true} className={className}>
      <div className="relative">
        <img 
          src={image || "https://randomuser.me/api/portraits/women/65.jpg"} 
          alt={name} 
          className="w-full h-64 object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
          <h3 className="text-white font-bold text-xl">{name}</h3>
          <p className="text-yellow-300">{title}</p>
          {institution && (
            <p className="text-gray-200 text-sm">{institution}</p>
          )}
        </div>
      </div>
      {description && (
        <div className="p-4">
          <p className="text-gray-600">{description}</p>
        </div>
      )}
    </Card>
  );
};

export default SpeakerCard;