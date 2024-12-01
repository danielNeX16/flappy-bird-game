import React from "react";
import birdImage from './assets/bird.png';

const Bird: React.FC<{ top: number }> = ({ top }) => {
  return (
    <img src={birdImage} alt="Bird" style={{ position: 'absolute', top: top, left: '20px', width: '40px', height: '40px' }} />
  );
};

export default Bird;
