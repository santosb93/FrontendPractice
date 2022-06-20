import React from 'react';
import '../css/GridItem.css';

const GridItem = ({ item }) => {
  return <div id='item'>{item === 'X' ? 'X' : ''}</div>;
};

export default GridItem;
