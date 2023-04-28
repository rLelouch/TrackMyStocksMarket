import React, { useState, useEffect } from 'react';

// import courbe
import Chart from '../components/Chart';

// import du tableau
import TableAction from '../components/TableAction';

// import des fonctions pour recuperer les donnees a inserer dans le tableau
import ActionData from '../data/ActionData';

function CoursActions () {
  
  const [ETHData, setETHData] = useState([]);

  useEffect(() => {
    const actionData = new ActionData();
    actionData.getETHData().then(data => {
      setETHData(data);
    });
  }, []);

  return (
    <div>
      <Chart actionTab={ETHData} />
      <TableAction actionTab={ETHData} />
    </div>
  );
};

export default CoursActions;