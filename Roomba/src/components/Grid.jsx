import React from 'react';
import GridRow from './GridRow.jsx';

const Grid = ({ grid }) => {
  return (
    <div id='grid'>
      {grid.map((row) => (
        <GridRow row={row} />
      ))}
    </div>
  );
};

export default Grid;
