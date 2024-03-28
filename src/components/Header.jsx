import React, { useState } from 'react';

function Header() {
  const [isOriginalTitle, setIsOriginalTitle] = useState(true);

  const toggleTitle = () => setIsOriginalTitle(!isOriginalTitle);

  return (
    <header
      onClick={toggleTitle}
      style={{
        cursor: 'pointer',
        textAlign: 'center',
      }}
    >
      <h1>{isOriginalTitle ? 'Gallery of Horns' : 'Explore the Horned Creatures'}</h1>
    </header>
  );
}

export default Header;
