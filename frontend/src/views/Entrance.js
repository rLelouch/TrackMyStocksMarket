import React from 'react';

import Button from '../components/Button';

function Entrance () {

  const coutinuer = () => {
    window.location.href = '/home';
  }

  return (
    <section>
      <div className="header">
        <h3>"Track My Stocks Market</h3>
      </div>
      <article>
        <p>
          Bienvenue<br/>
          <span className="txt">Dans l'appli pour suivre tes actions journalières</span>
        </p>
        <Button handleClick={() => coutinuer()} textButton="Continuer"/>
      </article>
    </section>
  );
};

export default Entrance;