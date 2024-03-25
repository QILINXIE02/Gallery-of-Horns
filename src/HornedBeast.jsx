// HornedBeast.jsx
import React from 'react';

function HornedBeast({ title, imageUrl, description }) {
  return (
    <div>
      <h2>{title}</h2>
      <img src={`http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg} alt={title} title={title} `}/>
      <p>{description}</p>
    </div>
  );
}

export default HornedBeast;
