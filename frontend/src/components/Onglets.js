import React from 'react';

import dataOnglet from '../data/onglets';

import '../styles/onglet.css';

function Onglets (props) {

  let onglets = '';
  if (props.pageName === 'coursActions')
    onglets = dataOnglet.coursActions;
  else if (props.pageName === 'parametres')
    onglets = dataOnglet.parametres;

  let ongletList = onglets.map(onglet => <div className="onglet" key={onglet} style={{width:props.widthTab + '%'}}>{onglet}</div>);

  return (
    <div className="navigationOnglets">
      {ongletList}
    </div>
  );
};
export default Onglets;