import React from 'react';
import GridItem from './GridItem.jsx';
import '../css/GridRow.css';

const GridRow = ({ row }) => {
  return (
    <div id='gridrow'>
      {row.map((item) => (
        <GridItem item={item} />
      ))}
    </div>
  );
};

export default GridRow;
