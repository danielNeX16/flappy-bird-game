import React from "react";
import pipeImage from './assets/pipe.png';
import pipeTopImage from './assets/pipe-top.png';

const Pipe: React.FC<{ x: number; gap: number; height: number }> = ({ x, gap, height }) => {
  return (
    <>
      {/* Top Pipe */}
      <div
        style={{
          position: 'absolute',
          left: x,
          top: 0,
          width: '50px',
          height: height,
          backgroundImage: `url(${pipeTopImage})`,
          backgroundSize: 'cover',
        }}
      />
      {/* Bottom Pipe */}
      <div
        style={{
          position: 'absolute',
          left: x,
          top: height + gap,
          width: '50px',
          height: window.innerHeight - height - gap,
          backgroundImage: `url(${pipeImage})`,
          backgroundSize: 'cover',
        }}
      />
    </>
  );
};

export default Pipe;
