import React from 'react';

//import './character.css';

export default function Character({name}) {
  return (
    <div className="App">
      <section>
          {name}
      </section>
    </div>
  );
}