import React from 'react';
import Box from '@mui/material/Box';
import { VictoryChart, VictoryLine, VictoryAxis, VictoryScatter, VictoryTooltip } from 'victory';

function Chart(props) {

  // on recupere le tableau avec le cours des actions en bourse
  const actionTab = props.actionTab;

  // on met le tableau des action sous la forme {x: , y: } pour pouvoir tracer la courbe
  const processedData = actionTab.map(([date, value]) => ({ x: new Date(date), y: value }));
  
  return (
    <Box sx={{ minHeight: 300, height: 500 }}>
      <VictoryChart>
        <VictoryAxis 
            tickFormat={(date) => new Date(date).toISOString().split('T')[0]}
            style={{
            tickLabels: { fontSize: 8, padding: 5 }
            }}
            axisLine={{ strokeWidth: 2 }}
            axisEnd={{
                arrow: {
                    length: 10,
                    width: 8,
                    fill: 'black'
                }
            }}
        />
        <VictoryAxis dependentAxis
            axisLine={{ strokeWidth: 2 }}
            axisEnd={{
                arrow: {
                    length: 10,
                    width: 8,
                    fill: 'black'
                }
            }}
        />
        <VictoryLine data={processedData} />
        <VictoryScatter
            data={processedData}
            size={2}
            labels={({ datum }) => `${datum.x.toISOString().split('T')[0]} : ${datum.y}`}
            labelComponent={<VictoryTooltip />}
        />
      </VictoryChart>
    </Box>
  );
}

export default Chart;