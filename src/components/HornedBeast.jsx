import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';

function HornedBeast({ title, imageUrl, description, onClick }) {
  const [favorites, setFavorites] = useState(0);

  const handleFavoriteClick = (e) => {
    e.stopPropagation(); 
    setFavorites(favorites + 1);
  };

  return (
    <Card style={{ width: '18rem', margin: '10px', display: 'inline-block' }} onClick={onClick}>
      <Card.Img variant="top" src={imageUrl} alt={`The beast: ${title}`} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary" onClick={handleFavoriteClick}>
          ❤️ {favorites}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default HornedBeast;
