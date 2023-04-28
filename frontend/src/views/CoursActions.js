import React, { useState, lazy, Suspense } from 'react';
import {Box, Tabs, Tab}  from '@mui/material';

// import des differentes vue pour les tab
const CoursActionAirliquide = lazy(() => import('./CoursActionAirLiquide'));
const CoursActionOrange = lazy(() => import('./CoursActionOrange'));
const CoursActionETH = lazy(() => import('./CoursActionETH'));

function TabPanel(props) {
  const { value, index, component: Component, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
            <Suspense fallback={<div>Loading...</div>}>
              <Component />
            </Suspense>
        </Box>
      )}
    </div>
  );
}

function CoursActions() {

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section>
      <h1>Cours Actions</h1>
      <Tabs value={value} onChange={handleChange}>
        <Tab label="Air Liquide" />
        <Tab label="Orange" />
        <Tab label="ETH" />
      </Tabs>
      <TabPanel value={value} index={0} component={CoursActionAirliquide} />
      <TabPanel value={value} index={1} component={CoursActionOrange} />
      <TabPanel value={value} index={2} component={CoursActionETH} />
    </section>
  );
}

export default CoursActions;