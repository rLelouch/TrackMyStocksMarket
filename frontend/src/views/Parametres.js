import React from 'react';

import Onglets from '../components/Onglets';

function Parametres () {

  let widthTab = 100/2;

  return (
    <section>
    <h1>Paramètres</h1>
    <article>
      <Onglets pageName="parametres" width={widthTab}/>
    </article>
    </section>
  );
};

export default Parametres;