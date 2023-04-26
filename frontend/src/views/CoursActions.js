import React from 'react';

import Onglets from '../components/Onglets';

function CoursActions () {

  let widthTab = 100/3;

  return (
    <section>
      <h1>Cours Actions</h1>
      <article>
        <Onglets pageName="coursActions" width={widthTab}/>
        <div>
          <div>

          </div>
        </div>
      </article>
    </section>
  );
};

export default CoursActions;