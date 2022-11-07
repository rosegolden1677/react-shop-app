import React from 'react';
import NavBar from '../NavBar/NavBar';
import './HomeContainer.css';

const HomeContainer = () => {
  return (
    <>
      <NavBar />

      <section className='container-background'>
        <div className='image'></div>
        
        <article className='home-container'>
          <h1 className='title'>make your party a great one</h1>

          <div className='buttons'>
            <button>shop party sets</button>
            <button>shop individual ballons</button>
          </div>
        </article>
      </section>
    </>
  );
}

export default HomeContainer;