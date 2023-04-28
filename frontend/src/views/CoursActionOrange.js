import React, { useState, useEffect } from 'react';

// import courbe
import Chart from '../components/Chart';

// import du tableau
import TableAction from '../components/TableAction';

// import des fonctions pour recuperer les donnees a inserer dans le tableau
import ActionData from '../data/ActionData';

function CoursActions () {
  
  const [orangeData, setOrangeData] = useState([]);

  useEffect(() => {
    const actionData = new ActionData();
    actionData.getOrangeData().then(data => {
      setOrangeData(data);
    });
  }, []);

  return (
      <div>
        <Chart actionTab={orangeData} />
        <TableAction actionTab={orangeData} />
      </div>
  );
};

export default CoursActions;