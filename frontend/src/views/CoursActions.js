import React, { useState, useEffect } from 'react';

import Onglets from '../components/Onglets';

// impport du tableau
import TableAction from '../components/TableAction';

// import des fonctions pour recuperer les donnees a inserer dans le tableau
import ActionData from '../data/ActionData';

function CoursActions () {
  
  const [airLiquideData, setAirLiquideData] = useState([]);

  useEffect(() => {
    const actionData = new ActionData();
    actionData.getAirLiquideData().then(data => {
      setAirLiquideData(data);
    });
  }, []);

  let widthTab = 100/3;

  return (
    <section>
      <h1>Cours Actions</h1>
      <article>
        <Onglets pageName="coursActions" width={widthTab}/>
        <div>
          <div>
            <TableAction actionTab={airLiquideData} />
          </div>
        </div>
      </article>
    </section>
  );
};

export default CoursActions;