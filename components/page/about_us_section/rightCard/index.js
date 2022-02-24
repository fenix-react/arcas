import React from 'react';
import { Orange, Style } from './style';

const Card = props => {
  return (
    <Style {...props}>
      <div className='orange'></div>
      <div className='black'></div>
    </Style>
  );
};

export default Card;
