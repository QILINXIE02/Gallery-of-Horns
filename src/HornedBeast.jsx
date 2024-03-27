import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

function HornedBeast(props) {
  const [favorites, setFavorites] = useState(0);

  const handleFavoriteClick = () => {
    setFavorites(favorites + 1);
  };

  return (
    <div>
      <h2>{props.title}</h2>
      <img src={props.imageUrl} alt={props.title} title={props.title} />
      <p>{props.description}</p>
      <Button variant="outline-danger" onClick={handleFavoriteClick}>
        Favorite <span role="img" aria-label="heart">❤️</span> {favorites}
      </Button>
    </div>
  );
}

export default HornedBeast;
