import React, { useState, useEffect } from 'react';

// import courbe
import Chart from '../components/Chart';

// import du tableau
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

  return (
      <div>
        <Chart actionTab={airLiquideData} />
        <TableAction actionTab={airLiquideData} />
      </div>
  );
};

export default CoursActions;