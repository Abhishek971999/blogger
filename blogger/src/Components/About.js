import React from 'react';
import { Link } from 'react-router-dom';
import Blogging from '../blogging.png';
function About() {
  return (
    <div className='App container'>
      <h1 className='display-4 text-center'>
        Welcome to Blogger, where words matter.
      </h1>
      <div className='text-center'>
        <img src={Blogging} height='400px' />
      </div>
      <h3 className='display-4 text-center'>
        Ideas and perspectives you won’t find anywhere else.
      </h3>
      <h3 className='text-center text-muted mb-4'>
        Blogger taps into the brains of the world’s most insightful writers,
        thinkers, and storytellers to bring you the smartest takes on topics
        that matter. So whatever your interest, you can always find fresh
        thinking and unique perspectives.
      </h3>
    </div>
  );
}

export default About;
