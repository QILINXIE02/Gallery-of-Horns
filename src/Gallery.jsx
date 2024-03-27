import React from 'react';
import HornedBeast from './HornedBeast';

function Gallery({ beasts, onBeastClick }) {
  return (
    <div>
      {beasts.map(beast => (
        <HornedBeast 
          key={beast._id} 
          title={beast.title} 
          imageUrl={beast.image_url} 
          description={beast.description} 
          onClick={() => onBeastClick(beast)} 
        />
      ))}
    </div>
  );
}

export default Gallery;


