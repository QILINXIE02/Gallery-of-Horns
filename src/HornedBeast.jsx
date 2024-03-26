// HornedBeast.jsx
import React from 'react';

function HornedBeast({ title, imageUrl, description }) {
  return (
    <div>
      <h2>{title}</h2>
      <img src={`https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80} alt={title} title={title} `}/>
      <p>{description}</p>
    </div>
  );
}

export default HornedBeast;
